// HomeScreen.tsx
import React from 'react';
import { View, Text, FlatList, ActivityIndicator, useWindowDimensions } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useRss } from '../hooks/useRss';
import { NewsComponent } from '../components/NewsComponent';
import HeaderComponent from '../components/HeaderComponent';
import LoadingComponent from '../components/LoadingComponent';

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
          <LoadingComponent />
        }
      />
    </View>
  );
};

export default HomeScreen;


