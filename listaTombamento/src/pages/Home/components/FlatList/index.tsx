import React from "react";
import { FlatList, StyleSheet, Platform, NativeModules } from "react-native"
import ItemBox from "../ItemBox";

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

type ListProps = {
    items:string[]
}

const Flatlist = (props: ListProps) => {

    return (
        <FlatList
            style = {styles.flatlist}
            data = {props.items}
            renderItem={({item}) => <ItemBox content={item} />}
        ></FlatList>
    );
};

const styles = StyleSheet.create({
    flatlist: {
        paddingTop: STATUSBAR_HEIGHT,
        padding: 30
    }
})

export default Flatlist;