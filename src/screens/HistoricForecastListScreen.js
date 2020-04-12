import React, { useContext } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Context as ForecastContext } from '../context/ForecastContext';
import { ListItem } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';


const HistoricForecastListScreen = ({ navigation }) => {
    const { state } = useContext(ForecastContext);
    return (
        <View>
        <FlatList 
            data={state}
            keyExtractor={ item => item.id }
            renderItem={( { item }) => {
                console.log(item.id)
                return (
                    <TouchableOpacity onPress={() =>
                    navigation.navigate("ForecastDetail", {_id: item.id})} 
                    >
                        <ListItem chevron title={item.title} />
                    </TouchableOpacity>
                )
            }}
            />
        </View>
    );
}

HistoricForecastListScreen.navigationOptions = {
    title: "Historic Forecasts",
    tabBarIcon: <FontAwesome name="tachometer" size={18} />
}
const styles = StyleSheet.create({
    text: {
        fontSize:30
    }
});

export default HistoricForecastListScreen;

