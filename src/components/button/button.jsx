import { Alert, Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style.js";

function Button(props) {

    function TesteClick() {
        Alert.alert("Clicou no bot")
    }

    return (
    <TouchableOpacity style={styles.btn} >
        <Text style={styles.text}>
            {props.text}
        </Text>
    </TouchableOpacity>
    )
}

export default Button;