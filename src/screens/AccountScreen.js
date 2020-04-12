import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const AccountScreen = () => {
    return (
        <Text style={styles.text}>Account Screen</Text>
    );
}

AccountScreen.navigationOptions = {
    tabBarIcon: <FontAwesome name="gear" size={25} />
}
const styles = StyleSheet.create({
    text: {
        fontSize:30
    }
});

export default AccountScreen;