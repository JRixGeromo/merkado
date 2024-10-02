import { StyleSheet } from 'react-native';
import { normalizeFontSize, normalizeHeight } from '../utils/responsive'; // Import responsive utilities

export const commonStyles = StyleSheet.create({
  button: {
    padding: normalizeHeight(15), // Use normalized height instead of screen width-based padding
    borderRadius: 8,
    alignItems: 'center',
    width: '80%',  // Use percentage for width or normalizeWidth() if applicable
  },
  buttonText: {
    fontSize: normalizeFontSize(16), // Use normalized font size
  },
  input: {
    flex: 1,
    fontSize: normalizeFontSize(16),  // Use normalized font size for input
  },
  box: {
    padding: normalizeHeight(16),  // Use normalized padding
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    marginVertical: normalizeHeight(16), // Use normalized margin
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: normalizeHeight(16),  // Use normalized margin
    width: '80%',  // Use percentage or normalizeWidth() if available
  },
});
