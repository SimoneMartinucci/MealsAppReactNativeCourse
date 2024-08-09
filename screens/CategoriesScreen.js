import { StyleSheet, FlatList } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridItem from '../components/CategoryGridItem'
import { StatusBar } from 'expo-status-bar'

export default function CategoriesScreen({ navigation }) {


    function renderCategoryItem({ title, color, id }) {
        function onPressHandler() {
            navigation.navigate('MealsOverview', { categoryId: id });
        }
        return <CategoryGridItem title={title} color={color} onPress={onPressHandler} />
    }

    return <FlatList
        data={CATEGORIES}
        renderItem={(itemData) => renderCategoryItem(itemData.item)}
        keyExtractor={(item) => item.id}
        numColumns={2}
    />
}

const styles = StyleSheet.create({

})

