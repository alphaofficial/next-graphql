import { FC, ReactNode } from "react";

export const Layout: FC<{ children: ReactNode }> = ({ children }) => (
  <main className="font-sans">
    <div className="max-h-screen">
      <div className="w-full">
        <div className="flex flex-row items-center justify-center pt-16">
          {children}
        </div>
      </div>
    </div>
  </main>
);
