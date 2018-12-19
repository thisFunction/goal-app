// import React from 'react'
// import { render } from 'react-dom'
// import { App } from './components/App'
// import { Whoops404 } from './components/Whoops404'
// import { Router, Route, hashHistory } from 'react-router'
// import { AddDayForm } from './components/AddDayForm';
// window.React = React;

// render(
// 	<Router history={hashHistory}>
// 		<Route path="/" component={App}/>
// 		<Route path="/list-days" component={App}>
// 			<Route path=":filter" component={App}/>
// 		</Route>
// 		<Route path="/add-day" component={App}/>
// 		<Route path="*" component={Whoops404}/>
// 	</Router>,
// 	document.getElementById('react-container')
// )

import C from './constants'
import appReducer  from './store/reducers'
import initialState from './initialState.json'

let state = initialState

console.log(`
	initial state
	=============
	goal: ${state.goal}
	resorts: ${JSON.stringify(state.allSkiDays)}
	fetching: ${state.resortNames.fetching}
	suggestions: ${state.resortNames.suggestions}
`)

state = appReducer(state, {
	type: C.SET_GOAL,
	payload: 3
})

state = appReducer(state, {
	type: C.ADD_DAY,
	payload: {
		"resort": "Mt Shasta",
		"date": "2016-10-28",
		"powder": false,
		"backcountry": true
	}
})

state = appReducer(state, {
	type: C.CHANGE_SUGGESTIONS,
	payload: ["Mt Tallac", "Mt Hood", "Mt Shasta"]
})

console.log(`
	next state
	=============
	goal: ${state.goal}
	resorts: ${JSON.stringify(state.allSkiDays)}
	fetching: ${state.resortNames.fetching}
	suggestions: ${state.resortNames.suggestions}
`)