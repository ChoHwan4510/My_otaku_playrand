<template>
    <button @click="init" style="width: 200px; color: #fff; background-color: #000; font-size:30px;">문제1번 실행</button>
    <div>======TEST======</div>
    <pre>{{testText}}</pre>
    <div> A :{{answerText}}</div>
    <div> B :{{answerText2}}</div>
    <div> C :{{answerText3}}</div>
</template>
<script setup>
const testText = ref("");
const answerText = ref(""); //정답
const answerText2 = ref(""); //정답
const answerText3 = ref(""); //정답

//문제 생성
const createTest = ()=>{
    let list = [];
    for(let i =0;i<10;i++){
        let answerNumber = Math.floor(Math.random() * (5-1)+1);
        let createScore = Math.floor(Math.random() * 100);
        list[i] = {answer: answerNumber, score : createScore}
    }
    return list;
}

//정답중 가장 높은 값구하는함수
const getTopScore = (tester, test) => {
    if( !Array.isArray(test) || !Array.isArray(tester)){
        return false;
    }
    let maxScore = 0;
    const correctAnswer =  test.filter((value, index) => value.answer == tester[index]);
    const socreList = Object.values(correctAnswer).map((value) => value.score);
    
    if(socreList.length > 0){
        maxScore = Math.max(...socreList);
    }
    return maxScore;
}

//수험자 답지 생성함수
const createTesterAnswer = (number, test) => {
    let answerList = [];
    for(let i =0; i<test.length; i++){
        answerList[i] = number;
    }
    return answerList;
}

const init = () => {
    const test = createTest();
    const testerA = createTesterAnswer(1,test);
    const testerB = createTesterAnswer(2,test);
    const testerC = createTesterAnswer(3,test);
    console.log(" =========TEST========");
    console.log(test);
    console.log(`A : ${getTopScore(testerA,test)}`);
    console.log(`B : ${getTopScore(testerB,test)}`);
    console.log(`C : ${getTopScore(testerC,test)}`);

    testText.value = test.map(item => JSON.stringify(item)).join(',\n');
    answerText.value = getTopScore(testerA,test);
    answerText2.value = getTopScore(testerB,test);
    answerText3.value = getTopScore(testerC,test);
}

</script>
