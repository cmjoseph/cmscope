"use client";
import { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import { Josefin_Sans, Anta } from "next/font/google";
import { usePathname  } from "next/navigation";
import styles from "../_assets/scss/slider.module.scss";
import Image from "next/image";
import Link from "next/link";
import Button from "../_partials/button";
import 'swiper/scss';
import 'swiper/scss/effect-fade';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const jobold = Josefin_Sans({
	weight: '700',
	subsets: ["latin"],
});

const toSlug = (str: string) => {
    return str
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
};

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
                            <Link href={`/reviews/${toSlug(review.title)}`}>
                                <Image
                                    src={review.poster}
                                    width={300}
                                    height={400}
                                    alt={review.title}
                                    priority={true}
                                    style={{ width: "300", height: "auto" }}
                                    className={styles.poster}
                                />
                            </Link>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.right_top}>
                                <h3>{review.title}</h3>
                                <span className={styles.year}>{review.year}</span>
                                <p className={styles.director}>{review.director}</p>
                            </div>
                            <div className={`${styles.ratebox} ${styles.great}`}>
                                <span className={styles.rate}>{review.rate}</span>
                            </div>
                            <div className={styles.right_bottom}>
                                <Button url={`/reviews/${toSlug(review.title)}`} text="Read Review" external={false} />
                            </div>
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
