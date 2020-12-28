
# 산성비
재미있는 산성비 게임!

## 커스텀 모드
커스텀 모드를 이용하면 더 다양한 산성비류 게임(?)을 즐길 수 있습니다.



숫자 타이핑 연습
```js
var str = String(Math.floor(Math.random() * 10**6)).padStart(6, "0");
str
str
```

제곱 계산 연습
```js
var [a,b] = new Array(2).fill(null).map(i => Math.floor(Math.random()*10));
\`(${a} ** ${b})\`
(a**b)
```

어려운 더하기 곱하기
```js
var [a, b, c, d] = new Array(4).fill(null).map(i => Math.floor(Math.random()*10));
`(${a}+${b})*(${c}+${d})`
(a+b)*(c+d)
```

사칙연산
```js
var [a, b] = new Array(2).fill(null).map(_ => Math.floor(Math.random()*10)); var mode = Math.floor(Math.random()*4);
[`${a}+${b}`, `${a}-${b}`, `${a}*${b}`, `${a*b}/${a || 1}`][mode]
[a+b, a-b, a*b, a ? b : 0][mode]
```

이진수 => 십진수 연습
```js
var num = Math.floor(Math.random() * 2**4);
num.toString(2).padStart(4, "0")
num
```

십진수 => 이진수 연습
```js
var num = Math.floor(Math.random() * 2**4);
num
num.toString(2)
```

단어 거꾸로 입력하기
```js
var word = words[Math.floor(Math.random() * words.length)];
word
Array.from(word).reverse().join("")
```

공백 크기 맞추기
```js
var i = Math.floor(Math.random() * 9);
"|" + "　".repeat(i) + "|"
i
```