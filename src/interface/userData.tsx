export interface IUserData {
  aboutMe: string;
  subTitle: string;
  experience: IExperience[];
  portfolio: IPortfolio[];
  skills: ISkills[];
}

export interface IExperience {
  id: number;
  company: string;
  period: string;
  technology: string[];
  linkCompany: string;
  project: IProject[];
}

export interface IProject {
  id: number;
  title: string;
  description: string;
  link: string;
}

export interface IPortfolio {
  id: number;
  title: string;
  description: string;
  listDescription: IListDescription[];
  technology: string[];
  icon: string;
  titleLink: string;
  link: ILinks[];
}

export interface IListDescription {
  title: string;
  list: string[];
}

export interface ILinks {
  name: string;
  SocLink: string;
}

export interface ISkills {
  id: number;
  name: string;
  technologies: string[];
}
