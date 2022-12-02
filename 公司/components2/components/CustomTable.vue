<template>
  <div class="custom-table-box">
    <template v-for="(index, name) in $slots" :slot="name">
      <slot :name="name" />
    </template>
    <a-table
      :row-selection="rowSelectionSelf"
      :columns="columns"
      :data-source="dataSource"
      :pagination="pagination"
      bordered
      v-bind="$attrs"
      v-on="$listeners"
    >
      <template
        v-for="column in columns"
        :slot="column.scopedSlots ? column.scopedSlots.customRender : ''"
        slot-scope="text, record, index"
      >
        <slot
          :name="column.scopedSlots ? column.scopedSlots.customRender : ''"
          v-bind:scope="{ text, record, index }"
        ></slot>
      </template>
    </a-table>
  </div>
</template>

<script>
import commonUtil from "../utils/common-util";
export default {
  name: "CustomTable",
  components: {},

  props: {
    pagination: {
      default: () => {
        return { pageSize: 10, current: 1, total: 0 };
      }
    }, //分页
    rowSelection: {
      default: () => {
        return {};
      }
    },
    columns: { default: () => [], required: true }, //表头
    dataSource: { default: () => [], required: true },
    selectedRowKeys: { default: () => [] }, //选中key
    tdPadding: { default: 32 }, //单元格内边距
    fontSize: { default: 14 } //字体大小
  },

  data() {
    return {
      selectedKeys: []
    };
  },

  computed: {
    rowSelectionSelf() {
      if (this.rowSelection) {
        return Object.assign(
          {},
          {
            selectedRowKeys: this.selectedKeys,
            onChange: this.onSelectChange
          },
          this.rowSelection
        );
      } else {
        {
        }
      }
    }
  },

  watch: {
    selectedRowKeys: {
      deep: true,
      handler(newVal, oldVal) {
        console.log("watch", oldVal, newVal);
        this.selectedKeys = newVal;
      }
    }
  },

  created() {
    console.log("$slots", this.$slots);
    this.columns.forEach(item => {
      if (!item.width && !item.fitContent) {
        const textWidth = commonUtil.getTextWidth(item.title, this.fontSize, 0);
        item.width = textWidth + this.tdPadding;
        console.log("width", item.title, textWidth);
      }
    });
  },

  mounted() {},

  methods: {
    /**
     * @description: 下拉框选中变化
     * @param {*} selectedRowKeys 选中keys
     * @return {*}
     * @author: maowenhao
     */
    onSelectChange(selectedRowKeys) {
      console.log("selectedRowKeys changed: ", selectedRowKeys);
      this.selectedKeys = selectedRowKeys;
      this.$emit("selectChange", this.selectedKeys);
    },
    adjustWidth() {
      this.columns.forEach(item => {
        if (!item.width && !item.fitContent) {
          const textWidth = commonUtil.getTextWidth(
            item.title,
            this.fontSize,
            0
          );
          item.width = textWidth + this.tdPadding;
          console.log("width", item.title, textWidth);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/base.scss";
.custom-table-box {
  /deep/ .ant-table {
    // .ant-table-tbody > tr > td {
    //   text-align: center !important;
    // }
    .ant-table-thead tr th {
      text-align: center !important;
      height: px2rem(60px);
      line-height: px2rem(28px);
      .ant-table-column-title {
        font-size: px2rem(16px);
        font-family: Microsoft YaHei, Microsoft YaHei-Regular;
        font-weight: 400;
        text-align: left;
        color: #4b4b4b;
      }
    }

    // 表格按钮公共样式
    .table-list-button-green {
      padding: 0px;
      span {
        // background-color: rgb(229, 249, 243);
        color: rgb(0, 163, 114);
      }
    }

    .table-list-button-orange {
      padding: 0px;

      span {
        // background-color: rgb(255, 242, 233);
        color: rgb(255, 126, 28);
      }
    }

    .table-list-button-red {
      padding: 0px;

      span {
        // background-color: rgb(255, 240, 239);
        color: rgb(255, 105, 95);
      }
    }

    .table-list-button-blue {
      padding: 0px;

      span {
        // background-color: rgba(66, 133, 244, 0.1);
        color: rgb(39, 128, 255);
      }
    }

    .table-list-button-gray {
      padding: 0px;

      span {
        // background-color: rgba(66, 133, 244, 0.1);
        color: #878889;
      }
    }
  }

  /deep/ .ant-pagination {
    .ant-pagination-item {
      width: px2rem(32px);
      height: px2rem(32px);
      background: #ffffff !important;
      border: 1px solid #efefef !important;
      border-radius: 2px !important;
      &:hover {
        border: 1px solid #038181 !important;
      }
      &:focus a,
      &:hover a {
        color: #038181 !important;
      }
    }

    .ant-pagination-item-active {
      background: #038181 !important;
      border: 1px solid #038181 !important;
      border-radius: 2px !important;
      &:focus a,
      &:hover a,
      a {
        color: white !important;
      }
    }
  }
}
</style>
