// module.exports={
//     configureWebpack:{
//         resolve:{
//           extentions:[],
//           alias:{
//             "@":'src',
//             'assets':'@/assets',
//             'common':'@/common',
//             'components':'@/components',
//             'network':'@/network',
//             'views':'@/views',
//           }

//         }
//     }

// }
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}