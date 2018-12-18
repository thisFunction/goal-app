import { MdTerrain } from 'react-icons/md'
import { FaSnowflake } from 'react-icons/fa'
import { PropTypes } from 'react'

export const SkiDayRow = ({ resort, date, powder, backcountry }) => (
    <tr>
        <td>
            {date}
        </td>
        <td>
            {resort}
        </td>
        <td>
            {(powder) ? <FaSnowflake /> : null}
        </td>
        <td>
            {(backcountry) ? <MdTerrain /> : null}
        </td>
    </tr>
)

SkiDayRow.prototypes = {
    resort: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    powder: PropTypes.bool,
    powder: PropTypes.bool,

}