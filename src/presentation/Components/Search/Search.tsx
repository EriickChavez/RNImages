import React from 'react';
import {View, TextInput} from 'react-native';
import SearchStyles from './Search.styles';
import FilterSvg from '../../../Assets/SVG/FilterSVG';

interface SearchProps {}

const Search: React.FC<SearchProps> = ({}) => {
  return (
    <View style={SearchStyles.container}>
      <TextInput
        placeholder="Search"
        style={[SearchStyles.input, SearchStyles.shadows]}
      />
      <View style={[SearchStyles.button, SearchStyles.shadows]}>
        <FilterSvg />
      </View>
    </View>
  );
};

export default Search;
