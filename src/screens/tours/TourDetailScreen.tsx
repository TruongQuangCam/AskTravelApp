import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Tour } from "../../types/Tour";

export default function TourDetailScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const tour: Tour | undefined = route.params?.tour;

  if (!tour) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>Không tìm thấy dữ liệu tour.</Text>
        <Text style={styles.fallbackSubText}>
          Hãy quay lại danh sách tour và chọn lại một tour.
        </Text>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>Trở về danh sách tour</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: tour.image }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>{tour.title}</Text>

        <Text style={styles.meta}>Địa điểm: {tour.location}</Text>
        <Text style={styles.meta}>Thời lượng: {tour.duration}</Text>
        <Text style={styles.meta}>Phương tiện: {tour.transport}</Text>

        <Text style={styles.price}>{tour.price.toLocaleString()} đ</Text>

        <Text style={styles.sectionTitle}>Mô tả</Text>
        <Text style={styles.description}>{tour.description}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Booking", { tour })}
        >
          <Text style={styles.buttonText}>Đặt tour</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>Trở về danh sách tour</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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

  button: {
    backgroundColor: "#0077cc",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 12,
  },

  buttonText: {
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

  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#fff",
  },

  fallbackText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },

  fallbackSubText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
});