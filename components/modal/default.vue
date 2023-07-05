<template>
    <section class="default-modal-container">
        <div class="default-modal-background" @click="closeModal"></div>
        <div class="default-modal-wrapper">
            <div class="modal-header">
                <slot name="header" />
            </div>
            <div class="modal-body">
                <slot name="body" />
            </div>
            <div class="modal-footer">
                <slot name="footer" />
            </div>
        </div>
    </section>
</template>
<script setup>
    const emit = defineEmits(['closeModal']);
    const closeModal = () => {
        emit('closeModal');
    }
</script>