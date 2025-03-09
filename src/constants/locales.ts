
export type Locale = 'en' | 'ru' | 'uz';

export const LOCALES: Record<Locale, { name: string; nativeName: string }> = {
  en: { name: 'English', nativeName: 'English' },
  ru: { name: 'Russian', nativeName: 'Русский' },
  uz: { name: 'Uzbek', nativeName: 'O\'zbek' },
};

export type TranslationKey = 
  | 'search'
  | 'searchPlaceholder'
  | 'followers'
  | 'following'
  | 'repositories'
  | 'location'
  | 'company'
  | 'blog'
  | 'joinedAt'
  | 'noResults'
  | 'searchResults'
  | 'loading'
  | 'error'
  | 'viewProfile'
  | 'darkMode'
  | 'lightMode'
  | 'language'
  | 'noUser'
  | 'userNotFound';

export const translations: Record<Locale, Record<TranslationKey, string>> = {
  en: {
    search: 'Search',
    searchPlaceholder: 'Search GitHub users...',
    followers: 'Followers',
    following: 'Following',
    repositories: 'Repositories',
    location: 'Location',
    company: 'Company',
    blog: 'Blog',
    joinedAt: 'Joined',
    noResults: 'No results found',
    searchResults: 'Search Results',
    loading: 'Loading...',
    error: 'An error occurred',
    viewProfile: 'View Profile',
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
    language: 'Language',
    noUser: 'Enter a username to search',
    userNotFound: 'User not found'
  },
  ru: {
    search: 'Поиск',
    searchPlaceholder: 'Поиск пользователей GitHub...',
    followers: 'Подписчики',
    following: 'Подписки',
    repositories: 'Репозитории',
    location: 'Местоположение',
    company: 'Компания',
    blog: 'Сайт',
    joinedAt: 'Присоединился',
    noResults: 'Результаты не найдены',
    searchResults: 'Результаты поиска',
    loading: 'Загрузка...',
    error: 'Произошла ошибка',
    viewProfile: 'Просмотреть профиль',
    darkMode: 'Темный режим',
    lightMode: 'Светлый режим',
    language: 'Язык',
    noUser: 'Введите имя пользователя для поиска',
    userNotFound: 'Пользователь не найден'
  },
  uz: {
    search: 'Qidirish',
    searchPlaceholder: 'GitHub foydalanuvchilarini qidirish...',
    followers: 'Obunachilar',
    following: 'Obunalar',
    repositories: 'Repozitoriyalar',
    location: 'Joylashuv',
    company: 'Kompaniya',
    blog: 'Veb-sayt',
    joinedAt: 'Qo\'shilgan',
    noResults: 'Natijalar topilmadi',
    searchResults: 'Qidiruv natijalari',
    loading: 'Yuklanmoqda...',
    error: 'Xatolik yuz berdi',
    viewProfile: 'Profilni ko\'rish',
    darkMode: 'Tungi rejim',
    lightMode: 'Kunduzgi rejim',
    language: 'Til',
    noUser: 'Qidirish uchun foydalanuvchi nomini kiriting',
    userNotFound: 'Foydalanuvchi topilmadi'
  }
};
