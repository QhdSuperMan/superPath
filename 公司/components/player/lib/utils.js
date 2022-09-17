const isMobile = /mobile/i.test(window.navigator.userAgent)

const utils = {
  /**
   * Parse second to time string
   *
   * @param {Number} second
   * @return {String} 00:00 or 00:00:00
   */
  secondToTime: (second) => {
    if (typeof second !== 'number' || isNaN(second)) {
      second = 0
    }
    const add0 = (num) => (num < 10 ? '0' + num : '' + num)
    const hour = Math.floor(second / 3600)
    const min = Math.floor((second - hour * 3600) / 60)
    const sec = Math.floor(second - hour * 3600 - min * 60)
    return (hour > 0 ? [hour, min, sec] : [min, sec]).map(add0).join(':')
  },

  /**
   * control play progress
   */
  // get element's view position
  // rootEle 根结点 fix全屏下，计算offsetLeft时需要计算到当前全屏窗口的根元素，不需要计算到根结点null
  getElementViewLeft: (element, rootEle = null) => {
    let actualLeft = element.offsetLeft
    let current = element.offsetParent
    const elementScrollLeft =
      document.body.scrollLeft + document.documentElement.scrollLeft
    let left = 0
    if (
      !document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      while (current !== null) {
        actualLeft += current.offsetLeft
        current = current.offsetParent
      }
      left = actualLeft - elementScrollLeft
    } else {
      while (current !== rootEle && current !== element) {
        console.log({ current, offsetLeft: current.offsetLeft, element })
        actualLeft += current.offsetLeft
        current = current.offsetParent
      }
      left = actualLeft - elementScrollLeft
    }
    return left
  },

  /**
    * optimize control play progress

    * optimize get element's view position,for float dialog video player
    * getBoundingClientRect 在 IE8 及以下返回的值缺失 width、height 值
    * getBoundingClientRect 在 Firefox 11 及以下返回的值会把 transform 的值也包含进去
    * getBoundingClientRect 在 Opera 10.5 及以下返回的值缺失 width、height 值
    */
  getBoundingClientRectViewLeft (element) {
    const scrollTop = document.documentElement.scrollTop

    if (element.getBoundingClientRect) {
      if (typeof this.getBoundingClientRectViewLeft.offset !== 'number') {
        let temp = document.createElement('div')
        temp.style.cssText = 'position:absolute;top:0;left:0;'
        document.body.appendChild(temp)
        this.getBoundingClientRectViewLeft.offset =
          -temp.getBoundingClientRect().top - scrollTop
        document.body.removeChild(temp)
        temp = null
      }
      const rect = element.getBoundingClientRect()
      const offset = this.getBoundingClientRectViewLeft.offset

      return rect.left + offset
    } else {
      // not support getBoundingClientRect
      return this.getElementViewLeft(element)
    }
  },

  isMobile: isMobile,

  isFirefox: /firefox/i.test(window.navigator.userAgent),

  isChrome: /chrome/i.test(window.navigator.userAgent),

  storage: {
    set: (key, value) => {
      localStorage.setItem(key, value)
    },

    get: (key) => localStorage.getItem(key),
  },

  cumulativeOffset: (element) => {
    let top = 0
    let left = 0
    do {
      top += element.offsetTop || 0
      left += element.offsetLeft || 0
      element = element.offsetParent
    } while (element)

    return {
      top: top,
      left: left,
    }
  },

  /**
   * 节流函数
   * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Document/scroll_event
   * @param {Function} callback 执行函数
   * @param {Number}   time     间隔时间
   */
  throttle (callback) {
    let ticking = false
    return function () {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(function () {
          callback && callback()
          ticking = false
        })
      }
    }
  },

  nameMap: {
    dragStart: isMobile ? 'touchstart' : 'mousedown',
    dragMove: isMobile ? 'touchmove' : 'mousemove',
    dragEnd: isMobile ? 'touchend' : 'mouseup',
  },
}

export default utils
