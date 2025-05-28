<script setup lang="ts">
import FooterApp from '../components/footer/FooterApp.vue';
import TasksList from '../components/tasks/TasksList.vue';
import { useCounterStore } from '@/stores/counter';
import router from '@/router';
import { computed } from 'vue';

const { sortedData,  handleRemoveTask  } = useCounterStore();

const bugs = computed(() => sortedData.filter(task => task.isBug).length);
const tasks = computed(() => sortedData.filter(task => !task.isBug).length);

const navigateToAddTask = () => router.push('/add');

</script>

<template>
    <TasksList 
      :data="sortedData" 
      :onRemove="handleRemoveTask"
    />

    <FooterApp 
      :bugs="bugs" 
      :tasks="tasks" 
      @clickAdd="navigateToAddTask"
    />
</template>