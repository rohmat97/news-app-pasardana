import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";

export const NewsComponent = ({ item }:any) => {
    const uri = item?.enclosure?.link.split("?");
    const navigation  =useNavigation()
    return (
      <TouchableOpacity 
      onPress={() => navigation.navigate("detail-news", { params: item })}>
      <View style={styles.container}>
        <Image
          source={{ uri: uri[0] }}
          style={styles.imageRenderItems}
          resizeMode="contain"
        />
        <View style={{flexDirection: "column", marginHorizontal: 8, marginTop: -12, width:'65%' }}>
          <Text style={styles.headerRenderItems} numberOfLines={2}>
            {item?.title}
          </Text>
          <Text style={styles.FooterRenderItems} numberOfLines={2}>
            {item?.pubDate}
          </Text>
        </View>
      </View>
      </TouchableOpacity>
    );
  };


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
    },
    imageRenderItems: {
      width: 120,
      height: 64,
      borderRadius: 8,
    },
    headerRenderItems: {
      top: 12,
      textAlign: "left",
      color: "#22313F",
      fontSize: 14,
      fontWeight: "700",
    },
    FooterRenderItems: {
      textAlign: "left",
      color: "rgba(34, 49, 63, 0.5)",
      fontWeight: "700",
      fontSize: 12,
      marginTop: 4,
      top: 24,
    },
    header: {
      color: "white",
      fontSize: 24,
    },
  
  });