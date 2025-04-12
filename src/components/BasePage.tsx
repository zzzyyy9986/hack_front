import { ReactNode } from "react";

export const BasePage = ({ children }: { children: ReactNode }) => {
    return <div className="container-fluid">
        
      {children}
  </div>;
};
