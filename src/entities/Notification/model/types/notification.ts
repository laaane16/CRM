type NotificationStatus = 'new' | 'read';

export interface Notification {
  id: number;
  userId: number;
  title: string;
  message: string;
  status: NotificationStatus;
}
