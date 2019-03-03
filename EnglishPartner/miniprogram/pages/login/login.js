Page({
  data:{
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        console.log('getSetting',res);  
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              //从数据库获取用户信息
              //that.queryUsreInfo();
              //用户已经授权过
              getApp().globalData.userInfo = res.userInfo;
              console.log('getUserInfo', getApp().globalData.userInfo);
              that.signupEnglishPartner();
            }
          });
        }else{
        }
      }
    })
  },
  bindGetUserInfo: function (e) {
    console.log(e);
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      var that = this;
      //授权成功后，跳转进入小程序首页
      wx.redirectTo({
        url: '../home/home'
      })
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击了“返回授权”')
          }
        }
      })
    }
  },
  signupEnglishPartner: function(e)
  {
    wx.login({
      success: function (res) {
        if (res.code) {
          console.log(res.code);
          //发起网络请求
          wx.request({
            url: 'https://www.runtimego.com/wp-json/english-partner/v1/applications',
            //url: 'http:127.0.0.1/wordpress/wp-json/english-partner/v1/applications',
            data: {
              code: res.code
            },
            success: function (res) {
              const self = this
              console.log(res.data);
              if (res.data['code'] == 0) {

              }
              else {
                wx.switchTab({
                  url: '../home/home'
                })
              }
            },
            fail: function (res) {

            }
          })
        }
      },
      fail: function (res) {

      }
    })
  }
})