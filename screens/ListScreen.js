import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

import Kartu from '../components/Home/Kartu';
import styles from '../style/style'

class ListScreen extends Component {

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View>
                <View >
                    <Text style={styles.headingAccount}>Antrianku</Text>
                </View>

                <View style={{ alignItems: 'center', padding: 20 }}>
                    <Kartu imageUri={require('../assets/wasd2.png')}
                        lokasi="Lokasi antrian"
                        bagian="Sub lokasi antrian"
                        nomor="Antrian : 000" />
                </View>

                <View >
                <Text numberOfLines={1} style={{padding: 10, textAlign:'center', fontSize: 14, fontStyle: 'italic' }}>
                        ---------- Antrian terdahulu ----------
                    </Text>
                </View>

                <View style={{ alignItems: 'center', padding: 20 }}>
                    <Kartu imageUri={require('../assets/wasd2.png')}
                        lokasi="Lokasi antrian"
                        bagian="Sub lokasi antrian"
                        nomor="Antrian : 000" />
                </View>
            </View>
        );
    }
}

export default ListScreen;