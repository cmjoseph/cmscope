"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Josefin_Sans } from "next/font/google";
import styles from "../_assets/scss/slider.module.scss";
import Image from "next/image";
import 'swiper/scss';
import 'swiper/scss/effect-fade';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const jobold = Josefin_Sans({
	weight: '700',
	subsets: ["latin"],
});

export default function Slider({reviews}: any) {
    const [activeIndex, setActiveIndex] = useState(0);
    const slides = reviews.map((review: any, index: number) => {
        return (
            <SwiperSlide key={index} className={activeIndex === index ? styles.active_slide : ""}>
                <div className={styles.overlay}></div>
                <Image
                    src={review.background}
                    width={1920}
                    height={1080}
                    alt={review.title}
                    priority={true}
                    style={{ width: "100%"}}
                    className={styles.background}
                />
                <div className={`${styles.card} ${jobold.className}`}>
                    <h2>Latest Reviews</h2>
                    <div className={styles.container}>
                        <div className={styles.left}>
                            <Image
                                src={review.poster}
                                width={200}
                                height={400}
                                alt={review.title}
                                priority={true}
                                style={{ width: "100%", height: "auto" }}
                            />
                        </div>
                        <div className={styles.right}>
                            <h3>{review.title}</h3>
                            <p className={styles.description}>{review.description}</p>
                            <div className={`${styles.circle}`}>
                                <span className={styles.rate}>{review.rate}</span>
                            </div>
                            <a className={styles.link} href={review.url}>Read Review</a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        )
    });
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            centeredSlides={true}
            effect={'fade'}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={{ clickable: true }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            modules={[EffectFade, Pagination, Autoplay]}
            className={styles.sliderhome}
            >
            {slides}
        </Swiper>
    );
}
