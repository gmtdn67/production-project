import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/Users';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
}
