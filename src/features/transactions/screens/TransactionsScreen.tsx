import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { theme as appTheme } from '../../../styles/theme';

const TransactionsScreen = () => {
  const themeType = useAppSelector(state => state.theme.theme);
  const myTheme = appTheme[themeType];

  return (
    <View style={[styles.container]}>
      <Text style={[styles.title, { color: myTheme.text1st }]}>
        Transactions
      </Text>
      <View
        style={[
          styles.card,
          { backgroundColor: myTheme.cardBackground },
        ]}
      >
        <Text style={{ color: myTheme.text1st }}>
          Order #12345
        </Text>
        <Text style={{ color: myTheme.text2nd }}>Delivered</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent', // Let the gradient show through
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default TransactionsScreen;
