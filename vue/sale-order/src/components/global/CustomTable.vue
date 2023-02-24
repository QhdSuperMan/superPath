<template>
  <div class="custom-table-container" v-if="isShow">
    <a-table
      v-bind="$attrs"
      v-on="$listeners"
      :rowSelection="rowSelectionSelf"
      :pagination="false"
      :loading="loadingComputed"
      :dataSource="dataSourceComputed"
      :columns="columnsSelf"
    >
    </a-table>
    <a-pagination
      v-if="isPage"
      v-bind="paginationSelf"
      v-model="current"
      @change="pageChange"
      @showSizeChange="showSizeChange"
    >
      <template slot="buildOptionText" slot-scope="props">
        <span>{{ props.value }} 条/页</span>
      </template>
    </a-pagination>
  </div>
</template>

<script>
import { tableMinxin } from "./config/custom-table";
import axios from "@/utils/service.js";

export default {
  name: "CustomTable",
  mixins: [tableMinxin],
  components: {},
  props: {
    params: {
      type: Object,
      default: () => {
        return {
          api: "", // 接口地址
          params: "", // 查询参数
          total: "", // 接口地址
          result: "", // 接口地址
        };
      },
    },
    dataSource: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
    },
    isPage: {
      // 是否分页
      type: Boolean,
      default: true,
    },
    columns: {
      type: Array,
      default: () => [],
    },
    selectedRowKeys: {
      type: Array,
      default: () => [],
    },
  },

  watch: {
    selectedRowKeys: {
      handler(newVal) {
        if (this.rowSelectionSelf) {
          this.rowSelectionSelf.selectedRowKeys = newVal;
        }
      },
      immediate: true,
    },
  },

  computed: {
    dataSourceComputed() {
      return this.dataSourceSelf || this.dataSource;
    },
    loadingComputed() {
      return this.loadingSelf || this.loading;
    },
    paramsSelf() {
      return Object.assign(
        {
          total: "data.total", // 接口地址
          data: "data.data", // 接口地址
        },
        this.params
      );
    },
    columnsSelf() {
      return this.dealColumns(this.columns)
    }
  },

  data() {
    return {
      isShow: false,
      loadingSelf: false,
      current: 1,
      paginationSelf: {
        // 分页
        pageSizeOptions: ["10", "20", "30", "40", "50"],
        showSizeChanger: true,
        showQuickJumper: true,
        total: 0,
        pageSize: 10,
        showTotal: (total) => "共" + total + "条记录",
        position: "bottom",
      },
      dataSourceSelf: null,

      rowSelectionSelf: {
        fixed: true,
        selectedRowKeys: [],
        onChange: this.selectChange,
      },
    };
  },

  created() {
    try {
      this.init();
      this.getData(1);
    } catch (error) {
      this.isShow = true;
    }

    this.isShow = true;
  },

  mounted() { },

  methods: {
    // 获取数据
    getData(num) {
      this.$nextTick(() => {
        if (this.params.api) {
          let params = this.paramsSelf.params;

          // if (!this.btnAuthority.s_list) {
          //   this.$
          // }

          if (this.isPage) {
            if (!isNaN(num)) {
              this.current = num;
            }
            if (this.rowSelectionSelf) {
              this.rowSelectionSelf.selectedRowKeys = [];
            }
            params = Object.assign({}, params, {
              page: this.current,
              per_page: this.paginationSelf.pageSize,
            });
          }

          this.loadingSelf = true;

          axios({
            method: "post",
            url: this.params.api,
            data: params,
          })
            .then(({ data }) => {
              if (data.code === 200) {
                this.dataSourceSelf = this.getObjValue(
                  data,
                  this.paramsSelf.data,
                  []
                );

                if (this.isPage) {
                  this.paginationSelf.total = this.getObjValue(
                    data,
                    this.paramsSelf.total,
                    0
                  );
                }
              }
              this.loadingSelf = false;
            })
            .catch(() => {
              this.loadingSelf = false;
            });
        }
      });
    },
    // 获取对象
    getObjValue(data, str, defaultValue) {
      let result = null;
      try {
        result = str.split(".").reduce((a, b) => {
          return a[b];
        }, data);
      } catch (error) {
        result = defaultValue;
        throw "表格返回值层级不对";
      }

      return result;
    },
    // 初始化
    init() {
      // 覆盖配置
      if (this.$attrs.pagination !== undefined) {
        this.paginationSelf = Object.assign(
          {},
          this.paginationSelf,
          this.$attrs.pagination
        );
      }
      if (this.$attrs.rowSelection !== undefined) {
        if (this.$attrs.rowSelection === false) {
          this.rowSelectionSelf = undefined;
        } else {
          this.rowSelectionSelf = Object.assign(
            {},
            this.rowSelectionSelf,
            this.$attrs.rowSelection
          );
        }
      }
    },
    // 多选框选中
    selectChange(selectedRowKeys) {
      console.log("selectedRowKeys: ", selectedRowKeys);
      this.rowSelectionSelf.selectedRowKeys = selectedRowKeys;
      this.$emit("selectChange", selectedRowKeys);
    },
    // pageChange
    pageChange(index) {
      this.current = index;
      this.getData()
      this.$emit("pageChange", index);
    },
    // 分页改变
    showSizeChange(current, pageSize) {
      this.paginationSelf.pageSize = pageSize;
      this.current = current;
      this.getData()
      this.$emit("showSizeChange", index);
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-table-container {
  ::v-deep .ant-table-wrapper {
    .ant-table-scroll {
      overflow-x: scroll;
    }

    .blue-text {
      color: #3344ff;
    }

    .orange-text {
      color: #ff6f13;
    }

    .success-text {
      color: #00e667;
    }
  }

  ::v-deep .ant-pagination {
    margin-top: 20px;
    text-align: right;
  }
}
</style>
