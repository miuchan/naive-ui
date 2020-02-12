# Controlled
Modal can be controlled.
```html
<n-button
  size="small"
  @click="handleClick"
>
  Start Me up
</n-button>
<n-modal :show="isActive">
  <n-card
    style="width: 600px;"
    title="Modal"
    :bordered="false"
    size="huge"
  >
    Countdown {{ timeout / 1000 }}s
  </n-card>
</n-modal>
```
```js
export default {
  data () {
    return {
      isActive: false,
      timeout: 6000
    }
  },
  methods: {
    handleClick () {
      this.isActive = true
      this.timeout = 6000
      let countdown = () => {
        if (this.timeout <= 0) {
          this.isActive = false
        } else {
          this.timeout -= 1000
          setTimeout(countdown, 1000)
        }
      }
      countdown()
    }
  }
}
```