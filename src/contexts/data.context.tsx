import { createContext } from "react";
import { Biography, Personal } from "../utils/cv.interface";
import { bioData } from "../data/data";

const DataContext = createContext<Biography>({
  personals: {} as Personal,
  education: [],
  expertise: [],
  hobbies: [],
  contacts: [],
  social: [],
  skills: [],
  experience: [],
  achivements: [],
  languages: [],
  softSkills: [],
  motivation: "",
  techStack: [],
  projects: [],
});

export function DataContextProvider(props: { children?: React.ReactNode }) {
  return (
    <DataContext.Provider value={{ ...bioData }}>
      {props.children}
    </DataContext.Provider>
  );
}

export default DataContext;
