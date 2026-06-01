const jwt = require("jsonwebtoken")

const JWT_SECRET = process.env.JWT_SECRET || "plovdev-dev-secret"

const protect = (req, res, next) => {
    const authHeader = req.headers.authorization || ""
    const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null

    if (!token) {
        return res.status(401).json({ message: "Authentication token is required." })
    }

    try {
        req.user = jwt.verify(token, JWT_SECRET)
        next()
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token." })
    }
}

const requireRole = (...roles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ message: "Authentication token is required." })
        }

        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: "You do not have permission to access this route." })
        }

        next()
    }
}

module.exports = { protect, requireRole }
