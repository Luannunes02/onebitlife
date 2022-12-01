import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function DefaultButton({
    buttonText,
    handlePress,
    width,
    height, }) {

    return (
        <TouchableOpacity
            style={[styles.button, { width: width, height: height }]}
            activeOpacity={0.7}
            onPress={handlePress}
        >
            <Text style={styles.btnText}>{buttonText}</Text>
        </TouchableOpacity>
    )


}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        marginBottom: 20
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 24
    }
})