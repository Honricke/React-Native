import React from "react";
import Flatlist from "./components/FlatList";
import { View, StyleSheet, TextInput} from "react-native";

const Home = () => {
    var items:string[] = ["Cafeteira", "Computador", "Microondas"] //Lista de objetos teste

    return (
        <View style={styles.main}>
            <Flatlist items={items}/>
            <TextInput style={styles.input} />
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#1f1f1f",
    },
    input: {
        backgroundColor: '#fff',
        fontSize: 20
    }
})

export default Home;