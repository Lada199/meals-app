import { Text, Pressable, View, Image, StyleSheet, Platform } from "react-native"
import { useNavigation } from "@react-navigation/native"
import Mealdetails from "../MealDetails"

function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {

    const navigation = useNavigation()

    function selectMealItemHandler() {
        navigation.navigate('MealDetail', {
            mealId: id
        })

    }


    return <View style={styles.mealItem}>
        <Pressable
            android_ripple={{ color: '#ccc' }}
            style={({ pressed }) => pressed ? styles.buttonPressed : null}
            onPress={selectMealItemHandler} >
            <View style={styles.innerContainer}>
                <View>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <Mealdetails
                    duration={duration}
                    complexity={complexity}
                    affordability={affordability} />
            </View>
        </Pressable>
    </View>
}
export default MealItem

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: .25,
        backgroundColor: 'white',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,


    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'

    },
    buttonPressed: {
        opacity: .5

    },
    image: {
        width: '100%',
        height: 200,

    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },

})