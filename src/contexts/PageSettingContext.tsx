"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  use,
} from "react";

export const PageSettingContext = createContext({});
const primaryColor = "#0EA1DB";

export default function PageSettingProvider({
  children,
  pageSetting,
  lng,
}: any) {
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  return (
    <PageSettingContext.Provider value={{ primaryColor, navMenuOpen, setNavMenuOpen }}>
      {children}
    </PageSettingContext.Provider>
  );
}
