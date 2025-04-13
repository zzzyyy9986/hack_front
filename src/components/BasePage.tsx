import { ReactNode } from "react";

export const BasePage = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container-fluid">
      <div>
        <div>
          <span className=" mt-1 me-1">Идеи</span>
          <span className=" mt-1">Туры</span>
        </div>
              <a href="">Вы - турагенство?</a>
              <div>
                  
              </div>
      </div>
      {/* <hr /> */}
      {children}
    </div>
  );
};
