import React from 'react';
import { View, Text } from 'react-native';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { commonStyles } from '../../../styles/commonStyles';

const ReactionsScreen = () => {
  const themeType = useAppSelector((state) => state.theme.theme);
  const commonStyle = commonStyles(themeType);

  return (
    <View style={commonStyle.container}>
      <Text style={commonStyle.title}>Reactions</Text>
      {/* Display reactions for different products or shows */}
    </View>
  );
};

export default ReactionsScreen;
