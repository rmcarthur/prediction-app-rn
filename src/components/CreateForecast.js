import React, { useState, useContext } from 'react';
import { View, ScrollView, Text, FlatList, TextInput, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import DatePicker from '../components/DatePicker'
import { Context as ForecastContext } from '../context/ForecastContext';
import { Button } from 'react-native-elements';
import Spacer from './Spacer';
import moment from 'moment'


const CreateForecast = ({ _id }) => {
    const { saveForecast} = useContext(ForecastContext);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [expDate, setExpDate] = useState(new Date())
    const [prettyDate, setPrettyDate] = useState(moment(expDate).format('MMMM Do YYYY, h:mm:ss a'))
    const [predValue, setPredValue] = useState(0.0)
    const [showDatePicker, setShowDatePicker] = useState(false);

    return (
        // You probably need to put another view with a half transparent grey background and fill the whole screen above this one 
        // That would make it more obvious that you have to select a date and save to close
        <ScrollView style={styles.container}>
            
            <TextInput style={styles.titleInput}
            underlineColorAndroid="transparent"
            placeholder="Title"
            placeholderTextColor = "#9a73df"
            autoCapitalize = "words"
            onChangeText={(text) => setTitle(text)} />
            <Spacer>
            <TextInput style={styles.descInput}
            underlineColorAndroid="transparent"
            placeholder="Description"
            placeholderTextColor = "#9a73df"
            onChangeText={(text) => setDescription(text)} />
            </Spacer>
            <Spacer>
            <TextInput style={styles.descInput}
            underlineColorAndroid="transparent"
            placeholder="Description"
            placeholderTextColor = "#9a73df"
            onChangeText={(text) => setPredValue(text)} 
            keyboardType={'numeric'}/>
            </Spacer>
            <Spacer>
            <TouchableOpacity 
                onPress={() => setShowDatePicker(true)}>
                <View style={styles.dateText}>
                    <Text>{prettyDate}</Text>
                </View>
            </TouchableOpacity>
            { showDatePicker && (
                <DatePicker
                    date={expDate}
                    onClose={date => {
                        if (date && Platform.OS !== 'iOS') {
                            setShowDatePicker(false)
                            setExpDate(moment(date))
                            setPrettyDate(moment(expDate).format('MMMM Do YYYY, h:mm:ss a'))
                        } else {
                            setShowDatePicker(false)
                        }
                    }}
                    onChange={d => {
                        setExpDate(moment(d))
                        setPrettyDate(moment(expDate).format('MMMM Do YYYY, h:mm:ss a'))
                    }}
            />
            )}
            </Spacer>
            <Spacer>
            <Button 
                title="Save"
                onPress={() => {
                    console.log("STUFF");
                    saveForecast({
                        title,
                        description,
                        expiration_at: expDate,
                        prediction_prob: predValue
                    })
                }}/>
            </Spacer>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    titleInput: {
        margin:20,
        borderColor: 'black',
        borderWidth: 3,
        height:100
    },
    dateText: {
        borderColor:'black',
        borderWidth:3,
        margin:20,
        height:100
    },
    descInput: {
        margin:20,
        borderColor: 'black',
        borderWidth: 3,
        height:100
    },
    container: {
        borderColor: 'red',
        borderWidth: 6,
        flex:1,
    }
});

export default CreateForecast;