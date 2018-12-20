import React from 'react';
import { render } from 'react-dom';
import { App } from './components/App';
import { Whoops404 } from './components/Whoops404';
import { Router, Route, hashHistory } from 'react-router';
import { AddDayForm } from './components/AddDayForm';
window.React = React;

render(
	<Router history={hashHistory}>
		<Route path="/" component={App} />
		<Route path="/list-days" component={App}>
			<Route path=":filter" component={App} />
		</Route>
		<Route path="/add-day" component={App} />
		<Route path="*" component={Whoops404} />
	</Router>,
	document.getElementById('react-container')
);

import storeFactory from './store'
import { addDay, setGoal, removeDay, addError, clearError, changeSuggestions, clearSuggestions } from './actions'

const store = storeFactory()

store.dispatch(
	addDay("Zakopane", "2014-2-13")
)

store.dispatch(
	setGoal(32)
)

store.dispatch(
	removeDay("2014-2-13")
)

store.dispatch(
	addError("server is down")
)

store.dispatch(
	clearError(0)
)

store.dispatch(
	changeSuggestions(["1","2","3"])
)

store.dispatch(
	clearSuggestions()
)