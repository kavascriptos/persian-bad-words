## persian-bad-words

Install it by npm:
```bash
npm i persian-bad-words@latest
```
- In the name of god
- Author : **Thekawasaki**
- made with **Brain**

## Update?

- First upload!

## Usage?

ببین یه وقتایی هست باید کلمه بدارو فیلتر کنی و چون خیلی گوگولی و خجالتی هستی باید خودت کلی فحش بنویسی...
من کارتو راحت کردم و بجات کلی فحش به دیوار دادم. (هدفمون خیر بوده دعا کنین :) )

ببین اینطوری از کد استفاده میکنی : 

### Node.js

```js
const { detect } = require('persian-bad-words');

console.log(detect("کی ر")); //returns true
console.log(detect("جنㅤده")); //returns true
console.log(detect("سلام زنتو من گای یدم")); //return true
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

ببین ما دست تنهاییم و اگه از کد و متد ما سر در آوردید با زبون دومی که بلدید یه کد بزنید بعد ریکوست بدید نگا کنم ولی این پکیج سراسر نود جی اس براتون جوابه و خوراک بات های تلگرامی و دیسکوردی آنتی فحشه + اینستا



## Donate?

https://idpay.ir/thekawasaki

فسفرایی که میسوزونیم با هیچی جبران نمیشه (این یه چاخانه)



## ToDo

* Finglish support
* Adding more bad words
* remove bad words
