<!--
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-01-11 22:06:02
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-01-31 19:29:30
-->
<template>
  <CustomModal
    title="选择头像"
    :footer="null"
    :visible="visible"
    @cancel="handleCancel"
  >
    <div class="avatar-cropper">
      <VueCropper
        ref="cropper"
        :fixedNumber="[1, 1]"
        :fixed="true"
        :autoCrop="true"
        :img="srcCopy"
        class="avatar-cropper"
      />
    </div>

    <div class="avatar-box">
      <a-icon type="plus-circle" @click="changeAvatar('plus')" />
      <a-icon type="rollback" @click="changeAvatar('rotateRight')" />
      <a-icon
        type="rollback"
        :rotate="180"
        @click="changeAvatar('rotateLeft')"
      />
      <a-icon type="minus-circle" @click="changeAvatar('minus')" />
    </div>

    <div class="avatar-box">
      <CustomButton>
        上传
        <input
          class="avatar-input"
          style="opacity: 0"
          type="file"
          ref="uploads"
          accept="image/png, image/jpeg, image/gif, image/jpg"
          @change="uploadImg($event)"
        />
      </CustomButton>
      <CustomButton type="primary" @click="submit"> 确定 </CustomButton>
    </div>
  </CustomModal>
</template>

<script>

import { VueCropper } from 'vue-cropper'

import { upload } from '@/api/common/common.js'

export default {
  data() {
    return {
      visible: false,
      srcCopy: ''
    };
  },

  components: {
    VueCropper
  },

  watch: {
    value: {
      handler(newVal) {
        this.visible = newVal;
      },
      immediate: true,
    },
    src: {
      handler(newVal) {
        this.setAvatarBase64(newVal, base64 => {
          this.srcCopy = base64;
        })
      },
      immediate: true,
    },
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    src: {
      type: String,
      default: ''
    },
  },
  methods: {
    submit() {
      this.$refs.cropper.getCropBlob(data => {
        let formData = new FormData()
        let file = new window.File([data], 'avatar.' + data.type.split('/')[1], { type: data.type })
        formData.append('file', file)

        upload(formData)
          .then(({ data }) => {
            if (data.code === 200) {
              this.$message.success(data.msg);
              this.$emit('success', data.data)
              this.handleCancel()
            }
          })
          .catch(() => {
          });

      })
    },
    setAvatarBase64(src, callback) {
      let _this = this;
      let image = new Image();
      // image.src = src + '?v=' + Math.random();
      image.src = src
      image.crossOrigin = "*";
      image.onload = function () {
        let base64 = _this.transBase64FromImage(image);
        callback && callback(base64);
      }
    },
    transBase64FromImage(image) {
      let canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      let ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0, image.width, image.height);
      return canvas.toDataURL("image/png");
    },
    changeAvatar(type) {
      switch (type) {
        case 'plus':
          this.$refs.cropper.changeScale(1)
          break;
        case 'rotateRight':
          this.$refs.cropper.rotateRight()
          break;
        case 'rotateLeft':
          this.$refs.cropper.rotateLeft()
          break;
        case 'minus':
          this.$refs.cropper.changeScale(-1)
          break;
        default:
          break;
      }
    },
    handleCancel() {
      this.$emit("input", false);
    },
    uploadImg(event) {
      this.srcCopy = window.URL.createObjectURL(event.target.files[0])
      event.target.value = ''
    }
  },
};
</script>

<style lang="scss" scoped>
.avatar-cropper {
  height: px2rem(500);
}

.avatar-box {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: px2rem(20);
  position: relative;
  text-align: center;

  i {
    font-size: px2rem(40);
  }
}



.avatar-input {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
