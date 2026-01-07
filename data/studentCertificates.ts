export interface StudentCertificate {
    id: string;
    studentName: string;
    studentNameAr: string;
    courseName: string;
    courseNameAr: string;
    certificateImage: string;
    achievement: string;
    achievementAr: string;
    date: string;
    order: number;
}

export const studentCertificates: StudentCertificate[] = [
    {
        id: 'cert-1',
        studentName: 'Omar Hassan',
        studentNameAr: 'عمر حسن',
        courseName: 'Python for All',
        courseNameAr: 'بايثون للجميع',
        certificateImage: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=400',
        achievement: 'Outstanding achievement in Python programming foundations',
        achievementAr: 'إنجاز متميز في أساسيات برمجة بايثون',
        date: '2023-11-15',
        order: 1
    },
    {
        id: 'cert-2',
        studentName: 'Laila Mahmoud',
        studentNameAr: 'ليلى محمود',
        courseName: 'Web Development Bootcamp',
        courseNameAr: 'معسكر تطوير الويب',
        certificateImage: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=400',
        achievement: 'Successful completion of full-stack web development path',
        achievementAr: 'إكمال بنجاح لمسار تطوير الويب المتكامل',
        date: '2023-12-01',
        order: 2
    },
    {
        id: 'cert-3',
        studentName: 'Zaid Ali',
        studentNameAr: 'زيد علي',
        courseName: 'Industrial Automation with PLC',
        courseNameAr: 'الأتمتة الصناعية باستخدام PLC',
        certificateImage: 'https://images.unsplash.com/photo-1523050853064-9a7e6383e29c?q=80&w=400',
        achievement: 'Mastered professional PLC programming and control systems',
        achievementAr: 'إتقان برمجة PLC الاحترافية وأنظمة التحكم',
        date: '2024-01-10',
        order: 3
    }
];

// Helper function
export const getAllCertificates = (): StudentCertificate[] => {
    return studentCertificates.sort((a, b) => b.order - a.order); // Most recent first
};

export const getCertificateById = (id: string): StudentCertificate | undefined => {
    return studentCertificates.find(cert => cert.id === id);
};
