import { StyleSheet, Platform } from 'react-native';
import { normalizeFontSize, normalizeHeight } from '../utils/responsive'; // Import the normalize function

const styles = StyleSheet.create({
  // General screen container
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7', // Light background
    paddingHorizontal: 20, // Padding for general content
    paddingTop: Platform.OS === 'ios' ? 40 : 20, // Extra padding for top on iOS
  },

  // Header section
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: normalizeFontSize(24), // Use the responsive font size
    fontWeight: '700',
    color: '#333', // Dark text
  },
  iconButton: {
    backgroundColor: '#FFF', // White background for icons
    padding: 10,
    borderRadius: 12,
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },

  // Product card
  productCard: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    marginBottom: 20,
    padding: 15,
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  productImage: {
    width: '100%',
    height: normalizeHeight(200), // Adjust height based on screen
    borderRadius: 15,
    marginBottom: 10,
  },
  productTitle: {
    fontSize: normalizeFontSize(18), // Responsive font size
    fontWeight: '700',
    color: '#333',
  },
  productDescription: {
    fontSize: normalizeFontSize(14), // Responsive font size
    fontWeight: '400',
    color: '#777', // Light gray for description
    marginBottom: 8,
  },
  productPrice: {
    fontSize: normalizeFontSize(16), // Responsive font size
    fontWeight: '600',
    color: '#00A876', // Greenish color for price
  },

  // Rounded button (Add to Cart, etc.)
  button: {
    backgroundColor: '#00A876', // Greenish background
    paddingVertical: 15,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: normalizeFontSize(16), // Responsive font size
    fontWeight: '600',
  },
});

export default styles;
