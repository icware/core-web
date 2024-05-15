const webpack = require('webpack'); // Importar webpack
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // Remover mapas de origem
      config.devtool = false;

      // Remover comentários de produção
      config.optimization.minimizer = [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
            },
          },
        }),
      ];

      // Definir a flag de recurso
      config.plugins.push(new webpack.DefinePlugin({
        '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': true
      }));
    }
  }
};
