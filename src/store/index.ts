import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({
    isConnected: false, // Состояние WebSocket
  }),
  actions: {
    setConnectionStatus(status: boolean) {
      this.isConnected = status;
    },
  },
});
