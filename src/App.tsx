import { NavigationBar } from './components/NavigationBar'
import { DashboardHeader } from './components/DashboardHeader'
import { UpcomingEducations } from './components/UpcomingEducations'
import { AdHocEducations } from './components/AdHocEducations'
import { PastEducations } from './components/PastEducations'

function App() {
  return (
    <div className="min-h-screen bg-background-primary">
      <NavigationBar />

      {/* Main Content */}
      <main className="px-6 py-5">
        <div className="max-w-[920px] mx-auto">
          <DashboardHeader userName="Lode Kennes" />
          <UpcomingEducations />
          <AdHocEducations />
          <PastEducations />
        </div>
      </main>
    </div>
  )
}

export default App
