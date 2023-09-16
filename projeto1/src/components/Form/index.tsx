import React from "react";
import { Text, TextInput, View, StyleSheet, Button, Pressable } from 'react-native'

const Form = () => {
    return (
        <View style={styles.box}>
            <Text style={styles.text}>Altura</Text>
            <TextInput 
                style={styles.text_input}
                keyboardType="numeric"
                placeholder="Ex: 1.75"
                ></TextInput>

            <Text style={styles.text}>Peso</Text>
            <TextInput 
                style={styles.text_input}
                keyboardType="numeric"
                placeholder="Ex: 86.300"
            ></TextInput>
            <Pressable 
                style={styles.botao}
                onPress={() => console.log("Funcionando!!")}
            ><Text style={styles.botao_texto}>Calcular</Text></Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    box: {
        width: '80%',
        // backgroundColor: '#fff',
        // alignItems: 'center',
        padding: 10
    },
    text_input:{
        backgroundColor: '#fff',
        padding: 10,
        width: '100%',
        borderRadius: 5,
        marginTop: 10
    },
    text:{
        fontSize: 18,
        marginTop: 20,
        marginLeft: 20
    },
    botao: {
        padding: 10,
        marginTop: 20,
        backgroundColor: '#0092d1',
        color: '#fff',
        alignItems: 'center',
        borderRadius: 3
    },
    botao_texto:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17
    }
})

export default Form;