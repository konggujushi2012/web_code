const app = getApp()
Page({
  data: {
    userInfo: {},
    current_status: 0
  },
  onLoad: function (options) {
    this.setData({
      userInfo: app.globalData.userInfo
    })
  }

})