import { Pressable, StyleSheet } from "react-native"
import FontAwesome from '@expo/vector-icons/FontAwesome';


function IconButton({icon, onPress, color})  {
  return ( <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
    <FontAwesome name={icon} size={24} color={color} />
  </Pressable>
   
  )
}
export default IconButton
const styles = StyleSheet.create({
    pressed:{
        opacity:.7
    }
})
