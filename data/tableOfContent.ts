export interface TableOfContent {
    id: string;
    courseModules: CourseModule[];
}

export interface CourseModule {
    id: string;
    order: number;

    title: string;
    titleAr: string;

    description: string;
    descriptionAr: string;

    duration: string;
    durationAr: string;

    lessons: CourseLesson[];
}

export interface CourseLesson {
    id: string;
    order: number;

    title: string;
    titleAr: string;

    type: "video" | "article" | "hands-on" | "quiz" | "project";

    duration: string;
    durationAr: string;

    objectives: string[];
    objectivesAr: string[];

    isPreview?: boolean;
}

export interface LessonResource {
    id: string;
    type: "pdf" | "repo" | "link" | "slides";
    title: string;
    url: string;
}

export interface ModuleWithLessons {
    title: string;
    titleAr: string;
    lessons: { title: string; titleAr: string }[];
}

export const tableOfContent: TableOfContent[] = [

    {
        id: "python-programming",
        courseModules: [
            {
                id: "python-module-1",
                order: 1,
                title: "Introduction to Programming & Python",
                titleAr: "مقدمة في البرمجة وبايثون",
                description: "Understand what programming is and why Python is widely used.",
                descriptionAr: "فهم مفهوم البرمجة ولماذا تُستخدم بايثون على نطاق واسع.",
                duration: "1 week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "python-lesson-1-1",
                        order: 1,
                        title: "What is Programming?",
                        titleAr: "ما هي البرمجة؟",
                        type: "video",
                        duration: "30 min",
                        durationAr: "30 دقيقة",
                        objectives: ["Understand programming concepts"],
                        objectivesAr: ["فهم مفاهيم البرمجة"],
                        isPreview: true
                    },
                    {
                        id: "python-lesson-1-2",
                        order: 2,
                        title: "Why Python?",
                        titleAr: "لماذا بايثون؟",
                        type: "article",
                        duration: "20 min",
                        durationAr: "20 دقيقة",
                        objectives: ["Learn Python use cases"],
                        objectivesAr: ["التعرف على استخدامات بايثون"]
                    },
                    {
                        id: "python-lesson-1-3",
                        order: 3,
                        title: "Installing Python & Development Tools",
                        titleAr: "تنصيب بايثون وأدوات التطوير",
                        type: "hands-on",
                        duration: "40 min",
                        durationAr: "40 دقيقة",
                        objectives: ["Set up Python environment"],
                        objectivesAr: ["إعداد بيئة بايثون"]
                    }
                ]
            },

            {
                id: "python-module-2",
                order: 2,
                title: "Python Basics",
                titleAr: "أساسيات بايثون",
                description: "Learn syntax, variables, and basic data types.",
                descriptionAr: "تعلم الصياغة والمتغيرات وأنواع البيانات الأساسية.",
                duration: "2 weeks",
                durationAr: "أسبوعان",
                lessons: [
                    {
                        id: "python-lesson-2-1",
                        order: 1,
                        title: "Variables and Data Types",
                        titleAr: "المتغيرات وأنواع البيانات",
                        type: "video",
                        duration: "45 min",
                        durationAr: "45 دقيقة",
                        objectives: ["Use variables and data types"],
                        objectivesAr: ["استخدام المتغيرات وأنواع البيانات"]
                    },
                    {
                        id: "python-lesson-2-2",
                        order: 2,
                        title: "Operators and Expressions",
                        titleAr: "العوامل والتعابير",
                        type: "hands-on",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Apply operators in Python"],
                        objectivesAr: ["تطبيق العوامل في بايثون"]
                    },
                    {
                        id: "python-lesson-2-3",
                        order: 3,
                        title: "Input and Output",
                        titleAr: "الإدخال والإخراج",
                        type: "hands-on",
                        duration: "40 min",
                        durationAr: "40 دقيقة",
                        objectives: ["Read input and display output"],
                        objectivesAr: ["قراءة الإدخال وعرض الإخراج"]
                    }
                ]
            },

            {
                id: "python-module-3",
                order: 3,
                title: "Control Flow",
                titleAr: "التحكم في سير البرنامج",
                description: "Control program execution using conditions and loops.",
                descriptionAr: "التحكم في تنفيذ البرنامج باستخدام الشروط والحلقات.",
                duration: "2 weeks",
                durationAr: "أسبوعان",
                lessons: [
                    {
                        id: "python-lesson-3-1",
                        order: 1,
                        title: "Conditional Statements",
                        titleAr: "الجمل الشرطية",
                        type: "video",
                        duration: "45 min",
                        durationAr: "45 دقيقة",
                        objectives: ["Use if-else logic"],
                        objectivesAr: ["استخدام المنطق الشرطي"]
                    },
                    {
                        id: "python-lesson-3-2",
                        order: 2,
                        title: "Loops (for & while)",
                        titleAr: "الحلقات التكرارية",
                        type: "hands-on",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Write loop-based programs"],
                        objectivesAr: ["كتابة برامج باستخدام الحلقات"]
                    },
                    {
                        id: "python-lesson-3-3",
                        order: 3,
                        title: "Practical Exercises",
                        titleAr: "تمارين عملية",
                        type: "quiz",
                        duration: "30 min",
                        durationAr: "30 دقيقة",
                        objectives: ["Reinforce control flow concepts"],
                        objectivesAr: ["تعزيز مفاهيم التحكم"]
                    }
                ]
            },

            {
                id: "python-module-4",
                order: 4,
                title: "Data Structures",
                titleAr: "هياكل البيانات",
                description: "Work with lists, tuples, dictionaries, and sets.",
                descriptionAr: "التعامل مع القوائم والمجموعات والقواميس.",
                duration: "2 weeks",
                durationAr: "أسبوعان",
                lessons: [
                    {
                        id: "python-lesson-4-1",
                        order: 1,
                        title: "Lists and Tuples",
                        titleAr: "القوائم والـ Tuples",
                        type: "video",
                        duration: "50 min",
                        durationAr: "50 دقيقة",
                        objectives: ["Manipulate lists and tuples"],
                        objectivesAr: ["التعامل مع القوائم والـ Tuples"]
                    },
                    {
                        id: "python-lesson-4-2",
                        order: 2,
                        title: "Dictionaries and Sets",
                        titleAr: "القواميس والمجموعات",
                        type: "hands-on",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Store and retrieve structured data"],
                        objectivesAr: ["تخزين واسترجاع البيانات المنظمة"]
                    }
                ]
            },

            {
                id: "python-module-5",
                order: 5,
                title: "Functions and Modules",
                titleAr: "الدوال والوحدات",
                description: "Write reusable code using functions and modules.",
                descriptionAr: "كتابة كود قابل لإعادة الاستخدام باستخدام الدوال والوحدات.",
                duration: "2 weeks",
                durationAr: "أسبوعان",
                lessons: [
                    {
                        id: "python-lesson-5-1",
                        order: 1,
                        title: "Defining Functions",
                        titleAr: "تعريف الدوال",
                        type: "video",
                        duration: "45 min",
                        durationAr: "45 دقيقة",
                        objectives: ["Create reusable functions"],
                        objectivesAr: ["إنشاء دوال قابلة لإعادة الاستخدام"]
                    },
                    {
                        id: "python-lesson-5-2",
                        order: 2,
                        title: "Using Built-in and Custom Modules",
                        titleAr: "استخدام الوحدات الجاهزة والمخصصة",
                        type: "hands-on",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Work with Python modules"],
                        objectivesAr: ["التعامل مع وحدات بايثون"]
                    }
                ]
            },

            {
                id: "python-module-6",
                order: 6,
                title: "Object-Oriented Programming (OOP)",
                titleAr: "البرمجة كائنية التوجه",
                description: "Learn classes, objects, and OOP principles.",
                descriptionAr: "تعلم الأصناف والكائنات ومبادئ OOP.",
                duration: "2 weeks",
                durationAr: "أسبوعان",
                lessons: [
                    {
                        id: "python-lesson-6-1",
                        order: 1,
                        title: "Classes and Objects",
                        titleAr: "الأصناف والكائنات",
                        type: "video",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Understand OOP basics"],
                        objectivesAr: ["فهم أساسيات OOP"]
                    },
                    {
                        id: "python-lesson-6-2",
                        order: 2,
                        title: "Practical OOP Project",
                        titleAr: "مشروع عملي باستخدام OOP",
                        type: "project",
                        duration: "2 hours",
                        durationAr: "ساعتان",
                        objectives: ["Build a simple OOP-based application"],
                        objectivesAr: ["بناء تطبيق بسيط باستخدام OOP"]
                    }
                ]
            },

            {
                id: "python-module-7",
                order: 7,
                title: "File Handling & Final Project",
                titleAr: "التعامل مع الملفات والمشروع النهائي",
                description: "Work with files and build a complete Python project.",
                descriptionAr: "التعامل مع الملفات وبناء مشروع بايثون متكامل.",
                duration: "1 week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "python-lesson-7-1",
                        order: 1,
                        title: "Reading and Writing Files",
                        titleAr: "قراءة وكتابة الملفات",
                        type: "hands-on",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Work with text files"],
                        objectivesAr: ["التعامل مع الملفات النصية"]
                    },
                    {
                        id: "python-lesson-7-2",
                        order: 2,
                        title: "Final Project",
                        titleAr: "المشروع النهائي",
                        type: "project",
                        duration: "4 hours",
                        durationAr: "4 ساعات",
                        objectives: ["Apply all learned concepts"],
                        objectivesAr: ["تطبيق جميع المفاهيم المكتسبة"]
                    }
                ]
            }
        ]
    },
    {
        id: "web-development",
        courseModules: [
            {
                id: "web-module-1",
                order: 1,
                title: "Introduction to Web Development",
                titleAr: "مقدمة في تطوير الويب",
                description: "Understand how the web works and set up your development environment.",
                descriptionAr: "فهم كيفية عمل الويب وإعداد بيئة التطوير.",
                duration: "1 week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "web-lesson-1-1",
                        order: 1,
                        title: "How the Web Works",
                        titleAr: "كيف يعمل الويب",
                        type: "video",
                        duration: "40 min",
                        durationAr: "40 دقيقة",
                        objectives: ["Understand browsers, servers, and HTTP"],
                        objectivesAr: ["فهم المتصفحات والخوادم وبروتوكول HTTP"],
                        isPreview: true
                    },
                    {
                        id: "web-lesson-1-2",
                        order: 2,
                        title: "Developer Tools Setup",
                        titleAr: "إعداد أدوات المطور",
                        type: "hands-on",
                        duration: "50 min",
                        durationAr: "50 دقيقة",
                        objectives: ["Set up VS Code and browser dev tools"],
                        objectivesAr: ["إعداد VS Code وأدوات المطور في المتصفح"]
                    }
                ]
            },

            {
                id: "web-module-2",
                order: 2,
                title: "HTML Fundamentals",
                titleAr: "أساسيات HTML",
                description: "Build the structure of web pages using HTML.",
                descriptionAr: "بناء هيكل صفحات الويب باستخدام HTML.",
                duration: "2 weeks",
                durationAr: "أسبوعان",
                lessons: [
                    {
                        id: "web-lesson-2-1",
                        order: 1,
                        title: "HTML Structure & Elements",
                        titleAr: "هيكل وعناصر HTML",
                        type: "video",
                        duration: "50 min",
                        durationAr: "50 دقيقة",
                        objectives: ["Create structured HTML pages"],
                        objectivesAr: ["إنشاء صفحات HTML منظمة"]
                    },
                    {
                        id: "web-lesson-2-2",
                        order: 2,
                        title: "Forms and Semantic HTML",
                        titleAr: "النماذج وHTML الدلالي",
                        type: "hands-on",
                        duration: "70 min",
                        durationAr: "70 دقيقة",
                        objectives: ["Build accessible HTML forms"],
                        objectivesAr: ["بناء نماذج HTML قابلة للوصول"]
                    }
                ]
            },

            {
                id: "web-module-3",
                order: 3,
                title: "CSS Fundamentals",
                titleAr: "أساسيات CSS",
                description: "Style websites using modern CSS techniques.",
                descriptionAr: "تنسيق مواقع الويب باستخدام تقنيات CSS الحديثة.",
                duration: "3 weeks",
                durationAr: "3 أسابيع",
                lessons: [
                    {
                        id: "web-lesson-3-1",
                        order: 1,
                        title: "CSS Basics & Selectors",
                        titleAr: "أساسيات CSS والمحددات",
                        type: "video",
                        duration: "50 min",
                        durationAr: "50 دقيقة",
                        objectives: ["Style elements with CSS"],
                        objectivesAr: ["تنسيق العناصر باستخدام CSS"]
                    },
                    {
                        id: "web-lesson-3-2",
                        order: 2,
                        title: "Layout: Flexbox & Grid",
                        titleAr: "التخطيطات: Flexbox و Grid",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Build modern layouts"],
                        objectivesAr: ["بناء تخطيطات حديثة"]
                    },
                    {
                        id: "web-lesson-3-3",
                        order: 3,
                        title: "Responsive Design",
                        titleAr: "التصميم المتجاوب",
                        type: "hands-on",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Create responsive websites"],
                        objectivesAr: ["إنشاء مواقع متجاوبة"]
                    }
                ]
            },

            {
                id: "web-module-4",
                order: 4,
                title: "JavaScript Fundamentals",
                titleAr: "أساسيات JavaScript",
                description: "Add interactivity and logic to websites.",
                descriptionAr: "إضافة التفاعل والمنطق إلى مواقع الويب.",
                duration: "3 weeks",
                durationAr: "3 أسابيع",
                lessons: [
                    {
                        id: "web-lesson-4-1",
                        order: 1,
                        title: "JavaScript Basics",
                        titleAr: "أساسيات JavaScript",
                        type: "video",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Understand JS syntax and variables"],
                        objectivesAr: ["فهم صياغة JavaScript والمتغيرات"]
                    },
                    {
                        id: "web-lesson-4-2",
                        order: 2,
                        title: "DOM Manipulation",
                        titleAr: "التعامل مع DOM",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Manipulate web pages dynamically"],
                        objectivesAr: ["التفاعل الديناميكي مع الصفحات"]
                    },
                    {
                        id: "web-lesson-4-3",
                        order: 3,
                        title: "Events and Forms",
                        titleAr: "الأحداث والنماذج",
                        type: "hands-on",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Handle user interactions"],
                        objectivesAr: ["التعامل مع تفاعلات المستخدم"]
                    }
                ]
            },

            {
                id: "web-module-5",
                order: 5,
                title: "Version Control with Git",
                titleAr: "إدارة الإصدارات باستخدام Git",
                description: "Track and manage code changes professionally.",
                descriptionAr: "تتبع وإدارة تغييرات الكود باحترافية.",
                duration: "1 week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "web-lesson-5-1",
                        order: 1,
                        title: "Git Basics & Workflow",
                        titleAr: "أساسيات Git وسير العمل",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Use Git for version control"],
                        objectivesAr: ["استخدام Git لإدارة الإصدارات"]
                    }
                ]
            },

            {
                id: "web-module-6",
                order: 6,
                title: "React Fundamentals",
                titleAr: "أساسيات React",
                description: "Build modern, component-based user interfaces.",
                descriptionAr: "بناء واجهات مستخدم حديثة قائمة على المكونات.",
                duration: "3 weeks",
                durationAr: "3 أسابيع",
                lessons: [
                    {
                        id: "web-lesson-6-1",
                        order: 1,
                        title: "React Basics & JSX",
                        titleAr: "أساسيات React و JSX",
                        type: "video",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Understand React components"],
                        objectivesAr: ["فهم مكونات React"]
                    },
                    {
                        id: "web-lesson-6-2",
                        order: 2,
                        title: "State, Props & Hooks",
                        titleAr: "الحالة والخصائص و Hooks",
                        type: "hands-on",
                        duration: "120 min",
                        durationAr: "120 دقيقة",
                        objectives: ["Manage application state"],
                        objectivesAr: ["إدارة حالة التطبيق"]
                    }
                ]
            },

            {
                id: "web-module-7",
                order: 7,
                title: "APIs & Project Deployment",
                titleAr: "واجهات البرمجة ونشر المشاريع",
                description: "Connect to APIs and deploy web applications.",
                descriptionAr: "الربط مع واجهات البرمجة ونشر تطبيقات الويب.",
                duration: "3 weeks",
                durationAr: "3 أسابيع",
                lessons: [
                    {
                        id: "web-lesson-7-1",
                        order: 1,
                        title: "Working with APIs",
                        titleAr: "التعامل مع APIs",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Fetch and display external data"],
                        objectivesAr: ["جلب البيانات الخارجية وعرضها"]
                    },
                    {
                        id: "web-lesson-7-2",
                        order: 2,
                        title: "Final Web Project",
                        titleAr: "المشروع النهائي للويب",
                        type: "project",
                        duration: "6 hours",
                        durationAr: "6 ساعات",
                        objectives: ["Build and deploy a full web application"],
                        objectivesAr: ["بناء ونشر تطبيق ويب متكامل"]
                    }
                ]
            }
        ]
    },
    {
        id: "mobile-app-development",
        courseModules: [
            {
                id: "mobile-module-1",
                order: 1,
                title: "Introduction to Mobile Development",
                titleAr: "مقدمة في تطوير الموبايل",
                description: "Understand mobile development concepts and set up your environment for React Native.",
                descriptionAr: "فهم مفاهيم تطوير الموبايل وإعداد البيئة للعمل مع React Native.",
                duration: "1 week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "mobile-lesson-1-1",
                        order: 1,
                        title: "Mobile Platforms Overview (iOS & Android)",
                        titleAr: "نظرة عامة على منصات الموبايل (iOS و Android)",
                        type: "video",
                        duration: "40 min",
                        durationAr: "40 دقيقة",
                        objectives: ["Understand mobile platforms and their differences"],
                        objectivesAr: ["فهم منصات الموبايل وفروقاتها"],
                        isPreview: true
                    },
                    {
                        id: "mobile-lesson-1-2",
                        order: 2,
                        title: "Setting Up React Native Development Environment",
                        titleAr: "إعداد بيئة تطوير React Native",
                        type: "hands-on",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Install Node, Expo, Android Studio, Xcode, VS Code"],
                        objectivesAr: ["تنصيب Node و Expo و Android Studio و Xcode و VS Code"]
                    }
                ]
            },

            {
                id: "mobile-module-2",
                order: 2,
                title: "React Native Fundamentals",
                titleAr: "أساسيات React Native",
                description: "Learn components, JSX, props, state, and styling in React Native.",
                descriptionAr: "تعلم المكونات، JSX، الخصائص، الحالة، والتصميم في React Native.",
                duration: "3 weeks",
                durationAr: "3 أسابيع",
                lessons: [
                    {
                        id: "mobile-lesson-2-1",
                        order: 1,
                        title: "Components & JSX",
                        titleAr: "المكونات و JSX",
                        type: "video",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Build UI using React Native components"],
                        objectivesAr: ["بناء واجهات باستخدام مكونات React Native"]
                    },
                    {
                        id: "mobile-lesson-2-2",
                        order: 2,
                        title: "Props and State",
                        titleAr: "الخصائص والحالة",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Manage dynamic data in apps"],
                        objectivesAr: ["إدارة البيانات الديناميكية في التطبيقات"]
                    },
                    {
                        id: "mobile-lesson-2-3",
                        order: 3,
                        title: "Styling & Layout",
                        titleAr: "التصميم والتخطيط",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Apply styling and layout techniques"],
                        objectivesAr: ["تطبيق تقنيات التصميم والتخطيط"]
                    }
                ]
            },

            {
                id: "mobile-module-3",
                order: 3,
                title: "Navigation & State Management",
                titleAr: "التنقل وإدارة الحالة",
                description: "Handle multi-screen navigation and app state effectively.",
                descriptionAr: "إدارة التنقل بين الشاشات وحالة التطبيق بفعالية.",
                duration: "2 weeks",
                durationAr: "أسبوعان",
                lessons: [
                    {
                        id: "mobile-lesson-3-1",
                        order: 1,
                        title: "React Navigation Basics",
                        titleAr: "أساسيات React Navigation",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Navigate between screens with React Navigation"],
                        objectivesAr: ["التنقل بين الشاشات باستخدام React Navigation"]
                    },
                    {
                        id: "mobile-lesson-3-2",
                        order: 2,
                        title: "State Management (Context & Hooks)",
                        titleAr: "إدارة الحالة (Context و Hooks)",
                        type: "hands-on",
                        duration: "120 min",
                        durationAr: "120 دقيقة",
                        objectives: ["Manage app state with Context and Hooks"],
                        objectivesAr: ["إدارة حالة التطبيق باستخدام Context و Hooks"]
                    }
                ]
            },

            {
                id: "mobile-module-4",
                order: 4,
                title: "Working with APIs & Device Features",
                titleAr: "التعامل مع APIs وميزات الجهاز",
                description: "Fetch data from APIs and integrate device functionalities like camera and geolocation.",
                descriptionAr: "جلب البيانات من APIs ودمج ميزات الجهاز مثل الكاميرا والموقع الجغرافي.",
                duration: "2 weeks",
                durationAr: "أسبوعان",
                lessons: [
                    {
                        id: "mobile-lesson-4-1",
                        order: 1,
                        title: "Fetching Data from APIs",
                        titleAr: "جلب البيانات من APIs",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Integrate external data into apps"],
                        objectivesAr: ["دمج البيانات الخارجية في التطبيقات"]
                    },
                    {
                        id: "mobile-lesson-4-2",
                        order: 2,
                        title: "Using Device Features",
                        titleAr: "استخدام ميزات الجهاز",
                        type: "hands-on",
                        duration: "120 min",
                        durationAr: "120 دقيقة",
                        objectives: ["Access camera, geolocation, sensors"],
                        objectivesAr: ["الوصول إلى الكاميرا والموقع والحساسات"]
                    }
                ]
            },

            {
                id: "mobile-module-5",
                order: 5,
                title: "Advanced React Native & Performance",
                titleAr: "React Native المتقدم والأداء",
                description: "Optimize app performance and apply advanced patterns.",
                descriptionAr: "تحسين أداء التطبيقات وتطبيق الأنماط المتقدمة.",
                duration: "2 weeks",
                durationAr: "أسبوعان",
                lessons: [
                    {
                        id: "mobile-lesson-5-1",
                        order: 1,
                        title: "Optimizing Performance",
                        titleAr: "تحسين الأداء",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Enhance app performance and responsiveness"],
                        objectivesAr: ["تحسين أداء التطبيق واستجابته"]
                    },
                    {
                        id: "mobile-lesson-5-2",
                        order: 2,
                        title: "Advanced Patterns & Best Practices",
                        titleAr: "الأنماط المتقدمة وأفضل الممارسات",
                        type: "video",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Learn reusable and maintainable patterns"],
                        objectivesAr: ["تعلم أنماط قابلة لإعادة الاستخدام وسهلة الصيانة"]
                    }
                ]
            },

            {
                id: "mobile-module-6",
                order: 6,
                title: "Publishing & Final Project",
                titleAr: "النشر والمشروع النهائي",
                description: "Deploy apps to App Store and Google Play, and complete a final cross-platform project.",
                descriptionAr: "نشر التطبيقات على App Store و Google Play، وإكمال المشروع النهائي متعدد المنصات.",
                duration: "4 weeks",
                durationAr: "4 أسابيع",
                lessons: [
                    {
                        id: "mobile-lesson-6-1",
                        order: 1,
                        title: "App Deployment",
                        titleAr: "نشر التطبيقات",
                        type: "hands-on",
                        duration: "120 min",
                        durationAr: "120 دقيقة",
                        objectives: ["Deploy apps to iOS and Android stores"],
                        objectivesAr: ["نشر التطبيقات على متاجر iOS و Android"]
                    },
                    {
                        id: "mobile-lesson-6-2",
                        order: 2,
                        title: "Final Project: Cross-Platform Mobile App",
                        titleAr: "المشروع النهائي: تطبيق موبايل متعدد المنصات",
                        type: "project",
                        duration: "6 hours",
                        durationAr: "6 ساعات",
                        objectives: ["Apply all learned concepts in a real app"],
                        objectivesAr: ["تطبيق جميع المفاهيم المكتسبة في تطبيق حقيقي"]
                    }
                ]
            }
        ]
    },
    {
        id: "arduino-programming",
        courseModules: [
            {
                id: "arduino-module-1",
                order: 1,
                title: "Introduction to Arduino & Electronics",
                titleAr: "مقدمة في الأردوينو والإلكترونيات",
                description: "Learn about Arduino boards, basic electronics, and set up your development environment.",
                descriptionAr: "تعلم حول لوحات الأردوينو، أساسيات الإلكترونيات، وإعداد بيئة التطوير.",
                duration: "1 week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "arduino-lesson-1-1",
                        order: 1,
                        title: "What is Arduino?",
                        titleAr: "ما هو الأردوينو؟",
                        type: "video",
                        duration: "30 min",
                        durationAr: "30 دقيقة",
                        objectives: ["Understand Arduino boards and applications"],
                        objectivesAr: ["فهم لوحات الأردوينو وتطبيقاتها"],
                        isPreview: true
                    },
                    {
                        id: "arduino-lesson-1-2",
                        order: 2,
                        title: "Basic Electronics Concepts",
                        titleAr: "مفاهيم الإلكترونيات الأساسية",
                        type: "hands-on",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Learn voltage, current, resistance, and circuits"],
                        objectivesAr: ["تعلم الجهد، التيار، المقاومة، والدوائر"]
                    },
                    {
                        id: "arduino-lesson-1-3",
                        order: 3,
                        title: "Setting Up Arduino IDE",
                        titleAr: "إعداد Arduino IDE",
                        type: "hands-on",
                        duration: "40 min",
                        durationAr: "40 دقيقة",
                        objectives: ["Install Arduino IDE and connect the board"],
                        objectivesAr: ["تنصيب Arduino IDE وربط اللوحة"]
                    }
                ]
            },

            {
                id: "arduino-module-2",
                order: 2,
                title: "C/C++ Programming Basics",
                titleAr: "أساسيات برمجة C/C++",
                description: "Learn programming syntax for Arduino using C/C++.",
                descriptionAr: "تعلم صياغة البرمجة للأردوينو باستخدام C/C++.",
                duration: "2 weeks",
                durationAr: "أسبوعان",
                lessons: [
                    {
                        id: "arduino-lesson-2-1",
                        order: 1,
                        title: "Variables, Data Types & Operators",
                        titleAr: "المتغيرات وأنواع البيانات والعوامل",
                        type: "video",
                        duration: "50 min",
                        durationAr: "50 دقيقة",
                        objectives: ["Use variables and operators in Arduino sketches"],
                        objectivesAr: ["استخدام المتغيرات والعوامل في برامج الأردوينو"]
                    },
                    {
                        id: "arduino-lesson-2-2",
                        order: 2,
                        title: "Control Flow: Conditions & Loops",
                        titleAr: "التحكم في سير البرنامج: الشروط والحلقات",
                        type: "hands-on",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Write conditional logic and loops in Arduino"],
                        objectivesAr: ["كتابة المنطق الشرطي والحلقات في الأردوينو"]
                    },
                    {
                        id: "arduino-lesson-2-3",
                        order: 3,
                        title: "Functions & Modular Code",
                        titleAr: "الدوال والكود المعياري",
                        type: "hands-on",
                        duration: "50 min",
                        durationAr: "50 دقيقة",
                        objectives: ["Organize code with functions"],
                        objectivesAr: ["تنظيم الكود باستخدام الدوال"]
                    }
                ]
            },

            {
                id: "arduino-module-3",
                order: 3,
                title: "Basic Hardware Projects",
                titleAr: "مشاريع الأجهزة الأساسية",
                description: "Apply electronics and programming skills in simple Arduino projects.",
                descriptionAr: "تطبيق مهارات الإلكترونيات والبرمجة في مشاريع أردوينو بسيطة.",
                duration: "2 weeks",
                durationAr: "أسبوعان",
                lessons: [
                    {
                        id: "arduino-lesson-3-1",
                        order: 1,
                        title: "LEDs and Motors",
                        titleAr: "الـ LEDs والمحركات",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Control LEDs and motors using Arduino"],
                        objectivesAr: ["التحكم في LEDs والمحركات باستخدام الأردوينو"]
                    },
                    {
                        id: "arduino-lesson-3-2",
                        order: 2,
                        title: "Sensors Basics",
                        titleAr: "أساسيات الحساسات",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Read data from basic sensors"],
                        objectivesAr: ["قراءة البيانات من الحساسات الأساسية"]
                    }
                ]
            },

            {
                id: "arduino-module-4",
                order: 4,
                title: "Intermediate Electronics & Projects",
                titleAr: "الإلكترونيات المتوسطة والمشاريع",
                description: "Combine sensors, actuators, and logic to build interactive devices.",
                descriptionAr: "دمج الحساسات والمحركات والمنطق لبناء أجهزة تفاعلية.",
                duration: "2 weeks",
                durationAr: "أسبوعان",
                lessons: [
                    {
                        id: "arduino-lesson-4-1",
                        order: 1,
                        title: "Analog & Digital Sensors",
                        titleAr: "الحساسات التناظرية والرقمية",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Use analog and digital sensors in projects"],
                        objectivesAr: ["استخدام الحساسات التناظرية والرقمية في المشاريع"]
                    },
                    {
                        id: "arduino-lesson-4-2",
                        order: 2,
                        title: "Building Interactive Circuits",
                        titleAr: "بناء دوائر تفاعلية",
                        type: "hands-on",
                        duration: "120 min",
                        durationAr: "120 دقيقة",
                        objectives: ["Combine inputs and outputs for interactive devices"],
                        objectivesAr: ["دمج المدخلات والمخرجات للأجهزة التفاعلية"]
                    }
                ]
            },

            {
                id: "arduino-module-5",
                order: 5,
                title: "IoT Integration & Advanced Projects",
                titleAr: "تكامل IoT والمشاريع المتقدمة",
                description: "Connect Arduino projects to the internet and build IoT devices.",
                descriptionAr: "ربط مشاريع الأردوينو بالإنترنت وبناء أجهزة IoT.",
                duration: "2 weeks",
                durationAr: "أسبوعان",
                lessons: [
                    {
                        id: "arduino-lesson-5-1",
                        order: 1,
                        title: "Connecting Arduino to IoT Platforms",
                        titleAr: "ربط الأردوينو بمنصات IoT",
                        type: "hands-on",
                        duration: "120 min",
                        durationAr: "120 دقيقة",
                        objectives: ["Send sensor data to cloud services"],
                        objectivesAr: ["إرسال بيانات الحساسات إلى خدمات السحابة"]
                    },
                    {
                        id: "arduino-lesson-5-2",
                        order: 2,
                        title: "Building a Complete IoT Project",
                        titleAr: "بناء مشروع IoT كامل",
                        type: "project",
                        duration: "180 min",
                        durationAr: "180 دقيقة",
                        objectives: ["Create a connected device using Arduino"],
                        objectivesAr: ["إنشاء جهاز متصل باستخدام الأردوينو"]
                    }
                ]
            },

            {
                id: "arduino-module-6",
                order: 6,
                title: "Debugging & Final Project",
                titleAr: "تصحيح الأخطاء والمشروع النهائي",
                description: "Learn to troubleshoot and finalize your Arduino & IoT projects.",
                descriptionAr: "تعلم تصحيح الأخطاء وإنهاء مشاريع الأردوينو وIoT.",
                duration: "1 week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "arduino-lesson-6-1",
                        order: 1,
                        title: "Debugging Techniques",
                        titleAr: "تقنيات تصحيح الأخطاء",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Identify and fix hardware and software issues"],
                        objectivesAr: ["تحديد وإصلاح مشاكل الأجهزة والبرمجيات"]
                    },
                    {
                        id: "arduino-lesson-6-2",
                        order: 2,
                        title: "Final Arduino & IoT Project",
                        titleAr: "المشروع النهائي للأردوينو و IoT",
                        type: "project",
                        duration: "180 min",
                        durationAr: "180 دقيقة",
                        objectives: ["Apply all learned skills in a complete project"],
                        objectivesAr: ["تطبيق جميع المهارات المكتسبة في مشروع كامل"]
                    }
                ]
            }
        ]
    },
    {
        id: "ai-engineering",
        courseModules: [
            {
                id: "ai-module-1",
                order: 1,
                title: "Introduction to AI & ML",
                titleAr: "مقدمة في الذكاء الاصطناعي والتعلم الآلي",
                description: "Understand what AI is, explore real-world applications, and learn basic ML concepts.",
                descriptionAr: "فهم ما هو الذكاء الاصطناعي، استكشاف التطبيقات العملية، وتعلم مفاهيم التعلم الآلي الأساسية.",
                duration: "1 week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "ai-lesson-1-1",
                        order: 1,
                        title: "AI Overview and Applications",
                        titleAr: "نظرة عامة على الذكاء الاصطناعي وتطبيقاته",
                        type: "video",
                        duration: "45 min",
                        durationAr: "45 دقيقة",
                        objectives: ["Understand AI domains and real-world use cases"],
                        objectivesAr: ["فهم مجالات الذكاء الاصطناعي وأمثلة عملية"],
                        isPreview: true
                    },
                    {
                        id: "ai-lesson-1-2",
                        order: 2,
                        title: "Machine Learning Basics",
                        titleAr: "أساسيات التعلم الآلي",
                        type: "hands-on",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Learn supervised, unsupervised, and reinforcement learning"],
                        objectivesAr: ["تعلم التعلم الموجه، التعلم غير الموجه، والتعلم التعزيزي"]
                    }
                ]
            },

            {
                id: "ai-module-2",
                order: 2,
                title: "Python for AI",
                titleAr: "بايثون للذكاء الاصطناعي",
                description: "Learn Python libraries and techniques essential for AI development.",
                descriptionAr: "تعلم مكتبات وتقنيات بايثون الأساسية لتطوير الذكاء الاصطناعي.",
                duration: "2 weeks",
                durationAr: "أسبوعان",
                lessons: [
                    {
                        id: "ai-lesson-2-1",
                        order: 1,
                        title: "NumPy & Pandas Basics",
                        titleAr: "أساسيات NumPy و Pandas",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Manipulate arrays and dataframes for AI tasks"],
                        objectivesAr: ["التعامل مع المصفوفات و DataFrames لمهام الذكاء الاصطناعي"]
                    },
                    {
                        id: "ai-lesson-2-2",
                        order: 2,
                        title: "Data Visualization with Matplotlib & Seaborn",
                        titleAr: "تصوير البيانات باستخدام Matplotlib و Seaborn",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Visualize datasets and understand patterns"],
                        objectivesAr: ["تصوير البيانات وفهم الأنماط"]
                    }
                ]
            },

            {
                id: "ai-module-3",
                order: 3,
                title: "Supervised & Unsupervised Learning",
                titleAr: "التعلم الموجه وغير الموجه",
                description: "Build foundational machine learning models for classification, regression, and clustering.",
                descriptionAr: "بناء نماذج التعلم الآلي الأساسية للتصنيف والانحدار والتجميع.",
                duration: "3 weeks",
                durationAr: "3 أسابيع",
                lessons: [
                    {
                        id: "ai-lesson-3-1",
                        order: 1,
                        title: "Regression & Classification Models",
                        titleAr: "نماذج الانحدار والتصنيف",
                        type: "hands-on",
                        duration: "120 min",
                        durationAr: "120 دقيقة",
                        objectives: ["Train and evaluate regression and classification models"],
                        objectivesAr: ["تدريب وتقييم نماذج الانحدار والتصنيف"]
                    },
                    {
                        id: "ai-lesson-3-2",
                        order: 2,
                        title: "Clustering & Dimensionality Reduction",
                        titleAr: "التجميع وتقليل الأبعاد",
                        type: "hands-on",
                        duration: "120 min",
                        durationAr: "120 دقيقة",
                        objectives: ["Apply K-Means, PCA, and other unsupervised methods"],
                        objectivesAr: ["تطبيق K-Means و PCA وأساليب غير موجهة أخرى"]
                    }
                ]
            },

            {
                id: "ai-module-4",
                order: 4,
                title: "Neural Networks & Deep Learning",
                titleAr: "الشبكات العصبية والتعلم العميق",
                description: "Understand neural network architectures and train simple deep learning models.",
                descriptionAr: "فهم بنية الشبكات العصبية وتدريب نماذج التعلم العميق البسيطة.",
                duration: "4 weeks",
                durationAr: "4 أسابيع",
                lessons: [
                    {
                        id: "ai-lesson-4-1",
                        order: 1,
                        title: "Introduction to Neural Networks",
                        titleAr: "مقدمة في الشبكات العصبية",
                        type: "video",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Understand neurons, layers, and activation functions"],
                        objectivesAr: ["فهم الوحدات العصبية، الطبقات، ودوال التنشيط"]
                    },
                    {
                        id: "ai-lesson-4-2",
                        order: 2,
                        title: "Deep Learning with TensorFlow/Keras",
                        titleAr: "التعلم العميق باستخدام TensorFlow/Keras",
                        type: "hands-on",
                        duration: "150 min",
                        durationAr: "150 دقيقة",
                        objectives: ["Build, train, and evaluate simple neural networks"],
                        objectivesAr: ["بناء وتدريب وتقييم الشبكات العصبية البسيطة"]
                    }
                ]
            },

            {
                id: "ai-module-5",
                order: 5,
                title: "Model Evaluation & Deployment",
                titleAr: "تقييم النماذج ونشرها",
                description: "Assess model performance and deploy AI applications.",
                descriptionAr: "تقييم أداء النماذج ونشر تطبيقات الذكاء الاصطناعي.",
                duration: "3 weeks",
                durationAr: "3 أسابيع",
                lessons: [
                    {
                        id: "ai-lesson-5-1",
                        order: 1,
                        title: "Evaluating ML Models",
                        titleAr: "تقييم نماذج التعلم الآلي",
                        type: "hands-on",
                        duration: "120 min",
                        durationAr: "120 دقيقة",
                        objectives: ["Use metrics like accuracy, precision, and recall"],
                        objectivesAr: ["استخدام مقاييس مثل الدقة، الدقة النوعية، والاسترجاع"]
                    },
                    {
                        id: "ai-lesson-5-2",
                        order: 2,
                        title: "Deploying AI Models",
                        titleAr: "نشر نماذج الذكاء الاصطناعي",
                        type: "hands-on",
                        duration: "150 min",
                        durationAr: "150 دقيقة",
                        objectives: ["Deploy models as applications or APIs"],
                        objectivesAr: ["نشر النماذج كتطبيقات أو APIs"]
                    }
                ]
            },

            {
                id: "ai-module-6",
                order: 6,
                title: "Capstone AI Project",
                titleAr: "مشروع الذكاء الاصطناعي النهائي",
                description: "Apply all concepts in a final project, from data processing to model deployment.",
                descriptionAr: "تطبيق جميع المفاهيم في المشروع النهائي، من معالجة البيانات إلى نشر النموذج.",
                duration: "3 weeks",
                durationAr: "3 أسابيع",
                lessons: [
                    {
                        id: "ai-lesson-6-1",
                        order: 1,
                        title: "AI Capstone Project",
                        titleAr: "مشروع الذكاء الاصطناعي النهائي",
                        type: "project",
                        duration: "6-8 hours",
                        durationAr: "6-8 ساعات",
                        objectives: ["Build an end-to-end AI application"],
                        objectivesAr: ["بناء تطبيق ذكاء اصطناعي كامل من البداية للنهاية"]
                    }
                ]
            }
        ]


    },
    {
        id: "computer-basics",
        courseModules: [
            {
                id: "computer-module-1",
                order: 1,
                title: "Getting Started with Computers",
                titleAr: "البدء مع الحاسوب",
                description: "Learn the basics of computer hardware, software, and operating systems.",
                descriptionAr: "تعلم أساسيات مكونات الحاسوب والبرمجيات وأنظمة التشغيل.",
                duration: "1 week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "computer-lesson-1-1",
                        order: 1,
                        title: "Computer Components Overview",
                        titleAr: "نظرة عامة على مكونات الحاسوب",
                        type: "video",
                        duration: "30 min",
                        durationAr: "30 دقيقة",
                        objectives: ["Identify hardware components and their functions"],
                        objectivesAr: ["التعرف على مكونات الحاسوب ووظائفها"],
                        isPreview: true
                    },
                    {
                        id: "computer-lesson-1-2",
                        order: 2,
                        title: "Operating Systems Basics",
                        titleAr: "أساسيات أنظمة التشغيل",
                        type: "hands-on",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Navigate Windows and Mac OS confidently"],
                        objectivesAr: ["التنقل في Windows و Mac OS بثقة"]
                    }
                ]
            },

            {
                id: "computer-module-2",
                order: 2,
                title: "File Management & Productivity",
                titleAr: "إدارة الملفات والإنتاجية",
                description: "Learn how to organize files, folders, and use basic productivity tools.",
                descriptionAr: "تعلم كيفية تنظيم الملفات والمجلدات واستخدام أدوات الإنتاجية الأساسية.",
                duration: "1 week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "computer-lesson-2-1",
                        order: 1,
                        title: "Managing Files and Folders",
                        titleAr: "إدارة الملفات والمجلدات",
                        type: "hands-on",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Create, organize, and manage files effectively"],
                        objectivesAr: ["إنشاء وتنظيم وإدارة الملفات بفعالية"]
                    },
                    {
                        id: "computer-lesson-2-2",
                        order: 2,
                        title: "Introduction to Office Applications",
                        titleAr: "مقدمة في تطبيقات المكتب",
                        type: "hands-on",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Use Word processors, Spreadsheets, and Presentation tools"],
                        objectivesAr: ["استخدام معالجات النصوص، الجداول، وأدوات العروض"]
                    }
                ]
            },

            {
                id: "computer-module-3",
                order: 3,
                title: "Internet & Communication",
                titleAr: "الإنترنت والتواصل",
                description: "Learn to browse safely, search for information, and communicate online.",
                descriptionAr: "تعلم التصفح بأمان، البحث عن المعلومات، والتواصل عبر الإنترنت.",
                duration: "2 weeks",
                durationAr: "أسبوعان",
                lessons: [
                    {
                        id: "computer-lesson-3-1",
                        order: 1,
                        title: "Internet Fundamentals",
                        titleAr: "أساسيات الإنترنت",
                        type: "hands-on",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Understand browsers, search engines, and websites"],
                        objectivesAr: ["فهم المتصفحات ومحركات البحث والمواقع"]
                    },
                    {
                        id: "computer-lesson-3-2",
                        order: 2,
                        title: "Email and Online Communication",
                        titleAr: "البريد الإلكتروني والتواصل عبر الإنترنت",
                        type: "hands-on",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Send, receive, and organize emails safely"],
                        objectivesAr: ["إرسال واستقبال وتنظيم البريد الإلكتروني بأمان"]
                    },
                    {
                        id: "computer-lesson-3-3",
                        order: 3,
                        title: "Digital Safety and Security",
                        titleAr: "السلامة والأمان الرقمي",
                        type: "hands-on",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Protect personal data and avoid online threats"],
                        objectivesAr: ["حماية البيانات الشخصية وتجنب التهديدات عبر الإنترنت"]
                    }
                ]
            },

            {
                id: "computer-module-4",
                order: 4,
                title: "Basic Troubleshooting & Practice",
                titleAr: "استكشاف الأخطاء الأساسية والممارسة",
                description: "Learn how to troubleshoot common computer problems and practice daily tasks.",
                descriptionAr: "تعلم كيفية استكشاف مشاكل الحاسوب الشائعة وممارسة المهام اليومية.",
                duration: "2 weeks",
                durationAr: "أسبوعان",
                lessons: [
                    {
                        id: "computer-lesson-4-1",
                        order: 1,
                        title: "Common Issues and Fixes",
                        titleAr: "المشاكل الشائعة وحلولها",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Identify and fix basic software and hardware issues"],
                        objectivesAr: ["تحديد وإصلاح مشاكل البرمجيات والأجهزة الأساسية"]
                    },
                    {
                        id: "computer-lesson-4-2",
                        order: 2,
                        title: "Practical Exercises",
                        titleAr: "تمارين عملية",
                        type: "project",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Perform common daily tasks confidently"],
                        objectivesAr: ["أداء المهام اليومية الشائعة بثقة"]
                    }
                ]
            }
        ]


    },
    {
        id: "office-applications",
        courseModules: [
            {
                id: "office-module-1",
                order: 1,
                title: "Introduction to Office Tools",
                titleAr: "مقدمة في أدوات المكتب",
                description: "Learn about the essential office applications and cloud-based productivity tools.",
                descriptionAr: "تعلم حول التطبيقات المكتبية الأساسية وأدوات الإنتاجية السحابية.",
                duration: "1 week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "office-lesson-1-1",
                        order: 1,
                        title: "Overview of Microsoft Office",
                        titleAr: "نظرة عامة على Microsoft Office",
                        type: "video",
                        duration: "45 min",
                        durationAr: "45 دقيقة",
                        objectives: ["Understand MS Office components and their uses"],
                        objectivesAr: ["فهم مكونات Microsoft Office واستخداماتها"],
                        isPreview: true
                    },
                    {
                        id: "office-lesson-1-2",
                        order: 2,
                        title: "Introduction to Google Workspace",
                        titleAr: "مقدمة في Google Workspace",
                        type: "hands-on",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Learn cloud collaboration and productivity basics"],
                        objectivesAr: ["تعلم أساسيات التعاون والإنتاجية السحابية"]
                    }
                ]
            },

            {
                id: "office-module-2",
                order: 2,
                title: "Word Processing with MS Word & Docs",
                titleAr: "معالجة النصوص باستخدام MS Word و Docs",
                description: "Create professional documents, format text, and use advanced features for productivity.",
                descriptionAr: "إنشاء مستندات احترافية، تنسيق النصوص، واستخدام الميزات المتقدمة للإنتاجية.",
                duration: "2 weeks",
                durationAr: "أسبوعان",
                lessons: [
                    {
                        id: "office-lesson-2-1",
                        order: 1,
                        title: "Creating & Formatting Documents",
                        titleAr: "إنشاء وتنسيق المستندات",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Format text, paragraphs, and use styles effectively"],
                        objectivesAr: ["تنسيق النصوص والفقرات واستخدام الأنماط بفعالية"]
                    },
                    {
                        id: "office-lesson-2-2",
                        order: 2,
                        title: "Tables, Images & Advanced Features",
                        titleAr: "الجداول والصور والميزات المتقدمة",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Insert tables, images, and utilize templates & references"],
                        objectivesAr: ["إدراج الجداول والصور واستخدام القوالب والمراجع"]
                    }
                ]
            },

            {
                id: "office-module-3",
                order: 3,
                title: "Spreadsheets with MS Excel & Google Sheets",
                titleAr: "الجداول الإلكترونية باستخدام MS Excel و Sheets",
                description: "Learn to build spreadsheets, perform calculations, and visualize data effectively.",
                descriptionAr: "تعلم إنشاء الجداول الإلكترونية، إجراء الحسابات، وتصوير البيانات بفعالية.",
                duration: "2 weeks",
                durationAr: "أسبوعان",
                lessons: [
                    {
                        id: "office-lesson-3-1",
                        order: 1,
                        title: "Excel Basics & Formulas",
                        titleAr: "أساسيات Excel والصيغ",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Use formulas, functions, and organize spreadsheet data"],
                        objectivesAr: ["استخدام الصيغ والدوال وتنظيم بيانات الجداول"]
                    },
                    {
                        id: "office-lesson-3-2",
                        order: 2,
                        title: "Data Analysis & Charts",
                        titleAr: "تحليل البيانات والرسوم البيانية",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Create charts and analyze data trends"],
                        objectivesAr: ["إنشاء الرسوم البيانية وتحليل اتجاهات البيانات"]
                    }
                ]
            },

            {
                id: "office-module-4",
                order: 4,
                title: "Presentations with PowerPoint & Slides",
                titleAr: "العروض التقديمية باستخدام PowerPoint و Slides",
                description: "Design professional presentations with visuals, animations, and collaboration tools.",
                descriptionAr: "تصميم عروض تقديمية احترافية باستخدام الرسوم والصور المتحركة وأدوات التعاون.",
                duration: "1 week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "office-lesson-4-1",
                        order: 1,
                        title: "Creating Presentations",
                        titleAr: "إنشاء العروض التقديمية",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Design slides, add visuals, and format effectively"],
                        objectivesAr: ["تصميم الشرائح، إضافة الرسوم، والتنسيق بفعالية"]
                    },
                    {
                        id: "office-lesson-4-2",
                        order: 2,
                        title: "Advanced Presentation Techniques",
                        titleAr: "تقنيات العروض التقديمية المتقدمة",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Add animations, transitions, and collaborate online"],
                        objectivesAr: ["إضافة الرسوم المتحركة، الانتقالات، والتعاون عبر الإنترنت"]
                    }
                ]
            },

            {
                id: "office-module-5",
                order: 5,
                title: "Collaboration & Productivity Tools",
                titleAr: "أدوات التعاون والإنتاجية",
                description: "Master cloud-based collaboration using Google Workspace and Microsoft Office 365.",
                descriptionAr: "إتقان التعاون السحابي باستخدام Google Workspace و Microsoft Office 365.",
                duration: "2 weeks",
                durationAr: "أسبوعان",
                lessons: [
                    {
                        id: "office-lesson-5-1",
                        order: 1,
                        title: "Collaborating with Cloud Tools",
                        titleAr: "التعاون باستخدام أدوات السحابة",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Work with shared documents, sheets, and presentations"],
                        objectivesAr: ["العمل على مستندات وجداول وعروض تقديمية مشتركة"]
                    },
                    {
                        id: "office-lesson-5-2",
                        order: 2,
                        title: "Time Management & Productivity Tips",
                        titleAr: "إدارة الوقت ونصائح الإنتاجية",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Use calendar, tasks, and collaboration tools effectively"],
                        objectivesAr: ["استخدام التقويم والمهام وأدوات التعاون بفعالية"]
                    }
                ]
            }

        ]
    },
    {
        id: "data-analysis",
        courseModules: [
            {
                id: "data-module-1",
                order: 1,
                title: "Introduction to Data Analysis",
                titleAr: "مقدمة في تحليل البيانات",
                description: "Understand the role of data analysis, types of data, and the Python tools used for analysis.",
                descriptionAr: "فهم دور تحليل البيانات وأنواع البيانات وأدوات بايثون المستخدمة في التحليل.",
                duration: "1 week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "data-lesson-1-1",
                        order: 1,
                        title: "Data Analysis Concepts",
                        titleAr: "مفاهيم تحليل البيانات",
                        type: "video",
                        duration: "45 min",
                        durationAr: "45 دقيقة",
                        objectives: ["Understand the data analysis workflow and key concepts"],
                        objectivesAr: ["فهم خطوات التحليل ومفاهيمه الأساسية"],
                        isPreview: true
                    },
                    {
                        id: "data-lesson-1-2",
                        order: 2,
                        title: "Python Tools for Data Analysis",
                        titleAr: "أدوات بايثون لتحليل البيانات",
                        type: "hands-on",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Get familiar with Pandas, NumPy, and Matplotlib"],
                        objectivesAr: ["التعرف على Pandas و NumPy و Matplotlib"]
                    }
                ]
            },

            {
                id: "data-module-2",
                order: 2,
                title: "Data Cleaning & Preparation",
                titleAr: "تنظيف وتجهيز البيانات",
                description: "Learn to clean datasets, handle missing values, and prepare data for analysis.",
                descriptionAr: "تعلم تنظيف مجموعات البيانات، معالجة القيم المفقودة، وتجهيز البيانات للتحليل.",
                duration: "2 weeks",
                durationAr: "أسبوعان",
                lessons: [
                    {
                        id: "data-lesson-2-1",
                        order: 1,
                        title: "Handling Missing Data",
                        titleAr: "التعامل مع البيانات المفقودة",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Identify and fix missing or inconsistent data"],
                        objectivesAr: ["تحديد ومعالجة البيانات المفقودة أو غير المتناسقة"]
                    },
                    {
                        id: "data-lesson-2-2",
                        order: 2,
                        title: "Data Transformation & Cleaning",
                        titleAr: "تحويل وتنظيف البيانات",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Prepare datasets for analysis and visualization"],
                        objectivesAr: ["تجهيز مجموعات البيانات للتحليل والتصور البياني"]
                    }
                ]
            },

            {
                id: "data-module-3",
                order: 3,
                title: "Exploratory Data Analysis (EDA)",
                titleAr: "التحليل الاستكشافي للبيانات",
                description: "Explore datasets, detect patterns, and summarize insights using Python libraries.",
                descriptionAr: "استكشاف مجموعات البيانات، اكتشاف الأنماط، وتلخيص النتائج باستخدام مكتبات بايثون.",
                duration: "3 weeks",
                durationAr: "3 أسابيع",
                lessons: [
                    {
                        id: "data-lesson-3-1",
                        order: 1,
                        title: "Descriptive Statistics",
                        titleAr: "الإحصاءات الوصفية",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Summarize data using mean, median, mode, and standard deviation"],
                        objectivesAr: ["تلخيص البيانات باستخدام المتوسط، الوسيط، الوضع، والانحراف المعياري"]
                    },
                    {
                        id: "data-lesson-3-2",
                        order: 2,
                        title: "Data Visualization Basics",
                        titleAr: "أساسيات تصوير البيانات",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Create charts using Matplotlib and Seaborn"],
                        objectivesAr: ["إنشاء الرسوم البيانية باستخدام Matplotlib و Seaborn"]
                    },
                    {
                        id: "data-lesson-3-3",
                        order: 3,
                        title: "Detecting Patterns and Trends",
                        titleAr: "اكتشاف الأنماط والاتجاهات",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Identify patterns, correlations, and insights in datasets"],
                        objectivesAr: ["تحديد الأنماط والارتباطات والاستنتاجات في مجموعات البيانات"]
                    }
                ]
            },

            {
                id: "data-module-4",
                order: 4,
                title: "Advanced Data Visualization",
                titleAr: "تصوير البيانات المتقدم",
                description: "Learn advanced visualization techniques and storytelling with data.",
                descriptionAr: "تعلم تقنيات التصوير المتقدمة وسرد القصص باستخدام البيانات.",
                duration: "2 weeks",
                durationAr: "أسبوعان",
                lessons: [
                    {
                        id: "data-lesson-4-1",
                        order: 1,
                        title: "Custom Charts & Plots",
                        titleAr: "الرسوم البيانية المخصصة",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Create customized and interactive visualizations"],
                        objectivesAr: ["إنشاء تصورات مخصصة وتفاعلية"]
                    },
                    {
                        id: "data-lesson-4-2",
                        order: 2,
                        title: "Storytelling with Data",
                        titleAr: "سرد القصص باستخدام البيانات",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Present insights clearly using charts and dashboards"],
                        objectivesAr: ["عرض النتائج بوضوح باستخدام الرسوم البيانية ولوحات المعلومات"]
                    }
                ]
            },

            {
                id: "data-module-5",
                order: 5,
                title: "Capstone Data Project",
                titleAr: "مشروع البيانات النهائي",
                description: "Apply all concepts in a real-world dataset analysis project.",
                descriptionAr: "تطبيق جميع المفاهيم في مشروع تحليل بيانات حقيقي.",
                duration: "4 weeks",
                durationAr: "4 أسابيع",
                lessons: [
                    {
                        id: "data-lesson-5-1",
                        order: 1,
                        title: "Real-World Data Analysis Project",
                        titleAr: "مشروع تحليل بيانات حقيقي",
                        type: "project",
                        duration: "6-8 hours",
                        durationAr: "6-8 ساعات",
                        objectives: ["Clean, analyze, and visualize a dataset end-to-end"],
                        objectivesAr: ["تنظيف وتحليل وتصوير مجموعة بيانات من البداية للنهاية"]
                    }
                ]
            }

        ]
    },
    {
        id: "cybersecurity-fundamentals",
        courseModules: [
            {
                id: "cyber-module-1",
                order: 1,
                title: "Introduction to Cybersecurity",
                titleAr: "مقدمة في الأمن السيبراني",
                description: "Understand what cybersecurity is, its importance, and key concepts.",
                descriptionAr: "فهم ما هو الأمن السيبراني وأهميته والمفاهيم الأساسية له.",
                duration: "1 week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "cyber-lesson-1-1",
                        order: 1,
                        title: "Cybersecurity Overview",
                        titleAr: "نظرة عامة على الأمن السيبراني",
                        type: "video",
                        duration: "45 min",
                        durationAr: "45 دقيقة",
                        objectives: ["Understand cybersecurity concepts and scope"],
                        objectivesAr: ["فهم مفاهيم الأمن السيبراني ونطاقه"],
                        isPreview: true
                    },
                    {
                        id: "cyber-lesson-1-2",
                        order: 2,
                        title: "Cybersecurity Importance",
                        titleAr: "أهمية الأمن السيبراني",
                        type: "video",
                        duration: "45 min",
                        durationAr: "45 دقيقة",
                        objectives: ["Recognize the significance of protecting systems and data"],
                        objectivesAr: ["التعرف على أهمية حماية الأنظمة والبيانات"]
                    }
                ]
            },

            {
                id: "cyber-module-2",
                order: 2,
                title: "Common Cyber Threats",
                titleAr: "التهديدات السيبرانية الشائعة",
                description: "Learn about common attack types, malware, phishing, and social engineering.",
                descriptionAr: "تعلم أنواع الهجمات الشائعة، البرامج الضارة، الاحتيال الإلكتروني، والهندسة الاجتماعية.",
                duration: "2 weeks",
                durationAr: "أسبوعان",
                lessons: [
                    {
                        id: "cyber-lesson-2-1",
                        order: 1,
                        title: "Malware & Viruses",
                        titleAr: "البرمجيات الضارة والفيروسات",
                        type: "hands-on",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Identify malware types and effects"],
                        objectivesAr: ["التعرف على أنواع البرمجيات الضارة وتأثيرها"]
                    },
                    {
                        id: "cyber-lesson-2-2",
                        order: 2,
                        title: "Phishing & Social Engineering",
                        titleAr: "الاحتيال الإلكتروني والهندسة الاجتماعية",
                        type: "hands-on",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Detect phishing attempts and social engineering attacks"],
                        objectivesAr: ["التعرف على محاولات الاحتيال والهجمات الهندسية الاجتماعية"]
                    }
                ]
            },

            {
                id: "cyber-module-3",
                order: 3,
                title: "Network Security Basics",
                titleAr: "أساسيات أمن الشبكات",
                description: "Learn the fundamentals of protecting networks, firewalls, and secure connections.",
                descriptionAr: "تعلم أساسيات حماية الشبكات والجدران النارية والاتصالات الآمنة.",
                duration: "2 weeks",
                durationAr: "أسبوعان",
                lessons: [
                    {
                        id: "cyber-lesson-3-1",
                        order: 1,
                        title: "Network Components & Security",
                        titleAr: "مكونات الشبكة والأمن",
                        type: "hands-on",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Understand routers, firewalls, and network protection methods"],
                        objectivesAr: ["فهم أجهزة التوجيه والجدران النارية وطرق حماية الشبكة"]
                    },
                    {
                        id: "cyber-lesson-3-2",
                        order: 2,
                        title: "Safe Internet Practices",
                        titleAr: "ممارسات الإنترنت الآمنة",
                        type: "hands-on",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Apply safe browsing and connection practices"],
                        objectivesAr: ["تطبيق ممارسات التصفح والاتصال الآمنة"]
                    }
                ]
            },

            {
                id: "cyber-module-4",
                order: 4,
                title: "Password Management & Personal Security",
                titleAr: "إدارة كلمات المرور والأمن الشخصي",
                description: "Learn how to create strong passwords, manage them, and protect personal information online.",
                descriptionAr: "تعلم كيفية إنشاء كلمات مرور قوية، إدارتها، وحماية المعلومات الشخصية عبر الإنترنت.",
                duration: "1 week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "cyber-lesson-4-1",
                        order: 1,
                        title: "Creating Strong Passwords",
                        titleAr: "إنشاء كلمات مرور قوية",
                        type: "hands-on",
                        duration: "45 min",
                        durationAr: "45 دقيقة",
                        objectives: ["Generate secure passwords and store them safely"],
                        objectivesAr: ["إنشاء كلمات مرور آمنة وتخزينها بشكل آمن"]
                    },
                    {
                        id: "cyber-lesson-4-2",
                        order: 2,
                        title: "Protecting Personal Information",
                        titleAr: "حماية المعلومات الشخصية",
                        type: "hands-on",
                        duration: "45 min",
                        durationAr: "45 دقيقة",
                        objectives: ["Learn best practices for personal data security"],
                        objectivesAr: ["تعلم أفضل الممارسات لحماية البيانات الشخصية"]
                    }
                ]
            },

            {
                id: "cyber-module-5",
                order: 5,
                title: "Practical Cybersecurity Practices",
                titleAr: "ممارسات الأمن السيبراني العملية",
                description: "Apply learned concepts in simulated scenarios and exercises.",
                descriptionAr: "تطبيق المفاهيم المكتسبة في سيناريوهات وتمارين محاكاة.",
                duration: "2 weeks",
                durationAr: "أسبوعان",
                lessons: [
                    {
                        id: "cyber-lesson-5-1",
                        order: 1,
                        title: "Simulated Security Exercises",
                        titleAr: "تمارين أمنية محاكاة",
                        type: "project",
                        duration: "2 hours",
                        durationAr: "ساعتان",
                        objectives: ["Practice defending against common attacks"],
                        objectivesAr: ["ممارسة الدفاع ضد الهجمات الشائعة"]
                    },
                    {
                        id: "cyber-lesson-5-2",
                        order: 2,
                        title: "Review & Best Practices",
                        titleAr: "المراجعة وأفضل الممارسات",
                        type: "hands-on",
                        duration: "2 hours",
                        durationAr: "ساعتان",
                        objectives: ["Reinforce learning and establish daily security habits"],
                        objectivesAr: ["تعزيز التعلم وتبني عادات أمان يومية"]
                    }
                ]
            }

        ]
    },
    {
        id: "problem-solving-basics",
        courseModules: [
            {
                id: "ps-module-1",
                order: 1,
                title: "Introduction to Problem Solving",
                titleAr: "مقدمة في حل المشكلات",
                description: "Learn what problem solving is and why computational thinking is important.",
                descriptionAr: "تعلم ما هو حل المشكلات ولماذا التفكير الحاسوبي مهم.",
                duration: "1 week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "ps-lesson-1-1",
                        order: 1,
                        title: "Problem Solving Concepts",
                        titleAr: "مفاهيم حل المشكلات",
                        type: "video",
                        duration: "45 min",
                        durationAr: "45 دقيقة",
                        objectives: ["Understand the importance of logical problem solving"],
                        objectivesAr: ["فهم أهمية حل المشكلات بطريقة منطقية"],
                        isPreview: true
                    },
                    {
                        id: "ps-lesson-1-2",
                        order: 2,
                        title: "Computational Thinking Overview",
                        titleAr: "نظرة عامة على التفكير الحاسوبي",
                        type: "video",
                        duration: "45 min",
                        durationAr: "45 دقيقة",
                        objectives: ["Learn about algorithmic thinking and its benefits"],
                        objectivesAr: ["تعلم التفكير الخوارزمي وفوائده"]
                    }
                ]
            },

            {
                id: "ps-module-2",
                order: 2,
                title: "Analyzing & Decomposing Problems",
                titleAr: "تحليل وتقسيم المشكلات",
                description: "Learn to break problems into manageable parts and understand requirements.",
                descriptionAr: "تعلم كيفية تقسيم المشكلات إلى أجزاء قابلة للإدارة وفهم المتطلبات.",
                duration: "1 week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "ps-lesson-2-1",
                        order: 1,
                        title: "Problem Analysis",
                        titleAr: "تحليل المشكلة",
                        type: "hands-on",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Identify problem constraints and goals"],
                        objectivesAr: ["تحديد قيود وأهداف المشكلة"]
                    },
                    {
                        id: "ps-lesson-2-2",
                        order: 2,
                        title: "Problem Decomposition",
                        titleAr: "تقسيم المشكلة",
                        type: "hands-on",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Break problems into smaller, solvable components"],
                        objectivesAr: ["تقسيم المشكلات إلى أجزاء صغيرة قابلة للحل"]
                    }
                ]
            },

            {
                id: "ps-module-3",
                order: 3,
                title: "Designing Solutions with Algorithms",
                titleAr: "تصميم الحلول باستخدام الخوارزميات",
                description: "Learn to represent solutions using step-by-step algorithms.",
                descriptionAr: "تعلم تمثيل الحلول باستخدام الخوارزميات خطوة بخطوة.",
                duration: "1 week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "ps-lesson-3-1",
                        order: 1,
                        title: "Algorithm Basics",
                        titleAr: "أساسيات الخوارزميات",
                        type: "hands-on",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Understand how to design algorithms for problem solving"],
                        objectivesAr: ["فهم كيفية تصميم الخوارزميات لحل المشكلات"]
                    },
                    {
                        id: "ps-lesson-3-2",
                        order: 2,
                        title: "Flowcharts & Pseudocode",
                        titleAr: "المخططات الانسيابية والكود الزائف",
                        type: "hands-on",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Represent solutions visually and textually using flowcharts and pseudocode"],
                        objectivesAr: ["تمثيل الحلول بصرياً ونصياً باستخدام المخططات الانسيابية والكود الزائف"]
                    }
                ]
            },

            {
                id: "ps-module-4",
                order: 4,
                title: "Applying Computational Thinking",
                titleAr: "تطبيق التفكير الحاسوبي",
                description: "Solve sample problems using logical steps, algorithms, and pseudocode.",
                descriptionAr: "حل مشكلات نموذجية باستخدام خطوات منطقية وخوارزميات وكود زائف.",
                duration: "1 week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "ps-lesson-4-1",
                        order: 1,
                        title: "Practical Exercises",
                        titleAr: "تمارين عملية",
                        type: "project",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Apply learned problem-solving techniques to real scenarios"],
                        objectivesAr: ["تطبيق تقنيات حل المشكلات المكتسبة على سيناريوهات حقيقية"]
                    },
                    {
                        id: "ps-lesson-4-2",
                        order: 2,
                        title: "Review & Next Steps",
                        titleAr: "المراجعة والخطوات التالية",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Consolidate computational thinking skills and prepare for programming courses"],
                        objectivesAr: ["تعزيز مهارات التفكير الحاسوبي والاستعداد لدورات البرمجة"]
                    }
                ]
            }
        ]
    },
    {
        id: "capstone-project",
        courseModules: [
            {
                id: "capstone-module-1",
                order: 1,
                title: "Project Planning & Design",
                titleAr: "تخطيط وتصميم المشروع",
                description: "Learn to analyze requirements, create wireframes, and set up the project environment.",
                descriptionAr: "تعلم تحليل المتطلبات، تصميم الواجهات الأساسية، وإعداد بيئة المشروع.",
                duration: "3 weeks",
                durationAr: "3 أسابيع",
                lessons: [
                    {
                        id: "capstone-lesson-1-1",
                        order: 1,
                        title: "Requirements Analysis",
                        titleAr: "تحليل المتطلبات",
                        type: "hands-on",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Identify project requirements and define scope"],
                        objectivesAr: ["تحديد متطلبات المشروع وتعريف نطاقه"]
                    },
                    {
                        id: "capstone-lesson-1-2",
                        order: 2,
                        title: "Wireframing & UI Planning",
                        titleAr: "تصميم واجهات المشروع",
                        type: "hands-on",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Create wireframes and UI mockups for project features"],
                        objectivesAr: ["إنشاء مخططات أولية وتصميم واجهات للمشروع"]
                    },
                    {
                        id: "capstone-lesson-1-3",
                        order: 3,
                        title: "Project Setup",
                        titleAr: "إعداد المشروع",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Set up the development environment and version control"],
                        objectivesAr: ["إعداد بيئة التطوير والتحكم بالإصدارات"]
                    }
                ]
            },

            {
                id: "capstone-module-2",
                order: 2,
                title: "Development & Deployment",
                titleAr: "التطوير والنشر",
                description: "Implement, test, and deploy your project, applying professional coding practices.",
                descriptionAr: "تنفيذ المشروع، اختباره، ونشره مع تطبيق أفضل ممارسات البرمجة الاحترافية.",
                duration: "3 weeks",
                durationAr: "3 أسابيع",
                lessons: [
                    {
                        id: "capstone-lesson-2-1",
                        order: 1,
                        title: "Coding the Project",
                        titleAr: "كتابة كود المشروع",
                        type: "hands-on",
                        duration: "120 min",
                        durationAr: "120 دقيقة",
                        objectives: ["Implement all project features following best practices"],
                        objectivesAr: ["تنفيذ جميع ميزات المشروع وفق أفضل الممارسات"]
                    },
                    {
                        id: "capstone-lesson-2-2",
                        order: 2,
                        title: "Testing & Debugging",
                        titleAr: "الاختبار وتصحيح الأخطاء",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Test functionality, debug issues, and ensure reliability"],
                        objectivesAr: ["اختبار الوظائف، تصحيح الأخطاء، وضمان موثوقية المشروع"]
                    },
                    {
                        id: "capstone-lesson-2-3",
                        order: 3,
                        title: "Deployment Strategies",
                        titleAr: "استراتيجيات النشر",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Deploy the project to production or showcase environment"],
                        objectivesAr: ["نشر المشروع على بيئة الإنتاج أو للعرض"]
                    }
                ]
            }
        ]
    },
    {
        id: "plc-industrial-automation",
        courseModules: [
            {
                id: "m0",
                order: 0,
                title: "Course Overview & Learning Objectives",
                titleAr: "نظرة عامة على الدورة والأهداف التعليمية",
                description: "Introduction, tools, standards, and career paths.",
                descriptionAr: "مقدمة، الأدوات، المعايير، والمسارات المهنية.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m0l1",
                        order: 1,
                        title: "Introduction to Industrial Automation",
                        titleAr: "مقدمة في الأتمتة الصناعية",
                        type: "video",
                        duration: "45 min",
                        durationAr: "45 دقيقة",
                        objectives: ["Understand automation scope and applications"],
                        objectivesAr: ["فهم نطاق وتطبيقات الأتمتة"]
                    },
                    {
                        id: "m0l2",
                        order: 2,
                        title: "Career Paths in Industrial Automation",
                        titleAr: "المسارات المهنية في الأتمتة الصناعية",
                        type: "article",
                        duration: "30 min",
                        durationAr: "30 دقيقة",
                        objectives: ["Identify automation career roles"],
                        objectivesAr: ["التعرف على الوظائف في مجال الأتمتة"]
                    },
                    {
                        id: "m0l3",
                        order: 3,
                        title: "Automation System Architecture",
                        titleAr: "بنية أنظمة الأتمتة الصناعية",
                        type: "video",
                        duration: "45 min",
                        durationAr: "45 دقيقة",
                        objectives: ["Understand end-to-end automation architecture"],
                        objectivesAr: ["فهم البنية الكاملة لأنظمة الأتمتة"]
                    }

                ]
            },
            {
                id: "m1",
                order: 1,
                title: "Fundamentals of Industrial Automation",
                titleAr: "أساسيات الأتمتة الصناعية",
                description:
                    "Core concepts and structures of industrial automation systems.",
                descriptionAr:
                    "المفاهيم الأساسية وبنية أنظمة الأتمتة الصناعية.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m1l1",
                        order: 1,
                        title: "Evolution of Automation Systems",
                        titleAr: "تطور أنظمة الأتمتة",
                        type: "article",
                        duration: "30 min",
                        durationAr: "30 دقيقة",
                        objectives: ["Understand automation history"],
                        objectivesAr: ["فهم تاريخ الأتمتة"]
                    },
                    {
                        id: "m1l2",
                        order: 2,
                        title: "Automation Pyramid",
                        titleAr: "هرم الأتمتة الصناعية",
                        type: "video",
                        duration: "45 min",
                        durationAr: "45 دقيقة",
                        objectives: ["Identify automation levels"],
                        objectivesAr: ["التعرف على مستويات الأتمتة"]
                    },
                    {
                        id: "m1l3",
                        order: 3,
                        title: "Discrete vs Continuous Processes",
                        titleAr: "العمليات المتقطعة والمستمرة",
                        type: "video",
                        duration: "40 min",
                        durationAr: "40 دقيقة",
                        objectives: ["Differentiate control process types"],
                        objectivesAr: ["التمييز بين أنواع العمليات"]
                    },
                    {
                        id: "m1l4",
                        order: 4,
                        title: "Open-loop and Closed-loop Control",
                        titleAr: "التحكم المفتوح والمغلق",
                        type: "video",
                        duration: "40 min",
                        durationAr: "40 دقيقة",
                        objectives: ["Understand feedback control systems"],
                        objectivesAr: ["فهم أنظمة التحكم ذات التغذية الراجعة"]
                    }
                ]
            },

            {
                id: "m2",
                order: 2,
                title: "Electrical & Control Basics",
                titleAr: "أساسيات الكهرباء والتحكم",
                description:
                    "Electrical principles used in industrial control systems.",
                descriptionAr:
                    "المبادئ الكهربائية المستخدمة في أنظمة التحكم الصناعية.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m2l1",
                        order: 1,
                        title: "Basic Electrical Concepts",
                        titleAr: "المفاهيم الكهربائية الأساسية",
                        type: "video",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Understand AC/DC concepts"],
                        objectivesAr: ["فهم التيار المتردد والمستمر"]
                    },
                    {
                        id: "m2l2",
                        order: 2,
                        title: "Sensors and Actuators",
                        titleAr: "الحساسات والمشغلات",
                        type: "hands-on",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Identify industrial sensors"],
                        objectivesAr: ["التعرف على الحساسات الصناعية"]
                    },
                    {
                        id: "m2l3",
                        order: 3,
                        title: "Relays, Contactors, and Timers",
                        titleAr: "الريلايات والكونتاكتورات والمؤقتات",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Use industrial switching devices"],
                        objectivesAr: ["استخدام أجهزة التحكم الكهربائية"]
                    },
                    {
                        id: "m2l4",
                        order: 4,
                        title: "Reading Electrical Schematics",
                        titleAr: "قراءة المخططات الكهربائية",
                        type: "hands-on",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Interpret control diagrams"],
                        objectivesAr: ["قراءة مخططات التحكم"]
                    },
                    {
                        id: "m2l5",
                        order: 5,
                        title: "Control Panels and Wiring Standards",
                        titleAr: "لوحات التحكم ومعايير التوصيل",
                        type: "article",
                        duration: "45 min",
                        durationAr: "45 دقيقة",
                        objectives: ["Understand industrial wiring and panel standards"],
                        objectivesAr: ["فهم معايير التوصيل ولوحات التحكم"]
                    }

                ]
            },

            {
                id: "m3",
                order: 3,
                title: "Introduction to PLCs",
                titleAr: "مقدمة إلى PLC",
                description:
                    "Understanding PLC hardware and operation principles.",
                descriptionAr:
                    "فهم مكونات PLC ومبادئ التشغيل.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m3l1",
                        order: 1,
                        title: "What is a PLC?",
                        titleAr: "ما هو PLC؟",
                        type: "video",
                        duration: "45 min",
                        durationAr: "45 دقيقة",
                        objectives: ["Define PLC systems"],
                        objectivesAr: ["تعريف أنظمة PLC"]
                    },
                    {
                        id: "m3l2",
                        order: 2,
                        title: "PLC Hardware Components",
                        titleAr: "مكونات PLC",
                        type: "article",
                        duration: "40 min",
                        durationAr: "40 دقيقة",
                        objectives: ["Identify PLC components"],
                        objectivesAr: ["التعرف على مكونات PLC"]
                    },
                    {
                        id: "m3l3",
                        order: 3,
                        title: "PLC Scan Cycle and Memory",
                        titleAr: "دورة المسح والذاكرة في PLC",
                        type: "video",
                        duration: "45 min",
                        durationAr: "45 دقيقة",
                        objectives: ["Understand PLC execution cycle"],
                        objectivesAr: ["فهم دورة تنفيذ PLC"]
                    },
                    {
                        id: "m3l4",
                        order: 4,
                        title: "Popular PLC Brands Overview",
                        titleAr: "نظرة عامة على أشهر أنواع PLC",
                        type: "article",
                        duration: "30 min",
                        durationAr: "30 دقيقة",
                        objectives: ["Identify major PLC vendors"],
                        objectivesAr: ["التعرف على الشركات المصنعة"]
                    },
                    {
                        "id": "m3l5",
                        "order": 5,
                        "title": "PLC Software Setup and Navigation",
                        "titleAr": "إعداد برنامج PLC والتنقل فيه",
                        "type": "hands-on",
                        "duration": "90 min",
                        "durationAr": "90 دقيقة",
                        "objectives": ["Install PLC IDE", "Navigate PLC programming environment", "Create a simple test project"],
                        "objectivesAr": ["تثبيت بيئة برمجة PLC", "التنقل في بيئة البرمجة", "إنشاء مشروع تجريبي بسيط"]
                    }

                ]
            },

            {
                id: "m4",
                order: 4,
                title: "PLC Programming Basics",
                titleAr: "أساسيات برمجة PLC",
                description:
                    "Introduction to ladder logic and basic PLC instructions.",
                descriptionAr:
                    "مقدمة في مخططات السلم وتعليمات PLC الأساسية.",
                duration: "2 Weeks",
                durationAr: "أسبوعان",
                lessons: [
                    {
                        id: "m4l1",
                        order: 1,
                        title: "Ladder Logic Fundamentals",
                        titleAr: "أساسيات مخطط السلم",
                        type: "video",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Create basic ladder programs"],
                        objectivesAr: ["إنشاء برامج سلمية أساسية"]
                    },
                    {
                        id: "m4l2",
                        order: 2,
                        title: "Timers and Counters",
                        titleAr: "المؤقتات والعدادات",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Use timers and counters"],
                        objectivesAr: ["استخدام المؤقتات والعدادات"]
                    },
                    {
                        id: "m4l3",
                        order: 3,
                        title: "IEC 61131-3 Programming Languages",
                        titleAr: "لغات برمجة PLC القياسية",
                        type: "video",
                        duration: "45 min",
                        durationAr: "45 دقيقة",
                        objectives: ["Understand PLC programming standards"],
                        objectivesAr: ["فهم معايير برمجة PLC"]
                    },
                    {
                        id: "m4l4",
                        order: 4,
                        title: "Contacts, Coils, and Interlocks",
                        titleAr: "الكونتاكتات والملفات والتشابك",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Build safe ladder logic circuits"],
                        objectivesAr: ["إنشاء دوائر تحكم آمنة"]
                    },
                    {
                        "id": "m4l5",
                        "order": 5,
                        "title": "Digital I/O and Wiring Practices",
                        "titleAr": "الإشارات الرقمية وممارسات التوصيل",
                        "type": "hands-on",
                        "duration": "90 min",
                        "durationAr": "90 دقيقة",
                        "objectives": ["Understand digital inputs and outputs", "Wire digital I/O safely", "Test digital signals in PLC"],
                        "objectivesAr": ["فهم الإشارات الرقمية", "توصيل الإشارات الرقمية بأمان", "اختبار الإشارات الرقمية في PLC"]
                    },
                ]
            },

            {
                id: "m5",
                order: 5,
                title: "Advanced PLC Programming",
                titleAr: "برمجة PLC المتقدمة",
                description:
                    "Advanced logic, data handling, and diagnostics.",
                descriptionAr:
                    "المنطق المتقدم ومعالجة البيانات والتشخيص.",
                duration: "2 Weeks",
                durationAr: "أسبوعان",
                lessons: [
                    {
                        id: "m5l1",
                        order: 1,
                        title: "Analog I/O and Scaling",
                        titleAr: "الإشارات التناظرية والمعايرة",
                        type: "video",
                        duration: "75 min",
                        durationAr: "75 دقيقة",
                        objectives: ["Handle analog signals"],
                        objectivesAr: ["التعامل مع الإشارات التناظرية"]
                    },
                    {
                        id: "m5l2",
                        order: 2,
                        title: "Arithmetic, Logic, and Data Operations",
                        titleAr: "العمليات الحسابية والمنطقية ومعالجة البيانات",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Perform arithmetic and logical PLC operations"],
                        objectivesAr: ["تنفيذ العمليات الحسابية والمنطقية في PLC"]
                    },
                    {
                        id: "m5l3",
                        order: 3,
                        title: "Function Blocks and Modular Programming",
                        titleAr: "البلوكات الوظيفية والبرمجة المعيارية",
                        type: "video",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Build reusable PLC logic"],
                        objectivesAr: ["بناء منطق PLC قابل لإعادة الاستخدام"]
                    },
                    {
                        id: "m5l4",
                        order: 4,
                        title: "Error Handling and Diagnostics",
                        titleAr: "معالجة الأخطاء والتشخيص",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Detect and handle PLC runtime errors"],
                        objectivesAr: ["اكتشاف ومعالجة أخطاء PLC"]
                    },
                    {
                        id: "m5l5",
                        order: 5,
                        title: "PID Control Fundamentals",
                        titleAr: "أساسيات التحكم PID",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Configure and tune PID controllers"],
                        objectivesAr: ["إعداد وضبط متحكمات PID"]
                    }

                ]
            },

            {
                id: "m6",
                order: 6,
                title: "Human-Machine Interface (HMI)",
                titleAr: "واجهات الإنسان والآلة",
                description:
                    "Design and integration of HMI systems.",
                descriptionAr:
                    "تصميم وربط أنظمة HMI.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m6l1",
                        order: 1,
                        title: "HMI Design Principles",
                        titleAr: "مبادئ تصميم HMI",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Design effective HMIs"],
                        objectivesAr: ["تصميم واجهات فعالة"]
                    },
                    {
                        id: "m6l2",
                        order: 2,
                        title: "HMI Alarms and Trends",
                        titleAr: "الإنذارات والرسوم البيانية في HMI",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Configure alarms and trends"],
                        objectivesAr: ["إعداد الإنذارات والرسوم"]
                    },
                    {
                        id: "m6l3",
                        order: 3,
                        title: "HMI–PLC Communication and Integration",
                        titleAr: "ربط HMI مع PLC",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Integrate HMI screens with PLC tags"],
                        objectivesAr: ["ربط شاشات HMI مع متغيرات PLC"]
                    },
                    {
                        "id": "m6l4",
                        "order": 4,
                        "title": "HMI Practical Lab",
                        "titleAr": "معمل عملي لواجهات HMI",
                        "type": "hands-on",
                        "duration": "90 min",
                        "durationAr": "90 دقيقة",
                        "objectives": [
                            "Build sample HMI screens",
                            "Link HMI to PLC tags",
                            "Test user interactions"
                        ],
                        "objectivesAr": [
                            "إنشاء شاشات HMI تجريبية",
                            "ربط HMI مع متغيرات PLC",
                            "اختبار تفاعل المستخدم"
                        ]
                    }


                ]
            },

            {
                id: "m7",
                order: 7,
                title: "Industrial Communication Protocols",
                titleAr: "بروتوكولات الاتصال الصناعية",
                description:
                    "Industrial networking and PLC communication.",
                descriptionAr:
                    "الشبكات الصناعية والاتصال بين PLC.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m7l1",
                        order: 1,
                        title: "Modbus and Profinet",
                        titleAr: "مودباص وبروفينت",
                        type: "video",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Understand industrial protocols"],
                        objectivesAr: ["فهم بروتوكولات الاتصال الصناعية"]
                    },
                    {
                        id: "m7l2",
                        order: 2,
                        title: "Industrial Ethernet and Network Topologies",
                        titleAr: "الإيثرنت الصناعي وبنية الشبكات",
                        type: "video",
                        duration: "45 min",
                        durationAr: "45 دقيقة",
                        objectives: ["Understand industrial network design"],
                        objectivesAr: ["فهم تصميم الشبكات الصناعية"]
                    },
                    {
                        id: "m7l3",
                        order: 3,
                        title: "PLC-to-PLC Communication",
                        titleAr: "الاتصال بين PLC و PLC",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Exchange data between PLCs"],
                        objectivesAr: ["تبادل البيانات بين وحدات PLC"]
                    },
                    {
                        "id": "m7l4",
                        "order": 4,
                        "title": "PLC-to-PLC Communication Lab",
                        "titleAr": "معمل الاتصال بين وحدات PLC",
                        "type": "hands-on",
                        "duration": "90 min",
                        "durationAr": "90 دقيقة",
                        "objectives": ["Exchange data between two PLCs using industrial protocols", "Test communication reliability"],
                        "objectivesAr": ["تبادل البيانات بين وحدتين PLC باستخدام بروتوكولات صناعية", "اختبار موثوقية الاتصال"]
                    }
                ]
            },

            {
                id: "m8",
                order: 8,
                title: "SCADA Systems",
                titleAr: "أنظمة SCADA",
                description:
                    "Supervisory control and data acquisition systems.",
                descriptionAr:
                    "أنظمة الإشراف وجمع البيانات.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m8l1",
                        order: 1,
                        title: "SCADA Architecture",
                        titleAr: "بنية SCADA",
                        type: "video",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Understand SCADA systems"],
                        objectivesAr: ["فهم أنظمة SCADA"]
                    },
                    {
                        id: "m8l2",
                        order: 2,
                        title: "SCADA Alarms and Reporting",
                        titleAr: "الإنذارات والتقارير في SCADA",
                        type: "video",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Monitor and report system data"],
                        objectivesAr: ["مراقبة البيانات وإنشاء التقارير"]
                    },
                    {
                        id: "m8l3",
                        order: 3,
                        title: "SCADA Data Logging and Visualization",
                        titleAr: "تسجيل البيانات وعرضها في SCADA",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Visualize and log industrial data"],
                        objectivesAr: ["عرض وتسجيل البيانات الصناعية"]
                    },
                    {
                        "id": "m8l4",
                        "order": 4,
                        "title": "End-to-End SCADA-HMI-PLC Integration",
                        "titleAr": "دمج SCADA و HMI و PLC من البداية للنهاية",
                        "type": "hands-on",
                        "duration": "120 min",
                        "durationAr": "120 دقيقة",
                        "objectives": ["Integrate PLC with HMI and SCADA", "Monitor and control real-time processes", "Test alarms and trends"],
                        "objectivesAr": ["ربط PLC مع HMI و SCADA", "مراقبة والتحكم في العمليات الحية", "اختبار الإنذارات والرسوم البيانية"]
                    },
                    {
                        "id": "m8l5",
                        "order": 5,
                        "title": "SCADA Practical Lab",
                        "titleAr": "معمل عملي لنظام SCADA",
                        "type": "hands-on",
                        "duration": "120 min",
                        "durationAr": "120 دقيقة",
                        "objectives": [
                            "Configure SCADA data tags",
                            "Visualize industrial processes",
                            "Test alarms and reporting"
                        ],
                        "objectivesAr": [
                            "تهيئة علامات SCADA",
                            "عرض العمليات الصناعية",
                            "اختبار الإنذارات والتقارير"
                        ]
                    }

                ]
            },

            {
                id: "m9",
                order: 9,
                title: "Motor Control & Drives",
                titleAr: "التحكم في المحركات والمغيرات",
                description:
                    "Motor control principles and VFD integration.",
                descriptionAr:
                    "مبادئ التحكم في المحركات وربط مغيرات السرعة.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m9l1",
                        order: 1,
                        title: "VFD Fundamentals",
                        titleAr: "أساسيات VFD",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Control motor speed"],
                        objectivesAr: ["التحكم في سرعة المحرك"]
                    },
                    {
                        id: "m9l2",
                        order: 2,
                        title: "Motor Starters and Protection",
                        titleAr: "تشغيل المحركات والحماية",
                        type: "video",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Apply motor protection techniques"],
                        objectivesAr: ["تطبيق وسائل حماية المحركات"]
                    },
                    {
                        id: "m9l3",
                        order: 3,
                        title: "PLC Integration with VFDs",
                        titleAr: "ربط PLC مع مغيرات السرعة",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Control VFDs via PLC"],
                        objectivesAr: ["التحكم في VFD باستخدام PLC"]
                    },
                    {
                        "id": "m9l4",
                        "order": 4,
                        "title": "Motor Control Practical Lab",
                        "titleAr": "معمل التحكم في المحركات",
                        "type": "hands-on",
                        "duration": "120 min",
                        "durationAr": "120 دقيقة",
                        "objectives": ["Start/Stop motors via PLC", "Control VFD speed", "Implement protection and interlocks"],
                        "objectivesAr": ["تشغيل وإيقاف المحركات باستخدام PLC", "التحكم في سرعة VFD", "تطبيق الحماية والتشابكات"]
                    },
                    {
                        "id": "m9l5",
                        "order": 5,
                        "title": "Motor Control Practical Lab 2",
                        "titleAr": "معمل عملي للتحكم في المحركات 2",
                        "type": "hands-on",
                        "duration": "120 min",
                        "durationAr": "120 دقيقة",
                        "objectives": [
                            "Implement motor speed control",
                            "Test motor protection circuits",
                            "Simulate fault scenarios"
                        ],
                        "objectivesAr": [
                            "تطبيق التحكم في سرعة المحرك",
                            "اختبار دوائر حماية المحرك",
                            "محاكاة سيناريوهات الأعطال"
                        ]
                    }

                ]
            },

            {
                id: "m10",
                order: 10,
                title: "Industrial Sensors & Instrumentation",
                titleAr: "الحساسات والقياس الصناعي",
                description:
                    "Industrial sensors, signals, and calibration.",
                descriptionAr:
                    "الحساسات الصناعية والإشارات والمعايرة.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m10l1",
                        order: 1,
                        title: "Sensor Types and Signals",
                        titleAr: "أنواع الحساسات والإشارات",
                        type: "video",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Select proper sensors"],
                        objectivesAr: ["اختيار الحساس المناسب"]
                    },
                    {
                        id: "m10l2",
                        order: 2,
                        title: "Sensor Calibration and Signal Conditioning",
                        titleAr: "معايرة الحساسات وتهيئة الإشارات",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Calibrate industrial sensors"],
                        objectivesAr: ["معايرة الحساسات الصناعية"]
                    },
                    {
                        id: "m10l3",
                        order: 3,
                        title: "Troubleshooting Sensor Issues",
                        titleAr: "استكشاف أعطال الحساسات",
                        type: "hands-on",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Diagnose sensor faults"],
                        objectivesAr: ["تشخيص أعطال الحساسات"]
                    }
                ]
            },

            {
                id: "m11",
                order: 11,
                title: "Safety Systems & Standards",
                titleAr: "أنظمة السلامة والمعايير",
                description:
                    "Industrial safety concepts and standards.",
                descriptionAr:
                    "مفاهيم ومعايير السلامة الصناعية.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m11l1",
                        order: 1,
                        title: "Safety PLCs and E-Stop",
                        titleAr: "PLC الآمن وإيقاف الطوارئ",
                        type: "article",
                        duration: "45 min",
                        durationAr: "45 دقيقة",
                        objectives: ["Apply safety standards"],
                        objectivesAr: ["تطبيق معايير السلامة"]
                    },
                    {
                        id: "m11l2",
                        order: 2,
                        title: "Risk Assessment and Safety Categories",
                        titleAr: "تقييم المخاطر وفئات السلامة",
                        type: "video",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Perform basic safety risk assessments"],
                        objectivesAr: ["تنفيذ تقييمات مخاطر السلامة"]
                    },
                    {
                        id: "m11l3",
                        order: 3,
                        title: "Safe Automation Design Practices",
                        titleAr: "ممارسات التصميم الآمن للأتمتة",
                        type: "article",
                        duration: "45 min",
                        durationAr: "45 دقيقة",
                        objectives: ["Design compliant safety systems"],
                        objectivesAr: ["تصميم أنظمة أتمتة متوافقة مع السلامة"]
                    },
                    {
                        "id": "m11l4",
                        "order": 4,
                        "title": "Lockout-Tagout (LOTO) and Safety Relays",
                        "titleAr": "نظام LOTO والريليهات الأمنية",
                        "type": "hands-on",
                        "duration": "60 min",
                        "durationAr": "60 دقيقة",
                        "objectives": ["Understand LOTO procedures", "Use safety relays", "Apply safety measures during maintenance"],
                        "objectivesAr": ["فهم إجراءات LOTO", "استخدام الريليهات الأمنية", "تطبيق إجراءات السلامة أثناء الصيانة"]
                    },
                ]
            },

            {
                id: "m12",
                order: 12,
                title: "Troubleshooting & Maintenance",
                titleAr: "استكشاف الأخطاء والصيانة",
                description:
                    "Fault diagnosis and maintenance strategies.",
                descriptionAr:
                    "تشخيص الأعطال واستراتيجيات الصيانة.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m12l1",
                        order: 1,
                        title: "PLC Diagnostics",
                        titleAr: "تشخيص أعطال PLC",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Diagnose PLC faults"],
                        objectivesAr: ["تشخيص أعطال PLC"]
                    },
                    {
                        id: "m12l2",
                        order: 2,
                        title: "Online and Offline Debugging",
                        titleAr: "التصحيح أثناء التشغيل وخارجه",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Debug PLC programs effectively"],
                        objectivesAr: ["تصحيح برامج PLC بكفاءة"]
                    },
                    {
                        id: "m12l3",
                        order: 3,
                        title: "Preventive and Predictive Maintenance",
                        titleAr: "الصيانة الوقائية والتنبؤية",
                        type: "video",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Apply maintenance strategies"],
                        objectivesAr: ["تطبيق استراتيجيات الصيانة"]
                    },
                    {
                        id: "m12l4",
                        order: 4,
                        title: "Documentation and Version Control",
                        titleAr: "التوثيق وإدارة الإصدارات",
                        type: "article",
                        duration: "45 min",
                        durationAr: "45 دقيقة",
                        objectives: ["Document PLC projects professionally"],
                        objectivesAr: ["توثيق مشاريع PLC بشكل احترافي"]
                    }

                ]
            },

            {
                id: "m13",
                order: 13,
                title: "Industrial Automation Projects",
                titleAr: "مشاريع الأتمتة الصناعية",
                description:
                    "End-to-end industrial automation projects.",
                descriptionAr:
                    "مشاريع أتمتة صناعية متكاملة.",
                duration: "2 Weeks",
                durationAr: "أسبوعان",
                lessons: [
                    {
                        id: "m13l1",
                        order: 1,
                        title: "Project Design and Integration",
                        titleAr: "تصميم وربط المشروع",
                        type: "project",
                        duration: "6 Hours",
                        durationAr: "6 ساعات",
                        objectives: ["Build complete automation system"],
                        objectivesAr: ["بناء نظام أتمتة متكامل"]
                    }
                ]
            },

            {
                id: "m14",
                order: 14,
                title: "Emerging Trends in Industrial Automation",
                titleAr: "الاتجاهات الحديثة في الأتمتة الصناعية",
                description:
                    "Industry 4.0, IIoT, and future automation.",
                descriptionAr:
                    "الصناعة 4.0 وإنترنت الأشياء الصناعي ومستقبل الأتمتة.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m14l1",
                        order: 1,
                        title: "Industry 4.0 and IIoT",
                        titleAr: "الصناعة 4.0 وإنترنت الأشياء الصناعي",
                        type: "video",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Understand future trends"],
                        objectivesAr: ["فهم اتجاهات المستقبل"]
                    },
                    {
                        id: "m14l2",
                        order: 2,
                        title: "Cybersecurity in Industrial Systems",
                        titleAr: "الأمن السيبراني في الأنظمة الصناعية",
                        type: "article",
                        duration: "45 min",
                        durationAr: "45 دقيقة",
                        objectives: ["Understand OT cybersecurity risks"],
                        objectivesAr: ["فهم مخاطر الأمن الصناعي"]
                    },
                    {
                        "id": "m14l3",
                        "order": 3,
                        "title": "Batch Process Control Overview",
                        "titleAr": "نظرة عامة على التحكم في العمليات الدُفعية",
                        "type": "video",
                        "duration": "60 min",
                        "durationAr": "60 دقيقة",
                        "objectives": ["Understand batch process concepts", "Identify batch control strategies"],
                        "objectivesAr": ["فهم مفاهيم العمليات الدُفعية", "التعرف على استراتيجيات التحكم الدُفعي"]
                    },
                    {
                        "id": "m14l4",
                        "order": 4,
                        "title": "Data Logging and Analytics with PLC/SCADA",
                        "titleAr": "تسجيل البيانات وتحليلها باستخدام PLC و SCADA",
                        "type": "hands-on",
                        "duration": "90 min",
                        "durationAr": "90 دقيقة",
                        "objectives": ["Configure data logging", "Analyze industrial data trends", "Generate reports"],
                        "objectivesAr": ["إعداد تسجيل البيانات", "تحليل اتجاهات البيانات الصناعية", "إنشاء تقارير"]
                    },
                    {
                        "id": "m14l5",
                        "order": 5,
                        "title": "Industrial Wireless Communication Basics",
                        "titleAr": "أساسيات الاتصال اللاسلكي الصناعي",
                        "type": "video",
                        "duration": "45 min",
                        "durationAr": "45 دقيقة",
                        "objectives": ["Understand wireless protocols (MQTT, OPC-UA, PROFINET)", "Evaluate wireless integration in factories"],
                        "objectivesAr": ["فهم البروتوكولات اللاسلكية (MQTT، OPC-UA، PROFINET)", "تقييم دمج الشبكات اللاسلكية في المصانع"]
                    },

                ]
            },
            {
                "id": "m15",
                "order": 15,
                "title": "Advanced Industrial Automation Trends",
                "titleAr": "الاتجاهات المتقدمة في الأتمتة الصناعية",
                "description": "AI, digital twin, cloud integration, and predictive maintenance.",
                "descriptionAr": "الذكاء الاصطناعي، التوأم الرقمي، دمج السحابة، والصيانة التنبؤية.",
                "duration": "1 Week",
                "durationAr": "أسبوع واحد",
                "lessons": [
                    {
                        "id": "m15l1",
                        "order": 1,
                        "title": "Digital Twin Concepts",
                        "titleAr": "مفاهيم التوأم الرقمي",
                        "type": "video",
                        "duration": "60 min",
                        "durationAr": "60 دقيقة",
                        "objectives": [
                            "Understand digital twin modeling",
                            "Simulate industrial systems virtually"
                        ],
                        "objectivesAr": [
                            "فهم نمذجة التوأم الرقمي",
                            "محاكاة الأنظمة الصناعية افتراضيًا"
                        ]
                    },
                    {
                        "id": "m15l2",
                        "order": 2,
                        "title": "AI in Industrial Automation",
                        "titleAr": "الذكاء الاصطناعي في الأتمتة الصناعية",
                        "type": "article",
                        "duration": "45 min",
                        "durationAr": "45 دقيقة",
                        "objectives": [
                            "Learn AI applications for predictive maintenance",
                            "Use AI for quality control and optimization"
                        ],
                        "objectivesAr": [
                            "تعلم تطبيقات الذكاء الاصطناعي للصيانة التنبؤية",
                            "استخدام الذكاء الاصطناعي لمراقبة الجودة والتحسين"
                        ]
                    },
                    {
                        "id": "m15l3",
                        "order": 3,
                        "title": "Cloud and Edge Computing Integration",
                        "titleAr": "دمج الحوسبة السحابية والحافة",
                        "type": "video",
                        "duration": "60 min",
                        "durationAr": "60 دقيقة",
                        "objectives": [
                            "Integrate PLC/SCADA data with cloud",
                            "Understand edge computing benefits in factories"
                        ],
                        "objectivesAr": [
                            "دمج بيانات PLC و SCADA مع السحابة",
                            "فهم فوائد الحوسبة على الحافة في المصانع"
                        ]
                    },
                    {
                        "id": "m15l4",
                        "order": 4,
                        "title": "Predictive Maintenance Techniques",
                        "titleAr": "تقنيات الصيانة التنبؤية",
                        "type": "hands-on",
                        "duration": "90 min",
                        "durationAr": "90 دقيقة",
                        "objectives": [
                            "Collect sensor data for predictive analysis",
                            "Set up early warning alerts",
                            "Prevent unplanned downtime"
                        ],
                        "objectivesAr": [
                            "جمع بيانات الحساسات للتحليل التنبؤي",
                            "إعداد إنذارات مبكرة",
                            "منع توقف التشغيل غير المخطط له"
                        ]
                    }
                ]
            },
            {
                "id": "m16",
                "order": 16,
                "title": "Course Assessment & Certification",
                "titleAr": "تقييم الدورة والشهادة",
                "description": "Quizzes, final project evaluation, and certification guidance.",
                "descriptionAr": "الاختبارات، تقييم المشروع النهائي، وإرشادات الشهادة.",
                "duration": "1 Week",
                "durationAr": "أسبوع واحد",
                "lessons": [
                    {
                        "id": "m16l1",
                        "order": 1,
                        "title": "Module Quizzes",
                        "titleAr": "اختبارات الوحدات",
                        "type": "quiz",
                        "duration": "30 min",
                        "durationAr": "30 دقيقة",
                        "objectives": [
                            "Evaluate understanding of individual modules",
                            "Provide instant feedback"
                        ],
                        "objectivesAr": [
                            "تقييم فهم كل وحدة",
                            "توفير ملاحظات فورية"
                        ]
                    },
                    {
                        "id": "m16l2",
                        "order": 2,
                        "title": "Final Project Evaluation",
                        "titleAr": "تقييم المشروع النهائي",
                        "type": "project",
                        "duration": "120 min",
                        "durationAr": "120 دقيقة",
                        "objectives": [
                            "Assess end-to-end automation project",
                            "Verify integration of PLC, HMI, SCADA"
                        ],
                        "objectivesAr": [
                            "تقييم مشروع الأتمتة الشامل",
                            "التحقق من دمج PLC و HMI و SCADA"
                        ]
                    },
                    {
                        "id": "m16l3",
                        "order": 3,
                        "title": "Certification Guidance",
                        "titleAr": "إرشادات الشهادة",
                        "type": "article",
                        "duration": "30 min",
                        "durationAr": "30 دقيقة",
                        "objectives": [
                            "Guide learners on how to obtain professional certification",
                            "Highlight industry-recognized credentials"
                        ],
                        "objectivesAr": [
                            "إرشاد المتدربين حول كيفية الحصول على الشهادة المهنية",
                            "تسليط الضوء على الشهادات المعترف بها في الصناعة"
                        ]
                    }
                ]
            }

        ]
    },
    {
        id: "programming-foundations-core-skills",
        courseModules: [
            {
                id: "m1",
                order: 1,
                title: "Introduction to Computer Science",
                titleAr: "مقدمة في علوم الحاسوب",
                description:
                    "Understanding what computer science is and how software shapes the modern world.",
                descriptionAr:
                    "فهم ماهية علوم الحاسوب ودور البرمجيات في العالم الحديث.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m1l1",
                        order: 1,
                        title: "What Is Computer Science?",
                        titleAr: "ما هي علوم الحاسوب؟",
                        type: "article",
                        duration: "30 min",
                        durationAr: "30 دقيقة",
                        objectives: ["Define computer science"],
                        objectivesAr: ["تعريف علوم الحاسوب"]
                    },
                    {
                        id: "m1l2",
                        order: 2,
                        title: "From Problem to Program",
                        titleAr: "من المشكلة إلى البرنامج",
                        type: "video",
                        duration: "45 min",
                        durationAr: "45 دقيقة",
                        objectives: ["Understand problem-solving flow"],
                        objectivesAr: ["فهم مراحل حل المشكلات"]
                    }
                ]
            },

            {
                id: "m2",
                order: 2,
                title: "Programming Mindset & Logical Thinking",
                titleAr: "العقلية البرمجية والتفكير المنطقي",
                description:
                    "Developing computational thinking and algorithmic reasoning.",
                descriptionAr:
                    "تطوير التفكير الحاسوبي والمنطقي.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m2l1",
                        order: 1,
                        title: "Computational Thinking",
                        titleAr: "التفكير الحاسوبي",
                        type: "video",
                        duration: "45 min",
                        durationAr: "45 دقيقة",
                        objectives: ["Think like a programmer"],
                        objectivesAr: ["التفكير كالمبرمج"]
                    },
                    {
                        id: "m2l2",
                        order: 2,
                        title: "Pseudocode and Flowcharts",
                        titleAr: "الكود الوهمي والمخططات الانسيابية",
                        type: "hands-on",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Translate logic into steps"],
                        objectivesAr: ["تحويل المنطق إلى خطوات"]
                    }
                ]
            },

            {
                id: "m3",
                order: 3,
                title: "Introduction to Programming Languages",
                titleAr: "مقدمة في لغات البرمجة",
                description:
                    "Understanding programming language types and environments.",
                descriptionAr:
                    "فهم أنواع لغات البرمجة وبيئات التطوير.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m3l1",
                        order: 1,
                        title: "Programming Language Paradigms",
                        titleAr: "أنماط لغات البرمجة",
                        type: "article",
                        duration: "40 min",
                        durationAr: "40 دقيقة",
                        objectives: ["Differentiate language types"],
                        objectivesAr: ["التمييز بين أنواع اللغات"]
                    },
                    {
                        id: "m3l2",
                        order: 2,
                        title: "Setting Up the Development Environment",
                        titleAr: "إعداد بيئة التطوير",
                        type: "hands-on",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Prepare coding environment"],
                        objectivesAr: ["إعداد بيئة البرمجة"]
                    }
                ]
            },

            {
                id: "m4",
                order: 4,
                title: "Variables, Data Types, and Operators",
                titleAr: "المتغيرات وأنواع البيانات والعوامل",
                description:
                    "Core building blocks of any programming language.",
                descriptionAr:
                    "اللبنات الأساسية لأي لغة برمجة.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m4l1",
                        order: 1,
                        title: "Variables and Data Types",
                        titleAr: "المتغيرات وأنواع البيانات",
                        type: "video",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Store and manipulate data"],
                        objectivesAr: ["تخزين البيانات ومعالجتها"]
                    }
                ]
            },

            {
                id: "m5",
                order: 5,
                title: "Control Flow & Decision Making",
                titleAr: "تدفق التحكم واتخاذ القرار",
                description:
                    "Using conditions and logic to control program behavior.",
                descriptionAr:
                    "استخدام الشروط والمنطق للتحكم في سير البرنامج.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m5l1",
                        order: 1,
                        title: "Conditional Statements",
                        titleAr: "الجمل الشرطية",
                        type: "hands-on",
                        duration: "75 min",
                        durationAr: "75 دقيقة",
                        objectives: ["Write decision logic"],
                        objectivesAr: ["كتابة منطق اتخاذ القرار"]
                    }
                ]
            },

            {
                id: "m6",
                order: 6,
                title: "Loops & Iteration",
                titleAr: "الحلقات والتكرار",
                description:
                    "Repeating logic efficiently using loops.",
                descriptionAr:
                    "تكرار الأوامر البرمجية بكفاءة.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m6l1",
                        order: 1,
                        title: "For and While Loops",
                        titleAr: "حلقات For و While",
                        type: "hands-on",
                        duration: "75 min",
                        durationAr: "75 دقيقة",
                        objectives: ["Implement iteration patterns"],
                        objectivesAr: ["تنفيذ أنماط التكرار"]
                    }
                ]
            },

            {
                id: "m7",
                order: 7,
                title: "Functions & Methods",
                titleAr: "الدوال والطرق",
                description:
                    "Structuring programs using reusable logic.",
                descriptionAr:
                    "تنظيم البرامج باستخدام منطق قابل لإعادة الاستخدام.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m7l1",
                        order: 1,
                        title: "Defining and Using Functions",
                        titleAr: "تعريف واستخدام الدوال",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Write reusable functions"],
                        objectivesAr: ["كتابة دوال قابلة لإعادة الاستخدام"]
                    }
                ]
            },

            {
                id: "m8",
                order: 8,
                title: "Modular Code & Organization",
                titleAr: "تنظيم الكود والوحدات",
                description:
                    "Writing clean, modular, and maintainable code.",
                descriptionAr:
                    "كتابة كود منظم وقابل للصيانة.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m8l1",
                        order: 1,
                        title: "Clean Code Principles",
                        titleAr: "مبادئ الكود النظيف",
                        type: "article",
                        duration: "45 min",
                        durationAr: "45 دقيقة",
                        objectives: ["Improve code readability"],
                        objectivesAr: ["تحسين قراءة الكود"]
                    }
                ]
            },

            {
                id: "m9",
                order: 9,
                title: "Object-Oriented Programming Fundamentals",
                titleAr: "أساسيات البرمجة كائنية التوجه",
                description:
                    "Thinking in objects and classes.",
                descriptionAr:
                    "التفكير باستخدام الكائنات والأصناف.",
                duration: "2 Weeks",
                durationAr: "أسبوعان",
                lessons: [
                    {
                        id: "m9l1",
                        order: 1,
                        title: "Classes and Objects",
                        titleAr: "الأصناف والكائنات",
                        type: "video",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Model real-world entities"],
                        objectivesAr: ["نمذجة الكيانات الواقعية"]
                    }
                ]
            },

            {
                id: "m10",
                order: 10,
                title: "Core OOP Concepts",
                titleAr: "مفاهيم OOP الأساسية",
                description:
                    "Encapsulation, inheritance, polymorphism, and abstraction.",
                descriptionAr:
                    "التغليف والوراثة وتعدد الأشكال والتجريد.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m10l1",
                        order: 1,
                        title: "OOP Principles in Practice",
                        titleAr: "مبادئ OOP عمليًا",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Apply OOP correctly"],
                        objectivesAr: ["تطبيق OOP بشكل صحيح"]
                    }
                ]
            },

            {
                id: "m11",
                order: 11,
                title: "Advanced OOP Practices",
                titleAr: "ممارسات OOP المتقدمة",
                description:
                    "Designing maintainable and scalable class structures.",
                descriptionAr:
                    "تصميم هياكل أصناف قابلة للصيانة والتوسع.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m11l1",
                        order: 1,
                        title: "Class Design Strategies",
                        titleAr: "استراتيجيات تصميم الأصناف",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Design maintainable systems"],
                        objectivesAr: ["تصميم أنظمة قابلة للصيانة"]
                    },
                    {
                        "id": "m11l2",
                        "order": 2,
                        "title": "Constructors, Destructors & Access Modifiers",
                        "titleAr": "البُناة والمدمّرات ومحددات الوصول",
                        "type": "hands-on",
                        "duration": "75 min",
                        "durationAr": "75 دقيقة",
                        "objectives": [
                            "Use constructors and destructors correctly",
                            "Apply access modifiers to class members"
                        ],
                        "objectivesAr": [
                            "استخدام البُناة والمدمّرات بشكل صحيح",
                            "تطبيق محددات الوصول على أعضاء الأصناف"
                        ]
                    },
                    {
                        "id": "m11l3",
                        "order": 3,
                        "title": "Composition vs Inheritance",
                        "titleAr": "التكوين مقابل الوراثة",
                        "type": "article",
                        "duration": "60 min",
                        "durationAr": "60 دقيقة",
                        "objectives": [
                            "Differentiate composition and inheritance",
                            "Design maintainable class hierarchies"
                        ],
                        "objectivesAr": [
                            "التمييز بين التكوين والوراثة",
                            "تصميم هياكل أصناف قابلة للصيانة"
                        ]
                    }


                ]
            },

            {
                id: "m12",
                order: 12,
                title: "Introduction to Data Structures",
                titleAr: "مقدمة في هياكل البيانات",
                description:
                    "Understanding data organization and memory.",
                descriptionAr:
                    "فهم تنظيم البيانات والذاكرة.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m12l1",
                        order: 1,
                        title: "Why Data Structures Matter",
                        titleAr: "أهمية هياكل البيانات",
                        type: "article",
                        duration: "45 min",
                        durationAr: "45 دقيقة",
                        objectives: ["Choose proper structures"],
                        objectivesAr: ["اختيار هيكل البيانات المناسب"]
                    }
                ]
            },

            {
                id: "m13",
                order: 13,
                title: "Linear Data Structures",
                titleAr: "هياكل البيانات الخطية",
                description:
                    "Arrays, lists, stacks, and queues.",
                descriptionAr:
                    "المصفوفات والقوائم والمكدسات والطوابير.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m13l1",
                        order: 1,
                        title: "Arrays and Lists",
                        titleAr: "المصفوفات والقوائم",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Use linear structures"],
                        objectivesAr: ["استخدام الهياكل الخطية"]
                    }
                ]
            },

            {
                id: "m14",
                order: 14,
                title: "Non-Linear Data Structures",
                titleAr: "هياكل البيانات غير الخطية",
                description:
                    "Foundations of trees, graphs, and hash tables.",
                descriptionAr:
                    "أساسيات الأشجار والرسوم البيانية وجداول التجزئة.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m14l1",
                        order: 1,
                        title: "Trees and Hash Tables",
                        titleAr: "الأشجار وجداول التجزئة",
                        type: "video",
                        duration: "75 min",
                        durationAr: "75 دقيقة",
                        objectives: ["Understand non-linear structures"],
                        objectivesAr: ["فهم الهياكل غير الخطية"]
                    }
                ]
            },

            {
                id: "m15",
                order: 15,
                title: "Algorithm Fundamentals",
                titleAr: "أساسيات الخوارزميات",
                description:
                    "Introduction to algorithms and complexity.",
                descriptionAr:
                    "مقدمة في الخوارزميات والتعقيد.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m15l1",
                        order: 1,
                        title: "Big-O and Searching Algorithms",
                        titleAr: "تعقيد Big-O وخوارزميات البحث",
                        type: "video",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Analyze algorithm efficiency"],
                        objectivesAr: ["تحليل كفاءة الخوارزميات"]
                    },
                    {
                        "id": "m15l2",
                        "order": 2,
                        "title": "Basic Sorting Algorithms",
                        "titleAr": "خوارزميات الفرز الأساسية",
                        "type": "hands-on",
                        "duration": "90 min",
                        "durationAr": "90 دقيقة",
                        "objectives": [
                            "Implement Bubble, Selection, and Insertion sort",
                            "Understand algorithm efficiency"
                        ],
                        "objectivesAr": [
                            "تنفيذ خوارزميات الفرز: الفقاعي، الاختياري، والإدراجي",
                            "فهم كفاءة الخوارزميات"
                        ]
                    },
                    {
                        "id": "m15l3",
                        "order": 3,
                        "title": "Searching Algorithms",
                        "titleAr": "خوارزميات البحث",
                        "type": "hands-on",
                        "duration": "75 min",
                        "durationAr": "75 دقيقة",
                        "objectives": [
                            "Implement Linear and Binary Search",
                            "Compare algorithm performance"
                        ],
                        "objectivesAr": [
                            "تنفيذ البحث الخطي والبحث الثنائي",
                            "مقارنة أداء الخوارزميات"
                        ]
                    }


                ]
            },

            {
                id: "m16",
                order: 16,
                title: "Debugging Techniques",
                titleAr: "تقنيات تصحيح الأخطاء",
                description:
                    "Identifying and fixing programming errors.",
                descriptionAr:
                    "اكتشاف الأخطاء البرمجية ومعالجتها.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m16l1",
                        order: 1,
                        title: "Debugging Strategies",
                        titleAr: "استراتيجيات تصحيح الأخطاء",
                        type: "hands-on",
                        duration: "75 min",
                        durationAr: "75 دقيقة",
                        objectives: ["Fix runtime and logic errors"],
                        objectivesAr: ["إصلاح الأخطاء البرمجية"]
                    },
                    {
                        "id": "m16l2",
                        "order": 2,
                        "title": "Debugging vs Testing",
                        "titleAr": "تصحيح الأخطاء مقابل الاختبار",
                        "type": "article",
                        "duration": "60 min",
                        "durationAr": "60 دقيقة",
                        "objectives": [
                            "Distinguish debugging from testing",
                            "Use debugging tools effectively"
                        ],
                        "objectivesAr": [
                            "التمييز بين تصحيح الأخطاء والاختبار",
                            "استخدام أدوات تصحيح الأخطاء بفعالية"
                        ]
                    }

                ]
            },

            {
                id: "m17",
                order: 17,
                title: "Testing & Code Quality",
                titleAr: "الاختبار وجودة الكود",
                description:
                    "Ensuring correctness and maintainability.",
                descriptionAr:
                    "ضمان صحة الكود وقابليته للصيانة.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m17l1",
                        order: 1,
                        title: "Introduction to Unit Testing",
                        titleAr: "مقدمة في اختبار الوحدات",
                        type: "article",
                        duration: "45 min",
                        durationAr: "45 دقيقة",
                        objectives: ["Write testable code"],
                        objectivesAr: ["كتابة كود قابل للاختبار"]
                    }
                ]
            },

            {
                id: "m18",
                order: 18,
                title: "Version Control Fundamentals",
                titleAr: "أساسيات التحكم في الإصدارات",
                description:
                    "Using Git for collaboration and versioning.",
                descriptionAr:
                    "استخدام Git للتعاون وإدارة الإصدارات.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m18l1",
                        order: 1,
                        title: "Git Basics",
                        titleAr: "أساسيات Git",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Manage code versions"],
                        objectivesAr: ["إدارة إصدارات الكود"]
                    },
                    {
                        "id": "m18l2",
                        "order": 2,
                        "title": "Branching, Merging & Pull Requests",
                        "titleAr": "الفروع والدمج وطلبات السحب",
                        "type": "hands-on",
                        "duration": "90 min",
                        "durationAr": "90 دقيقة",
                        "objectives": [
                            "Create and manage branches",
                            "Resolve merge conflicts",
                            "Submit and review pull requests"
                        ],
                        "objectivesAr": [
                            "إنشاء وإدارة الفروع",
                            "حل تعارضات الدمج",
                            "إرسال ومراجعة طلبات السحب"
                        ]
                    }

                ]
            },

            {
                id: "m19",
                order: 19,
                title: "Problem Solving & Competitive Thinking",
                titleAr: "حل المشكلات والتفكير البرمجي",
                description:
                    "Developing strong problem-solving habits.",
                descriptionAr:
                    "تطوير مهارات قوية في حل المشكلات.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m19l1",
                        order: 1,
                        title: "Programming Challenges",
                        titleAr: "تحديات برمجية",
                        type: "hands-on",
                        duration: "90 min",
                        durationAr: "90 دقيقة",
                        objectives: ["Optimize problem-solving skills"],
                        objectivesAr: ["تحسين مهارات حل المشكلات"]
                    }
                ]
            },

            {
                id: "m20",
                order: 20,
                title: "Final Project & Assessment",
                titleAr: "المشروع النهائي والتقييم",
                description:
                    "Applying all learned concepts in a complete project.",
                descriptionAr:
                    "تطبيق جميع المفاهيم المكتسبة في مشروع متكامل.",
                duration: "2 Weeks",
                durationAr: "أسبوعان",
                lessons: [
                    {
                        id: "m20l1",
                        order: 1,
                        title: "Final Project Implementation",
                        titleAr: "تنفيذ المشروع النهائي",
                        type: "project",
                        duration: "8 Hours",
                        durationAr: "8 ساعات",
                        objectives: ["Build a complete software solution"],
                        objectivesAr: ["بناء حل برمجي متكامل"]
                    },
                    {
                        "id": "m20l2",
                        "order": 2,
                        "title": "Project Planning and Documentation",
                        "titleAr": "تخطيط المشروع والتوثيق",
                        "type": "article",
                        "duration": "60 min",
                        "durationAr": "60 دقيقة",
                        "objectives": [
                            "Design software architecture for the project",
                            "Document requirements and plan implementation"
                        ],
                        "objectivesAr": [
                            "تصميم هيكل البرنامج للمشروع",
                            "توثيق المتطلبات وتخطيط التنفيذ"
                        ]
                    },
                    {
                        "id": "m20l3",
                        "order": 3,
                        "title": "Project Presentation & Review",
                        "titleAr": "عرض المشروع والمراجعة",
                        "type": "hands-on",
                        "duration": "60 min",
                        "durationAr": "60 دقيقة",
                        "objectives": [
                            "Present final project to instructors",
                            "Receive feedback and improve solution"
                        ],
                        "objectivesAr": [
                            "عرض المشروع النهائي على المدربين",
                            "تلقي الملاحظات وتحسين الحل البرمجي"
                        ]
                    }

                ]
            }
        ]
    },
    {
        id: "creative-coding-for-kids",
        courseModules: [
            {
                id: "m1",
                order: 1,
                title: "Welcome to Creative Coding",
                titleAr: "مرحبًا بك في البرمجة الإبداعية",
                description:
                    "Introducing kids to the idea of programming and creativity.",
                descriptionAr:
                    "تعريف الأطفال بمفهوم البرمجة والإبداع.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m1l1",
                        order: 1,
                        title: "What Is Programming?",
                        titleAr: "ما هي البرمجة؟",
                        type: "video",
                        duration: "15 min",
                        durationAr: "15 دقيقة",
                        objectives: ["Understand what coding means"],
                        objectivesAr: ["فهم معنى البرمجة"]
                    },
                    {
                        id: "m1l2",
                        order: 2,
                        title: "What You Will Build",
                        titleAr: "ماذا سنبني في هذه الدورة؟",
                        type: "article",
                        duration: "10 min",
                        durationAr: "10 دقائق",
                        objectives: ["Get excited about projects"],
                        objectivesAr: ["التحمس للمشاريع القادمة"]
                    },
                    {
                        "id": "m1l3",
                        "order": 3,
                        "title": "Why Learn Coding at a Young Age?",
                        "titleAr": "لماذا نتعلم البرمجة في سن مبكرة؟",
                        "type": "article",
                        "duration": "10 min",
                        "durationAr": "10 دقائق",
                        "objectives": ["Understand benefits of early coding"],
                        "objectivesAr": ["فهم فوائد تعلم البرمجة في سن مبكرة"]
                    },
                    {
                        "id": "m1l4",
                        "order": 4,
                        "title": "How Coding Helps Creativity and Thinking",
                        "titleAr": "كيف تساعد البرمجة على الإبداع والتفكير",
                        "type": "article",
                        "duration": "10 min",
                        "durationAr": "10 دقائق",
                        "objectives": ["Learn how coding develops logical and creative thinking"],
                        "objectivesAr": ["معرفة كيف تطور البرمجة التفكير المنطقي والإبداعي"]
                    },
                ]
            },

            {
                id: "m2",
                order: 2,
                title: "Introduction to Scratch",
                titleAr: "مقدمة إلى سكراتش",
                description:
                    "Learning the Scratch interface and basic elements.",
                descriptionAr:
                    "التعرف على واجهة سكراتش والعناصر الأساسية.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m2l1",
                        order: 1,
                        title: "Exploring Scratch",
                        titleAr: "استكشاف سكراتش",
                        type: "hands-on",
                        duration: "30 min",
                        durationAr: "30 دقيقة",
                        objectives: ["Navigate Scratch interface"],
                        objectivesAr: ["التنقل داخل واجهة سكراتش"]
                    },
                    {
                        "id": "m2l2",
                        "order": 2,
                        "title": "Creating Sprites and Backdrops",
                        "titleAr": "إنشاء الشخصيات والخلفيات",
                        "type": "hands-on",
                        "duration": "25 min",
                        "durationAr": "25 دقيقة",
                        "objectives": ["Learn to add and customize sprites", "Design backdrops for projects"],
                        "objectivesAr": ["تعلم إضافة وتخصيص الشخصيات", "تصميم الخلفيات للمشاريع"]
                    },
                    {
                        "id": "m2l3",
                        "order": 3,
                        "title": "Using Scratch Blocks",
                        "titleAr": "استخدام كتل سكراتش",
                        "type": "hands-on",
                        "duration": "30 min",
                        "durationAr": "30 دقيقة",
                        "objectives": ["Understand motion, looks, and sound blocks", "Use blocks to control sprites"],
                        "objectivesAr": ["فهم كتل الحركة والمظهر والصوت", "استخدام الكتل للتحكم في الشخصيات"]
                    },
                    {
                        "id": "m2l4",
                        "order": 4,
                        "title": "Understanding Sprites, Stage, and Blocks",
                        "titleAr": "فهم الشخصيات والمسرح والكتل",
                        "type": "hands-on",
                        "duration": "25 min",
                        "durationAr": "25 دقيقة",
                        "objectives": ["Understand the main elements of Scratch projects"],
                        "objectivesAr": ["فهم العناصر الرئيسية لمشاريع سكراتش"]
                    },
                ]
            },

            {
                id: "m3",
                order: 3,
                title: "Motion and Coordinates",
                titleAr: "الحركة والإحداثيات",
                description:
                    "Moving characters and understanding directions.",
                descriptionAr:
                    "تحريك الشخصيات وفهم الاتجاهات.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m3l1",
                        order: 1,
                        title: "Moving Sprites",
                        titleAr: "تحريك الشخصيات",
                        type: "hands-on",
                        duration: "30 min",
                        durationAr: "30 دقيقة",
                        objectives: ["Move sprites on stage"],
                        objectivesAr: ["تحريك الشخصيات على المسرح"]
                    },
                    {
                        "id": "m3l2",
                        "order": 2,
                        "title": "Direction and Rotation",
                        "titleAr": "الاتجاه والدوران",
                        "type": "hands-on",
                        "duration": "20 min",
                        "durationAr": "20 دقيقة",
                        "objectives": ["Change sprite directions", "Rotate sprites smoothly"],
                        "objectivesAr": ["تغيير اتجاهات الشخصيات", "تدوير الشخصيات بسلاسة"]
                    },
                    {
                        "id": "m3l3",
                        "order": 3,
                        "title": "Animating Movements",
                        "titleAr": "تحريك الشخصيات",
                        "type": "hands-on",
                        "duration": "30 min",
                        "durationAr": "30 دقيقة",
                        "objectives": ["Animate sprites for simple actions", "Combine movement blocks creatively"],
                        "objectivesAr": ["تحريك الشخصيات لإجراءات بسيطة", "دمج كتل الحركة بطريقة إبداعية"]
                    },
                ]
            },

            {
                id: "m4",
                order: 4,
                title: "Looks and Sounds",
                titleAr: "المظهر والأصوات",
                description:
                    "Making projects fun with visuals and audio.",
                descriptionAr:
                    "جعل المشاريع ممتعة باستخدام الصور والأصوات.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m4l1",
                        order: 1,
                        title: "Costumes and Sounds",
                        titleAr: "الأزياء والأصوات",
                        type: "hands-on",
                        duration: "30 min",
                        durationAr: "30 دقيقة",
                        objectives: ["Add visual and sound effects"],
                        objectivesAr: ["إضافة مؤثرات بصرية وصوتية"]
                    },
                    {
                        "id": "m4l2",
                        "order": 2,
                        "title": "Adding Music and Effects",
                        "titleAr": "إضافة الموسيقى والمؤثرات",
                        "type": "hands-on",
                        "duration": "25 min",
                        "durationAr": "25 دقيقة",
                        "objectives": ["Add music and sound effects", "Enhance project interactivity"],
                        "objectivesAr": ["إضافة الموسيقى والمؤثرات الصوتية", "تعزيز تفاعل المشروع"]
                    },
                    {
                        "id": "m4l3",
                        "order": 3,
                        "title": "Creating Animations with Costumes",
                        "titleAr": "إنشاء الرسوم المتحركة باستخدام الأزياء",
                        "type": "hands-on",
                        "duration": "30 min",
                        "durationAr": "30 دقيقة",
                        "objectives": ["Animate characters using costume changes"],
                        "objectivesAr": ["تحريك الشخصيات باستخدام تغييرات الأزياء"]
                    },
                ]
            },

            {
                id: "m5",
                order: 5,
                title: "Events and Interaction",
                titleAr: "الأحداث والتفاعل",
                description:
                    "Making projects interactive.",
                descriptionAr:
                    "جعل المشاريع تفاعلية.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m5l1",
                        order: 1,
                        title: "Using Events",
                        titleAr: "استخدام الأحداث",
                        type: "hands-on",
                        duration: "30 min",
                        durationAr: "30 دقيقة",
                        objectives: ["Create interactive behavior"],
                        objectivesAr: ["إنشاء سلوك تفاعلي"]
                    },
                    {
                        "id": "m5l2",
                        "order": 2,
                        "title": "Using the Green Flag",
                        "titleAr": "استخدام العلم الأخضر",
                        "type": "hands-on",
                        "duration": "15 min",
                        "durationAr": "15 دقيقة",
                        "objectives": ["Start projects and trigger scripts using the green flag"],
                        "objectivesAr": ["بدء المشاريع وتشغيل السكربتات باستخدام العلم الأخضر"]
                    },
                    {
                        "id": "m5l3",
                        "order": 3,
                        "title": "Responding to Keyboard and Mouse Input",
                        "titleAr": "الاستجابة للوحة المفاتيح والفأرة",
                        "type": "hands-on",
                        "duration": "25 min",
                        "durationAr": "25 دقيقة",
                        "objectives": ["Control sprites with keyboard and mouse"],
                        "objectivesAr": ["التحكم في الشخصيات باستخدام لوحة المفاتيح والفأرة"]
                    },
                    {
                        "id": "m5l4",
                        "order": 4,
                        "title": "Creating Interactive Projects",
                        "titleAr": "إنشاء مشاريع تفاعلية",
                        "type": "project",
                        "duration": "30 min",
                        "durationAr": "30 دقيقة",
                        "objectives": ["Combine events and input for interactive projects"],
                        "objectivesAr": ["دمج الأحداث والإدخال لإنشاء مشاريع تفاعلية"]
                    },

                ]
            },

            {
                id: "m6",
                order: 6,
                title: "Control and Logic",
                titleAr: "التحكم والمنطق",
                description:
                    "Understanding sequences, loops, and decisions.",
                descriptionAr:
                    "فهم التسلسل والحلقات واتخاذ القرار.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m6l1",
                        order: 1,
                        title: "Loops and Conditions",
                        titleAr: "الحلقات والشروط",
                        type: "hands-on",
                        duration: "40 min",
                        durationAr: "40 دقيقة",
                        objectives: ["Control program flow"],
                        objectivesAr: ["التحكم في سير البرنامج"]
                    },
                    {
                        "id": "m6l2",
                        "order": 2,
                        "title": "Event-driven Logic",
                        "titleAr": "المنطق المعتمد على الأحداث",
                        "type": "hands-on",
                        "duration": "20 min",
                        "durationAr": "20 دقيقة",
                        "objectives": ["Respond to events dynamically", "Combine events with conditions"],
                        "objectivesAr": ["الاستجابة للأحداث بشكل ديناميكي", "دمج الأحداث مع الشروط"]
                    },
                    {
                        "id": "m6l3",
                        "order": 3,
                        "title": "Understanding Sequences",
                        "titleAr": "فهم التسلسل",
                        "type": "hands-on",
                        "duration": "20 min",
                        "durationAr": "20 دقيقة",
                        "objectives": ["Understand order of actions in programs"],
                        "objectivesAr": ["فهم ترتيب الإجراءات في البرامج"]
                    },
                ]
            },

            {
                id: "m7",
                order: 7,
                title: "Variables and Data",
                titleAr: "المتغيرات والبيانات",
                description:
                    "Storing values like scores and timers.",
                descriptionAr:
                    "تخزين القيم مثل النقاط والمؤقتات.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m7l1",
                        order: 1,
                        title: "Using Variables",
                        titleAr: "استخدام المتغيرات",
                        type: "hands-on",
                        duration: "40 min",
                        durationAr: "40 دقيقة",
                        objectives: ["Track game data"],
                        objectivesAr: ["تتبع بيانات اللعبة"]
                    },
                    {
                        "id": "m7l2",
                        "order": 2,
                        "title": "Creating and Using Variables",
                        "titleAr": "إنشاء واستخدام المتغيرات",
                        "type": "hands-on",
                        "duration": "25 min",
                        "durationAr": "25 دقيقة",
                        "objectives": ["Create variables for tracking data"],
                        "objectivesAr": ["إنشاء متغيرات لتتبع البيانات"]
                    },
                    {
                        "id": "m7l3",
                        "order": 3,
                        "title": "Tracking Scores and Timers",
                        "titleAr": "تتبع النقاط والمؤقتات",
                        "type": "hands-on",
                        "duration": "25 min",
                        "durationAr": "25 دقيقة",
                        "objectives": ["Implement score and timer tracking in projects"],
                        "objectivesAr": ["تطبيق تتبع النقاط والمؤقتات في المشاريع"]
                    },
                    {
                        "id": "m7l4",
                        "order": 4,
                        "title": "Managing Game States",
                        "titleAr": "إدارة حالات اللعبة",
                        "type": "hands-on",
                        "duration": "25 min",
                        "durationAr": "25 دقيقة",
                        "objectives": ["Control different stages of a game using variables"],
                        "objectivesAr": ["التحكم في مراحل مختلفة للعبة باستخدام المتغيرات"]
                    },
                ]
            },

            {
                id: "m8",
                order: 8,
                title: "Building Your First Game",
                titleAr: "بناء أول لعبة",
                description:
                    "Planning and creating a simple game.",
                descriptionAr:
                    "تخطيط وبناء لعبة بسيطة.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m8l1",
                        order: 1,
                        title: "Game Design Basics",
                        titleAr: "أساسيات تصميم الألعاب",
                        type: "project",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Build a simple game"],
                        objectivesAr: ["بناء لعبة بسيطة"]
                    },
                    {
                        "id": "m8l2",
                        "order": 2,
                        "title": "Planning a Game Idea",
                        "titleAr": "تخطيط فكرة اللعبة",
                        "type": "article",
                        "duration": "20 min",
                        "durationAr": "20 دقيقة",
                        "objectives": ["Design the concept and flow of the game"],
                        "objectivesAr": ["تصميم مفهوم اللعبة وتسلسلها"]
                    },
                    {
                        "id": "m8l3",
                        "order": 3,
                        "title": "Designing Characters and Backgrounds",
                        "titleAr": "تصميم الشخصيات والخلفيات",
                        "type": "hands-on",
                        "duration": "30 min",
                        "durationAr": "30 دقيقة",
                        "objectives": ["Create sprites and backgrounds for the game"],
                        "objectivesAr": ["إنشاء الشخصيات والخلفيات للعبة"]
                    },
                    {
                        "id": "m8l4",
                        "order": 4,
                        "title": "Creating Game Rules",
                        "titleAr": "إنشاء قواعد اللعبة",
                        "type": "hands-on",
                        "duration": "25 min",
                        "durationAr": "25 دقيقة",
                        "objectives": ["Define how the game operates and objectives"],
                        "objectivesAr": ["تحديد كيفية عمل اللعبة وأهدافها"]
                    },
                    {
                        "id": "m8l5",
                        "order": 5,
                        "title": "Testing and Improving Gameplay",
                        "titleAr": "اختبار وتحسين طريقة اللعب",
                        "type": "hands-on",
                        "duration": "30 min",
                        "durationAr": "30 دقيقة",
                        "objectives": ["Test and refine game mechanics"],
                        "objectivesAr": ["اختبار وتحسين آليات اللعبة"]
                    },
                ]
            },

            {
                id: "m9",
                order: 9,
                title: "Game Mechanics and Challenges",
                titleAr: "آليات اللعب والتحديات",
                description:
                    "Adding levels, difficulty, and scoring.",
                descriptionAr:
                    "إضافة مستويات وصعوبة ونقاط.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m9l1",
                        order: 1,
                        title: "Levels and Scoring",
                        titleAr: "المستويات والنقاط",
                        type: "hands-on",
                        duration: "45 min",
                        durationAr: "45 دقيقة",
                        objectives: ["Enhance game challenge"],
                        objectivesAr: ["تحسين تحدي اللعبة"]
                    },
                    {
                        "id": "m9l2",
                        "order": 2,
                        "title": "Collision Detection and Obstacles",
                        "titleAr": "كشف التصادم والعقبات",
                        "type": "hands-on",
                        "duration": "30 min",
                        "durationAr": "30 دقيقة",
                        "objectives": ["Detect collisions between sprites", "Add obstacles to increase challenge"],
                        "objectivesAr": ["كشف التصادم بين الشخصيات", "إضافة عقبات لزيادة التحدي"]
                    },
                    {
                        "id": "m9l3",
                        "order": 3,
                        "title": "Increasing Difficulty",
                        "titleAr": "زيادة الصعوبة",
                        "type": "hands-on",
                        "duration": "20 min",
                        "durationAr": "20 دقيقة",
                        "objectives": ["Make games more challenging"],
                        "objectivesAr": ["جعل الألعاب أكثر تحديًا"]
                    },
                    {
                        "id": "m9l4",
                        "order": 4,
                        "title": "Winning Conditions",
                        "titleAr": "شروط الفوز",
                        "type": "hands-on",
                        "duration": "20 min",
                        "durationAr": "20 دقيقة",
                        "objectives": ["Define game victory criteria"],
                        "objectivesAr": ["تحديد معايير الفوز في اللعبة"]
                    },
                ]
            },

            {
                id: "m10",
                order: 10,
                title: "Interactive Stories",
                titleAr: "القصص التفاعلية",
                description:
                    "Combining storytelling with code.",
                descriptionAr:
                    "دمج القصة مع البرمجة.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m10l1",
                        order: 1,
                        title: "Storytelling with Scratch",
                        titleAr: "رواية القصص باستخدام سكراتش",
                        type: "project",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: ["Create interactive stories"],
                        objectivesAr: ["إنشاء قصص تفاعلية"]
                    },
                    {
                        "id": "m10l2",
                        "order": 2,
                        "title": "Storyboarding with Scratch",
                        "titleAr": "رسم القصة المصورة باستخدام سكراتش",
                        "type": "hands-on",
                        "duration": "25 min",
                        "durationAr": "25 دقيقة",
                        "objectives": ["Plan story flow and scenes"],
                        "objectivesAr": ["تخطيط تسلسل القصة والمشاهد"]
                    },
                    {
                        "id": "m10l3",
                        "order": 3,
                        "title": "Creating Dialogues",
                        "titleAr": "إنشاء الحوارات",
                        "type": "hands-on",
                        "duration": "25 min",
                        "durationAr": "25 دقيقة",
                        "objectives": ["Add conversations between characters"],
                        "objectivesAr": ["إضافة الحوارات بين الشخصيات"]
                    },
                    {
                        "id": "m10l4",
                        "order": 4,
                        "title": "Making Stories Interactive",
                        "titleAr": "جعل القصص تفاعلية",
                        "type": "hands-on",
                        "duration": "20 min",
                        "durationAr": "20 دقيقة",
                        "objectives": ["Enable user input to influence story"],
                        "objectivesAr": ["تمكين المستخدم من التأثير على القصة"]
                    },
                ]
            },

            {
                id: "m11",
                order: 11,
                title: "Advanced Animations",
                titleAr: "الرسوم المتحركة المتقدمة",
                description:
                    "Polishing animations and synchronization.",
                descriptionAr:
                    "تحسين الرسوم المتحركة وتزامنها.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m11l1",
                        order: 1,
                        title: "Broadcast Messages",
                        titleAr: "رسائل البث",
                        type: "hands-on",
                        duration: "45 min",
                        durationAr: "45 دقيقة",
                        objectives: ["Synchronize animations"],
                        objectivesAr: ["مزامنة الرسوم المتحركة"]
                    },
                    {
                        "id": "m11l2",
                        "order": 2,
                        "title": "Smooth Motion & Timing",
                        "titleAr": "الحركة السلسة والتوقيت",
                        "type": "hands-on",
                        "duration": "20 min",
                        "durationAr": "20 دقيقة",
                        "objectives": ["Create smoother animations", "Control timing of actions"],
                        "objectivesAr": ["إنشاء رسوم متحركة أكثر سلاسة", "التحكم في توقيت الإجراءات"]
                    },
                    {
                        "id": "m11l3",
                        "order": 3,
                        "title": "Scene Transitions",
                        "titleAr": "انتقالات المشاهد",
                        "type": "hands-on",
                        "duration": "20 min",
                        "durationAr": "20 دقيقة",
                        "objectives": ["Switch between scenes smoothly", "Use broadcast messages for transitions"],
                        "objectivesAr": ["التبديل بين المشاهد بسلاسة", "استخدام رسائل البث للانتقالات"]
                    },
                    {
                        "id": "m11l4",
                        "order": 4,
                        "title": "Synchronizing Actions",
                        "titleAr": "مزامنة الإجراءات",
                        "type": "hands-on",
                        "duration": "20 min",
                        "durationAr": "20 دقيقة",
                        "objectives": ["Coordinate multiple sprites and animations"],
                        "objectivesAr": ["تنسيق عدة شخصيات ورسوم متحركة"]
                    },
                    {
                        "id": "m11l5",
                        "order": 5,
                        "title": "Polishing Visual Effects",
                        "titleAr": "تحسين المؤثرات البصرية",
                        "type": "hands-on",
                        "duration": "20 min",
                        "durationAr": "20 دقيقة",
                        "objectives": ["Enhance overall visual quality"],
                        "objectivesAr": ["تحسين الجودة البصرية العامة"]
                    },
                ]
            },

            {
                id: "m12",
                order: 12,
                title: "Finding and Fixing Errors",
                titleAr: "اكتشاف الأخطاء وإصلاحها",
                description:
                    "Learning how to debug Scratch projects.",
                descriptionAr:
                    "تعلم تصحيح أخطاء مشاريع سكراتش.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m12l1",
                        order: 1,
                        title: "Debugging Basics",
                        titleAr: "أساسيات تصحيح الأخطاء",
                        type: "hands-on",
                        duration: "30 min",
                        durationAr: "30 دقيقة",
                        objectives: ["Fix simple bugs"],
                        objectivesAr: ["إصلاح أخطاء بسيطة"]
                    },
                    {
                        "id": "m12l2",
                        "order": 2,
                        "title": "Common Mistakes in Scratch",
                        "titleAr": "الأخطاء الشائعة في سكراتش",
                        "type": "hands-on",
                        "duration": "20 min",
                        "durationAr": "20 دقيقة",
                        "objectives": ["Identify frequent errors beginners make"],
                        "objectivesAr": ["التعرف على الأخطاء الشائعة التي يقع فيها المبتدئون"]
                    },
                    {
                        "id": "m12l3",
                        "order": 3,
                        "title": "Testing Strategies",
                        "titleAr": "استراتيجيات الاختبار",
                        "type": "hands-on",
                        "duration": "20 min",
                        "durationAr": "20 دقيقة",
                        "objectives": ["Learn how to test projects effectively"],
                        "objectivesAr": ["تعلم كيفية اختبار المشاريع بشكل فعال"]
                    },
                    {
                        "id": "m12l4",
                        "order": 4,
                        "title": "Improving Performance",
                        "titleAr": "تحسين الأداء",
                        "type": "hands-on",
                        "duration": "20 min",
                        "durationAr": "20 دقيقة",
                        "objectives": ["Optimize project speed and smoothness"],
                        "objectivesAr": ["تحسين سرعة المشروع وسلاسته"]
                    },
                ]
            },

            {
                id: "m13",
                order: 13,
                title: "Creative Problem Solving",
                titleAr: "حل المشكلات الإبداعي",
                description:
                    "Thinking independently and improving projects.",
                descriptionAr:
                    "التفكير المستقل وتحسين المشاريع.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m13l1",
                        order: 1,
                        title: "Breaking Problems into Steps",
                        titleAr: "تقسيم المشكلات إلى خطوات",
                        type: "hands-on",
                        duration: "30 min",
                        durationAr: "30 دقيقة",
                        objectives: ["Solve problems logically"],
                        objectivesAr: ["حل المشكلات منطقيًا"]
                    },
                    {
                        "id": "m13l2",
                        "order": 2,
                        "title": "Thinking Logically",
                        "titleAr": "التفكير المنطقي",
                        "type": "hands-on",
                        "duration": "20 min",
                        "durationAr": "20 دقيقة",
                        "objectives": ["Develop logical reasoning skills"],
                        "objectivesAr": ["تطوير مهارات التفكير المنطقي"]
                    },
                    {

                        "id": "m13l3",
                        "order": 3,
                        "title": "Improving Existing Projects",
                        "titleAr": "تحسين المشاريع القائمة",
                        "type": "hands-on",
                        "duration": "25 min",
                        "durationAr": "25 دقيقة",
                        "objectives": ["Refine and enhance previous projects"],
                        "objectivesAr": ["تحسين المشاريع السابقة وتعزيزها"]
                    },
                    {
                        "id": "m13l4",
                        "order": 4,
                        "title": "Encouraging Independent Thinking",
                        "titleAr": "تشجيع التفكير المستقل",
                        "type": "hands-on",
                        "duration": "20 min",
                        "durationAr": "20 دقيقة",
                        "objectives": ["Foster independent problem solving"],
                        "objectivesAr": ["تشجيع حل المشكلات بشكل مستقل"]
                    },
                ]
            },

            {
                id: "m14",
                order: 14,
                title: "Capstone Project",
                titleAr: "المشروع النهائي",
                description:
                    "Building a complete creative Scratch project.",
                descriptionAr:
                    "بناء مشروع سكراتش إبداعي متكامل.",
                duration: "2 Weeks",
                durationAr: "أسبوعان",
                lessons: [
                    {
                        id: "m14l1",
                        order: 1,
                        title: "Capstone Project Build",
                        titleAr: "تنفيذ المشروع النهائي",
                        type: "project",
                        duration: "3 Hours",
                        durationAr: "3 ساعات",
                        objectives: ["Apply all learned skills"],
                        objectivesAr: ["تطبيق جميع المهارات المكتسبة"]
                    },
                    {
                        "id": "m14l2",
                        "order": 2,
                        "title": "Planning and Design",
                        "titleAr": "التخطيط والتصميم",
                        "type": "article",
                        "duration": "30 min",
                        "durationAr": "30 دقيقة",
                        "objectives": ["Plan the project structure and elements"],
                        "objectivesAr": ["تخطيط هيكل وعناصر المشروع"]
                    },
                    {
                        "id": "m14l3",
                        "order": 3,
                        "title": "Testing and Refinement",
                        "titleAr": "الاختبار والتحسين",
                        "type": "hands-on",
                        "duration": "40 min",
                        "durationAr": "40 دقيقة",
                        "objectives": ["Test and improve the final project"],
                        "objectivesAr": ["اختبار وتحسين المشروع النهائي"]
                    },
                ]
            },

            {
                id: "m15",
                order: 15,
                title: "Sharing and Showcasing Your Work",
                titleAr: "مشاركة وعرض أعمالك",
                description:
                    "Presenting projects and celebrating achievements.",
                descriptionAr:
                    "عرض المشاريع والاحتفال بالإنجازات.",
                duration: "1 Week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "m15l1",
                        order: 1,
                        title: "Sharing Projects",
                        titleAr: "مشاركة المشاريع",
                        type: "article",
                        duration: "20 min",
                        durationAr: "20 دقيقة",
                        objectives: ["Present and reflect on work"],
                        objectivesAr: ["عرض العمل والتأمل فيه"]
                    },
                    {
                        "id": "m15l2",
                        "order": 2,
                        "title": "Presenting Projects to Others",
                        "titleAr": "عرض المشاريع للآخرين",
                        "type": "hands-on",
                        "duration": "20 min",
                        "durationAr": "20 دقيقة",
                        "objectives": ["Present projects effectively"],
                        "objectivesAr": ["عرض المشاريع بفعالية"]
                    },
                    {
                        "id": "m15l3",
                        "order": 3,
                        "title": "Sharing on the Scratch Community",
                        "titleAr": "المشاركة في مجتمع سكراتش",
                        "type": "hands-on",
                        "duration": "15 min",
                        "durationAr": "15 دقيقة",
                        "objectives": ["Upload and share projects online"],
                        "objectivesAr": ["رفع المشاريع ومشاركتها عبر الإنترنت"]
                    },
                    {
                        "id": "m15l4",
                        "order": 4,
                        "title": "Giving and Receiving Feedback",
                        "titleAr": "تقديم واستقبال الملاحظات",
                        "type": "hands-on",
                        "duration": "20 min",
                        "durationAr": "20 دقيقة",
                        "objectives": ["Learn how to give and receive constructive feedback"],
                        "objectivesAr": ["تعلم كيفية تقديم واستقبال الملاحظات البناءة"]
                    },
                    {
                        "id": "m15l5",
                        "order": 5,
                        "title": "Celebrating Achievements",
                        "titleAr": "الاحتفال بالإنجازات",
                        "type": "article",
                        "duration": "15 min",
                        "durationAr": "15 دقيقة",
                        "objectives": ["Celebrate learning milestones and successes"],
                        "objectivesAr": ["الاحتفال بمعالم التعلم والنجاحات"]
                    }
                ]
            }
        ]
    },
    {
        id: "introduction-to-computer",
        courseModules: [
            // Module 1
            {
                id: "ch1",
                order: 1,
                title: "Understanding Computers",
                titleAr: "فهم الحاسوب",
                description: "Introduction to computers and their role in daily life.",
                descriptionAr: "مقدمة عن الحاسوب ودوره في الحياة اليومية.",
                duration: "3 Hours",
                durationAr: "3 ساعات",
                lessons: [
                    { id: "ch1-l1", order: 1, title: "What Is a Computer?", titleAr: "ما هو الحاسوب؟", type: "article", duration: "20 min", durationAr: "20 دقيقة", objectives: ["Define a computer"], objectivesAr: ["تعريف الحاسوب"] },
                    { id: "ch1-l2", order: 2, title: "Brief History of Computers", titleAr: "نبذة عن تاريخ الحاسوب", type: "article", duration: "20 min", durationAr: "20 دقيقة", objectives: ["Understand computer evolution"], objectivesAr: ["فهم تطور الحواسيب"] },
                    { id: "ch1-l3", order: 3, title: "Types of Computers", titleAr: "أنواع الحواسيب", type: "video", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Identify desktop, laptop, tablet, and smartphone"], objectivesAr: ["تمييز أجهزة الحاسوب المكتبية والمحمولة والأجهزة اللوحية والهواتف الذكية"] },
                    { id: "ch1-l4", order: 4, title: "How Computers Are Used in Daily Life", titleAr: "استخدام الحاسوب في الحياة اليومية", type: "article", duration: "20 min", durationAr: "20 دقيقة", objectives: ["Recognize real-life applications"], objectivesAr: ["التعرف على التطبيقات العملية للحاسوب"] },
                    { id: "ch1-l5", order: 5, title: "Computer Systems Overview", titleAr: "نظرة عامة على أنظمة الحاسوب", type: "article", duration: "20 min", durationAr: "20 دقيقة", objectives: ["Understand components of a computer system"], objectivesAr: ["فهم مكونات نظام الحاسوب"] }
                ]
            },

            // Module 2
            {
                id: "ch2",
                order: 2,
                title: "Computer Hardware Fundamentals",
                titleAr: "أساسيات مكونات الحاسوب",
                description: "Learn about physical components of computers.",
                descriptionAr: "التعرف على المكونات المادية للحواسيب.",
                duration: "4 Hours",
                durationAr: "4 ساعات",
                lessons: [
                    { id: "ch2-l1", order: 1, title: "Main Components of a Computer", titleAr: "المكونات الرئيسية للحاسوب", type: "video", duration: "30 min", durationAr: "30 دقيقة", objectives: ["Identify main hardware components"], objectivesAr: ["التعرف على المكونات الأساسية للحاسوب"] },
                    { id: "ch2-l2", order: 2, title: "Input Devices", titleAr: "أجهزة الإدخال", type: "article", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Learn about keyboard, mouse, scanner, and camera"], objectivesAr: ["التعرف على لوحة المفاتيح، الفأرة، الماسح الضوئي، والكاميرا"] },
                    { id: "ch2-l3", order: 3, title: "Output Devices", titleAr: "أجهزة الإخراج", type: "article", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Learn about monitor, printer, speakers"], objectivesAr: ["التعرف على الشاشة والطابعة ومكبرات الصوت"] },
                    { id: "ch2-l4", order: 4, title: "Processing Components", titleAr: "المكونات المعالجة", type: "video", duration: "30 min", durationAr: "30 دقيقة", objectives: ["Understand CPU and RAM"], objectivesAr: ["فهم المعالج والذاكرة"] },
                    { id: "ch2-l5", order: 5, title: "Storage Devices", titleAr: "وسائط التخزين", type: "article", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Compare HDD, SSD, USB, Cloud"], objectivesAr: ["مقارنة محركات الأقراص الصلبة والصلبة والفلاش والتخزين السحابي"] },
                    { id: "ch2-l6", order: 6, title: "Ports and Cables", titleAr: "المنافذ والكابلات", type: "article", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Identify common ports and cables"], objectivesAr: ["التعرف على المنافذ والكابلات الشائعة"] },
                    {
                        "id": "ch2-l7",
                        "order": 7,
                        "title": "Peripheral vs Internal Components",
                        "titleAr": "الأجهزة الطرفية مقابل المكونات الداخلية",
                        "type": "article",
                        "duration": "20 min",
                        "durationAr": "20 دقيقة",
                        "objectives": ["Differentiate between internal and external hardware components"],
                        "objectivesAr": ["التمييز بين المكونات الداخلية والخارجية للأجهزة"]
                    }

                ]
            },

            // Module 3
            {
                id: "ch3",
                order: 3,
                title: "Software Basics",
                titleAr: "أساسيات البرمجيات",
                description: "Introduction to software, types, and operating systems.",
                descriptionAr: "مقدمة عن البرمجيات وأنواعها وأنظمة التشغيل.",
                duration: "3.5 Hours",
                durationAr: "3.5 ساعات",
                lessons: [
                    { id: "ch3-l1", order: 1, title: "What Is Software?", titleAr: "ما هي البرمجيات؟", type: "article", duration: "20 min", durationAr: "20 دقيقة", objectives: ["Define software"], objectivesAr: ["تعريف البرمجيات"] },
                    { id: "ch3-l2", order: 2, title: "System Software vs Application Software", titleAr: "برمجيات النظام والتطبيقات", type: "article", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Distinguish between system and application software"], objectivesAr: ["التمييز بين برمجيات النظام والتطبيقات"] },
                    { id: "ch3-l3", order: 3, title: "Operating Systems Overview", titleAr: "نظرة عامة على أنظمة التشغيل", type: "video", duration: "30 min", durationAr: "30 دقيقة", objectives: ["Understand role of operating systems"], objectivesAr: ["فهم دور أنظمة التشغيل"] },
                    { id: "ch3-l4", order: 4, title: "Popular Operating Systems", titleAr: "أنظمة التشغيل الشائعة", type: "article", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Identify Windows, macOS, Linux"], objectivesAr: ["التعرف على Windows و macOS و Linux"] },
                    { id: "ch3-l5", order: 5, title: "Installing and Updating Software", titleAr: "تثبيت وتحديث البرمجيات", type: "hands-on", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Install and update programs"], objectivesAr: ["تثبيت البرامج وتحديثها"] },
                    {
                        "id": "ch3-l6",
                        "order": 6,
                        "title": "Software Licensing Types",
                        "titleAr": "أنواع تراخيص البرمجيات",
                        "type": "article",
                        "duration": "20 min",
                        "durationAr": "20 دقيقة",
                        "objectives": ["Understand freeware, open source, and commercial software"],
                        "objectivesAr": ["فهم البرمجيات المجانية والمفتوحة المصدر والتجارية"]
                    }

                ]
            },

            // Module 4
            {
                id: "ch4",
                order: 4,
                title: "Getting Started with the Operating System",
                titleAr: "البدء مع نظام التشغيل",
                description: "Learn to navigate and personalize OS environments.",
                descriptionAr: "تعلم كيفية التنقل وتخصيص بيئة نظام التشغيل.",
                duration: "4 Hours",
                durationAr: "4 ساعات",
                lessons: [
                    { id: "ch4-l1", order: 1, title: "Desktop, Taskbar, and Start Menu", titleAr: "سطح المكتب وشريط المهام وقائمة ابدأ", type: "hands-on", duration: "40 min", durationAr: "40 دقيقة", objectives: ["Navigate desktop and menus"], objectivesAr: ["التنقل في سطح المكتب والقوائم"] },
                    { id: "ch4-l2", order: 2, title: "Using Mouse and Keyboard Effectively", titleAr: "استخدام الفأرة ولوحة المفاتيح بفعالية", type: "hands-on", duration: "30 min", durationAr: "30 دقيقة", objectives: ["Master basic input methods"], objectivesAr: ["إتقان طرق الإدخال الأساسية"] },
                    { id: "ch4-l3", order: 3, title: "Managing Windows and Applications", titleAr: "إدارة النوافذ والتطبيقات", type: "article", duration: "30 min", durationAr: "30 دقيقة", objectives: ["Open, close, and switch applications"], objectivesAr: ["فتح وإغلاق والتبديل بين التطبيقات"] },
                    { id: "ch4-l4", order: 4, title: "System Settings and Personalization", titleAr: "إعدادات النظام والتخصيص", type: "hands-on", duration: "30 min", durationAr: "30 دقيقة", objectives: ["Customize OS settings"], objectivesAr: ["تخصيص إعدادات نظام التشغيل"] },
                    { id: "ch4-l5", order: 5, title: "Basic Troubleshooting", titleAr: "استكشاف الأخطاء وإصلاحها", type: "article", duration: "30 min", durationAr: "30 دقيقة", objectives: ["Perform basic troubleshooting"], objectivesAr: ["تنفيذ استكشاف الأخطاء وإصلاحها الأساسي"] }
                ]
            },

            // Module 5
            {
                id: "ch5",
                order: 5,
                title: "File and Folder Management",
                titleAr: "إدارة الملفات والمجلدات",
                description: "Learn to organize and manage files and folders.",
                descriptionAr: "تعلم كيفية تنظيم وإدارة الملفات والمجلدات.",
                duration: "4 Hours",
                durationAr: "4 ساعات",
                lessons: [
                    { id: "ch5-l1", order: 1, title: "Understanding Files and Folders", titleAr: "فهم الملفات والمجلدات", type: "article", duration: "30 min", durationAr: "30 دقيقة", objectives: ["Understand file structures"], objectivesAr: ["فهم هيكل الملفات"] },
                    { id: "ch5-l2", order: 2, title: "Creating, Renaming, and Deleting Files", titleAr: "إنشاء وإعادة تسمية وحذف الملفات", type: "hands-on", duration: "30 min", durationAr: "30 دقيقة", objectives: ["Perform basic file operations"], objectivesAr: ["تنفيذ العمليات الأساسية على الملفات"] },
                    { id: "ch5-l3", order: 3, title: "Organizing Data Efficiently", titleAr: "تنظيم البيانات بكفاءة", type: "hands-on", duration: "30 min", durationAr: "30 دقيقة", objectives: ["Organize folders and files logically"], objectivesAr: ["تنظيم الملفات والمجلدات بشكل منطقي"] },
                    { id: "ch5-l4", order: 4, title: "File Types and Extensions", titleAr: "أنواع الملفات والامتدادات", type: "article", duration: "30 min", durationAr: "30 دقيقة", objectives: ["Identify common file types"], objectivesAr: ["التعرف على أنواع الملفات الشائعة"] },
                    { id: "ch5-l5", order: 5, title: "Backup and Storage Best Practices", titleAr: "نسخ احتياطي وأفضل ممارسات التخزين", type: "article", duration: "30 min", durationAr: "30 دقيقة", objectives: ["Perform backups effectively"], objectivesAr: ["إجراء النسخ الاحتياطي بشكل فعال"] }
                ]
            },

            // Module 6
            {
                id: "ch6",
                order: 6,
                title: "Introduction to the Internet",
                titleAr: "مقدمة عن الإنترنت",
                description: "Basics of the internet, browsers, and online tools.",
                descriptionAr: "أساسيات الإنترنت والمتصفحات والأدوات عبر الإنترنت.",
                duration: "3 Hours",
                durationAr: "3 ساعات",
                lessons: [
                    { id: "ch6-l1", order: 1, title: "What Is the Internet?", titleAr: "ما هو الإنترنت؟", type: "article", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Understand the Internet concept"], objectivesAr: ["فهم مفهوم الإنترنت"] },
                    { id: "ch6-l2", order: 2, title: "Browsers and Search Engines", titleAr: "المتصفحات ومحركات البحث", type: "video", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Use browsers and search engines"], objectivesAr: ["استخدام المتصفحات ومحركات البحث"] },
                    { id: "ch6-l3", order: 3, title: "Safe and Effective Web Browsing", titleAr: "تصفح الإنترنت بأمان وفعالية", type: "hands-on", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Browse safely"], objectivesAr: ["التصفح الآمن"] },
                    { id: "ch6-l4", order: 4, title: "Downloading and Uploading Files", titleAr: "تحميل ورفع الملفات", type: "hands-on", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Download and upload files"], objectivesAr: ["تحميل ورفع الملفات"] },
                    { id: "ch6-l5", order: 5, title: "Understanding Cloud Services", titleAr: "فهم الخدمات السحابية", type: "article", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Learn cloud concepts"], objectivesAr: ["فهم مفهوم الخدمات السحابية"] },
                    {
                        "id": "ch6-l6",
                        "order": 6,
                        "title": "Basic Internet Safety & Security",
                        "titleAr": "أساسيات أمان الإنترنت والحماية",
                        "type": "hands-on",
                        "duration": "25 min",
                        "durationAr": "25 دقيقة",
                        "objectives": ["Identify online threats and safe browsing practices"],
                        "objectivesAr": ["التعرف على التهديدات عبر الإنترنت وممارسات التصفح الآمن"]
                    }

                ]
            },

            // Module 7
            {
                id: "ch7",
                order: 7,
                title: "Digital Communication Tools",
                titleAr: "أدوات الاتصال الرقمي",
                description: "Learn how to communicate online professionally.",
                descriptionAr: "تعلم كيفية التواصل عبر الإنترنت بطريقة مهنية.",
                duration: "3 Hours",
                durationAr: "3 ساعات",
                lessons: [
                    { id: "ch7-l1", order: 1, title: "Email Fundamentals", titleAr: "أساسيات البريد الإلكتروني", type: "article", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Learn email basics"], objectivesAr: ["تعلم أساسيات البريد الإلكتروني"] },
                    { id: "ch7-l2", order: 2, title: "Creating and Managing Email Accounts", titleAr: "إنشاء وإدارة حسابات البريد الإلكتروني", type: "hands-on", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Create and manage accounts"], objectivesAr: ["إنشاء وإدارة الحسابات"] },
                    { id: "ch7-l3", order: 3, title: "Online Meetings and Video Conferencing", titleAr: "الاجتماعات عبر الإنترنت ومؤتمرات الفيديو", type: "video", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Participate in online meetings"], objectivesAr: ["المشاركة في الاجتماعات عبر الإنترنت"] },
                    { id: "ch7-l4", order: 4, title: "Messaging and Collaboration Tools", titleAr: "أدوات المراسلة والتعاون", type: "article", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Use collaboration tools"], objectivesAr: ["استخدام أدوات التعاون"] },
                    { id: "ch7-l5", order: 5, title: "Digital Etiquette and Professional Communication", titleAr: "آداب الإنترنت والتواصل المهني", type: "article", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Communicate professionally online"], objectivesAr: ["التواصل المهني عبر الإنترنت"] }
                ]
            },

            // Module 8
            {
                id: "ch8",
                order: 8,
                title: "Computer Security and Safety",
                titleAr: "أمان وسلامة الحاسوب",
                description: "Learn to protect computers and personal data.",
                descriptionAr: "تعلم حماية الحاسوب والبيانات الشخصية.",
                duration: "3 Hours",
                durationAr: "3 ساعات",
                lessons: [
                    { id: "ch8-l1", order: 1, title: "Common Security Threats", titleAr: "التهديدات الأمنية الشائعة", type: "article", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Identify security risks"], objectivesAr: ["التعرف على المخاطر الأمنية"] },
                    { id: "ch8-l2", order: 2, title: "Viruses, Malware, and Phishing", titleAr: "الفيروسات والبرمجيات الخبيثة والهجمات الاحتيالية", type: "article", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Understand malware types"], objectivesAr: ["فهم أنواع البرمجيات الخبيثة"] },
                    { id: "ch8-l3", order: 3, title: "Using Antivirus Software", titleAr: "استخدام برامج مكافحة الفيروسات", type: "hands-on", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Install and use antivirus software"], objectivesAr: ["تثبيت واستخدام برامج مكافحة الفيروسات"] },
                    { id: "ch8-l4", order: 4, title: "Password Management and Best Practices", titleAr: "إدارة كلمات المرور وأفضل الممارسات", type: "hands-on", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Manage passwords securely"], objectivesAr: ["إدارة كلمات المرور بأمان"] },
                    { id: "ch8-l5", order: 5, title: "Data Privacy and Personal Safety", titleAr: "خصوصية البيانات والسلامة الشخصية", type: "article", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Protect personal data"], objectivesAr: ["حماية البيانات الشخصية"] }
                ]
            },

            // Module 9
            {
                id: "ch9",
                order: 9,
                title: "Productivity Tools",
                titleAr: "أدوات الإنتاجية",
                description: "Learn to use office software efficiently.",
                descriptionAr: "تعلم استخدام برامج المكتب بكفاءة.",
                duration: "3 Hours",
                durationAr: "3 ساعات",
                lessons: [
                    { id: "ch9-l1", order: 1, title: "Introduction to Word Processing", titleAr: "مقدمة لمعالجة النصوص", type: "hands-on", duration: "30 min", durationAr: "30 دقيقة", objectives: ["Create and edit documents"], objectivesAr: ["إنشاء وتحرير المستندات"] },
                    { id: "ch9-l2", order: 2, title: "Spreadsheets Basics", titleAr: "أساسيات الجداول", type: "hands-on", duration: "30 min", durationAr: "30 دقيقة", objectives: ["Use spreadsheets for calculations"], objectivesAr: ["استخدام الجداول لإجراء الحسابات"] },
                    { id: "ch9-l3", order: 3, title: "Presentations Essentials", titleAr: "أساسيات العروض التقديمية", type: "hands-on", duration: "30 min", durationAr: "30 دقيقة", objectives: ["Create presentation slides"], objectivesAr: ["إنشاء شرائح العروض التقديمية"] },
                    { id: "ch9-l4", order: 4, title: "File Sharing and Collaboration", titleAr: "مشاركة الملفات والتعاون", type: "hands-on", duration: "30 min", durationAr: "30 دقيقة", objectives: ["Share and collaborate on files"], objectivesAr: ["مشاركة والتعاون على الملفات"] },
                    { id: "ch9-l5", order: 5, title: "Practical Office Tasks", titleAr: "مهام عملية في المكتب", type: "hands-on", duration: "30 min", durationAr: "30 دقيقة", objectives: ["Apply office tools in tasks"], objectivesAr: ["تطبيق أدوات المكتب في المهام العملية"] }
                ]
            },

            // Module 10
            {
                id: "ch10",
                order: 10,
                title: "Introduction to Problem Solving with Computers",
                titleAr: "مقدمة في حل المشكلات باستخدام الحاسوب",
                description: "Learn the basics of logic, algorithms, and programming.",
                descriptionAr: "تعلم أساسيات المنطق والخوارزميات والبرمجة.",
                duration: "3 Hours",
                durationAr: "3 ساعات",
                lessons: [
                    { id: "ch10-l1", order: 1, title: "Thinking Digitally", titleAr: "التفكير الرقمي", type: "article", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Understand digital thinking"], objectivesAr: ["فهم التفكير الرقمي"] },
                    { id: "ch10-l2", order: 2, title: "Understanding Basic Logic", titleAr: "فهم المنطق الأساسي", type: "article", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Learn logical reasoning"], objectivesAr: ["تعلم التفكير المنطقي"] },
                    { id: "ch10-l3", order: 3, title: "Introduction to Algorithms", titleAr: "مقدمة في الخوارزميات", type: "article", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Understand algorithms"], objectivesAr: ["فهم الخوارزميات"] },
                    { id: "ch10-l4", order: 4, title: "What Is Programming?", titleAr: "ما هي البرمجة؟", type: "article", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Learn programming concepts"], objectivesAr: ["تعلم مفاهيم البرمجة"] },
                    { id: "ch10-l5", order: 5, title: "Preparing for Future Programming Courses", titleAr: "الاستعداد لدورات البرمجة المستقبلية", type: "article", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Prepare for advanced courses"], objectivesAr: ["الاستعداد للدورات المتقدمة"] },
                    {
                        "id": "ch10-l6",
                        "order": 6,
                        "title": "Flowcharts and Pseudocode",
                        "titleAr": "المخططات الانسيابية والكود الشبه مزيف",
                        "type": "article",
                        "duration": "25 min",
                        "durationAr": "25 دقيقة",
                        "objectives": ["Visualize algorithms using flowcharts and pseudocode"],
                        "objectivesAr": ["تمثيل الخوارزميات بصريًا باستخدام المخططات الانسيابية والكود الشبه مزيف"]
                    }

                ]
            },

            // Module 11
            {
                id: "ch11",
                order: 11,
                title: "Responsible and Ethical Computer Use",
                titleAr: "الاستخدام المسؤول والأخلاقي للحاسوب",
                description: "Learn digital citizenship and ethical computing practices.",
                descriptionAr: "تعلم المواطنة الرقمية وممارسات الحوسبة الأخلاقية.",
                duration: "2.5 Hours",
                durationAr: "2.5 ساعات",
                lessons: [
                    { id: "ch11-l1", order: 1, title: "Digital Citizenship", titleAr: "المواطنة الرقمية", type: "article", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Understand rights and responsibilities online"], objectivesAr: ["فهم الحقوق والمسؤوليات عبر الإنترنت"] },
                    { id: "ch11-l2", order: 2, title: "Copyright and Fair Use", titleAr: "حقوق النشر والاستخدام العادل", type: "article", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Respect intellectual property"], objectivesAr: ["احترام الملكية الفكرية"] },
                    { id: "ch11-l3", order: 3, title: "Responsible Internet Usage", titleAr: "استخدام الإنترنت بمسؤولية", type: "article", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Practice safe internet usage"], objectivesAr: ["ممارسة الاستخدام الآمن للإنترنت"] },
                    { id: "ch11-l4", order: 4, title: "Technology and Society", titleAr: "التكنولوجيا والمجتمع", type: "article", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Understand societal impacts of technology"], objectivesAr: ["فهم تأثير التكنولوجيا على المجتمع"] }
                ]
            },

            // Module 12
            {
                id: "ch12",
                order: 12,
                title: "Final Practical Project",
                titleAr: "المشروع العملي النهائي",
                description: "Apply learned skills in a practical project.",
                descriptionAr: "تطبيق المهارات المكتسبة في مشروع عملي.",
                duration: "3 Hours",
                durationAr: "3 ساعات",
                lessons: [
                    { id: "ch12-l1", order: 1, title: "Using a Computer Independently", titleAr: "استخدام الحاسوب بشكل مستقل", type: "hands-on", duration: "40 min", durationAr: "40 دقيقة", objectives: ["Perform tasks independently"], objectivesAr: ["تنفيذ المهام بشكل مستقل"] },
                    { id: "ch12-l2", order: 2, title: "Internet Research Task", titleAr: "مهمة البحث عبر الإنترنت", type: "hands-on", duration: "40 min", durationAr: "40 دقيقة", objectives: ["Conduct online research"], objectivesAr: ["إجراء البحث عبر الإنترنت"] },
                    { id: "ch12-l3", order: 3, title: "File Organization Assignment", titleAr: "مهمة تنظيم الملفات", type: "hands-on", duration: "40 min", durationAr: "40 دقيقة", objectives: ["Organize files effectively"], objectivesAr: ["تنظيم الملفات بشكل فعال"] },
                    { id: "ch12-l4", order: 4, title: "Presentation of Work", titleAr: "عرض العمل", type: "hands-on", duration: "40 min", durationAr: "40 دقيقة", objectives: ["Present completed work"], objectivesAr: ["عرض العمل المكتمل"] },
                    { id: "ch12-l5", order: 5, title: "Course Review and Next Steps", titleAr: "مراجعة الدورة والخطوات التالية", type: "article", duration: "30 min", durationAr: "30 دقيقة", objectives: ["Review key concepts and plan next steps"], objectivesAr: ["مراجعة المفاهيم الأساسية والتخطيط للخطوات التالية"] },
                    {
                        "id": "ch12-l6",
                        "order": 6,
                        "title": "Peer Review and Feedback",
                        "titleAr": "مراجعة الأقران والتعليقات",
                        "type": "hands-on",
                        "duration": "30 min",
                        "durationAr": "30 دقيقة",
                        "objectives": ["Review classmates' work and provide constructive feedback"],
                        "objectivesAr": ["مراجعة أعمال الزملاء وتقديم ملاحظات بنّاءة"]
                    }

                ]
            }
        ]
    },
    {
        id: "creative-robotics-arduino-scratch",
        courseModules: [
            {
                id: "module-1",
                order: 1,
                title: "Introduction to Robotics",
                titleAr: "مقدمة في علم الروبوتات",
                description:
                    "An introduction to robotics concepts and how hardware and software interact.",
                descriptionAr:
                    "مقدمة في مفاهيم الروبوتات وكيفية تفاعل العتاد مع البرمجيات.",
                duration: "1 week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "lesson-1-1",
                        order: 1,
                        title: "What Is Robotics?",
                        titleAr: "ما هي الروبوتات؟",
                        type: "video",
                        duration: "20 min",
                        durationAr: "20 دقيقة",
                        objectives: ["Understand the definition of robotics"],
                        objectivesAr: ["فهم تعريف علم الروبوتات"],
                        isPreview: true
                    },
                    {
                        id: "lesson-1-2",
                        order: 2,
                        title: "Robots in Everyday Life",
                        titleAr: "الروبوتات في حياتنا اليومية",
                        type: "article",
                        duration: "15 min",
                        durationAr: "15 دقيقة",
                        objectives: ["Identify real-world robot applications"],
                        objectivesAr: ["التعرف على استخدامات الروبوتات في الواقع"]
                    },
                    {
                        id: "lesson-1-3",
                        order: 3,
                        title: "Hardware and Software Together",
                        titleAr: "تكامل العتاد والبرمجيات",
                        type: "video",
                        duration: "20 min",
                        durationAr: "20 دقيقة",
                        objectives: ["Understand hardware-software interaction"],
                        objectivesAr: ["فهم العلاقة بين العتاد والبرمجيات"]
                    }
                ]
            },

            {
                id: "module-2",
                order: 2,
                title: "Getting Started with Arduino",
                titleAr: "البدء باستخدام أردوينو",
                description:
                    "Learn Arduino basics, components, safety, and setup.",
                descriptionAr:
                    "تعلم أساسيات أردوينو والمكونات وقواعد السلامة والإعداد.",
                duration: "1 week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "lesson-2-1",
                        order: 1,
                        title: "What Is Arduino?",
                        titleAr: "ما هو أردوينو؟",
                        type: "video",
                        duration: "20 min",
                        durationAr: "20 دقيقة",
                        objectives: ["Understand Arduino and its purpose"],
                        objectivesAr: ["فهم مفهوم أردوينو واستخداماته"]
                    },
                    {
                        id: "lesson-2-2",
                        order: 2,
                        title: "Boards and Components",
                        titleAr: "اللوحات والمكونات",
                        type: "hands-on",
                        duration: "30 min",
                        durationAr: "30 دقيقة",
                        objectives: ["Identify Arduino components"],
                        objectivesAr: ["التعرف على مكونات أردوينو"]
                    },
                    {
                        id: "lesson-2-3",
                        order: 3,
                        title: "Power, Safety, and Best Practices",
                        titleAr: "الطاقة والسلامة وأفضل الممارسات",
                        type: "article",
                        duration: "15 min",
                        durationAr: "15 دقيقة",
                        objectives: [
                            "Understand safe power usage",
                            "Avoid common hardware mistakes"
                        ],
                        objectivesAr: [
                            "فهم استخدام الطاقة بشكل آمن",
                            "تجنب أخطاء العتاد الشائعة"
                        ]
                    },
                    {
                        id: "lesson-2-4",
                        order: 4,
                        title: "Setting Up the Arduino Environment",
                        titleAr: "إعداد بيئة أردوينو",
                        type: "hands-on",
                        duration: "30 min",
                        durationAr: "30 دقيقة",
                        objectives: [
                            "Install and configure Arduino tools"
                        ],
                        objectivesAr: [
                            "تثبيت وإعداد أدوات أردوينو"
                        ]
                    }
                ]
            },

            {
                id: "module-3",
                order: 3,
                title: "Scratch for Hardware Control",
                titleAr: "سكراش للتحكم في العتاد",
                description:
                    "Use Scratch to control Arduino hardware.",
                descriptionAr:
                    "استخدام سكراش للتحكم في عتاد أردوينو.",
                duration: "1 week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "lesson-3-1",
                        order: 1,
                        title: "Scratch vs Traditional Programming",
                        titleAr: "سكراش مقابل البرمجة التقليدية",
                        type: "article",
                        duration: "15 min",
                        durationAr: "15 دقيقة",
                        objectives: ["Compare visual and text programming"],
                        objectivesAr: ["مقارنة البرمجة المرئية والنصية"]
                    },
                    {
                        id: "lesson-3-2",
                        order: 2,
                        title: "Connecting Scratch to Arduino",
                        titleAr: "ربط سكراش بأردوينو",
                        type: "hands-on",
                        duration: "30 min",
                        durationAr: "30 دقيقة",
                        objectives: ["Connect Scratch with Arduino board"],
                        objectivesAr: ["ربط سكراش بلوحة أردوينو"]
                    },
                    {
                        id: "lesson-3-3",
                        order: 3,
                        title: "Scratch for Arduino Overview",
                        titleAr: "نظرة عامة على سكراش مع أردوينو",
                        type: "video",
                        duration: "20 min",
                        durationAr: "20 دقيقة",
                        objectives: [
                            "Understand Scratch-Arduino integration"
                        ],
                        objectivesAr: [
                            "فهم ربط سكراش بأردوينو"
                        ]
                    },
                    {
                        id: "lesson-3-4",
                        order: 4,
                        title: "Hardware Interaction Blocks",
                        titleAr: "كتل التحكم في العتاد",
                        type: "hands-on",
                        duration: "30 min",
                        durationAr: "30 دقيقة",
                        objectives: [
                            "Use Scratch blocks to control hardware"
                        ],
                        objectivesAr: [
                            "استخدام كتل سكراش للتحكم في العتاد"
                        ]
                    }
                ]
            },

            {
                id: "module-4",
                order: 4,
                title: "Digital Inputs and Outputs",
                titleAr: "المدخلات والمخرجات الرقمية",
                description:
                    "Control LEDs, buzzers, and buttons using Scratch.",
                descriptionAr:
                    "التحكم في المصابيح والأجراس والأزرار باستخدام سكراش.",
                duration: "1 week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "lesson-4-1",
                        order: 1,
                        title: "Controlling LEDs and Buzzers",
                        titleAr: "التحكم في المصابيح والأجراس",
                        type: "hands-on",
                        duration: "30 min",
                        durationAr: "30 دقيقة",
                        objectives: ["Control digital outputs"],
                        objectivesAr: ["التحكم في المخرجات الرقمية"]
                    },
                    {
                        id: "lesson-4-2",
                        order: 2,
                        title: "Understanding Digital Signals",
                        titleAr: "فهم الإشارات الرقمية",
                        type: "video",
                        duration: "20 min",
                        durationAr: "20 دقيقة",
                        objectives: [
                            "Understand HIGH and LOW signals"
                        ],
                        objectivesAr: [
                            "فهم الإشارات HIGH و LOW"
                        ]
                    },
                    {
                        id: "lesson-4-3",
                        order: 3,
                        title: "Using Buttons and Switches",
                        titleAr: "استخدام الأزرار والمفاتيح",
                        type: "hands-on",
                        duration: "30 min",
                        durationAr: "30 دقيقة",
                        objectives: [
                            "Read digital inputs from buttons"
                        ],
                        objectivesAr: [
                            "قراءة المدخلات الرقمية من الأزرار"
                        ]
                    },
                    {
                        id: "lesson-4-4",
                        order: 4,
                        title: "Building Interactive Circuits",
                        titleAr: "بناء دوائر تفاعلية",
                        type: "hands-on",
                        duration: "40 min",
                        durationAr: "40 دقيقة",
                        objectives: [
                            "Build interactive LED-button circuits"
                        ],
                        objectivesAr: [
                            "بناء دوائر تفاعلية باستخدام الأزرار والمصابيح"
                        ]
                    }

                ]
            },

            {
                id: "module-5",
                order: 5,
                title: "Working with Sensors",
                titleAr: "التعامل مع الحساسات",
                description:
                    "Use sensors to read environmental data.",
                descriptionAr:
                    "استخدام الحساسات لقراءة بيانات البيئة.",
                duration: "2 weeks",
                durationAr: "أسبوعان",
                lessons: [
                    {
                        id: "lesson-5-1",
                        order: 1,
                        title: "Types of Sensors",
                        titleAr: "أنواع الحساسات",
                        type: "video",
                        duration: "25 min",
                        durationAr: "25 دقيقة",
                        objectives: ["Understand sensor categories"],
                        objectivesAr: ["فهم أنواع الحساسات"]
                    },
                    {
                        id: "lesson-5-2",
                        order: 2,
                        title: "Light, Temperature, and Distance Sensors",
                        titleAr: "حساسات الضوء والحرارة والمسافة",
                        type: "hands-on",
                        duration: "40 min",
                        durationAr: "40 دقيقة",
                        objectives: [
                            "Use common sensors with Arduino"
                        ],
                        objectivesAr: [
                            "استخدام الحساسات الشائعة مع أردوينو"
                        ]
                    },
                    {
                        id: "lesson-5-3",
                        order: 3,
                        title: "Reading Sensor Data in Scratch",
                        titleAr: "قراءة بيانات الحساسات في سكراش",
                        type: "hands-on",
                        duration: "30 min",
                        durationAr: "30 دقيقة",
                        objectives: [
                            "Read and visualize sensor values"
                        ],
                        objectivesAr: [
                            "قراءة وعرض قيم الحساسات"
                        ]
                    },
                    {
                        id: "lesson-5-4",
                        order: 4,
                        title: "Using Sensors to Make Decisions",
                        titleAr: "استخدام الحساسات لاتخاذ القرارات",
                        type: "hands-on",
                        duration: "35 min",
                        durationAr: "35 دقيقة",
                        objectives: [
                            "Create decision-based robotic behavior"
                        ],
                        objectivesAr: [
                            "إنشاء سلوك روبوتي قائم على القرارات"
                        ]
                    }

                ]
            },

            {
                id: "module-6",
                order: 6,
                title: "Control Logic and Automation",
                titleAr: "المنطق البرمجي والأتمتة",
                description:
                    "Apply conditions, loops, and events in robotics.",
                descriptionAr:
                    "تطبيق الشروط والحلقات والأحداث في الروبوتات.",
                duration: "1 week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "lesson-6-1",
                        order: 1,
                        title: "Conditional Logic",
                        titleAr: "المنطق الشرطي",
                        type: "hands-on",
                        duration: "30 min",
                        durationAr: "30 دقيقة",
                        objectives: ["Use conditions in Scratch"],
                        objectivesAr: ["استخدام الشروط في سكراش"]
                    },
                    {
                        id: "lesson-6-2",
                        order: 2,
                        title: "Loops and Timing",
                        titleAr: "الحلقات والتوقيت",
                        type: "hands-on",
                        duration: "30 min",
                        durationAr: "30 دقيقة",
                        objectives: [
                            "Use loops and delays in robotics"
                        ],
                        objectivesAr: [
                            "استخدام الحلقات والتأخير في الروبوتات"
                        ]
                    },
                    {
                        id: "lesson-6-3",
                        order: 3,
                        title: "Automated Behaviors",
                        titleAr: "السلوكيات الآلية",
                        type: "hands-on",
                        duration: "35 min",
                        durationAr: "35 دقيقة",
                        objectives: [
                            "Create automated robot actions"
                        ],
                        objectivesAr: [
                            "إنشاء تصرفات روبوتية آلية"
                        ]
                    },
                    {
                        id: "lesson-6-4",
                        order: 4,
                        title: "Event-Based Robotics Programming",
                        titleAr: "البرمجة المعتمدة على الأحداث",
                        type: "video",
                        duration: "20 min",
                        durationAr: "20 دقيقة",
                        objectives: [
                            "Understand event-driven programming"
                        ],
                        objectivesAr: [
                            "فهم البرمجة المعتمدة على الأحداث"
                        ]
                    }

                ]
            },

            {
                id: "module-7",
                order: 7,
                title: "Motors and Movement",
                titleAr: "المحركات والحركة",
                description:
                    "Learn how robots move using motors.",
                descriptionAr:
                    "تعلم كيفية حركة الروبوتات باستخدام المحركات.",
                duration: "2 weeks",
                durationAr: "أسبوعان",
                lessons: [
                    {
                        id: "lesson-7-1",
                        order: 1,
                        title: "Types of Motors",
                        titleAr: "أنواع المحركات",
                        type: "video",
                        duration: "25 min",
                        durationAr: "25 دقيقة",
                        objectives: ["Understand DC and servo motors"],
                        objectivesAr: ["فهم محركات DC والسيرفو"]
                    },
                    {
                        id: "lesson-7-2",
                        order: 2,
                        title: "Controlling Speed and Direction",
                        titleAr: "التحكم في السرعة والاتجاه",
                        type: "hands-on",
                        duration: "40 min",
                        durationAr: "40 دقيقة",
                        objectives: [
                            "Control motor speed and direction"
                        ],
                        objectivesAr: [
                            "التحكم في سرعة واتجاه المحركات"
                        ]
                    },
                    {
                        id: "lesson-7-3",
                        order: 3,
                        title: "Building Moving Robots",
                        titleAr: "بناء روبوتات متحركة",
                        type: "project",
                        duration: "60 min",
                        durationAr: "60 دقيقة",
                        objectives: [
                            "Build a basic moving robot"
                        ],
                        objectivesAr: [
                            "بناء روبوت متحرك بسيط"
                        ]
                    },
                    {
                        id: "lesson-7-4",
                        order: 4,
                        title: "Motor Safety and Power Management",
                        titleAr: "سلامة المحركات وإدارة الطاقة",
                        type: "article",
                        duration: "15 min",
                        durationAr: "15 دقيقة",
                        objectives: [
                            "Protect motors and power sources"
                        ],
                        objectivesAr: [
                            "حماية المحركات ومصادر الطاقة"
                        ]
                    }

                ]
            },

            {
                id: "module-8",
                order: 8,
                title: "Capstone Robotics Project",
                titleAr: "مشروع الروبوت النهائي",
                description:
                    "Design and build a complete robotic system.",
                descriptionAr:
                    "تصميم وبناء نظام روبوت متكامل.",
                duration: "3 weeks",
                durationAr: "3 أسابيع",
                lessons: [
                    {
                        id: "lesson-8-1",
                        order: 1,
                        title: "Project Design and Implementation",
                        titleAr: "تصميم وتنفيذ المشروع",
                        type: "project",
                        duration: "3 hours",
                        durationAr: "3 ساعات",
                        objectives: ["Build a full robotics project"],
                        objectivesAr: ["تنفيذ مشروع روبوت متكامل"]
                    },
                    {
                        id: "lesson-8-2",
                        order: 2,
                        title: "System Testing and Validation",
                        titleAr: "اختبار النظام والتحقق منه",
                        type: "hands-on",
                        duration: "45 min",
                        durationAr: "45 دقيقة",
                        objectives: [
                            "Test and validate robotic systems"
                        ],
                        objectivesAr: [
                            "اختبار والتحقق من أنظمة الروبوت"
                        ]
                    },
                    {
                        id: "lesson-8-3",
                        order: 3,
                        title: "Presentation and Showcase",
                        titleAr: "العرض والتقديم",
                        type: "project",
                        duration: "30 min",
                        durationAr: "30 دقيقة",
                        objectives: [
                            "Present and explain robotics projects"
                        ],
                        objectivesAr: [
                            "عرض وشرح مشاريع الروبوتات"
                        ]
                    }
                ]
            },
            {
                "id": "module-9",
                "order": 9,
                "title": "Designing Robotic Motion",
                "titleAr": "تصميم حركة الروبوتات",
                "description": "Learn how to coordinate robot movements and use sensors for navigation.",
                "descriptionAr": "تعلم كيفية تنسيق حركة الروبوتات واستخدام الحساسات للملاحة.",
                "duration": "1 week",
                "durationAr": "أسبوع واحد",
                "lessons": [
                    {
                        "id": "lesson-9-1",
                        "order": 1,
                        "title": "Coordinated Movements",
                        "titleAr": "الحركات المنسقة",
                        "type": "hands-on",
                        "duration": "30 min",
                        "durationAr": "30 دقيقة",
                        "objectives": ["Synchronize multiple motors for smooth motion"],
                        "objectivesAr": ["تنسيق عدة محركات لتحقيق حركة سلسة"]
                    },
                    {
                        "id": "lesson-9-2",
                        "order": 2,
                        "title": "Turning, Stopping, and Path Control",
                        "titleAr": "الدوران والتوقف والتحكم في المسار",
                        "type": "hands-on",
                        "duration": "35 min",
                        "durationAr": "35 دقيقة",
                        "objectives": ["Implement precise turning and path following"],
                        "objectivesAr": ["تنفيذ دوران دقيق والتحكم في المسار"]
                    },
                    {
                        "id": "lesson-9-3",
                        "order": 3,
                        "title": "Using Sensors for Navigation",
                        "titleAr": "استخدام الحساسات للملاحة",
                        "type": "hands-on",
                        "duration": "40 min",
                        "durationAr": "40 دقيقة",
                        "objectives": ["Use sensors to detect obstacles and navigate"],
                        "objectivesAr": ["استخدام الحساسات لاكتشاف العقبات والملاحة"]
                    },
                    {
                        "id": "lesson-9-4",
                        "order": 4,
                        "title": "Improving Accuracy and Stability",
                        "titleAr": "تحسين الدقة والاستقرار",
                        "type": "article",
                        "duration": "20 min",
                        "durationAr": "20 دقيقة",
                        "objectives": ["Optimize robot movement for accuracy and balance"],
                        "objectivesAr": ["تحسين حركة الروبوت لتحقيق الدقة والتوازن"]
                    }
                ]
            },
            {
                "id": "module-10",
                "order": 10,
                "title": "Communication and Feedback",
                "titleAr": "التواصل وردود الفعل",
                "description": "Learn to interact with humans using LEDs, buzzers, and displays.",
                "descriptionAr": "تعلم كيفية التفاعل مع البشر باستخدام المصابيح والأجراس والشاشات.",
                "duration": "1 week",
                "durationAr": "أسبوع واحد",
                "lessons": [
                    {
                        "id": "lesson-10-1",
                        "order": 1,
                        "title": "Using Buzzers, LEDs, and Displays",
                        "titleAr": "استخدام الأجراس والمصابيح والشاشات",
                        "type": "hands-on",
                        "duration": "30 min",
                        "durationAr": "30 دقيقة",
                        "objectives": ["Implement output devices for feedback"],
                        "objectivesAr": ["تنفيذ أجهزة الإخراج لتقديم ردود الفعل"]
                    },
                    {
                        "id": "lesson-10-2",
                        "order": 2,
                        "title": "Visual and Sound Feedback",
                        "titleAr": "الردود البصرية والصوتية",
                        "type": "hands-on",
                        "duration": "25 min",
                        "durationAr": "25 دقيقة",
                        "objectives": ["Provide meaningful feedback using lights and sounds"],
                        "objectivesAr": ["تقديم ردود فعل مفهومة باستخدام الضوء والصوت"]
                    },
                    {
                        "id": "lesson-10-3",
                        "order": 3,
                        "title": "Human–Robot Interaction Basics",
                        "titleAr": "أساسيات التفاعل بين الإنسان والروبوت",
                        "type": "video",
                        "duration": "20 min",
                        "durationAr": "20 دقيقة",
                        "objectives": ["Understand principles of human-robot interaction"],
                        "objectivesAr": ["فهم مبادئ التفاعل بين الإنسان والروبوت"]
                    },
                    {
                        "id": "lesson-10-4",
                        "order": 4,
                        "title": "Designing User-Friendly Robots",
                        "titleAr": "تصميم روبوتات سهلة الاستخدام",
                        "type": "article",
                        "duration": "20 min",
                        "durationAr": "20 دقيقة",
                        "objectives": ["Make robots intuitive and user-friendly"],
                        "objectivesAr": ["جعل الروبوتات سهلة الفهم والاستخدام"]
                    }
                ]
            },
            {
                "id": "module-11",
                "order": 11,
                "title": "Decision-Making Robots",
                "titleAr": "روبوتات اتخاذ القرار",
                "description": "Learn rule-based and reactive decision-making using sensors.",
                "descriptionAr": "تعلم أنظمة اتخاذ القرار القائمة على القواعد والاستجابة باستخدام الحساسات.",
                "duration": "1 week",
                "durationAr": "أسبوع واحد",
                "lessons": [
                    {
                        "id": "lesson-11-1",
                        "order": 1,
                        "title": "Combining Multiple Sensors",
                        "titleAr": "دمج عدة حساسات",
                        "type": "hands-on",
                        "duration": "30 min",
                        "durationAr": "30 دقيقة",
                        "objectives": ["Integrate multiple sensors for decisions"],
                        "objectivesAr": ["دمج عدة حساسات لاتخاذ القرارات"]
                    },
                    {
                        "id": "lesson-11-2",
                        "order": 2,
                        "title": "Rule-Based Decision Systems",
                        "titleAr": "أنظمة القرار القائمة على القواعد",
                        "type": "video",
                        "duration": "20 min",
                        "durationAr": "20 دقيقة",
                        "objectives": ["Implement if-then rules in robot behavior"],
                        "objectivesAr": ["تنفيذ قواعد if-then في سلوك الروبوت"]
                    },
                    {
                        "id": "lesson-11-3",
                        "order": 3,
                        "title": "Reactive vs Predefined Behavior",
                        "titleAr": "السلوك الاستجابي مقابل المحدد مسبقًا",
                        "type": "hands-on",
                        "duration": "30 min",
                        "durationAr": "30 دقيقة",
                        "objectives": ["Compare reactive and predefined behaviors"],
                        "objectivesAr": ["مقارنة السلوك الاستجابي بالسلوك المحدد مسبقًا"]
                    },
                    {
                        "id": "lesson-11-4",
                        "order": 4,
                        "title": "Introducing Autonomous Robots",
                        "titleAr": "مقدمة في الروبوتات الذاتية",
                        "type": "video",
                        "duration": "25 min",
                        "durationAr": "25 دقيقة",
                        "objectives": ["Understand basics of autonomous robots"],
                        "objectivesAr": ["فهم أساسيات الروبوتات الذاتية"]
                    }
                ]
            },
            {
                "id": "module-12",
                "order": 12,
                "title": "Guided Robotics Projects",
                "titleAr": "مشاريع روبوتية موجهة",
                "description": "Complete guided projects to apply learned skills.",
                "descriptionAr": "إكمال مشاريع موجهة لتطبيق المهارات المكتسبة.",
                "duration": "2 weeks",
                "durationAr": "أسبوعان",
                "lessons": [
                    {
                        "id": "lesson-12-1",
                        "order": 1,
                        "title": "Smart Traffic Light System",
                        "titleAr": "نظام إشارات المرور الذكي",
                        "type": "project",
                        "duration": "45 min",
                        "durationAr": "45 دقيقة",
                        "objectives": ["Build a traffic light robot system"],
                        "objectivesAr": ["بناء نظام روبوت لإشارات المرور"]
                    },
                    {
                        "id": "lesson-12-2",
                        "order": 2,
                        "title": "Obstacle-Avoiding Robot",
                        "titleAr": "روبوت تجنب العقبات",
                        "type": "project",
                        "duration": "60 min",
                        "durationAr": "60 دقيقة",
                        "objectives": ["Build a robot that avoids obstacles"],
                        "objectivesAr": ["بناء روبوت يتجنب العقبات"]
                    },
                    {
                        "id": "lesson-12-3",
                        "order": 3,
                        "title": "Smart Door or Alarm System",
                        "titleAr": "نظام باب أو إنذار ذكي",
                        "type": "project",
                        "duration": "50 min",
                        "durationAr": "50 دقيقة",
                        "objectives": ["Build a security automation project"],
                        "objectivesAr": ["بناء مشروع أتمتة أمني"]
                    },
                    {
                        "id": "lesson-12-4",
                        "order": 4,
                        "title": "Interactive Art Robot",
                        "titleAr": "روبوت فني تفاعلي",
                        "type": "project",
                        "duration": "60 min",
                        "durationAr": "60 دقيقة",
                        "objectives": ["Create a robot for interactive art"],
                        "objectivesAr": ["إنشاء روبوت لفن تفاعلي"]
                    }
                ]
            },
            {
                "id": "module-13",
                "order": 13,
                "title": "Design Thinking in Robotics",
                "titleAr": "التفكير التصميمي في الروبوتات",
                "description": "Plan, prototype, and test robotics solutions for real problems.",
                "descriptionAr": "تخطيط ونمذجة واختبار حلول روبوتية لمشكلات حقيقية.",
                "duration": "1 week",
                "durationAr": "أسبوع واحد",
                "lessons": [
                    {
                        "id": "lesson-13-1",
                        "order": 1,
                        "title": "Identifying Real-World Problems",
                        "titleAr": "تحديد المشكلات الحقيقية",
                        "type": "article",
                        "duration": "20 min",
                        "durationAr": "20 دقيقة",
                        "objectives": ["Identify problems that robots can solve"],
                        "objectivesAr": ["تحديد المشكلات التي يمكن للروبوت حلها"]
                    },
                    {
                        "id": "lesson-13-2",
                        "order": 2,
                        "title": "Planning a Robotics Solution",
                        "titleAr": "تخطيط حل روبوتي",
                        "type": "hands-on",
                        "duration": "30 min",
                        "durationAr": "30 دقيقة",
                        "objectives": ["Create a plan for a robotics solution"],
                        "objectivesAr": ["وضع خطة لحل روبوتي"]
                    },
                    {
                        "id": "lesson-13-3",
                        "order": 3,
                        "title": "Prototyping and Iteration",
                        "titleAr": "النمذجة والتكرار",
                        "type": "hands-on",
                        "duration": "35 min",
                        "durationAr": "35 دقيقة",
                        "objectives": ["Build and improve prototypes"],
                        "objectivesAr": ["بناء وتحسين النماذج الأولية"]
                    },
                    {
                        "id": "lesson-13-4",
                        "order": 4,
                        "title": "Testing and Improvement",
                        "titleAr": "الاختبار والتحسين",
                        "type": "hands-on",
                        "duration": "30 min",
                        "durationAr": "30 دقيقة",
                        "objectives": ["Test and refine robotics solutions"],
                        "objectivesAr": ["اختبار وتحسين الحلول الروبوتية"]
                    }
                ]
            },
            {
                "id": "module-14",
                "order": 14,
                "title": "Debugging Robotics Systems",
                "titleAr": "تصحيح أخطاء أنظمة الروبوت",
                "description": "Identify and fix common hardware and software problems.",
                "descriptionAr": "تحديد وإصلاح مشكلات العتاد والبرمجيات الشائعة.",
                "duration": "1 week",
                "durationAr": "أسبوع واحد",
                "lessons": [
                    {
                        "id": "lesson-14-1",
                        "order": 1,
                        "title": "Common Hardware and Software Errors",
                        "titleAr": "أخطاء العتاد والبرمجيات الشائعة",
                        "type": "article",
                        "duration": "20 min",
                        "durationAr": "20 دقيقة",
                        "objectives": ["Identify typical robotics errors"],
                        "objectivesAr": ["تحديد الأخطاء الشائعة في الروبوتات"]
                    },
                    {
                        "id": "lesson-14-2",
                        "order": 2,
                        "title": "Testing Sensors and Connections",
                        "titleAr": "اختبار الحساسات والاتصالات",
                        "type": "hands-on",
                        "duration": "30 min",
                        "durationAr": "30 دقيقة",
                        "objectives": ["Test sensors and connections reliably"],
                        "objectivesAr": ["اختبار الحساسات والاتصالات بشكل موثوق"]
                    },
                    {
                        "id": "lesson-14-3",
                        "order": 3,
                        "title": "Troubleshooting Communication Issues",
                        "titleAr": "حل مشاكل الاتصال",
                        "type": "hands-on",
                        "duration": "25 min",
                        "durationAr": "25 دقيقة",
                        "objectives": ["Fix communication problems between components"],
                        "objectivesAr": ["إصلاح مشاكل الاتصال بين المكونات"]
                    },
                    {
                        "id": "lesson-14-4",
                        "order": 4,
                        "title": "Improving Reliability",
                        "titleAr": "تحسين الموثوقية",
                        "type": "article",
                        "duration": "20 min",
                        "durationAr": "20 دقيقة",
                        "objectives": ["Enhance system stability and reliability"],
                        "objectivesAr": ["تعزيز استقرار وموثوقية النظام"]
                    }
                ]
            },
            {
                "id": "module-15",
                "order": 15,
                "title": "Optimization and Best Practices",
                "titleAr": "التحسين وأفضل الممارسات",
                "description": "Learn how to optimize power, components, and code.",
                "descriptionAr": "تعلم كيفية تحسين الطاقة والمكونات والبرامج.",
                "duration": "1 week",
                "durationAr": "أسبوع واحد",
                "lessons": [
                    {
                        "id": "lesson-15-1",
                        "order": 1,
                        "title": "Efficient Use of Components",
                        "titleAr": "الاستخدام الفعال للمكونات",
                        "type": "article",
                        "duration": "20 min",
                        "durationAr": "20 دقيقة",
                        "objectives": ["Use components efficiently"],
                        "objectivesAr": ["استخدام المكونات بشكل فعال"]
                    },
                    {
                        "id": "lesson-15-2",
                        "order": 2,
                        "title": "Power Optimization",
                        "titleAr": "تحسين الطاقة",
                        "type": "hands-on",
                        "duration": "25 min",
                        "durationAr": "25 دقيقة",
                        "objectives": ["Optimize power consumption for robots"],
                        "objectivesAr": ["تحسين استهلاك الطاقة للروبوتات"]
                    },
                    {
                        "id": "lesson-15-3",
                        "order": 3,
                        "title": "Clean Circuit Design",
                        "titleAr": "تصميم دوائر نظيف",
                        "type": "hands-on",
                        "duration": "30 min",
                        "durationAr": "30 دقيقة",
                        "objectives": ["Organize circuits for clarity and safety"],
                        "objectivesAr": ["تنظيم الدوائر لتحقيق الوضوح والسلامة"]
                    },
                    {
                        "id": "lesson-15-4",
                        "order": 4,
                        "title": "Writing Maintainable Programs",
                        "titleAr": "كتابة برامج قابلة للصيانة",
                        "type": "article",
                        "duration": "20 min",
                        "durationAr": "20 دقيقة",
                        "objectives": ["Write clean and maintainable code"],
                        "objectivesAr": ["كتابة كود نظيف وقابل للصيانة"]
                    }
                ]
            },
            {
                "id": "module-16",
                "order": 16,
                "title": "Appendices",
                "titleAr": "الملاحق",
                "description": "Reference materials for Arduino, Scratch, electronics, and safety.",
                "descriptionAr": "مواد مرجعية لأردوينو، سكراش، الإلكترونيات، والسلامة.",
                "duration": "Ongoing",
                "durationAr": "مستمر",
                "lessons": [
                    {
                        "id": "lesson-16-1",
                        "order": 1,
                        "title": "Arduino Components and Sensor Reference",
                        "titleAr": "مرجع مكونات وأجهزة استشعار أردوينو",
                        "type": "article",
                        "duration": "N/A",
                        "durationAr": "غير محدد",
                        "objectives": ["Quick reference for all Arduino components and sensors"],
                        "objectivesAr": ["مرجع سريع لجميع مكونات وحساسات أردوينو"]
                    },
                    {
                        "id": "lesson-16-2",
                        "order": 2,
                        "title": "Scratch Blocks for Arduino Control",
                        "titleAr": "كتل سكراش للتحكم بأردوينو",
                        "type": "article",
                        "duration": "N/A",
                        "durationAr": "غير محدد",
                        "objectives": ["Reference for Scratch-Arduino control blocks"],
                        "objectivesAr": ["مرجع كتل سكراش للتحكم بأردوينو"]
                    },
                    {
                        "id": "lesson-16-3",
                        "order": 3,
                        "title": "Electronics and Robotics Glossary",
                        "titleAr": "مصطلحات الإلكترونيات والروبوتات",
                        "type": "article",
                        "duration": "N/A",
                        "durationAr": "غير محدد",
                        "objectives": ["Understand key terms in electronics and robotics"],
                        "objectivesAr": ["فهم المصطلحات الأساسية في الإلكترونيات والروبوتات"]
                    },
                    {
                        "id": "lesson-16-4",
                        "order": 4,
                        "title": "Safety Guidelines for Young Makers",
                        "titleAr": "إرشادات السلامة للصغار",
                        "type": "article",
                        "duration": "N/A",
                        "durationAr": "غير محدد",
                        "objectives": ["Follow safety best practices when building robots"],
                        "objectivesAr": ["اتباع أفضل ممارسات السلامة عند بناء الروبوتات"]
                    }
                ]
            }
        ]
    },

    {
        id: "python-for-all",
        courseModules: [
            // Module 1
            {
                id: "module-1",
                order: 1,
                title: "Getting Started with Python",
                titleAr: "البدء مع بايثون",
                description: "Introduction to Python, installation, and first programs.",
                descriptionAr: "مقدمة في بايثون، التثبيت، وكتابة البرامج الأولى.",
                duration: "1 week",
                durationAr: "أسبوع واحد",
                lessons: [
                    {
                        id: "lesson-1-1",
                        order: 1,
                        title: "Introduction to Python and Its Ecosystem",
                        titleAr: "مقدمة في بايثون ونظامها البيئي",
                        type: "video",
                        duration: "20 min",
                        durationAr: "20 دقيقة",
                        objectives: ["Understand Python’s role and ecosystem"],
                        objectivesAr: ["فهم دور بايثون ونظامها البيئي"],
                        isPreview: true
                    },
                    {
                        id: "lesson-1-2",
                        order: 2,
                        title: "Installing Python and Setting Up Your Environment",
                        titleAr: "تثبيت بايثون وإعداد بيئتك",
                        type: "hands-on",
                        duration: "25 min",
                        durationAr: "25 دقيقة",
                        objectives: ["Install Python and IDEs like VS Code, Jupyter"],
                        objectivesAr: ["تثبيت بايثون وبيئات التطوير مثل VS Code و Jupyter"]
                    },
                    {
                        id: "lesson-1-3",
                        order: 3,
                        title: "Writing Your First Python Program",
                        titleAr: "كتابة أول برنامج بايثون لك",
                        type: "hands-on",
                        duration: "20 min",
                        durationAr: "20 دقيقة",
                        objectives: ["Write and execute a simple Python program"],
                        objectivesAr: ["كتابة وتنفيذ برنامج بايثون بسيط"]
                    },
                    {
                        id: "lesson-1-4",
                        order: 4,
                        title: "Understanding the Python Interpreter and Execution Flow",
                        titleAr: "فهم مترجم بايثون وتدفق التنفيذ",
                        type: "video",
                        duration: "15 min",
                        durationAr: "15 دقيقة",
                        objectives: ["Understand how Python code is executed"],
                        objectivesAr: ["فهم كيفية تنفيذ كود بايثون"]
                    }
                ]
            },

            // Module 2
            {
                id: "module-2",
                order: 2,
                title: "Python Basics",
                titleAr: "أساسيات بايثون",
                description: "Learn variables, types, operators, I/O, and comments.",
                descriptionAr: "تعلم المتغيرات، الأنواع، العمليات، الإدخال/الإخراج والتعليقات.",
                duration: "1–2 weeks",
                durationAr: "1–2 أسبوع",
                lessons: [
                    { id: "lesson-2-1", order: 1, title: "Variables, Data Types, and Type Conversion", titleAr: "المتغيرات وأنواع البيانات وتحويل الأنواع", type: "hands-on", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Work with variables and types in Python"], objectivesAr: ["العمل مع المتغيرات وأنواع البيانات في بايثون"] },
                    { id: "lesson-2-2", order: 2, title: "Strings, Numbers, and Boolean Values", titleAr: "السلاسل والأرقام والقيم البوليانية", type: "hands-on", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Manipulate strings, numbers, and booleans"], objectivesAr: ["التعامل مع السلاسل والأرقام والقيم البوليانية"] },
                    { id: "lesson-2-3", order: 3, title: "Operators: Arithmetic, Comparison, Logical, and Assignment", titleAr: "العمليات: حسابية، مقارنة، منطقية وتعيين", type: "video", duration: "20 min", durationAr: "20 دقيقة", objectives: ["Use different Python operators"], objectivesAr: ["استخدام العمليات المختلفة في بايثون"] },
                    { id: "lesson-2-4", order: 4, title: "Input and Output Operations", titleAr: "عمليات الإدخال والإخراج", type: "hands-on", duration: "20 min", durationAr: "20 دقيقة", objectives: ["Read input and display output"], objectivesAr: ["قراءة الإدخال وعرض المخرجات"] },
                    { id: "lesson-2-5", order: 5, title: "Working with Comments and Code Readability", titleAr: "التعليقات وقابلية قراءة الكود", type: "article", duration: "15 min", durationAr: "15 دقيقة", objectives: ["Write readable code with comments"], objectivesAr: ["كتابة كود قابل للقراءة مع التعليقات"] }
                ]
            },

            // Module 3
            {
                id: "module-3",
                order: 3,
                title: "Control Flow and Logic",
                titleAr: "تدفق التحكم والمنطق",
                description: "Conditional statements, loops, and practical exercises.",
                descriptionAr: "الشروط، الحلقات، والتمارين العملية.",
                duration: "1–2 weeks",
                durationAr: "1–2 أسبوع",
                lessons: [
                    { id: "lesson-3-1", order: 1, title: "Conditional Statements (if, elif, else)", titleAr: "الشروط (if, elif, else)", type: "hands-on", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Use conditional statements to control flow"], objectivesAr: ["استخدام الشروط للتحكم بتدفق البرنامج"] },
                    { id: "lesson-3-2", order: 2, title: "Loops: for and while", titleAr: "الحلقات: for و while", type: "hands-on", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Use loops for iteration"], objectivesAr: ["استخدام الحلقات للتكرار"] },
                    { id: "lesson-3-3", order: 3, title: "Loop Control: break, continue, and pass", titleAr: "التحكم في الحلقات: break و continue و pass", type: "video", duration: "20 min", durationAr: "20 دقيقة", objectives: ["Control loop execution effectively"], objectivesAr: ["التحكم في تنفيذ الحلقات بشكل فعال"] },
                    { id: "lesson-3-4", order: 4, title: "Practical Exercises: Decision-Making and Iterations", titleAr: "تمارين عملية: اتخاذ القرارات والتكرار", type: "hands-on", duration: "30 min", durationAr: "30 دقيقة", objectives: ["Apply control flow concepts in exercises"], objectivesAr: ["تطبيق مفاهيم تدفق التحكم في التمارين"] }
                ]
            },

            // Module 4
            {
                id: "module-4",
                order: 4,
                title: "Data Structures in Python",
                titleAr: "هياكل البيانات في بايثون",
                description: "Learn lists, tuples, dictionaries, sets, and nested structures.",
                descriptionAr: "تعلم القوائم، tuples، القواميس، المجموعات، والهياكل المتداخلة.",
                duration: "2 weeks",
                durationAr: "أسبوعان",
                lessons: [
                    { id: "lesson-4-1", order: 1, title: "Lists and List Operations", titleAr: "القوائم وعمليات القوائم", type: "hands-on", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Manipulate lists and list methods"], objectivesAr: ["التعامل مع القوائم وطرقها"] },
                    { id: "lesson-4-2", order: 2, title: "Tuples and Immutable Data", titleAr: "Tuples والبيانات الثابتة", type: "hands-on", duration: "20 min", durationAr: "20 دقيقة", objectives: ["Understand and use tuples"], objectivesAr: ["فهم واستخدام tuples"] },
                    { id: "lesson-4-3", order: 3, title: "Dictionaries and Key-Value Management", titleAr: "القواميس وإدارة القيم والمفاتيح", type: "hands-on", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Create and manage dictionaries"], objectivesAr: ["إنشاء وإدارة القواميس"] },
                    { id: "lesson-4-4", order: 4, title: "Sets and Their Unique Properties", titleAr: "المجموعات وخصائصها الفريدة", type: "hands-on", duration: "20 min", durationAr: "20 دقيقة", objectives: ["Use sets and their operations"], objectivesAr: ["استخدام المجموعات وعملياتها"] },
                    { id: "lesson-4-5", order: 5, title: "Nested Data Structures and Iteration Techniques", titleAr: "الهياكل المتداخلة وتقنيات التكرار", type: "hands-on", duration: "30 min", durationAr: "30 دقيقة", objectives: ["Iterate nested structures"], objectivesAr: ["التكرار عبر الهياكل المتداخلة"] }
                ]
            },

            // Module 5
            {
                id: "module-5",
                order: 5,
                title: "Functions and Modular Programming",
                titleAr: "الدوال والبرمجة المعيارية",
                description: "Define functions, work with arguments, lambda, modules and packages.",
                descriptionAr: "تعريف الدوال، العمل مع الوسائط، lambda، الوحدات والحزم.",
                duration: "2 weeks",
                durationAr: "أسبوعان",
                lessons: [
                    { id: "lesson-5-1", order: 1, title: "Defining and Calling Functions", titleAr: "تعريف واستدعاء الدوال", type: "hands-on", duration: "20 min", durationAr: "20 دقيقة", objectives: ["Write and call Python functions"], objectivesAr: ["كتابة واستدعاء دوال بايثون"] },
                    { id: "lesson-5-2", order: 2, title: "Function Arguments and Return Values", titleAr: "وسائط الدالة وقيم الإرجاع", type: "hands-on", duration: "20 min", durationAr: "20 دقيقة", objectives: ["Use arguments and return values"], objectivesAr: ["استخدام الوسائط وقيم الإرجاع"] },
                    { id: "lesson-5-3", order: 3, title: "Variable Scope and Lifetime", titleAr: "نطاق المتغير وعمره", type: "video", duration: "15 min", durationAr: "15 دقيقة", objectives: ["Understand variable scope"], objectivesAr: ["فهم نطاق المتغير"] },
                    { id: "lesson-5-4", order: 4, title: "Lambda Functions and Anonymous Expressions", titleAr: "دوال lambda والتعابير المجهولة", type: "hands-on", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Use lambda functions"], objectivesAr: ["استخدام دوال lambda"] },
                    { id: "lesson-5-5", order: 5, title: "Organizing Code with Modules and Packages", titleAr: "تنظيم الكود باستخدام الوحدات والحزم", type: "hands-on", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Organize code in modules"], objectivesAr: ["تنظيم الكود في وحدات"] }
                ]
            },

            // Module 6
            {
                id: "module-6",
                order: 6,
                title: "Working with Files and Exceptions",
                titleAr: "العمل مع الملفات والاستثناءات",
                description: "Read/write files, handle CSV/JSON, manage exceptions, and exercises.",
                descriptionAr: "قراءة وكتابة الملفات، التعامل مع CSV/JSON، إدارة الاستثناءات، وتمارين عملية.",
                duration: "2 weeks",
                durationAr: "أسبوعان",
                lessons: [
                    { id: "lesson-6-1", order: 1, title: "Reading and Writing Text Files", titleAr: "قراءة وكتابة الملفات النصية", type: "hands-on", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Read/write text files"], objectivesAr: ["قراءة وكتابة الملفات النصية"] },
                    { id: "lesson-6-2", order: 2, title: "Working with CSV and JSON Files", titleAr: "العمل مع CSV و JSON", type: "hands-on", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Process CSV and JSON data"], objectivesAr: ["معالجة بيانات CSV و JSON"] },
                    { id: "lesson-6-3", order: 3, title: "Handling Exceptions and Errors Gracefully", titleAr: "معالجة الاستثناءات والأخطاء بشكل صحيح", type: "video", duration: "20 min", durationAr: "20 دقيقة", objectives: ["Handle exceptions properly"], objectivesAr: ["معالجة الاستثناءات بشكل صحيح"] },
                    { id: "lesson-6-4", order: 4, title: "Practical Exercises: Data Manipulation", titleAr: "تمارين عملية: معالجة البيانات", type: "hands-on", duration: "30 min", durationAr: "30 دقيقة", objectives: ["Practice file and data handling"], objectivesAr: ["تمرين التعامل مع الملفات والبيانات"] }
                ]
            },

            // Module 7
            {
                id: "module-7",
                order: 7,
                title: "Introduction to Object-Oriented Programming (OOP)",
                titleAr: "مقدمة في البرمجة الكائنية (OOP)",
                description: "Learn classes, objects, attributes, methods, inheritance, and examples.",
                descriptionAr: "تعلم الكائنات، الصفوف، الخصائص، الدوال، الوراثة، وأمثلة عملية.",
                duration: "2 weeks",
                durationAr: "أسبوعان",
                lessons: [
                    { id: "lesson-7-1", order: 1, title: "Classes and Objects", titleAr: "الصفوف والكائنات", type: "hands-on", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Define classes and create objects"], objectivesAr: ["تعريف الصفوف وإنشاء الكائنات"] },
                    { id: "lesson-7-2", order: 2, title: "Attributes, Methods, and Encapsulation", titleAr: "الخصائص والدوال والتغليف", type: "hands-on", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Work with class attributes and methods"], objectivesAr: ["العمل مع خصائص ودوال الصفوف"] },
                    { id: "lesson-7-3", order: 3, title: "Inheritance and Polymorphism", titleAr: "الوراثة وتعدد الأشكال", type: "video", duration: "20 min", durationAr: "20 دقيقة", objectives: ["Implement inheritance and polymorphism"], objectivesAr: ["تطبيق الوراثة وتعدد الأشكال"] },
                    { id: "lesson-7-4", order: 4, title: "Real-World Examples Using OOP", titleAr: "أمثلة عملية على OOP", type: "hands-on", duration: "30 min", durationAr: "30 دقيقة", objectives: ["Apply OOP in projects"], objectivesAr: ["تطبيق البرمجة الكائنية في المشاريع"] }
                ]
            },

            // Module 8
            {
                id: "module-8",
                order: 8,
                title: "Python in Action Across Tracks",
                titleAr: "بايثون في التطبيق العملي عبر المسارات",
                description: "Python applications in backend, data, AI, automation, and mini projects.",
                descriptionAr: "تطبيقات بايثون في تطوير الويب، البيانات، الذكاء الاصطناعي، الأتمتة، والمشاريع الصغيرة.",
                duration: "2 weeks",
                durationAr: "أسبوعان",
                lessons: [
                    { id: "lesson-8-1", order: 1, title: "Python for Backend Development", titleAr: "بايثون لتطوير الويب", type: "hands-on", duration: "30 min", durationAr: "30 دقيقة", objectives: ["Learn backend programming with Python"], objectivesAr: ["تعلم تطوير الويب باستخدام بايثون"] },
                    { id: "lesson-8-2", order: 2, title: "Python for Data Analysis", titleAr: "بايثون لتحليل البيانات", type: "hands-on", duration: "30 min", durationAr: "30 دقيقة", objectives: ["Analyze data using Pandas and NumPy"], objectivesAr: ["تحليل البيانات باستخدام Pandas و NumPy"] },
                    { id: "lesson-8-3", order: 3, title: "Python for AI and Machine Learning", titleAr: "بايثون للذكاء الاصطناعي والتعلم الآلي", type: "hands-on", duration: "30 min", durationAr: "30 دقيقة", objectives: ["Intro to AI libraries and concepts"], objectivesAr: ["مقدمة لمكتبات ومفاهيم الذكاء الاصطناعي"] },
                    { id: "lesson-8-4", order: 4, title: "Python for Automation and Scripting", titleAr: "بايثون للأتمتة والسكربتات", type: "hands-on", duration: "30 min", durationAr: "30 دقيقة", objectives: ["Automate tasks using Python"], objectivesAr: ["أتمتة المهام باستخدام بايثون"] },
                    { id: "lesson-8-5", order: 5, title: "Practical Mini Projects Across Domains", titleAr: "مشاريع صغيرة عملية عبر المجالات", type: "project", duration: "60 min", durationAr: "60 دقيقة", objectives: ["Build mini projects using Python"], objectivesAr: ["إنشاء مشاريع صغيرة باستخدام بايثون"] },
                    {
                        "id": "lesson-8-6",
                        "order": 6,
                        "title": "Introduction to Python Libraries Across Domains",
                        "titleAr": "مقدمة لمكتبات بايثون عبر المجالات",
                        "type": "video",
                        "duration": "25 min",
                        "durationAr": "25 دقيقة",
                        "objectives": [
                            "Understand key Python libraries used in backend, data analysis, and AI"
                        ],
                        "objectivesAr": [
                            "فهم المكتبات الأساسية في بايثون المستخدمة في تطوير الويب، تحليل البيانات، والذكاء الاصطناعي"
                        ]
                    },
                ]
            },

            // Module 9
            {
                id: "module-9",
                order: 9,
                title: "Best Practices and Next Steps",
                titleAr: "أفضل الممارسات والخطوات القادمة",
                description: "Writing clean code, debugging, Git, preparing for advanced tracks, and capstone project.",
                descriptionAr: "كتابة كود نظيف، تصحيح الأخطاء، Git، التحضير للمسارات المتقدمة، ومشروع ختامي.",
                duration: "1–2 weeks",
                durationAr: "1–2 أسبوع",
                lessons: [
                    { id: "lesson-9-1", order: 1, title: "Writing Clean and Readable Python Code", titleAr: "كتابة كود بايثون نظيف وقابل للقراءة", type: "video", duration: "20 min", durationAr: "20 دقيقة", objectives: ["Follow Python best practices"], objectivesAr: ["اتباع أفضل الممارسات في بايثون"] },
                    { id: "lesson-9-2", order: 2, title: "Debugging, Testing, and Logging Techniques", titleAr: "تصحيح الأخطاء، الاختبار، وتقنيات التسجيل", type: "hands-on", duration: "25 min", durationAr: "25 دقيقة", objectives: ["Debug and test Python code"], objectivesAr: ["تصحيح واختبار كود بايثون"] },
                    { id: "lesson-9-3", order: 3, title: "Version Control with Git and GitHub Basics", titleAr: "إدارة النسخ باستخدام Git و GitHub", type: "hands-on", duration: "30 min", durationAr: "30 دقيقة", objectives: ["Use Git and GitHub for version control"], objectivesAr: ["استخدام Git و GitHub لإدارة النسخ"] },
                    { id: "lesson-9-4", order: 4, title: "Preparing for Specialized Python Tracks", titleAr: "التحضير لمسارات بايثون المتخصصة", type: "article", duration: "20 min", durationAr: "20 دقيقة", objectives: ["Plan next steps in Python learning"], objectivesAr: ["تخطيط الخطوات التالية في تعلم بايثون"] },
                    { id: "lesson-9-5", order: 5, title: "Capstone Mini Project: Solve a Real-World Problem", titleAr: "مشروع ختامي صغير: حل مشكلة واقعية", type: "project", duration: "90 min", durationAr: "90 دقيقة", objectives: ["Apply all learned skills in a real project"], objectivesAr: ["تطبيق جميع المهارات المكتسبة في مشروع حقيقي"] },
                    {
                        "id": "lesson-9-6",
                        "order": 6,
                        "title": "Python Code Style and PEP8 Compliance",
                        "titleAr": "أسلوب كتابة الكود وPEP8 في بايثون",
                        "type": "article",
                        "duration": "20 min",
                        "durationAr": "20 دقيقة",
                        "objectives": [
                            "Learn Python coding standards and style guidelines (PEP8)"
                        ],
                        "objectivesAr": [
                            "تعلم معايير كتابة الكود وإرشادات الأسلوب في بايثون (PEP8)"
                        ]
                    }
                ]
            }
        ]
    }
];

// Return all tables of contents
export const getAllTablesOfContents = (): TableOfContent[] => {
    return tableOfContent;
};

// Return a table of contents by course id
export const getTableOfContentsById = (id: string): TableOfContent | undefined => {
    return tableOfContent.find(toc => toc.id === id);
};

export const getCourseModuleLessonsById = (id: string): ModuleWithLessons[] => {
    const toc = tableOfContent.find(toc => toc.id === id);
    if (!toc) return [];

    return toc.courseModules.map(module => ({
        title: module.title,
        titleAr: module.titleAr,
        lessons: module.lessons.map(lesson => ({
            title: lesson.title,
            titleAr: lesson.titleAr
        }))
    }));
};
