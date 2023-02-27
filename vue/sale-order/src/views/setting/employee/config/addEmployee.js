// 拨号状态

import release from "@/assets/img/resources/release.png";

export const formModal = {
  staff_name: "",
  mobile: "",
  password: "",
  role_id: "",
  is_rank: 0,
  is_tape: 0,
  is_lh_rank: 0,
  department_id: "",
};

export const configMixins = {
  data() {
    return {
      rules: {
        staff_name: [
          {
            required: true,
          },
        ],
        mobile: [
          {
            required: true,
          },
          {
            type: "phone",
          },
        ],
        // verify_code: [
        //   {
        //     required: true,
        //   },
        // ],
        // password: [
        //   {
        //     required: true,
        //   },
        // ],
        role_id: [
          {
            required: true,
          },
        ],
        department_id: [
          {
            required: true,
          },
        ],
      },
    };
  },
  computed: {
    formItem() {
      return [
        {
          label: "员工名称",
          field: "staff_name",
          type: "customInput",
        },
        {
          label: "头像",
          field: "avatar",
          slot: "avatar",
        },
        {
          label: "手机号",
          field: "mobile",
          type: "customInput",
        },
        {
          label: "验证码",
          field: "verify_code",
          slot: "code",
          attrs: {
            placeholder: "验证码",
          },
        },
        {
          label: "密码",
          field: "password",
          type: "customInput",
          attrs: {
            type: "password",
            placeholder: this.isAdd
              ? "默认密码：手机号后六位"
              : "留空则不修改密码",
          },
        },
        {
          label: "所属部门",
          field: "department_id",
          type: "customSelect",
          attrs: {
            allKey: false,
            api: "getDepartmentList",
            config: { value: "department_id", label: "department_name" },
          },
        },
        {
          label: "所属角色",
          field: "role_id",
          type: "customSelect",
          hidden: this.form.is_admin == 1 ? true : false,
          attrs: {
            allKey: false,
            placeholder: "行业",
            api: "getRoleList",
            config: { value: "role_id", label: "role_name" },
          },
        },
        {
          label: "是否开启录音",
          field: "is_tape",
          type: "a-radio-group",
          attrs: {
            options: [
              { label: "是", value: 1 },
              { label: "否", value: 0 },
            ],
          },
        },
        {
          label: "是否参与排行榜",
          field: "is_rank",
          type: "a-radio-group",
          attrs: {
            options: [
              { label: "是", value: 1 },
              { label: "否", value: 0 },
            ],
          },
        },
        {
          label: "是否参与龙虎榜",
          field: "is_lh_rank",
          type: "a-radio-group",
          attrs: {
            options: [
              { label: "是", value: 1 },
              { label: "否", value: 0 },
            ],
          },
        },
      ];
    },
  },
};
