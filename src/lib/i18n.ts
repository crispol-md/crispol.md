export type Locale = 'ru' | 'ro';

export interface Translations {
  badge: string;
  superTitle: string;
  heroTitle: string;
  heroSubtitle: string;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  videoModels: readonly string[];
  videoFallback: string;
  ctaText: string;
  ctaButton: string;
  callLabel: string;
  advantage1: string;
  advantage2: string;
  advantage3: string;
  copyright: string;
}

export const translations: Record<Locale, Translations> = {
  ru: {
    badge: 'Полный каталог в разработке • Приём заказов открыт',
    superTitle: 'ФАБРИКА МЯГКОЙ МЕБЕЛИ • МОЛДОВА',
    heroTitle:
      'Итальянская эстетика.\nИндивидуальное исполнение.\nПрямые цены от производителя.',
    heroSubtitle:
      'Мы готовим к запуску интерактивный онлайн-каталог с конфигуратором тканей и размеров. Официальное открытие сайта состоится через:',
    days: 'Дней',
    hours: 'Часов',
    minutes: 'Минут',
    seconds: 'Секунд',
    videoModels: ['Кровать «Cube»', 'Кровать «Linea»', 'Кровать «Como»', 'Кровать «Verona»', 'Кровать «Milano»', 'Кровать «Torino»', 'Кровать «Firenze»'],
    videoFallback: 'Видео загружается...',
    ctaText:
      'Не ждите запуска сайта — заказывайте мебель напрямую с фабрики уже сегодня. Подберём размер, покажем более 50 оттенков премиальных тканей и доставим к вашему дому по Кишинёву и всей Молдове.',
    ctaButton: 'Смотреть актуальный каталог на 999.md',
    callLabel: 'Позвонить',
    advantage1: 'Без наценок салонов',
    advantage2: 'Гарантия от фабрики',
    advantage3: 'Оплата при получении',
    copyright: '© 2026 CRISPOL Mobila. Chișinău / Bălți, Moldova.',
  },
  ro: {
    badge: 'Catalogul complet în dezvoltare • Comenzile sunt deschise',
    superTitle: 'FABRICA DE MOBILIER TAPIȚAT • MOLDOVA',
    heroTitle:
      'Estetică italiană.\nExecuție individuală.\nPrețuri directe de la producător.',
    heroSubtitle:
      'Pregătim lansarea catalogului online interactiv cu configurator de țesături și dimensiuni. Deschiderea oficială a site-ului va avea loc peste:',
    days: 'Zile',
    hours: 'Ore',
    minutes: 'Minute',
    seconds: 'Secunde',
    videoModels: ['Pat «Cube»', 'Pat «Linea»', 'Pat «Como»', 'Pat «Verona»', 'Pat «Milano»', 'Pat «Torino»', 'Pat «Firenze»'],
    videoFallback: 'Videoclipul se încarcă...',
    ctaText:
      'Nu așteptați lansarea site-ului — comandați mobilier direct de la fabrică chiar astăzi. Selectăm dimensiunea, vă arătăm peste 50 de nuanțe de țesături premium și livrăm la ușa dvs. în Chișinău și în toată Moldova.',
    ctaButton: 'Vezi catalogul actual pe 999.md',
    callLabel: 'Sună',
    advantage1: 'Fără adaosuri de salon',
    advantage2: 'Garanție de la fabrică',
    advantage3: 'Plata la primire',
    copyright: '© 2026 CRISPOL Mobila. Chișinău / Bălți, Moldova.',
  },
};
