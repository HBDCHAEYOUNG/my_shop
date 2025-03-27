import { useAuthStore } from "@store/auth-store";
import { Skeleton } from "@ui/_shardcn/skeleton";
import { useState } from "react";

interface Product {
  name: string;
  price: string;
  image?: string;
  count: number;
}

export function Cart() {
  const { userId } = useAuthStore();

  const [isLoading, setIsLoading] = useState(true);
  const [userState, setUserState] = useState(0);

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const myCart = user.cart[userId];
  const shipping = 3000;
  const price = Object.entries(myCart).reduce(
    (acc, cur: any) => acc + Number(cur[1].price) * cur[1].count,
    0
  );
  const totalCount = Object.entries(myCart).reduce(
    (acc, cur: any) => acc + cur[1].count,
    0
  );
  const total = price + shipping;

  const onClickPlus = (id: string) => {
    myCart[id].count += 1;
    localStorage.setItem(
      "user",
      JSON.stringify({
        ...user,
        cart: { ...user.cart, [userId]: myCart },
      })
    );
    setUserState((prev) => prev + 1);
  };

  const onClickMinus = (id: string) => {
    if (myCart[id].count === 1) return;

    myCart[id].count -= 1;
    localStorage.setItem(
      "user",
      JSON.stringify({
        ...user,
        cart: { ...user.cart, [userId]: myCart },
      })
    );
    setUserState((prev) => prev + 1);
  };

  const onClickDelete = (id: string) => {
    delete myCart[id];
    localStorage.setItem(
      "user",
      JSON.stringify({
        ...user,
        cart: { ...user.cart, [userId]: myCart },
      })
    );
    setUserState((prev) => prev + 1);
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
          Subtotal ({totalCount})<p>₩ {price.toLocaleString()}</p>
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
