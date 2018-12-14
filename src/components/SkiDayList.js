import { MdTerrain } from 'react-icons/md'
import { TiWeatherSnow } from 'react-icons/ti'
import { FaCalendarAlt, FaSnowflake } from 'react-icons/fa'
import { SkiDayRow } from './SkiDayRow'

export const SkiDayList = ({days}) => (
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Resort</th>
                <th>Powder</th>
                <th>Backcounry</th>
            </tr>
        </thead>
        <tbody>
            {days.map((day, i) => 
                <SkiDayRow key={i} {...day} />
            )}
        </tbody>
    </table>
)
