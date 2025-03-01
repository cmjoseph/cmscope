import styles from "./_assets/scss/page.module.scss";
import SliderHome from "./_components/slider";
import Upcoming from "./_components/upcoming";
import About from "./_components/about";

export default function Home() {
	const reviews = [
		{  
			'background'    : '/images/movies/whiplash/background.jpg',
			'poster'        : '/images/movies/whiplash/poster.jpg',
			'director'      : 'Damon Chazelle',
			'description'   : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi adipisci dolor excepturi suscipit quidem, eveniet expedita explicabo ratione dicta ipsa!', 
			'title'         : 'Whiplash',
			'year'         	: '2014',
			'rate'          : '100%',
			'url'          	: 'https://www.imdb.com/title/tt2582802/',
		},
		{  
			'background'    : '/images/movies/historyofviolence/background.jpg',
			'poster'        : '/images/movies/historyofviolence/poster.jpg',
			'director'      : 'David Cronenberg',
			'description'   : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi adipisci dolor excepturi suscipit quidem, eveniet expedita explicabo ratione dicta ipsa!',
			'title'         : 'History Of Violence',
			'year'         	: '2005',
			'rate'          : '88%',
			'url'          	: 'https://www.imdb.com/title/tt0399146',
		},
		{  
			'background'    : '/images/movies/fightclub/background.jpg',
			'poster'        : '/images/movies/fightclub/poster.jpg',
			'director'      : 'David Fincher',
			'description'   : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi adipisci dolor excepturi suscipit quidem, eveniet expedita explicabo ratione dicta ipsa!',
			'title'         : 'Fight Club',
			'year'         	: '1999',
			'rate'          : '90%',
			'url'          	: 'https://www.imdb.com/title/tt0137523',
		},
	];
  	return (
		<div className={styles.home}>
			<SliderHome reviews={reviews} />
			<Upcoming items={reviews} />
			<About />
		</div>
	);
}
