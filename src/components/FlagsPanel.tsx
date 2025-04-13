import { observer } from "mobx-react-lite";
import { ILanguage } from "./ListOfLanguages";
import { useContext, useEffect } from "react";
import { TodoStoreContext } from "../store/root-store";

const listOfLanguages: ILanguage[] = [
  {
    name: "Русский",
    symbol: "ru",
    localName: "Русский",
  },
  {
    name: "Китайский",
    symbol: "cn",
    localName: "cn",
  },
  {
    name: "Иранский",
    symbol: "ir",
    localName: "ir",
  },
];
export const FlagsPanel = observer(() => {
    const { searchGl } = useContext(TodoStoreContext);
    
    useEffect(() => {
        searchGl.currentLanguae = listOfLanguages[0]; 
    },[])

  const onFlagClick = (l: ILanguage) => {
      searchGl.currentLanguae = l;
      console.log(searchGl.currentLanguae);
  };
  return (
    <div className="flag-panel d-flex">
      {listOfLanguages.map((e) => {
        return (
          <div className="me-2" onClick={() => onFlagClick(e)}>
            {e.symbol === searchGl.currentLanguae.symbol && (
              <img
                style={{ borderBottom: 2 + "px solid blue" }}
                width={30 + "px"}
                height={30 + "px"}
                src={`https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/${e.symbol}.svg`}
                alt=""
              />
            )}
            {e.symbol !== searchGl.currentLanguae.symbol && (
              <img
                width={30 + "px"}
                height={30 + "px"}
                src={`https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/${e.symbol}.svg`}
                alt=""
              />
            )}
          </div>
        );
      })}
    </div>
  );
});
