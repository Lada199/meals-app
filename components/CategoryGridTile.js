import { Pressable, StyleSheet, Text, View, Platform } from "react-native"


function CategoryGridTile ({title, color, onPress, }){



    return (<View style={styles.gridItem}>
        <Pressable android_ripple={{color: '#ccc'}} style={ ({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]} onPress={onPress} >
            <View style={[styles.innerContainer, {backgroundColor: color}]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>)

}
export default CategoryGridTile


const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:16,
        height:150,
        borderRadius:8,
        elevation:4,
        shadowColor:'black',
        shadowOpacity:.25,
   backgroundColor: '#3f2f25',
        shadowOffset: {width:0, height:2},
        shadowRadius:4,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
      

    },
    button:{
        flex:1
    },
    buttonPressed:{
        opacity:.5

    },
    innerContainer:{
        flex:1,
        borderRadius:8,
        padding:16,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontWeight:'bold',
        fontSize:18
    }
})