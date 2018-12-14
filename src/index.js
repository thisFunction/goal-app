import React from 'react'
import { render } from 'react-dom'
import { SkiDayList } from './components/SkiDayList'

window.React = React;

render(
	<SkiDayList 
		days= {[
			{
				resort: "Squaw Valley",
				date: new Date ("1/2/2019"),
				powder: true,
				backcountry: true
			},
			{
				resort: "Kirkwood",
				date: new Date ("3/28/2019"),
				powder: false,
				backcountry: true
			},
			{
				resort: "Mt. Tellac",
				date: new Date ("4/2/2019"),
				powder: true,
				backcountry: false
			}
		]}/>,
	document.getElementById('react-container')
)