export interface Teacher {
    teacherID: number;
    subject: string;
    cost: number;
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
    weekDay: DayOfWeek
    from: string
    to: string
}