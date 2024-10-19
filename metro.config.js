const { getDefaultConfig } = require("expo/metro-config");

// Get the default config from Expo
const config = getDefaultConfig(__dirname);

// Extend the default config with your custom resolver
config.resolver = {
  ...config.resolver,
  sourceExts: [...config.resolver.sourceExts, "cjs", "mjs"], // Add additional source extensions
  assetExts: [...config.resolver.assetExts, "glb", "gltf", "png", "jpg"], // Add additional asset extensions
};

module.exports = config;
