# Krude Extensions

Extensions for [krude](https://github.com/KusStar/krude/blob/main/docs/EXTENSION.md).

## Deploy

- Deploy with [Deno Deploy](https://docs.deno.com/deploy/manual#deploy-your-existing-project)

- Self-hosted with [Podman](https://podman.io/docs/installation), run [deploy.sh](./deploy.sh) to deploy

  ```shell
  sh deploy.sh
  ```

  Deploy with Docker is the same, just replace `podman` with `docker`

## List

Extension Count: 71

### [china-apps-shortcuts](./extensions/china-apps-shortcuts.json)

- [支付宝-扫一扫](./extensions/china-apps-shortcuts.json#L11)

  **scheme**
  
  Alipay QR Scan

  [扫码]

- [支付宝-收付款](./extensions/china-apps-shortcuts.json#L24)

  **scheme**
  
  Alipay Pay/Collect

  [付款码]

- [支付宝-收款码](./extensions/china-apps-shortcuts.json#L37)

  **scheme**
  
  Alipay Collect QR Code

- [支付宝-出行](./extensions/china-apps-shortcuts.json#L47)

  **scheme**
  
  Alipay Transport

  [公交, 地铁, 乘车码]

- [支付宝-菜鸟](./extensions/china-apps-shortcuts.json#L62)

  **scheme**
  
  Alipay Cai Niao

  [快递, 物流, 驿站]

- [支付宝-手机充值](./extensions/china-apps-shortcuts.json#L77)

  **scheme**
  
  Alipay Phone Bill

  [充话费]

- [支付宝-生活缴费](./extensions/china-apps-shortcuts.json#L90)

  **scheme**
  
  Alipay Life Bill

  [水电煤, 充电费, 充水费]

- [微信-扫一扫](./extensions/china-apps-shortcuts.json#L105)

  **intent**
  
  Wechat QR Scan

  [扫码]

- [微信-收付款](./extensions/china-apps-shortcuts.json#L126)

  **action**
  
  Wechat Pay Collect

  [付款码]

- [美团-扫一扫](./extensions/china-apps-shortcuts.json#L144)

  **scheme**
  
  Meituan QR Scan

  [扫码]

- [美团-搜索](./extensions/china-apps-shortcuts.json#L157)

  **scheme**
  
  Meituan Search

- [美团-订单](./extensions/china-apps-shortcuts.json#L167)

  **scheme**
  
  Meituan Order Center List

- [美团-收藏](./extensions/china-apps-shortcuts.json#L177)

  **scheme**
  
  Meituan Collection

- [美团-外卖](./extensions/china-apps-shortcuts.json#L187)

  **scheme**
  
  Meituan Waimai

- [淘宝-扫一扫](./extensions/china-apps-shortcuts.json#L197)

  **scheme**
  
  Taobao QR Scan

- [淘宝-搜索](./extensions/china-apps-shortcuts.json#L207)

  **scheme**
  
  Taobao Search

- [淘宝-订单](./extensions/china-apps-shortcuts.json#L217)

  **scheme**
  
  Taobao Orders

- [淘宝-待发货](./extensions/china-apps-shortcuts.json#L227)

  **scheme**
  
  Taobao Orders WaitSend

- [淘宝-待收货](./extensions/china-apps-shortcuts.json#L237)

  **scheme**
  
  Taobao Orders WaitConfirm

- [淘宝-退款/售后](./extensions/china-apps-shortcuts.json#L247)

  **scheme**
  
  Taobao Orders Refund

- [淘宝-收货地址](./extensions/china-apps-shortcuts.json#L257)

  **scheme**
  
  Taobao Receiver Address

- [拼多多-搜索](./extensions/china-apps-shortcuts.json#L267)

  **scheme**
  
  Pinduoduo QR Search

- [拼多多-订单](./extensions/china-apps-shortcuts.json#L277)

  **scheme**
  
  Pinduoduo Orders

- [拼多多-待收货](./extensions/china-apps-shortcuts.json#L287)

  **scheme**
  
  Pinduoduo Shipping Orders

- [拼多多-待发货](./extensions/china-apps-shortcuts.json#L297)

  **scheme**
  
  Pinduoduo waiting for delivery

- [拼多多-收货地址](./extensions/china-apps-shortcuts.json#L307)

  **scheme**
  
  Pinduoduo Addresses

- [抖音-搜索](./extensions/china-apps-shortcuts.json#L317)

  **scheme**
  
  Douyin Search

- [小红书-搜索](./extensions/china-apps-shortcuts.json#L327)

  **scheme**
  
  Xiaohongshu Search

- [高德-我的位置](./extensions/china-apps-shortcuts.json#L337)

  **scheme**
  
  Gaode Amap My Location

- [京东-扫一扫](./extensions/china-apps-shortcuts.json#L347)

  **scheme**
  
  Jingdong QR Scan

- [京东-搜索](./extensions/china-apps-shortcuts.json#L357)

  **scheme**
  
  Jingdong Search

- [京东-订单](./extensions/china-apps-shortcuts.json#L367)

  **scheme**
  
  Jingdong Orderlist

### [clash-shortcuts](./extensions/clash-shortcuts.json)

- [Clash-Toggle](./extensions/clash-shortcuts.json#L10)

  **action**
  
  Toggle Clash Meta

- [Clash-Start](./extensions/clash-shortcuts.json#L20)

  **action**
  
  Start Clash Meta

- [Clash-Stop](./extensions/clash-shortcuts.json#L30)

  **action**
  
  Stop Clash Meta

### [global-apps-shortcuts](./extensions/global-apps-shortcuts.json)

- [Youtube Search](./extensions/global-apps-shortcuts.json#L12)

  **scheme**
  
  Youtube Search

  [youtube, ytb, search]

- [Instagram Search](./extensions/global-apps-shortcuts.json#L27)

  **scheme**
  
  Instagram Search

  [instagram, ig, search]

- [Voice Assistant](./extensions/global-apps-shortcuts.json#L42)

  **intent**
  
  ChatGPT Voice Assistant

  [ai, chatgpt, assistant, voice]

- [Search | 搜索](./extensions/global-apps-shortcuts.json#L12)

  **scheme**
  
  Google Photos Search

  [google photos, gallery, search]

- [Library | 媒体库](./extensions/global-apps-shortcuts.json#L87)

  **scheme**
  
  Google Photos Library

  [google photos, gallery, library]

- [Favorites | 收藏](./extensions/global-apps-shortcuts.json#L114)

  **scheme**
  
  Google Photos Favorites

  [google photos, gallery, favorites]

- [Trash | 回收站](./extensions/global-apps-shortcuts.json#L141)

  **scheme**
  
  Google Photos Trash

  [google photos, gallery, trash]

- [Archive | 归档](./extensions/global-apps-shortcuts.json#L168)

  **scheme**
  
  Google Photos Archive

  [google photos, gallery, archive]

### [miui-shortcuts](./extensions/miui-shortcuts.json)

- [MIUI-三方应用异常分析](./extensions/miui-shortcuts.json#L8)

  **intent**
  
  com.miui.thirdappassistant

- [MIUI-系统导航方式](./extensions/miui-shortcuts.json#L21)

  **intent**
  
  com.miui.home/com.miui.home.recents.settings.NavigationBarTypeActivity

### [app-aliases](./extensions/app-aliases.json)

- [Youtube Alias](./extensions/app-aliases.json#L12)

  **alias**
  
  [ytb, 油管]

- [Instagram Alias](./extensions/app-aliases.json#L24)

  **alias**
  
  [ig, ins]

- [Telegram Alias](./extensions/app-aliases.json#L36)

  **alias**
  
  [tg]

- [Xiaomi Scanner Alias](./extensions/app-aliases.json#L47)

  **alias**
  
  [扫一扫]

### [setting-shortcuts](./extensions/settings-shortcuts.json)

- [Settings-WiFi | 设置-WiFi](./extensions/settings-shortcuts.json#L8)

  **action**
  
  Wifi Setting

- [Settings-Bluetooth | 设置-蓝牙](./extensions/settings-shortcuts.json#L23)

  **action**
  
  Bluetooth Setting

- [Settings-All apps | 设置-所有应用](./extensions/settings-shortcuts.json#L38)

  **action**
  
  App Setting

- [Settings-Developer Options | 设置-开发者选项](./extensions/settings-shortcuts.json#L53)

  **action**
  
  Developer Options

- [Settings-Date & Time | 设置-日期和时间](./extensions/settings-shortcuts.json#L68)

  **action**
  
  Date Time Setting

- [Settings-Language | 设置-语言](./extensions/settings-shortcuts.json#L83)

  **action**
  
  Language Setting

- [Settings-Location | 设置-位置](./extensions/settings-shortcuts.json#L98)

  **action**
  
  Location Setting

- [Settings-Storage | 设置-存储](./extensions/settings-shortcuts.json#L113)

  **action**
  
  Storage Setting

- [Settings-Notification | 设置-通知](./extensions/settings-shortcuts.json#L128)

  **action**
  
  Notification Setting

- [Settings-Security | 设置-安全](./extensions/settings-shortcuts.json#L143)

  **action**
  
  Security Setting

- [Settings-Sound | 设置-声音](./extensions/settings-shortcuts.json#L158)

  **action**
  
  Sound Setting

- [Settings-Display | 设置-显示](./extensions/settings-shortcuts.json#L173)

  **action**
  
  Display Setting

- [Settings-Accessibility | 设置-无障碍](./extensions/settings-shortcuts.json#L188)

  **action**
  
  Accessibility Setting

- [Settings-App settings | 设置-应用设置](./extensions/settings-shortcuts.json#L203)

  **action**
  
  Application Setting

- [Settings-Device Info | 设置-设备信息](./extensions/settings-shortcuts.json#L218)

  **action**
  
  Device Info

- [Settings-Battery Optimization | 设置-电池优化](./extensions/settings-shortcuts.json#L233)

  **action**
  
  Battery Optimization

- [Settings-Input Method | 设置-语言与输入法](./extensions/settings-shortcuts.json#L248)

  **action**
  
  Input Method

- [Settings-Internal Storage | 设置-存储空间](./extensions/settings-shortcuts.json#L263)

  **action**
  
  Internal Storage

- [Settings-All files Access | 设置-所有文件访问权限](./extensions/settings-shortcuts.json#L278)

  **action**
  
  Manage All files Access

- [Settings-Default Apps | 设置-默认应用](./extensions/settings-shortcuts.json#L293)

  **action**
  
  Manage Default Apps

- [Settings-Overlay | 设置-悬浮窗权限](./extensions/settings-shortcuts.json#L308)

  **action**
  
  Manage display over other apps

- [Settings-Unknow App Sources | 设置-安装未知应用](./extensions/settings-shortcuts.json#L323)

  **action**
  
  Unknow App Sources

