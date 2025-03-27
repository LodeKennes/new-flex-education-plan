function App() {
  return (
    <div className="min-h-screen bg-background-primary">
      {/* Header */}
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

      {/* Main Content */}
      <main className="px-6 py-5">
        <div className="max-w-[920px] mx-auto">
          {/* Welcome Section */}
          <div className="bg-white rounded-xl p-4 mb-6">
            <h1 className="text-4xl font-extrabold text-text-primary mb-3 font-jakarta">Dashboard</h1>
            <p className="text-text-secondary font-jakarta">Welcome back, Lode Kennes!</p>
          </div>

          {/* Education Cards */}
          <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-base font-bold text-text-primary mb-1 font-jakarta">Upcoming Educations</h2>
                <p className="text-sm text-text-secondary font-jakarta">No upcoming educations</p>
              </div>
              <div className="w-[281px] h-[147px] bg-background-secondary rounded-xl">
                {/* Placeholder for illustration */}
              </div>
            </div>
          </div>

          {/* Ad Hoc Section */}
          <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-base font-bold text-text-primary mb-1 font-jakarta">Ad Hoc Educations</h2>
                <p className="text-sm text-text-secondary font-jakarta">No ad hoc educations</p>
              </div>
              <div className="w-[281px] h-[147px] bg-background-secondary rounded-xl">
                {/* Placeholder for illustration */}
              </div>
            </div>
          </div>

          {/* Past Educations */}
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-base font-bold text-text-primary mb-1 font-jakarta">Past Educations (0)</h2>
                <p className="text-sm text-text-secondary font-jakarta">More content available</p>
              </div>
              <div className="w-[281px] h-[147px] bg-background-secondary rounded-xl">
                {/* Placeholder for illustration */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
