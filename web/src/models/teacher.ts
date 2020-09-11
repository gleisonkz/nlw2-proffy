export interface Teacher {
    id: number;
    subject: string;
    cost: number;
    user_id: number;
    name: string;
    avatar: string;
    whatsapp: string;
    bio: string;
    lessonSchedule?: LessonSchedule[]
}

export enum DayOfWeek {
    Domingo,
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
}

export interface LessonSchedule {
    weekDay: number
    from: string
    to: string
}