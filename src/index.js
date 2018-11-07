import React from 'react';
import ReactDOM from 'react-dom';

// Components 

import Header from './components/header';
import News from './components/news_list';

const App = () => {
	return ( 
		<div>
		<Header />
		<News />
		<h1> hello word </h1>
		</div>

	 ) 
}

ReactDOM.render(<App />, document.querySelector('#root'));

