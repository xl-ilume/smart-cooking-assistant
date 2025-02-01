import Link from "next/link";
import { Eye, Heart, MessageCircle, Star, NotebookText } from "lucide-react"; // 아이콘 추가

interface Activity {
  title: string;
  href: string;
  icon: JSX.Element;
}

export default function UserActivityRow() {
  const activities: Activity[] = [
    {
      title: "최근 본 레시피",
      href: "/recipes/recent",
      icon: <Eye size={24} />,
    },
    {
      title: "좋아요 누른 레시피",
      href: "/recipes/liked",
      icon: <Heart size={24} />,
    },
    {
      title: "내 질문",
      href: "/questions/mine",
      icon: <MessageCircle size={24} />,
    },
    {
      title: "내가 작성한 후기",
      href: "/reviews/mine",
      icon: <Star size={24} />,
    },
    { title: "요리 노트", href: "/notes", icon: <NotebookText size={24} /> },
  ];

  return (
    <div className="grid grid-cols-5 gap-2">
      {activities.map((activity) => (
        <Link
          key={activity.title}
          href={activity.href}
          className="flex flex-col items-center p-4 bg-white rounded-lg shadow"
        >
          {activity.icon}
          <h3 className="text-sm font-semibold mt-2">{activity.title}</h3>
        </Link>
      ))}
    </div>
  );
}
