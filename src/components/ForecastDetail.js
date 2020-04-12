import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Context as ForecastContext } from '../context/ForecastContext';
import { ListItem, Button } from 'react-native-elements';
import Spacer from './Spacer';
import moment from "moment"
import PredLinechart from './PredLinechart'

const ForecastDetail = ({ _id, title}) => {
    const { state } = useContext(ForecastContext);
    const forecast = state.find(data => data.id === _id )

    return (
        <View style={styles.container}>
            <Text>Description</Text>
            <View style={styles.textView}>
                <Text>{forecast.description}</Text>
            </View>
            <Text>Expiration At</Text>
            <View style={styles.smallTextView}>
                <Text>{moment(forecast.expiration_at).format('MMMM Do YYYY, h:mm:ss a')}</Text>
            </View>
            <Text> Predicted Outcomes</Text>
            <View>
                <FlatList
                data={forecast.predictions}
                keyExtracot={ item => item.id }
                renderItem={({ item }) =>{
                    return (
                        <ListItem title={moment(item.prediction_ts).format('MMMM Do YYYY, h:mm:ss a')}/>
                    ) 
                }}
                />
            </View>
            <PredLinechart />
            <Spacer>
            <Button title="Resolve"/>
            </Spacer>
            <Spacer>
            <Button title="Add new Prediction" />
            </Spacer>
        </View>
    )
};

const styles = StyleSheet.create({
    textView: {
        margin:20,
        borderColor: 'black',
        borderWidth: 3,
        height:100
    },
    smallTextView: {
        margin:20,
        borderColor: 'black',
        borderWidth: 3,
        height:25
    },
    container: {
        marginTop:30,
        borderColor: 'red',
        borderWidth: 6,
        flex:1,
    }
});

export default ForecastDetail;