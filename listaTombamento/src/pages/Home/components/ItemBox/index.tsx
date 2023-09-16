import React from "react";
import { Text, View } from "react-native"

type ItemBoxProps = {
    content:string
}

const ItemBox = (props: ItemBoxProps) => {
    return(
        <View>
            <Text>{props.content}</Text>
            <View></View>
        </View>
    );
};

export default ItemBox;