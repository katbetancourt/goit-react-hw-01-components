import PropTypes from 'prop-types';
import {
  StatisticsContainer,
  StatisticsTitle,
  StatisticsItem,
  StatisticsItemKey,
  StatisticsItemPercentage
} from './Statistics.styles';

const Statistics = ({ title, stats }) => {
    return (
      <StatisticsContainer>
        <StatisticsTitle>{title}</StatisticsTitle>
        <ul>
          {stats.map(stat => (
            <StatisticsItem key={stat.id}>
              <StatisticsItemKey>{stat.label}</StatisticsItemKey>
              <StatisticsItemPercentage>{stat.percentage}</StatisticsItemPercentage>
            </StatisticsItem>
          ))}
        </ul>
      </StatisticsContainer>
    );

};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.string.isRequired,
};

export default Statistics;