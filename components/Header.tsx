import Logo from "@/assets/icons/logo.svg";
import Bell from "@/assets/icons/Notification.svg";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <Logo width={57} height={57}/>
            <TouchableOpacity onPress={()=>{}}>
              <Bell width={45} height={45}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 30,
    paddingLeft: 12,
    paddingRight: 24,
  },
});