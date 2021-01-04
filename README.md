# 微信小程序-伸缩性最强的table组件

微信小程序很大的一个诟病之一就是没有table组件，小程序中正常显示表格依然是令人头痛的问题。下面使用flex布局模拟现实一个小程序的table组件，支持内容过多滑动，设置单元格宽度等。

### 1.效果图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210104172641845.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTQ2NDMzNTE=,size_16,color_FFFFFF,t_70#pic_center)


[微信开发者工具查看效果](https://developers.weixin.qq.com/s/l9BnC6mq7xng)

### 2.使用
在需要引用的json页面添加
```
// index
{
  "navigationBarTitleText": "伸缩性最强的表格组件",
  "usingComponents": {
    "s-table": "../components/s-table/s-table"
  }
}
```
然后页面调用
```
<s-table config="{{tableConfig}}" rows="{{rows}}" keys="{{keys}}" headers="{{headers}}"></s-table>
```
js
```
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

```
### 3.参数说明

|参数名|默认值|说明|
|:-:|:-----:| :----: |
|`rows`| []|从服务器获取的对象数组|
|`headers`| []|字符穿穿数组，表格标题，例： ['id', '姓名', '年龄', '体重', '身高', '备注']|
| `keys`| []| 渲染的键值，顺序渲染|
|`tableConfig `|{}|表格设置选项，一个对象

tableConfig选项

|参数名|默认值|说明|
|:-:|:-----:| :----: |
|`columnWidths`|180rpx|设置每个单元格长度，例： ['80rpx', '', '80rpx', '', '100rpx', '400rpx']，为空时默认180rpx|
|`border`|false|是否显示边框|
| `scroll`|false| 是否可滚动|
|`headbgcolor`|#f3f0f0|标题背景色|



如果我的代码对你帮助，请给个start吧。^-^

有不对或者什么问题，都可以留言
