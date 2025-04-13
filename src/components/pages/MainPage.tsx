import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { TodoStoreContext } from "../../store/root-store";
import { BasePage } from "../BasePage";
import { MessageTypes } from "../../store/SearchStore";
import { ListOfLanguages } from "../ListOfLanguages";
import { ListOfTemplates } from "../ListOfTemplates";
import { Chat } from "../Chat";
/**
 * 1. Отправлять запросы на бэк
 */

export const MainPage = observer(() => {
  const [searchValue, setSearchValue] = useState<string>("");
  const onSearchChange = (e: any) => {
    setSearchValue(e.target.value);
  };
  return (
    <>
      <BasePage>
        {/* <ListOfLanguages></ListOfLanguages> */}
        {/* <ListOfTemplates></ListOfTemplates> */}
        <Chat></Chat>
      </BasePage>
    </>
  );
});
