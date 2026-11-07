export type Locale = 'ru' | 'ro';

export interface Translations {
  // Header
  headerStatus: string;
  headerShowroom: string;
  headerConstruct: string;
  headerOrder: string;

  // Hero
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  heroBadge1: string;
  heroBadge2: string;
  heroBadge3: string;
  heroBtnPrimary: string;
  heroBtnSecondary: string;

  // Countdown
  countdownTitle: string;
  countdownDate: string;
  countdownProgress: string;
  countdownUpcoming: string;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;

  // Showroom
  showroomTitle: string;
  showroomSubtitle: string;
  videoModels: readonly string[];
  videoStyles: readonly string[];
  videoFallback: string;
  showroomCta: string;
  prevModel: string;
  nextModel: string;

  // Bento features
  bentoTitle: string;
  bentoSubtitle: string;
  feature1Title: string;
  feature1Desc: string;
  feature2Title: string;
  feature2Desc: string;
  feature3Title: string;
  feature3Desc: string;
  feature4Title: string;
  feature4Desc: string;

  // Contact / Footer
  contactTitle: string;
  contactSubtitle: string;
  contactCall: string;
  contactTelegram: string;
  contactWhatsApp: string;
  contactViber: string;
  contactCatalog: string;
  contactCatalogDesc: string;
  copyright: string;
}

export const translations: Record<Locale, Translations> = {
  ru: {
    headerStatus: 'Каталог в разработке • Приём заказов открыт',
    headerShowroom: 'Шоурум',
    headerConstruct: 'Конструктив',
    headerOrder: 'Заказать',

    heroBadge: 'ФАБРИКА МЯГКОЙ МЕБЕЛИ CRISPOL • КИШИНЕВ, МОЛДОВА',
    heroTitle:
      'Кровати и диваны на заказ.\nНапрямую с нашей фабрики без наценок салонов.',
    heroSubtitle:
      'Создаем мягкую мебель под ваши размеры с выбором из 50+ премиальных тканей. Полный интерактивный сайт-каталог откроется через 30 дней — а заказы и расчет стоимости мы принимаем уже сегодня.',
    heroBadge1: '50+ премиальных тканей',
    heroBadge2: 'Габариты 140–200×200 см',
    heroBadge3: 'Оплата при получении',
    heroBtnPrimary: 'Смотреть цены на 999.md',
    heroBtnSecondary: 'Рассчитать заказ в чате',

    countdownTitle: 'ДО ЗАПУСКА ПОЛНОГО КАТАЛОГА CRISPOL.MD',
    countdownDate: '06.12.2026',
    countdownProgress: 'Готовность платформы и 3D-каталога',
    countdownUpcoming:
      'Интерактивный подбор из 50+ тканей, калькулятор размеров и онлайн-бронирование',
    days: 'Дней',
    hours: 'Часов',
    minutes: 'Минут',
    seconds: 'Секунд',

    showroomTitle: 'Виртуальный шоурум',
    showroomSubtitle: '7 моделей кроватей и диванов нашего производства',
    videoModels: [
      'Кровать «Vertex»',
      'Диван «Como»',
      'Диван «Verona»',
      'Диван «Riva»',
      'Кровать «Monza»',
      'Кровать «Siena»',
      'Кровать «Alba»',
    ],
    videoStyles: [
      'Геометрический лофт и вертикальные панели',
      'Глубокая лаунж-посадка и мягкие формы',
      'Современная классика для гостиной',
      'Скандинавский минимализм и модульный комфорт',
      'Неоклассика с ромбовидной стяжкой',
      'Мягкое изголовье-подушки',
      'Архитектурная симметрия',
    ],
    videoFallback: 'Видео загружается...',
    showroomCta: 'Узнать цену в Telegram / WhatsApp',
    prevModel: 'Предыдущая',
    nextModel: 'Следующая',

    bentoTitle: 'Архитектурный конструктив',
    bentoSubtitle: 'Каждая деталь продумана инженерами и дизайнерами',
    feature1Title: 'Прямая цена с фабрики',
    feature1Desc:
      'Вы не оплачиваете аренду торговых центров и маржу посредников. Экономия до 30% по сравнению с мебельными салонами.',
    feature2Title: 'Усиленный каркас и газлифты',
    feature2Desc:
      'Сухой строганный брус, ортопедические ламели и мощный подъёмный механизм с огромным бельевым коробом.',
    feature3Title: '50+ тканей и 14 видов матрасов',
    feature3Desc:
      'Износостойкий велюр, букле, рогожка с защитой «антикоготь» и влагоотталкивающей пропиткой.',
    feature4Title: 'Доставка по всей Молдове',
    feature4Desc:
      'Быстрая доставка по Кишинёву и всей стране с оплатой при получении после осмотра.',

    contactTitle: 'Закажите напрямую с фабрики',
    contactSubtitle:
      'Без посредников и салонных наценок. Подберём размер, покажем ткани и доставим к вашему дому.',
    contactCall: 'Позвонить напрямую',
    contactTelegram: 'Telegram',
    contactWhatsApp: 'WhatsApp',
    contactViber: 'Viber',
    contactCatalog: 'Каталог 999.md',
    contactCatalogDesc: 'Смотреть все объявления и цены',
    copyright: '© 2026 CRISPOL Mobila. Chișinău, Moldova.',
  },
  ro: {
    headerStatus: 'Catalog în dezvoltare • Comenzile sunt deschise',
    headerShowroom: 'Showroom',
    headerConstruct: 'Constructiv',
    headerOrder: 'Comandă',

    heroBadge: 'FABRICA DE MOBILĂ TAPIȚATĂ CRISPOL • CHIȘINĂU, MOLDOVA',
    heroTitle:
      'Paturi și canapele la comandă.\nDirect de la fabrica noastră, fără adaos de salon.',
    heroSubtitle:
      'Producem mobilă tapițată pe dimensiunile dvs., cu peste 50 de stofe premium. Catalogul online interactiv se lansează în 30 de zile — iar comenzile sunt deschise chiar astăzi.',
    heroBadge1: '50+ țesături premium',
    heroBadge2: 'Dimensiuni 140–200×200 cm',
    heroBadge3: 'Plata la primire',
    heroBtnPrimary: 'Vezi prețurile pe 999.md',
    heroBtnSecondary: 'Calculează comanda în chat',

    countdownTitle: 'PÂNĂ LA LANSAREA CATALOGULUI COMPLET CRISPOL.MD',
    countdownDate: '06.12.2026',
    countdownProgress: 'Pregătirea platformei și a catalogului 3D',
    countdownUpcoming:
      'Selectare interactivă din 50+ țesături, calculator de dimensiuni și rezervare online',
    days: 'Zile',
    hours: 'Ore',
    minutes: 'Minute',
    seconds: 'Secunde',

    showroomTitle: 'Showroom virtual',
    showroomSubtitle: '7 modele de paturi și canapele din producția noastră',
    videoModels: [
      'Patul «Vertex»',
      'Canapeaua «Como»',
      'Canapeaua «Verona»',
      'Canapeaua «Riva»',
      'Patul «Monza»',
      'Patul «Siena»',
      'Patul «Alba»',
    ],
    videoStyles: [
      'Loft geometric și panouri verticale',
      'Confort lounge profund și forme moi',
      'Clasic modern pentru living',
      'Minimalism scandinav și confort modular',
      'Neoclasic cu tapițerie în romburi',
      'Tăblie moale tip perne',
      'Simetrie arhitecturală',
    ],
    videoFallback: 'Videoclipul se încarcă...',
    showroomCta: 'Află prețul în Telegram / WhatsApp',
    prevModel: 'Anterior',
    nextModel: 'Următor',

    bentoTitle: 'Constructiv arhitectural',
    bentoSubtitle: 'Fiecare detaliu este gândit de ingineri și designeri',
    feature1Title: 'Preț direct de la fabrică',
    feature1Desc:
      'Nu plătiți chiria centrelor comerciale și marja intermediarilor. Economie de până la 30% față de saloanele de mobilier.',
    feature2Title: 'Cadru ranforsat și pistoane cu gaz',
    feature2Desc:
      'Lemn rindeluit uscat, lamele ortopedice și mecanism de ridicare puternic cu ladă mare pentru lenjerie.',
    feature3Title: '50+ țesături și 14 tipuri de saltele',
    feature3Desc:
      'Velur rezistent la uzură, bouclé, rogojcă cu protecție „anti-gheară" și impregnare hidrofobă.',
    feature4Title: 'Livrare în toată Moldova',
    feature4Desc:
      'Livrare rapidă în Chișinău și în toată țara cu plata la primire după inspecție.',

    contactTitle: 'Comandați direct de la fabrică',
    contactSubtitle:
      'Fără intermediari și adaosuri de salon. Selectăm dimensiunea, vă arătăm țesăturile și livrăm la ușa dvs.',
    contactCall: 'Sună direct',
    contactTelegram: 'Telegram',
    contactWhatsApp: 'WhatsApp',
    contactViber: 'Viber',
    contactCatalog: 'Catalog 999.md',
    contactCatalogDesc: 'Vezi toate anunțurile și prețurile',
    copyright: '© 2026 CRISPOL Mobila. Chișinău, Moldova.',
  },
};
