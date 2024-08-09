import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import DetailScreen from './screens/DetailsScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='MealsCategories' screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' }
          }}>
            <Stack.Screen name='MealsCategories' component={CategoriesScreen} options={{
              title: 'All Categories',
            }} />
            <Stack.Screen
              name='MealsOverview'
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name='MealDetails'
              component={DetailScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
