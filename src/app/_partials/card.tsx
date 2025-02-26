"use client";
import styles from "../_assets/scss/card.module.scss";
import Image from "next/image";
import { Josefin_Sans } from "next/font/google";

const jobold = Josefin_Sans({
	weight: '700',
	subsets: ["latin"],
});

// Movie card info on Home Slider
export default function Card({card}: any) {
    if (card)
    return (
        <div className={`${styles.card} ${jobold.className}`}>
            <h2>Latest Reviews</h2>
            <div className={styles.container}>
                <div className={styles.left}>
                    <Image
                        src={card.poster}
                        width={200}
                        height={400}
                        alt={card.title}
                        priority={true}
                        style={{ width: "100%", height: "auto" }}
                    />
                </div>
                <div className={styles.right}>
                    <h3>{card.title}</h3>
                    <p className={styles.description}>{card.description}</p>
                    <div className={`${styles.circle} horrible`}>
                        <span className={styles.rate}>{card.rate}</span>
                    </div>
                    <a className={styles.link} href={card.url}>Read Review</a>
                </div>
            </div>
        </div>
    );
}
