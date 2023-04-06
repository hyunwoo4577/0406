/* 나의 평균값을 정하고 아래 요구사항에 맞게 출력해주세요
100~90이면 A학점, 
89~80이면 B학점, 
79~70이면 C학점, 
69~60이면 D학점, 
59 이하이면 F학점이 나오게해주세요. */
let average = 85
if(average >= 90 && average <= 100){
    console.log('A')
}
if(average >= 80 && average <= 89){
    console.log('B')
}
if(average >= 70 && average <= 79){
    console.log('c')
}
if(average >= 60 && average <= 69){
    console.log('D')
}
if(average <= 59){
    console.log('F')
}