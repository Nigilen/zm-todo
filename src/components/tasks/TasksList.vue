<script setup lang="ts">
import TaskItem from './TaskItem.vue';  


interface Task {
  number: number;
  title: string;
  isBug: boolean;
}

defineProps<{
  data: Task[]
}>();

</script>

<template>
  <TransitionGroup class="tasks-list" name="list" tag="ul">
    <TaskItem 
      v-for="(task) in data" 
      :key="task.number" 
      :title="task.title" 
      :number="task.number" 
      :data-bug="task.isBug"
    />
  </TransitionGroup>
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

  .list-move, /* применять переход к движущимся элементам */
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }

  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  /* убедитесь, что удаляющиеся элементы выведены из потока, чтобы 
  анимации перемещения могли быть рассчитаны правильно. */
  .list-leave-active {
    position: absolute;
  }

</style>