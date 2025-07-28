export interface ContactMessageAdmin {
    id: number;
    name: string;
    email: string;
    message: string;

    createdAt: string;
    adminReply?: string | null;
    repliedAt?: string | null;
    isReplied?: boolean;
}
