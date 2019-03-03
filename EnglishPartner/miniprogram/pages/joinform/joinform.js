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
    if (e.detail.value['wechat'] == '')
    {
      wx.showModal({
        title: '微信号为空',
        content: '微信号是您的身份凭证，请填写您的真实微信号！',
        showCancel:false
      })
      return;
    }
    if(this.data.current_level_index == 0)
    {
      wx.showModal({
        title: '未选择英语水平',
        content: '请选择您自己的英语水平，以便更好地匹配合适的合伙人！',
        showCancel: false
      })
      return;
    }
    if (this.data.current_purpose_index == 0) {
      wx.showModal({
        title: '未选择学习目的',
        content: '请选择您学习英语的目的，以便更好地匹配合适的合伙人！',
        showCancel: false
      })
      return;
    }
    var post = getApp().globalData.userInfo;
    post['wechat'] = e.detail.value['wechat'];
    post['level'] = e.detail.value['level'];
    post['purpose'] = e.detail.value['purpose'];
    post['message'] = e.detail.value['message'];
    post['telephone'] = '';
    console.log(post);
    wx.login({
      success(res) {
        if (res.code) {
          post['code'] = res.code;
          // 发起网络请求
          wx.request({
            url: 'https://www.runtimego.com/wp-json/english-partner/v1/partners',
            method: 'POST',
            data: post,
            header: {
              'content-type': 'application/json' // 默认值
            },
            success(res) {
              console.log(res.data)
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
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