import Link from "next/link";

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export default function NavItem({ href, icon, label }: NavItemProps) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors"
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );
}
