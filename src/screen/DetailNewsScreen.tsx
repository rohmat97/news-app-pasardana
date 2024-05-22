import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Linking, TouchableOpacity } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import { useRoute } from '@react-navigation/native';

const DetailScreen = () => {
  const route = useRoute();
  // Sample data
  const newsData = (route?.params as any)?.params ?? {
    author: "rezy",
    categories: ["saham", "nikkei", "bursa efek tokyo"],
    content: "Indeks Nikkei 225 di Bursa Efek Tokyo, Jepang, turun 329,83 poin, atau sekitar 0,85 persen, pada Rabu (22/5/2024), menjadi 38.617,10. Indeks Topix melemah 0,81 persen menjadi 2.737,36.",
    description: "Indeks Nikkei 225 di Bursa Efek Tokyo, Jepang, turun 329,83 poin, atau sekitar 0,85 persen, pada Rabu (22/5/2024), menjadi 38.617,10. Indeks Topix melemah 0,81 persen menjadi 2.737,36.",
    enclosure: {
      link: "https://pasardana.id/media/60862/topix.jpg?anchor=center&amp;mode=crop&amp;width=175&amp;height=125&amp;rnd=133608607700000000"
    },
    guid: "64915",
    link: "https://pasardana.id/news/2024/5/22/indeks-nikkei-turun-0-85-persen/",
    pubDate: "2024-05-22 07:12:44",
    thumbnail: "",
    title: "Indeks Nikkei Turun 0,85 Persen"
  };

  const uri = newsData?.enclosure?.link.split("?");
  const handleOpenLink = () => {
    Linking.openURL(newsData.link);
  };

  return (
    <ScrollView style={styles.container}>
      <HeaderComponent title="Detail News" />
      <Image source={{ uri: uri[0] }} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{newsData.title}</Text>
        <Text style={styles.author}>{`Author: ${newsData.author}`}</Text>
        <Text style={styles.pubDate}>{`Published Date: ${newsData.pubDate}`}</Text>
        <Text style={styles.description}>{newsData.description}</Text>
        <Text style={styles.content}>{newsData.content}</Text>
        <Text style={styles.categories}>{`Categories: ${newsData.categories.join(', ')}`}</Text>
        <TouchableOpacity onPress={handleOpenLink}>
          <Text style={styles.source}>{`Source: ${newsData.link}`}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  author: {
    fontSize: 16,
    marginBottom: 5,
  },
  pubDate: {
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
  },
  categories: {
    fontSize: 16,
    marginTop: 10,
  },
  source: {
    fontSize: 16,
    marginTop: 5,
    color: 'blue', // Add styling for links
  },
});

export default DetailScreen;
