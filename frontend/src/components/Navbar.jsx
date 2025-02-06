import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-purple-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl">
              Purple Hub
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link
              to="/dashboard"
              className="text-white hover:bg-purple-secondary px-3 py-2 rounded-md text-sm font-medium"
            >
              Dashboard
            </Link>
            <Link
              to="/checklist"
              className="text-white hover:bg-purple-secondary px-3 py-2 rounded-md text-sm font-medium"
            >
              Checklist
            </Link>
            <Link
              to="/signin"
              className="text-white hover:bg-purple-secondary px-3 py-2 rounded-md text-sm font-medium"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="text-white hover:bg-purple-secondary px-3 py-2 rounded-md text-sm font-medium"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 