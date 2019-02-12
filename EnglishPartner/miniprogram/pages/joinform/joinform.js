Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    sex: [
      { value: 'man', name: '男' },
      { value: 'woman', name: '女' },
    ],
    english_level:[
      "请选择","新手","四级","六级","专业"
    ],
    purpose:[
      "请选择","出国旅游", "工作需要", "日常交流", "自我提升","其他"
    ],
    current_level_index:0,
    current_purpose_index:0,
    nickname:'',
    gender:0
  },
  onLoad: function (options) {
    var that = this;
    that.setData({
      nickname:options.nickname,
      gender:options.sex
    })
  },
  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    console.log('userinfo:', getApp().globalData.userInfo);
    var post = e.detail.value;
    wx.request({
      url: 'https://www.runtimego.com/wp-json/wp/v2/posts', // 仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      }
    })
  },
  bindLevelChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      current_level_index: e.detail.value
    })
  },
  bindPurposeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      current_purpose_index: e.detail.value
    })
  },
})