interface Product {
  name: string;
  price: string;
  image?: string;
  count: number;
}

export const totalCount = (myCart: Product[]) => {
  if (!myCart) return 0;
  return Object.entries(myCart).reduce(
    (acc, cur: any) => acc + cur[1].count,
    0
  );
};

export const totalPrice = (myCart: Product[]) => {
  if (!myCart) return 0;
  return Object.entries(myCart).reduce(
    (acc, cur: any) => acc + Number(cur[1].price) * cur[1].count,
    0
  );
};
