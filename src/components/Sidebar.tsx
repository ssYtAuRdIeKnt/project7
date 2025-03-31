import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <aside className="md:w-96 w-full bg-white px-4 py-4 md:border-t-12 md:border-[#D0D0D0] border-b border-[#d5c1ba]">

      <div className="md:hidden flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold">
          Список програм
        </Link>

        <button onClick={() => setMenuOpen(!menuOpen)} className="text-black">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden space-y-4 mt-4">
          <div className="pt-6 border-t border-[#d5c1ba]">
            <div className="text-2xl font-semibold">Загальна інформація</div>
            <ul className="mt-2 space-y-1">
              <li><Link to="/" className="block text-[#6C6960] hover:text-black text-xl">Організація тренувань</Link></li>
              <li><Link to="/" className="block text-[#6C6960] hover:text-black text-xl">Для новачків</Link></li>
              <li><Link to="/" className="block text-[#6C6960] hover:text-black text-xl">Харчування</Link></li>
              <li><Link to="/author" className="block text-[#6C6960] hover:text-black text-xl">Про автора</Link></li>
              <li><Link to="/" className="block text-[#6C6960] hover:text-black text-xl">Реклама спортпіту</Link></li>
              <li><Link to="/" className="block text-[#6C6960] hover:text-black text-xl">Співпраця з нами</Link></li>
            </ul>
          </div>

          <div className="pt-6 border-t border-[#d5c1ba]">
            <div className="text-2xl font-semibold">Види циклів</div>
            <ul className="mt-2 space-y-1">
              <li><Link to="/" className="block text-[#6C6960] hover:text-black text-xl">Силовий</Link></li>
              <li><Link to="/" className="block text-[#6C6960] hover:text-black text-xl">Гіпертрофія</Link></li>
              <li><Link to="/" className="block text-[#6C6960] hover:text-black text-xl">Силова витривалість</Link></li>
              <li><Link to="/" className="block text-[#6C6960] hover:text-black text-xl">Відновлювальний</Link></li>
            </ul>
          </div>
        </div>
      )}

      <div className="hidden md:block">
        <Link to="/">
          <div className="text-4xl font-semibold p-8 border-b border-[#d5c1ba] cursor-pointer">Список програм</div>
        </Link>
        <div className="pt-8 pb-8 border-b border-[#d5c1ba]">
          <div className="text-3xl font-semibold pl-8">Загальна інформація</div>
          <ul className="mt-[10px]">
            <li><Link to="/" className="block text-[22px] pl-8 px-4 py-3 rounded text-[#6C6960] hover:bg-gray-100 hover:text-black">Організація тренувань</Link></li>
            <li><Link to="/" className="block text-[22px] pl-8 px-4 py-3 rounded text-[#6C6960] hover:bg-gray-100 hover:text-black">Для новачків</Link></li>
            <li><Link to="/" className="block text-[22px] pl-8 px-4 py-3 rounded text-[#6C6960] hover:bg-gray-100 hover:text-black">Харчування</Link></li>
            <li><Link to="/author" className="block text-[22px] pl-8 px-4 py-3 rounded text-[#6C6960] hover:bg-gray-100 hover:text-black">Про автора</Link></li>
            <li><Link to="/" className="block text-[22px] pl-8 px-4 py-3 rounded text-[#6C6960] hover:bg-gray-100 hover:text-black">Реклама спортпіту</Link></li>
            <li><Link to="/" className="block text-[22px] pl-8 px-4 py-3 rounded text-[#6C6960] hover:bg-gray-100 hover:text-black">Співпраця з нами</Link></li>
          </ul>
        </div>
        <div className="pt-8 pb-8 border-b border-[#d5c1ba]">
          <div className="text-3xl font-semibold pl-8">Види циклів</div>
          <ul className="mt-[10px]">
            <li><Link to="/" className="block text-[22px] pl-8 px-4 py-3 rounded text-[#6C6960] hover:bg-gray-100 hover:text-black">Силовий</Link></li>
            <li><Link to="/" className="block text-[22px] pl-8 px-4 py-3 rounded text-[#6C6960] hover:bg-gray-100 hover:text-black">Гіпертрофія</Link></li>
            <li><Link to="/" className="block text-[22px] pl-8 px-4 py-3 rounded text-[#6C6960] hover:bg-gray-100 hover:text-black">Силова витривалість</Link></li>
            <li><Link to="/" className="block text-[22px] pl-8 px-4 py-3 rounded text-[#6C6960] hover:bg-gray-100 hover:text-black">Відновлювальний</Link></li>
          </ul>
        </div>
        <ul className="mt-[10px]">
          <li><Link to="/" className="block text-[22px] pl-8 px-4 py-3 rounded text-[#6C6960] hover:bg-gray-100 hover:text-black">*Тут в майбутньому тематична реклама</Link></li>
        </ul>
      </div>
    </aside>
  );
}