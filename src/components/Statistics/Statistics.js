import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <>
      <p className="statistic-item ">Good: {good}</p>
      <p className="statistic-item">Neutral: {neutral}</p>
      <p className="statistic-item">Bad: {bad}</p>
      <p className="statistic-item">Total: {total}</p>
      <p className="statistic-item">Positive feedback: {positiveFeedback}%</p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default Statistics;
