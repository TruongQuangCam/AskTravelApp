import React from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  FlingGestureHandler,
  Directions,
  State,
} from "react-native-gesture-handler";

export default function HomeScreen() {
  const navigation = useNavigation<any>();

  return (
    <FlingGestureHandler
      direction={Directions.LEFT}
      onHandlerStateChange={({ nativeEvent }) => {
        if (nativeEvent.state === State.ACTIVE) {
          navigation.getParent()?.navigate("Tours");
        }
      }}
    >
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("../../../assets/images/Homepage.png")}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.overlay}>
            <ScrollView
              style={styles.container}
              contentContainerStyle={styles.content}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.heroCard}>
                <View style={styles.headerRow}>
                  <Image
                    source={require("../../../assets/images/Asktravel_logo.png")}
                    style={styles.logo}
                    resizeMode="contain"
                  />
                  <View style={styles.headerTextWrap}>
                    <Text style={styles.title}>ASK Travel</Text>
                    <Text style={styles.subtitle}>Du lịch trải nghiệm</Text>
                    <Text style={styles.tagline}>
                      Explore the world with ASK Travel
                    </Text>
                  </View>
                </View>

                <View style={styles.introBox}>
                  <Text style={styles.heroTitle}>
                    Hành trình đáng nhớ bắt đầu từ đây
                  </Text>
                  <Text style={styles.heroText}>
                    Khám phá tour trong nước và quốc tế với phong cách chuyên nghiệp,
                    linh hoạt và giàu trải nghiệm.
                  </Text>
                </View>
              </View>

              <View style={styles.swipeHintBox}>
                <Text style={styles.swipeHintText}>
                  Vuốt sang trái để xem dịch vụ du lịch
                </Text>
              </View>

              <View style={styles.card}>
                <Text style={styles.sectionTitle}>Về chúng tôi</Text>
                <Text style={styles.paragraph}>
                  ASK Travel cung cấp tour trong nước và quốc tế, hướng đến những
                  hành trình đáng nhớ, phù hợp với nhiều nhu cầu khám phá khác nhau.
                </Text>
              </View>

              <View style={styles.row}>
                <View style={[styles.smallCard, styles.halfCard]}>
                  <Text style={styles.sectionTitle}>Sứ mệnh</Text>
                  <Text style={styles.paragraph}>
                    Mang đến những chuyến đi giàu cảm xúc, gắn với văn hóa, ẩm thực
                    và con người địa phương.
                  </Text>
                </View>

                <View style={[styles.smallCard, styles.halfCard]}>
                  <Text style={styles.sectionTitle}>Giá trị cốt lõi</Text>
                  <Text style={styles.paragraph}>
                    Tôn trọng{"\n"}Trách nhiệm{"\n"}Tâm huyết
                  </Text>
                </View>
              </View>

              <View style={styles.card}>
                <Text style={styles.sectionTitle}>Dịch vụ đa dạng</Text>

                <Text style={styles.listItem}>
                  • Tour du lịch quốc tế và trong nước
                </Text>
                <Text style={styles.listItem}>
                  • Tour combo, thiết kế theo đoàn, teambuilding, trekking
                </Text>
                <Text style={styles.listItem}>
                  • Dịch vụ visa, hộ chiếu và hỗ trợ thủ tục du lịch
                </Text>
              </View>

              <View style={styles.messageCard}>
                <Text style={styles.messageTitle}>Thông điệp</Text>
                <Text style={styles.messageText}>
                  Mỗi chuyến đi là cơ hội nghỉ ngơi, kết nối và tạo nên những kỷ niệm
                  đẹp cùng người thân, bạn bè và đồng nghiệp.
                </Text>
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    </FlingGestureHandler>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(7,59,58,0.58)",
  },

  container: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 12,
    paddingTop: 32,
    paddingBottom: 8,
  },

  heroCard: {
    backgroundColor: "rgba(255,255,255,0.14)",
    borderRadius: 18,
    padding: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  logo: {
    width: 62,
    height: 62,
    marginRight: 12,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
  },

  headerTextWrap: {
    flex: 1,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  subtitle: {
    fontSize: 17,
    color: "#F7F7F7",
    marginTop: 2,
  },

  tagline: {
    fontSize: 13,
    color: "#D7F1F0",
    marginTop: 4,
    fontStyle: "italic",
  },

  introBox: {
    backgroundColor: "rgba(255,255,255,0.12)",
    borderRadius: 14,
    padding: 12,
  },

  heroTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 6,
  },

  heroText: {
    fontSize: 14,
    lineHeight: 21,
    color: "#F1F7F7",
  },

  swipeHintBox: {
    backgroundColor: "rgba(255,255,255,0.18)",
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.20)",
  },

  swipeHintText: {
    color: "#FFFFFF",
    fontSize: 14,
    textAlign: "center",
    fontStyle: "italic",
  },

  card: {
    backgroundColor: "rgba(7,59,58,0.35)",
    borderRadius: 16,
    padding: 11,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.20)",
  },

  smallCard: {
    backgroundColor: "rgba(7,59,58,0.35)",
    borderRadius: 16,
    padding: 11,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.20)",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },

  halfCard: {
    flex: 1,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },

  paragraph: {
    fontSize: 14,
    lineHeight: 22,
    color: "#F3F8F8",
  },

  listItem: {
    fontSize: 14,
    lineHeight: 22,
    color: "#F3F8F8",
    marginBottom: 4,
  },

  messageCard: {
    backgroundColor: "rgba(255,153,51,0.60)",
    borderRadius: 16,
    padding: 11,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.22)",
  },

  messageTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },

  messageText: {
    fontSize: 14,
    lineHeight: 22,
    color: "#FFFDF8",
  },
});