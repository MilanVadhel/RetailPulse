module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@app/components': './src/components',
          '@app/navigation': './src/navigation',
          '@app/screens': './src/screens',
          '@app/services': './src/services',
          '@app/types': './src/types',
          '@app/utils': './src/utils',
          '@app/layout': './src/layout',
          '@app/assets': './src/assets',
        },
      },
    ],
  ],
};
