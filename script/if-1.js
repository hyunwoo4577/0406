// console.log('논리데이터 연습----------------------')
// console.log (true)
// console.log (false)
// console.log (true+2) //3 논리데이터(true)를 숫자데이터와 계산하면 1로 인식 
// console.log (false+10)//10 false는 0
// console.log (typeof true)//boolean = 논리데이터타입 
// console.log (typeof false)//boolean10
// let bo = true+10 //오른쪽에서 왼쪽으로 계산하기 때문에 숫자인 11로 나온다
// console.log(typeof bo)//number
// console.log(true+null)//1
// console.log(false+null)//0
// console.log('비교연산자-----------------------------')
// let a = 10
// let b = 20
// let c = '20'
// let d = 0
// console.log (a,b,c)
// console.log(a==b)
// console.log(b===c)
// console.log(a!=b)
// console.log(b!==c)
// console.log(a>b)
// console.log(a<=b)
// console.log(!d)//0를 반전시키면 1 (true)
// console.log(!b)//기본적으로 숫자0이 아닌값은 1로 인식 반전시키면 0 (false)
// console.log('조건식------------------------------------------')
/* 
    if(날씨 == '비'){우산을 챙기}
    if(날씨 != '맑음'){우산을 챙기} //날씨는 나중에 변수로 처리하기 위해 ''문자표시 (x)
    if(점수 >= 60){자격증합격}
    if(점수 < 60){재시험}
*/
/* let weather = window.prompt ('오늘 날씨가 어뗘!')
if(weather == '비'){
    window.alert('우산챙기기')
} */
let a = true
let b = false
let c = 10
let d = 20
if(a==true){console.log('a는참')}/* o */
if(c>10){console.log('c는10초과')}/* x */
if(d<c){console.log('d는c보다크다')}/* x */
if(d<=20){console.log('d는20보다 작거나 같다')}/* o */
if(b!=true){console.log('b는 거짓')}/* o */
console.log (a==true)
console.log (c>10)
console.log (d>c)
console.log (d<=20)
console.log (b!=true)