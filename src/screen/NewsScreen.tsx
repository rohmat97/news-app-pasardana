// HomeScreen.tsx
import React from 'react';
import { View, Text, FlatList, ActivityIndicator, useWindowDimensions } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useRss } from '../hooks/useRss';
import { NewsComponent } from '../components/NewsComponent';
import HeaderComponent from '../components/HeaderComponent';

type HomeScreenProps = {
  navigation: StackNavigationProp<any>;
};

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const { feedData, invalidate } = useRss()
  
  return (
    <View style={{ flex: 1 }}>
      <HeaderComponent title="PasarDana News" />
      <FlatList
        style={{ flex: 1, }}
        data={feedData}
        renderItem={({ item }: any) => <NewsComponent item={item} />}
        contentContainerStyle={{ gap: 24, padding: 12, paddingBottom: 48 }}
        ListEmptyComponent={
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              marginVertical: useWindowDimensions().height * 0.25,
            }}
          >
            <ActivityIndicator size={60} />
            <Text style={{ textAlign: "center" }}>
              Please wait for a moment . . .{" "}
            </Text>
          </View>
        }
      />
    </View>
  );
};

export default HomeScreen;


