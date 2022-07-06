
import { createHookApp } from 'lib/hooks'
import AWS from 'aws-sdk'

require('es6-promise').polyfill()
require('isomorphic-fetch')

const sessionDuration = '10y'

const s3 = new AWS.S3({
    region: process.env.AWS_S3_REGION,
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
})

export default createHookApp({
    trace: process.env.NODE_ENV === 'development',
    services: [
        require('./services/service-env'),
        require('./services/service-logger'),
        require('./services/service-express'),
        require('./services/service-express-graphql'),
        require('./services/service-express-cookies'),
        require('./services/service-express-ssr'),
    ],
    features: [
        [ '$EXPRESS_ROUTE', ({ registerRoute }) => {
            registerRoute.get('/video/:vendor/:vendorId/:videoId', async (req, res, next) => {
                const s3Params = {
                    Key: `${req.params.vendor}/${req.params.vendorId}/${req.params.videoId}`,
                    Bucket: process.env.AWS_S3_BUCKET,
                }
                const headRes = await s3.headObject(s3Params).promise()
                const fileSize = Number(headRes.ContentLength)
                const range = req.headers.range

                if (range) {
                    const parts = range.replace(/bytes=/, '').split('-')
                    const start = parseInt(parts[0], 10)
                    const end = parts[1]
                        ? parseInt(parts[1], 10)
                        : fileSize - 1

                    // const chunksize = (end - start) + 1
                    const chunksize = (end - start) < 256 * 1000
                        ? (end - start)
                        : 256 * 1000

                    const head = {
                        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
                        'Accept-Ranges': 'bytes',
                        'Content-Length': chunksize,
                        'Content-Type': 'video/mp4',
                        // 'Cache-Control': 'no-cache',
                    }

                    const stream = s3.getObject({
                        ...s3Params,
                        Range: `bytes=${start}-${end}`,
                    }).createReadStream()

                    res.writeHead(206, head)
                    stream.pipe(res)
                } else {
                    const stream = s3.getObject(s3Params).createReadStream()

                    const head = {
                        'Content-Length': fileSize,
                        'Content-Type': 'video/mp4',
                    }
                    res.writeHead(200, head)
                    stream.pipe(res)
                }
            })
        } ],
    ],
    settings: async ({ setConfig, getEnv }) => {
        setConfig('service.express-cookies', {
            scope: getEnv('REACT_APP_ID'),
            httpOnly: true,
            duration: sessionDuration,
        })

        // setConfig('service.jwt', {
        //     secret: getEnv('JWT_SECRET'),
        //     duration: sessionDuration,
        // })

        // setConfig('service.hash', {
        //     rounds: getEnv('HASH_ROUNDS'),
        // })

        // setConfig('service.postgres.connections', [
        //     {
        //         connectionName: 'default',
        //         connectionString: getEnv('PG_STRING'),
        //         schemas: [],
        //         enablePubSub: true,
        //     },
        // ])
    },
})
