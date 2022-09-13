import PropTypes from 'prop-types'

import css from '../Statistic.module.css'
import {getRandomHexColor} from '../../../utils/randomHexColor'

export const StatisticsItem = ({label, percentage}) => {
  return <li className={css.item} style={{backgroundColor: getRandomHexColor()}}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>

} 

StatisticsItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
}