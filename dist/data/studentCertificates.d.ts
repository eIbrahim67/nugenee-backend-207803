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
export declare const studentCertificates: StudentCertificate[];
export declare const getAllCertificates: () => StudentCertificate[];
export declare const getCertificateById: (id: string) => StudentCertificate | undefined;
