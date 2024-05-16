export interface ErrorFormat {
    title: string | null;
    message: string | null;
    onClose: () => void;
}
