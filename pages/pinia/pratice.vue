<template>
    <div>
        <input type="text" v-model="inputTodoList"/>
    </div>
    <button type="button" @click="setTodoListValues">Add todoList</button>
    <p v-for="(item, index) in todoList" :key="index">
        {{ item }}
    </p>
</template>
<script setup>
    const {useTodoListStore} = usePiniaPractice();
    const todoList = computed(() => useTodoListStore().getTodoList);
    const inputTodoList = ref(null);

    const setTodoListValues = () => {
        useTodoListStore().setTodoList(inputTodoList.value);
    }
</script>