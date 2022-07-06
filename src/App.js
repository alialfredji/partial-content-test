
import Video from 'components/Video'
// import ReactPlayer from 'react-player'
import { useState } from 'react'

const videos = [
    'http://localhost:8080/video/tiktok/267414498150596608/7000947697633021185.mp4',
    'http://localhost:8080/video/tiktok/267414498150596608/7001313626455870721.mp4',
    'http://localhost:8080/video/tiktok/267414498150596608/7002141160277871873.mp4',
    'http://localhost:8080/video/tiktok/267414498150596608/7003230354697899265.mp4',
    'http://localhost:8080/video/tiktok/267414498150596608/7004325667693169922.mp4',
    'http://localhost:8080/video/tiktok/267414498150596608/7005880795231538434.mp4',
    'http://localhost:8080/video/tiktok/267414498150596608/7011795372016225538.mp4',
]

const App = () => {
    const [ video, setVideo ] = useState(0)
    // const [ src, setSrc ] = useState(videos[video])

    const setNextVideo = () => {
        setVideo(video + 1)
        // setSrc(videos[video + 1])
    }

    return (
        <>
            {videos.map((i, idx) => (
                <div key={i} style={{ display: idx === video ? 'block' : 'none' }}>
                    <Video
                        key={i}
                        src={i}
                        playing={idx === video}
                        // autoplay
                        loop
                        controls
                        muted={true}
                        width={window.innerWidth}
                        height={window.innerHeight - 100}
                    />
                </div>
            ))}
            <button onClick={setNextVideo}>next Video</button>
        </>
    )
}

export default App
