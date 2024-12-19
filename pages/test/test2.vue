<template>
    <h1>숫자를 ,로 구분지어서 입력해주세요</h1>
    <input type="text" style="width: 100px; border:2px solid #000;font-size:20px;" v-model="listText"> <br/><br/>
    <button @click="solution1" style="width: 200px; color: #fff; background-color: #000; font-size:30px;">문제2번 실행</button>
    <div style="font-size: 30px;">{{ resultText }}</div>
</template>
<script setup>
const listText = ref("");
const resultText = ref("");

//최소공배수 함수
const leastCmmonMultiple = (a, b) => {
    let lcm = 1;
    while(true){
        if((lcm % a == 0) && (lcm % b == 0)){
            break;
        }
        lcm++;
    }
    return lcm;
}
//조합 함수
const combination = (list) => {
    let result = []
    for(let i =0; i<list.length; i++){
        for(let j = i+1; j<list.length; j++){
            result.push([list[i],list[j]]);
        }
    }
    return result;
}
const solution1 = () => {
    let list = listText.value.split(',').map(Number);
    console.log(list);
    const combiArr = combination(list);

    const ta = combiArr.reduce((acc,iter)=>{
        const lcmValue = leastCmmonMultiple(iter[0],iter[1]);
        acc.text+=`{${iter[0]} | ${iter[1]}} -> ${lcmValue} + `;
        acc.total+=lcmValue;
        return acc;
    },{text:"", total:0});
    ta.text = ta.text.slice(0,-2);
    const result = `( ${ta.text} ) = ${ta.total}`;

    resultText.value = result;
}



</script>