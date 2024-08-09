import { View, StyleSheet, Text, FlatList } from "react-native"
import { MEALS } from "../data/dummy-data";
import { CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";
export default function MealsOverviewScreen({ route, navigation }) {
    const catId = route.params.categoryId;

    const meals = MEALS.filter((mealItem => { return mealItem.categoryIds.indexOf(catId) >= 0 }))


    function renderMealItem({ item }) {
        return <MealItem {...item} />
    }

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((categoryItem => { return categoryItem.id == catId })).title

        navigation.setOptions({ title: categoryTitle })
    }, [catId, navigation])


    return <View style={styles.container}>
        <FlatList
            data={meals}
            renderItem={(itemData) => renderMealItem(itemData)}
            keyExtractor={(item) => item.id}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})