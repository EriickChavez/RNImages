import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import SkeletonStyles from './Skeleton.styles';

interface SkeletonProps {
  width?: number | string;
  height?: number | string;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = '100%',
}) => {
  return (
    <View style={[SkeletonStyles.contianer]}>
      <SkeletonPlaceholder borderRadius={4}>
        <SkeletonPlaceholder.Item
          width={width}
          height={height}
          borderRadius={5}
        />
      </SkeletonPlaceholder>
    </View>
  );
};

export default Skeleton;
