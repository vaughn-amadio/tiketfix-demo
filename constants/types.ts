import { statuses } from "./statuses";

export type SortType = "az" | "date" | "status";
export type StatusKey = keyof typeof statuses;

export type Case = {
    name: string;
    status: StatusKey;
    caseId: string;
    location: string;
    created: string;
}