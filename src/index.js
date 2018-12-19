import React from 'react';
import { render } from 'react-dom';
import { App } from './components/App';
import { Whoops404 } from './components/Whoops404';
import { Router, Route, hashHistory } from 'react-router';
import { AddDayForm } from './components/AddDayForm';
window.React = React;

render(
	<Router history={hashHistory}>
		<Route path="/" component={App}/>
		<Route path="/list-days" component={App}>
			<Route path=":filter" component={App}/>
		</Route>
		<Route path="/add-day" component={App}/>
		<Route path="*" component={Whoops404}/>
	</Router>,
	document.getElementById('react-container')
);

import C from './constants';
import appReducer  from './store/reducers';
import {createStore } from 'redux';

const initialState = (localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) : {};

const store = createStore(appReducer, initialState);

const saveStateToLocalStorage= () =>{
	const state = JSON.stringify(store.getState());
	localStorage['redux-store'] = state;
};

store.subscribe(saveStateToLocalStorage);
