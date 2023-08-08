<template>
    <section class="main-container">
        <div class="main-wrapper">
            <h1 class="main-text">히나사랑해</h1>
            <div class="main-items-box">
                <div class="items" @click="openModal(1)">
                    <h3>Nuxt js Study</h3>
                    <div>Nuxt js 관련 공부소스</div>
                </div>
                <div class="items" @click="openModal(2)">
                    <h3>Toy Project</h3>
                    <div>심심해서 만들어본것들</div>
                </div>
            </div>
        </div>
    </section>

    <Transition name="fade">
        <ModalDefault v-if="showModal" @closeModal="closeModal">
            <template #header>
                <div></div>
                <div class="modal-title-name">
                    <h1>Nuxt js Study</h1>
                </div>
                <div class="close-btn" @click="closeModal">
                    <i class="fi fi-br-cross"></i>
                </div>
            </template>
            <template #body>
                <div class="modal-items-box">
                    <div class="items">
                        <NuxtLink to="/pinia/pratice">Pinia 관련</NuxtLink>
                    </div>
                    <div class="items">Vue 3</div>
                </div>
            </template>
        </ModalDefault>     
    </Transition>
    <Transition name="fade">
        <ModalDefault v-if="showProejctModal" @closeModal="closeModal">
            <template #header>
                <div></div>
                <div class="modal-title-name">
                    <h1>Nuxt js Project</h1>
                </div>
                <div class="close-btn" @click="closeModal">
                    <i class="fi fi-br-cross"></i>
                </div>
            </template>
            <template #body>
                <div class="modal-items-box">
                    <div class="items">
                        <NuxtLink to="/project/ani_word_quiz">애니메이션 퀴즈</NuxtLink>
                    </div>
                </div>
            </template>
        </ModalDefault>   
    </Transition>
</template>

<script setup>
    const showModal = ref(false);
    const showProejctModal = ref(false);

    const openModal = (type) => {
        console.log(type);
        switch(type){
            case 1 : showModal.value = true;break;
            case 2 : showProejctModal.value =true;break;
        }
        
    }
    const closeModal = () => {
        showModal.value = false;
        showProejctModal.value =false;
    }
</script>