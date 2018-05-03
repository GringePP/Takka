// pages/quiz/quiz.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    expression: '',
    correct: false,
  },

  nextQzui: function () {
    const { expression, correct } = this.createRandomQuiz();
    this.setData({
      expression,
      correct,
    });
  },

  createRandomQuiz: function () {
    let expression = '';
    let correct = false;
    let plus = false;
    let x = 0,
      y = 0,
      diff = 0,
      result = 0;
    x = this.random(10);
    y = this.random(10);
    diff = this.random(10);
    correct = (this.random(10) > 5);
    plus = (this.random(10) > 5);
    if (correct) {
      result = plus ? x + y : x - y;
    } else {
      result = x + y - diff;
    }
    expression = x + (plus ? ' + ' : ' - ') + y + ' = ' + result;
    return {
      expression,
      correct,
    };
  },

  random: (factor) => {
    return Math.ceil(Math.random() * factor);
  },

  onTrue: function () {
    if (this.data.correct) {
      this.nextQzui();
    } else {
      alert('false!!');
    }
  },

  onFalse: function () {
    if (!this.data.correct) {
      this.nextQzui();
    } else {
      alert('false!!'); 
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.nextQzui();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})