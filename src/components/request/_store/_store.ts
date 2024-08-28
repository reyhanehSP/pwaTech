import { create } from "zustand";

const informationStore = (set : any, get : any)  => ({
  information: [],
  registerInformation: (item : any) => {

    set((state: any) => ({
      information: [...state.information, item],
      
    }));
  },
});

const useInformationStore = create(informationStore);

export default useInformationStore;