<script setup lang="ts">
import TaskItem from './TaskItem.vue';  

interface Task {
  number: number;
  title: string;
  isBug: boolean;
}

defineProps<{
  data: Task[],
  onRemove: (number: number) => void
}>();

</script>

<template>
  <ul class="tasks-list">

    <TaskItem 
      v-for="(task, id) in data" 
      :key="task.number" 
      :title="task.title" 
      :number="task.number" 
      :data-bug="task.isBug"
      :id="id"
      @remove="() => onRemove(task.number)"
    />
    
  </ul>
</template>


<style>

  .tasks-list {
    list-style: none;
    padding: 0;
    inline-size: 100%;
    padding-inline: 20px;
    padding-block-start: 86px;
    max-height: fit-content;
    overflow: scroll;
  }

</style>