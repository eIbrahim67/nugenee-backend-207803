import { Monitor, Code, Globe, Brain, Smartphone, Sparkles, LucideIcon, Crown } from "lucide-react";

export interface PathCourse {
    courseId: string;
    orderInPath: number;
    isOptional?: boolean;
}

export interface LearningPath {
    id: string;
    icon: LucideIcon;
    name: string;
    nameAr: string;
    subtitle: string;
    subtitleAr: string;
    description: string;
    descriptionAr: string;
    goal: string;
    goalAr: string;
    duration: string;
    durationAr: string;
    difficulty: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
    difficultyAr: string;
    color: string;
    courses: PathCourse[];
    outcomes: string[];
    outcomesAr: string[];
    isCustomizable?: boolean;
    featured?: boolean;
}

export const learningPaths: LearningPath[] = [
    {
        id: "computer-fundamentals",
        icon: Monitor,
        name: "Computer Fundamentals Path",
        nameAr: "مسار أساسيات الحاسوب",
        subtitle: "Master Digital Literacy",
        subtitleAr: "إتقان الثقافة الرقمية",
        description: "Perfect for absolute beginners. Build confidence with computers, learn essential office applications, and develop foundational digital skills for any career.",
        descriptionAr: "مثالي للمبتدئين تماماً. اكتسب الثقة في استخدام الحاسوب، تعلم تطبيقات المكتب الأساسية، وطور المهارات الرقمية الأساسية لأي مهنة.",
        goal: "Make a student computer-literate and confident in everyday digital tools, preparing them for further technology education or workplace requirements.",
        goalAr: "جعل الطالب متعلماً للحاسوب وواثقاً في استخدام الأدوات الرقمية اليومية، وإعداده لمزيد من التعليم التقني أو متطلبات مكان العمل.",
        duration: "3-4 months",
        durationAr: "3-4 أشهر",
        difficulty: "Beginner",
        difficultyAr: "مبتدئ",
        color: "from-green-500 to-emerald-500",
        courses: [
            { courseId: "computer-basics", orderInPath: 1 },
            { courseId: "office-applications", orderInPath: 2 }
        ],
        outcomes: [
            "Navigate Windows/Mac operating systems confidently",
            "Create professional documents, spreadsheets, and presentations",
            "Use the internet safely and effectively",
            "Manage files and organize digital information",
            "Communicate effectively via email and video calls",
            "Ready for more advanced technology courses"
        ],
        outcomesAr: [
            "التنقل في أنظمة Windows/Mac بثقة",
            "إنشاء مستندات وجداول بيانات وعروض تقديمية احترافية",
            "استخدام الإنترنت بأمان وفعالية",
            "إدارة الملفات وتنظيم المعلومات الرقمية",
            "التواصل بفعالية عبر البريد الإلكتروني ومكالمات الفيديو",
            "الجاهزية لدورات تقنية أكثر تقدماً"
        ],
        featured: true
    },
    {
        id: "custom-path",
        icon: Sparkles,
        name: "Build Your Own Path",
        nameAr: "ابنِ مسارك الخاص",
        subtitle: "Personalized Learning",
        subtitleAr: "تعلم مخصص",
        description: "Not sure which path to follow? Create your own learning journey by selecting the courses that matter most to you. Build a path that fits your goals, pace, and interests.",
        descriptionAr: "غير متأكد من المسار الذي يجب اتباعه؟ أنشئ رحلة التعلم الخاصة بك عن طريق اختيار الدورات الأكثر أهمية بالنسبة لك. ابنِ مساراً يناسب أهدافك ووتيرتك واهتماماتك.",
        goal: "Let learners choose their own sequence of courses based on their interests and career goals. Provide maximum flexibility for diverse learning needs.",
        goalAr: "السماح للمتعلمين باختيار تسلسلهم الخاص من الدورات بناءً على اهتماماتهم وأهدافهم المهنية. توفير أقصى قدر من المرونة لاحتياجات التعلم المتنوعة.",
        duration: "Flexible",
        durationAr: "مرن",
        difficulty: "All Levels",
        difficultyAr: "جميع المستويات",
        color: "from-orange-500 to-amber-500",
        courses: [],
        outcomes: [
            "Personalized learning path tailored to your goals",
            "Flexibility to learn at your own pace",
            "Mix and match courses from different tracks",
            "Build skills in multiple technology areas",
            "Create a unique portfolio showcasing diverse abilities"
        ],
        outcomesAr: [
            "مسار تعلم مخصص مصمم وفقاً لأهدافك",
            "المرونة في التعلم بوتيرتك الخاصة",
            "الجمع بين الدورات من مسارات مختلفة",
            "بناء مهارات في مجالات تقنية متعددة",
            "إنشاء محفظة فريدة تعرض قدرات متنوعة"
        ],
        isCustomizable: true,
    },
    {
        id: "the-forge",
        icon: Crown,
        name: "The Forge™ – Zero to Professional Programmer",
        nameAr: "المِصهَر™ – من الصفر إلى مبرمج محترف",
        subtitle: "From Absolute Beginner to Real Programmer",
        subtitleAr: "من مبتدئ تماماً إلى مبرمج حقيقي",
        description: "A flagship, end-to-end learning path designed to take students from zero technical knowledge to becoming real, confident programmers with strong foundations and real-world skills.",
        descriptionAr: "مسار تعليمي رئيسي متكامل مصمم لنقل الطالب من الصفر التقني إلى مبرمج حقيقي واثق يمتلك أساساً قوياً ومهارات عملية.",
        goal: "Transform complete beginners into professional-minded programmers capable of building real projects, understanding software systems, and continuing their growth independently.",
        goalAr: "تحويل المبتدئين تماماً إلى مبرمجين بعقلية احترافية قادرين على بناء مشاريع حقيقية وفهم الأنظمة البرمجية ومواصلة التطور الذاتي.",
        duration: "8–10 months",
        durationAr: "8–10 أشهر",
        difficulty: "Advanced",
        difficultyAr: "متقدم",
        color: "from-orange-500 via-red-500 to-rose-600",

        courses: [
            { courseId: "introduction-to-computer", orderInPath: 1 },
            { courseId: "office-applications", orderInPath: 2 },
            { courseId: "programming-foundations-core-skills", orderInPath: 3 },
            { courseId: "python-for-all", orderInPath: 4, isOptional: true },
            { courseId: "specialization-track", orderInPath: 5 },
            { courseId: "capstone-project", orderInPath: 6 }
        ],

        outcomes: [
            "Strong understanding of computers and software systems",
            "Ability to think logically and solve problems programmatically",
            "Write clean, readable, and maintainable code",
            "Use professional development tools like Git and version control",
            "Build real-world projects from scratch",
            "Confidence to pursue advanced programming specializations",
            "Portfolio-ready capstone project"
        ],

        outcomesAr: [
            "فهم قوي للحاسوب والأنظمة البرمجية",
            "القدرة على التفكير المنطقي وحل المشكلات برمجياً",
            "كتابة كود نظيف وقابل للقراءة والصيانة",
            "استخدام أدوات التطوير الاحترافية مثل Git وإدارة الإصدارات",
            "بناء مشاريع حقيقية من الصفر",
            "الثقة للانتقال إلى تخصصات برمجية متقدمة",
            "امتلاك مشروع تخرج جاهز للعرض في ملف الأعمال"
        ],
    }
];

// Helper functions
export const getPathById = (id: string): LearningPath | undefined => {
    return learningPaths.find(path => path.id === id);
};

export const getRegularPaths = (): LearningPath[] => {
    return learningPaths.filter(path => path.featured);
};

export const getCustomPath = (): LearningPath | undefined => {
    return learningPaths.find(path => path.isCustomizable);
};

export const getForgePath = (): LearningPath | undefined => {
    return learningPaths.find(path => path.id === "the-forge");
};

