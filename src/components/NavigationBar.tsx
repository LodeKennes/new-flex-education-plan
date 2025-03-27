export function NavigationBar() {
  return (
    <header className="border-b border-[#E6E8EB]">
      <div className="flex items-center justify-between px-10 py-3">
        <div className="flex items-center gap-4">
          <div className="w-4 h-4 bg-text-primary"></div>
          <span className="text-lg font-bold text-text-primary font-jakarta">EduApp</span>
        </div>
        
        <nav className="flex items-center gap-9">
          <a href="#" className="text-sm font-medium text-text-primary font-jakarta">Dashboard</a>
          <a href="#" className="text-sm font-medium text-text-primary font-jakarta">Educations</a>
        </nav>

        <div className="flex items-center gap-2">
          <div className="bg-accent px-4 py-2 rounded-full">
            <span className="text-sm font-bold text-text-primary font-jakarta">200</span>
          </div>
          <button className="w-10 h-10 flex items-center justify-center bg-background-secondary rounded-full">
            <span className="sr-only">Notifications</span>
            {/* Bell icon placeholder */}
          </button>
          <button className="w-10 h-10 flex items-center justify-center bg-background-secondary rounded-full">
            <span className="sr-only">Settings</span>
            {/* Settings icon placeholder */}
          </button>
          <div className="w-10 h-10 rounded-full bg-gray-200">
            {/* Profile image placeholder */}
          </div>
        </div>
      </div>
    </header>
  )
}