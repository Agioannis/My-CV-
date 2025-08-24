const translations = {
  el: {
    name: "Ιωάννης Αγγελάκης",
    tagline: "Fullstack Developer (Φοιτητής)",
    email: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
    "about-title": "Σχετικά με εμένα",
    "about-text": "Είμαι φοιτητής Πληροφορικής και μελλοντικός Fullstack Developer, με πάθος για τον προγραμματισμό και την ανάπτυξη web εφαρμογών. Έχω εμπειρία σε ακαδημαϊκά projects και προσωπικά project μάθησης, χρησιμοποιώντας τεχνολογίες όπως JavaScript, React, Node.js, HTML/CSS και βάσεις δεδομένων. Αναζητώ την πρώτη μου επαγγελματική ευκαιρία για να εφαρμόσω τις γνώσεις μου και να εξελιχθώ ως προγραμματιστής.",
    "exp-title": "Εμπειρία",
    "exp-text": "Δεν έχω ακόμα επαγγελματική εμπειρία στον χώρο.",
    "exp-note": "Εργάζομαι όμως σε ακαδημαϊκά και προσωπικά project για να αναπτύξω πρακτικές δεξιότητες.",
    "edu-title": "Εκπαίδευση",
    "edu-degree": "Πτυχίο Πληροφορικής - Δημοκρίτειο Πανεπιστήμιο Θράκης",
    "edu-date": "2019 – σήμερα | Καβάλα",
    "edu-note": "(Αναμένεται ολοκλήρωση: 2026)",
    "skills-title": "Δεξιότητες",
    footer: "© 2025 Ioannis Angelakis. Όλα τα δικαιώματα διατηρούνται."
  },
  en: {
    name: "Ioannis Angelakis",
    tagline: "Fullstack Developer (Student)",
    email: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
    "about-title": "About Me",
    "about-text": "I am a Computer Science student and future Fullstack Developer, with a passion for programming and web application development. I have experience in academic projects and personal learning projects, using technologies such as JavaScript, React, Node.js, HTML/CSS and databases. I am looking for my first professional opportunity to apply my knowledge and develop as a developer.",
    "exp-title": "Experience",
    "exp-text": "I don’t yet have professional experience in the field.",
    "exp-note": "However, I work on academic and personal projects to build practical skills.",
    "edu-title": "Education",
    "edu-degree": "BSc in Computer Science - Democritus University of Thrace",
    "edu-date": "2019 – present | Kavala",
    "edu-note": "(Expected graduation: 2026)",
    "skills-title": "Skills",
    footer: "© 2025 Ioannis Angelakis. All rights reserved."
  }
};

let currentLang = "el";
const langBtn = document.getElementById("lang-toggle");

// Restore saved language or init
if (localStorage.getItem("lang")) {
  currentLang = localStorage.getItem("lang");
}
updateLanguage(currentLang);
langBtn.textContent = currentLang === "el" ? "EN 🇬🇧" : "GR 🇬🇷";

langBtn.addEventListener("click", () => {
  currentLang = currentLang === "el" ? "en" : "el";
  updateLanguage(currentLang);
  langBtn.textContent = currentLang === "el" ? "EN 🇬🇧" : "GR 🇬🇷";
  localStorage.setItem("lang", currentLang);
});

function updateLanguage(lang) {
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}
