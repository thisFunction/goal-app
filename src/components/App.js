import { createClass } from 'react';
import { SkiDayList } from './SkiDayList';
import { SkiDayCount } from './SkiDayCount';
import { AddDayForm } from './AddDayForm';
import { Menu } from './Menu';

export const App = createClass({
    getInitialState() {
        return {
            allSkiDays: [
                {
                    resort: "Squaw Valley",
                    date: '2016-01-03',
                    powder: true,
                    backcountry: true
                }
            ]
        }
    },
    addDay(newDay) {
        this.setState({
            allSkiDays: [
                ...this.state.allSkiDays,
                newDay
            ]
        })
    },
    countDays(filter) {
        const { allSkiDays } = this.state;
        return allSkiDays.filter(day => filter ? day[filter] : day).length
    },
    render() {
        return (
            <div className="app">
                <Menu />
                {(this.props.location.pathname === "/") ?
                    <SkiDayCount
                        total={this.countDays()}
                        powder={this.countDays("powder")}
                        backcountry={this.countDays("backcountry")} /> :
                    (this.props.location.pathname === "/add-day") ?
                        <AddDayForm onNewDay={this.addDay} /> :
                        <SkiDayList days={this.state.allSkiDays}
                            filter={this.props.params.filter} />
                }
            </div>
        )
    }
})