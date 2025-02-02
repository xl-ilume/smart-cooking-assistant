import { useRouter } from "next/navigation";
import { useAuthStore } from "@/features/auth/store/useAuthStore";

export function useProtectedRedirect(targetPath: string) {
  const router = useRouter();
  const { user, isLoading } = useAuthStore();

  return () => {
    if (isLoading) {
      return;
    }
    if (!user) {
      router.push("/auth/login");
    } else {
      router.push(targetPath);
    }
  };
}
