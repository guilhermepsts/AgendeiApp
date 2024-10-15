import { Image, TextInput, View, Text, TouchableOpacity } from "react-native";
import icon from "../../constants/icon.js"
import { styles } from "./loading.style.js";

function Loading(){
    return <View style={styles.container}>
        <Image source={icon.biglogo} style={styles.biglogo}/>
    </View>
}

export default Loading;