export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Tasks Overview */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <h3 className="text-lg font-medium text-gray-900">Tasks Overview</h3>
              <div className="mt-4">
                <div className="flex justify-between items-center text-sm">
                  <span>Completed Tasks</span>
                  <span className="font-medium">0/10</span>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-primary h-2 rounded-full w-0"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Documents */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <h3 className="text-lg font-medium text-gray-900">Recent Documents</h3>
              <div className="mt-4">
                <p className="text-sm text-gray-500">No documents uploaded yet</p>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <h3 className="text-lg font-medium text-gray-900">Helpful Resources</h3>
              <div className="mt-4">
                <ul className="space-y-3">
                  <li className="text-sm text-purple-primary hover:text-purple-secondary">
                    <a href="#">Guide to Funeral Planning</a>
                  </li>
                  <li className="text-sm text-purple-primary hover:text-purple-secondary">
                    <a href="#">Financial Support Options</a>
                  </li>
                  <li className="text-sm text-purple-primary hover:text-purple-secondary">
                    <a href="#">Grief Counseling Services</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 