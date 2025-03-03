"use client";
import styles from "../_assets/scss/header.module.scss";
import variables from '../_assets/scss/_variables.module.scss';
import Link from "next/link";
import Image from "next/image";
import { usePathname  } from "next/navigation";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";

export default function Header() {
    const pathname = usePathname();
    return (
        <header className={styles.header}>
            <div className={styles.nav}>
                <div className={styles.nav__logo}>
                    <Link href="/" className={styles.logo} style={{ color: variables.primaryColor }}>
                        <Image
                            src='/svg/capture.svg'
                            width={40}
                            height={40}
                            alt='CineCM'
                            priority={true}
                            style={{ width: "100%"}}
                            className={styles.logo_svg}
                        />
                        <span className={styles.logo_name}>CINECM</span>
                    </Link>
                </div>
                <div className={styles.nav__menu}>
                    <Link className={pathname == "/reviews" ? styles.active : ""} href="/reviews">Reviews</Link>
                    <Link className={pathname == "/news" ? styles.active : ""} href="/news">News</Link>
                    <Link className={pathname == "/about" ? styles.active : ""} href="/about">About</Link>
                    <Link className={pathname == "/contact" ? styles.active : ""} href="/contact">Contact</Link>
                </div>
                <div className={styles.nav__socials}>
                    <Link href="http://www.facebook.com" target="_blank"><FaFacebookSquare /></Link>
                    <Link href="http://www.x.com" target="_blank"><FaXTwitter /></Link>
                    <Link href="http://www.instagram.com" target="_blank"><GrInstagram /></Link>
                    <Link href="#" onClick={()=> console.log('allo')}><FaSearch /></Link>
                </div>
            </div>
        </header>
    );
}
