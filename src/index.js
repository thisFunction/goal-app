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
import {allSkiDays } from './store/reducers'

const state = [
	{
		"resort" : "Kirkwood",
		"date" : "2012-2-5",
		"powder" : true,
		"backcountry" : false
	},
	{
		"resort" : "Boreal",
		"date" : "2016-12-15",
		"powder" : true,
		"backcountry" : true
	}
]

const action = {
	type: C.REMOVE_DAY,
	payload: "2016-12-15"
}

const nextState = allSkiDays(state, action)

console.log(`
    initial state: ${JSON.stringify(state)}
    action: ${JSON.stringify(action)}
    new state: ${JSON.stringify(nextState)}
`)