# Modal
It just pops and shows you something.

## Demos
```demo
basic
controlled
mask-closable
preset-card
preset-confirm
preset-confirm-slot
```
## V-model
|Prop|Event|
|-|-|
|show|hide|

## Props
### Modal
|Name|Type|Default|Description|
|-|-|-|-|
|theme|`'light' \| 'dark' \| null`|`null`||
|show|`boolean`|`false`||
|mask-closable|`boolean`|`true`|Whether to emit `hide` event when click mask.|
|preset|`'card' \| 'confirm'`|`null`||
|overlay-style|`Object`|`null`|The content style when use `preset`.|

### Modal with Preset Card
See [Card props](n-card#Props)
### Modal with Preset Confirm
See [Confirm props](n-confirm#Props)

## Slots
### Modal without Preset
|Name|Parameters|Description|
|-|-|-|
|default|`()`||

### Modal with Preset Card
See [Card slots](n-card#Slots)
### Modal with Preset Confirm
See [Confirm slots](n-confirm#Slots)

## Events
### Modal
|Name|Parameters|Description|
|-|-|-|
|hide|`(show: false)`||

### Modal with Preset Card
See [Card events](n-card#Events)
### Modal with Preset Confirm
See [Confirm events](n-confirm#Events)