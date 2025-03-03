"use client";
import styles from "../_assets/scss/movie.module.scss";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { toSlug } from "../_hooks/slug";

gsap.registerPlugin(ScrollTrigger);

export default function Movie({movies}: any) {
    const container     = useRef<HTMLDivElement>(null);
    const reviews       = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        if (reviews.current.length === 0) return;
        gsap.from(reviews.current, {
            opacity: 0,
            y: 60,
            duration: 1,
            stagger: 0.5,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
                end: "top 20%",
                scrub: true,
            },
        });
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className={styles.grid} ref={container}>
            {movies.map((movie: any, index: any) => (
                <Link key={index} href={`/reviews/${toSlug(movie.title)}`} className={styles.grid_item} ref={(el: any) => { if (reviews.current) {(reviews.current[index] = el)} }}>
                    <div className={styles.poster}>
                        <div className={styles.overlay}>
                            <h3>{movie.title}</h3>
                        </div>
                        <img src={movie.poster} alt={movie.title} />
                        <div className={styles.rate}>{movie.rate}</div>
                    </div>
                    <h4>{movie.title}</h4>
                </Link>
            ))}
        </div>
    )
};