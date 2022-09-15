/**
 * 数据配置说明
 * 第一层对象的 alias 必须要有且不同，选择之后会触发 emit('filter', filterValue)
 * filterValue 格式是 {field: 2, select: 1} 将子选项的 value 收集起来
 * ==
 * 默认的子选项需要增加一个 currentLabel, 用于选中全部时显示的文案 和 第一层 label 相同
 */
export default [
  {
    label: '全部课程',
    alias: 'field',
    value: 0,
    options: [
      {
        label: '全部',
        currentLabel: '全部课程',
        alias: 'all',
        value: 0,
        def: true
      },
      {
        label: '专栏/视频课',
        alias: 'course',
        value: 2
      },
      {
        label: '每日一课',
        alias: 'daily',
        value: 3
      },
      {
        label: '大厂案例',
        alias: 'dachang',
        value: 4
      }
    ]
  },
  {
    label: '全部选择',
    alias: 'select',
    value: 1,
    options: [
      {
        label: '全部',
        currentLabel: '全部选择',
        alias: 'all',
        value: 0,
        def: true
      },
      {
        label: '未选择',
        alias: 'un-select',
        value: 1
      },
      {
        label: '已选择',
        alias: 'selected',
        value: 2
      }
    ]
  }
]
