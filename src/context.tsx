import { createContext, useEffect, useState } from "react";
import { uuid } from "./utils";

export const AppDataContext = createContext<{
  user: any;
  handleSubmitUser?: any;
  handleLogin?: any;
  products: any;
  setProducts: any;
  orders: any;
  setOrders: any;
  carts: any;
  setCarts: any;
}>({
  user: null,
  handleSubmitUser: null,
  products: null,
  setProducts: null,
  orders: null,
  setOrders: null,
  carts: null,
  setCarts: null,
});

const AppProvider = ({ children }: any) => {
  const [user, setUser] = useState<any | null>(null);
  const [products, setProducts] = useState<any | null>(null);
  const [orders, setOrders] = useState<any | null>(null);
  const [carts, setCarts] = useState<any | null>(null);
  useEffect(() => {
    setUser(localStorage.getItem("user") || null);
  });
  const handleSubmitUser = (user: any) => {
    let userRegisteredList = localStorage.getItem("user-registered") || {};
    if (Array.isArray(userRegisteredList)) {
      userRegisteredList.push({ ...user, id: uuid() });
    } else {
      userRegisteredList = [{ ...user, id: uuid() }];
    }
    localStorage.setItem("user-register", JSON.stringify(userRegisteredList));
  };
  const handleLogin = (userData: any, callback: (success: boolean) => void) => {
    const userRegistered = JSON.parse(
      localStorage.getItem("user-register") || "[]"
    );
    for (const user of userRegistered) {
      if (
        user?.email === userData?.email &&
        user?.password === userData?.password
      ) {
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        callback(true);
        return;
      }
    }
    callback(false);
  };
  return (
    <AppDataContext.Provider
      value={{
        user,
        handleLogin,
        handleSubmitUser,
        products,
        setProducts,
        orders,
        setOrders,
        carts,
        setCarts,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
};

export default AppProvider;
