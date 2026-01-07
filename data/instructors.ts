
export interface Instructor {
    id: string;
    name: string;
    nameAr: string;
    role: string;
    roleAr: string;
    bio: string;
    bioAr: string;
    photo: string;
    expertise: string[];
    expertiseAr: string[];
    courses: string[]; // IDs of courses taught
    social?: {
        linkedin?: string;
        twitter?: string;
        website?: string;
    };
}

export const instructors: Instructor[] = [
    {
        "id": "ibrahim-mohamed",
        "name": "Ibrahim Mohamed",
        "nameAr": "إبراهيم محمد",
        "role": "Software Engineer",
        "roleAr": "مهندس برمجيات",
        "bio": "Ibrahim Mohamed is a dedicated Software Engineer with a passion for creating efficient and reliable software solutions. He has experience in designing, developing, and maintaining applications across various platforms.",
        "bioAr": "إبراهيم محمد مهندس برمجيات ملتزم ولديه شغف في إنشاء حلول برمجية فعّالة وموثوقة. لديه خبرة في تصميم وتطوير وصيانة التطبيقات عبر منصات متعددة.",
        "photo": "https://avatars.githubusercontent.com/u/114102076?s=400&u=668567edc9d88c2294720b3b6f6f71bd01fc4632&v=4",
        "expertise": ["Full-Stack Development", "Mobile Development", "Python", "JavaScript"],
        "expertiseAr": ["تطوير التطبيقات الكاملة", "تطوير تطبيقات الهواتف", "بايثون", "جافاسكريبت"],
        "courses": [
            "ai-engineering",
            "python-programming",
        ]
    }
];

export const getInstructorById = (id: string): Instructor | undefined => {
    return instructors.find(inst => inst.id === id);
};
