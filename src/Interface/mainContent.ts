interface IMainContent {
  id: string;
  name: string;
  houseColours: string;
  founder: string;
  animal: string;
  element: string;
  ghost: string;
  commonRoom: string;
  heads: IHead[];
  traits: ITrait[];
}

interface IHead {
  id: string;
  firstName: string;
  lastName: string;
}

interface ITrait {
  id: string;
  name: string;
}

export default IMainContent;
