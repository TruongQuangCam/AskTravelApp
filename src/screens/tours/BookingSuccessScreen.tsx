import React, {useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Animated } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Tour } from "../../types/Tour";

export default function BookingSuccessScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const tour: Tour | undefined = route.params?.tour;
  const customerName: string = route.params?.customerName ?? "";
  const departureDate: string = route.params?.departureDate ?? "";
  const peopleCount: number = route.params?.peopleCount ?? 0;
  const totalPrice: number = route.params?.totalPrice ?? 0;
  const paymentMethod: string = route.params?.paymentMethod ?? "Chưa xác định";

  const scaleAnim = useRef(new Animated.Value(0.3)).current;

useEffect(() => {
  Animated.sequence([
    Animated.timing(scaleAnim, {
      toValue: 1.15,
      duration: 300,
      useNativeDriver: true,
    }),
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      friction: 4,
      tension: 80,
    }),
  ]).start();
}, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.successIcon,
          { transform: [{ scale: scaleAnim }] },
        ]}
          >
        <Text style={styles.successIconText}>✓</Text>
      </Animated.View>

      <Text style={styles.title}>Đặt tour thành công</Text>

      <Text style={styles.message}>
        Cảm ơn bạn đã đặt tour với ASK Travel.
        Chúng tôi sẽ liên hệ xác nhận trong vòng 24 giờ.
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>Tên tour</Text>
        <Text style={styles.value}>{tour?.title}</Text>

        <Text style={styles.label}>Khách hàng</Text>
        <Text style={styles.value}>{customerName}</Text>

        <Text style={styles.label}>Ngày khởi hành</Text>
        <Text style={styles.value}>{departureDate}</Text>

        <Text style={styles.label}>Số người</Text>
        <Text style={styles.value}>{peopleCount}</Text>

        <Text style={styles.label}>Phương thức thanh toán</Text>
        <Text style={styles.value}>{paymentMethod}</Text>

        <Text style={styles.label}>Tổng tiền</Text>
        <Text style={styles.totalPrice}>
          {totalPrice} 
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.popToTop()}
      >
        <Text style={styles.buttonText}>Quay về danh sách tour</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
  },

  successIcon: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#28a745",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 20,
  },

  successIconText: {
    color: "#fff",
    fontSize: 42,
    fontWeight: "bold",
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#28a745",
    marginBottom: 10,
    textAlign: "center",
  },

  message: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 25,
    color: "#555",
  },

  card: {
    backgroundColor: "#f5f5f5",
    padding: 18,
    borderRadius: 12,
    marginBottom: 30,
  },

  label: {
    fontSize: 14,
    color: "#666",
    marginTop: 8,
  },

  value: {
    fontSize: 17,
    fontWeight: "600",
    marginTop: 2,
  },

  totalPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#e53935",
    marginTop: 6,
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
});