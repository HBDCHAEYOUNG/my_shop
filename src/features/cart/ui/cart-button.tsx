import { totalCount } from "@entities/cart/lib/calculate-total\b";
import CartIcon from "@icons/box.svg?react";
import { useAuthStore } from "@store/auth-store";
import { useCartStore } from "@store/cart-store";
import { useEffect } from "react";
import { Link } from "react-router-dom";
export function CartButton() {
  const { userId } = useAuthStore();
  const { cartVersion } = useCartStore();

  const getCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "{}");
    const myCart = cart?.[userId] || {};
    return totalCount(myCart);
  };

  useEffect(() => {
    getCartCount();
  }, [cartVersion]);

  return (
    <div>
      <Link to="/cart" className="relative">
        <CartIcon className="size-8" />
        <div className=" size-6 bg-brand-primary rounded-full flex-center text-xs absolute top-[-5px] right-[-10px]">
          {getCartCount()}
        </div>
      </Link>
    </div>
  );
}
