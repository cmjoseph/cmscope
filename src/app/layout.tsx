import "./_assets/scss/_reset.scss";
import "./_assets/scss/_globals.scss";
import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/header";
import Footer from "./_components/footer";
import { ReactLenis, useLenis } from 'lenis/react'

const joreg = Josefin_Sans({
	weight: '400',
	subsets: ["latin"],
});
  
export const metadata: Metadata = {
	title: "CMSCOPE - Home",
	description: "Movie Critic Extraordinaire",
};


export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
	<html lang="en">
		<body className={`${joreg.className}`}>
			<Header />
			<main>
				<ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
					{children}  
				</ReactLenis>
			</main>
			<Footer />
		</body>
	</html>
  );
}
