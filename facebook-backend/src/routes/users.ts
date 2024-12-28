import { Router } from 'express';

const router = Router();

router.post('/signup', (req, res) => {
  const { name, email } = req.body;
  res.json({ message: `User ${name} with email ${email} signed up successfully!` });
});

module.exports = router;
