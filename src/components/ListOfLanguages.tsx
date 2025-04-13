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
      name: "Иран",
      symbol: "ir",
      localName: "Иран",
    },
    {
      name: "Арабия",
      symbol: "ae",
      localName: "Страны персидского залива",
    },
    {
      name: "Индия",
      symbol: "in",
      localName: "Индия",
    },
    {
      name: "Китай",
      symbol: "cn",
      localName: "Китай",
    },
  ]);

  const onLanguageClick = async (lang: ILanguage) => {
    searchGl.selectedLanguage = lang;
    searchGl.getTopics(lang.symbol);
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
              <span
                className={
                  "nav-link " +
                  (searchGl.selectedLanguage.symbol === language.symbol
                    ? " active"
                    : "")
                }
                id="lang-ru"
              >
                {language.name}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
});
