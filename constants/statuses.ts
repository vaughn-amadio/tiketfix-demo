import { colors } from "./theme";

export const statuses = {
    new: {
        label: "New",
        color: colors.card.status.new,
    },
    inProgress: {
        label: "In Progress",
        color: colors.card.status.inProgress,
    },
    selectLawyer: {
        label: "Select Lawyer",
        color: colors.card.status.selectLawyer,
    },
    cancelled: {
        label: "Cancelled",
        color: colors.card.status.cancelled,
    },
    resolved: {
        label: "Resolved",
        color: colors.card.status.resolved,
    },
} as const;