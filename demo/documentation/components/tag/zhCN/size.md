# 尺寸
```html
<n-tag
  closable
  size="small"
  round
  @close="handleClose"
>
  爱在西元前
</n-tag>
<n-tag
  type="success"
  size="large"
  round
  closable
  @close="handleClose"
>
  不该
</n-tag>
<n-tag
  type="warning"
  closable
  @close="handleClose"
>
  超人不会飞
</n-tag>
<n-tag
  type="error"
  closable
  round
  @close="handleClose"
>
  手写的从前
</n-tag>
<n-tag
  type="info"
  closable
  @close="handleClose"
>
  哪里都是你
</n-tag>
```
```js
export default {
  methods: {
    handleClose () {
      this.$NMessage.info('tag close')
    }
  }
}
```
```css
.n-tag {
  margin-right: 12px;
  margin-bottom: 8px;
}
```