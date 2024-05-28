'use client'

import * as prismic from "@prismicio/client";

import '@/app/styles/Schedule/schedule.scss'

export const Schedule = ({ homeContent, nextMatchData }: any) => {

    console.log(homeContent)

    const nextMatchRawDate = nextMatchData.date;
    const nextMatchDateObject = new Date(nextMatchRawDate);
    const nextMatchFormattedDate = nextMatchDateObject.toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: '2-digit' });

    return (
        <div className="schedule__container">
            {homeContent.map((item: any, index: number) => {

                const rawDate = item.primary.date;
                const dateObject = new Date(rawDate);
                const formattedDate = dateObject.toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: '2-digit' });

                return (
                    <div key={index} className="schedule__item">
                        <div className="schedule-item__header">
                            <h1>{prismic.asText(item.primary.day)}</h1>
                            <p>{prismic.asText(item.primary.category)}</p>
                        </div>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={item.primary.image.url} alt="img" />
                        <p id="schedule-date">{formattedDate}</p>
                        {item.primary.training_slots.map((slot: any, index: number) => (
                            <div className="schedule-slots__container" key={index}>
                                <p id="schedule-slots__title">{prismic.asText(slot.category)}</p>
                                <div className="schedule-slots__item">
                                    <p>{prismic.asText(slot.schedule)}</p>
                                    <p>{prismic.asText(slot.location)}</p>
                                </div>
                            </div>
                        ))}
                    </div>)
            })}
            <div className="schedule__next-match">
                <h1>{prismic.asText(nextMatchData.title)}</h1>
                <div>
                    <p>{nextMatchFormattedDate}</p>
                    <p>{prismic.asText(nextMatchData.location)}</p>
                </div>
            </div>
        </div>

    )
}