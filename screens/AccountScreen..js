import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class AccountScreen extends Component {

    static navigationOptions = {
        header: null
    }
    
    render() {
        return(
            <View style={styles.container}>
                <Text>AccountScreen</Text>
            </View>
        );
    } 
}

export default AccountScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});