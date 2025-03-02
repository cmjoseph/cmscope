"use client";
import styles from "../_assets/scss/more.module.scss";

export default function More({reviews}: any) {
    return (
        <div className={styles.more}>
            <div className={styles.container}>
                 <h2>More Reviews</h2>
                <div className={styles.grid}>
                    <div className={styles.grid_item}>
                        <div className={styles.poster}>
                            <div className={styles.overlay}>
                                <h3>Fight Club</h3>
                            </div>
                            <img src="/images/movies/fightclub/poster.jpg" alt="" />
                            <div className={styles.rate}>94%</div>
                        </div>
                        <h4>Fight Club</h4>
                    </div>
                    <div className={styles.grid_item}>
                        <div className={styles.poster}>
                            <div className={styles.overlay}>
                                <h3>Fight Club</h3>
                            </div>
                            <img src="/images/movies/fightclub/poster.jpg" alt="" />
                            <div className={styles.rate}>94%</div>
                        </div>
                        <h4>Fight Club</h4>
                    </div>
                    <div className={styles.grid_item}>
                        <div className={styles.poster}>
                            <div className={styles.overlay}>
                                <h3>Fight Club</h3>
                            </div>
                            <img src="/images/movies/fightclub/poster.jpg" alt="" />
                            <div className={styles.rate}>94%</div>
                        </div>
                        <h4>Fight Club</h4>
                    </div>
                    <div className={styles.grid_item}>
                        <div className={styles.poster}>
                            <div className={styles.overlay}>
                                <h3>Fight Club</h3>
                            </div>
                            <img src="/images/movies/fightclub/poster.jpg" alt="" />
                            <div className={styles.rate}>94%</div>
                        </div>
                        <h4>Fight Club</h4>
                    </div>
                    <div className={styles.grid_item}>
                        <div className={styles.poster}>
                            <div className={styles.overlay}>
                                <h3>Fight Club</h3>
                            </div>
                            <img src="/images/movies/fightclub/poster.jpg" alt="" />
                            <div className={styles.rate}>100%</div>
                        </div>
                        <h4>Fight Club</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
