import EllipseIcon from "@/assets/icons/Ellipse.svg";
import LawyerIcon from "@/assets/icons/lawyers.svg";
import { statuses } from "@/constants/statuses";
import { StatusKey } from "@/constants/types";
import { StyleSheet, Text, View } from "react-native";

interface StatusProps {
    status: StatusKey,
}

export default function Status({status}: StatusProps) {
    return (
        <View style={styles.status}>
            {status === "selectLawyer" &&
                <LawyerIcon style={styles.lawyerIcon}/>}
            {status !== "resolved" && status !== "selectLawyer" &&
                <EllipseIcon style={styles.ellipse} color={statuses[status].color}/>}
            <Text style={[styles.statusText, {color: statuses[status].color}]}>{statuses[status].label}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    status: {
        flexDirection: "row",
    },
    ellipse: {
        alignSelf: "center",
        width: 10,
        height: 10,
    },
    lawyerIcon: {
        width: 24,
        height: 24,
    },
    statusText: {
        paddingLeft: 5,
        fontSize: 14,
        letterSpacing: 1,
        fontFamily: "Raleway_600SemiBold",
    }
})