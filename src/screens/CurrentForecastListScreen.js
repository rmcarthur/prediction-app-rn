import React, { useContext } from 'react';
import { Alert, Image, FlatList, TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import { Context as ForecastContext } from '../context/ForecastContext';
import { ListItem } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons'


const CurrentForecastListScreen = ({ navigation }) => {
    const { state } = useContext(ForecastContext)

    return (
        <View style={styles.viewDebug}>
        <FlatList 
            data={state}
            keyExtractor={ item => item.id }
            renderItem={( { item } ) => {
                return (
                    <TouchableOpacity onPress={() =>
                    navigation.navigate("ForecastDetail", {_id: item.id, title: item.title})} 
                    >
                        <ListItem chevron title={item.title} />
                    </TouchableOpacity>
                )
            }}
            />
        
        <TouchableOpacity style={styles.toDebug} onPress={() => {
            navigation.navigate("CreateForecast")
            }}>
          <Image
            source={require('../../assets/plus_icon.png')}
            style={styles.IconPress}
          />
        </TouchableOpacity>
        </View>
        )
}

CurrentForecastListScreen.navigationOptions = {
        title: "Current Forecasts",
        tabBarIcon: <FontAwesome name="home" size={19} />
}
const styles = StyleSheet.create({

    viewDebug: {
        flexDirection: 'column',
        flex:1,
        borderWidth: 3,
        borderColor: 'red',
        backgroundColor: '#F5F5F5'
    },
    toDebug: {
        position: 'absolute',
        right:20,
        bottom:20,
        height: 65,
        width: 65
    },
     IconPress: {
      }
});

export default CurrentForecastListScreen;