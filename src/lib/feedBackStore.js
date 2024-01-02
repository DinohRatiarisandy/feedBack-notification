import { writable } from "svelte/store";

function createFeedBackStore() {
  const { subscribe, update } = writable([
    {
      id: 1,
      rating: 10,
      text: "If a function is passed as the second argument, it will be called when the number of subscribers goes from zero to one (but not from one to two, etc).",
    },
    {
      id: 2,
      rating: 5,
      text: "update is a method that takes one argument which is a callback. The callback takes the existing store value as its argument and returns the new value to be set to the store.",
    },
    {
      id: 3,
      rating: 1,
      text: "Function that creates a store which has values that can be set from 'outside' components. It gets created as an object with additional set and update methods.",
    },
  ]);

  const addFeedBack = (newFeedBack) => {
    update((feedBacks) => [newFeedBack, ...feedBacks]);
  };

  const removeFeedBack = (id) => {
    update((feedBacks) => feedBacks.filter((f) => f.id !== id));
  };

  return {
    subscribe,
    addFeedBack,
    removeFeedBack,
  };
}

export const FeedBackStore = createFeedBackStore();
