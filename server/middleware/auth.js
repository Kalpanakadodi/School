import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'augustine-school-secure-secret-key-2026';

export function requireAdmin(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'Authentication required. No token provided.' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET);

    if (decoded && decoded.role === 'admin') {
      req.user = decoded;
      next();
    } else {
      return res.status(403).json({ success: false, message: 'Forbidden. Admin privileges required.' });
    }
  } catch (err) {
    return res.status(401).json({ success: false, message: 'Invalid or expired session token.' });
  }
}

export function generateToken(userPayload) {
  return jwt.sign(userPayload, JWT_SECRET, { expiresIn: '7d' });
}
