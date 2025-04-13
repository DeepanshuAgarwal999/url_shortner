import crypto from 'crypto';

const generateShortCode = (length = 6) => {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const randomBytes = crypto.randomBytes(length);
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = randomBytes[i] % characters.length;
    result += characters[randomIndex];
  }
  return result;
};

export default generateShortCode;