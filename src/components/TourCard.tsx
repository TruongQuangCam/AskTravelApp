import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Tour } from "../types/Tour";

type Props = {
  tour: Tour;
  onPress?: () => void;
};

export default function TourCard({ tour, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: tour.image }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.title}>{tour.title}</Text>

        <Text style={styles.meta}>
          {tour.location} • {tour.duration}
        </Text>

        <Text style={styles.price}>{tour.price.toLocaleString()} đ</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginBottom: 15,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 2,
  },

  image: {
    width: "100%",
    height: 180,
  },

  info: {
    padding: 12,
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },

  meta: {
    color: "#666",
    marginBottom: 5,
  },

  price: {
    color: "#e53935",
    fontWeight: "bold",
    fontSize: 16,
  },
});