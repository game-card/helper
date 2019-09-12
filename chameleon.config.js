
// 设置静态资源的线上路径
const publicPath = 'http://helper.yuuyoo.com';
// 设置api请求前缀
const apiPrefix = 'http://helper.yuuyoo.com';

cml.config.merge({
  templateLang: "cml",
  templateType: "html",
  platforms: ["web","weex","wx","alipay","baidu"],
  buildInfo: {
    wxAppId: '123456'
  },
  wx: {
    dev: {
    },
    build: {
      apiPrefix
    }
  },
  web: {
    dev: {
      analysis: false,
      console: false
    },
    build: {
      analysis: false,
      publicPath: `${publicPath}/web/`,
      apiPrefix
    }
  },
  weex: {
    dev: {
    },
    build: {
      publicPath: `${publicPath}/weex/`,
      apiPrefix
    },
    custom: {
      publicPath: `${publicPath}/wx/`,
      apiPrefix
    }
  }
})

