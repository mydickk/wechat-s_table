const app = getApp()

Page({
  data: {
    rows :[
      {id: 1, name: 'dick', age: 25, weight: '60kg', height: '170cm', remark: '毕业于清华大学，硕士学位，社会精英'},
      {id: 2, name: 'susan', age: 22, weight: '48kg', height: '165cm', remark: '推销人员'},
      {id: 3, name: 'join', age: 23, weight: '70kg', height: '180cm', remark: '运动员'},
      {id: 4, name: 'mike', age: 26, weight: '60kg', height: '175cm', remark: '社会服务工作者'},
    ],
    headers: ['id', '姓名', '年龄', '体重', '身高', '备注'],
    keys: ['id', 'name', 'age', 'weight', 'height', 'remark'],
    tableConfig: {
      columnWidths: ['80rpx', '', '80rpx', '', '100rpx', '400rpx'],
      border: true,
      scroll: true,
    }
  },
  onLoad: function () {

  },
})
