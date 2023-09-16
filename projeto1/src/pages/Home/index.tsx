import React from "react";
import { View, StyleSheet} from 'react-native'
import Title from "../../components/Title";
import Form from "../../components/Form";

const Home = () => {
    return (
        <View style={styles.conteiner}>
            <Title titulo="ONEBITHEALTH"/>
            <Form />
        </View>
    )
};

//Styles...
const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
        backgroundColor: '#e1e7e4',
        // justifyContent: 'center',
        alignItems: 'center'
    },
})

export default Home;