import { FiBell, FiSettings } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

export const NavigationBar = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 h-[65px] bg-white border-b border-border z-50">
      <div className="max-w-layout mx-auto h-full flex items-center justify-between px-6">
        {/* Logo/Brand section */}
        <Link 
          to="/" 
          className="text-xl font-extrabold text-text-primary font-jakarta hover:opacity-90 transition-opacity"
        >
          EduApp
        </Link>

        {/* Navigation links */}
        <div className="flex gap-8">
          <Link 
            to="/" 
            className={`text-sm font-jakarta transition-colors ${
              location.pathname === '/' 
                ? 'text-text-primary font-bold' 
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Dashboard
          </Link>
          <Link 
            to="/educations" 
            className={`text-sm font-jakarta transition-colors ${
              location.pathname === '/educations' 
                ? 'text-text-primary font-bold' 
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Educations
          </Link>
        </div>

        {/* User section */}
        <div className="flex items-center gap-6">
          {/* Notification icon with badge */}
          <div className="relative cursor-pointer">
            <FiBell 
              className="w-[20px] h-[20px] text-text-secondary hover:text-text-primary transition-colors" 
              strokeWidth={1.5}
            />
            <span className="absolute -top-2 -right-2 bg-notification text-[10px] font-medium px-[6px] py-[2px] rounded-full">
              200
            </span>
          </div>

          {/* Settings icon */}
          <button className="focus:outline-none">
            <FiSettings 
              className="w-[20px] h-[20px] text-text-secondary hover:text-text-primary transition-colors" 
              strokeWidth={1.5}
            />
          </button>

          {/* User profile picture */}
          <button className="w-8 h-8 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-notification">
            <img
              src="https://via.placeholder.com/32"
              alt="User profile"
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};