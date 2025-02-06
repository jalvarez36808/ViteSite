export default function Footer() {
  return (
    <footer className="bg-purple-primary">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-white">
            <p className="text-sm">© 2024 Purple Hub. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-white hover:text-purple-light text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-white hover:text-purple-light text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-white hover:text-purple-light text-sm">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 