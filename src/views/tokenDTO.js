import moment from "moment";

class TokenDTO {
    constructor({ _id, createdAt }) {
        const expireAt = moment(createdAt);
        expireAt.add(3, 'd');

        this.token = _id;
        this.expireAt = expireAt.toDate();
    }
}

// moment.js

export default TokenDTO;
