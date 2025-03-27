interface DashboardHeaderProps {
  userName: string;
}

export const DashboardHeader = ({ userName }: DashboardHeaderProps) => {
  return (
    <header className="py-4">
      <h1 className="font-jakarta font-extrabold text-[36px] text-text-primary mb-2">
        Dashboard
      </h1>
      <p className="font-jakarta text-base text-text-secondary">
        Welcome back, {userName}
      </p>
    </header>
  );
};