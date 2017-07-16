# wechat-calendar
微信日历插件，开箱即用
## 首先下载calendar文件夹到你项目的根目录
## 然后在你要使用日历的wxml文件中引入日历模板
```
<import src="../../calendar/calendar.wxml" />
<template is="calendar" data="{{...calendar}}"></template>
```
## 然后在你的js文件里引入日历的脚本文件
```
var calendar = require('../../calendar/calendar.js')
```
## 此时你有拥有了一个日历

# 如果你想在鼠标点击日历某一天的时候，获得当天的具体日期。
## 你可以复制下面这个方法到你的脚本中
```
 // 获取当前点击的日期
  getDay:function (e) {
    let _this = this
    let that = this.data.calendar
    if(e.target.dataset.item < 10){
      e.target.dataset.item = '0' + e.target.dataset.item
    }
    _this.currentDay = that.currentYear + '' + that.currentMonth + '' + e.target.dataset.item
    _this.setData({
      currentDay : _this.currentDay
    })
    _this.news_refresh()
    _this.setData({
      visible : false
    })
  },
  ```
  ### 这样一切就OK了。
  
  #### 如果有什么问题或者觉得有哪些地方需要改进，请加我微信 sspu_elc ，我会持续更新这个插件。
