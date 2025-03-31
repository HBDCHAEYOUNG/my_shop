import { totalCount, totalPrice } from "@entities/cart/lib/calculate-total\b";
import { storage } from "@entities/cart/lib/storage";
import { useAuthStore } from "@store/auth-store";
import { useCartStore } from "@store/cart-store";
import { Skeleton } from "@ui/_shardcn/skeleton";
import { useState } from "react";
import { Link } from "react-router-dom";
import TrashIcon from "@icons/delete.svg?react";

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

  const cart = JSON.parse(localStorage.getItem("cart") || "{}");
  const myCart = cart?.[userId] || {};

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
    storage.setItem(userId, myCart);
    updateCart();
  };

  const onClickMinus = (id: string) => {
    if (myCart[id].count === 1) return;

    myCart[id].count -= 1;
    storage.setItem(userId, myCart);
    updateCart();
  };

  const onClickDelete = (id: string) => {
    delete myCart[id];
    storage.setItem(userId, myCart);
    updateCart();
  };

  return (
    <div className="common-padding common-padding-top flex flex-col gap-4">
      <h1 className="text-2xl text-center mb-4">My cart</h1>

      <div className="flex flex-col  md:flex-row gap-8">
        <ul className="flex flex-col gap-4 md:w-2/3 ">
          {Object.entries(myCart as Record<string, Product>).map(
            ([id, product]) => (
              <li key={id} className="flex items-center gap-4">
                <img
                  src={product.image || "/shop.svg"}
                  alt={product.name}
                  onLoad={() => {
                    setIsLoading(false);
                  }}
                  className="w-1/6 md:w-1/3 aspect-square object-cover"
                />
                {isLoading && (
                  <Skeleton className="w-full  aspect-square object-cover" />
                )}
                <div className="flex w-full md:w-fit md:flex-col lg:flex-row lg:w-full">
                  <span className="whitespace-nowrap mb-4 lg:mb-0">
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
                      <TrashIcon className="size-6" />
                    </button>
                  </nav>
                </div>
              </li>
            )
          )}
        </ul>

        <ul className="flex flex-col gap-2 md:w-1/3 ">
          <p className="font-semibold border-b pb-2">Order Summary</p>
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
          <button className="bg-brand-primary text-brand-secondary px-4 py-2">
            Checkout
          </button>
        </ul>
      </div>
    </div>
  );
}
