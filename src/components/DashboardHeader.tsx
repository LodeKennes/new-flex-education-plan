interface DashboardHeaderProps {
  userName: string;
}

export function DashboardHeader({ userName }: DashboardHeaderProps) {
  return (
    <div className="bg-white rounded-xl p-4 mb-6">
      <h1 className="text-4xl font-extrabold text-text-primary mb-3 font-jakarta">Dashboard</h1>
      <p className="text-text-secondary font-jakarta">Welcome back, {userName}!</p>
    </div>
  )
}