import { useProtectedRedirect } from "@/shared/utils/checkLoginAndRedirect";
import Link from "next/link";

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  protected?: boolean;
}

export default function NavItem({
  href,
  icon,
  label,
  protected: isProtected,
}: NavItemProps) {
  const handleRedirect = useProtectedRedirect(href);
  return isProtected ? (
    <button
      onClick={handleRedirect}
      className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors"
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </button>
  ) : (
    <Link
      href={href}
      className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors"
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );
}
