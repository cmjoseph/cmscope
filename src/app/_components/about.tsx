"use client";
import styles from "../_assets/scss/about.module.scss";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaSquareGithub } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const about     = useRef<HTMLDivElement>(null);
    const portrait  = useRef<HTMLDivElement[]>([]);
    const bio       = useRef<HTMLDivElement[]>([]);
    const overlay   = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        gsap.from(overlay.current, {
            scrollTrigger: {
                trigger: overlay.current,
                start: "top 60%",
                toggleClass: styles.scroll_active,
                scrub: true
            },
        });
        gsap.from(portrait.current, {
            scrollTrigger: {
                trigger: about.current,
                start: "top 80%",
                end: "bottom 60%",
                scrub: true
            },
            opacity: 0,
            x: -30,
            duration: 1,
            ease: 'power3.out',
        });
        gsap.from(bio.current, {
            scrollTrigger: {
                trigger: about.current,
                start: "top 80%",
                end: "bottom 60%",
                scrub: true
            },
            opacity: 0,
            x: 30,
            duration: 1,
            ease: 'power3.out',
        });
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className={styles.about} ref={about}>
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                <h2>About Me</h2>
                <div className={styles.wrapper} ref={(el: any) => { if (overlay.current) {(overlay.current) = el} }}>
                    <div className={styles.portrait}>
                        <img ref={(el: any) => { if (portrait.current) {(portrait.current) = el} }} className={styles.picture} src="/portrait.jpg" alt="Claude-Marc Joseph" />
                    </div>
                    <div className={styles.bio} ref={(el: any) => { if (bio.current) {(bio.current) = el} }}>
                        <div className={styles.inner_bio}>
                            <div className={styles.name}>
                                Claude-Marc Joseph
                                <span className={styles.role}>Movie critic & Senior Web developer</span>
                            </div>
                            <div className={styles.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus molestias unde accusantium illo ullam quaerat praesentium dolorum. Excepturi dolorum eaque, ex cumque aut nulla voluptatibus doloremque, obcaecati est voluptatum quaerat?</div>
                            <div className={styles.informations}>
                                <div className={styles.favorites}>
                                    <h3>Favorites movies</h3>
                                    <div className={styles.inner}>
                                        <ul className={styles.movies}>
                                            <li>Fight Club</li>
                                            <li>Fight Club</li>
                                            <li>Fight Club</li>
                                            <li>Fight Club</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className={styles.technical}>
                                    <h3>Technical skills</h3>
                                    <div className={styles.inner}>
                                        <ul className={styles.skills}>
                                            <li>Fight Club</li>
                                            <li>Fight Club</li>
                                            <li>Fight Club</li>
                                            <li>Fight Club</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.socials}>
                                <h3>Socials</h3>
                                <div className={styles.inner}>
                                    <Link className="facebook" href="http://www.facebook.com" target="_blank"><FaFacebookSquare /></Link>
                                    <Link className="x" href="http://www.x.com" target="_blank"><FaXTwitter /></Link>
                                    <Link className="instagram" href="http://www.instagram.com" target="_blank"><GrInstagram /></Link>
                                    <Link className={styles.github} href="https://github.com/cmjoseph" target="_blank"><FaSquareGithub /></Link>
                                    <Link className={styles.email} href="mailto:cmarcjoseph@gmail.com" target="_blank"><AiOutlineMail /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
