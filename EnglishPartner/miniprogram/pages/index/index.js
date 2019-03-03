//index.js
const app = getApp()

Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: ''
  },

  onLoad: function() {

  },

  confirmJoin(e)
  {
    var userName = app.globalData.userInfo.nickName;
    var sex = app.globalData.userInfo.gender;
    console.log('userName:',userName);
    console.log('sex',sex);
    var url = '../joinform/joinform?nickname=' + userName + '&sex=' + sex;
    console.log('url',url);
    wx.redirectTo({
      url: url,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }

})
