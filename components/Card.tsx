import { colors } from "@/constants/theme";
import { StatusKey } from "@/constants/types";
import { formatDate } from "@/utils/formatDate";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Status from "./Status";

interface CardProps {
    name: string;
    status: StatusKey;
    caseId: string;
    location: string;
    created: string;
    selected?: boolean;
    onPress?: () => void;
}

export default function Card({ name, status, caseId, location, created, selected, onPress }: CardProps) {
    return (
        <TouchableOpacity style={[styles.card, selected && styles.selected]} onPress={onPress}>
            <View style={styles.header}>
                <Text style={styles.name}>{name}</Text>
                <Status status={status}/>
            </View>
            <View style={styles.separator}></View>
            <View style={styles.body}>
                <View style={styles.row}>
                    <Text style={styles.label}>Case ID:</Text>
                    <Text style={styles.data}>{caseId}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Location:</Text>
                    <Text style={styles.data}>{location}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Date Created:</Text>
                    <Text style={styles.data}>{formatDate(created)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.card.background,
        gap: 5,
        borderWidth: 1,
        borderColor: colors.card.border,
        borderRadius: 20,
    },
    selected: {
        backgroundColor: colors.card.highlight,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 18,
        marginTop: 8,
    },
    separator: {
        height: 1,
        backgroundColor: colors.card.text.details,
        marginHorizontal: 7,
    },
    body: {
        marginHorizontal: 18,
        marginBottom: 8,
    },
    name: {
        fontSize: 16,
        fontFamily: "Raleway_500Medium",
        letterSpacing: 1,
        color: colors.card.text.name,
    },
    label: {
        fontSize: 12,
        color: colors.card.text.details,
        fontFamily: "Raleway_400Regular",
        paddingRight: 5,
        letterSpacing: 1,
    },
    data: {
        color: colors.card.text.details,
        fontFamily: "Raleway_700Bold",
        fontSize: 12,
        letterSpacing: 1,
    },
    row: {
        flexDirection: "row",
    }
})


