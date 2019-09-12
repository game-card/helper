
module.exports = [
  {
    method: ['get', 'post'],
    path: '/api/getMessage',
    controller: function (req, res, next) {
      res.json({
        total: 0,
        message: [{
          name: 'Hello chameleon!'
        }]
      });
    }
  },
  {
    method: ['get', 'post'],
    path: '/api/getBannerList',
    controller: function (req, res, next) {
      res.json({
        total: 0,
        list: [
          {
            "imgUrl": "https://cmljs.org/cml-demo/src/assets/images/yanxuan/288bf88910aeba6d89689b99bec93133.jpg"
          },
          {
            "imgUrl": "https://cmljs.org/cml-demo/src/assets/images/yanxuan/3804d6f02516e59927e07f091c8f1b27.jpg"
          },
          {
            "imgUrl": "https://cmljs.org/cml-demo/src/assets/images/yanxuan/ce535663c045b5e877540b0e0be16bb3.jpg"
          }
        ]
      });
    }
  },
  {
    method: ['get', 'post'],
    path: '/api/game/online',
    controller: function (req, res, next) {
      res.json({
        total: 0,
        result: [
          {
              "name" : "中秋系列",
              "icon" :  "https://cmljs.org/cml-demo/src/assets/images/yanxuan/82ae05c313b93355239ca1795917a5ac.png"
          },
          {
              "name" : "超值套装",
              "icon" :  "https://cmljs.org/cml-demo/src/assets/images/yanxuan/bd6f7deba69c8af2f6bb80025d7b98de.png"
          },
          {
              "name" : "热卖爆品",
              "icon" :  "https://cmljs.org/cml-demo/src/assets/images/yanxuan/c3418cc60d3968263c5b2ac7fb153c34.png"
          },
          {
              "name" : "999+好评",
              "icon" :  "https://cmljs.org/cml-demo/src/assets/images/yanxuan/87d1cb1bc196c5775b17788aea1c2239.png"
          },
          {
              "name" : "boss推荐",
              "icon" :  "https://cmljs.org/cml-demo/src/assets/images/yanxuan/fbee769af73c0f63f6120eb27ff3ce96.png"
          },
          {
              "name" : "明星推荐",
              "icon" :  "https://cmljs.org/cml-demo/src/assets/images/yanxuan/7dea8f7e0e706804c3307504e2e7c463.png"
          },
          {
              "name" : "黑凤梨系列",
              "icon" :  "https://cmljs.org/cml-demo/src/assets/images/yanxuan/a4a14669ce1fa497aece9a20c669196e.png"
          },
          {
            "name" : "boss推荐",
            "icon" :  "https://cmljs.org/cml-demo/src/assets/images/yanxuan/fbee769af73c0f63f6120eb27ff3ce96.png"
        },
        {
            "name" : "明星推荐",
            "icon" :  "https://cmljs.org/cml-demo/src/assets/images/yanxuan/7dea8f7e0e706804c3307504e2e7c463.png"
        },
        {
            "name" : "黑凤梨系列",
            "icon" :  "https://cmljs.org/cml-demo/src/assets/images/yanxuan/a4a14669ce1fa497aece9a20c669196e.png"
        },
        {
          "name" : "boss推荐",
          "icon" :  "https://cmljs.org/cml-demo/src/assets/images/yanxuan/fbee769af73c0f63f6120eb27ff3ce96.png"
      },
      {
          "name" : "明星推荐",
          "icon" :  "https://cmljs.org/cml-demo/src/assets/images/yanxuan/7dea8f7e0e706804c3307504e2e7c463.png"
      },
      {
          "name" : "黑凤梨系列",
          "icon" :  "https://cmljs.org/cml-demo/src/assets/images/yanxuan/a4a14669ce1fa497aece9a20c669196e.png"
      },
      {
        "name" : "boss推荐",
        "icon" :  "https://cmljs.org/cml-demo/src/assets/images/yanxuan/fbee769af73c0f63f6120eb27ff3ce96.png"
    },
    {
        "name" : "明星推荐",
        "icon" :  "https://cmljs.org/cml-demo/src/assets/images/yanxuan/7dea8f7e0e706804c3307504e2e7c463.png"
    },
    {
        "name" : "黑凤梨系列",
        "icon" :  "https://cmljs.org/cml-demo/src/assets/images/yanxuan/a4a14669ce1fa497aece9a20c669196e.png"
    },
    {
      "name" : "boss推荐",
      "icon" :  "https://cmljs.org/cml-demo/src/assets/images/yanxuan/fbee769af73c0f63f6120eb27ff3ce96.png"
  },
  {
      "name" : "明星推荐",
      "icon" :  "https://cmljs.org/cml-demo/src/assets/images/yanxuan/7dea8f7e0e706804c3307504e2e7c463.png"
  },
  {
      "name" : "黑凤梨系列",
      "icon" :  "https://cmljs.org/cml-demo/src/assets/images/yanxuan/a4a14669ce1fa497aece9a20c669196e.png"
  },
  {
    "name" : "boss推荐",
    "icon" :  "https://cmljs.org/cml-demo/src/assets/images/yanxuan/fbee769af73c0f63f6120eb27ff3ce96.png"
},
{
    "name" : "明星推荐",
    "icon" :  "https://cmljs.org/cml-demo/src/assets/images/yanxuan/7dea8f7e0e706804c3307504e2e7c463.png"
},
{
    "name" : "黑凤梨系列",
    "icon" :  "https://cmljs.org/cml-demo/src/assets/images/yanxuan/a4a14669ce1fa497aece9a20c669196e.png"
},
          {
              "name" : "趣味粉系列",
              "icon" :  "https://cmljs.org/cml-demo/src/assets/images/yanxuan/87fc01e5876482d521ecca13aea42653.png"
          }
      ]
      });
    }
  },
  {
    method: ['post'],
    path: '/api/game/conf',
    controller: function (req, res, next) {
      var num = Math.round(Math.random()*10);
      var rst = {};
      if(num > 5){
        rst = {
          "success": false,
          "message": "即将添加游戏到可用,然后再试!",
          "code": 500,
          "result": null,
          "timestamp": 1568014235015
          };
      }else{
        rst = {
          "success": true,
          "message": "成功配置游戏!",
          "code": 200,
          "result": null,
          "timestamp": 1568014235015
          };
      }
      res.json(rst);
    }
  },
  {
    method: ['post'],
    path: '/api/player/gameAdd',
    controller: function (req, res, next) {
      var num = Math.round(Math.random()*10);
      var rst = {};
      if(num > 5){
        rst = {
          "success": false,
          "message": "普通会员可添加0个游戏，升级会员可用更多游戏!",
          "code": 500,
          "result": null,
          "timestamp": 1568014235015
          };
      }else{
        rst = {
          "success": true,
          "message": "游戏成功添加到玩家!",
          "code": 200,
          "result": null,
          "timestamp": 1568014235015
          };
      }
      res.json(rst);
    }
  },
  {
    method: ['get'],
    path: '/api/player/captcha',
    controller: function (req, res, next) {
      res.json({
        "success": true,
        "message": "验证码发送成功",
        "code": 200,
        "result": null,
        "timestamp": 1567994254399
      });
    }
  },
  {
    method: ['post'],
    path: '/api/player/signIn',
    controller: function (req, res, next) {
      res.json({
        "success": true,
        "message": "登陆成功",
        "code": 200,
        "result": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1Njc5OTcyODUsInVzZXJuYW1lIjoiMTgzMjg1MDk4ODcifQ.ot89Jf9QIofiCtsSGVZsOcdN759CJNV-Ua7irJmuiXE",
        "timestamp": 1567995485414
        });
    }
  },
  {
    method: ['post'],
    path: '/api/player/signUp',
    controller: function (req, res, next) {
      res.json({
        "success": true,
        "message": "注册成功",
        "code": 200,
        "result": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1Njc5OTc1MDAsInVzZXJuYW1lIjoiMTgzMjg1MDk4OTAifQ.mc4xPrN90c9MKA44PbTGtt_Uko4wynrW33owLC3LdpY",
        "timestamp": 1567995691205
        });
    }
  },
  {
    method: ['get'],
    path: '/api/player/signout',
    controller: function (req, res, next) {
      res.json({
        "success": true,
        "message": "登出成功",
        "code": 200,
        "result": null,
        "timestamp": 1567995800098
        });
    }
  },
  {
    method: ['get'],
    path: '/api/player/info',
    controller: function (req, res, next) {
      res.json({
        "success": true,
        "message": "获取玩家信息成功",
        "code": 200,
        "result":{
        "id": "8bf8261b4c78843c46f9ad7514772eec",
        "createBy": "jeecg",
        "createTime": "2019-09-09 10:21:38",
        "updateBy": null,
        "updateTime": null,
        "sysOrgCode": null,
        "name": null,
        "sex": "2",
        "mobile": "18328509890",
        "status": "1",
        "promoCode": null,
        "lever": null,
        "superior": "f548255f084717703dcbdb78d3f170c9",
        "noticeWay": null,
        "canCashbackTime": null
        },
        "timestamp": 1567995902259
        });
    }
  },
  {
    method: ['get'],
    path: '/api/cashBack/can',
    controller: function (req, res, next) {
      res.json({
        "success": true,
        "message": "操作成功",
        "code": 200,
        "result": [
          {
            "id": "131334535",
            "status": 1,
           // "statusName": "可申请",
            "num": '2324',
            "name": "大师兄",
            "promoCode": "9527",
            "action": "普通会员->黄金会员"
          },
          {
            "id": "131334535",
            "status": 2,
          //  "statusName": "可申请",
            "num": '50',
            "name": "大师兄",
            "promoCode": "9527",
            "action": "普通会员->白银会员"
          }
        ],
        "timestamp": 1567995800098
        });
    }
  },
  {
    method: ['get'],
    path: '/api/cashBack/record',
    controller: function (req, res, next) {
      res.json({
        "success": true,
        "message": "操作成功",
        "code": 200,
        "result": [
          {
            "id": "1314535",
            "status": 1,
            "total": '2324',
            "detail": [
              {"name": "大师兄","code": "9527","num": "25","action": "白银->黄金"},
              {"name": "小师妹","code": "9526","num": "25","action": "白银->钻石"},
            ]
          }
        ],
        "timestamp": 1567995800098
        });
    }
  },
  {
    method: ['get'],
    path: '/api/player/follower',
    controller: function (req, res, next) {
      res.json({
        "success": true,
        "message": "操作成功",
        "code": 200,
        "result": [
          {
            "id": "1314535",
            "name": "大师兄",
            "code": "9527",
            "lever": "1",
            "follower": []
          },
          {
            "id": "1314536",
            "name": "小师妹",
            "code": "9528",
            "lever": "2",
            "follower": []
          }
        ],
        "timestamp": 1567995800098
        });
    }
  }
]
