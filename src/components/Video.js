
// import { Player, Video, Ui, Spinner } from '@vime/react'
import Player from '@vime/react/dist/cjs/components/Player'
import Video from '@vime/react/dist/cjs/components/Video'
import Ui from '@vime/react/dist/cjs/components/Ui'
import Spinner from '@vime/react/dist/cjs/components/Spinner'

import PropTypes from 'prop-types'

export const gcd = (a, b) => {
    return b ? gcd(b, a % b) : a
}

const aspectRatio = (width, height) => {
    const divisor = gcd(width, height)
    return `${width / divisor}:${height / divisor}`
}

const VideoCmp = ({
    poster,
    src,
    playing,
    controls,
    width,
    height,
    muted,
    volume,
    loop,
    autoplay,
    playsinline,
    withSpinner,
    preload,
}) => {
    console.log(src)
    return (
        <Player
            aspectRatio={aspectRatio(width, height)}
            controls={controls}
            autoplay={autoplay}
            loop={loop}
            muted={muted}
            paused={!playing}
            playsinline={playsinline}
            volume={volume}
        >
            <Video poster={poster} preload={preload}>
                <source src={src} type="video/mp4" />
            </Video>
            <Ui>
                {withSpinner ? <Spinner /> : null}
            </Ui>
        </Player>
    )
}

VideoCmp.propTypes = {
    src: PropTypes.string.isRequired,
    poster: PropTypes.string,
    playing: PropTypes.bool,
    controls: PropTypes.bool,
    width: PropTypes.number,
    height: PropTypes.number,
    muted: PropTypes.bool,
    volume: PropTypes.number,
    loop: PropTypes.bool,
    autoplay: PropTypes.bool,
    playsinline: PropTypes.bool,
    withSpinner: PropTypes.bool,
    preload: PropTypes.string,
}

VideoCmp.defaultProps = {
    playing: false,
    controls: false,
    width: 300,
    height: 300,
    muted: false,
    volume: 50,
    loop: false,
    autoplay: false,
    playsinline: false,
    withSpinner: true,
    poster: undefined,
    preload: 'metadata',
}

export default VideoCmp
