import React from 'react';
import {View } from 'react-native';
import PropTypes from 'prop-types';
import { LineChart, Grid, XAxis, Yaxis } from 'react-native-svg-charts'
import * as scale from 'd3-scale'
import * as shape from 'd3-shape'
import moment from 'moment';


class PredLinechart extends React.PureComponent {
   static propTypes = {
    xData: PropTypes.array.isRequired,
    yData: PropTypes.array.isRequired
  }
    render() {
        const zip = (arr1, arr2) => arr1.map((x, i) => {
            return {x, y:arr2[i]}
        }
        )
        const data = zip(this.props.xData, this.props.yData)
        return (
            <View>
            <LineChart 
                data={ data }
                style={{ height:200}}
                xAccessor={ ({ item }) => item.x}
                yAccessor={ ({ item }) => item.y}
                yScale={scale.scaleLinear}
                xScale={scale.scaleTime}
                svg={{ stroke: 'rgb(134, 65, 244)'}}
                contentInset={{ top: 20, bottom:20 }}
                >
                    <Grid />
                </LineChart>
            <XAxis 
                data={data}
                svg={{
                    fill:'black',
                    fontSize:8,
                    fontWeight:'bold',
                }}
                xAccessor={ ({ item }) => item.x }
                scale={ scale.scaleTime }
                numberOfTicks={6}
                formatLabel={ (value) => moment(value).format('M/D')}
            />
            </View>
        )
    }
}
export default PredLinechart;
/*

            <Yaxis 
                data={data}
                contentInset={{ top:20, bottom:20 }}
                svg={{
                    fill:'black',
                    fontSize:8,
                    fontWeight:'bold'
                }}
                numberOfTicks={10}
                formatLabel={ value => `${value}`}
                scale={scale.scaleLinear}
                />
*/