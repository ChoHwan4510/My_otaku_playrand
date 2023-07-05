<template>
    <section class="main-container">
        <div class="main-wrapper">
            <h1 class="main-text">히나사랑해</h1>
            <div class="main-items-box">
                <div class="items" @click="openModal">
                    <h3>Nuxt js Study</h3>
                    <div>Nuxt js 관련 공부소스</div>
                </div>
                <div class="items" @click="openModal">
                    <h3>Toy Project</h3>
                    <div>심심해서 만들어본것들</div>
                </div>
            </div>
        </div>
    </section>

    <Transition name="fade">
        <ModalDefault v-if="showModal" @closeModal="closeModal">
            <template #header>Header</template>
            <template #body>body</template>
            <template #footer>footer</template>
        </ModalDefault>
    </Transition>
</template>

<script setup>
    const showModal = ref(false);

    const openModal = () => {
        showModal.value = true;
    }
    const closeModal = () => {
        showModal.value = false;
    }
</script>