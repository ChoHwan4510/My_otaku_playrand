<template>
    <section id="main">
        <div class="ani-word-quiz-container">
            <div class="quiz-wrap">
                <div class="quiz-header">
                    OTAKU TEST
                </div>
                <div class="quiz-text" id="quizText" data-val="새벽의 연화">
                    당신의 씹덕력은 몇점일까요
                </div>      

                <input type="text" class="typing-insert" id="typingInsert" autocomplete="off"/> 

                <div class="time-and-cost">
                    <div class="time">
                        남은시간: <span id="timeCount">{{ timeeCount }}</span>초
                    </div>
                    <div class="cost">
                        획득점수: <span id="score">0</span>점
                    </div>
                </div>
                <button type="button" class="game-start-btn" :class="gameActive ? 'active' : '' " @click="btnChange();">
                    {{ gameActive ? "게임중" : "게임시작" }}
                </button>
            </div>
        </div>
    </section>
</template>
<script setup>
    const gameTime = 10;

    const quizArray = ref(null);
    const gameActive = ref(false);
    const isGame = ref(false);
    const time = ref(10);

    const btnChange = () => {
        gameActive.value = true;
    }

    const run = () => {
        isGame.value = true;
        time.value = gameTime;
        
    }

</script>