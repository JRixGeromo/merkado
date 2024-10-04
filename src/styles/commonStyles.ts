import { StyleSheet, Platform } from 'react-native';
import { normalizeFontSize, normalizeHeight } from '../utils/responsive'; // Import responsive utilities

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,  // Takes up the full screen
    justifyContent: 'center',  // Centers content vertically
    alignItems: 'center',  // Centers content horizontally
    backgroundColor: '#fff',  // White background (you can change this as needed)
    padding: normalizeHeight(16),  // Normalized padding
  },
  button: {
    padding: normalizeHeight(15), // Use normalized height instead of screen width-based padding
    borderRadius: 8,
    alignItems: 'center',
    width: Platform.select({
      web: '40%',  // Adjust for larger screen widths on desktop
      default: '80%',  // Default for mobile
    }),
  },
  buttonText: {
    fontSize: normalizeFontSize(16), // Use normalized font size
  },
  input: {
    flex: 1,
    fontSize: normalizeFontSize(16),  // Use normalized font size for input
    padding: normalizeHeight(10), // Add padding to inputs for better usability
  },
  box: {
    padding: normalizeHeight(16),  // Use normalized padding
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    marginVertical: normalizeHeight(16), // Use normalized margin
    width: Platform.select({
      web: '50%',  // Adjust width for desktop
      default: '80%',  // Default width for mobile
    }),
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: normalizeHeight(16),  // Use normalized margin
    width: Platform.select({
      web: '50%',  // Adjust for desktop width
      default: '80%',  // Default width for mobile
    }),
  },
  icon: {
    fontSize: normalizeFontSize(24),  // Define the font size for the icon
    color: '#000',  // Define the color of the icon (black in this case)
    margin: normalizeHeight(8),  // Define margin around the icon
  },
  title: {
    fontSize: normalizeFontSize(24),  // Use a larger font size for titles
    fontWeight: 'bold',  // Make the title bold
    marginBottom: normalizeHeight(20),  // Add space below the title
    textAlign: 'center',  // Center the title text
    color: '#333',  // Darker text color for better readability
  },
});
