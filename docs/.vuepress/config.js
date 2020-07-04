module.exports = {
    title:'救赎之旅',
    description:"救赎之旅的博客",
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'keywords', content: 'vuepress,救赎之旅' }],
        ['meta', { author: 'keywords', content: '救赎之旅' }]
      ],
    themeConfig: {
      lastUpdated: '更新时间',
      logo: '/assets/img/logo.png',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/about' },
        { text: 'about1', link: '/about1' },
        { text: 'css', link: '/css/' },
      ],
      sidebar:{
          "/css/":[
            'css1',
            'css2',
            'css3',
          ]
      }
        //   sidebar:[
        //   '',
        //   'about',
        //   'about1',
        //   {
        //     title: 'css',   // 必要的
        //     path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        //     collapsable: false, // 可选的, 默认值是 true,
        //     sidebarDepth: 1,    // 可选的, 默认值是 1
        //     children: [
        //       '/css/css1',
        //       '/css/css2',
        //       '/css/css3',
        //     ]
        //   },
     // ]
    }
  }