import React, { useMemo, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import TourCard from "../../components/TourCard";
import { tours } from "../../data/tours";

export default function ToursScreen() {
  const navigation = useNavigation<any>();
  const [searchText, setSearchText] = useState("");

  const filteredTours = useMemo(() => {
    const keyword = searchText.trim().toLowerCase();

    if (!keyword) return tours;

    return tours.filter((item) => {
      const title = item.title.toLowerCase();
      const location = item.location.toLowerCase();

      return title.includes(keyword) || location.includes(keyword);
    });
  }, [searchText]);

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredTours}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TourCard
            tour={item}
            onPress={() => navigation.navigate("TourDetail", { tour: item })}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <View style={styles.headerRow}>
              <Image
                source={require("../../../assets/images/Asktravel_logo.png")}
                style={styles.logo}
                resizeMode="contain"
              />

              <View>
                <Text style={styles.heading}>Danh sách tours</Text>
                <Text style={styles.subheading}>
                  Chọn hành trình phù hợp với bạn
                </Text>
              </View>
            </View>

            <View style={styles.searchBox}>
  <TextInput
    style={styles.searchInput}
    placeholder="Tìm tour theo tên hoặc địa điểm..."
    placeholderTextColor="#6B7280"
    value={searchText}
    onChangeText={setSearchText}
  />

  {searchText.trim().length > 0 && (
    <TouchableOpacity
      style={styles.clearButton}
      onPress={() => setSearchText("")}
    >
      <Text style={styles.clearButtonText}>✕</Text>
    </TouchableOpacity>
  )}
</View>

            {filteredTours.length === 0 && (
              <View style={styles.emptyBox}>
                <Text style={styles.emptyText}>
                  Không tìm thấy tour phù hợp.
                </Text>
              </View>
            )}
          </>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: "#073B3A",
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  logo: {
    width: 56,
    height: 56,
    marginRight: 12,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  subheading: {
    fontSize: 14,
    color: "#DCEBEC",
    marginTop: 2,
  },

  searchBox: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#FFFFFF",
  borderRadius: 12,
  marginBottom: 16,
  borderWidth: 1,
  borderColor: "#B7D3D3",
  paddingRight: 10,
},

searchInput: {
  flex: 1,
  paddingHorizontal: 14,
  paddingVertical: 12,
  fontSize: 16,
  color: "#1F2A37",
},

  emptyBox: {
    backgroundColor: "#DCEBEC",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#B7D3D3",
  },

  emptyText: {
    fontSize: 15,
    color: "#1F2A37",
    textAlign: "center",
  },

  clearButton: {
  width: 28,
  height: 28,
  borderRadius: 14,
  backgroundColor: "#E5E7EB",
  alignItems: "center",
  justifyContent: "center",
  },

clearButtonText: {
  fontSize: 16,
  color: "#374151",
  fontWeight: "bold",
  },
});