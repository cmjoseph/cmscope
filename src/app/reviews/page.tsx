import styles from "../_assets/scss/page.module.scss";
import Image from "next/image";

export async function generateMetadata() {
    return {
        title: 'CMSCOPE - Reviews',
    };
}

export default function Page() {
    return (
        <div className={styles.reviews}>
            <h1>Reviews</h1>
            <Image
                src="/images/placeholder02.webp"
                width={1920}
                height={1080}
                alt="Placeholder 02"
                priority={true}
                style={{ width: "100%", height: "auto" }}
            />
        </div>
    )
}