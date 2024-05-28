'use client'

import * as prismic from "@prismicio/client";
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import '@/app/styles/MainContent/main-news.scss'

export const MainNews = ({ homeContent }: any) => {
    return (
        <div className="main-news__container">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {homeContent.map((item: any, index: number) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="news__container" key={index}>
                                <div className="main-news__background">
                                    <Image src={item.image.url} alt={item.image.alt} width={600} height={700} />
                                </div>
                                <div className="main-news__content">
                                    <h1>{prismic.asText(item.title)}</h1>
                                    <p>{prismic.asText(item.description)}</p>
                                    {item.isfirstnews && <Image src={"/Vector.svg"} width={110} height={125} alt="arrow vector" className="main-news__arrow" />}
                                    {item.isbutton && <button>{prismic.asText(item.button_title)}</button>}
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>

    )
}