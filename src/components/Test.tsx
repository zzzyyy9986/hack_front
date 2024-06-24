import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {TodoStoreContext} from "../store/root-store";

export const Test = observer(() => {
  const {todoStore} = useContext(TodoStoreContext);
  return <div>{todoStore.f}</div>;
});
