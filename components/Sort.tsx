import AZSort from "@/assets/icons/Sort.svg";
import { colors } from "@/constants/theme";
import { SortType } from "@/constants/types";
import { Dispatch, SetStateAction } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface SortProps {
    activeSort: SortType;
    setActiveSort: Dispatch<SetStateAction<SortType>>;
}

export default function Sort({activeSort, setActiveSort}: SortProps) {

    return (
        <View style={styles.sort}>
            <TouchableOpacity
                style={[styles.pill, activeSort === "az" && styles.pillActive]}
                onPress={() => setActiveSort("az")}>
                <AZSort color={activeSort === "az" ? colors.nav.background : colors.nav.sort}/>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.pill, activeSort === "date" && styles.pillActive]}
                onPress={() => {setActiveSort("date")}}>
                <Text style={[styles.sortText, activeSort === "date" && styles.sortTextActive]}>Date</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.pill, activeSort === "status" && styles.pillActive]}
                onPress={() => {setActiveSort("status")}}>
                <Text style={[styles.sortText, activeSort === "status" && styles.sortTextActive]}>Status</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    sort: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    pill: {
        backgroundColor: colors.nav.background,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        color: colors.nav.sort,
        paddingHorizontal: 10,
        borderRadius: 15,
        marginRight: 6,
    },
    pillActive: {
        backgroundColor: colors.nav.sort,
        color: colors.nav.background,
    },
    sortText: {
        fontSize: 16,
        fontFamily: "Raleway_600SemiBold",
        letterSpacing: 1,
        color: colors.nav.sort,
    },
    sortTextActive: {
        color: colors.nav.background,
    },
})