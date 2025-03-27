import { NavigationBar } from './components/NavigationBar'
import { DashboardHeader } from './components/DashboardHeader'

function App() {
  return (
    <div className="min-h-screen bg-background-primary">
      <NavigationBar />

      {/* Main Content */}
      <main className="px-6 py-5">
        <div className="max-w-[920px] mx-auto">
          <DashboardHeader userName="Lode Kennes" />
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
