<script setup lang="ts">
import ButtonApp from '@/components/ui-kit/ButtonApp.vue';
import IconEdit from '@/components/icons/IconEdit.vue';
import IconRemove from '@/components/icons/IconRemove.vue';

import { useCounterStore } from '@/stores/counter';

const store = useCounterStore();

const { removeTask } = store;

defineProps<{
  number: number,
  title: string
}>();

</script>

<template>
  <li class="tasks-list__item">
    <span class="tasks-list__item-id"># {{ number }}</span>
    {{ title }}
    <div class="buttons">

      <RouterLink :to="{ name: 'edit', params: { id: number } }"  class="button" >
        <IconEdit />
      </RouterLink>

      <ButtonApp styleType="icon" size="icon" action="remove" :id="number" @remove="removeTask(number)">
        <template #icon><IconRemove /></template>
      </ButtonApp>

    </div>
  </li>
</template>


<style>

  .tasks-list__item {
    display: flex;
    align-items: start;
    column-gap: 4px;
    padding: 16px 8px 19px;
    line-height: 1;
  }

  .tasks-list__item:not(:last-child) {
    border-bottom: 1px solid var(--color-border-primary);
  }

  .tasks-list__item-id {
    opacity: 0.4;
    font-weight: 700;
  }

  .tasks-list__item[data-bug = true] {
    color: #DF2424;
  }

  .buttons {
    margin-inline: auto 0;
    display: flex;
    column-gap: 4px;
  }

</style>