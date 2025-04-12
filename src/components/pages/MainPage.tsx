import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { TodoStoreContext } from "../../store/root-store";
import { BasePage } from "../BasePage";
import { MessageTypes } from "../../store/SearchStore";
import { ListOfLanguages } from "../ListOfLanguages";
import { ListOfTemplates } from "../ListOfTemplates";
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
        <ListOfTemplates></ListOfTemplates>
        <ListOfLanguages></ListOfLanguages>
        <Chat></Chat>
      </BasePage>
    </>
  );
});

const Chat = observer(() => {
  const { searchGl } = useContext(TodoStoreContext);

  const [searchValue, setSearchValue] = useState<string>("");
  const onSearchChange = (e: any) => {
    setSearchValue(e.target.value);
  };
  const onSendMessage = async (e: any) => {
    e.preventDefault();
    searchGl.searchQuery(searchValue);
    setSearchValue("");
  };
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#343a40", height: "100vh" }}
    >
      <div className="row">
        <div className="col-12">
          <h2 className="text-light text-center my-4">Чат</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12" style={{ overflowY: "scroll", height: "70vh" }}>
          <div className="chat-box p-3">
            {searchGl.listOfMessages.map((el) => {
              if (el.type === MessageTypes.user) {
                return (
                  <div className="message my-2">
                    <div className="bg-primary text-light p-2 rounded">
                      {el.message}
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="message my-2 text-end">
                    <div className="bg-secondary text-light p-2 rounded">
                      {el.message}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className="row fixed-bottom">
        <div className="col-12">
          <form className="input-group p-3" onSubmit={onSendMessage}>
            <input
              value={searchValue}
              onChange={onSearchChange}
              type="text"
              className="form-control"
              placeholder="Введите сообщение..."
            />
            <button className="btn btn-success" type="submit">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
});
