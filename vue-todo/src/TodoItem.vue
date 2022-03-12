<template>
  <tr>
    <td>
      <input
        v-if="!isEditing"
        :id="randomId"
        :checked="isDone"
        type="checkbox"
        @change="handleCheck"
      />
    </td>
    <td>
      <input v-if="isEditing" v-model="todo" type="text" />
      <label v-else :for="randomId" role="button">
        <s v-if="props.isDone">
          <h3>
            {{ content }}
          </h3>
        </s>
        <h3 v-else>
          {{ content }}
        </h3>
      </label>
    </td>
    <td>
      <button v-if="isEditing" @click="handleSave">💾</button>
      <button v-else @click="handleEdit">✏️</button>
    </td>
    <td>
      <button @click="emit('delete')">❌</button>
    </td>
  </tr>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps({
  content: {
    type: String,
    default: '',
  },
  isDone: {
    type: Boolean,
    default: false,
  },
});

const isEditing = ref(false);
const todo = ref(props.content);

const randomId = Math.floor((1 + Math.random()) * 0x10000)
  .toString(16)
  .substring(1);

const emit = defineEmits(['check', 'edit', 'delete']);

const handleCheck = (event: Event) =>
  emit('check', (event.target as HTMLInputElement).checked);

const handleEdit = () => (isEditing.value = true);

const handleSave = () => {
  isEditing.value = false;
  emit('edit', todo.value);
};
</script>
