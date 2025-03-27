import { product } from "@pages/ui/new-product";
import { Skeleton } from "@ui/_shardcn/skeleton";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Products() {
  const [isLoading, setIsLoading] = useState(true);
  const products = JSON.parse(localStorage.getItem("products") || "[]");
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

  return (
    <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 common-padding common-padding-top">
      {[...dummyProducts, ...products].map(
        (item: typeof product, index: number) => (
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
              ₩ {Number(item.price).toLocaleString()}
            </p>
          </Link>
        )
      )}
    </ul>
  );
}
