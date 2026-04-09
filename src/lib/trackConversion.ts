export const trackContactConversion = () => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-18032101058/OLHICIX5ypIcEMKNsJZD'
    });
  }
};
