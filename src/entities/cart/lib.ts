export const totalCount = (myCart: any) => {
  if (!myCart) return 0;
  return Object.entries(myCart).reduce(
    (acc, cur: any) => acc + cur[1].count,
    0
  );
};
