<template>
  <CustomModal
    title="设置权限"
    :visible="visible"
    :confirm-loading="confirmLoading"
    @cancel="handleCancel"
    @ok="ok"
  >
    <div class="set-power">
      
      <Tree
        ref="tree"
        :data="treeData"
        show-checkbox
        :props="replaceFields"
        :default-expanded-keys="expandedKeys"
        node-key="menu_id"
        highlight-current
        :default-checked-keys="checkedKeys"
      />
    </div>
  </CustomModal>
</template>

<script>

import { Tree } from 'element-ui';
import 'element-ui/lib/theme-chalk/tree.css';
import 'element-ui/lib/theme-chalk/icon.css';
import { getMenuAuthList } from "@/api/setting/role.js";
import { saveAuth } from "@/api/setting/role.js";


export default {
  data() {
    return {
      confirmLoading: false,
      treeData: [],
      replaceFields: {
        children: 'children', title: 'menu_name', label: 'menu_name', key: 'menu_id'
      },
      checkedKeys: [],
      halfCheckedKeys: [],
      expandedKeys: [],// 默认展开
      visible: false,
    };
  },

  watch: {
    value: {
      handler(newVal) {
        this.visible = newVal;
      },
      immediate: true,
    },
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    params: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  created() {
    this.getMenus()
  },
  components: {
    Tree
  },
  methods: {
    getMenus() {
      this.halfCheckedKeys = []
      getMenuAuthList({
        role_id: this.params.role_id
      })
        .then(({ data }) => {
          if (data.code === 200) {
            this.treeData = data.data.menu_list
            this.expandedKeys = []
            this.checkedKeys = this.getSelectId(this.treeData, [], 0)
          }
        })
    },
    getSelectId(arr, result, i) {
      arr.forEach(item => {
        item.disabled = item.is_auth === 0
        if (this.isChecked(item)) {
          result.push(item.menu_id)
        } 
        if (i < 1) {
          this.expandedKeys.push(item.menu_id)
        }
        if (Array.isArray(item.children)) {
          this.getSelectId(item.children, result, i + 1)
        }
      })
      return result
    },
    // 子代节点都选中才选中 或者只勾选叶子节点就行了
    isChecked(item) {
      if (item.is_select === 1) {
        if (item.children?.length > 1) {
          for (let i = 0; i < item.children.length; i++) {
            if (!this.isChecked(item.children[i])) {
              return false
            }
          }
          return true
        } else {
          return true
        }
      }
    },
    ok() {
      this.confirmLoading = true

      let checked = this.$refs.tree.getCheckedKeys(true)
      let halfChecked = this.$refs.tree.getHalfCheckedKeys() 
      checked = checked.concat(halfChecked)
      saveAuth({
        menu_id: checked.join(','),
        role_id: this.params.role_id
      })
        .then(({ data }) => {
          if (data.code === 200) {
            this.$message.success(data.msg);
            this.$emit("success");
            this.handleCancel();
          }
          this.confirmLoading = false;
        })
        .catch(() => {
          this.confirmLoading = false;
        });
    },
    handleCancel() {
      this.$emit("input", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.set-power {
  height: px2rem(500);
  overflow-y: scroll;
}
</style>
