'use client'

import * as prismic from "@prismicio/client";
import Image from "next/image";

import '@/app/styles/Header/navbar.scss'

export const NavBar = ({ homeContent }: any) => {

    const getLocation = (): string | undefined => {
        if (typeof window !== "undefined") {
            return window.location.pathname;
        }
    }

    const currentLocation = getLocation();

    const isCurrentLocation = (url: string, currentLocation: string | undefined) => {

        if (url === currentLocation) {
            // console.log("navbar__item-active")
            return "navbar__item-active"
        } else {
            // console.log("navbar__item")
            return "navbar__item"
        }
    }

    return (
        <nav className="navbar__container">
            <div className="navbar__left-side">
                {homeContent.header_left_navbar.map((item: any, index: number) => (
                    console.log(item.title[0].text, typeof isCurrentLocation(item.url[0].text, currentLocation)),
                    <div key={index} className={`${isCurrentLocation(item.url[0].text, currentLocation)}`}>
                        <a href={item.url[0].text}>{prismic.asText(item.title)}</a>
                    </div>
                ))}
            </div>
            <div className="navbar__logo">
                {/* <img src={homeContent.header_logo.url} alt={homeContent.header_logo.alt} /> */}
                <Image src={homeContent.header_logo.url ?? ""} alt={homeContent.header_logo.alt ?? ""} width={75} height={75} />
            </div>
            <div className="navbar__right-side">
                {homeContent.header_right_navbar.map((item: any, index: number) => (
                    <div key={index} className={isCurrentLocation(item.url[0].text, currentLocation)}>
                        <a href={item.url[0].text}>{prismic.asText(item.title)}</a>
                    </div>
                ))}
            </div>
        </nav>
    )
}