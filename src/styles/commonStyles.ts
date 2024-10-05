import { StyleSheet, Platform } from 'react-native';
import { normalizeFontSize, normalizeHeight } from '../utils/responsive'; // Import responsive utilities

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: normalizeHeight(16),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: normalizeHeight(3),
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    width: '80%',  // Ensures a good width for the input field
    height: normalizeHeight(45),  // Proper height for the input field
    paddingHorizontal: 10,  // Padding inside the container
  },
  input: {
    flex: 1,
    fontSize: normalizeFontSize(16),
    color: '#333',
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: normalizeFontSize(28),
    fontWeight: 'bold',
    marginBottom: normalizeHeight(20),
    textAlign: 'center',
    color: '#4CAF50',
  },
  forgotPasswordText: {
    color: '#4CAF50',
    marginBottom: 20,
    textAlign: 'center',
    fontSize: normalizeFontSize(12),
  },
  orText: {
    fontSize: normalizeFontSize(14),
    color: '#7F7F7F',
    marginBottom: 20,
    textAlign: 'center',
  },
  heroContainer: {
    height: normalizeHeight(200),
    backgroundColor: '#E0F7FA',  // Light teal background for promotions or banners
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: normalizeHeight(16),
  },
  heroText: {
    fontSize: normalizeFontSize(28),  // Large text for hero section
    fontWeight: 'bold',
    color: '#00796B',  // Darker teal for text
    textAlign: 'center',
  },
  button: {
    padding: normalizeHeight(15),
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#00796B',  // Teal background for primary action buttons
    width: Platform.select({
      web: '40%',
      default: '80%',
    }),
  },
  buttonText: {
    fontSize: normalizeFontSize(16),
    color: '#fff',  // White text for buttons
  },
  box: {
    padding: normalizeHeight(16),
    backgroundColor: '#f8f9fa',
    borderRadius: 12,  // Rounded corners for cards
    marginVertical: normalizeHeight(16),
    width: Platform.select({
      web: '50%',
      default: '80%',
    }),
    shadowColor: '#000',  // Shadow for product cards
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,  // Elevation for Android
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: normalizeHeight(16),
    width: Platform.select({
      web: '50%',
      default: '80%',
    }),
    backgroundColor: '#FFF',
    paddingHorizontal: normalizeHeight(10),
  },
  icon: {
    fontSize: normalizeFontSize(24),
    color: '#000',
    margin: normalizeHeight(8),
  },
  productTitle: {
    fontSize: normalizeFontSize(18),
    fontWeight: 'bold',
    color: '#333',
    marginBottom: normalizeHeight(8),
  },
  productDescription: {
    fontSize: normalizeFontSize(14),
    color: '#666',  // Slightly lighter text for descriptions
    marginBottom: normalizeHeight(8),
  },
  productPrice: {
    fontSize: normalizeFontSize(16),
    color: '#00796B',  // Teal color for prices
    fontWeight: 'bold',
  },
  categoryCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: normalizeHeight(10),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: normalizeHeight(12),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  categoryText: {
    fontSize: normalizeFontSize(14),
    fontWeight: '500',
    color: '#333',
    marginTop: normalizeHeight(8),
  },
});
