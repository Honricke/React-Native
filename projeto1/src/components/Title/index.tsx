import React, { useState } from "react";
import { Text, StyleSheet, View } from 'react-native'

type HomeProps = {
    titulo:string,
}

const Home = (props: HomeProps) => {
    return (
        <View style={styles.box}>
            <Text style={styles.title}>{props.titulo}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    title: {
		fontSize: 25,
		color: 'red',
		fontWeight: 'bold',
	},
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginTop: 80
    }
})

export default Home;