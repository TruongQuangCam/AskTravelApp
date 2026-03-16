import React, { useMemo, useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";

export default function PaymentScreen({ navigation, route }: any) {
  const { tour, customerName, departureDate, peopleCount } = route.params;

  const [selectedMethod, setSelectedMethod] = useState("bank");
  const [isProcessing, setIsProcessing] = useState(false);

  const parsedPeopleCount = Number(peopleCount) || 1;

  function parsePrice(price: any) {
    if (typeof price === "number") return price;

    if (typeof price === "string") {
      const clean = price.replace(/[^\d]/g, "");
      return Number(clean) || 0;
    }

    return 0;
  }

  const unitPrice = useMemo(() => parsePrice(tour?.price), [tour]);
  const totalPrice = unitPrice * parsedPeopleCount;

  function formatCurrency(value: number) {
    return value.toLocaleString("vi-VN") + " đ";
  }

  function getPaymentMethodLabel(method: string) {
    if (method === "bank") return "Chuyển khoản ngân hàng";
    if (method === "ewallet") return "Ví điện tử";
    if (method === "office") return "Thanh toán tại văn phòng";
    return "";
  }

  function handleConfirmPayment() {
    if (!selectedMethod) {
      Alert.alert("Thông báo", "Vui lòng chọn phương thức thanh toán.");
      return;
    }

    if (isProcessing) return;

    setIsProcessing(true);

    setTimeout(() => {
      navigation.navigate("BookingSuccess", {
        tour,
        customerName,
        departureDate,
        peopleCount: parsedPeopleCount,
        paymentMethod: getPaymentMethodLabel(selectedMethod),
        totalPrice: formatCurrency(totalPrice),
      });

      setIsProcessing(false);
    }, 2000);
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Thanh toán</Text>
      <Text style={styles.subtitle}>Xác nhận trước khi hoàn tất đặt tour</Text>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Thông tin tour</Text>
        <Text style={styles.infoText}>Tên tour: {tour?.title}</Text>
        <Text style={styles.infoText}>Địa điểm: {tour?.location}</Text>
        <Text style={styles.infoText}>Thời lượng: {tour?.duration}</Text>
        <Text style={styles.infoText}>Giá / người: {formatCurrency(unitPrice)}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Thông tin khách hàng</Text>
        <Text style={styles.infoText}>Họ tên: {customerName}</Text>
        <Text style={styles.infoText}>Ngày khởi hành: {departureDate}</Text>
        <Text style={styles.infoText}>Số người: {parsedPeopleCount}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Phương thức thanh toán</Text>

        <TouchableOpacity
          style={[
            styles.methodItem,
            selectedMethod === "bank" && styles.methodItemSelected,
          ]}
          onPress={() => setSelectedMethod("bank")}
        >
          <Text style={styles.radio}>{selectedMethod === "bank" ? "◉" : "○"}</Text>
          <Text style={styles.methodText}>Chuyển khoản ngân hàng</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.methodItem,
            selectedMethod === "ewallet" && styles.methodItemSelected,
          ]}
          onPress={() => setSelectedMethod("ewallet")}
        >
          <Text style={styles.radio}>{selectedMethod === "ewallet" ? "◉" : "○"}</Text>
          <Text style={styles.methodText}>Ví điện tử</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.methodItem,
            selectedMethod === "office" && styles.methodItemSelected,
          ]}
          onPress={() => setSelectedMethod("office")}
        >
          <Text style={styles.radio}>{selectedMethod === "office" ? "◉" : "○"}</Text>
          <Text style={styles.methodText}>Thanh toán tại văn phòng</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.totalRow}>
        <Text style={styles.totalLabel}>Tổng tiền:</Text>
        <Text style={styles.totalValue}>{formatCurrency(totalPrice)}</Text>
      </View>

      <TouchableOpacity
        style={[
          styles.confirmButton,
          isProcessing && styles.confirmButtonDisabled,
        ]}
        onPress={handleConfirmPayment}
        disabled={isProcessing}
      >
        {isProcessing ? (
          <View style={styles.processingRow}>
            <ActivityIndicator size="small" color="#073B3A" />
            <Text style={styles.confirmButtonText}> Đang xử lý...</Text>
          </View>
        ) : (
          <Text style={styles.confirmButtonText}>Xác nhận thanh toán</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Quay lại chỉnh thông tin</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#073B3A",
  },

  content: {
    padding: 12,
    paddingBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 4,
  },

  subtitle: {
    fontSize: 14,
    color: "#DCEBEC",
    textAlign: "center",
    marginTop: 2,
    marginBottom: 12,
  },

  card: {
    backgroundColor: "#DCEBEC",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#B7D3D3",
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#073B3A",
    marginBottom: 8,
  },

  infoText: {
    fontSize: 14,
    lineHeight: 21,
    color: "#1F2A37",
    marginBottom: 4,
  },

  methodItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 8,
    backgroundColor: "#F4FAFA",
  },

  methodItemSelected: {
    borderWidth: 1,
    borderColor: "#073B3A",
    backgroundColor: "#EAF6F6",
  },

  radio: {
    fontSize: 17,
    marginRight: 10,
    color: "#073B3A",
  },

  methodText: {
    fontSize: 14,
    color: "#1F2A37",
  },

  totalRow: {
    backgroundColor: "#F3E2B8",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E0C98D",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  totalLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#073B3A",
  },

  totalValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#C0392B",
  },

  confirmButton: {
    backgroundColor: "#0077cc",
    paddingVertical: 13,
    borderRadius: 12,
    alignItems: "center",
  },

  confirmButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },

  confirmButtonDisabled: {
    opacity: 0.8,
  },

  processingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  backButton: {
    backgroundColor: "#b34700",
    paddingVertical: 13,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },

  backButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});