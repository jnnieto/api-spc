export interface NotificationData {
    notification: Notification;
    to: string
}

interface Notification {
    title: string;
    body: string;
    image: string;
}
