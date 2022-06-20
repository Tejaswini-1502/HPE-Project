import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@bookpoint.com',
        password: bcrypt.hashSync("123456",10),
        isAdmin: true
    },
    {
        name: 'Tejaswini V',
        email: 'tejaswiniv@imail.com',
        password: bcrypt.hashSync("123456",10),
    },
    {
        name: 'Vaishnavi N',
        email: 'vaishnavin@imail.com',
        password: bcrypt.hashSync("123456",10),
        isAdmin: false
    }
]

export default users