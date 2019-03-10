const app = getApp()
Page({
  data:{
    //根据当前的用户状态来显示不容页面内容
    //0-默认值，表示未参与，1-已经报名，正在匹配，2-匹配成功，等待任务开始，3-执行任务中，4-任务结束
    user_status:0
  },
  onLoad: function (options) {
    this.setData({
      user_status: app.globalData.user_status
    })
  },
  onShow: function(){
    this.setData({
      user_status: app.globalData.user_status
    })
  },
  signup(e){
    var userName = app.globalData.userInfo.nickName;
    var sex = app.globalData.userInfo.gender;
    console.log('userName:', userName);
    console.log('sex', sex);
    var url = '../joinform/joinform?nickname=' + userName + '&sex=' + sex;
    console.log('url', url);
    wx.navigateTo({
      url: url,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  Step1Click:function(e){
    wx.showModal({
      title: 'Step 1 自由报名',
      content: '每一期英语合伙人报名时间为一周时间，每周五中午12点结束报名，12点到晚上20点是系统匹配时间。报名请详细填写报名信息，这样系统可以为您匹配更合适的合伙人。',
      showCancel: false
    })
  },
  Step2Click:function(e){
    wx.showModal({
      title: 'Step 2 系统匹配',
      content: '每周五12点开始系统匹配，我们将会为您匹配最合适的英语合伙人，匹配成功以后，您会在小程序首页看到合伙人的基本信息，请点击进入任务墙查看每天的英语学习任务。',
      showCancel: false
    })
  },
  Step3Click: function (e) {
    wx.showModal({
      title: 'Step 3 活动开始',
      content: '周五晚20点到周六的正式任务开始这段时间里，合伙人可以相互加微信以便及时沟通。每一期英语合伙人活动持续21天，在这21天里，系统每天早上8点发布任务。合伙人可以到小程序的任务墙查看任务，每天晚上12点前需要进行打卡，才算完成任务。超过12点，则当天任务失败。',
      showCancel: false
    })
  },
})