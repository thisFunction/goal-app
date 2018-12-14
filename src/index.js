import React from 'react'
import { render } from 'react-dom'
import { SkiDayCount } from './components/SkiDayCount'

window.React = React;

render (
		<SkiDayCount />,
		document.getElementById('react-container')
	)
// render(
// 	<SkiDayList 
// 		days= {[
// 			{
// 				resort: "Squaw Valley",
// 				date: new Date ("1/2/2019"),
// 				powder: true,
// 				backcountry: false
// 			},
// 			{
// 				resort: "Kirkwood",
// 				date: new Date ("3/28/2019"),
// 				powder: false,
// 				backcountry: false
// 			},
// 			{
// 				resort: "Mt. Tellac",
// 				date: new Date ("4/2/2019"),
// 				powder: true,
// 				backcountry: false
// 			}
// 		]}/>,
// 	document.getElementById('react-container')
// )