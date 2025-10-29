export interface ExperienceType {
    date: string;
    company: string;
    position: string;
    underline: string,
    description: {
        text?: string | null;
        html: string[];
        list: string[];
    }
}