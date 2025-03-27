import { product } from "@pages/ui/new-product";
import { Skeleton } from "@ui/_shardcn/skeleton";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Products() {
  const [isLoading, setIsLoading] = useState(true);
  const products = JSON.parse(localStorage.getItem("products") || "[]");
  return (
    <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 common-padding common-padding-top">
      {products.map((item: typeof product, index: number) => (
        <Link
          key={index}
          to={`/product/${index}`}
          className="flex-col flex gap-1 border border-border rounded-md p-4 pb-10 cursor-pointer shadow-md hover:scale-105 transition-all duration-300"
        >
          <img
            src={item.image || "/shop.svg"}
            alt={item.name}
            onLoad={() => {
              setIsLoading(false);
            }}
            className="w-full h-full aspect-square object-cover"
          />
          {isLoading && (
            <Skeleton className="w-full h-[calc(100%-64px)] aspect-square object-cover" />
          )}
          <span className="common-padding-top">{item.name}</span>
          <p className="font-semibold">
            {Number(item.price).toLocaleString()} won
          </p>
        </Link>
      ))}
    </ul>
  );
}
