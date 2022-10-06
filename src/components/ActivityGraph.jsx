import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const Background = styled.div`
  background-color: #fbfbfb;
  padding: 24px;
  border-radius: 5px;
  max-height: 320px;
  position: relative;

  h3 {
    font-weight: 500;
    font-size: 14px;
    line-height: 2;
    position: absolute;
  }
`;

function ActivityGraph({ data }) {
  return (
    <Background>
      <h3>Activité quotidienne</h3>
      <ResponsiveContainer width="100%" height={272}>
        <BarChart barGap={8} data={data}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <YAxis
            dataKey="calories"
            tickLine={false}
            tickCount={3}
            orientation="right"
          />
          <XAxis type="category" dataKey="day" tickLine={false} />
          <Tooltip
            cursor={{ fill: '#C4C4C4' }}
            offset={20}
            contentStyle={{
              backgroundColor: 'var(--color-primary)',
              border: 'none',
              textAlign: 'center',
            }}
            wrapperStyle={{
              outline: 'none',
            }}
            itemStyle={{
              fontSize: '7px',
              color: '#fff',
              lineHeight: '24px',
            }}
            labelFormatter={() => ''}
            separator=""
            formatter={(value) => ['', value]}
            active="true"
          />
          <Legend
            iconType="circle"
            height={50}
            align="right"
            verticalAlign="top"
          />
          <Bar
            barSize={7}
            name="Poids (kg)"
            unit="kg"
            dataKey="kilogram"
            fill="#000"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            barSize={7}
            name="Calories brûlées (kCal)"
            unit="kCal"
            dataKey="calories"
            fill="var(--color-primary)"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </Background>
  );
}

ActivityGraph.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      bodyweight: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ActivityGraph;
