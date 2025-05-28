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
const navigateToEditTask = (id: number) => router.push(`/edit/${id}`);

</script>

<template>
    <TasksList 
      :data="sortedData" 
      :onEdit="navigateToEditTask" 
      :onRemove="handleRemoveTask"
    />

    <FooterApp 
      :bugs="bugs" 
      :tasks="tasks" 
      @clickAdd="navigateToAddTask"
    />
</template>