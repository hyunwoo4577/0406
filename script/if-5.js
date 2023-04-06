let user_Id = 'admin'
let user_Pw = '1234'
// if(user_Id == 'admin'){
//     if(user_Pw != '1234'){
//         console.log('비밀번호 오류')
//     }
//     else{
//         console.log('로그인 성공')
//     }
// }else{user_Id != 'admin'
//     console.log('아이디 오류')}
if(user_Id == 'admin' && user_Pw == '1234'){
    console.log('로그인 성공')
}
else {//아이디 오류, 비밀번호 오류
    if(user_Id != 'admin'){
        console.log('아이디 오류')
    }
    else{
        console.log('비밀번호 오류')
    }
}
// let value="왼쪽"
// if(value=="오른쪽"){console.log('오른쪽버튼을 눌렀군요')}
// else if(value=="왼쪽"){console.log('왼쪽버튼을 눌렀군요')}
// else if(value=="가운데"){console.log('가운데버튼을 눌렀군요')}
// else {console.log('확인할 수 없습니다.')}
let value="가"
if(value=='왼쪽'||value=="가운데"||value=='오른쪽'){console.log(`${value}버튼을 눌렀군요`)}
else {console.log('확인할수없습니다')}