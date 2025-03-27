export const storage = {
  setItem: (user: any, userId: number, myCart: any) => {
    localStorage.setItem(
      "user",
      JSON.stringify({
        ...user,
        cart: { ...user.cart, [userId]: myCart },
      })
    );
  },
};
