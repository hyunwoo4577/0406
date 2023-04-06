// let id = 'admin'
// let pw = '1234'
// if(id=='admin' || pw=='1234'){
//     console.log('관리자 로그인 성공ㅋ')}
// else{
//     console.log('관리자 로그인 실패ㅋ')
// }
//------------------------------------------------------
//1~20 사이 숫자를 입력받고 해당 숫자가 10보다 작다면 '10이하입니다', 아니라면 '11이상입니다'를 출력하세요
let num = Number(window.prompt('1~20사이 숫자를 입력하세요'))
if(num <= 10 && num>0) {
    console.log('10 이하입니다')
    
}
else(num >0 && num<20)
    console.log('10 이상입니다')
//---------------------------------------------------------------
let a = 5
if(a > 10){
    console.log('a>10')
}else if (a == 10){
    console.log('a==10')
}else if (a < 9){
    console.log('a<9')
}
console.log('if종료')//else if는 연달아 쓸 수 있음
// 1.a==10
// 2.a : false
// 3.true or false 23줄에서 a가 10이 아니라면 -> 식을 모두 읽었다면 if종료
console.log('---------------------------------------------')
let number = 12
if(number > 0 && number < 21){//1~20
    if(number < 11)
    {console.log('10이하')
    }else{
        console.log('10이상')
    }
    console.log('1단 if 종료위치')//ex)12라면 1단에서 종료
}else{
    console.log('error')//22라면 'error' 'if종료'
}
// console.log('if종료')
// console.log('---------------------------------------------')
let money1 = money1(window.prompt('0~10000원 사이의 값을 입력하세요'))
let money = 0
if(money <= 10000 && num >= 0){
    if(num = 0)
    {console.log('그지쉑')
    }else{
    console.log('부자쉑')
    }
    console.log('10000원이하 0원 이상')
}else{
    console.log('10000원초과 0원 미만')
}
