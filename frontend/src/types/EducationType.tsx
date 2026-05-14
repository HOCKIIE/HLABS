export interface EducationType {
    date: string; 
    institution: {
        th: string;
        en: string;
    };
    major: {
        th: string;
        en: string;
    };
    degree: {
        th: string;
        en: string;
    };
    faculty: {
        th: string;
        en: string;
    };
    created_at: string;
    updated_at: string;
}