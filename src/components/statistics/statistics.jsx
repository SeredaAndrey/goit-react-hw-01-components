import {
  StatisticConatiner,
  Title,
  StatList,
  StatItem,
  StatLabel,
  StatPercentage,
} from './statistics.styled';

export const Statistic = title => {
  return (
    <StatisticConatiner>
      <Title>Upload stats</Title>

      <StatList>
        <StatItem>
          <StatLabel>.docx</StatLabel>
          <StatPercentage>4%</StatPercentage>
        </StatItem>
        <StatItem>
          <StatLabel>.mp3</StatLabel>
          <StatPercentage>14%</StatPercentage>
        </StatItem>
        <StatItem>
          <StatLabel>.pdf</StatLabel>
          <StatPercentage>41%</StatPercentage>
        </StatItem>
        <StatItem>
          <StatLabel>.mp4</StatLabel>
          <StatPercentage>12%</StatPercentage>
        </StatItem>
      </StatList>
    </StatisticConatiner>
  );
};
