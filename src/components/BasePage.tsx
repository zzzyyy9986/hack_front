import { ReactNode } from "react";
import { ILanguage } from "./ListOfLanguages";
import { FlagsPanel } from "./FlagsPanel";

export const BasePage = ({ children }: { children: ReactNode }) => {
    const onPickLanguage = () => {

    }
  return (
    <div className="container-fluid space-between">
      <div className="d-flex justify-content-between">
       <FlagsPanel></FlagsPanel>
        <div className="partners">
          <a href="">Вы - турагенство?</a>
        </div>
      </div>
      {/* <hr /> */}
      {children}
    </div>
  );
};
