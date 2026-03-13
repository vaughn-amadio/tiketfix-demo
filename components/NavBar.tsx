import CalendarIcon from "@/assets/icons/Calendar.svg";
import HomeIcon from "@/assets/icons/Home.svg";
import MessageIcon from "@/assets/icons/Messages.svg";
import CaseIcon from "@/assets/icons/Suitcase.svg";
import UserIcon from "@/assets/icons/User.svg";
import { colors } from "@/constants/theme";
import { StyleSheet, View } from "react-native";
import NavItem from "./NavItem";

export default function NavBar() {
    return (
        <View style={styles.navBar}>
            <NavItem icon={HomeIcon} text="Home"/>
            <NavItem icon={MessageIcon} text="Messages"/>
            <NavItem icon={CaseIcon} text="My Cases" active/>
            <NavItem icon={CalendarIcon} text="Calendar"/>
            <NavItem icon={UserIcon} text="User"/>
        </View>
    )
}

const styles = StyleSheet.create({
    navBar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: colors.nav.background,
        height: 80,
    }
});