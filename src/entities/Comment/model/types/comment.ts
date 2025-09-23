import { User } from 'entities/Users';

export interface Comment {
    id: string;
    user: User;
    text: string;
}
