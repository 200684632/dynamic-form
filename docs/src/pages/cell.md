# Cell 单元格

用于展示 2 列信息，左侧为标题，右侧为内容的场景

```vue client=Mobile playground=MCell
<template>
  <d-cell-group title="CellGroup 分组">
    <d-cell title="我是标题" content="内容" />
    <d-cell title="我是标题" content="内容" />
  </d-cell-group>
  <d-cell-group title="展示圆角" round>
    <d-cell title="我是标题" content="内容" />
    <d-cell title="我是标题" content="内容" />
  </d-cell-group>

  <d-cell title="我是标题" content="内容" />
  <d-cell title="我是标题" content="必填标识" required />
  <d-cell content="隐藏标题" hide-title />
  <d-cell title="扩展内容" content="正文" suffix="单位" />
  <d-cell title="扩展内容" content="正文">
    <template #suffix>单位</template>
  </d-cell>
  <d-cell title="显示图标" left-icon="tips" right-icon="close" />
  <d-cell
    title="显示图标"
    content="图标大小、颜色控制"
    left-icon="tips"
    left-icon-size="small"
    left-icon-color="#f00"
    right-icon="close"
    right-icon-color="#f00"
  />
  <d-cell title="显示右侧箭头" arrow content="正文内容" />
</template>
```

## API

### CellGroup Props

| 参数             | 类型                         | 默认值     | 说明           | 必传 |
| ---------------- | ---------------------------- | ---------- | -------------- | ---- |
| title            | string                       | -          | 分组标题       | N    |
| cell-title-width | string                       | `80px`     | 单元格标题宽度 | N    |
| round            | boolean                      | false      | 是否展示圆角   | N    |
| border           | boolean                      | true       | 是否显示边框   | N    |
| layout           | `'horizontal' \| 'vertical'` | horizontal | 布局类型       | N    |

### Cell Props

| 参数             | 类型                         | 默认值     | 说明                                    | 必传 |
| ---------------- | ---------------------------- | ---------- | --------------------------------------- | ---- |
| title            | string                       | -          | 标题                                    | N    |
| title-width      | string                       | `80px`     | 标题宽度                                | N    |
| title-class      | string                       | -          | 标题类名                                | N    |
| title-align      | string                       | left       | 标题对齐方式，可选值：left/center/right | N    |
| hide-title       | boolean                      | false      | 是否隐藏标题                            | N    |
| required         | boolean                      | false      | 是否显示必填标识                        | N    |
| content          | string                       | -          | 内容                                    | N    |
| content-class    | string                       | -          | 内容类名                                | N    |
| content-align    | string                       | right      | 内容对齐方式，可选值：left/center/right | N    |
| disabled         | boolean                      | -          | 是否禁用                                | N    |
| suffix           | string                       | -          | 扩展内容                                | N    |
| arrow            | boolean                      | false      | 是否显示右侧箭头                        | N    |
| left-icon        | string                       | -          | 显示左侧图标                            | N    |
| left-icon-size   | string                       | -          | 左侧图标大小，继承 `Icon` 组件 `Props`  | N    |
| left-icon-color  | string                       | -          | 左侧图标颜色                            | N    |
| left-icon-props  | Record<string, any>          | -          | 左侧 `Icon` 图标组件 props              | N    |
| right-icon       | string                       | -          | 显示右侧图标                            | N    |
| right-icon-size  | string                       | -          | 右侧图标大小，继承 `Icon` 组件 `Props`  | N    |
| right-icon-color | string                       | -          | 右侧图标颜色                            | N    |
| right-icon-props | Record<string, any>          | -          | 右侧 `Icon` 图标组件 props              | N    |
| border           | boolean                      | true       | 是否显示边框                            | N    |
| layout           | `'horizontal' \| 'vertical'` | horizontal | 布局类型                                | N    |

### Cell Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 自定义内容     |
| title   | 自定义标题     |
| suffix  | 自定义扩展内容 |
