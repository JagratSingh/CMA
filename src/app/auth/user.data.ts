import { User } from "../app.model";

const user: User[] = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@gmail.com',
        password: 'password123',
        role: 'MEMBER'
    },
    {
        id: 2,
        name: 'admin',
        email: 'admin@example.com',
        password: 'admin',
        role: 'LIBRARIAN'
    },
    {
        id: 3,
        name: 'Jane Smith',
        email: 'jane.smith@gmail.com',
        password: 'password456',
        role: 'MEMBER'
    },
];

export default user;