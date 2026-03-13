import Search from "@/assets/icons/Search.svg";
import { colors } from "@/constants/theme";
import { StyleSheet, TextInput, View } from "react-native";

export default function SearchBar() {
    return (
        <View style={styles.searchbar}>
            <TextInput
                style={styles.input}
                placeholder="Search..."
                placeholderTextColor={colors.search.placeholder}
            />
            <Search color={colors.search.icon} width={24} height={24}/>
        </View>
    )
}

const styles = StyleSheet.create({
    searchbar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: colors.search.background,
        borderRadius: 15,
        paddingHorizontal: 21,
        height: 43,
        borderWidth: 1,
        borderColor: colors.search.border,
        shadowColor: '#000000',
        shadowOpacity: 0.05,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    input: {
        fontFamily: "Raleway_600SemiBold",
        letterSpacing: 1,
        fontSize: 16,
    },
})