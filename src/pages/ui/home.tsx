import { Products } from "@widgets/products/ui/products";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="h-screen">
      <div className="flex-center flex-col bg-brand-primary w-full aspect-[5/1]">
        <h1 className="text-brand-secondary text-2xl font-light">
          Look at our cute products!
        </h1>
        <Link
          to="/product"
          className="text-brand-secondary text-sm font-light hover:underline"
        >
          shop now →
        </Link>
      </div>
      <Products />
    </div>
  );
}
