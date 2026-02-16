import { create } from "zustand";
import beApi from "@/services/beApi";

const apiPrefix = '/skill';

const useSkillStore = create((set) => ({
    skills: [],
    fetchSkills: async () => {
        try {
            const response = await beApi.get(`${apiPrefix}`);
            set({ skills: response.data });
        } catch (error) {
            console.error("Error fetching skills:", error);
        }
    },
}));

export default useSkillStore;