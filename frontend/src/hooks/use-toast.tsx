import React, { createContext, useContext, useState} from "react";
import type { ReactNode } from "react";


type ToastVariant = "default" | "destructive";

interface ToastProps {
  title: string;
  description?: string;
  variant?: ToastVariant;
}

interface ToastContextType {
  toast: (toast: ToastProps) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const toast = (toast: ToastProps) => {
    setToasts((prev) => [...prev, toast]);
    // Auto remove toast after 3 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t !== toast));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-5 right-5 flex flex-col gap-2 z-50">
        {toasts.map((t, i) => (
          <div
            key={i}
            className={`rounded-md p-4 shadow-md max-w-xs text-white ${
              t.variant === "destructive" ? "bg-red-600" : "bg-blue-600"
            }`}
          >
            <strong className="block font-bold">{t.title}</strong>
            {t.description && <p className="text-sm">{t.description}</p>}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
