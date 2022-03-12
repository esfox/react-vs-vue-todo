<template>
  <input v-model="todo" type="text" />
  <button @click="handleSave">Save</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const todo = ref('');
const emit = defineEmits(['save']);
const handleSave = () => {
  if (!todo.value) return;
  emit('save', todo.value);
  todo.value = '';
};
</script>
