import { Search } from "lucide-react";
function SearchBar() {
    return (
        <>
            <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                    type="text"
                    placeholder="Cari task, project, atau anggota..."
                    className="pl-10 pr-4 py-2 bg-gray-100 rounded-lg border-0 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                />
            </div>
        </>
    );
}

export default SearchBar;
