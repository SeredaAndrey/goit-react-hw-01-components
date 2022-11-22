import PropTypes from 'prop-types';

import {
  StatisticConatiner,
  Title,
  StatList,
  StatItem,
  StatLabel,
  StatPercentage,
} from './statistics.styled';

export const Statistic = ({ title, stats }) => {
  //   console.log(stats);
  return (
    <StatisticConatiner>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticItem key={id} label={label} percentage={percentage} />
          );
        })}
      </StatList>
    </StatisticConatiner>
  );
};

const StatisticItem = ({ id, label, percentage }) => {
  return (
    <StatItem key={id}>
      <StatLabel>{label}</StatLabel>
      <StatPercentage>{percentage}</StatPercentage>
    </StatItem>
  );
};

Statistic.prototype = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};

StatisticItem.prototype = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
