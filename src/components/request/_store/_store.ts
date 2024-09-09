import { create } from "zustand";

interface useRegisterStore {
  skills: [];
  informations: {
    firstName: string;
    lastName: string;
    nationalCode: number;
    gender: number;
    jobType: number;
  };
  province: {
    ID: number;
    desc: string;
  };
  cities: [];
  updateSkills: (check: boolean, skill: object) => void;
  updateInformation: (key: string, value: any) => void;
  updateProvince: (value: object) => void;
}

const useRegisterStore = create<useRegisterStore>((set) => ({
  skills: [],
  updateSkills: (check, updatedItem: any) =>
    set((state: any) => {
      if (check) {
        const exists = state.skills.some(
          (obj: any) => obj.ID === updatedItem.ID
        );
        if (!exists) {
          return {
            ...state.skills,
            skills: [...state.skills, updatedItem],
          };
        } else {
          return { ...state.skills };
        }
      } else {
        return {
          ...state.skills,
          skills: state.skills.filter(
            (skill: any) => skill.ID !== updatedItem.ID
          ),
        };
      }
    }),
  informations: {
    firstName: "",
    lastName: "",
    nationalCode: 0,
    gender: 0,
    jobType: 0,
  },
  province: {
    ID: 1,
    desc: "",
  },
  cities: [],
  updateInformation: (key, value) =>
    set((state) => ({
      informations: {
        ...state.informations,
        [key]: value,
      },
    })),
  updateProvince: (province: any) => set({ province: province }),
}));

export default useRegisterStore;
