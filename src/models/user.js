import mongoose from 'mongoose';

const UserModel = mongoose.model('User', {
    name: String,
    username: String,
    email: String,
    password: String,
});

export const createNewUser = async ({ name, username, email, password }) => {
    const user = await getUserByUsernameOrEmail({ username, email });
    if (user) {
        throw new Error("User já existe");
    }

    const newUser = new UserModel();

    newUser.name = name;
    newUser.username = username;
    newUser.email = email;
    newUser.password = password;

    await newUser.save();

    return newUser;
};

export const getUserByUsernameOrEmail = async ({ username, email }) => {
    const user = await UserModel.findOne({ $or: {
        username,
        email,
    } });

    return user;
};