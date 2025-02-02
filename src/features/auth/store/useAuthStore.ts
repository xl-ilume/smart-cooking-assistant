import { create } from "zustand";
import { auth } from "@/shared/firebase";
import { onAuthStateChanged, User } from "firebase/auth";

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

// Firebase 인증 상태 변경 감지
onAuthStateChanged(auth, (user) => {
  useAuthStore.getState().setUser(user);
});
