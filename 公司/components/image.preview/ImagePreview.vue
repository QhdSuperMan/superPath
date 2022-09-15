<template>
  <div
    ref="pswp"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
    :class="['pswp','pswp--zoom-allowed']"
  >
    <!-- Background of PhotoSwipe.
        It's a separate element as animating opacity is faster than rgba(). -->
    <div class="pswp__bg"></div>

    <!-- Slides wrapper with overflow:hidden. -->
    <div class="pswp__scroll-wrap">
      <!-- Container that holds slides.
          PhotoSwipe keeps only 3 of them in the DOM to save memory.
          Don't modify these 3 pswp__item elements, data is added later on. -->
      <div class="pswp__container">
        <div class="pswp__item"></div>
        <div class="pswp__item"></div>
        <div class="pswp__item"></div>
      </div>

      <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
      <div class="pswp__ui pswp__ui--hidden">
        <div class="pswp__top-bar">
          <!--  Controls are self-explanatory. Order can be changed. -->
          <div class="pswp__counter"></div>
          <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
          <button class="pswp__button pswp__button--share" title="Share"></button>
          <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
          <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
          <!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->
          <!-- element will get class pswp__preloader--active when preloader is running -->
          <div class="pswp__preloader">
            <div class="pswp__preloader__icn">
              <div class="pswp__preloader__cut">
                <div class="pswp__preloader__donut"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
          <div class="pswp__share-tooltip"></div>
        </div>

        <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
        </button>

        <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
        </button>

        <div class="pswp__caption">
          <div class="pswp__caption__center"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PhotoSwipe from 'photoswipe'
import * as PhotoSwipeUIDefault from 'photoswipe/dist/photoswipe-ui-default'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

export default {
  name: 'photo-preview',
  components: {},
  props: {
    options: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      index: 0,
      items: [],
      gallery: null,
      eventQueue: []// 监听的事件队列
    }
  },
  created () {
  },
  methods: {
    initPreview () {
      const options = {
        getThumbBoundsFn: (index) => {
          var thumbnail = this.items[this.index].el
          var pageYScroll = window.pageYOffset || document.documentElement.scrollTop
          var rect = thumbnail.getBoundingClientRect()
          return {
            x: rect.left,
            y: rect.top + pageYScroll,
            w: rect.width
          }
        },
        addCaptionHTMLFn: function (item, captionEl) {
          if (!item.title) {
            captionEl.children[0].innerText = ''
            return false
          }
          captionEl.children[0].innerHTML = item.title
          return true
        },
        showHideOpacity: true,
        history: false,
        shareEl: false,
        maxSpreadZoom: 3,
        getDoubleTapZoom: function (isMouseClick, item = {}) {
          if (isMouseClick) {
            return 1.5
          } else {
            return item.initialZoomLevel < 0.7 ? 1 : 1.5
          }
        }
      }

      return options
    },

    openPhotoSwipe (items, index) {
      this.index = index
      this.items = items
      const options = this.getOptions(this.options)
      this.gallery = new PhotoSwipe(this.$refs.pswp, PhotoSwipeUIDefault, this.items, options)
      this.eventQueue.forEach(item => {
        if (item) {
          this.gallery.listen(item.name, item.callback)
        }
      })
      this.gallery.listen('destroy', () => { // 清空消息队列
        this.eventQueue = []
      })
      this.gallery.init()
    },
    getOptions (opts) {
      const options = {
        getThumbBoundsFn: (index) => {
          var thumbnail = this.items[index].el
          var pageYScroll = window.pageYOffset || document.documentElement.scrollTop
          var rect = thumbnail.getBoundingClientRect()
          return {
            x: rect.left,
            y: rect.top + pageYScroll,
            w: rect.width
          }
        },
        index: this.index,
        showHideOpacity: true,
        history: false,
        shareEl: false,
        captionEl: false,
        tapToClose: true,
        fullscreenEl: false,
        maxSpreadZoom: 3,
        getDoubleTapZoom: function (isMouseClick, item) {
          if ('html' in item) return 1
          if (isMouseClick) {
            return 1.5
          } else {
            return item.initialZoomLevel < 0.7 ? 1 : 1.5
          }
        }
      }
      return Object.assign({}, options, opts)
    }
  }
}
</script>

<style>
.pswp {
  z-index: 999999;
}
.pswp__preloader{
  position: absolute; top: 50%; left: 50%; z-index: 20;
  margin: 0;
  transform: translate(-50%,-50%);
}

@media screen and (max-width: 1024px) {
  .pswp__preloader{
    position: absolute; top: 50%; left: 50%; z-index: 20;
    margin: 0;
    transform: translate(-50%,-50%);
  }
}
</style>
