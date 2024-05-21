<template>
    <section id="main">
        <div class="ani-word-quiz-container">
            <div class="quiz-wrap">
                <div class="quiz-header">
                    OTAKU TEST
                </div>
                <div class="quiz-text">
                    {{ gameActive ? quizeText : "당신의 씹덕력은 몇점일까요" }}
                </div>      

                <input type="text" class="typing-insert" autocomplete="off" v-model="quizInsert" ref="insertAni" @keydown="answerInput"/> 

                <div class="time-and-cost">
                    <div class="time">
                        남은시간: <span>{{ timeCount }}</span>초
                    </div>
                    <div class="cost">
                        획득점수: <span>{{ scorVal }}</span>점
                    </div>
                </div>
                <button 
                    type="button" 
                    class="game-start-btn" 
                    :class="gameActive ? 'active' : '' " 
                    @click="gameButtonActive ? run() : ''">
                    {{ gameActive ? "게임중" : "게임시작" }}
                </button>
            </div>
        </div>
    </section>
</template>
<script setup>
    let timeInterval;
    let aniIndex = 0;
    const gameTime = 10;
    const insertAni = ref(null); //애니 입력창 오브젝트

    const quizArray = ref(
        [
            {question : "ㅅㅂㅇ ㅇㅎ", answer : "새벽의 연화"},
            {question : "ㅈㄱㅇ ㅅㄴ", answer : "작안의 샤나"},
            {question : "ㄱㅇㅁ ㅇㄷㅅ! ㅇㅁㄹㅉ", answer : "건어물 여동생! 우마루짱"},
            {question : "ㄴㅅㅋㅇ", answer : "니세코이"},
            {question : "ㄹㄱ ㅎㄹㅇㅈ", answer : "로그 호라이즌"},
            {question : "ㄹㅈ ㅁㅇㄷ", answer : "로젠 메이든"},
            {question : "ㄱㄴㅂㅇ ㅅㅇ", answer : "가난뱅이 신이"},
            {question : "ㅊㅇㄷㅍ ㄱㄹㄹㄱ", answer : "천원돌파 그렌라간"},
            {question : "ㅁㅂㅅㄴ ㅁㄷㅋ ㅁㄱㅋ", answer : "마법소녀 마도카 마기카"},
            {question : "ㅇㄹㄴ ㅅㅌㅎㅅㄴㄷ", answer : "인류는 쇠퇴했습니다"},
            {question : "ㄴㅇㄱ ㄷㄱㄹ", answer : "너에게 닿기를"},
            {question : "ㄷㅂㅊㅅ", answer : "달빛천사"},
            {question : "ㅅㄷㅇㅌㅇㄹㅇ", answer : "소드아트온라인"},
            {question : "ㅇㅅㄱ ㄹㅂㅇㅈ", answer : "이세계 리뷰어즈"},
            {question : "ㄱㄱㅅㄴㄴ ㅅㅊㅂㅈ ㅇㅇ", answer : "기교소녀는 상처받지 않아"},
            {question : "ㄷㅋㄱㅇ", answer : "도쿄구울"},
            {question : "ㅇ ㅁㅈ ㅅㄱㅇ ㅊㅂㅇ", answer : "이 멋진 세계에 축복을"},
            {question : "4ㅇㅇ ㄴㅇ ㄱㅈㅁ", answer : "4월은 너의 거짓말"},
            {question : "ㄴㅊㅁ ㅇㅇㅈ", answer : "나츠메 우인장"},
            {question : "ㅋㅅㅅㅅㅋㅅ", answer : "키스시스키스"},
            {question : "ㄱㅁㅇ ㅋㄴ", answer : "귀멸의 칼날"},
            {question : "ㅇㅇ", answer : "아인"},
            {question : "ㅂㅍ ㅇㅅ ㅅㄱㄷ", answer : "방패 용사 성공담"},
            {question : "ㄱㅂ", answer : "귀부"},
            {question : "ㄴ ㄴㅅㅇ ㅅㅌㅈㄱ ㅎㅇ ㄹㅂ ㅋㅁㄷㄹ ㅈㄹㅇㄹ ㅂㅎㅎㄱ ㅇㄷ", answer : "내 뇌속의 선택지가 학원 러브 코미디를 전력으로 방해하고 있다"},
            {question : "ㅅㅌㄹㅇㅋ ㄷ ㅂㄹㄷ", answer : "스트라이크 더 블러드"},
            {question : "ㄴㄱㅇ ㄴㄹㅇㅍ", answer : "노게임 노라이프"},
            {question : "ㅇㄱㅂㄷ", answer : "야근병동"},
            {question : "ㄴㅅㅋㅇ", answer : "니세코이"},
            {question : "ㅋㄹㅋ", answer : "킬라킬"},
        ]
    ); //자음퀴즈 정렬
    const gameActive = ref(false); //게임실행 or 종료
    const gameButtonActive = ref(true); //실행버튼 활성화 or 비활성화
    const timeCount = ref(0); //카운트다운
    const scorVal = ref(0); //점수
    const quizInsert = ref(""); //정답입력
    const quizeText = ref(""); //자음
    const answerText = ref(""); //정답
    
    //카운트다운
    const countDown = () => {
        timeCount.value > 1 ? timeCount.value-- : gameEnd();
    }
    //게임종료
    const gameEnd = () => {
        clearInterval(timeInterval);
        gameActive.value = false;
        timeCount.value = 0;
        gameButtonActive.value = true;
        //문제 초기화
        for(let items of quizArray.value){
            items.isCheck = false;
        }
        alert("게임종료");
    }

    //퀴즈생성
    const makeQuize = () => {
        for(let i=0; i<5; i++) {
            aniIndex = Math.floor(Math.random() * quizArray.value.length);
            if(quizArray.value[aniIndex].isCheck == false)  break;
        }
        quizeText.value = quizArray.value[aniIndex].question;
        answerText.value = quizArray.value[aniIndex].answer;
    }

    //정답입력
    const answerInput = (e) => {
        if(gameActive.value && e.key == "Enter"){
            if(answerText.value === quizInsert.value){
                scorVal.value++;
                quizInsert.value = "";
                timeCount.value = gameTime;
                quizArray.value[aniIndex].isCheck = true;
                if(scorVal.value == quizArray.value.length){
                    alert("모든 문제를 맞추셨습니다!");
                    gameEnd();
                    return ;
                }
                makeQuize();
            }
        }
    }

    //게임실행
    const run = () => {
        gameActive.value = true;
        gameButtonActive.value = false;
        timeCount.value = gameTime;
        scorVal.value = 0;
        quizInsert.value = "";
        insertAni.value.focus();
        timeInterval = setInterval(countDown,1000);
        makeQuize();
    }

</script>