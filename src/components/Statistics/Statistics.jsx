import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.scss';
import { getRandomColor } from '../../utils/getRandomColor';

function Statistics({ title = null, statsData }) {

  const {
    statistics,
    statistics__title,
    statistics__list,
    list__item,
    list__label,
    list__percentage,
  } = styles;
  return (
    <section className={statistics}>
      {title !== null && <h2 className={statistics__title}>{title}</h2>}

      <ul className={statistics__list}>
        {statsData.map(stat => {
          const { id, label, percentage } = stat;
          return (
            <li
              background-color={getRandomColor}
              key={id}
              className={list__item}
            >
              <span className={list__label}>{label}</span>
              <span className={list__percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  statsData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Statistics;
