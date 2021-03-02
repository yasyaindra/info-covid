import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  AreaSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import classNames from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { Stack, Animation } from '@devexpress/dx-react-chart';
import { carbonEmmision as data } from './demo-data/data';

const setStyle = (style) => {
  const wrap = withStyles({ root: style });
  return Target => wrap(({ classes, className, ...restProps }) => (
    <Target className={classNames(classes.root, className)} {...restProps} />
  ));
};

const LegendRoot = setStyle({
  display: 'flex',
  margin: 'auto',
  flexDirection: 'row',
  alignText:'center'
})(Legend.Root);

const LegendLabel = setStyle({
  whiteSpace: 'nowrap',
})(Legend.Label);

const ChartRoot = setStyle({
  paddingRight: '20px',
})(Chart.Root);

const format = () => tick => tick;
const stacks = [{
  series: ['Kematian', 'Sembuh', 'Terkonfirmasi'],
}];

export default class Graph extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;
    return (
      <Paper>
        <Chart
          data={chartData}
          rootComponent={ChartRoot}
        >
          <ArgumentAxis tickFormat={format} />
          <ValueAxis />
          <AreaSeries
            name="Terkonfirmasi"
            valueField="liquids"
            argumentField="year"
          />
          <AreaSeries
            name="Kematian"
            valueField="solids"
            argumentField="year"
          />
          <AreaSeries
            name="Sembuh"
            valueField="gas"
            argumentField="year"
          />
          <Animation />
          <Legend position="bottom" rootComponent={LegendRoot} labelComponent={LegendLabel} />
          <Title text="Grafik Data Covid19 Di Indonesia" />
          <Stack stacks={stacks} />
        </Chart>
      </Paper>
    );
  }
}