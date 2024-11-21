import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { logout } from '../slices/userSlice';
import Cookies from 'js-cookie';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [router]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    setIsLoggedIn(false);
    setIsOpen(false);
    router.push('/');
  };

  return (
    <nav className="w-full p-4 bg-black text-white flex justify-between items-center border-b-[0.5px] border-gray-800">
      <Link legacyBehavior href="/">
        <a className="text-xl font-bold">{"[] || ()"}</a>
      </Link>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center transition-transform transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:static md:flex md:flex-row md:items-center md:bg-transparent md:translate-x-0`}
      >
        <button onClick={toggleMenu} className="absolute top-4 right-4 md:hidden focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <Link legacyBehavior href="/">
          <a className="mt-4 md:mt-0 md:ml-4">Home</a>
        </Link>
        {isAuthenticated || isLoggedIn ? (
          <button onClick={handleLogout} className="mt-4 md:mt-0 md:ml-4">
            Logout
          </button>
        ) : (
          <>
            {router.pathname !== '/login' && (
              <Link legacyBehavior href="/login">
                <a className="mt-4 md:mt-0 md:ml-4">Login</a>
              </Link>
            )}
          </>
        )}
      </div>
    </nav>
  );
}