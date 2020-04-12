import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CreateForecast from '../components/CreateForecast';

const CreateForecastScreen = ({ navigation }) => {
    const _id = navigation.getParam('_id')
    return (<>
        <CreateForecast/>
        </>
    );
}

CreateForecastScreen.navigationOptions ={
}

const styles = StyleSheet.create({
    text: {
        fontSize:30
    }
});

export default CreateForecastScreen;