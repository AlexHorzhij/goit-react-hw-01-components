import PropTypes from 'prop-types'

import css from './Statistic.module.css'
import { StatisticsItem } from './StatisticItem/StatisticsItem'


export const Statistic = ({title, items}) => {
    return <section className={css.statistics}>
      { title  && (<h2 className={css.title}>{title}</h2>)}
      <ul className={css.statList}>
        {items.map(({id, label, percentage}) => (<StatisticsItem key={id} label={label} percentage={percentage} />))}
      </ul>
  
</section>
}

StatisticsItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
}