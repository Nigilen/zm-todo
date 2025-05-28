<script setup lang="ts">
import ButtonApp from '../ui-kit/ButtonApp.vue';
import IconAdd from '../icons/IconAdd.vue';

defineProps<{
  bugs: number;
  tasks: number;
}>();

defineEmits<{
  clickAdd: () => void;
}>();

</script>

<template>
  <footer>
    <p class="informer">Задач: {{ tasks }} / Багов: {{ bugs }}</p>
    <ButtonApp text="Добавить задачу" type="accent" :onClick="() => $emit('clickAdd')">
      <template #icon>
        <IconAdd />
      </template>
    </ButtonApp>

  </footer>
</template>


<style>
  footer {
    padding-block: 57px 67px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 16px;
    margin-block-start: auto;
  }
</style>