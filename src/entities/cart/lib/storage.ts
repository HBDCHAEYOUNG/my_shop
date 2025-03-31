export const storage = {
  setItem: (userId: number, myCart: any) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "{}");
    localStorage.setItem(
      "cart",
      JSON.stringify({
        ...cart,
        [userId]: myCart,
      })
    );
  },
};
