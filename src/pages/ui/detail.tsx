import { storage } from "@entities/cart/lib/storage";
import { useAuthStore } from "@store/auth-store";
import { useCartStore } from "@store/cart-store";
import { Skeleton } from "@ui/_shardcn/skeleton";
import { useState } from "react";
import { useParams } from "react-router-dom";
const dummyProducts = [
  {
    image: "https://www.svgrepo.com/show/490961/camera.svg",
    name: "camera",
    price: "359000",
  },
  {
    image: "https://www.svgrepo.com/show/490958/headphone.svg",
    name: "headphone",
    price: "130000",
  },
  {
    image: "https://www.svgrepo.com/show/490960/game.svg",
    name: "gamepad",
    price: "235000",
  },
  {
    image: "https://www.svgrepo.com/show/490969/computer.svg",
    name: "monitor",
    price: "780000",
  },
  {
    image: "https://www.svgrepo.com/show/490952/notebook.svg",
    name: "note",
    price: "7000",
  },
  {
    image: "https://www.svgrepo.com/show/490956/doughnut.svg",
    name: "doughnut",
    price: "2800",
  },
];
export function Detail() {
  const { id } = useParams();

  const { userId } = useAuthStore();
  const { updateCart } = useCartStore();

  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(1);

  const products = JSON.parse(localStorage.getItem("products") || "[]");
  const product = products[Number(id)] || dummyProducts[Number(id)];

  const onClickCart = () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const myCart = user.cart?.[userId] || {};

    if (!id) return;

    if (id in myCart) {
      myCart[id].count += 1;
    } else {
      myCart[id] = {
        ...product,
        count,
      };
    }

    storage.setItem(user, userId, myCart);
    updateCart();

    alert("Added to cart");
  };

  return (
    <div className="sm:flex sm:gap-4 common-padding common-padding-top">
      <img
        src={product.image || "/shop.svg"}
        alt={product.name}
        onLoad={() => {
          setIsLoading(false);
        }}
        className="sm:w-3/5 h-full aspect-square object-cover"
      />
      {isLoading && <Skeleton className="w-full  aspect-square object-cover" />}

      <div className="sm:w-2/5 mt-20 flex flex-col gap-4">
        <span className="text-4xl">{product.name}</span>
        <p className="text-2xl">₩ {Number(product.price).toLocaleString()}</p>
        <hr className="border-brand-primary" />

        <div className="flex justify-between">
          total
          <nav className="flex gap-2">
            <button
              className="cursor-pointer"
              onClick={() => {
                if (count > 1) setCount(count - 1);
              }}
            >
              -
            </button>
            <p>{count}</p>
            <button
              className="cursor-pointer"
              onClick={() => setCount(count + 1)}
            >
              +
            </button>
          </nav>
          <p className=" whitespace-nowrap ">
            ₩ {(Number(product.price) * count).toLocaleString()}
          </p>
        </div>

        <button
          onClick={onClickCart}
          className="h-10 hover:brightness-110 cursor-pointer bg-brand-primary text-brand-secondary"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
