export interface CourseProject {
    id: string;
    courseId: string;
    title: string;
    titleAr: string;
    description: string;
    descriptionAr: string;
    image: string;
    order: number;
}

export const courseProjects: CourseProject[] = [
    // Python Programming Projects
    {
        id: "python-1",
        courseId: "python-programming",
        title: "Task Automation Bot",
        titleAr: "روبوت أتمتة المهام",
        description: "Build a Python bot that automates daily tasks like file organization, email sorting, and data backups.",
        descriptionAr: "أنشئ روبوت بايثون يقوم بأتمتة المهام اليومية مثل تنظيم الملفات وفرز البريد الإلكتروني والنسخ الاحتياطي للبيانات.",
        image: "/projects/python-automation.jpg",
        order: 1
    },
    {
        id: "python-2",
        courseId: "python-programming",
        title: "Data Analysis Dashboard",
        titleAr: "لوحة تحليل البيانات",
        description: "Create an interactive dashboard to visualize and analyze datasets using Pandas and Matplotlib.",
        descriptionAr: "أنشئ لوحة تحكم تفاعلية لتصور وتحليل مجموعات البيانات باستخدام Pandas و Matplotlib.",
        image: "/projects/python-dashboard.jpg",
        order: 2
    },
    {
        id: "python-3",
        courseId: "python-programming",
        title: "Web Scraper Tool",
        titleAr: "أداة استخراج بيانات الويب",
        description: "Develop a web scraper to extract and process data from websites automatically.",
        descriptionAr: "طور أداة لاستخراج البيانات من المواقع الإلكترونية ومعالجتها تلقائياً.",
        image: "/projects/python-scraper.jpg",
        order: 3
    },

    // Web Development Projects
    {
        id: "web-1",
        courseId: "web-development",
        title: "E-Commerce Platform",
        titleAr: "منصة تجارة إلكترونية",
        description: "Build a fully functional online store with product catalog, shopping cart, and payment integration.",
        descriptionAr: "أنشئ متجراً إلكترونياً كامل الوظائف مع كتالوج المنتجات وسلة التسوق وتكامل الدفع.",
        image: "/projects/web-ecommerce.jpg",
        order: 1
    },
    {
        id: "web-2",
        courseId: "web-development",
        title: "Portfolio Website",
        titleAr: "موقع الملف الشخصي",
        description: "Create a professional portfolio website showcasing your projects with modern design and animations.",
        descriptionAr: "أنشئ موقع ملف شخصي احترافي يعرض مشاريعك بتصميم حديث ورسوم متحركة.",
        image: "/projects/web-portfolio.jpg",
        order: 2
    },
    {
        id: "web-3",
        courseId: "web-development",
        title: "Social Media Dashboard",
        titleAr: "لوحة تحكم وسائل التواصل",
        description: "Develop a responsive dashboard for managing social media accounts with analytics and scheduling.",
        descriptionAr: "طور لوحة تحكم متجاوبة لإدارة حسابات وسائل التواصل الاجتماعي مع التحليلات والجدولة.",
        image: "/projects/web-social-dashboard.jpg",
        order: 3
    },

    // AI Engineering Projects
    {
        id: "ai-1",
        courseId: "ai-engineering",
        title: "Image Classification Model",
        titleAr: "نموذج تصنيف الصور",
        description: "Train a deep learning model to classify images with high accuracy using TensorFlow.",
        descriptionAr: "درب نموذج تعلم عميق لتصنيف الصور بدقة عالية باستخدام TensorFlow.",
        image: "/projects/ai-image-classifier.jpg",
        order: 1
    },
    {
        id: "ai-2",
        courseId: "ai-engineering",
        title: "Chatbot with NLP",
        titleAr: "روبوت محادثة مع معالجة اللغة",
        description: "Build an intelligent chatbot that understands and responds to user queries using natural language processing.",
        descriptionAr: "أنشئ روبوت محادثة ذكي يفهم ويستجيب لاستفسارات المستخدمين باستخدام معالجة اللغة الطبيعية.",
        image: "/projects/ai-chatbot.jpg",
        order: 2
    },
    {
        id: "ai-3",
        courseId: "ai-engineering",
        title: "Recommendation System",
        titleAr: "نظام التوصيات",
        description: "Create a recommendation engine that suggests products or content based on user behavior.",
        descriptionAr: "أنشئ محرك توصيات يقترح المنتجات أو المحتوى بناءً على سلوك المستخدم.",
        image: "/projects/ai-recommendation.jpg",
        order: 3
    },

    // Mobile App Development Projects
    {
        id: "mobile-1",
        courseId: "mobile-app-development",
        title: "Fitness Tracking App",
        titleAr: "تطبيق تتبع اللياقة",
        description: "Develop a cross-platform fitness app with workout tracking, progress charts, and health metrics.",
        descriptionAr: "طور تطبيق لياقة متعدد المنصات مع تتبع التمارين ومخططات التقدم ومقاييس الصحة.",
        image: "/projects/mobile-fitness.jpg",
        order: 1
    },
    {
        id: "mobile-2",
        courseId: "mobile-app-development",
        title: "Recipe Discovery App",
        titleAr: "تطبيق اكتشاف الوصفات",
        description: "Build a mobile app for discovering and saving recipes with search, favorites, and shopping lists.",
        descriptionAr: "أنشئ تطبيق موبايل لاكتشاف وحفظ الوصفات مع البحث والمفضلة وقوائم التسوق.",
        image: "/projects/mobile-recipe.jpg",
        order: 2
    },
    {
        id: "mobile-3",
        courseId: "mobile-app-development",
        title: "Travel Guide App",
        titleAr: "تطبيق دليل السفر",
        description: "Create a travel companion app with maps, itineraries, and local recommendations.",
        descriptionAr: "أنشئ تطبيق مرافق سفر مع الخرائط وجداول الرحلات والتوصيات المحلية.",
        image: "/projects/mobile-travel.jpg",
        order: 3
    },

    // Computer Basics Projects
    {
        id: "basics-1",
        courseId: "computer-basics",
        title: "Digital Resume",
        titleAr: "السيرة الذاتية الرقمية",
        description: "Create a professional digital resume using MS Word with modern formatting and design.",
        descriptionAr: "أنشئ سيرة ذاتية رقمية احترافية باستخدام MS Word بتنسيق وتصميم حديث.",
        image: "/projects/basics-resume.jpg",
        order: 1
    },
    {
        id: "basics-2",
        courseId: "computer-basics",
        title: "Budget Spreadsheet",
        titleAr: "جدول الميزانية",
        description: "Build a personal budget tracker in Excel with formulas, charts, and automated calculations.",
        descriptionAr: "أنشئ متتبع ميزانية شخصية في Excel مع الصيغ والمخططات والحسابات التلقائية.",
        image: "/projects/basics-budget.jpg",
        order: 2
    },

    // Office Applications Projects
    {
        id: "office-1",
        courseId: "office-applications",
        title: "Business Presentation",
        titleAr: "عرض تقديمي للأعمال",
        description: "Design a compelling business presentation with PowerPoint featuring animations and data visualization.",
        descriptionAr: "صمم عرضاً تقديمياً مقنعاً للأعمال باستخدام PowerPoint مع الرسوم المتحركة وتصور البيانات.",
        image: "/projects/office-presentation.jpg",
        order: 1
    },
    {
        id: "office-2",
        courseId: "office-applications",
        title: "Sales Report Dashboard",
        titleAr: "لوحة تقرير المبيعات",
        description: "Create an interactive sales dashboard in Excel with pivot tables, charts, and KPI tracking.",
        descriptionAr: "أنشئ لوحة مبيعات تفاعلية في Excel مع جداول محورية ومخططات وتتبع مؤشرات الأداء.",
        image: "/projects/office-sales.jpg",
        order: 2
    }
];

// Helper functions
export const getProjectsByCourseId = (courseId: string): CourseProject[] => {
    return courseProjects.filter(project => project.courseId === courseId).sort((a, b) => a.order - b.order);
};

export const getProjectById = (id: string): CourseProject | undefined => {
    return courseProjects.find(project => project.id === id);
};
