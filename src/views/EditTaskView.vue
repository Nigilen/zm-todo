<script setup lang="ts">
import FormApp from '@/components/form/FormApp.vue';
import { onMounted } from 'vue';
import { useCounterStore } from '@/stores/counter'; 
import { useRoute } from 'vue-router';

const { data, newTask } = useCounterStore();
const route = useRoute();
const id = Number(route.params.id);

onMounted(() => {
  newTask.isBug = data[id].isBug;
  newTask.title = data[id].title;
});

</script>

<template>
  
  <FormApp type="edit" />

</template>
