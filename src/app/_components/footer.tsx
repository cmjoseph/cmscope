"use client";
import styles from "../_assets/scss/footer.module.scss";
import variables from '../_assets/scss/_variables.module.scss';
import Link from "next/link";
import { usePathname  } from "next/navigation";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";

export default function Footer() {
    const pathname = usePathname();
    return (
        <footer className={styles.footer}>
            <div className={styles.nav}>
                <div className={styles.nav__logo}>
                    <Link href="/" style={{ color: variables.primaryColor }}>Logo</Link>
                </div>
                <div className={styles.nav__menu}>
                    <div className={styles.nav__menu_left}> 
                        <Link className={pathname == "/reviews" ? styles.active : ""} href="/reviews">Reviews</Link>
                        <Link className={pathname == "/news" ? styles.active : ""} href="/news">News</Link>
                        <Link className={pathname == "/about" ? styles.active : ""} href="/about">About</Link>
                    </div>
                    <div className={styles.nav__menu_right}> 
                        <Link className={pathname == "/contact" ? styles.active : ""} href="/contact">Contact</Link>
                        <Link className={pathname == "/policy" ? styles.active : ""} href="/policy">Policy</Link>
                        <Link className={pathname == "/sitemap" ? styles.active : ""} href="/sitemap">Site Map</Link>
                    </div>
                </div>
                <div className={styles.nav__socials}>
                    <Link href="http://www.facebook.com" target="_blank"><FaFacebookSquare /></Link>
                    <Link href="http://www.x.com" target="_blank"><FaXTwitter /></Link>
                    <Link href="http://www.instagram.com" target="_blank"><GrInstagram /></Link>
                </div>
            </div>
        </footer>
    );
}
