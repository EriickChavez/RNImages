import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {FilterCardsStyles} from './Filter.styles';

interface FilterCardsProps {
  title: string;
}

const FilterCards: React.FC<FilterCardsProps> = ({title}) => {
  return (
    <TouchableOpacity style={FilterCardsStyles.card}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default FilterCards;
