import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  FlingGestureHandler,
  Directions,
  State,
} from "react-native-gesture-handler";
import { tours } from "../../data/tours";
import { Tour, TourCategory } from "../../types/Tour";

const categoryTitleMap: Record<TourCategory, string> = {
  domestic: "Tour trong nước",
  international: "Tour nước ngoài",
  support: "Dịch vụ hỗ trợ",
};

export default function ServiceDetailScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const category: TourCategory = route.params?.category ?? "domestic";
  const [searchText, setSearchText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredItems = useMemo(() => {
    const keyword = searchText.trim().toLowerCase();
    const categoryItems = tours.filter((item) => item.category === category);

    if (!keyword) return categoryItems;

    return categoryItems.filter((item) => {
      const title = item.title.toLowerCase();
      const location = item.location.toLowerCase();
      const description = item.description.toLowerCase();

      return (
        title.includes(keyword) ||
        location.includes(keyword) ||
        description.includes(keyword)
      );
    });
  }, [category, searchText]);

  const safeIndex =
    filteredItems.length === 0
      ? 0
      : Math.min(currentIndex, filteredItems.length - 1);

  const currentItem: Tour | undefined = filteredItems[safeIndex];

  const goNext = () => {
    if (filteredItems.length === 0) return;
    if (safeIndex < filteredItems.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const goPrev = () => {
    if (filteredItems.length === 0) return;
    if (safeIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  React.useEffect(() => {
    setCurrentIndex(0);
  }, [searchText, category]);

  if (filteredItems.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyTitle}>{categoryTitleMap[category]}</Text>

        <View style={styles.searchBox}>
          <TextInput
            style={styles.searchInput}
            placeholder="Tìm theo tên, địa điểm hoặc mô tả..."
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

        <Text style={styles.emptyText}>
          Không tìm thấy dịch vụ phù hợp trong nhóm này.
        </Text>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>Trở về danh sách dịch vụ</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <FlingGestureHandler
      direction={Directions.RIGHT}
      onHandlerStateChange={({ nativeEvent }) => {
        if (nativeEvent.state === State.ACTIVE) {
          goPrev();
        }
      }}
    >
      <FlingGestureHandler
        direction={Directions.LEFT}
        onHandlerStateChange={({ nativeEvent }) => {
          if (nativeEvent.state === State.ACTIVE) {
            goNext();
          }
        }}
      >
        <View style={styles.container}>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.groupTitle}>{categoryTitleMap[category]}</Text>

            <View style={styles.searchBox}>
              <TextInput
                style={styles.searchInput}
                placeholder="Tìm theo tên, địa điểm hoặc mô tả..."
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

            <Text style={styles.positionText}>
              {safeIndex + 1} / {filteredItems.length}
            </Text>

            <Image source={{ uri: currentItem?.image }} style={styles.image} />

            <View style={styles.content}>
              <Text style={styles.title}>{currentItem?.title}</Text>

              <Text style={styles.meta}>Địa điểm: {currentItem?.location}</Text>
              <Text style={styles.meta}>Thời lượng: {currentItem?.duration}</Text>
              <Text style={styles.meta}>
                Phương tiện: {currentItem?.transport}
              </Text>

              <Text style={styles.price}>
                {currentItem?.price.toLocaleString()} đ
              </Text>

              <Text style={styles.sectionTitle}>Mô tả</Text>
              <Text style={styles.description}>{currentItem?.description}</Text>

              <TouchableOpacity
                style={styles.bookButton}
                onPress={() =>
                  navigation.navigate("Booking", { tour: currentItem })
                }
              >
                <Text style={styles.bookButtonText}>
                  {category === "support" ? "Đặt dịch vụ" : "Đặt tour"}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
              >
                <Text style={styles.backButtonText}>
                  Trở về danh sách dịch vụ
                </Text>
              </TouchableOpacity>

              <Text style={styles.swipeHint}>
                Vuốt nhanh sang trái để xem tiếp, vuốt nhanh sang phải để quay lại
              </Text>
            </View>
          </ScrollView>
        </View>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  scrollContent: {
    paddingBottom: 24,
  },

  groupTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#073B3A",
    paddingHorizontal: 16,
    paddingTop: 18,
    marginBottom: 12,
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 10,
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

  positionText: {
    fontSize: 14,
    color: "#666",
    textAlign: "right",
    paddingHorizontal: 16,
    marginBottom: 8,
  },

  image: {
    width: "100%",
    height: 250,
  },

  content: {
    padding: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#111827",
  },

  meta: {
    fontSize: 16,
    color: "#555",
    marginBottom: 6,
  },

  price: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#e53935",
    marginVertical: 16,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    marginBottom: 20,
  },

  bookButton: {
    backgroundColor: "#0077cc",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 12,
  },

  bookButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  backButton: {
    backgroundColor: "#b34700",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },

  backButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },

  swipeHint: {
    marginTop: 14,
    textAlign: "center",
    fontSize: 14,
    color: "#6B7280",
    fontStyle: "italic",
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
  },

  emptyTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#073B3A",
    marginBottom: 16,
    textAlign: "center",
  },

  emptyText: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
});