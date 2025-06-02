<script setup lang="ts">
import FormApp from '@/components/form/FormApp.vue';
import { onMounted } from 'vue';
import { useCounterStore } from '@/stores/counter'; 
import { useRoute } from 'vue-router';

const store = useCounterStore();
const route = useRoute();

const { tasks, newTask } = store;

const id = Number(route.params.id) - 1;

onMounted(() => {
  newTask.isBug = tasks[id].isBug;
  newTask.title = tasks[id].title;
});

</script>

<template>
  
  <FormApp formType="edit" />

</template>
