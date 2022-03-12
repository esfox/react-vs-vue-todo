<template>
  <h1>Vue Todo</h1>
  <br />
  <TodoInput @save="handleSaveTodo" />
  <br />
  <br />
  <table>
    <tbody>
      <TodoItem
        v-for="({ todo, isDone }, i) of todos"
        :key="`todo-${i}`"
        :content="todo"
        :is-done="isDone"
        @check="(isDone) => handleMarkDone(i, isDone)"
        @edit="(newTodo) => handleEdit(i, newTodo)"
        @delete="() => handleDelete(i)"
      />
    </tbody>
  </table>
  <pre>{{ JSON.stringify(todos, null, 2) }}</pre>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TodoInput from './TodoInput.vue';
import TodoItem from './TodoItem.vue';

const todos = ref<{ todo: string; isDone: boolean }[]>([]);

const handleSaveTodo = (todo: string) =>
  todos.value.push({ todo, isDone: false });

const handleMarkDone = (index: number, isDone: boolean) => {
  todos.value[index].isDone = isDone;
};

const handleEdit = (index: number, newTodo: string) => {
  todos.value[index].todo = newTodo;
};

const handleDelete = (index: number) => {
  todos.value.splice(index, 1);
};
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  place-items: center;
}

h1 {
  text-align: center;
}

h3 {
  display: inline;
}

label {
  margin: 0.5rem;
}
</style>
