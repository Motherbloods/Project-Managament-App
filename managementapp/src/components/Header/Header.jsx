import { Bell, BarChart3, Menu, ChevronDown } from 'lucide-react';
import SearchBar from '../SearchBar/SearchBar';

function Header({ sidebarOpen, setSidebarOpen }) {
    return (<>
        <header className="lg:col-span-1">
            <div className="py-6 px-4 bg-white border-b border-gray-200 shadow-sm">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
                            <Menu className="w-5 h-5 text-gray-600" onClick={() => setSidebarOpen(!sidebarOpen)} />
                        </button>
                        <div className='flex items-center space-x-3'>
                            <div className='w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center'>
                                <BarChart3 className='w-4 h-4 text-white' />
                            </div>
                            <h1 className='text-lg font-bold text-gray-900'>ProjectFlow</h1>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <SearchBar />
                        <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                        </button>
                        <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 rounded-lg p-2 transition-colors">
                            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                                JD
                            </div>
                            <span className="text-sm font-medium text-gray-700">John Doe</span>
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>);
}

export default Header;