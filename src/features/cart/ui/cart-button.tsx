import { totalCount } from "@entities/cart/lib";
import { useAuthStore } from "@store/auth-store";
import CartIcon from "@icons/box.svg?react";
import { Link } from "react-router-dom";

export function CartButton() {
  const { userId } = useAuthStore();

  const myCart = JSON.parse(localStorage.getItem("user") || "{}").cart[userId];
  const cartCount = totalCount(myCart);
  return (
    <div>
      <Link to="/cart" className="relative">
        <CartIcon className="size-8" />
        <div className=" size-6 bg-brand-primary rounded-full flex-center text-xs absolute top-[-5px] right-[-10px]">
          {cartCount}
        </div>
      </Link>
    </div>
  );
}
