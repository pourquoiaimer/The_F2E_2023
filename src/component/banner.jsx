import gsap from "gsap"
import { useEffect } from "react"
function Banner() {
    useEffect(() => {
        // gsap.to(".first", { x: -2000, duration: 5, repeat: 0, ease: "none" })
        gsap.to(".second", { right: "2000px", duration: 10, repeat: 0, ease: "none" })

    }, [])

    return (

        <>
            <div id="banner">
                <div className="title">
                    <div className="info">從喵的眼中，看見台灣</div>
                    <div className="name">喵立翰 (Miao Li-Han)</div>
                </div>
                {/* <div className="news_ticker first">
                    為喵星人，護台灣！為喵星人，護台灣！為喵星人，護台灣！為喵星人，護台灣！為喵星人，護台灣！為喵星人，護台灣！為喵星人，護台灣！為喵星人，護台灣！為喵星人，護台灣！為喵星人，護台灣！為喵星人，護台灣！為喵星人，護台灣！為喵星人，護台灣！為喵星人，護台灣！為喵星人，護台灣！為喵星人，護台灣！
                </div> */}
                <div className="news_ticker second">
                    為喵星人，護台灣！為喵星人，護台灣！為喵星人，護台灣！為喵星人，護台灣！為喵星人，護台灣！為喵星人，護台灣！為喵星人，護台灣！為喵星人，護台灣！為喵星人，護台灣！為喵星人，護台灣！為喵星人，護台灣！為喵星人，護台灣！為喵星人，護台灣！為喵星人，護台灣！為喵星人，護台灣！為喵星人，護台灣！
                </div>
            </div>
        </>
    )
}

export default Banner
