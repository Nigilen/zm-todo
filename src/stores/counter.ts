import { defineStore } from 'pinia'
import { computed, reactive } from 'vue';

export const useCounterStore = defineStore('counter', () => {

  const data = reactive([
    {
      number: 1,
      title: 'Тестовая задача',
      isBug: false
    },
    {
      number: 2,
      title: 'Вторая задача',
      isBug: false
    },
    {
      number: 3,
      title: 'Исправить баг',
      isBug: true
    }
  ]);

  const newTask = reactive({
    title: '',
    isBug: false
  });

  const sorting = () => data?.sort((a, b) => Number(b.isBug) - Number(a.isBug));

  const sortedData = computed(() => sorting());


  const handleRemoveTask = (id: number) => {
    sortedData?.value.splice(data?.findIndex(task => task.number === id), 1);
    sorting();
  }

  const handleAddTask = (title: string, isBug: boolean) => {
    data?.push({
      number: data.length + 1,
      title: title,
      isBug: isBug
    });
    sorting();
  }

  return { 
    data, 
    sorting,
    sortedData, 
    handleRemoveTask, 
    handleAddTask,
    newTask
  }
})
