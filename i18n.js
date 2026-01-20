let currentLang = "sv";

const translations = {
  title: {
    sv: "Golfbutik",
    en: "Golf Shop",
    fi: "Golfkauppa",
    no: "Golfbutikk",
    da: "Golfbutik"
  },
  buy: {
    sv: "Köp",
    en: "Buy",
    fi: "Osta",
    no: "Kjøp",
    da: "Køb"
  },
  swish: {
    sv: "Swisha och fyll i formuläret",
    en: "Pay with Swish and fill the form",
    fi: "Maksa Swishillä ja täytä lomake",
    no: "Betal med Swish og fyll ut skjema",
    da: "Betal med Swish og udfyld formularen"
  },
  stock: {
    sv: "I lager",
    en: "In stock",
    fi: "Varastossa",
    no: "På lager",
    da: "På lager"
  }
};

function t(key) {
  return translations[key][currentLang];
}
