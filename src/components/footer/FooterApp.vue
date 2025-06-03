<script setup lang="ts">
import ButtonApp from '@/components/ui-kit/ButtonApp.vue';
import IconAdd from '@/components/icons/IconAdd.vue';
import router from '@/router';

defineProps<{
  bugs: number;
  tasks: number;
}>();

</script>


<template>
  <div class="footer">
    <p class="informer">Задач: {{ tasks }} / Багов: {{ bugs }}</p>
    
    <ButtonApp text="Добавить задачу" styleType="accent" size="lg" @click="() => router.push('/add')" >
      <template #icon>
        <IconAdd />
      </template>
    </ButtonApp>

  </div>
</template>


<style scoped>
  .footer {
    padding-block: 57px 67px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 16px;
    margin-block-start: auto;
  }
</style>