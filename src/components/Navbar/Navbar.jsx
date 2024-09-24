import React from 'react';

function Navbar() {
    return (
        <div className="navbar" style={{ backgroundColor: '#D8C4A2' }}> {/* Inline style as an alternative */}
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-5 w-5 stroke-current">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            <div className="flex-1 flex justify-center">
                <div className="flex space-x-8">
                    <a href="/" className="btn btn-ghost text-[#4E3B31] hover:text-[#5D4A3A]">Home</a>
                    <a href="/About" className="btn btn-ghost text-[#4E3B31] hover:text-[#5D4A3A]">About</a>
                    <a href="/Projects" className="btn btn-ghost text-[#4E3B31] hover:text-[#5D4A3A]">Projects</a>
                    <a href="/Contact" className="btn btn-ghost text-[#4E3B31] hover:text-[#5D4A3A]">Contact</a>
                </div>
            </div>
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-5 w-5 stroke-current">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Navbar;
