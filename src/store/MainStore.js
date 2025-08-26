import { immer } from "zustand/middleware/immer";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

export const UseMainStore = create(
  devtools(
    // persist middleware to persist the state in local storage
    persist(
      // immer middleware to allow us to mutate the state directly
      immer((set) => ({})),
      {
        name: "storage",
        storage: createJSONStorage(() => sessionStorage),

        partialize: (state) =>
          Object.fromEntries(
            Object.entries(state).filter(([key]) => !["count"].includes(key))
          )
      }
    )
  )
);
