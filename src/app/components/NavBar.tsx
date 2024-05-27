import * as prismic from "@prismicio/client";
import Image from "next/image";

export const NavBar = ({ homeContent }: any) => {
    return (
        <nav>
            <div className="navbar__left-side">
                {homeContent.header_left_navbar.map((item: any, index: number) => (
                    <a href="#" key={index}>{prismic.asText(item.title)}</a>
                ))}
            </div>
            <div className="navbar__logo">
                {/* <img src={homeContent.header_logo.url} alt={homeContent.header_logo.alt} /> */}
                <Image src={homeContent.header_logo.url ?? ""} alt={homeContent.header_logo.alt ?? ""} width={50} height={50} />
            </div>
            <div className="navbar__right-side">
                {homeContent.header_right_navbar.map((item: any, index: number) => (
                    <a href="#" key={index}>{prismic.asText(item.title)}</a>
                ))}
            </div>
        </nav>
    )
}