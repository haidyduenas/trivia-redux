import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "redux-zero/react";
import store from "./store";
import './index.css';
import TriviaApp from './App';

const Index = () => (
	<Provider store={store}>
		<TriviaApp/>
	</Provider>
);

ReactDOM.render(<Index />, document.getElementById('root'));
//registerServiceWorker();