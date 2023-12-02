import PropTypes from 'prop-types';
import {
  StatisticsContainer,
  StatisticsTitle,
  StatisticsValueContainer,
  StatisticsDoc,
  StatisticsMp3,
  StatisticsPdf,
  StatisticsPsd,
  StatisticsPercentage
} from './Statistics.styles';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer>
      <StatisticsTitle>{title}</StatisticsTitle>
      <StatisticsValueContainer>
        <StatisticsDoc>
          <span>.docx</span>
          <StatisticsPercentage>{stats[0].percentage}%</StatisticsPercentage>
        </StatisticsDoc>
        <StatisticsMp3>
          <span>.mp3</span>
          <StatisticsPercentage>{stats[2].percentage}%</StatisticsPercentage>
        </StatisticsMp3>
        <StatisticsPdf>
          <span>.pdf</span>
          <StatisticsPercentage>{stats[1].percentage}%</StatisticsPercentage>
        </StatisticsPdf>
        <StatisticsPsd>
          <span>.psd</span>
          <StatisticsPercentage>{stats[3].percentage}%</StatisticsPercentage>
        </StatisticsPsd>
      </StatisticsValueContainer>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.object
};

export default Statistics;
