<!--
 * @Description: 富文本编辑器
 * @Author: maowenhao 2862438628@qq.com
 * @Date: 2022-09-21 16:18:59
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2022-11-11 18:35:24
-->
<template>
  <div class="tinymce-editor" v-if="isShow">
    <Editor
      :id="tinymceId"
      :init="init"
      :placeholder="placeholder"
      :disabled="disabled"
      v-model="myValue"
      @onClick="onClick"
    ></Editor>
  </div>
</template>

<script>
import tinymce from "tinymce/tinymce"; //tinymce默认hidden，不引入不显示
import Editor from "@tinymce/tinymce-vue"; //编辑器引入
import "tinymce/themes/silver/theme"; //编辑器主题
import "tinymce/icons/default"; //引入编辑器图标icon，不引入则不显示对应图标
// 引入编辑器插件（基本免费插件都在这儿了）
import "tinymce/plugins/advlist"; //高级列表
import "tinymce/plugins/autolink"; //自动链接
import "tinymce/plugins/link"; //超链接
import "tinymce/plugins/image"; //插入编辑图片
import "tinymce/plugins/lists"; //列表插件
import "tinymce/plugins/charmap"; //特殊字符
import "tinymce/plugins/media"; //插入编辑媒体
import "tinymce/plugins/wordcount"; // 字数统计
import "tinymce/plugins/fullscreen"; // 字数统计
import API from "@/api/api";
import httpUtil from "@/utils/http-util";

// 字体集
const fonts = [
  "宋体=宋体",
  "微软雅黑=微软雅黑",
  "新宋体=新宋体",
  "黑体=黑体",
  "楷体=楷体",
  "隶书=隶书",
  "Courier New=courier new,courier",
  "AkrutiKndPadmini=Akpdmi-n",
  "Andale Mono=andale mono,times",
  "Arial=arial,helvetica,sans-serif",
  "Arial Black=arial black,avant garde",
  "Book Antiqua=book antiqua,palatino",
  "Comic Sans MS=comic sans ms,sans-serif",
  "Courier New=courier new,courier",
  "Georgia=georgia,palatino",
  "Helvetica=helvetica",
  "Impact=impact,chicago",
  "Symbol=symbol",
  "Tahoma=tahoma,arial,helvetica,sans-serif",
  "Terminal=terminal,monaco",
  "Times New Roman=times new roman,times",
  "Trebuchet MS=trebuchet ms,geneva",
  "Verdana=verdana,geneva",
  "Webdings=webdings",
  "Wingdings=wingdings,zapf dingbats",
];
export default {
  model: {
    prop: "value",
    event: "input",
  },
  components: {
    Editor,
  },
  props: {
    //内容
    value: {
      type: String,
      default: "",
    },

    //提示文字
    placeholder: {
      type: String,
      default: "请输入内容",
    },
    //是否禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    //插件
    plugins: {
      type: [String, Array, Boolean],
      default: "advlist autolink link image lists charmap  media wordcount fullscreen",
    },
    //工具栏
    toolbar: {
      type: [String, Array, Boolean],
      default:
        "undo redo |  formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists image media table | fullscreen",
    },
    // 菜单栏
    menubar: { type: [String, Array, Boolean] },
    // 是否沉浸式
    inline: {
      type: Boolean,
      default: false,
    },
    // 状态栏
    statusbar: {
      type: Boolean,
      default: false,
    },
    // 高度
    height: {
      default: 300,
    },
    // 宽度
    width: {
      default: "100%",
    },
    //
    getEditorThis: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      //初始化配置
      tinymceId: "tinymce" + new Date().getTime(),
      myValue: this.value,
      isShow: true,
    };
  },
  watch: {
    //监听内容变化
    value(newValue) {
      this.myValue = newValue == null ? "" : newValue;
    },
    myValue(newValue) {
      if (this.triggerChange) {
        this.$emit("change", newValue);
      } else {
        this.$emit("input", newValue);
      }
    },
  },
  computed: {
    /**
     * @description: 初始化
     * @return {*}
     * @author: maowenhao
     */
    init() {
      const that = this;
      return {
        selector: "#tinymce",
        language_url: "/static/tinymce/langs/zh_CN.js", //汉化路径是自定义的，一般放在public或static里面
        language: "zh_CN",
        skin_url: "/static/tinymce/skins/ui/oxide", //皮肤
        content_css: "/static/tinymce/css/content.css",
        plugins: this.plugins, //插件
        //工具栏
        toolbar: this.toolbar,
        menubar: this.menubar,
        inline: this.inline,
        statusbar: false,
        toolbar_location: "/",
        fontsize_formats:
          "12px 14px 16px 18px 20px 22px 24px 28px 32px 36px 48px 56px 72px", //字体大小
        font_formats: fonts.join(";"),
        width: this.width,
        height: this.height, //高度
        placeholder: "在这里输入文字",
        branding: false, //隐藏右下角技术支持
        setup(editor) {
          editor.on("focus", (e) => {
            console.log("编辑器focus", e);
            that.$emit("focus", e);
          });
          editor.on("blur", (e) => {
            console.log("编辑器blur", e);
            that.$emit("blur", e);
          });
        },
        //图片上传
        /*  images_upload_handler: function (blobInfo, success, failure) {
           //文件上传的formData传递，忘记为什么要用这个了
           const blobType = blobInfo.blob().type
           const typeList = ["image/jpeg", "image/png", "image/GIF", "image/jpg", "image/BMP"]
           const isAccord = typeList.includes(blobType)
           if (blobInfo.blob().size / 1024 / 1024 > 2) {
             failure("上传失败，图片大小请控制在 2M 以内");
           } else if (blobInfo.blob().type == isAccord) {
             failure("图片格式错误");
           } else {
             let formData = new FormData();
             // 服务端接收文件的参数名，文件数据，文件名
             formData.append("file", blobInfo.blob(), blobInfo.filename());
             httpUtil.post(API.FILE_UPLOAD, formData)//上传功能未用到，请求路径待修改
               .then(({ error, res }) => {
                 console.log(res);
                 // 这里返回的是你图片的地址
                 success(res.data.data.url);
               })
               .catch(() => {
                 failure("上传失败");
               });
           }
         }, */
      };
    },
  },
  /**
   * @description: 销毁组件前销毁编辑器
   * @return {*}
   * @author: zhangyanbing
   */
  // beforeDestroy() {
  //   this.tinymceId && this.tinymceId.destroy();
  // },
  /**
   * @description: 每次都给编辑器不同的key,使其每次切换页面都会重新加载.
   * @return {*}
   * @author: zhangyanbing
   */
  activated() {
    // this.tinymceFlag++;
  },
  mounted() {
    tinymce.init({});
    setTimeout(() => {
      try {
        // 设置富文本字体大小
        document
          .getElementsByTagName("iframe")[0]
          .contentDocument.getElementsByTagName("html")[0].style.fontSize =
          window.rootFontSize;
      } catch (e) {}
    }, 0);

    this.getEditorThis(this);
  },
  methods: {
    /**
     * @description: 点击
     * @param {*} e
     * @return {*}
     * @author: maowenhao
     */
    onClick(e) {
      this.$emit("onClick", e, tinymce);
    },
    /**
     * @description: 重载编辑器
     * @param {*} variable 键
     * @return {*}
     * @author: 吴玉荣
     */
    reload() {
      this.isShow = false
      setTimeout(() => {
        this.isShow = true
      }, 50)
    },
    /**
     * @description: 清空内容
     * @return {*}
     * @author: maowenhao
     */
    clear() {
      this.myValue = "";
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/base.scss";
.tinymce-editor {
  /deep/ iframe .mce-content-body {
    padding: px2rem(8px) !important;
    text-align: left !important;
    color: rgba(0, 0, 0, 0.65) !important;
    &:not([dir="rtl"])[data-mce-placeholder]:not(.mce-visualblocks)::before {
      left: px2rem(8px) !important;
    }
  }

  /deep/ .mce-edit-focus {
    outline: none !important;
  }
  /deep/ ::before {
    font-family: Microsoft YaHei;
    color: #313131;
    font-size: px2rem(14px);
  }
}
</style>
