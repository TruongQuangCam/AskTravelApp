import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function MoreScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerRow}>
        <Image
          source={require("../../../assets/images/Asktravel_logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <View>
          <Text style={styles.title}>Thông tin thêm</Text>
          <Text style={styles.subtitle}>Liên hệ và chính sách</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>ASK Travel</Text>
        <Text style={styles.infoText}>
          Công ty TNHH Tư vấn Đào tạo và Dịch vụ Du lịch ASK
        </Text>
        <Text style={styles.infoText}>Mã số doanh nghiệp: 0317274063</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Thông tin liên hệ</Text>
        <Text style={styles.infoText}>Hotline: 090.990.4227</Text>
        <Text style={styles.infoText}>Hotline 2: 077.463.8724</Text>
        <Text style={styles.infoText}>Email: asktravel.contact@gmail.com</Text>
        <Text style={styles.infoText}>Website: asktravel.vn</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Địa chỉ</Text>
        <Text style={styles.infoText}>
          Địa chỉ đăng ký giấy phép: 130/11 Hồ Bá Kiện, Phường 15, Quận 10,
          Thành phố Hồ Chí Minh
        </Text>
        <Text style={styles.infoText}>
          Văn phòng đăng ký: 1436 Trịnh Quang Nghị, Phường 7, Quận 8,
          Thành phố Hồ Chí Minh
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Chính sách & thông tin cần biết</Text>
        <Text style={styles.listItem}>• Điều kiện điều khoản</Text>
        <Text style={styles.listItem}>• Phương thức thanh toán</Text>
        <Text style={styles.listItem}>• Bảo mật thông tin khách hàng</Text>
        <Text style={styles.listItem}>• Chính sách quy định</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Hỗ trợ khách hàng</Text>
        <Text style={styles.paragraph}>
          Nếu bạn cần tư vấn tour, hỏi thông tin dịch vụ hoặc gửi góp ý về chất
          lượng phục vụ, hãy liên hệ ASK Travel qua hotline hoặc email để được
          phản hồi sớm.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: "#073B3A",
  },
  content: {
    padding: 16,
    paddingBottom: 28,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 20,
  },
  logo: {
  width: 64,
  height: 64,
  marginRight: 12,
  borderRadius: 12,
  backgroundColor: "#FFFFFF",
  },
  title: {
  fontSize: 26,
  fontWeight: "bold",
  color: "#FFFFFF",
  },
  subtitle: {
  fontSize: 15,
  color: "#DCEBEC",
  marginTop: 4,
  },
  card: {
  backgroundColor: "#DCEBEC",
  borderRadius: 12,
  padding: 16,
  marginBottom: 14,
  borderWidth: 1,
  borderColor: "#B7D3D3",
  },
  sectionTitle: {
  fontSize: 18,
  fontWeight: "bold",
  color: "#073B3A",
  marginBottom: 10,
  },
  infoText: {
  fontSize: 15,
  lineHeight: 23,
  color: "#1F2A37",
  marginBottom: 6,
  },
  paragraph: {
  fontSize: 15,
  lineHeight: 22,
  color: "#1F2A37",
  },
  listItem: {
  fontSize: 15,
  lineHeight: 24,
  color: "#1F2A37",
  },
});