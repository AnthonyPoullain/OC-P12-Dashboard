import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Line,
  LineChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const Background = styled.div`
  background-color: var(--color-primary);
  padding: 24px;
  border-radius: 5px;
  max-height: 320px;
  max-width: 258px;
  position: relative;

  h3 {
    color: #fff;
    opacity: 0.5;
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    position: absolute;
    margin-left: 10px;
    max-width: 150px;
  }
`;

function SessionsGraph({ data }) {
  return (
    <Background>
      <h3>Durée moyenne des sessions</h3>
      <ResponsiveContainer width="100%" height={215}>
        <LineChart data={data}>
          <CartesianGrid vertical={false} horizontal={false} />
          <YAxis
            dataKey="sessionDuration"
            tickLine={false}
            tickCount={3}
            orientation="right"
            domain={['dataMin - 20', 'dataMax + 20']}
            width={0}
          />
          <XAxis
            style={{ fill: '#fff', opacity: '.5' }}
            type="category"
            dataKey="day"
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            offset={10}
            contentStyle={{
              backgroundColor: '#fff',
              border: 'none',
              textAlign: 'center',
            }}
            wrapperStyle={{
              outline: 'none',
            }}
            itemStyle={{
              fontSize: '8px',
              fontWeight: '500',
              padding: '0 7px',
              color: '#000',
              lineHeight: '24px',
            }}
            labelFormatter={() => ''}
            separator=""
            formatter={(value) => ['', value]}
            cursor={{ stroke: 'rgba(0,0,0,.1)', strokeWidth: 2 }}
          />
          <Line
            style={{ stroke: '#fff' }}
            dot={false}
            activeDot={{
              fill: '#fff',
              strokeWidth: '5px',
              stroke: 'rgba(255,255,255,.2)',
            }}
            dataKey="sessionDuration"
            strokeWidth={2}
            type="natural"
            unit="min"
            radius={[10, 10, 0, 0]}
          />
        </LineChart>
      </ResponsiveContainer>
    </Background>
  );
}

SessionsGraph.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      sessionDuration: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default SessionsGraph;
