/* let num = number(window.prompt('숫자입력'))
if(num%2){
    console.log('홀수')
}else{
    console.log('짝수')
} */
//admin : 관리자 아이디
//아이디 입력받기
//admin -> 관리자님 어서오세요
//아니면 -> 관리자페이지 접근불가
let userId = window.prompt('아이디를 입력하세요')
if(userId != 'admin'){console.log('접근불가')}
if(userId == 'admin'){console.log('관리자님 어서오세요')}