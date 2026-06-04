import heroImage from '../assets/hero-studio.svg';
import yigitBaranDuman from '../assets/yigit-baran-duman.jpeg';
import mehmetCanKilic from '../assets/mehmet-can-kilic.jpeg';
import galleryOne from '../assets/ornek-1.png';
import galleryTwo from '../assets/ornek-2.png';
import galleryThree from '../assets/ornek-3.png';
import galleryFour from '../assets/ornek-4.png';
import galleryFive from '../assets/ornek-5.png';
import gallerySix from '../assets/ornek6.png';

export const studioData = {
  brand: {
    name: 'Arthena Tattoo Studio', // Değiştir: Stüdyo adınızı buradan güncelleyin.
    tagline: 'Premium custom tattoo experience', // Değiştir: Kısa marka mottosu.
    heroTitle: 'Teninizde kalan, zamansız bir imza.',
    heroText:
      'Arthena Tattoo Studio; hijyen, sanat ve kişinin hikayesini bir araya getiren modern bir dövme deneyimi sunar.',
    logoText: 'Arthena',
    heroImage,
  },
  navLinks: [
    { label: 'Hakkımızda', href: '#hakkimizda' },
    { label: 'Hizmetler', href: '#hizmetler' },
    { label: 'Sanatçılar', href: '#sanatcilar' },
    { label: 'Galeri', href: '#galeri' },
    { label: 'İletişim', href: '#iletisim' },
  ],
  about: {
    eyebrow: 'Hakkımızda',
    title: 'Koyu estetik, steril disiplin, kişilere özel tasarım.',
    story:
      'Arthena Tattoo Studio, modern dövme sanatını butik bir servis anlayışıyla buluşturmak için tasarlandı. Her randevu; fikir geliştirme, cilt ve yerleşim analizi, teknik planlama ve titiz uygulama adımlarıyla ilerler.',
    highlights: [
      {
        title: 'Medikal hijyen standardı',
        text: 'Tek kullanımlık iğne, steril ekipman ve seans öncesi yüzey protokolleri ile çalışırız.',
      },
      {
        title: 'Özel tasarım süreci',
        text: 'Referanslarınızı, vücut formunuzu ve stil beklentinizi okuyarak size ait bir kompozisyon hazırlarız.',
      },
      {
        title: 'Deneyimli sanatçılar',
        text: 'Fine line, blackwork, cover-up ve minimal tasarımlarda uzmanlaşmış sanatçı ekibiyle hizmet veririz.',
      },
    ],
  },
  services: [
    {
      title: 'Custom Tattoo',
      text: 'Kişiye özel konsept, eskiz ve profesyonel uygulama süreci.',
    },
    {
      title: 'Fine Line Tattoo',
      text: 'İnce çizgi, zarif detay ve minimal kompozisyon odaklı dövmeler.',
    },
    {
      title: 'Blackwork Tattoo',
      text: 'Güçlü kontrast, geometrik formlar ve koyu siyah dokular.',
    },
    {
      title: 'Cover-Up Tattoo',
      text: 'Eski dövmeleri daha güçlü bir tasarıma dönüştüren planlı kapatma seansları.',
    },
    {
      title: 'Piercing',
      text: 'Steril ekipmanla modern piercing uygulamaları ve bakım yönlendirmesi.',
    },
    {
      title: 'Tattoo Consultation',
      text: 'Fikir, bölge, ölçü, stil ve seans planlaması için bire bir danışmanlık.',
    },
  ],
  artists: [
    {
      name: 'Yiğit Baran Duman', // Değiştir: Sanatçı adını buradan güncelleyin.
      specialty: 'Custom Tattoo & Blackwork',
      bio: 'Kişiye özel tasarım, güçlü kontur ve modern siyah işler üzerine çalışır.',
      image: yigitBaranDuman, // Değiştir: Sanatçı fotoğrafını assets klasörüne ekleyip bu alanı güncelleyin.
    },
    {
      name: 'Mehmet Can Kılıç',
      specialty: 'Fine Line & Minimal Tattoo',
      bio: 'İnce çizgi, minimal kompozisyon ve detay odaklı dövme uygulamalarında uzmanlaşır.',
      image: mehmetCanKilic,
    },
  ],
  gallery: [
    { title: 'Phoenix Linework', category: 'Fine Line', image: galleryOne },
    { title: 'Golden Eye', category: 'Blackwork', image: galleryTwo },
    { title: 'Sacred Geometry', category: 'Geometric', image: galleryThree },
    { title: 'Ornamental Flame', category: 'Ornamental', image: galleryFour },
    { title: 'Shadow Iris', category: 'Cover-Up', image: galleryFive },
    { title: 'Crimson Drop', category: 'Minimal', image: gallerySix },
  ],
  contact: {
    address: 'Atakent, 3271. Sk. No: 10A, 55210 Atakum/Samsun', // Değiştir: Gerçek adresinizi yazın.
    mapUrl: 'https://maps.app.goo.gl/dNUJhtUkjxu6QHxo7', // Değiştir: Google Maps paylaşım linkinizi yazın.
    phone: '05467143005', // Değiştir: Gerçek telefon numaranızı yazın.
    email: 'arthenatattoo@gmail.com', // Değiştir: Gerçek e-posta adresinizi yazın.
    hours: ['Pazartesi - Cuma: 11:00 - 20:00', 'Cumartesi: 12:00 - 19:00', 'Pazar: Kapalı'],
    socials: [
      { label: 'Instagram', href: 'https://www.instagram.com/arthenatattoo' }, // Değiştir: Gerçek sosyal medya linkinizi yazın.
    ],
  },
};

export type StudioData = typeof studioData;
