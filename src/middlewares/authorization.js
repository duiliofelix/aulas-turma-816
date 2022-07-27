import { getValidToken } from '../models/token.js';

// comentário
const authenticationMiddleware = async (req, res, next) => {
    const tokenId = req.headers['Authorization'];

    try {
        await getValidToken(tokenId);
    } catch (e) {
        res.status(403).send('Unauthorized');
        return;
    }

    next();
};

export default authenticationMiddleware;
