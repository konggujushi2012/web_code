const app = getApp()
Page({
  data: {
    userInfo: {},
    current_status: 0,
    manager_image_url: "https://www.runtimego.com/wp-content/uploads/2019/03/manager_wechat.jpg",
    public_account_url: "https://www.runtimego.com/wp-content/uploads/2018/12/speakingenglish.jpg"
  },
  onLoad: function (options) {
    this.setData({
      userInfo: app.globalData.userInfo
    })
  },
  PreviewImage:function(e){
    var current = e.target.dataset.src;
    var url_list = new Array();
    url_list[0] = current;
    wx.previewImage({
      current: current,
      urls: url_list
    })
  }
})