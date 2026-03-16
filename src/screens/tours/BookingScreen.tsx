import React, { useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Tour } from "../../types/Tour";

export default function BookingScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const tour: Tour | undefined = route.params?.tour;

  const [customerName, setCustomerName] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [peopleCount, setPeopleCount] = useState("1");

  useEffect(() => {
    setCustomerName("");
    setDepartureDate("");
    setPeopleCount("1");
  }, []);

  const totalPrice = useMemo(() => {
    const people = parseInt(peopleCount, 10);
    if (!tour || isNaN(people) || people <= 0) return 0;
    return tour.price * people;
  }, [tour, peopleCount]);

  const handleConfirmBooking = () => {
    const people = parseInt(peopleCount, 10);

    if (!tour) {
      Alert.alert("Lỗi", "Không tìm thấy thông tin tour.");
      return;
    }

    if (!customerName.trim()) {
      Alert.alert("Thiếu thông tin", "Vui lòng nhập họ tên khách hàng.");
      return;
    }

    if (!departureDate.trim()) {
      Alert.alert("Thiếu thông tin", "Vui lòng nhập ngày khởi hành.");
      return;
    }

    if (isNaN(people) || people <= 0) {
      Alert.alert("Dữ liệu không hợp lệ", "Số người phải có ít nhất 1 người.");
      return;
    }

    navigation.navigate("Payment", {
      tour,
      customerName: customerName.trim(),
      departureDate: departureDate.trim(),
      peopleCount: people,
      totalPrice,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Thông tin đặt tour</Text>

        <Text style={styles.label}>Tên tour</Text>
        <Text style={styles.readonlyValue}>
          {tour?.title ?? "Chưa có dữ liệu tour"}
        </Text>

        <Text style={styles.label}>Họ tên khách hàng</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập họ tên"
          value={customerName}
          onChangeText={setCustomerName}
        />

        <Text style={styles.label}>Ngày khởi hành</Text>
        <TextInput
          style={styles.input}
          placeholder="Ví dụ: 20/03/2026"
          value={departureDate}
          onChangeText={setDepartureDate}
        />

        <Text style={styles.label}>Số người</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập số người"
          value={peopleCount}
          onChangeText={(text) => {
            const numeric = text.replace(/[^0-9]/g, "");
            setPeopleCount(numeric);
          }}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Tổng tiền dự kiến</Text>
        <Text style={styles.totalPrice}>
          {totalPrice.toLocaleString("vi-VN")} đ
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleConfirmBooking}>
          <Text style={styles.buttonText}>Tiếp tục thanh toán</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.popToTop()}
        >
          <Text style={styles.cancelButtonText}>Hủy đặt tour</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  },

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },

  readonlyValue: {
    fontSize: 17,
    backgroundColor: "#f3f4f6",
    padding: 14,
    borderRadius: 10,
    marginBottom: 18,
    color: "#222",
  },

  input: {
    borderWidth: 1,
    borderColor: "#d0d0d0",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 18,
    backgroundColor: "#fff",
  },

  totalPrice: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#e53935",
    marginBottom: 28,
  },

  button: {
    backgroundColor: "#007bff",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  cancelButton: {
    marginTop: 14,
    backgroundColor: "#b34700",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d1d5db",
  },

  cancelButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});