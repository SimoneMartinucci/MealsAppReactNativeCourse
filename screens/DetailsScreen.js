import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/Detail/Subtitle";
import List from "../components/Detail/List";
export default function DetailScreen({ route }) {
    const mealId = route.params.mealId
    const mealItem = MEALS.find((meal) => meal.id === mealId)

    return <ScrollView>
        <View>
            <Image style={styles.image} source={{ uri: mealItem.imageUrl }} />
            <Text style={styles.title}>{mealItem.title}</Text>
            <MealDetails duration={mealItem.duration} complexity={mealItem.complexity} affordability={mealItem.affordability} textStyle={styles.detailText} />
            <Subtitle >INGREDIENTS</Subtitle>
            <List list={mealItem.ingredients} />
            <Subtitle>STEPS</Subtitle>
            <List list={mealItem.steps} />
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },

    detailText: {
        color: 'white'
    }
})

