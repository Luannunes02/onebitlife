import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'

export default function Start() {
    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Image
                        source={require('../../assets/icons/logo3.png')}
                    />
                    <Text>Let transform your life, looking alway the better for your</Text>

                </View>
            </ScrollView>
        </View>
    )
}