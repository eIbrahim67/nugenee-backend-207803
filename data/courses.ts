import { Code, Globe, Smartphone, Cpu, Brain, Monitor, LucideIcon, Projector, Layers, Code2, Settings, Puzzle, Snail, } from "lucide-react";

export interface Course {
  id: string;
  icon: LucideIcon;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  overview: string;
  overviewAr: string;
  level: string;
  levelAr: string;
  duration: string;
  durationAr: string;
  schedule: string;
  scheduleAr: string;
  skills: string[];
  skillsAr: string[];
  prerequisites: string[];
  prerequisitesAr: string[];
  tools: string[];
  objectives: string[];
  objectivesAr: string[];
  certification: string;
  certificationAr: string;
  targetAudience: string[];
  targetAudienceAr: string[];
  color: string;
  categoryId: string;
  instructorId: string;
  active: boolean;
}

export interface Category {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
}

export const COURSE_CATEGORIES: Category[] = [
  {
    id: "kids",
    title: "Kids Courses",
    titleAr: "دورات الأطفال",
    description: "Fun and creative courses that introduce kids to coding, robotics, and computational thinking",
    descriptionAr: "دورات ممتعة وإبداعية تعرف الأطفال على البرمجة والروبوتات والتفكير الحسابي",
  },
  {
    id: "programming",
    title: "Programming Courses",
    titleAr: "دورات البرمجة",
    description: "Master the art of coding with our comprehensive programming courses",
    descriptionAr: "أتقن فن البرمجة مع دوراتنا الشاملة",
  },
  {
    id: "computer-science",
    title: "Computer Science",
    titleAr: "علوم الحاسوب",
    description: "Learn programming, software development, creative coding, and robotics to build real-world applications and solve problems.",
    descriptionAr: "تعلم البرمجة، تطوير البرمجيات، البرمجة الإبداعية، والروبوتات لبناء تطبيقات حقيقية وحل المشكلات.",
  },
  {
    id: "computer-foundations",
    title: "Computer Foundations",
    titleAr: "أساسيات الحاسوب",
    description: "Build essential digital skills, computer literacy, office applications, and technical knowledge for modern workplaces.",
    descriptionAr: "بناء مهارات رقمية أساسية، الثقافة الرقمية، تطبيقات المكتب، والمعرفة التقنية لمتطلبات مكان العمل الحديث.",
  },
  {
    id: "hardware",
    title: "Hardware & Embedded Systems",
    titleAr: "الأجهزة والأنظمة المدمجة",
    description: "Explore robotics, Arduino, and embedded systems for creative and technical learning",
    descriptionAr: "استكشف الروبوتات وأردوينو والأنظمة المدمجة للتعلم الإبداعي والتقني",
  },
  {
    id: "projects",
    title: "Project-Based Learning",
    titleAr: "التعلم القائم على المشاريع",
    description: "Turn your knowledge into real-world projects and a job-ready portfolio",
    descriptionAr: "حوّل معرفتك إلى مشاريع حقيقية ومحفظة جاهزة لسوق العمل",
  },
  {
    id: "industrial",
    title: "Industrial & Technical Skills",
    titleAr: "المهارات الصناعية والتقنية",
    description: "Learn professional industrial automation and PLC programming skills",
    descriptionAr: "تعلم مهارات الأتمتة الصناعية وبرمجة PLC الاحترافية",
  },
];

export type CourseCategory = typeof COURSE_CATEGORIES[number];

export const courses: Course[] = [
  // kids
  {
    id: "creative-coding-for-kids",
    icon: Puzzle,

    title: "Creative Coding for Kids",
    titleAr: "البرمجة الإبداعية للأطفال",

    description:
      "A fun and visual introduction to programming for kids using Scratch, focused on creativity, storytelling, and game design.",
    descriptionAr:
      "مقدمة ممتعة وبصرية في البرمجة للأطفال باستخدام سكراتش، مع التركيز على الإبداع، ورواية القصص، وتصميم الألعاب.",

    overview:
      "This course introduces children to programming concepts through interactive stories, animations, and games built with Scratch. Learners develop logical thinking, creativity, and confidence while coding in a safe and engaging environment.",
    overviewAr:
      "تُعرّف هذه الدورة الأطفال بمفاهيم البرمجة من خلال القصص التفاعلية، والرسوم المتحركة، والألعاب باستخدام سكراتش، مما يساعدهم على تنمية التفكير المنطقي والإبداع والثقة الرقمية.",

    level: "Beginner",
    levelAr: "مبتدئ",

    duration: "10–12 Weeks",
    durationAr: "10–12 أسبوع",

    schedule: "2 Sessions per Week (Play-based Learning)",
    scheduleAr: "جلستان أسبوعيًا (تعلم قائم على اللعب)",

    skills: [
      "Logical Thinking",
      "Creativity",
      "Problem Solving",
      "Basic Programming Concepts",
      "Game Design",
      "Storytelling"
    ],
    skillsAr: [
      "التفكير المنطقي",
      "الإبداع",
      "حل المشكلات",
      "مفاهيم البرمجة الأساسية",
      "تصميم الألعاب",
      "رواية القصص"
    ],

    prerequisites: [
      "Basic computer usage",
      "Ability to read simple instructions"
    ],
    prerequisitesAr: [
      "استخدام أساسي للحاسوب",
      "القدرة على قراءة تعليمات بسيطة"
    ],

    tools: [
      "Scratch (Web Version)",
      "Computer or Tablet",
      "Internet Browser"
    ],

    objectives: [
      "Understand basic programming concepts",
      "Create interactive games and stories",
      "Develop logical and creative thinking",
      "Build confidence using technology",
      "Learn problem-solving through play"
    ],
    objectivesAr: [
      "فهم مفاهيم البرمجة الأساسية",
      "إنشاء ألعاب وقصص تفاعلية",
      "تنمية التفكير المنطقي والإبداعي",
      "بناء الثقة في استخدام التكنولوجيا",
      "تعلم حل المشكلات من خلال اللعب"
    ],

    certification:
      "Certificate of Completion – Creative Coding for Kids",
    certificationAr:
      "شهادة إتمام – البرمجة الإبداعية للأطفال",

    targetAudience: [
      "Kids aged 7–12",
      "Beginners with no coding experience",
      "Creative and curious learners"
    ],
    targetAudienceAr: [
      "الأطفال من عمر 7 إلى 12 سنة",
      "المبتدئون بدون خبرة برمجية",
      "الأطفال الفضوليون والمبدعون"
    ],

    color: "from-yellow-500 to-yellow-600",

    categoryId: "kids",

    instructorId: "ibrahim-mohamed",
    active: true
  },
  {
    id: "creative-robotics-arduino-scratch",
    icon: Cpu,

    title: "Creative Robotics with Arduino & Scratch",
    titleAr: "الروبوتات الإبداعية باستخدام أردوينو وسكراش",

    description:
      "A hands-on robotics course that combines Arduino electronics with Scratch-based visual programming to help students design, build, and program interactive robotic systems.",
    descriptionAr:
      "دورة عملية في الروبوتات تجمع بين إلكترونيات أردوينو والبرمجة المرئية باستخدام سكراش لمساعدة الطلاب على تصميم وبناء وبرمجة أنظمة روبوتية تفاعلية.",

    overview:
      "Students learn robotics fundamentals through visual programming and electronics. The course focuses on sensors, actuators, control logic, and creative problem solving using Arduino and Scratch, culminating in a capstone robotics project.",
    overviewAr:
      "يتعلم الطلاب أساسيات الروبوتات من خلال البرمجة المرئية والإلكترونيات، مع التركيز على الحساسات والمشغلات والمنطق البرمجي وحل المشكلات الإبداعي، وينتهي المشروع بمشروع روبوت متكامل.",

    level: "Intermediate",
    levelAr: "متوسط",

    duration: "12–16 weeks",
    durationAr: "12–16 أسبوع",

    schedule: "2 sessions per week (theory + hands-on labs)",
    scheduleAr: "جلستان أسبوعيًا (شرح نظري + تطبيق عملي)",

    skills: [
      "Robotics fundamentals",
      "Arduino programming basics",
      "Scratch visual programming",
      "Electronics and circuits",
      "Sensor integration",
      "Motor control",
      "Logical thinking",
      "Problem solving"
    ],
    skillsAr: [
      "أساسيات الروبوتات",
      "مبادئ برمجة أردوينو",
      "البرمجة المرئية باستخدام سكراش",
      "الإلكترونيات والدوائر",
      "التعامل مع الحساسات",
      "التحكم في المحركات",
      "التفكير المنطقي",
      "حل المشكلات"
    ],

    prerequisites: [
      "Basic computer skills",
      "Curiosity and interest in robotics"
    ],
    prerequisitesAr: [
      "مهارات أساسية في استخدام الحاسوب",
      "الفضول والاهتمام بالروبوتات"
    ],

    tools: [
      "Arduino Uno or compatible board",
      "Scratch for Arduino (S4A / mBlock)",
      "Breadboard and jumper wires",
      "Sensors and motors",
      "Computer or laptop"
    ],

    objectives: [
      "Understand robotics concepts and components",
      "Build electronic circuits safely",
      "Program Arduino using Scratch blocks",
      "Integrate sensors and actuators",
      "Design interactive robotic systems",
      "Develop a complete robotics project"
    ],
    objectivesAr: [
      "فهم مفاهيم ومكونات الروبوتات",
      "بناء الدوائر الإلكترونية بشكل آمن",
      "برمجة أردوينو باستخدام سكراش",
      "دمج الحساسات والمشغلات",
      "تصميم أنظمة روبوتية تفاعلية",
      "تنفيذ مشروع روبوت متكامل"
    ],

    certification:
      "Certificate of Completion – Creative Robotics with Arduino & Scratch",
    certificationAr:
      "شهادة إتمام دورة – الروبوتات الإبداعية باستخدام أردوينو وسكراش",

    targetAudience: [
      "Kids and teens interested in robotics",
      "Beginner STEM students",
      "Makers and hobbyists"
    ],
    targetAudienceAr: [
      "الأطفال والناشئة المهتمون بالروبوتات",
      "طلاب STEM المبتدئون",
      "الهواة وصناع المشاريع"
    ],

    color: "from-blue-500 to-blue-600",

    categoryId: "kids",

    instructorId: "ibrahim-mohamed",
    active: true
  },

  // computer-foundation
  {
    id: "introduction-to-computer",
    icon: Monitor,

    title: "Introduction to Computer",
    titleAr: "مقدمة في الحاسوب",

    description:
      "A practical introductory course designed to help learners understand computers, their components, software, and everyday usage. The course builds essential digital literacy and prepares students for further technical learning.",
    descriptionAr:
      "دورة تمهيدية عملية تهدف إلى مساعدة المتعلمين على فهم الحاسوب ومكوناته والبرمجيات وكيفية استخدامه في الحياة اليومية، وبناء مهارات الثقافة الرقمية الأساسية والاستعداد للتعلم التقني المتقدم.",

    overview:
      "This course introduces learners to computer fundamentals, including hardware, software, operating systems, file management, internet usage, digital communication, security, and productivity tools. It emphasizes hands-on practice and real-world computer usage.",
    overviewAr:
      "تقدم هذه الدورة أساسيات الحاسوب بما في ذلك المكونات المادية، البرمجيات، أنظمة التشغيل، إدارة الملفات، استخدام الإنترنت، التواصل الرقمي، الأمان، وأدوات الإنتاجية، مع التركيز على التطبيق العملي.",

    level: "Beginner",
    levelAr: "مبتدئ",

    duration: "30 Hours",
    durationAr: "30 ساعة",

    schedule: "2–3 sessions per week",
    scheduleAr: "جلستان إلى ثلاث جلسات أسبوعيًا",

    skills: [
      "Basic computer usage",
      "File and folder management",
      "Internet browsing",
      "Email and digital communication",
      "Using productivity software",
      "Digital safety awareness"
    ],
    skillsAr: [
      "استخدام الحاسوب الأساسي",
      "إدارة الملفات والمجلدات",
      "تصفح الإنترنت",
      "البريد الإلكتروني والتواصل الرقمي",
      "استخدام برامج الإنتاجية",
      "الوعي بالأمان الرقمي"
    ],

    prerequisites: ["No prerequisites"],
    prerequisitesAr: ["لا توجد متطلبات"],

    tools: [
      "Desktop or Laptop Computer",
      "Windows or macOS",
      "Web Browser",
      "Office Productivity Software"
    ],

    objectives: [
      "Understand what a computer is and how it works",
      "Identify hardware and software components",
      "Use operating systems confidently",
      "Manage files and folders efficiently",
      "Use the internet safely and effectively",
      "Communicate digitally in a professional manner"
    ],
    objectivesAr: [
      "فهم ماهية الحاسوب وكيفية عمله",
      "التعرف على مكونات العتاد والبرمجيات",
      "استخدام أنظمة التشغيل بثقة",
      "إدارة الملفات والمجلدات بكفاءة",
      "استخدام الإنترنت بأمان وفعالية",
      "التواصل الرقمي بشكل مهني"
    ],

    certification: "Certificate of Completion",
    certificationAr: "شهادة إتمام الدورة",

    targetAudience: [
      "Beginners with no computer background",
      "Students and school learners",
      "Adults seeking digital literacy",
      "Office and administrative staff"
    ],
    targetAudienceAr: [
      "المبتدئون بدون خبرة سابقة",
      "الطلاب",
      "البالغون الراغبون في تعلم أساسيات الحاسوب",
      "الموظفون الإداريون"
    ],

    color: "from-blue-500 to-blue-600",
    categoryId: "computer-foundations",

    instructorId: "ibrahim-mohamed",
    active: true,
  },
  {
    id: "office-applications",
    icon: Monitor,
    title: "Office Applications",
    titleAr: "تطبيقات المكتب",
    description: "Master Microsoft Office and Google Workspace. Excel, Word, PowerPoint, and productivity tools for professional success.",
    descriptionAr: "أتقن Microsoft Office و Google Workspace. Excel و Word و PowerPoint وأدوات الإنتاجية للنجاح المهني.",
    overview: "Become proficient in the tools used in every modern workplace. This comprehensive course covers Microsoft Office and Google Workspace, preparing you for any office environment.",
    overviewAr: "كن بارعاً في الأدوات المستخدمة في كل مكان عمل حديث. تغطي هذه الدورة الشاملة Microsoft Office و Google Workspace، مما يعدك لأي بيئة مكتبية.",
    level: "Beginner",
    levelAr: "مبتدئ",
    duration: "8 weeks",
    durationAr: "8 أسابيع",
    schedule: "2 sessions per week, 2.5 hours each",
    scheduleAr: "جلستان أسبوعياً، ساعتان ونصف لكل جلسة",
    skills: ["MS Word", "MS Excel", "PowerPoint", "Google Workspace", "Collaboration", "Data Organization"],
    skillsAr: ["MS Word", "MS Excel", "PowerPoint", "Google Workspace", "التعاون", "تنظيم البيانات"],
    prerequisites: ["Basic computer skills", "Familiarity with file management"],
    prerequisitesAr: ["مهارات حاسوب أساسية", "إلمام بإدارة الملفات"],
    tools: ["Microsoft Office 365", "Google Workspace", "Cloud storage"],
    objectives: [
      "Create professional documents",
      "Build spreadsheets and analyze data",
      "Design compelling presentations",
      "Collaborate effectively online",
      "Boost workplace productivity"
    ],
    objectivesAr: [
      "إنشاء مستندات احترافية",
      "بناء جداول بيانات وتحليل البيانات",
      "تصميم عروض تقديمية مقنعة",
      "التعاون بفعالية عبر الإنترنت",
      "زيادة إنتاجية مكان العمل"
    ],
    certification: "Receive your NuGenee Office Applications Certificate, demonstrating proficiency in Microsoft Office and Google Workspace for professional environments.",
    certificationAr: "احصل على شهادة تطبيقات المكتب من نيوجيني، تثبت براعتك في Microsoft Office و Google Workspace لبيئات العمل المهنية.",
    targetAudience: ["Office workers", "Students", "Job seekers", "Entrepreneurs"],
    targetAudienceAr: ["موظفو المكاتب", "الطلاب", "الباحثون عن عمل", "رواد الأعمال"],
    color: "from-emerald-500 to-emerald-600",
    categoryId: "computer-foundations",
    instructorId: "ibrahim-mohamed",
    active: true,
  },

  // programming
  {
    id: "python-for-all",
    icon: Snail,

    title: "Python for All",
    titleAr: "بايثون للجميع",

    description:
      "The essential Python foundation course for all students. Covers programming fundamentals, problem-solving, and practical Python skills applicable across backend development, data analysis, AI, automation, and scripting.",
    descriptionAr:
      "الدورة الأساسية في بايثون لجميع الطلاب، تغطي أساسيات البرمجة، وحل المشكلات، ومهارات بايثون العملية المستخدمة في تطوير الويب، تحليل البيانات، الذكاء الاصطناعي، الأتمتة والسكربتات.",

    overview:
      "Students learn Python basics, control flow, data structures, functions, OOP, and real-world applications. The course culminates in mini-projects and capstone exercises to prepare learners for advanced Python tracks.",
    overviewAr:
      "يتعلم الطلاب أساسيات بايثون، تدفق التحكم، هياكل البيانات، الدوال، البرمجة الكائنية، والتطبيقات العملية، وتنتهي الدورة بمشاريع صغيرة وتمارين شاملة لإعداد المتعلمين للمسارات المتقدمة.",

    level: "Beginner",
    levelAr: "مبتدئ",

    duration: "10–14 weeks",
    durationAr: "10–14 أسبوع",

    schedule: "2–3 sessions per week (lectures + exercises)",
    scheduleAr: "2–3 جلسات أسبوعيًا (محاضرات + تمارين)",

    skills: [
      "Python syntax and fundamentals",
      "Control flow and logic",
      "Data structures and algorithms",
      "Functions and modular programming",
      "File handling and exceptions",
      "Object-oriented programming",
      "Debugging and best practices",
      "Real-world Python applications"
    ],
    skillsAr: [
      "أساسيات وبنية بايثون",
      "تدفق التحكم والمنطق",
      "هياكل البيانات والخوارزميات",
      "الدوال والبرمجة المعيارية",
      "التعامل مع الملفات والاستثناءات",
      "البرمجة الكائنية",
      "تصحيح الأخطاء وأفضل الممارسات",
      "تطبيقات بايثون العملية"
    ],

    prerequisites: [
      "Basic computer literacy",
      "No prior programming required"
    ],
    prerequisitesAr: [
      "معرفة أساسية بالحاسوب",
      "لا يشترط وجود خبرة سابقة في البرمجة"
    ],

    tools: [
      "Python 3.x",
      "IDEs: VS Code, PyCharm, or Jupyter Notebook",
      "Git and GitHub",
      "Python libraries (Pandas, NumPy, Matplotlib)"
    ],

    objectives: [
      "Gain a strong foundation in Python programming",
      "Understand core programming concepts",
      "Work with data structures and algorithms",
      "Develop modular and maintainable code",
      "Learn object-oriented programming principles",
      "Apply Python across multiple domains",
      "Build projects and practical exercises"
    ],
    objectivesAr: [
      "اكتساب أساس قوي في برمجة بايثون",
      "فهم مفاهيم البرمجة الأساسية",
      "العمل مع هياكل البيانات والخوارزميات",
      "تطوير كود منظم وقابل للصيانة",
      "تعلم مبادئ البرمجة الكائنية",
      "تطبيق بايثون عبر مجالات متعددة",
      "تنفيذ مشاريع وتمارين عملية"
    ],

    certification:
      "Certificate of Completion – Python for All",
    certificationAr:
      "شهادة إتمام دورة – بايثون للجميع",

    targetAudience: [
      "Absolute beginners in programming",
      "Students pursuing Python-based tracks",
      "Anyone interested in Python for AI, data, or automation"
    ],
    targetAudienceAr: [
      "المبتدئون تمامًا في البرمجة",
      "الطلاب المتابعون لمسارات بايثون",
      "أي شخص مهتم بايثون للذكاء الاصطناعي أو البيانات أو الأتمتة"
    ],

    color: "from-yellow-500 to-yellow-600",
    categoryId: "programming",
    active: true,
    instructorId: "ibrahim-mohamed"
  },

  // computer-science
  {
    id: "programming-foundations-core-skills",
    icon: Code2,

    title: "Programming Foundations & Core Skills",
    titleAr: "أساسيات البرمجة والمهارات الجوهرية",

    description:
      "A foundational computer science course designed to build strong programming fundamentals, algorithmic thinking, and object-oriented design skills required for modern software development.",
    descriptionAr:
      "دورة تأسيسية في علوم الحاسب تهدف إلى بناء أساس قوي في البرمجة، التفكير الخوارزمي، ومبادئ البرمجة كائنية التوجه اللازمة لتطوير البرمجيات الحديثة.",

    overview:
      "This course introduces learners to the core principles of computer science and programming. Students develop problem-solving skills, understand how programs are structured, learn object-oriented programming, and apply fundamental data structures and algorithms. The course prepares learners for advanced tracks such as web development, mobile apps, data science, and software engineering.",
    overviewAr:
      "تقدم هذه الدورة المبادئ الأساسية لعلوم الحاسب والبرمجة، حيث يكتسب المتدرب مهارات حل المشكلات، وفهم بنية البرامج، وتعلم البرمجة كائنية التوجه، وتطبيق هياكل البيانات والخوارزميات الأساسية، مما يؤهله للانتقال إلى المسارات المتقدمة مثل تطوير الويب والموبايل وعلوم البيانات وهندسة البرمجيات.",

    level: "Beginner",
    levelAr: "مبتدئ",

    duration: "70–90 Hours",
    durationAr: "٧٠–٩٠ ساعة",

    schedule: "Structured Modules with Practical Assignments",
    scheduleAr: "محتوى منظم مع تطبيقات ومهام عملية",

    skills: [
      "Problem Solving",
      "Algorithmic Thinking",
      "Structured Programming",
      "Object-Oriented Programming (OOP)",
      "Basic Data Structures",
      "Debugging and Testing",
      "Version Control with Git",
    ],
    skillsAr: [
      "حل المشكلات",
      "التفكير الخوارزمي",
      "البرمجة الهيكلية",
      "البرمجة كائنية التوجه",
      "هياكل البيانات الأساسية",
      "تصحيح الأخطاء والاختبار",
      "إدارة الإصدارات باستخدام Git",
    ],

    prerequisites: [
      "Basic computer usage",
      "No prior programming experience required",
    ],
    prerequisitesAr: [
      "استخدام أساسي للحاسوب",
      "لا يشترط وجود خبرة برمجية سابقة",
    ],

    tools: [
      "Code Editor (VS Code or similar)",
      "Programming Language (Python / Java / C++ – academy choice)",
      "Git & GitHub",
    ],

    objectives: [
      "Develop strong programming fundamentals",
      "Think algorithmically and solve problems effectively",
      "Write clean, readable, and maintainable code",
      "Apply object-oriented programming principles",
      "Understand and use core data structures and algorithms",
      "Prepare for advanced programming and software engineering tracks",
    ],
    objectivesAr: [
      "بناء أساس قوي في البرمجة",
      "تنمية التفكير الخوارزمي وحل المشكلات",
      "كتابة كود منظم وسهل القراءة والصيانة",
      "تطبيق مبادئ البرمجة كائنية التوجه",
      "فهم واستخدام هياكل البيانات والخوارزميات الأساسية",
      "الاستعداد للانتقال إلى المسارات البرمجية المتقدمة",
    ],

    certification: "Certificate of Completion – Programming Foundations & Core Skills",
    certificationAr: "شهادة إتمام – أساسيات البرمجة والمهارات الجوهرية",

    targetAudience: [
      "Beginners in programming",
      "High school and university students",
      "Career switchers into tech",
      "Aspiring software developers",
    ],
    targetAudienceAr: [
      "المبتدئون في البرمجة",
      "طلاب المدارس والجامعات",
      "الراغبون في التحول المهني إلى مجال التقنية",
      "الطامحون للعمل كمطوري برمجيات",
    ],

    color: "from-green-500 to-green-600",
    categoryId: "computer-science",

    instructorId: "ibrahim-mohamed",
    active: true,
  },

  // industrial
  {
    id: "plc-industrial-automation",
    icon: Cpu,

    title: "PLC & Industrial Automation",
    titleAr: "الـ PLC والأتمتة الصناعية",

    description:
      "A comprehensive, hands-on course covering PLC programming and industrial automation systems, from core electrical concepts to advanced SCADA, safety, and Industry 4.0 technologies.",
    descriptionAr:
      "دورة شاملة وتطبيقية تغطي برمجة المتحكمات المنطقية PLC وأنظمة الأتمتة الصناعية، بدءًا من الأساسيات الكهربائية وحتى أنظمة SCADA والسلامة الصناعية وتقنيات الثورة الصناعية الرابعة.",

    overview:
      "This course equips learners with practical and theoretical knowledge required to design, program, operate, and maintain modern industrial automation systems using PLCs, HMIs, SCADA, and industrial networks. It emphasizes real-world applications, troubleshooting, and industry best practices.",
    overviewAr:
      "تزود هذه الدورة المتدربين بالمعرفة النظرية والعملية اللازمة لتصميم وبرمجة وتشغيل وصيانة أنظمة الأتمتة الصناعية الحديثة باستخدام PLC وHMI وSCADA والشبكات الصناعية، مع التركيز على التطبيقات الواقعية وأفضل الممارسات الصناعية.",

    level: "Intermediate",
    levelAr: "متوسط",

    duration: "80–100 Hours",
    durationAr: "٨٠–١٠٠ ساعة",

    schedule: "Flexible – Self-Paced or Instructor-Led",
    scheduleAr: "مرن – دراسة ذاتية أو بإشراف مدرب",

    skills: [
      "PLC Programming (Ladder Logic)",
      "Industrial Automation Concepts",
      "HMI & SCADA Integration",
      "Industrial Networking",
      "Motor Control Systems",
      "Troubleshooting & Maintenance",
      "Safety Systems Design",
    ],
    skillsAr: [
      "برمجة PLC باستخدام Ladder Logic",
      "مفاهيم الأتمتة الصناعية",
      "تكامل HMI وSCADA",
      "الشبكات الصناعية",
      "أنظمة التحكم في المحركات",
      "استكشاف الأخطاء والصيانة",
      "تصميم أنظمة السلامة",
    ],

    prerequisites: [
      "Basic computer skills",
      "Basic electrical knowledge (recommended, not mandatory)",
    ],
    prerequisitesAr: [
      "مهارات استخدام الحاسوب الأساسية",
      "معرفة كهربائية أساسية (يفضل ولكن غير إلزامي)",
    ],

    tools: [
      "PLC Programming Software (TIA Portal, RSLogix, EcoStruxure)",
      "HMI/SCADA Software",
      "Simulation Tools",
      "Industrial Documentation Standards",
    ],

    objectives: [
      "Understand industrial automation architectures",
      "Program and debug PLC applications",
      "Design and integrate HMI and SCADA systems",
      "Implement industrial communication protocols",
      "Apply safety standards in automation projects",
      "Troubleshoot and maintain automation systems",
    ],
    objectivesAr: [
      "فهم بنية أنظمة الأتمة الصناعية",
      "برمجة وتصحيح أخطاء تطبيقات PLC",
      "تصميم ودمج أنظمة HMI وSCADA",
      "تطبيق بروتوكولات الاتصال الصناعية",
      "تطبيق معايير السلامة في مشاريع الأتمة",
      "استكشاف أعطال أنظمة الأتمة وصيانتها",
    ],

    certification: "Certificate of Completion – PLC & Industrial Automation",
    certificationAr: "شهادة إتمام – PLC والأتمة الصناعية",

    targetAudience: [
      "Engineering students",
      "Electrical and automation technicians",
      "Industrial maintenance engineers",
      "Career switchers to industrial automation",
    ],
    targetAudienceAr: [
      "طلاب الهندسة",
      "فنيي الكهرباء والأتمة",
      "مهندسي الصيانة الصناعية",
      "الراغبين في التحول المهني إلى مجال الأتمة",
    ],

    color: "from-red-500 to-red-600",
    categoryId: "industrial",
    instructorId: "ibrahim-mohamed",
    active: true,
  },

  // hardware
  {
    id: "arduino-programming",
    icon: Cpu,
    title: "Arduino Programming",
    titleAr: "برمجة الأردوينو",
    description: "Learn electronics and programming together. Build robots, sensors, and IoT devices with Arduino microcontrollers.",
    descriptionAr: "تعلم الإلكترونيات والبرمجة معاً. ابنِ روبوتات وحساسات وأجهزة IoT مع متحكمات Arduino.",
    overview: "Combine hardware and software to create amazing interactive projects. This hands-on course teaches you electronics fundamentals alongside Arduino programming.",
    overviewAr: "اجمع بين الأجهزة والبرمجيات لإنشاء مشاريع تفاعلية مذهلة. تعلمك هذه الدورة العملية أساسيات الإلكترونيات جنباً إلى جنب مع برمجة Arduino.",
    level: "Beginner",
    levelAr: "مبتدئ",
    duration: "10 weeks",
    durationAr: "10 أسابيع",
    schedule: "2 sessions per week, 3 hours each (includes lab time)",
    scheduleAr: "جلستان أسبوعياً، 3 ساعات لكل جلسة (تشمل وقت المختبر)",
    skills: ["Electronics Basics", "C/C++", "Sensor Integration", "IoT Projects", "Circuit Design", "Debugging"],
    skillsAr: ["أساسيات الإلكترونيات", "C/C++", "تكامل الحساسات", "مشاريع IoT", "تصميم الدوائر", "تصحيح الأخطاء"],
    prerequisites: ["Basic computer skills", "Interest in electronics", "No prior experience needed"],
    prerequisitesAr: ["مهارات حاسوب أساسية", "اهتمام بالإلكترونيات", "لا تحتاج خبرة سابقة"],
    tools: ["Arduino Uno", "Arduino IDE", "Various sensors", "LEDs & Motors", "Breadboards"],
    objectives: [
      "Understand electronics fundamentals",
      "Program Arduino microcontrollers",
      "Build interactive hardware projects",
      "Create IoT connected devices",
      "Debug hardware and software issues"
    ],
    objectivesAr: [
      "فهم أساسيات الإلكترونيات",
      "برمجة متحكمات Arduino",
      "بناء مشاريع أجهزة تفاعلية",
      "إنشاء أجهزة متصلة بـ IoT",
      "تصحيح مشاكل الأجهزة والبرمجيات"
    ],
    certification: "Earn your NuGenee Arduino & IoT Certificate, demonstrating hands-on experience in electronics and embedded programming.",
    certificationAr: "احصل على شهادة Arduino و IoT من نيوجيني، تثبت خبرتك العملية في الإلكترونيات والبرمجة المدمجة.",
    targetAudience: ["Hardware enthusiasts", "Makers", "Students", "Anyone curious about electronics"],
    targetAudienceAr: ["هواة الأجهزة", "المبتكرون", "الطلاب", "أي شخص فضولي حول الإلكترونيات"],
    color: "from-orange-500 to-orange-600",
    categoryId: "hardware",
    instructorId: "ibrahim-mohamed",
    active: true,
  },

  // ----------------- other courses -----------------
  {
    id: "capstone-project",
    icon: Projector,
    title: "Capstone Project – Real-World Application",
    titleAr: "مشروع التخرج – تطبيق عملي حقيقي",
    description: "Apply all your programming and software engineering skills in a complete real-world project.",
    descriptionAr: "تطبيق جميع مهاراتك في البرمجة وهندسة البرمجيات في مشروع كامل وواقعي.",
    overview: "Plan, develop, test, and deploy a full software project, demonstrating everything learned in previous courses.",
    overviewAr: "تخطيط، تطوير، اختبار ونشر مشروع برمجي كامل، يعكس كل ما تعلمته في الدورات السابقة.",
    level: "Advanced",
    levelAr: "متقدم",
    duration: "6 weeks",
    durationAr: "6 أسابيع",
    schedule: "2 sessions per week, 3 hours each",
    scheduleAr: "جلستان أسبوعياً، 3 ساعات لكل جلسة",
    skills: ["Project Planning", "Development", "Testing", "Deployment"],
    skillsAr: ["تخطيط المشروع", "التطوير", "الاختبار", "النشر"],
    prerequisites: ["All prior courses in the path"],
    prerequisitesAr: ["جميع الدورات السابقة في المسار"],
    tools: ["VS Code", "Git", "Testing Frameworks", "Deployment Tools"],
    objectives: [
      "Design and implement a full project",
      "Apply best coding practices",
      "Collaborate using professional workflows",
      "Showcase a portfolio-ready application"
    ],
    objectivesAr: [
      "تصميم وتنفيذ مشروع كامل",
      "تطبيق أفضل ممارسات البرمجة",
      "التعاون باستخدام طرق عمل احترافية",
      "عرض تطبيق جاهز للمحفظة"
    ],
    certification: "NuGenee Capstone Certificate",
    certificationAr: "شهادة مشروع التخرج من نيوجيني",
    targetAudience: ["Students completing The Forge™ path", "Aspiring professional programmers"],
    targetAudienceAr: ["الطلاب الذين أنهوا مسار The Forge™", "المبرمجون الطموحون"],
    color: "from-pink-500 to-purple-500",
    categoryId: "projects",
    instructorId: "ibrahim-mohamed",
    active: true,
  },
  {
    id: "specialization-track",
    icon: Layers,
    title: "Specialization Track – Professional Focus",
    titleAr: "مسار التخصص – تركيز احترافي",
    description: "Choose a focused specialization to deepen your expertise and align your skills with real market needs.",
    descriptionAr: "اختر تخصصًا محددًا لتعميق خبرتك ومواءمة مهاراتك مع احتياجات سوق العمل.",
    overview: "This track allows learners to specialize in a chosen domain through advanced topics, hands-on practice, and real-world scenarios that build job-ready expertise.",
    overviewAr: "يتيح هذا المسار للمتعلمين التخصص في مجال محدد من خلال موضوعات متقدمة، تطبيقات عملية، وسيناريوهات واقعية لبناء خبرة جاهزة لسوق العمل.",
    level: "Intermediate",
    levelAr: "متوسط",
    duration: "8 weeks",
    durationAr: "8 أسابيع",
    schedule: "2 sessions per week, 3 hours each",
    scheduleAr: "جلستان أسبوعياً، 3 ساعات لكل جلسة",
    skills: [
      "Advanced Problem Solving",
      "System Design",
      "Domain-Specific Expertise",
      "Best Practices"
    ],
    skillsAr: [
      "حل المشكلات المتقدم",
      "تصميم الأنظمة",
      "خبرة متخصصة في المجال",
      "أفضل الممارسات"
    ],
    prerequisites: ["Core and intermediate courses in the path"],
    prerequisitesAr: ["الدورات الأساسية والمتوسطة في المسار"],
    tools: ["VS Code", "Git", "Professional Frameworks", "Industry Tools"],
    objectives: [
      "Develop deep expertise in a chosen specialization",
      "Apply advanced concepts in practical scenarios",
      "Build production-level features and solutions",
      "Prepare for professional roles in the specialization"
    ],
    objectivesAr: [
      "بناء خبرة عميقة في تخصص مختار",
      "تطبيق المفاهيم المتقدمة في سيناريوهات عملية",
      "تطوير حلول وميزات بمستوى إنتاجي",
      "الاستعداد لأدوار احترافية في مجال التخصص"
    ],
    certification: "NuGenee Specialization Track Certificate",
    certificationAr: "شهادة مسار التخصص من نيوجيني",
    targetAudience: [
      "Graduates of the core learning path",
      "Developers seeking focused career growth"
    ],
    targetAudienceAr: [
      "خريجو المسار التعليمي الأساسي",
      "المطورون الساعون لتطوير مسارهم المهني"
    ],
    color: "from-indigo-500 to-cyan-500",
    categoryId: "programming",
    instructorId: "ibrahim-mohamed",
    active: true,
  },

];

export const getCourseById = (id: string): Course | undefined => {
  return courses.find(course => course.id === id);
};

export const getCoursesByCategory = (): Record<string, Course[]> => {
  return courses.reduce((acc, course) => {

    if (course.categoryId === null) {
      return acc; // skip courses with null/undefined/empty category
    }

    if (!acc[course.categoryId]) {
      acc[course.categoryId] = [];
    }
    acc[course.categoryId].push(course);
    return acc;
  }, {} as Record<string, Course[]>);
};
