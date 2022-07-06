
import PropTypes from 'prop-types'
import GenerateIcon from './GenerateIcon'

const TiktokIcon = ({ size }) => {
    const body = () => {
        return (
            <>
                <rect width="20" height="20" rx="5" fill="black"/>
                <g clipPath="url(#clip0_456:5328)">
                    <path
                        d="M20.0005 10C20.0005 15.5226 15.5231 20 10 20H9.98127C4.46701 19.9896 0 15.5153 0 10C0 4.48475 4.46701 0.00985659 9.98127 0H10C15.5231 0 20.0005 4.47588 20.0005 10Z"
                        fill="black"
                    />
                    <path
                        d="M9.98127 0V20C4.467 19.9896 0 15.5153 0 10C0 4.48475 4.467 0.00985659 9.98127 0Z"
                        fill="#0C0C0C"
                    />
                    <path
                        d="M15.4413 7.23178L15.429 9.28047C15.0298 9.27559 14.6326 9.2223 14.2462 9.12178C13.6501 8.96606 13.0879 8.70157 12.5878 8.34163C12.5878 8.55108 12.5908 8.86354 12.5908 9.24351C12.5908 9.74915 12.5908 10.0365 12.5878 10.3415C12.579 12.2261 12.6258 12.5908 12.4602 13.336C12.4258 13.5157 12.3787 13.6927 12.3193 13.8657C12.0009 14.7528 11.307 15.4635 10.5998 15.8415C10.4024 15.9464 10.1953 16.0318 9.98127 16.0963C8.64472 16.5014 7.03859 16.1456 6.20965 15.1599L6.20423 15.154L6.19782 15.1456C5.49357 14.296 5.3398 12.9713 5.32502 12.6322C5.32502 12.5888 5.32206 12.5464 5.32206 12.5464C5.31121 12.0833 5.37784 11.6215 5.51919 11.1803C5.66212 10.724 6.13277 9.77133 7.18989 9.19275C7.84918 8.83759 8.60168 8.69359 9.34552 8.78025L9.32137 10.8536C9.27948 10.8427 8.26672 10.6027 7.60189 11.2927C6.99965 11.9176 7.03859 12.9244 7.46587 13.4946C7.48854 13.5252 7.51269 13.5548 7.53782 13.5824C7.77685 13.849 8.07994 13.949 8.28446 14.019C8.55566 14.1084 8.84029 14.1501 9.12572 14.1422C9.43149 14.1375 9.72894 14.0419 9.98029 13.8677C10.6752 13.3956 10.7688 12.5548 10.7723 12.507C10.7637 9.8004 10.7557 7.09379 10.7481 4.38717V4.38471L12.0507 4.36154H12.0719L12.2606 4.35809C12.3998 4.85898 12.6357 5.32777 12.955 5.73801C13.0556 5.86633 13.1643 5.98814 13.2803 6.10271C13.7186 6.52934 14.2452 6.85469 14.8228 7.05584H14.8268C15.0272 7.12907 15.2325 7.18787 15.4413 7.23178Z"
                        fill="#FD2854"
                    />
                    <path
                        d="M14.8524 8.15881H14.8485C14.147 8.27119 13.4289 8.21666 12.7524 7.99962C12.2801 7.84604 11.8367 7.61468 11.4405 7.31509C11.6781 8.75096 11.6781 10.2161 11.4405 11.652C11.1591 13.3394 10.9827 14.397 10.0409 15.0737C10.0212 15.088 10.001 15.1023 9.98078 15.1156C8.6802 15.9963 6.86314 15.5591 6.19733 15.1447L6.18747 15.1387L6.16874 15.1269C5.94928 14.9815 5.74342 14.8166 5.55369 14.6341C5.21358 14.3042 4.94218 13.9101 4.75516 13.4748C4.56814 13.0394 4.4692 12.5713 4.46405 12.0975C4.45139 11.6067 4.53286 11.1181 4.70405 10.6579C4.81494 10.3622 5.22695 9.31055 6.37475 8.67036C7.10972 8.26736 7.959 8.12362 8.78567 8.2623C8.78238 8.42658 8.77926 8.59086 8.7763 8.75513V8.75858L8.75708 9.79845C8.39735 9.71368 8.02548 9.69299 7.65857 9.73734C7.36287 9.77381 7.07308 9.80781 6.76507 10.0015C6.37058 10.2554 6.09138 10.6539 5.98738 11.1113C5.92157 11.3329 5.90807 11.5667 5.94796 11.7944C5.95978 11.8595 6.04652 12.3114 6.41121 12.6357C6.53393 12.7446 6.58617 12.749 6.76507 12.9161C6.92277 13.0639 6.9622 13.1349 7.1066 13.2576C7.1066 13.2576 7.14208 13.2877 7.20023 13.3301C7.20397 13.3333 7.20792 13.3363 7.21206 13.3389C7.29158 13.3971 7.37508 13.4496 7.46193 13.4961C7.82317 13.6854 8.46976 13.7056 8.94386 13.4754C9.59982 13.1566 9.95761 12.4233 9.95614 11.9876C9.94825 9.27999 9.9402 6.57256 9.93199 3.86528H9.97733L11.9891 3.85345C11.9876 4.01037 12.0094 4.16665 12.0536 4.31721C12.0585 4.33347 12.0635 4.34875 12.0689 4.36649C12.0743 4.38423 12.0778 4.39261 12.0822 4.40493C12.1134 4.48683 12.1495 4.56681 12.1901 4.64444L12.2182 4.70112V4.70556C12.2178 4.70683 12.2178 4.70822 12.2182 4.7095L12.2227 4.71886L12.2271 4.72773C12.2298 4.73347 12.2327 4.73906 12.236 4.74449C12.2389 4.7509 12.2424 4.7573 12.2458 4.76371C12.2645 4.79969 12.2902 4.847 12.3193 4.90022C12.3375 4.93324 12.3567 4.96626 12.3764 4.99879L12.3976 5.03378C12.408 5.05152 12.4188 5.06926 12.4296 5.08651L12.4691 5.1491C12.6223 5.39108 12.8914 5.79865 13.2729 6.10667C13.8091 6.53937 14.4251 6.66159 14.8115 6.69806C14.814 6.8193 14.8169 6.94054 14.8194 7.06177C14.8338 7.42778 14.8448 7.79346 14.8524 8.15881Z"
                        fill="#24F6FA"
                    />
                    <path
                        d="M14.8589 8.73787C13.8434 8.77512 12.8463 8.45938 12.0374 7.84437V12.1813C12.0275 12.3474 11.8822 14.1792 10.2272 15.1875C10.1454 15.2368 10.0631 15.2826 9.98083 15.325C8.42398 16.1195 6.90261 15.497 6.7523 15.4325C6.60284 15.3836 6.45961 15.3174 6.32551 15.2353C6.28362 15.2092 6.24272 15.1821 6.20378 15.154L6.16879 15.1279C5.15356 14.3571 5.11167 12.787 5.10527 12.5553C5.09442 12.0922 5.16105 11.6304 5.3024 11.1892C5.46996 10.6545 5.97018 9.7531 6.97309 9.20162C7.52648 8.90047 8.14839 8.74766 8.77832 8.75808V8.76153C8.77011 9.28228 8.7619 9.8032 8.75368 10.3243C8.64772 10.2957 7.99817 10.1321 7.36341 10.5318C6.96893 10.7857 6.68972 11.1842 6.58573 11.6416C6.5235 11.8636 6.51005 12.0965 6.5463 12.3242C6.60258 12.6053 6.73524 12.8656 6.92972 13.0762C7.01148 13.1704 7.10282 13.2558 7.20226 13.331C7.20599 13.3343 7.20994 13.3372 7.21408 13.3399C7.29217 13.4002 7.37584 13.4528 7.46395 13.4971L7.4669 13.4996C7.64302 13.7655 7.89705 13.9705 8.1942 14.0864C8.49135 14.2024 8.81708 14.2236 9.12675 14.1472C9.27103 14.1171 9.41118 14.0697 9.54418 14.0062C9.70527 13.9296 9.85289 13.8274 9.98132 13.7036C10.4801 13.2241 10.553 12.5607 10.5565 12.5208L10.5348 4.39456L10.7516 4.39013L12.0542 4.3645H12.0729C12.0778 4.37732 12.0832 4.39013 12.0887 4.40294C12.1187 4.47539 12.1547 4.55572 12.1966 4.64246L12.2247 4.69913V4.70357C12.2242 4.70484 12.2242 4.70624 12.2247 4.70751L12.2291 4.71688L12.2335 4.72575C12.2362 4.73148 12.2392 4.73707 12.2424 4.7425C12.2454 4.74891 12.2488 4.75532 12.2523 4.76172C12.2749 4.80608 12.3016 4.85191 12.3257 4.89824C12.3439 4.93126 12.3632 4.96428 12.3829 4.9968L12.4041 5.03179L12.4361 5.08453L12.4755 5.14712C12.701 5.4997 12.9711 5.82157 13.2793 6.10468C13.7291 6.51646 14.2524 6.83981 14.8219 7.05781H14.8258C14.8322 7.423 14.8386 7.78917 14.8446 8.15436L14.8589 8.73787Z"
                        fill="white"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_456:5328">
                        <rect width="20" height="20" rx="5" fill="white"/>
                    </clipPath>
                </defs>
            </>
        )
    }

    return (
        <GenerateIcon
            viewBox={'0 0 20 20'}
            size={size}
            animate={false}
            cmp={body()}
        />
    )
}

TiktokIcon.propTypes = {
    size: PropTypes.number,
}

TiktokIcon.defaultProps = {
    size: 25,
}

export default TiktokIcon
