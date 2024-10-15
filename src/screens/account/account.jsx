import { Image, TextInput, View, Text, TouchableOpacity } from "react-native";
import icon from "../../constants/icon.js"
import { styles } from "./account.style.js";
import Button from "../../components/button/button.jsx"

function Account(){
    return <View style={styles.container}>
        <View style={styles.containerLogo}>
            <Image source={icon.logo} style={styles.logo} />
        </View>

        <View>
            <TextInput placeholder="Nome Completo" style={styles.input}/>
            <TextInput placeholder="E-mail" style={styles.input}/>
            <TextInput placeholder="Senha" style={styles.input} secureTextEntry={true}/>
            <TextInput placeholder="Confirme a Senha" style={styles.input} secureTextEntry={true}/>
            <Button text="Criar Conta"/>
        </View>

        <View style={styles.footer}>
            <Text>Já tenho uma conta. </Text>
            <TouchableOpacity>
                <Text style={styles.footerLink}>Acessar agora!</Text>
            </TouchableOpacity>
        </View>
    </View>
}

export default Account;