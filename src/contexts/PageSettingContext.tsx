"use client";
import {
  createContext,
  useContext,
  useState,
} from "react";
interface GlobalContextType {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export const PageSettingContext = createContext<GlobalContextType | undefined>(undefined);

export default function PageSettingProvider({children}:any) {

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <PageSettingContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </PageSettingContext.Provider>
  );
}

export const useGlobal = (): GlobalContextType => {
  const context = useContext(PageSettingContext);
  if (!context) {
    throw new Error("useGlobal must be used within a GlobalProvider");
  }
  return context;
};