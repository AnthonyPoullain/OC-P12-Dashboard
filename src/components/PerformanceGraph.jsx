import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts';

const Background = styled.div`
  background-color: #282d30;
  border-radius: 5px;
  padding: 27px 0;
  max-height: 263px;
  max-width: 258px;
  position: relative;
  overflow: visible;

  tspan {
    font-size: 12px;
    fill: #fff;
  }
`;

function ActivityGraph({ kind, data }) {
  data.forEach((item, i) => (item.kind = kind[i + 1]));

  return (
    <Background>
      <ResponsiveContainer width="100%" height={210}>
        <RadarChart data={data}>
          <PolarGrid polarRadius={[10, 20, 40, 60, 82]} radialLines={false} />
          <PolarAngleAxis orient="inner" dataKey="kind" tickLine={false} />
          <PolarRadiusAxis axisLine={false} tick={false} />
          <Radar
            isAnimationActive={false}
            dataKey="value"
            stroke="1"
            fill="var(--color-primary)"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </Background>
  );
}

ActivityGraph.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      sessionLength: PropTypes.number,
    })
  ).isRequired,
  kind: PropTypes.shape({
    day: PropTypes.string,
  }).isRequired,
};

export default ActivityGraph;
