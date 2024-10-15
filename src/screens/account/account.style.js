import { Colors } from "react-native/Libraries/NewAppScreen"
import {COLORS, FONT_SIZE} from "../../constants/theme.js"

export const styles = {
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
        padding: 50,
        justifyContent: "space-between"
    },

    containerLogo: {
        alignItems: "center",
        marginTop: 50
    },

    logo : {
        width: 100,
        height: 23
    },

    input : {
        backgroundColor: COLORS.gray5,
        padding: 10,
        borderRadius: 6,
        marginBottom: 15
    },

    footer : {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        fontSize: FONT_SIZE.lg
    },

    footerLink : {
        color: COLORS.blue
    }
}