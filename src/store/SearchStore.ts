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
interface IPlace {
  id: number;
  name: string;
  description: string;
  img: string;
  topicId: number;
}

export class SearchStore {
  public listOfMessages: IMessage[] = [
    {
      message: "Что вас интересует?",
      type: MessageTypes.system,
    },
  ];
  public uniqueId: string = Math.random().toString(16).slice(2);
  public listOfTopics: ITopic[] = [];
  public listOfPlaces: IPlace[] = [
    {
      id: 999,
      name: "Краснодарский край",
      img: "https://avatars.mds.yandex.net/i?id=2def298ed3a4cb259db0c9f74f9c7772_l-4801058-images-thumbs&n=13",
      description:
        "Краснодарский край — это настоящий центр туризма в России, который привлекает путешественников своими разнообразными природными ландшафтами и уникальными возможностями для отдыха. Здесь можно насладиться великолепием Кавказских гор, предлагающих захватывающие виды и маршруты для активного туризма, а также расслабиться на солнечных пляжах ",
      topicId: 0,
    },
  ];
  public currentLanguae: ILanguage = {} as ILanguage;

  public selectedLanguage: ILanguage = {} as ILanguage;
  constructor() {
    makeAutoObservable(this);
  }

  /**
   * Поисковый запрос
   * @param value
   */
  public async searchQuery(value: string) {
    // this.listOfMessages.push({
    //   message: value,
    //   type: MessageTypes.user,
    // });
    this.listOfPlaces = [];
    const res = await QueryService.postQuery("/embeddingSearch", {
      value,
      uniqueId: this.uniqueId,
    });
    // this.listOfMessages.push({
    //   message: res.data.data.result,
    //   type: MessageTypes.system,
    // });
    this.listOfPlaces = res.data.data;
    console.log(res.data.data);
  }
  /**
   * Получить список тем по языку
   */
  public async getTopics(languageId: string) {
    const res = await QueryService.postQuery("/getListOfTopicsByLanguage", {
      languageId,
    });
    const listOfTopics = res.data.data.listOfTopics as ITopic[];
    this.listOfTopics = listOfTopics;
  }
  /**
   * Получить список тем по языку
   */
  public async getListOfPlaces(topicId: number) {
    const res = await QueryService.postQuery("/getListOfPlacesByTag", {
      topicId,
    });
    const listOfPlaces = res.data.data.listOfPlaces as IPlace[];
    this.listOfPlaces = listOfPlaces;
  }
}
export const searchGl = new SearchStore();
