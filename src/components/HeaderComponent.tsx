import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const navigation = useNavigation()

  const renderBackButton = () => {
    if (navigation.canGoBack()) {
      return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
      );
    }
    return null;
  };
  return (
    <LinearGradient
      colors={['#DC5D57', '#D3342D']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.header}>
        {renderBackButton()}
        <Text style={[styles.title, {
          left: navigation.canGoBack() ? Dimensions.get('screen').width * 0.275 : Dimensions.get('screen').width * 0.35
        }]}>{title}</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 80,
    paddingTop: 36,
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
  backButton: {
    color: 'white',
    fontSize: 16,
    left: 16,
  },
});

export default Header;
