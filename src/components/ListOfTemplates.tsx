import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { TodoStoreContext } from "../store/root-store";

export const ListOfTemplates = observer(() => {
  const { searchGl } = useContext(TodoStoreContext);

  const getListOfPlaces = (topicId: number) => {
    searchGl.getListOfPlaces(topicId);
  };
  return (
    <div>
      <div className="d-flex flex-wrap mt-2">
        {searchGl.listOfTopics.map((topic, index) => (
          <div
            onClick={() => {
              getListOfPlaces(topic.id);
            }}
            key={topic.id}
            style={{ fontSize: 1 + "rem" }}
            className="category mb-2 me-2"
          >
            {topic.name}
          </div>
        ))}
      </div>
    </div>
  );
});
