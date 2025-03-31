// @ts-nocheck
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProgramList from "./components/ProgramList";
import Sidebar from "./components/Sidebar";
import Author from "./components/Author";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <div className="h-16" />
      <div className="w-full flex justify-center bg-[#E5E4E2]">
        <div className="w-[100%] md:w-[85%] flex flex-col md:flex-row bg-[#eeeeee]">
          <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<ProgramList />} />
              <Route path="/author" element={<Author />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
