"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import Card from "../_partials/card";
import styles from "../_assets/scss/slider.module.scss";
import 'swiper/scss';
import 'swiper/scss/effect-fade';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import Image from "next/image";

export default function Slider({reviews}: any) {
    const slides = reviews.map((review: any, index: number) => {
        return (
            <SwiperSlide key={index}>
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
                <Card card={review}/>
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
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            className={styles.sliderhome}
            >
            {slides}
        </Swiper>
    );
}
