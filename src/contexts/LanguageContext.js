
import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  en: {
    header: {
      mainTitle: 'Public Grievance',
      subTitle: 'Redressal',
      systemTitle: 'System(PGRS)',
      cpgramsTitle: 'CPGRAMS',
      cpgramsSubtitle1: 'Centralized Public Grievance Redress And',
      cpgramsSubtitle2: 'Monitoring System',
      ministerName: 'Sri Nara Lokesh',
      ministerDesignation1: "Hon'ble Minister for",
      ministerDesignation2: 'Human Resource Development;',
      ministerDesignation3: 'IT Electronics & Communication; RTG'
    },
    navbar: {
      home: 'Home',
      dashboards: 'Dashboards',
      viewGrievances: 'View Grievances',
      fileUpload: 'File Upload',
      register: 'Register',
      login: 'Login',
      searchPlaceholder: 'Search...'
    },
    home: {
      heroDescription:
        "Public Grievance Redressal System (PGRS) is a universal grievance helpline that allows citizens to directly raise issues to the Chief Minister's Office.",
      features: [
        'Register individual or household-level grievances',
        'Follow up on the status of a registered grievance',
        'Enquire about government services and schemes'
      ],
      image: 'cm_photo_eng.png', // Add your English image path
      imageAlt: 'English Image Description',
      services: ['File Upload', 'View Grievances', 'Dashboards', 'Share Feedback']
    },
    login: {
      heading: 'Login',
      emailLabel: 'Email Address',
      passwordLabel: 'Password',
      emailPlaceholder: 'you@example.com',
      passwordPlaceholder: 'Enter your password',
      submit: 'Login',
      noAccount: "Don't have an account?",
      registerLink: 'Register'
    },
    signup: {
      heading: 'Create Account',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email Address',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      submit: 'Sign Up',
      haveAccount: 'Already have an account?',
      loginLink: 'Login here'
    },
    fileUpload: {
      heading: 'Submit Supporting Documents',
      fullName: 'Full Name',
      email: 'Email',
      grievanceId: 'Grievance ID (optional)',
      description: 'Description',
      attachFiles: 'Attach files (images / pdf) — max 6',
      note: 'Allowed: jpg, png, pdf — max 6 files',
      submit: 'Submit',
      cancel: 'Cancel',
      submitting: 'Uploading...',
      success: 'Submitted successfully.'
    }
  },
  te: {
    header: {
      mainTitle: 'ప్రజా సమస్యల',
      subTitle: 'పరిష్కార వేదిక',
      systemTitle: '(PGRS)',
      cpgramsTitle: 'CPGRAMS',
      cpgramsSubtitle1: 'కేంద్రీకృత ప్రజా ఫిర్యాదుల',
      cpgramsSubtitle2: 'పరిష్కారం మరియు పర్యవేక్షణ వ్యవస్థ',
      ministerName: 'శ్రీ నారా లోకేష్',
      ministerDesignation1: 'గౌరవనీయ మంత్రి',
      ministerDesignation2: 'మానవ వనరుల అభివృద్ధి;',
      ministerDesignation3: 'ఇన్ఫర్మేషన్ టెక్నాలజీ, ఎలక్ట్రానిక్స్ & కమ్యూనికేషన్స్; ఆర్.టి.జి'
    },
    navbar: {
      home: 'హోమ్',
      dashboards: 'డ్యాష్‌బోర్డ్‌లు',
      viewGrievances: 'ఫిర్యాదులు చూడండి',
      fileUpload: 'ఫైల్ అప్‌లోడ్',
      register: 'నమోదు',
      login: 'లాగిన్',
      searchPlaceholder: 'శోధించండి...'
    },
    home: {
      heroDescription:
        '-ప్రజా సమస్యల పరిష్కార వేదిక" అనేది సార్వత్రిక ఫిర్యాదుల పరిష్కార హెల్ప్‌లైన్. ఇది పౌరులు తమ సమస్యను నేరుగా ముఖ్యమంత్రి కార్యాలయానికి తెలియజేయడానికి వీలు కల్పిస్తుంది.',
      features: [
       '- వ్యక్తిగత లేదా గృహ-స్థాయి ఫిర్యాదులను నమోదు చేయండి',
'- నమోదిత ఫిర్యాదు యొక్క స్థితిని తెలుసుకోండి',
'- ప్రభుత్వ సేవలు, పథకాల గురించి అడిగి తెలుసుకోండి'
      ],
      image: 'cm_photo_telugu.png', // Add your Telugu image path
      imageAlt: 'Telugu Image Description',
      services: ['ఫైల్ అప్‌లోడ్', 'ఫిర్యాదులు చూడండి', 'డ్యాష్‌బోర్డ్‌లు', 'ఫీడ్‌బ్యాక్']
    },
    login: {
      heading: 'లాగిన్',
      emailLabel: 'ఇమెయిల్ చిరునామా',
      passwordLabel: 'పాస్వర్డ్',
      emailPlaceholder: 'you@example.com',
      passwordPlaceholder: 'మీ పాస్వర్డ్ నమోదు చేయండి',
      submit: 'లాగిన్',
      noAccount: 'ఖాతా లేని వారా?',
      registerLink: 'నమోదు'
    },
    signup: {
      heading: 'ఖాతా సృష్టించండి',
      firstName: 'మొదటి పేరు',
      lastName: 'చివరి పేరు',
      email: 'ఇమెయిల్ చిరునామా',
      password: 'పాస్వర్డ్',
      confirmPassword: 'పాస్వర్డ్ ధృవీకరణ',
      submit: 'సైన్ అప్',
      haveAccount: ' ఇప్పటికే ఖాతా కలవా?',
      loginLink: 'ఇక్కడ లాగిన్'
    },
    fileUpload: {
      heading: 'సమర్థనాత్మక పత్రాలు సమర్పించండి',
      fullName: 'పూర్తి పేరు',
      email: 'ఇమెయిల్',
      grievanceId: 'ఫిర్యాదు ID (ఐచ్ఛికం)',
      description: 'వివరణ',
      attachFiles: 'ఫైళ్లు జత చేయండి (చిత్రాలు / pdf) — గరిష్టం 6',
      note: 'అనుమతించబడింది: jpg, png, pdf — గరిష్టం 6 ఫైళ్ళు',
      submit: 'సబ్మిట్',
      cancel: 'రద్దు చేయి',
      submitting: 'అప్‌లోడింగ్...',
      success: 'సక్సెస్‌గా సమర్పించబడింది.'
    }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('lang') || 'en';
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('lang', lang);
    } catch {}
  }, [lang]);

  const t = translations[lang] || translations.en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
// ...existing code...

