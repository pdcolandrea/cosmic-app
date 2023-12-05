import { create } from 'zustand';
import type { PlanetType } from '../lib/data/planets';

interface LikeStore {
  likes: PlanetType['name'][];
  addLike: (name: PlanetType['name']) => void;
  removeAllLikes: () => void;
  toggleLike: (name: PlanetType['name']) => void;
}

export const useLikeStore = create<LikeStore>((set) => ({
  likes: [],
  addLike: (name: PlanetType['name']) =>
    set((state) => ({
      likes: [...state.likes, name],
    })),
  removeLike: (name: PlanetType['name']) =>
    set((state) => ({
      ...state,
      likes: state.likes.filter((like) => like !== name),
    })),
  removeAllLikes: () => set({ likes: [] }),
  toggleLike: (name: PlanetType['name']) =>
    set((state) => ({
      ...state,
      likes: state.likes.includes(name)
        ? state.likes.filter((like) => like !== name)
        : [...state.likes, name],
    })),
}));
