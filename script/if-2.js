//1. 사용자 아이디 확인
let userId = 'admin'
if(userId == 'admin'){console.log(`${userId}어서옹셍용`)}
//2. 사용자 숫자를 입력 -> 짝수면 ->당신이 좋아하는 숫자는
let usernum = 888
if(usernum%2 == 0) 
    {console.log('당신이 좋아하는 숫자는 짝수입니다앙')}
//3. 나이 입력 -> 10살 이상이면 탑승가능 놀이기구
let age = 9
if(age >= 10){
    console.log('탑승가능')
}
//4. 24시간 기준 현재 시간 입력 ->
//12시 이후면 "오후 ?시 입니다."
let time = 13
if(time >= 12){console.log(`오후 ${time}시입니다.`)}
let print = window.confirm('인쇄할까요')
console.log(print)
if(print){
    window.print()
}//어짜피 참이 들어온다면 그냥 써도 됨