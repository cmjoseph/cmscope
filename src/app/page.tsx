import Image from "next/image";
import styles from "./_assets/scss/page.module.scss";
import Header from "./_components/header";
import Footer from "./_components/footer";
import Link from "next/link";

export default function Home() {
  return (
		<div className={styles.home}>
			<h1>Home</h1>
			<Image
				src="/images/placeholder01.webp"
				width={1920}
				height={1080}
				alt="Placeholder 01"
				priority={true}
				style={{ width: "100%", height: "auto" }}
			/>
		</div>
	);
}
