import { immer } from "zustand/middleware/immer";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { getPosts } from "@/data/Posts";

export const UseMainStore = create(
  devtools(
    // persist middleware to persist the state in local storage
    // persist(
    // immer middleware to allow us to mutate the state directly
    immer((set) => ({
      loading: false,
      error: null,
      posts: [],

      fetchPosts: async () => {
        set({ loading: true, error: null });
        try {
          const data = await getPosts();
          set({ posts: data, loading: false });
        } catch (err) {
          set({ error: err.message, loading: false });
        }
      }
    }))

    // {
    //   name: "storage",
    //   storage: createJSONStorage(() => sessionStorage),

    //   partialize: (state) =>
    //     Object.fromEntries(
    //       Object.entries(state).filter(([key]) => !["posts"].includes(key))
    //     )
    // }
    // )
  )
);
