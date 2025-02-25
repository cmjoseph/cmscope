import Image from "next/image";
import styles from "./_assets/scss/page.module.scss";
import Header from "./_components/header";
import Footer from "./_components/footer";
import SliderHome from "./_components/slider";

export default function Home() {
	const reviews = [
		{  
			'background'    : '/images/movies/whiplash/background.jpg',
			'poster'        : '/images/movies/whiplash/poster.jpg',
			'title'         : 'Whiplash',
			'rate'          : '94%',
			'link'          : 'https://www.imdb.com/title/tt2582802/',
		},
		{  
			'background'    : '/images/movies/historyofviolence/background.jpg',
			'poster'        : '/images/movies/historyofviolence/poster.jpg',
			'title'         : 'History Of Violence',
			'rate'          : '88%',
			'link'          : 'https://www.imdb.com/title/tt0399146',
		},
	];
  	return (
		<SliderHome reviews={reviews}/>
	);
}
