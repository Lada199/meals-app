
import { Button, StyleSheet, Text, View, } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import {createDrawerNavigator} from '@react-navigation/drawer'
import FavoritesScreen from './screens/FavoritesScreen';
import FontAwesome from '@expo/vector-icons/FontAwesome';


const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator(){
  return <Drawer.Navigator  screenOptions={{
    headerStyle:{backgroundColor:'#351401'},
    contentStyle: { backgroundColor: '#3f2f25' },
    headerTintColor: 'white',
    drawerContentStyle:{ backgroundColor: '#3f2f25' },
    drawerInactiveTintColor:'white',
    drawerActiveTintColor:'white',
    drawerActiveBackgroundColor:'#351401'
  }}>
    <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
         title: 'All Categories',
         drawerIcon: ({color, size}) => (<FontAwesome name="list" size={size} color={color} />),
         contentStyle: { backgroundColor: '#3f2f25' } 
        
        }}/>
    <Drawer.Screen name="Favorites" component={FavoritesScreen}   options={{
         title: 'All Catego',
         drawerIcon: ({color, size}) => (<FontAwesome name="star" size={size} color={color} />),
        
        }}/>
  </Drawer.Navigator>
}

export default function App() {
  return ( 
    <>
    <StatusBar style='light' />
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerStyle:{backgroundColor:'#351401'},
          headerTintColor: 'white',
          contentStyle:{backgroundColor:  '#3f2f25'}
      }}>
        <Stack.Screen name="MealsCategories" component={DrawerNavigator} options={{
          title: 'All Categories',
          headerShown: false,
         
        
        }}/>
        <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        <Stack.Screen 
        name="MealDetail"
         component={MealDetailScreen}
         options={{
          title: 'About the Meal',

         
         }}
         />
      </Stack.Navigator>
    </NavigationContainer>
    </>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24180f',

  },
});
