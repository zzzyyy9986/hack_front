import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { TodoStoreContext } from "../store/root-store";

export interface ILanguage {
  name: string;
  symbol: string;
  localName: string;
}

export const ListOfLanguages = observer(() => {
  const { searchGl } = useContext(TodoStoreContext);

  const [listOfLanguges, setListOfLanguages] = useState<ILanguage[]>([
    {
      name: "Русский",
      symbol: "ru",
      localName: "Русский",
    },
    {
      name: "Арабский",
      symbol: "ar",
      localName: "Арабский",
    },
    {
      name: "Китайский",
      symbol: "cn",
      localName: "Китайский",
    },
  ]);

  const onLanguageClick = (lang: ILanguage) => {
    searchGl.selectedLanguage = lang;
  };
  return (
      <div className="language-tabs d-flex justify-content-center">
      <ul className="nav nav-tabs">
        {listOfLanguges.map((language) => {
          return (
            <li
              className="nav-item"
              onClick={() => onLanguageClick(language)}
              key={language.symbol}
            >
                  <span className={"nav-link " + (searchGl.selectedLanguage.symbol === language.symbol ? " active" : "")} id="lang-ru" >
                {language.name}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
});
