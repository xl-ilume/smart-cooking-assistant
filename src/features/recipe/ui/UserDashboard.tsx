import ProfileCard from "./UserProfileCard";
import UserActivityRow from "./UserActivityRow";

export default function UserDashboard() {
  return (
    <div className="max-w-[1024px] mx-auto space-y-6">
      <ProfileCard />
      <UserActivityRow />
    </div>
  );
}
