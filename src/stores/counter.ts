import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'

interface Task {
  number: number
  title: string
  isBug: boolean
}

interface NewTask {
  title: string
  isBug: boolean
}

export const useCounterStore = defineStore('counter', () => {
  const tasks = reactive<Task[]>([
    {
      number: 1,
      title: 'Тестовая задача',
      isBug: false,
    },
    {
      number: 2,
      title: 'Вторая задача',
      isBug: false,
    },
    {
      number: 3,
      title: 'Исправить баг',
      isBug: true,
    },
  ]);

  const newTask = reactive<NewTask>({
    title: '',
    isBug: false,
  });

  const counts = computed(() => {
    let bugs: number = 0;
    let taskss: number = 0;

    for (const task of tasks) {
      if (task.isBug) bugs++
      else taskss++
    };

    return { bugs, taskss };
  });

  // const sortedTasks = computed(() => {
  //   return tasks.sort((a, b) => Number(b.isBug) - Number(a.isBug));
  // });

  const sorted = () => {
    tasks.sort((a, b) => Number(b.isBug) - Number(a.isBug));
  }

  // sorted();

  const removeTask = (number: number) => {
    const index = tasks.findIndex((task) => task.number === number);
    if (index !== -1) {
      tasks.splice(index, 1);
      updateTaskNumbers();
      sorted();
    };
  };

  const updateTaskNumbers = () => {
    tasks.forEach((task, index) => {
      task.number = index + 1;
    });
  };

  const addTask = (title: string, isBug: boolean) => {
    if (!title.trim()) return;

    const nextNumber = tasks.length > 0 
      ? tasks[tasks.length - 1].number + 1 
      : 1;

    tasks.push({
      number: nextNumber,
      title: title.trim(),
      isBug,
    });

    resetNewTask();
  };

  const saveTask = (number: number, title: string, isBug: boolean) => {
    const task = tasks.find((task) => task.number === number);
    if (task) {
      task.title = title;
      task.isBug = isBug;
    }
  };

  const resetNewTask = () => {
    newTask.title = '';
    newTask.isBug = false;
  };

  return {
    tasks,
    counts,
    // sortedTasks,
    removeTask,
    saveTask,
    addTask,
    newTask,
    resetNewTask
  }
})
