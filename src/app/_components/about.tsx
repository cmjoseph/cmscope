"use client";
import styles from "../_assets/scss/about.module.scss";

export default function About() {
    return (
        <div className={styles.about}>
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                <h2>About Me</h2>
                <div className={styles.wrapper}>
                    <div className={styles.portrait}>
                        <img src="/portrait.jpg" alt="Claude-Marc Joseph" />
                    </div>
                    <div className={styles.bio}>
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
                                <ul>
                                    <li><a href="">Facebook</a></li>
                                    <li><a href="">X</a></li>
                                    <li><a href="">Instagram</a></li>
                                    <li><a href="">Email</a></li>
                                    <li><a href="">Github</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
