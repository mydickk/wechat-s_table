
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    rows: { // 数据行，对象数组
      type : Array, // object[]
      value : []
    },
    headers: { // 表格标题队列
      type: Array, // string[]
      value: []
    },
    keys: { // 键值，顺序对应表格的顺序
      type: Array, // string[]
      value: []
    },
    config : {
      type : Object,
      value :{
        columnWidths: { // 设置单元格宽度
          type: Array, // string[]
          value: []
        },
        border: { // 是否显示border
          type: Boolean,
          value: true
        },
        scroll: { // 是否开启滚动
          type: Boolean,
          value: true
        },
        stripe: {
          type: Boolean,
          value: true
        },
        headbgcolor : {
          type : String,
          value : '#f3f0f0'
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
  },

  /**
   * 声明周期函数
   */
  pageLifetimes:{
    
  }
})