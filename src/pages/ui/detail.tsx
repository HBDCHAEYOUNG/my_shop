import { Skeleton } from "@ui/_shardcn/skeleton";
import { useState } from "react";
import { useParams } from "react-router-dom";

export function Detail() {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(1);

  const products = JSON.parse(localStorage.getItem("products") || "[]");
  const product = products[Number(id)];

  const onClickCart = () => {
    // const user = JSON.parse(localStorage.getItem("user") || "[]");
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
        <p className="text-2xl">{product.price} won</p>
        <hr className="border-brand-primary" />

        <div className="grid grid-cols-3">
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
          <p>{product.price * count} won</p>
        </div>
        <button
          onClick={onClickCart}
          className="rounded-sm h-10 hover:brightness-110 cursor-pointer bg-brand-primary text-brand-secondary"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
