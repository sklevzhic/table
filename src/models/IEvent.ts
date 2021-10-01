export interface IEvent {
    author?: string;
    guest?: string;
    date?: string;
    description?: string;
    name: string;
    count: number | string;
    id?: number | string;
    distance: number | string;
}