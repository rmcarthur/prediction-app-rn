import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ForecastDetail from '../components/ForecastDetail';

const ForecastDetailScreen = ({ navigation }) => {
    const _id = navigation.getParam('_id')
    return (<>
        <ForecastDetail _id={_id}
        />
        </>
    );
}

ForecastDetailScreen.navigationOptions ={
}

const styles = StyleSheet.create({
    text: {
        fontSize:30
    }
});

export default ForecastDetailScreen;