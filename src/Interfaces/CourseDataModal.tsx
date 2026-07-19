export interface CourseData {
    id: number;
    imageName: string;
    title: string;
    badge: "PREMIUM" | "FREE";
    status: "COMING SOON" | "ENROLLED" | null;
    language: string;
    rating: number | null;
    reviews: string | null;
    description: string;
    countdown: { days: number; hours: number; mins: number; secs: number } | null;
    buttonText: string | null;
    enrolled: boolean;
    progress: string | null;
}

export interface BundleData {
    id: number;
    imageName: string;
    title: string;
    badge: "PREMIUM" | null;
    language: string | null;
    includes: string[];
    description: string;
    buttonText: string;
}

export interface PartnerCourseDetail {
    instructor: string;
    title: string;
    imageName: string;
    thumbnailText: string;
    thumbnailSubtext: string;
    badge: "PREMIUM" | "FREE";
    description: string;
    features: string[];
    buttonText: string;
}