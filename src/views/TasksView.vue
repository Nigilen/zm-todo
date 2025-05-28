<script setup lang="ts">
import FooterApp from '@/components/footer/FooterApp.vue';
import TasksList from '@/components/tasks/TasksList.vue';
import { useCounterStore } from '@/stores/counter';
import router from '@/router';
import { computed } from 'vue';

const store = useCounterStore();
const { sortedData,  handleRemoveTask  } = store;


// Двойная фильтрация массива sortedData
// Если sortedData большой (например, 1000+ задач), это две лишние операции, хотя можно посчитать за один проход.

// const bugs = computed(() => sortedData?.filter(task => task?.isBug).length || 0);
// const tasks = computed(() => sortedData?.filter(task => !task?.isBug).length || 0);

// Лучший вариант решения — reduce или computed с одним проходом. 
// Это даст прирост производительности на больших массивах

const counts = computed(() => {
  let bugs: number = 0;
  let tasks: number = 0;

  for (const task of sortedData) {
    if(task.isBug) bugs++ 
    else tasks++;
  }

  return { bugs, tasks };
});


const navigateToAddTask = () => router.push('/add');

</script>

<template>
    <TasksList 
      :data="sortedData" 
      :onRemove="handleRemoveTask"
    />

    <FooterApp 
      :bugs="counts.bugs" 
      :tasks="counts.tasks" 
      @clickAdd="navigateToAddTask"
    />
</template>