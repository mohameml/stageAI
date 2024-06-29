import { StyleSheet, View, FlatList, Animated } from "react-native";
import SliderItem from "./SliderItem";
import Pagination from "./Pagination";
import { useRef, useState } from "react";

const Slider = ({ data }) => {
    const [index, setIndex] = useState(0);

    const scrollX = useRef(new Animated.Value(0)).current;

    const handelScroll = (event) => {
        Animated.event(
            [
                {
                    nativeEvent: {
                        contentOffset: {
                            x: scrollX,
                        },
                    },
                },
            ],
            {
                useNativeDriver: false,
            }
        )(event);
    };

    const handelChangeItems = ({ viewableItems }) => {
        // console.log(viewableItems);
        setIndex(viewableItems[0].index);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => <SliderItem item={item} />}
                // contentContainerStyle={styles.container}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                snapToAlignment="center"
                onScroll={handelScroll}
                onViewableItemsChanged={handelChangeItems}
            />
            <Pagination data={data} scrollX={scrollX} index={index} />
        </View>
    );
};

export default Slider;

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
});
