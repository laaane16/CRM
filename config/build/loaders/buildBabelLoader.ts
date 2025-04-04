export const babelLoader = (isDev: boolean, isTsx: boolean) => ({
  test: isTsx ? /\.(tsx|jsx)$/ : /\.(ts|js)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]],
      plugins: [
        [
          '@babel/plugin-transform-typescript',
          {
            isTSX: isTsx,
          },
        ],
        '@babel/plugin-transform-runtime',
      ],
    },
  },
});
