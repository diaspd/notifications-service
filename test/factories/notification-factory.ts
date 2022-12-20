import { Content } from '@app/entities/content';
import { Notification, NotificationProps } from '@app/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'soc',
    content: new Content('Nova sujestão de amizade.'),
    recipientId: 'recipient-2',
    ...override,
  });
}
