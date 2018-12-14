import '../stylesheets/ui.scss'
import { MdTerrain } from 'react-icons/md'
import { TiWeatherSnow } from 'react-icons/ti'
import { FaCalendarAlt } from 'react-icons/fa'
import { PropTypes } from 'react'

const percentToDecimal = (decimal) => {
    return `${decimal * 100}%`
}

const calculateGoalProgress = (total, goal) => {
    return percentToDecimal(total / goal)
}

export const SkiDayCount = ({ total, powder, backcountry, goal }) => (
    <div className="ski-day-count">
        <div className="total-days">
            <span>{total}</span>
            <FaCalendarAlt />
            <span>days</span>
        </div>
        <div className="powder-days">
            <span>{powder}</span>
            <TiWeatherSnow />
            <span>days</span>
        </div>
        <div className="backcountry-days">
            <span>{backcountry}</span>
            <MdTerrain />
            <span>days</span>
        </div>
        <div className="goal">
            <span>{calculateGoalProgress(total, goal)}</span>
        </div>
    </div>
)

SkiDayCount.defaultProps = {
    total: 50,
    powder: 50,
    backcountry: 15,
    goal: 100
}

SkiDayCount.propTypes = {
    total: PropTypes.number,
    powder: PropTypes.number,
    backcountry: PropTypes.number,
    goal: PropTypes.number.isRequired
}