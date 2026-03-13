import { colors } from "@/constants/theme";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SvgProps } from "react-native-svg";

interface NavItemProps {
    icon: React.FC<SvgProps>;
    text: string;
    active?: boolean;
}

export default function NavItem({icon: Icon, text, active=false}: NavItemProps) {
    return (
        <TouchableOpacity style={[styles.navItem, active ? styles.navItemActive : null]} onPress={()=>{}}>
            <Icon style={styles.icon}/>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    navItem: {
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        borderBottomWidth: 4,
        borderBottomColor: "transparent",
    },
    navItemActive: {
        backgroundColor: colors.nav.highlight,
        borderBottomColor: colors.nav.icon,
    },
    icon: {
        width: 46,
        height: 46,
        color: colors.nav.icon,
    },
    text: {
        color: colors.nav.text,
        fontSize: 10,
        fontFamily: "Raleway_600SemiBold",
    },
})