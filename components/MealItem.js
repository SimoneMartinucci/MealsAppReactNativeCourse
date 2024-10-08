import { View, Text, StyleSheet, Pressable, Image, Platform } from "react-native"
import { useNavigation } from "@react-navigation/native"
import MealDetails from "./MealDetails";

export default function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
    const navigation = useNavigation();

    function selectItemHandler() {
        navigation.navigate('MealDetails', { mealId: id })
    }

    return <View style={styles.mealItem}>
        <Pressable
            onPress={selectItemHandler}
            android_ripple={{ color: '#ccc' }}
            style={({ pressed }) => pressed ? styles.buttonStylePressed : null}
        >
            <View style={styles.innerContainer}>
                <View>
                    <Image style={styles.image} source={{ uri: imageUrl }} />
                    <Text style={styles.title} >{title}</Text>
                </View>
                <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
            </View>
        </Pressable>
    </View>

}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    buttonStylePressed: {
        opacity: 0.5
    },
})