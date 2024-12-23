<template>
    <div>
      <h2>Upload File</h2>
      <input type="file" @change="onFileSelected" />
      <button @click="connectSocket">Connect to Server</button>
      <p v-if="progress > 0">Upload Progress: {{ progress }}%</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { socketService } from '../services/websocket';
  
  export default defineComponent({
    name: 'FileUploader',
    setup() {
      const progress = ref(0);
  
      const connectSocket = () => {
        socketService.connect('http://localhost:3001');
      };
  
      const onFileSelected = (event: Event) => {
        const input = event.target as HTMLInputElement;
        const file = input?.files?.[0];
  
        if (file) {
          uploadFile(file);
        }
      };
  
      const uploadFile = (file: File) => {
        const reader = new FileReader();
  
        reader.onload = () => {
          const chunk = reader.result;
          socketService.emit('file-upload', {
            filename: file.name,
            data: chunk,
          });
  
          // Имитация прогресса загрузки
          progress.value = 100; // В реальном проекте это нужно обновлять по ответам от сервера
        };
  
        reader.onerror = () => {
          console.error('File reading error');
        };
  
        reader.readAsArrayBuffer(file);
      };
  
      return {
        progress,
        connectSocket,
        onFileSelected,
      };
    },
  });
  </script>
  
  <style scoped>
  h2 {
    color: #333;
  }
  
  input {
    margin: 10px 0;
  }
  </style>
  