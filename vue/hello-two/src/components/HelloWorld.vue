<template>
  <div class="box">
    <div
      class="item"
      v-for="(val, index) in drawBoxBig"
      :key="index + 'big'"
      :style="{ top: val.x, left: val.y }"
    >
      {{ index }}掘金
    </div>
    <div
      class="item"
      v-for="(val, index) in drawBox"
      :key="index"
      :style="{ top: val.x, left: val.y }"
    >
      {{ index }}掘金
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      box: [],
      drawBox: [],
      drawBoxBig: [],
      r: 300,
      rBig: 500,
      center: { x: 600, y: 600 },
    };
  },
  created() {
    this.draw();

    let that = this
    window.addEventListener("resize", function () {
      that.r = Math.floor((window.innerWidth / 2560) * 300);
      that.rBig = Math.floor((window.innerWidth / 2560) * 500);
      that.draw();
    });
  },
  methods: {
    draw() {
      this.drawBox = this.drawCircle(new Array(8).fill(""), this.r, this.center);
      this.drawBoxBig = this.drawCircle(new Array(25).fill(""), this.rBig, this.center, 270, 60);
    },
    /**
     *
     * @param {*} arr 数据
     * @param {*} r  半径
     * @param {*} center  中心点  x y坐标
     * @param {*} allAngle  画的圆的总度数
     * @param {*} startAndle  从初始度数开始画
     */
    drawCircle(arr, r, center, allAngle = 360, startAndle = 0) {
      let angle = Math.floor(allAngle / arr.length);

      return arr.map((val, index) => {
        let itemAngle = index * angle + startAndle - 90;                                                                                                  
        let x = center.x + r * Math.sin((itemAngle * 3.14) / 180);
        let y = center.y + r * Math.cos((itemAngle * 3.14) / 180);

        return {
          x: Math.floor(x) + "px",
          y: Math.floor(y) + "px",
        };
      });
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
.box {
  position: relative;
  background-color: black;
  width: 100vw;
  height: 100vh;
}

.item {
  position: absolute;
  color: white;
}
</style>