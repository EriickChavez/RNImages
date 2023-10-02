import React from 'react';
import {View, SafeAreaView} from 'react-native';
import Header from '../../Components/Header/Header';
import HomeStyles from './Home.styles';
import Search from '../../Components/Search/Search';
import Filter from '../../Components/Filter/Filter';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <SafeAreaView style={HomeStyles.safeArea}>
      <View style={HomeStyles.container}>
        <Header />
        <View style={HomeStyles.separatorHorizontal} />
        <Search />
        <View style={HomeStyles.separatorHorizontal} />
        <Filter />
        <View style={HomeStyles.separatorHorizontal} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
