import CartIcon from "@icons/box.svg?react";
import MoonIcon from "@icons/moon.svg?react";
import PencilIcon from "@icons/pencil.svg?react";
import ShopIcon from "@icons/shop.svg?react";
import SunIcon from "@icons/sun.svg?react";
import { useAuthStore } from "@store/auth-store";
import { useDarkStore } from "@store/dark-store";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const { darkMode, toggleDarkMode } = useDarkStore();
  const { isLogin, setIsLogout, nickname } = useAuthStore();

  const handleLogin = () => {
    if (isLogin) {
      setIsLogout();
    } else {
      const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
      const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

      console.log(REST_API_KEY);
      const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

      window.location.href = KAKAO_AUTH_URL;
    }
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  console.log(isLogin);
  return (
    <div className="flex items-center common-pading gap-4 py-4 border-b">
      <Link to="/" className="flex-center gap-4 ">
        <ShopIcon className="size-8" />
        <span className="text-3xl  text-brand-primary">Cherry Shop</span>
      </Link>

      <button
        onClick={toggleDarkMode}
        className="text-2xl cursor-pointer mr-auto"
      >
        {darkMode ? <MoonIcon /> : <SunIcon />}
      </button>

      <Link to="/product" className="text-xl">
        Products
      </Link>

      {isLogin && (
        <nav className="flex-center gap-4">
          <Link to="/cart" className="relative">
            <CartIcon className="size-8" />
            <div className=" size-6 bg-brand-primary rounded-full flex-center text-xs absolute top-[-5px] right-[-10px]">
              1
            </div>
          </Link>

          <Link to="/product/new">
            <PencilIcon className="size-8" />
          </Link>

          <p className="text-xl">{nickname}</p>
        </nav>
      )}

      <button
        className="h-8 p-1 rounded-xs flex-center text-brand-secondary bg-brand-primary text-xl cursor-pointer"
        onClick={handleLogin}
      >
        {isLogin ? "Logout" : "Login"}
      </button>
    </div>
  );
}
