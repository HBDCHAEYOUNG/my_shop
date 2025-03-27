import { totalCount, totalPrice } from "@entities/cart/lib/calculate-total\b";
import { storage } from "@entities/cart/lib/storage";
import { useAuthStore } from "@store/auth-store";
import { useCartStore } from "@store/cart-store";
import { Skeleton } from "@ui/_shardcn/skeleton";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Product {
  name: string;
  price: string;
  image?: string;
  count: number;
}

export function Cart() {
  const { userId } = useAuthStore();

  const [isLoading, setIsLoading] = useState(true);
  //   const [userState, setUserState] = useState(0);

  const { updateCart } = useCartStore();

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const myCart = user.cart?.[userId] || {};

  if (!myCart)
    return (
      <div className="common-padding-top flex-center flex-col">
        Add products 🎮 🎧 📷
        <Link to="/product" className="underline hover:text-brand-primary">
          Go to shop 🛍️
        </Link>
      </div>
    );

  const shipping = 3000;
  const price = totalPrice(myCart);
  const totalCounts = totalCount(myCart);
  const total = price + shipping;

  const onClickPlus = (id: string) => {
    myCart[id].count += 1;
    storage.setItem(user, userId, myCart);
    updateCart();
  };

  const onClickMinus = (id: string) => {
    if (myCart[id].count === 1) return;

    myCart[id].count -= 1;
    storage.setItem(user, userId, myCart);
    updateCart();
  };

  const onClickDelete = (id: string) => {
    delete myCart[id];
    storage.setItem(user, userId, myCart);
    updateCart();
  };

  return (
    <div className="common-padding common-padding-top flex flex-col gap-4">
      <h1 className="text-2xl text-center mb-4">My cart</h1>

      {Object.entries(myCart as Record<string, Product>).map(
        ([id, product]) => (
          <div key={id} className="flex items-center gap-4">
            <img
              src={product.image || "/shop.svg"}
              alt={product.name}
              onLoad={() => {
                setIsLoading(false);
              }}
              className="w-1/6 aspect-square object-cover"
            />
            {isLoading && (
              <Skeleton className="w-full  aspect-square object-cover" />
            )}

            <span className="whitespace-nowrap">
              {product.name}
              <br />
              {Number(product.price).toLocaleString()} won
            </span>

            <nav className="flex gap-2 items-center ml-auto">
              <button
                onClick={() => onClickMinus(id)}
                className="cursor-pointer"
              >
                -
              </button>
              <p>{product.count}</p>
              <button
                onClick={() => onClickPlus(id)}
                className="cursor-pointer"
              >
                +
              </button>
              <button
                onClick={() => onClickDelete(id)}
                className="cursor-pointer ml-4"
              >
                🗑️
              </button>
            </nav>
          </div>
        )
      )}

      <ul className="flex flex-col gap-2">
        <p className="mt-8 font-semibold border-b pb-2">Order Summary</p>
        <li className="flex justify-between border-b pb-2">
          Subtotal ({totalCounts})<p>₩ {price.toLocaleString()}</p>
        </li>
        <li className="flex justify-between border-b pb-2">
          <p>Shipping</p>
          <p>₩ {shipping.toLocaleString()}</p>
        </li>
        <li className="flex justify-between ">
          Total (Include VAT) <p>₩ {total.toLocaleString()}</p>
        </li>
      </ul>

      <button className="bg-brand-primary text-brand-secondary px-4 py-2">
        Checkout
      </button>
    </div>
  );
}
