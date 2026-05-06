import axios from 'axios';

enum Gender {
    MALE = 'male',
    FEMALE = 'female',
}

enum Role {
    ADMIN = 'admin',
    MODERATOR = 'moderator',
    USER = 'user',
}

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    gender: Gender;
    role: Role;
}

interface UserResponse {
    users: User[];
    total: number;
    skip: number;
    limit: number;
}

function isUser(user: unknown): user is User {
    return typeof user === 'object' && 
        user !== null && 'id' in user && 
        'name' in user && 
        'email' in user && 
        'phone' in user;
}

async function getUsers(): Promise<User[]> {
    try {
    const response = await axios.get('https://dummyjson.com/users');
    const users: User[] = [];
    for (const user of response.data.users) {
        if (!isUser(user)) {
            console.error('Invalid user', user);
        }
        users.push(user);
    }
    return users;
        } catch (error) {
        console.error('Error fetching users', error);
        return [] as User[];
    }
}


getUsers().then(users => {
    console.log(users);
});