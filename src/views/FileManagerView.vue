<template>
    <div>
      <h1>File Manager</h1>
      <FileUploader />
    </div>
  </template>
  
  <script lang="ts">
  import FileUploader from '../components/FileUploader.vue';
  
  export default {
    components: {
      FileUploader,
    },
  };
  </script>
  