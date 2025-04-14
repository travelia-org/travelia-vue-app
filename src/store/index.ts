import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    name: "Travelia Admin",
  }),
  actions: {
    setName(newName: string) {
      this.name = newName;
    },
  },
});
