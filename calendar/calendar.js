//改成对象，初始数据，初始化函数对象，格式处理对象和月份切换处理对象。
function init() {
  let _this = this
  let hasBlank = false
  let showCalendar = false
  let currentYear = ''
  let currentMonth = ''
  let currentDay = ''
  let week_CH = ['日', '一', '二', '三', '四', '五', '六']
  let week_EN = ['Sun', 'Mon', 'Tus', 'Wed', 'Thur', 'Fri', 'Sat']
  let blanks = []
  let days = []
  // 初始化当前日期
  let current = (function () {
    currentMonth = new Date().getMonth() + 1
    if (currentMonth < 10) {
      currentMonth = "0" + currentMonth
    }
    currentYear = new Date().getFullYear()
  })()
  // 不知道模板是否有生命周期，window.onload，document.ready都不能用，所以先写个立即执行，后面重写一遍。
  // 获取月份缩进
  let blanksFoo = (function (year, month) {
    let firstDayWeek = new Date(Date.UTC(year, month - 1, 1)).getDay()
    if (firstDayWeek != 0) {
      for (let i = 0; i < firstDayWeek; i++) {
        blanks.push(i)
      }
      hasBlank = true
    } else {
      hasBlank = false
    }
  })(currentYear, currentMonth)
  // 获取天数
  let daysFoo = (function (year, month) {
    let day = new Date(year, month, 0).getDate()
    for (let i = 1; i <= day; i++) {
      days.push(i)
    }
  })(currentYear, currentMonth)
  // 点击事件
  _this.dateHandler = function (e) {
    if (e.target.dataset.value == "<<") {
      if (currentMonth == 1) {
        currentMonth = 12
        currentYear -= 1
      } else if (currentMonth <= 10) {
        currentMonth -= 1
        currentMonth = "0" + currentMonth
      } else {
        currentMonth -= 1
      }
    } else if (e.target.dataset.value == ">>") {
      if (currentMonth == 12) {
        currentMonth = "01"
        currentYear += 1
      } else if (currentMonth < 9) {
        currentMonth = parseInt(currentMonth) + 1
        currentMonth = "0" + currentMonth
      } else {
        currentMonth = parseInt(currentMonth) + 1
      }
    }
    // 重写获取天数函数
    let daysFoo = (function (year, month) {
      days = []
      let day = new Date(year, month, 0).getDate()
      for (let i = 1; i <= day; i++) {
        days.push(i)
      }
    })(currentYear, currentMonth)
    // 重写月份缩进函数
    let blanksFoo = (function (year, month) {
      let firstDayWeek = new Date(Date.UTC(year, month - 1, 1)).getDay()
      blanks = []
      if (firstDayWeek != 0) {
        for (let i = 0; i < firstDayWeek; i++) {
          blanks.push(i)
        }
        hasBlank = true
      } else {
        hasBlank = false
      }
    })(currentYear, currentMonth)
    // 再次设置index.js里data.calendar
    _this.setData({
      calendar: {
        hasBlank: hasBlank,
        showCalendar: showCalendar,
        currentYear: currentYear,
        currentMonth: currentMonth,
        week_CH: week_CH,
        week_EN: week_EN,
        blanks: blanks,
        days: days
      }
    })
  }
  // 设置index.js里data.calendar
  _this.setData({
    calendar: {
      hasBlank: hasBlank,
      showCalendar: showCalendar,
      currentYear: currentYear,
      currentMonth: currentMonth,
      week_CH: week_CH,
      week_EN: week_EN,
      blanks: blanks,
      days: days
    }
  })
}
module.exports = {
  init: init
}