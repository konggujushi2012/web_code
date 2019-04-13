Page({
  data:{
    
  },
  PersonalInfo: function (e) {
    wx.navigateTo({
      url: '../information/information',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  JoinHistoryClicked: function(e){
    wx.navigateTo({
      url: '../joinhistory/joinhistory',
    })
  },
  InviteFriendClicked:function(e){
    wx.showModal({
      title: '提示',
      content: '此功能暂未开通，敬请期待。。。',
      showCancel: false
    })
  },
  ConnectUsClicked:function(e){
    wx.navigateTo({
      url: '../connectus/connectus',
    })
  }
})