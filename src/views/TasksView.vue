<script setup lang="ts">
import FooterApp from '@/components/footer/FooterApp.vue';
import TasksList from '@/components/tasks/TasksList.vue';
import { useCounterStore } from '@/stores/counter';

const store = useCounterStore();
const { tasks, counts } = store;

</script>

<template>
  <TasksList :data="tasks" />
  <FooterApp :bugs="counts.bugs" :tasks="counts.taskss" />
</template>
