<template>
    <h1>소수를 입력해주세요</h1>
    <input type="number" style="width: 100px; border:2px solid #000;font-size:20px;" v-model="numberText"> <br/><br/>
    <button @click="solution" style="width: 200px; color: #fff; background-color: #000; font-size:30px;">문제2번 실행</button>
    <div style="font-size: 30px;">{{ resultText }}</div>
</template>
<script setup>
    const numberText = ref(0);
    const resultText = ref("");
    //소수구하는함수
const getDecimal = (val) => {
    if(val == 1){
        return false;
    }
    for(let i=2; i<val; i++){
        if(val % i == 0) return false;
    }
    return val;
}

//소수의합구하는 함수
const totalDecimal = (val) => {
    let decimalArr = [];
    for(let i=1; i<=val; i++){
        if(Number.isInteger(getDecimal(i))){
            decimalArr.push(getDecimal(i));
        }
    }
    return decimalArr.reduce((acc,iter) => acc+iter ,0);
}

const solution = () => {
    let val = numberText.value;
    const resultText2 = `a : ${val} -> ${totalDecimal(val)}`;
    resultText.value = resultText2;
    return resultText2;
}
</script>