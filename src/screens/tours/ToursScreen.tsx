import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function ToursScreen() {
  const navigation = useNavigation<any>();

  return (
    <LinearGradient
      colors={["#013C3B", "#084745", "#0A5C59"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>ASK Travel Services</Text>
        <Text style={styles.headerSubtitle}>
          Chọn dịch vụ phù hợp cho hành trình của bạn
        </Text>
      </View>

      {/* TOUR TRONG NƯỚC */}
      <TouchableOpacity
        activeOpacity={0.88}
        style={styles.card}
        onPress={() =>
          navigation.navigate("ServiceDetail", { category: "domestic" })
        }
      >
        <ImageBackground
          source={require("../../../assets/images/services/halong.png")}
          style={styles.image}
          imageStyle={styles.imageRadius}
        >
          <View style={styles.overlay}>
            <View style={styles.iconBox}>
              <Image
                source={require("../../../assets/images/services/vietnam-map.png")}
                style={styles.icon}
              />
            </View>

            <View style={styles.textBox}>
              <Text style={styles.title}>Tour trong nước</Text>
              <Text style={styles.subtitle}>Khám phá Việt Nam yêu dấu!</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>

      {/* TOUR NGOÀI NƯỚC */}
      <TouchableOpacity
        activeOpacity={0.88}
        style={styles.card}
        onPress={() =>
          navigation.navigate("ServiceDetail", { category: "international" })
        }
      >
        <ImageBackground
          source={require("../../../assets/images/services/statue-liberty.png")}
          style={styles.image}
          imageStyle={styles.imageRadius}
        >
          <View style={styles.overlay}>
            <View style={styles.iconBox}>
              <FontAwesome5 name="globe-americas" size={28} color="#fff" />
            </View>

            <View style={styles.textBox}>
              <Text style={styles.title}>Tour ngoài nước</Text>
              <Text style={styles.subtitle}>Trải nghiệm thế giới</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>

      {/* DỊCH VỤ HỖ TRỢ */}
      <TouchableOpacity
        activeOpacity={0.88}
        style={styles.card}
        onPress={() =>
          navigation.navigate("ServiceDetail", { category: "support" })
        }
      >
        <ImageBackground
          source={require("../../../assets/images/services/support-staff.png")}
          style={styles.image}
          imageStyle={styles.imageRadius}
        >
          <View style={styles.overlay}>
            <View style={styles.iconBox}>
              <Image
                source={require("../../../assets/images/services/passport-icon.png")}
                style={styles.icon}
              />
            </View>

            <View style={styles.textBox}>
              <Text style={styles.title}>Dịch vụ hỗ trợ</Text>
              <Text style={styles.subtitle}>
                Dịch vụ Visa - Passport - ...
              </Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
    paddingBottom: 10,
  },

  header: {
    paddingHorizontal: 18,
    marginBottom: 6,
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  headerSubtitle: {
    marginTop: 4,
    fontSize: 14,
    color: "#EAF4FF",
  },

  card: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 12,
    borderRadius: 18,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },

  image: {
    flex: 1,
    justifyContent: "center",
  },

  imageRadius: {
    borderRadius: 18,
  },

  overlay: {
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    paddingHorizontal: 22,
    backgroundColor: "rgba(0,0,0,0.28)",
  },

  iconBox: {
    width: 52,
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    width: 42,
    height: 42,
    resizeMode: "contain",
  },

  textBox: {
    marginLeft: 8,
    flex: 1,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    flexShrink: 1,
    textShadowColor: "rgba(0,0,0,0.35)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },

  subtitle: {
    color: "#F0F6FF",
    fontSize: 15,
    marginTop: 4,
    flexShrink: 1,
    textShadowColor: "rgba(0,0,0,0.35)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});