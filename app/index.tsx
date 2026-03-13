import CardView from "@/components/CardView";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import Sort from "@/components/Sort";
import { colors } from "@/constants/theme";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type SortType = "az" | "date" | "status";

export default function Index() {
  const [activeSort, setActiveSort] = useState<SortType>("az");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden/>
      <Header/>
      <View style={styles.searchBar}><SearchBar/></View>
      <View style={styles.sort}>
        <Sort activeSort={activeSort} setActiveSort={setActiveSort}/>
      </View>
      <ScrollView contentContainerStyle={styles.cardView} persistentScrollbar={true}>
          <CardView activeSort={activeSort}/>
      </ScrollView>
      <View style={styles.nav}><NavBar/></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  searchBar: {
    marginLeft: 22,
    marginRight: 38,
    marginTop: 12,
  },
  sort: {
    marginLeft: 22,
    marginVertical: 15,
  },
  nav: {
    justifyContent: "space-between",
  },
  cardView: {
    marginHorizontal: 25,
  }
});