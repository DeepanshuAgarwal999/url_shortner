import QRCode from 'qrcode';

export const generateQRCode = async (url, options = {}) => {
  const qrOptions = {
    width: options.size || 200,
    color: {
      dark: options.foreground || '#000000',
      light: options.background || '#FFFFFF'
    },
    errorCorrectionLevel: 'H'
  };

  try {
    // Generate QR code as data URL
    const qrDataUrl = await QRCode.toDataURL(url, qrOptions);
    return qrDataUrl;
  } catch (error) {
    throw new Error('Failed to generate QR code');
  }
};