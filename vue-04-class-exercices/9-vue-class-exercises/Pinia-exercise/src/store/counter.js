import { defineStore } from "pinia";

export const piniaCounter = defineStore("tasks", {
  state: () => ({
    count: 0,
  }),
  actions: {
    counterResta() {
      return (this.count -= 1);
    },
    counterSuma() {
      return (this.count += 1);
    },
  },
});
