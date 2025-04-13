import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { TodoStoreContext } from "../store/root-store";
import { MessageTypes } from "../store/SearchStore";

const ChatMessage = ({
  imageUrl,
  description,
}: {
  imageUrl: string;
  description: string;
}) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <img
          // style={{ maxWidth: 50 + "%" }}
          style={{ maxHeight: 300 + "px" }}
          src={imageUrl.split(";")[0]}
          className="card-img-top"
          alt="Chat"
        />

        <p className="card-text" style={{textAlign:'left'}}>{description}</p>
        <hr />
        <div
          className="d-flex justify-content-between"
          style={{ fontSize: 14 + "px" }}
        >
          <div>
            <a href="">Показать туры</a>
          </div>
          <div>
            <button className="btn btn-light me-2">👍 </button>
            <button className="btn btn-light me-2">👎</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Chat = observer(() => {
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
      style={{
        // backgroundColor: "#343a40",
        height: "70vh",
      }}
    >
      <hr />

      <div className="row">
        {searchGl.listOfMessages.map((el) => {
          if (el.type === MessageTypes.user) {
            return (
              <div className="message my-2">
                <div className="p-2 rounded">{el.message}</div>
              </div>
            );
          } else {
            return (
              <div
                className="message my-2"
                style={{
                  background: "white",
                  borderRadius: 10 + "px",
                  textAlign: "left",
                }}
              >
                <div className=" p-2 ">{el.message}</div>
              </div>
            );
          }
        })}
        <div className="col-12" style={{ overflowY: "scroll", height: "73vh" }}>
          <div className="row">
            {searchGl.listOfPlaces.map((el) => {
              return (
                <div className="col-md-6 col-12">
                  <ChatMessage
                    description={el.description}
                    imageUrl={el.img}
                  ></ChatMessage>
                </div>
              );
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
            <button className="btn" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>
            {/* <button className="btn btn-success" type="submit">
              Отправить
            </button> */}
          </form>
        </div>
      </div>
    </div>
  );
});
