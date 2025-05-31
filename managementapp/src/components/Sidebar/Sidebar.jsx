import { BarChart3, Calendar, CheckCircle, Settings, Users } from "lucide-react";
import { useState } from "react";

function Sidebar({ sidebarOpen }) {
    const [activeView, setActiveView] = useState('dashboard');
    const navbar = [{ id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'projects', label: 'Projects', icon: Calendar },
    { id: 'kanban', label: 'Kanban Board', icon: CheckCircle },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings }]

    const projects = [
        { id: 1, name: 'Website Redesign', progress: 75, color: 'bg-blue-500', tasks: 12, members: 5 },
        { id: 2, name: 'Mobile App', progress: 45, color: 'bg-purple-500', tasks: 8, members: 3 },
        { id: 3, name: 'API Gateway', progress: 30, color: 'bg-green-500', tasks: 6, members: 4 },
    ];
    return (
        <div className="lg:col-span-1" >
            <div className="flex">
                <aside className={` ${sidebarOpen ? "w-64" : "w-0"} transition-all duration-300 overflow-hidden bg-white border-r border-gray-200`}>
                    <div className="p-6 w-64">
                        <nav className="space-y-2">
                            {navbar.map((item) => (
                                <button
                                    key={item.id}
                                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors cursor-pointer ${activeView === item.id
                                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                                        : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                    onClick={() => setActiveView(item.id)}
                                >
                                    <item.icon className="w-5 h-5" />
                                    <span className="font-medium">{item.label}</span>
                                </button>
                            ))}
                        </nav>
                        <div className="mt-8">
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Recent Projects</h3>
                            <div className="space-y-2">
                                {projects.map((project) => (
                                    <div key={project.id} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                                        <div className={`w-3 h-3 ${project.color} rounded-full`}></div>
                                        <span className="text-sm text-gray-700 truncate">{project.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>

    );
}

export default Sidebar;
