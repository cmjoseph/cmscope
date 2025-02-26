import SliderHome from "./_components/slider";

export default function Home() {
	const reviews = [
		{  
			'background'    : '/images/movies/whiplash/background.jpg',
			'poster'        : '/images/movies/whiplash/poster.jpg',
			'description'   : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi adipisci dolor excepturi suscipit quidem, eveniet expedita explicabo ratione dicta ipsa!', 
			'title'         : 'Whiplash',
			'rate'          : '94%',
			'url'          	: 'https://www.imdb.com/title/tt2582802/',
		},
		{  
			'background'    : '/images/movies/historyofviolence/background.jpg',
			'poster'        : '/images/movies/historyofviolence/poster.jpg',
			'description'   : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi adipisci dolor excepturi suscipit quidem, eveniet expedita explicabo ratione dicta ipsa!',
			'title'         : 'History Of Violence',
			'rate'          : '88%',
			'url'          	: 'https://www.imdb.com/title/tt0399146',
		},
	];
  	return (
		<SliderHome reviews={reviews}/>
	);
}
