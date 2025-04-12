import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { TodoStoreContext } from "../store/root-store";

export const ListOfTemplates = observer(() => {
  const { searchGl } = useContext(TodoStoreContext);

  return (
    <div>
      <div className="d-flex flex-wrap">
        {searchGl.listOfTopics.map((topic, index) => (
          <span key={topic.id} className="badge bg-primary m-1">
            {topic.name}
          </span>
        ))}
      </div>
    </div>
  );
});
