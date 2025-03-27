import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';

// Placeholder components for routes
const Dashboard = () => (
  <div className="min-h-screen pt-[65px] bg-background">
    <div className="max-w-layout mx-auto px-6 py-6">
      <h1>Dashboard Content</h1>
    </div>
  </div>
);

const Educations = () => (
  <div className="min-h-screen pt-[65px] bg-background">
    <div className="max-w-layout mx-auto px-6 py-6">
      <h1>Educations Content</h1>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/educations" element={<Educations />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
