import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native"
import { useContext, useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data"
import Mealdetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorite-context";

function MealDetailScreen({ route, navigation }) {

    const favoriteMealsCtx = useContext(FavoritesContext);


    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    const mealIsFavorire = favoriteMealsCtx.ids.includes(mealId)

    function changeFavoriteStatusHandler () {
       if(mealIsFavorire){
        favoriteMealsCtx.removeFavorite(mealId)
       }else{
        favoriteMealsCtx.addFAvorite(mealId)
       }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
         
                headerRight: () =>{
                  return <IconButton onPress={changeFavoriteStatusHandler} icon={ mealIsFavorire ? 'star' : 'star-o'} color="white"/>
             
                }
              
        })
    },
[navigation, changeFavoriteStatusHandler])
    return <ScrollView style={styles.rootContainer}>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title} >{selectedMeal.title}</Text>
        <Mealdetails
            duration={selectedMeal.duration}
            complexity={selectedMeal.complexity}
            affordability={selectedMeal.affordability}
            textStyle={styles.detailText}
        />
        <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
        <Subtitle>
            Ingredients
        </Subtitle>
        <List data={selectedMeal.ingredients} />
        <Subtitle>
            Steps
        </Subtitle>
        <List data={selectedMeal.steps} />
        </View>
        </View>


    </ScrollView>

}
export default MealDetailScreen

const styles = StyleSheet.create({
    rootContainer:{
        marginBottom:32
    },
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
    },
    listOuterContainer:{
        alignItems:'center'
    },
    listContainer:{
        maxWidth: '80%'
    }

})