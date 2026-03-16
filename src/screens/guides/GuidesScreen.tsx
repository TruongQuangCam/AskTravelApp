import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function GuidesScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerRow}>
        <Image
          source={require("../../../assets/images/Asktravel_logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <View>
          <Text style={styles.title}>Cẩm nang du lịch</Text>
          <Text style={styles.subtitle}>Kinh nghiệm hữu ích trước mỗi chuyến đi</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Các chuyên mục</Text>
        <Text style={styles.listItem}>• Kinh nghiệm</Text>
        <Text style={styles.listItem}>• Ẩm thực</Text>
        <Text style={styles.listItem}>• Review</Text>
        <Text style={styles.listItem}>• Xu hướng</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>1. Chuẩn bị trước chuyến đi</Text>
        <Text style={styles.paragraph}>
          Hãy kiểm tra kỹ lịch trình, giấy tờ cá nhân, giờ khởi hành, thời tiết
          tại điểm đến và những vật dụng cần thiết như thuốc cơ bản, sạc dự
          phòng, giày phù hợp và quần áo theo điều kiện khí hậu.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>2. Kinh nghiệm di chuyển</Text>
        <Text style={styles.paragraph}>
          Nếu đi du lịch nước ngoài và sử dụng phương tiện công cộng, bạn nên
          tìm hiểu trước sơ đồ tuyến, điểm lên xuống và cách mua thẻ đi lại.
          Việc chuẩn bị trước giúp bạn chủ động và tiết kiệm thời gian hơn.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>3. Ăn uống và trải nghiệm địa phương</Text>
        <Text style={styles.paragraph}>
          Một chuyến đi trọn vẹn không chỉ là tham quan mà còn là thưởng thức ẩm
          thực địa phương, tìm hiểu văn hóa vùng miền và dành thời gian cảm nhận
          nhịp sống ở nơi mình đến.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>4. Giữ an toàn trong hành trình</Text>
        <Text style={styles.listItem}>• Luôn giữ giấy tờ và tiền ở nơi an toàn.</Text>
        <Text style={styles.listItem}>• Lưu số điện thoại liên hệ khi cần hỗ trợ.</Text>
        <Text style={styles.listItem}>• Tuân thủ giờ giấc và hướng dẫn của đoàn.</Text>
        <Text style={styles.listItem}>• Không tách đoàn quá lâu ở nơi lạ.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>5. Gợi ý cho người đi lần đầu</Text>
        <Text style={styles.paragraph}>
          Nếu đây là chuyến đi đầu tiên, bạn nên chọn lịch trình vừa phải, ưu
          tiên tour có hướng dẫn viên, điểm đón rõ ràng và thông tin dịch vụ
          minh bạch để dễ theo dõi và ít áp lực hơn.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: "#C9A24D",
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
  color: "#073B3A",
  },
  subtitle: {
  fontSize: 15,
  color: "#FFFFFF",
  marginTop: 4,
  },
  card: {
  backgroundColor: "#F3E2B8",
  borderRadius: 14,
  padding: 16,
  marginBottom: 14,
  borderWidth: 1,
  borderColor: "#E0C98D",
  },
  sectionTitle: {
  fontSize: 18,
  fontWeight: "bold",
  color: "#073B3A",
  marginBottom: 10,
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