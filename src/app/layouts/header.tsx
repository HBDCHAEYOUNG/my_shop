import { LoginButton } from "@features/auth/ui/login-button";
import { CartButton } from "@features/cart/ui/cart-button";
import { DarkmodeToggle } from "@features/theme/ui/darkmode-toggle";
import PencilIcon from "@icons/pencil.svg?react";
import ShopIcon from "@icons/shop.svg?react";
import { useAuthStore } from "@store/auth-store";
import { Link } from "react-router-dom";

export function Header() {
  const { isLogin, nickname, userId } = useAuthStore();

  return (
    <div className="flex items-center common-padding gap-4 py-4 border-b">
      <Link to="/" className="flex-center gap-4 ">
        <ShopIcon className="size-8" />
        <span className="hidden sm:flex text-3xl text-brand-primary">
          Cherry Shop
        </span>
      </Link>

      <DarkmodeToggle />

      <Link to="/product" className="hidden sm:flex text-sm sm:text-xl">
        Products
      </Link>

      {isLogin && (
        <nav className="flex-center gap-4">
          <CartButton />

          {userId === 3971318149 && (
            <Link to="/product/new">
              <PencilIcon className="size-8" />
            </Link>
          )}

          <p className="text-xl">{nickname}</p>
        </nav>
      )}

      <LoginButton />
    </div>
  );
}
