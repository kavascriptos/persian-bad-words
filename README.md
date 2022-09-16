## persian-bad-words

Install it by [npm](https://www.npmjs.com/package/persian-bad-words):
```bash
npm i persian-bad-words@latest
```
- In the name of god
- Author : **Thekawasaki**
- made with **Brain**

## Updates

**v1.0.3**
- bug fix
- some finglish bad words added

**v1.0.2**
- added words
- fixed a problem with ظ

**v1.0.1**
- Fixed a bug (always returns true)
- multiline regex

**v1.0.0**
- First upload!

## Usage?

ببین یه وقتایی هست باید کلمه بدارو فیلتر کنی و چون خیلی گوگولی و خجالتی هستی باید خودت کلی فحش بنویسی...
من کارتو راحت کردم و بجات کلی فحش به دیوار دادم. (هدفمون خیر بوده دعا کنین :) )

ببین اینطوری از کد استفاده میکنی : 

### Node.js

```js
const { detect } = require('persian-bad-words');

console.log(detect("کی ر")); //returns true
console.log(detect("کی‌ر")); //returns true
console.log(detect("سلام زنتو من گای یدم")); //returns true
console.log(detect("سلام سوتون چطوری امیدوارم عشق کنی بامون")); //returns false
```

### HTML

```html
<script type="module" src="https://unpkg.com/thekawasaki/persian-bad-words"></script>
```

### Discord.js

```js
const { detect } = require('persian-bad-words'); 

//Discord.js event
client.on("message", async (msg) => {
     if(detect(msg.content)) {
          setTimeout(() => {
               msg.delete();
               //chizaye dige
          })
     }
}) 
```

**توجه** : مثال دیسکورد جی اس ناقصه و اونایی که بهش واردن میفهمن چطور کار کنن

## Other ways or in other languages?

ببین ما دست تنهاییم و اگه از کد و متد ما سر در آوردید با زبون دومی که بلدید یه کد بزنید بعد ریکوست بدید نگا کنم ولی این پکیج سراسر نود جی اس کار میکنه و مناسب سایت ها و بات های توی مسنجر هاست (از جهت بررسی فحش در مسیج ها/کامنت ها)



## Donate or help?

https://idpay.ir/thekawasaki

فسفرایی که میسوزونیم با هیچی جبران نمیشه (این یه چاخانه)

هرجور پیشنهاد با مشکلی داشتید PR یا issue باز کنید!

## ToDo

* Finglish support
* Adding more bad words
* removing bad words function
* CLI Support
