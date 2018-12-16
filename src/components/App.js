import { createClass } from 'react'
import { SkiDayList } from './SkiDayList'
import { SkiDayCount } from './SkiDayCount'

export const App = createClass({
    getInitialState() {
        return {
            allSkiDays: [
                {
                    resort: "Squaw Valley",
                    date: new Date("1/2/2019"),
                    powder: true,
                    backcountry: true
                },
                {
                    resort: "Kirkwood",
                    date: new Date("3/28/2019"),
                    powder: false,
                    backcountry: true
                },
                {
                    resort: "Mt. Tellac",
                    date: new Date("4/2/2019"),
                    powder: true,
                    backcountry: false
                }
            ]
        }
    },
    countDays(filter){
        const { allSkiDays } = this.state;
        return allSkiDays.filter(day => filter ? day[filter]: day).length
    },
    render() {
        return (
            <div className="app">
                <SkiDayList days={this.state.allSkiDays} />
                <SkiDayCount total={this.countDays()} powder={this.countDays("powder")} backcountry={this.countDays("backcountry")} />
            </div>
        )
    }
})