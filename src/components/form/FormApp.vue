<script setup lang="ts">
import ButtonApp from '@/components/ui-kit/ButtonApp.vue'
import { useCounterStore } from '@/stores/counter'
import router from '@/router'
import { useRoute } from 'vue-router'
import IconRemove from '@/components/icons/IconRemove.vue'

const store = useCounterStore();
const { addTask, newTask, removeTask, saveTask } = store;
const route = useRoute();
const id = Number(route.params.id);

defineProps<{
  formType: 'add' | 'edit'
}>()

const handleAddAndRedirect = () => {
  addTask(newTask.title, newTask.isBug)
  router.push('/')
}

const handleSaveAndRedirect = (number: number) => {
  saveTask(number, newTask.title, newTask.isBug);
  router.push('/')
}

const removeTaskAndRedirect = (id: number) => {
  removeTask(id)
  router.push('/')
}
</script>

<template>
  <form class="add-form">
    <label class="add-form__field field" for="task">
      <span v-if="formType === 'add'" class="field__title">Название задачи</span>
      <input
        class="field__input"
        id="task"
        name="task"
        type="text"
        placeholder="Введите название"
        v-model="newTask.title"
      />
      <span v-if="formType === 'add'" class="field__caption"
        >Будет отображаться на главной странице</span
      >
    </label>
    <label class="add-form__checkbox checkbox" for="bag">
      <input class="checkbox__input" id="bag" name="bag" type="checkbox" v-model="newTask.isBug" />
      <span class="checkbox__box"></span>
      <span class="checkbox__caption">Является багом</span>
    </label>
  </form>

  <div class="footer">
    <ButtonApp
      class="footer__button"
      text="Вернуться"
      @click="router.back"
      styleType="primary"
      size="md"
    />

    <ButtonApp
      class="footer__button footer__button--remove"
      styleType="icon"
      size="sm"
      action="remove"
      @remove="removeTaskAndRedirect(id)"
      :id="id"
    >
      <template #icon><IconRemove /></template>
    </ButtonApp>

    <ButtonApp
      class="footer__button"
      v-if="formType === 'add'"
      text="Создать"
      action="add"
      @add="handleAddAndRedirect"
      styleType="accent"
      size="md"
    />
    <ButtonApp
      class="footer__button"
      v-else
      text="Сохранить"
      action="save"
      @save="handleSaveAndRedirect(id)"
      styleType="accent"
      size="md"
      :id="id"
    />
  </div>
</template>

<style scoped>
.add-form {
  padding-inline: 48px;
  margin-block-start: 66px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  inline-size: 100%;
}

.add-form__field {
  display: flex;
  flex-direction: column;
  gap: 4px;
  letter-spacing: -0.01em;
  font-size: 14px;
  line-height: 1.3;
  font-weight: 500;
}

.field__input {
  font: inherit;
  padding: 16.5px 20px;
  border: 1px solid rgba(227, 230, 239, 1);
  border-radius: 4px;
}

.field__input::placeholder {
  color: rgba(146, 153, 184, 1);
  font-weight: 400;
}

.field__caption {
  color: rgba(146, 153, 184, 1);
  font-size: 12px;
}

.add-form__checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
}

.checkbox__input {
  display: none;
}

.checkbox__box {
  width: 16px;
  height: 16px;
  border: 1px solid rgba(173, 180, 210, 1);
  border-radius: 4px;
}

.checkbox__input:checked + .checkbox__box {
  background-color: rgba(33, 162, 245, 1);
  border-color: rgba(33, 162, 245, 1);
  display: flex;
  justify-content: center;
  align-items: center;
}

.checkbox__input:checked + .checkbox__box:before {
  content: '';
  display: block;
  width: 8px;
  height: 6px;
  background-image: url('../../assets/check.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.footer {
  display: flex;
  justify-content: space-between;
  margin-block: auto 67px;
  inline-size: 100%;

  padding-inline: 48px;
}

.footer__button--remove {
  margin-inline: auto 8px;
  background-color: rgba(243, 245, 251, 1);
  border: 1px solid rgba(243, 245, 251, 1);
}
</style>
