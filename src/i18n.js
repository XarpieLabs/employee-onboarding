import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "welcome.employee": "Name of the new employee",
      "welcome.greeting": "Hello to IndiVillage!",
      "welcome.description": "We're delighted to have you join us. Your journey begins here with an",
      "welcome.interactive": "interactive, gamified onboarding experience",
      "welcome.that_will": "that will:",
      "welcome.explore": "Help you explore IndiVillage's mission, history, people, and culture.",
      "welcome.know_you": "Allow us to get to know you through fun activities, choices, and games.",
      "welcome.self_guided": "This is a self-guided flow, move at your own pace, unlock new steps, and enjoy the experience as you progress.",
      "welcome.get_started": "Click below to get started on your onboarding adventure!",
      "welcome.button": "Get Started",
      "nav.about": "About Us",
      "nav.language": "Language",
      "nav.help": "Help",
      "nav.previous": "Previous",
      "nav.skip": "Skip",
      "nav.continue": "Continue",
      "nav.complete": "Complete Journey",
      "avatar.title": "Choose Your Avatar",
      "avatar.button": "Choose your Language",
      "phase.coming_soon": "This phase is coming soon! We're building an amazing interactive experience for you."
    }
  },
  hi: {
    translation: {
      "welcome.employee": "नए कर्मचारी का नाम",
      "welcome.greeting": "इंडीविलेज में आपका स्वागत है!",
      "welcome.description": "हमें आपके साथ जुड़कर खुशी हो रही ह���। आपकी यात्रा यहां से शुरू होती है",
      "welcome.interactive": "इंटरैक्टिव, गेमिफाइड ऑनबोर्डिंग अनुभव",
      "welcome.that_will": "के साथ जो:",
      "welcome.explore": "इंडीविलेज के मिशन, इतिहास, लोगों और संस्कृति को जानने में मदद करेगा।",
      "welcome.know_you": "मजेदार गतिविधियों, विकल्पों और खेलों के माध्यम से आपको जानने दें।",
      "welcome.self_guided": "यह एक स्व-निर्देशित प्रवाह है, अपनी गति से आगे बढ़ें।",
      "welcome.get_started": "अपनी ऑनबोर्डिंग यात्रा शुरू करने के लिए नीचे क्लिक करें!",
      "welcome.button": "शुरू करें",
      "nav.about": "हमारे बारे में",
      "nav.language": "भाषा",
      "nav.help": "मदद",
      "nav.previous": "पिछला",
      "nav.skip": "छोड़ें",
      "nav.continue": "जारी रखें",
      "nav.complete": "यात्रा पूर्ण करें",
      "avatar.title": "अपना अवतार चुनें",
      "avatar.button": "अपनी भाषा चुनें",
      "phase.coming_soon": "यह चरण जल्द ही आ रहा है! हम आपके लिए एक अद्भुत इंटरैक्टिव अनुभव बना रहे हैं।"
    }
  },
  kn: {
    translation: {
      "welcome.employee": "ಹೊಸ ಉದ್ಯೋಗಿಯ ಹೆಸರು",
      "welcome.greeting": "ಇಂಡಿವಿಲೇಜ್‌ಗೆ ಸುಸ್ವಾಗತ!",
      "welcome.description": "ನೀವು ನಮ್ಮೊಂದಿಗೆ ಸೇರಲು ನಾವು ಸಂತೋಷಪಡುತ್ತೇವೆ। ನಿಮ್ಮ ಪ್ರಯಾಣ ಇಲ್ಲಿ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ",
      "welcome.interactive": "ಸಂವಾದಾತ್ಮಕ, ಗೇಮಿಫೈಡ್ ಆನ್‌ಬೋರ್ಡಿಂಗ್ ಅನುಭವ",
      "welcome.that_will": "ಜೊತೆಗೆ:",
      "welcome.explore": "ಇಂಡಿವಿಲೇಜ್‌ನ ಮಿಷನ್, ಇತಿಹಾಸ, ಜನರು ಮತ್ತು ಸಂಸ್ಕೃತಿಯನ್ನು ಅನ್ವ��ಷಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
      "welcome.know_you": "ಮೋಜಿನ ಚಟುವಟಿಕೆಗಳ ಮೂಲಕ ನಿಮ್ಮನ್ನು ತಿಳಿದುಕೊಳ್ಳೋಣ.",
      "welcome.self_guided": "ಇದು ಸ್ವಯಂ-ಮಾರ್ಗದರ್ಶಿ ಹರಿವು, ನಿಮ್ಮ ವೇಗದಲ್ಲಿ ಚಲಿಸಿ.",
      "welcome.get_started": "ನಿಮ್ಮ ಆನ್‌ಬೋರ್ಡಿಂಗ್ ಸಾಹಸವನ್ನು ಪ್ರಾರಂಭಿಸಲು ಕೆಳಗೆ ಕ್ಲಿಕ್ ಮಾಡಿ!",
      "welcome.button": "ಪ್ರಾರಂಭಿಸಿ",
      "nav.about": "ನಮ್ಮ ಬಗ್ಗೆ",
      "nav.language": "ಭಾಷೆ",
      "nav.help": "ಸಹಾಯ",
      "nav.previous": "ಹಿಂದಿನ",
      "nav.skip": "ಬಿಟ್ಟುಬಿಡಿ",
      "nav.continue": "ಮುಂದುವರಿಸಿ",
      "nav.complete": "ಪ್ರಯಾಣ ಪೂರ್ಣಗೊಳಿಸಿ",
      "avatar.title": "ನಿಮ್ಮ ಅವತಾರವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      "avatar.button": "ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      "phase.coming_soon": "ಈ ಹಂತ ಶೀಘ್ರದಲ್ಲೇ ಬರಲಿದೆ! ನಾವು ನಿಮ��ಾಗಿ ಅದ್ಭುತ ಅನುಭವವನ್ನ��� ನಿರ್ಮಿಸುತ್ತಿದ್ದೇವೆ."
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
