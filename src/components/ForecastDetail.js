import React, { useState, useContext } from 'react';
import { View, TextInput, Text, FlatList, StyleSheet } from 'react-native';
import { Context as ForecastContext } from '../context/ForecastContext';
import { ListItem, Button, Overlay } from 'react-native-elements';
import Spacer from './Spacer';
import moment from "moment"
import PredLinechart from './PredLinechart'
import Modal from 'react-native-modal'


const ForecastDetail = ({ _id, title}) => {
    const { state, resolvePrediction, addPrediction } = useContext(ForecastContext);
    const [resolveIsVisible, setResolveIsVisible] = useState(false)
    const [addIsVisible, setAddIsVisible] = useState(false)
    const [predValue, setPredValue] = useState(0.0)
    const forecast = state.find(data => data.id === _id )
    const pred_ts = forecast.predictions.map(item => item.prediction_ts)
    const pred_probs = forecast.predictions.map(item => item.prediction_prob)

    return (
        <View style={styles.container}>
            <FlatList
            data={forecast.predictions}
            keyExtracot={ item => item.id }
            renderItem={({ item }) =>{
            return (
            <ListItem title={moment(item.prediction_ts).format('MMMM Do YYYY, h:mm:ss a')}/>
            ) 
            }}
            ListHeaderComponent={
                <>
                <Text>Description</Text>
                <View style={styles.textView}>
                    <Text>{forecast.description}</Text>
                </View>
                <Text>Expiration At</Text>
                <View style={styles.smallTextView}>
                    <Text>{moment(forecast.expiration_at).format('MMMM Do YYYY, h:mm:ss a')}</Text>
                </View>
                <Text> Predicted Outcomes</Text>
                </>
            }
            ListFooterComponent={
                <>
                <PredLinechart 
                    xData={pred_ts}
                    yData={pred_probs}
                />
                    {
                        forecast.resolved === false
                        ? 
                        <>
                            <Spacer>
                            <Button 
                                title="Resolve"
                                onPress={() => {
                                    setResolveIsVisible(true)
                                }}
                            />
                            </Spacer>
                            <Spacer>
                            <Button 
                                title="Add new Prediction" 
                                onPress={() => {
                                    setAddIsVisible(true)
                                }}
                                />
                            </Spacer>
                            </>
                            : null
                    }
                </>
            }
            />
        <Overlay
          isVisible={resolveIsVisible}
          onBackdropPress={() => setResolveIsVisible(false)}
          height={150}
        >
            <View style={styles.overlayStyle}>
          <Text style={styles.overlayText}>Did Event Occur?</Text>
          <Button
                style={styles.buttonStyle}
                title="Yes"
                onPress={() => {
                    resolvePrediction(_id, true)
                    setResolveIsVisible(false)
                }}
                />
          <Button 
                style={styles.buttonStyle}
                title="No"
                onPress={() => {
                    resolvePrediction(_id, false)
                    setResolveIsVisible(false)
                }}
          />
            </View>
        </Overlay>
        <Overlay
          isVisible={addIsVisible}
          onBackdropPress={() => setAddIsVisible(false)}
          height={150}
        >
            <View style={styles.overlayStyle}>
          <Text style={styles.overlayText}>Add New Prediction</Text>
          <Spacer>
            <TextInput style={styles.descInput}
            underlineColorAndroid="transparent"
            placeholder="Description"
            placeholderTextColor = "#9a73df"
            onChangeText={(text) => setPredValue(text)} 
            keyboardType={'numeric'}/>
            </Spacer>
          <Button
                style={styles.buttonStyle}
                title="Save"
                onPress={() => {
                    addPrediction(_id, predValue)
                    setAddIsVisible(false)
                }}
                />
            </View>
        </Overlay>
        </View>
    )
};

const styles = StyleSheet.create({
    overlayStyle: {
        height:200
    },
    buttonStyle: {
        margin:5
    },
    overlayStyle :{
        fontSize:18
    },
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
        flex:1
    }
});

export default ForecastDetail;