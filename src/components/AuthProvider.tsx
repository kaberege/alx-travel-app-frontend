"use client";

import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "@/lib/redux/store";
import { initializeAuth } from "@/lib/redux/features/auth/authSlice";
import { useAppDispatch } from "@/lib/redux/hooks";

// A wrapper to handle the Redux dispatch safely
function AuthInitializer({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Check if the cookie exists as soon as the user opens the site
    dispatch(initializeAuth());
  }, [dispatch]);

  return <>{children}</>;
}

// The main Provider component that wraps the app
export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <AuthInitializer>{children}</AuthInitializer>
    </Provider>
  );
}
