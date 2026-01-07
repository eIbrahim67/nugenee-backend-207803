export interface PathProject {
    id: string;
    pathId: string;
    title: string;
    titleAr: string;
    description: string;
    descriptionAr: string;
    image: string;
    order: number;
}

export const pathProjects: PathProject[] = [
    // Computer Fundamentals Path
    {
        id: "path-cf-1",
        pathId: "computer-fundamentals",
        title: "Professional Document Portfolio",
        titleAr: "محفظة المستندات الاحترافية",
        description: "Complete set of professional documents including resume, cover letter, and business reports.",
        descriptionAr: "مجموعة كاملة من المستندات الاحترافية بما فيها السيرة الذاتية وخطاب التقديم والتقارير التجارية.",
        image: "/projects/path-cf-documents.jpg",
        order: 1
    },
    {
        id: "path-cf-2",
        pathId: "computer-fundamentals",
        title: "Excel Financial Tracker",
        titleAr: "متتبع مالي في Excel",
        description: "Comprehensive financial management system with budgets, expenses, and automated reports.",
        descriptionAr: "نظام إدارة مالية شامل مع الميزانيات والنفقات والتقارير التلقائية.",
        image: "/projects/path-cf-excel.jpg",
        order: 2
    },

    // Python & Programming Path
    {
        id: "path-python-1",
        pathId: "python-programming",
        title: "Automation Suite",
        titleAr: "مجموعة الأتمتة",
        description: "Collection of automation scripts for file management, data processing, and task scheduling.",
        descriptionAr: "مجموعة من سكريبتات الأتمتة لإدارة الملفات ومعالجة البيانات وجدولة المهام.",
        image: "/projects/path-python-automation.jpg",
        order: 1
    },
    {
        id: "path-python-2",
        pathId: "python-programming",
        title: "Data Analytics Project",
        titleAr: "مشروع تحليل البيانات",
        description: "End-to-end data analysis project with visualization dashboards and insights reporting.",
        descriptionAr: "مشروع تحليل بيانات شامل مع لوحات التصور وإعداد تقارير الرؤى.",
        image: "/projects/path-python-analytics.jpg",
        order: 2
    },

    // Web Development Path
    {
        id: "path-web-1",
        pathId: "web-development",
        title: "Full-Stack E-Commerce",
        titleAr: "تجارة إلكترونية متكاملة",
        description: "Complete online store with frontend, backend, database, and payment integration.",
        descriptionAr: "متجر إلكتروني كامل مع الواجهة الأمامية والخلفية وقاعدة البيانات وتكامل الدفع.",
        image: "/projects/path-web-ecommerce.jpg",
        order: 1
    },
    {
        id: "path-web-2",
        pathId: "web-development",
        title: "Interactive Web App",
        titleAr: "تطبيق ويب تفاعلي",
        description: "Modern single-page application with real-time features and responsive design.",
        descriptionAr: "تطبيق صفحة واحدة حديث مع ميزات في الوقت الفعلي وتصميم متجاوب.",
        image: "/projects/path-web-spa.jpg",
        order: 2
    },
    {
        id: "path-web-3",
        pathId: "web-development",
        title: "Portfolio & Blog Platform",
        titleAr: "منصة الملف الشخصي والمدونة",
        description: "Personal brand website with portfolio showcase, blog, and contact system.",
        descriptionAr: "موقع العلامة التجارية الشخصية مع عرض الملف الشخصي والمدونة ونظام الاتصال.",
        image: "/projects/path-web-portfolio.jpg",
        order: 3
    },

    // AI & Machine Learning Path
    {
        id: "path-ai-1",
        pathId: "ai-machine-learning",
        title: "Computer Vision System",
        titleAr: "نظام رؤية الحاسوب",
        description: "AI system for image recognition, object detection, and facial recognition.",
        descriptionAr: "نظام ذكاء اصطناعي للتعرف على الصور واكتشاف الأشياء والتعرف على الوجوه.",
        image: "/projects/path-ai-vision.jpg",
        order: 1
    },
    {
        id: "path-ai-2",
        pathId: "ai-machine-learning",
        title: "NLP Chatbot",
        titleAr: "روبوت محادثة معالجة لغة طبيعية",
        description: "Intelligent conversational AI with sentiment analysis and context understanding.",
        descriptionAr: "ذكاء اصطناعي محادثة ذكي مع تحليل المشاعر وفهم السياق.",
        image: "/projects/path-ai-nlp.jpg",
        order: 2
    },
    {
        id: "path-ai-3",
        pathId: "ai-machine-learning",
        title: "Predictive Analytics Model",
        titleAr: "نموذج تحليلات تنبؤية",
        description: "Machine learning model for forecasting trends and making data-driven predictions.",
        descriptionAr: "نموذج تعلم آلي للتنبؤ بالاتجاهات وإجراء التنبؤات المعتمدة على البيانات.",
        image: "/projects/path-ai-predictive.jpg",
        order: 3
    },

    // Mobile App Development Path
    {
        id: "path-mobile-1",
        pathId: "mobile-development",
        title: "Social Networking App",
        titleAr: "تطبيق شبكة اجتماعية",
        description: "Full-featured social app with profiles, feeds, messaging, and notifications.",
        descriptionAr: "تطبيق اجتماعي متكامل مع الملفات الشخصية والتغذية والرسائل والإشعارات.",
        image: "/projects/path-mobile-social.jpg",
        order: 1
    },
    {
        id: "path-mobile-2",
        pathId: "mobile-development",
        title: "Productivity Suite",
        titleAr: "مجموعة الإنتاجية",
        description: "Task management and productivity app with reminders, notes, and calendar integration.",
        descriptionAr: "تطبيق إدارة المهام والإنتاجية مع التذكيرات والملاحظات وتكامل التقويم.",
        image: "/projects/path-mobile-productivity.jpg",
        order: 2
    },
    {
        id: "path-mobile-3",
        pathId: "mobile-development",
        title: "Marketplace App",
        titleAr: "تطبيق السوق",
        description: "E-commerce marketplace with sellers, buyers, reviews, and secure payments.",
        descriptionAr: "سوق إلكتروني مع البائعين والمشترين والمراجعات والمدفوعات الآمنة.",
        image: "/projects/path-mobile-marketplace.jpg",
        order: 3
    }
];

// Helper functions
export const getProjectsByPathId = (pathId: string): PathProject[] => {
    return pathProjects.filter(project => project.pathId === pathId).sort((a, b) => a.order - b.order);
};

export const getPathProjectById = (id: string): PathProject | undefined => {
    return pathProjects.find(project => project.id === id);
};
