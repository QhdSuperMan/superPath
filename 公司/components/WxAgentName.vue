<template>
  <ww-open-data :type="nameType" :openid="openid" v-if="wxConfigReady && proxyDom" />
  <span v-else>{{label}}</span>
</template>

<script>
import VueTypes from 'vue-types'
import { mapState } from 'vuex'

export default {
  name: 'wx-agent-name',
  props: {
    label: VueTypes.string.def(''),
    type: VueTypes.string.def('name'),
    openid: VueTypes.oneOfType([String, Number]).def('')
  },
  computed: {
    ...mapState(['wxConfigReady']),
    proxyDom () {
      return !!(this.openid && window.WWOpenData)
    },
    nameType () {
      switch (this.type) {
        case 'org':
          return 'departmentName'
        default:
          return 'userName'
      }
    }
  },
  watch: {
    type () {
      this.render()
    },
    openid () {
      this.render()
    },
    label () {
      this.render()
    },
    // 需要借助 wxconfig 的 ready 状态，重新渲染
    wxConfigReady (ready) {
      // console.log('watch ready', ready)
      this.render()
    }
  },
  mounted () {
    this.render()
  },
  methods: {
    render () {
      if (this.openid && window.WWOpenData) {
        // console.log(`wx ${this.nameType} render`, this.openid)
        window.WWOpenData.bind(this.$el)
      } else {
        const $root = this.$el.shadowRoot || this.$el.attachShadow({mode: 'open'})

        $root.innerHTML = this.label
      }
    }
  }

}
</script>
