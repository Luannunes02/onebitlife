import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'

import LifeStatus from '../../components/common/LifeStatus'

export default function Start() {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={require('../../assets/icons/logo3.png')}
                        style={styles.logo}
                    />
                    <LifeStatus />
                    <Text style={styles.description}>Vamos transformar sua vida {'\n'}em um jogo, buscando sempre {'\n'} {" "} o melhor nivel.</Text>

                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(21,21,21,0.98)'
    },
    logo: {
        width: 300,
        height: 60,
        marginTop: 60,
        marginBottom: 20
    },
    description: {
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 60
    }

})