import { makeAutoObservable } from "mobx";
import { QueryService } from "../services/QueryService";
import { ILanguage } from "../components/ListOfLanguages";
export enum MessageTypes {
  user = "user",
  system = "system",
}

interface IMessage {
  message: string;
  //user или system
  type: MessageTypes;
}
interface ITopic {
  name: string;
  id: number;
}

export class SearchStore {
  public listOfMessages: IMessage[] = [];
  public uniqueId: string = Math.random().toString(16).slice(2);
  public listOfTopics: ITopic[] = [];

  public selectedLanguage: ILanguage = {} as ILanguage;
  constructor() {
    makeAutoObservable(this);
  }

  /**
   * Поисковый запрос
   * @param value
   */
  public async searchQuery(value: string) {
    this.listOfMessages.push({
      message: value,
      type: MessageTypes.user,
    });
    const res = await QueryService.postQuery("/getLlmResponse", {
      value,
      uniqueId: this.uniqueId,
    });
    this.listOfMessages.push({
      message: res.data.data.result,
      type: MessageTypes.system,
    });
    console.log(res.data.data);
  }
}
export const searchGl = new SearchStore();
