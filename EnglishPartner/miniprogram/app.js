//app.js
App({
  globalData: {
    userInfo:null,
    user_status: 0,
    applyInfo:null,
    partnerInfo:null
  },
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    this.globalData = {
    }
  },
  onShow: function () {
    console.log('app onshow');
    //发起网络请求
    //this.getApplyInfo();
  },
  getApplyInfo: function () {
    const that = this
    console.log('getApplyInfo');
    wx.login({
      success: function (res) {
        console.log('wx.login success, res; ',res);
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
              console.log('wx.request success, res:', res);
              if (res.data['code'] == 0) {
                that.globalData.partnerInfo = res.data['partner_data'];
                that.globalData.applyInfo = res.data['apply_data'];
                that.globalData.user_status = res.data['apply_data']['current_status'];
                console.log('current_status', that.globalData.user_status);
              }
              else {
                that.globalData.user_status = 0;
              }
            },
            fail: function (res) {
              console.log('wx.request failed, res:',res);
            }
          })
        }
      },
      fail: function (res) {
        console.log('wx.login failed, res:', res)
      }
    })
  }
})
