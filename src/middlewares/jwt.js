import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const tokenRequired = (req, res, next) => {
    try {
        const token = req.headers["x-access-token"];
        if (!token) {
            res.status(403).json({"message": "mising token :( "})
        }

        const userID = jwt.verify(token, dotenv("jwt_secret"));
        const user = await User.findById(userID, {password: 0});
        if (!user) {
            res.status(404).json({message: "Not user found"});
        }

    } catch (error) {
        return res.status(401).json({message: "Unauthorized! :c "})
    }
    next();
}
