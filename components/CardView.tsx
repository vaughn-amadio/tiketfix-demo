import { cases } from "@/data/cases";
import { useState } from "react";
import { View } from "react-native";
import Card from "./Card";

type SortType = "az" | "date" | "status"

interface CardViewProps {
    activeSort: SortType;
}

export default function CardView({ activeSort }: CardViewProps) {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const sortedCases = [...cases].sort((a, b) => {
        if (activeSort === 'az') return a.name.localeCompare(b.name);
        if (activeSort === 'date') return new Date(b.created).getTime() - new Date(a.created).getTime();
        if (activeSort === 'status') return a.status.localeCompare(b.status);
        return 0;
    });

    return (
        <View style={{rowGap: 5}}>
            {sortedCases.map((caseItem) => (
                <Card
                    key={caseItem.caseId}
                    name={caseItem.name}
                    status={caseItem.status}
                    caseId={caseItem.caseId}
                    location={caseItem.location}
                    created={caseItem.created}
                    selected={selectedId === caseItem.caseId}
                    onPress={() => setSelectedId(caseItem.caseId)}
                />
            ))}
        </View>
    );
}