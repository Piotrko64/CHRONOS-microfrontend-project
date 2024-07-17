export type AllEvents = Array<EventUser>;

export interface EventUser {
  userId?: number;
  eventId: string;
  title: string;
  description: string;
  dataEvent: string;
  sessionId?: string;
}

export interface AddingEvent {
  title: string;
  description: string;
  dataEvent: string;
}

export type UpdateEvent = {
  eventId: string;
  title: string;
  description: string;
  dataEvent: string;
};

export interface ResponseEvent {
  message: string;
  data: {
    userId: number;
    eventId: string;
    title: string;
    description: string;
    dataEvent: string;
    sessionId?: string;
  };
}

export interface DataEvents {
  dataUser: {
    allEvents: AllEvents;
  };
  cookie: string;
}
