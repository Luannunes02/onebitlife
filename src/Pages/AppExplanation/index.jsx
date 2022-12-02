import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

import DefaultButton from '../../components/common/DefaultButton'

export default function AppExplanation() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.title}>
                        Antes, deixa {'\n'} eu te explicar...
                    </Text>
                    <Text style={styles.description}>
                        Pronto(a) para subir de nivel na vida?
                    </Text>
                    <Text style={styles.description}>
                        Na próxima tela você vai poder escolher {'\n'} seus 4 hábitos de forma individual.
                    </Text>
                    <DefaultButton
                        buttonText={'Continuar'}
                        handlePress={handleNavAppExplanation}
                        width={250}
                        height={50}
                    />
                </View>


            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    cotaniner: {

    },
    title: {

    },
    description: {

    }
})