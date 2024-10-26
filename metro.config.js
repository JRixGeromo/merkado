const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

// Extended Metro configuration
const defaultConfig = getDefaultConfig(__dirname);

const config = {
  resolver: {
    sourceExts: [...defaultConfig.resolver.sourceExts, 'cjs'], // Adds support for .cjs files if needed
    assetExts: [...defaultConfig.resolver.assetExts, 'txt', 'xml'], // Customize based on your asset needs
  },
  transformer: {
    babelTransformerPath: require.resolve('react-native-css-transformer'), // Use if transforming CSS files
  },
};

module.exports = mergeConfig(defaultConfig, config);
