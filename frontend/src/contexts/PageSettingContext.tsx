"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useCallback
} from "react";
import { useTheme } from "next-themes";
import FullScreenLoading from "@/components/atom/FullScreenLoading";

interface GlobalContextType {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  myCursor: {
    x:number;
    y:number;
  };
  cursorStyle: {
    borderStyle: string;
    borderWidth: string;
    backgroundColor: string;
    transform: string;
  };
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
interface CursorType {
  x: number;
  y: number;
  hover: boolean;
}
interface CursorStyle {
  backgroundColor: string;
  transform:string;
  borderStyle:string;
  borderWidth:string;
}

export const PageSettingContext = createContext<GlobalContextType | undefined>(undefined);

export default function PageSettingProvider({
  children
}:{
  children: ReactNode
}) {
    const [loading, setLoading] = useState(true);
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [myCursor, setMyCursor] = useState<CursorType>({ x: 0, y: 0, hover:false });
    const [cursorStyle, setCursorStyle] = useState<CursorStyle>({
        backgroundColor:'rgba(0,0,0,0)',
        transform: "translate(-50%, -50%)",  
        borderStyle:'none',
        borderWidth:'0'
    });
    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
    const { resolvedTheme } = useTheme(); // ✅ ใช้ resolvedTheme แทน theme


  
  // const thisTheme = (document.getElementsByTagName('html') as HTMLCollectionOf<HTMLElement>)[0].getAttribute('class');
    const handleMouseMove = useCallback((e:MouseEvent) => {
        const onTarget = e.target as HTMLElement;
        const el = onTarget.closest('a') || onTarget.closest('button') || onTarget.closest('.checkbox') || onTarget.closest('.card-item') || onTarget.closest('.spinnerCube');
        if(el) {
        setMyCursor({x: e.clientX, y: e.clientY, hover:true});
        setCursorStyle({
            borderStyle:'none',
            borderWidth:'0px',
            backgroundColor: resolvedTheme === 'dark' ? 'rgb(243,242,249)' : 'rgba(96,104,135,.5)',
            transform:'translateX(-50%) translateY(-50%) scale(2)'
        });
        }else{
        setMyCursor({x: e.clientX, y: e.clientY, hover:false});
        setCursorStyle({
            borderStyle:'solid',
            borderWidth:'1px',
            backgroundColor: resolvedTheme === 'dark' ? 'rgba(0,0,0,0)':'',
            transform:'translateX(-50%) translateY(-50%)'
        });
        }
    }, [resolvedTheme]);

    useEffect(()=>{
        document.addEventListener("mousemove", handleMouseMove)
        return () => document.removeEventListener("mousemove",handleMouseMove)
    },[handleMouseMove]);

    return (
        <PageSettingContext.Provider value={{ isSidebarOpen, toggleSidebar, myCursor, cursorStyle, loading, setLoading}}>
            {loading && <FullScreenLoading />}
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