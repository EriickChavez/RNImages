import React from 'react';
import {View, ScrollView} from 'react-native';
import {FilterListStyles} from './Filter.styles';
import FilterCards from './FilterCards';

interface FilterProps {}

const Filter: React.FC<FilterProps> = ({}) => {
  const arr: string[] = [
    'Interior Design',
    'Abstract',
    'Landscape',
    'Birds',
    'Nature',
    'Elephant',
  ];
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={FilterListStyles.scroll}>
      {arr.map((item, index) => (
        <View style={FilterListStyles.card} key={`key-card-filter-${index}`}>
          <FilterCards title={item} />
        </View>
      ))}
    </ScrollView>
  );
};

export default Filter;
