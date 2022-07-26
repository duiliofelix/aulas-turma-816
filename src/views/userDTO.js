class UserDTO {
    constructor(user) {
        const { name, username, email } = user;

        this.name = name;
        this.username = username;
        this.email = email;
    }
}

export default UserDTO;
