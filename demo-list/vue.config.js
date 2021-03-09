const webpack = require('webpack')
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');// 打包去除console
const CompressionWebpackPlugin = require('compression-webpack-plugin');// 压缩JS和css

const productionGzipExtensions = ['js', 'css'];
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
	baseUrl: process.env.NODE_ENV === 'production' ? './' : './',
	devServer: {
		port: 8086,
		disableHostCheck: true, //处理host不识别问题
	},
  assetsDir: 'static',
  productionSourceMap: false,
	//cdn优化
	/*configureWebpack: conf => {
	        //生产环境
	        if (process.env.NODE_ENV === 'production') {
	                //外部cdn导入部分
	                conf.externals = {
	                        'vue': 'Vue',
	                        ' vue-router': 'VueRouter',
	                        'vuex': 'Vuex',
	                        'mint-ui': 'MINT',
	                        'element-ui': 'ELEMENT'
	                }
	        }
	}*/
	chainWebpack(config) {
		config.resolve.alias
		.set('api', resolve('src/api'))
		
	},
  configureWebpack: (config) => {
    config.performance = {
      hints:'warning',
      maxEntrypointSize: 50000000,
      maxAssetSize: 30000000,
      assetFilter: function(assetFilename) {
          return assetFilename.endsWith('.js');
      }
    }
    if (process.env.NODE_ENV === 'production') {
      config.mode = 'production'
      config.plugins.push(new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp(`\\.(${productionGzipExtensions.join('|')})$`),
        threshold: 10240,
        minRatio: 0.8,
      }));
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_debugger: true, // console
              drop_console: true,
              pure_funcs: ['console.log'] // 移除console
            },
            warnings: false,
          },
          sourceMap: false,
          parallel: true,
        }),
      );
    } else {
      config.mode = 'development'
    }
  }
}
