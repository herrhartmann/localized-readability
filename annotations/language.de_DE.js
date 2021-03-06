module.exports = {
  general: {
    module: "Lesbarkeit",
    score: "Punktzahl",
    interpretations: "Interpretationen",
    counts: "Häufigkeit",
    age: "Alter",
    grade: "Note",
    paragraphs: "Absätze",
    sentences: "Sätze",
    words: "Wörter",
    syllables: "Silben",
    polysillabicWords: "Mehrsilbige Wörter",
    letters: "Buchstaben",
    characters: "Schriftzeichen",
    longwords: "Lange Wörter",
    periods: "Zeiträume",
    punctuations: "Satzzeichen",
    whitespaces: "Leerzeichen"
  },
  modifier: {
    grade: {
      constant: 5,
      source: "https://en.wikipedia.org/wiki/Educational_stage#United_States"
    },
    syllable: {
      constant: 1,
      source: ""
    }
  },
  highlight: {
    "0": "Normal",
    "1": "Relativ schwierig",
    "2": "Schwierig",
    "3": "Sehr schwierig",
    "4": "Extrem schwierig"
  },
  stats: {
    consensus: {
      description: "Liegt im Durchschnitt über den Messungen."
    },
    automatedReadability: {
      title: "Automatisierter Lesbarkeitsindex",
      description:
        "Nähert sich dem deutschen Standard unter Verwendung der Anzahl von Sätzen, Wörtern und Buchstaben an."
    },
    flesch: {
      title: "Flesch Lesefreundlichkeit",
      description:
        "Misst die Komplexität von Texten anhand der durchschnittlichen Länge von Sätzen und Silben in Wörtern.",
      levels: {
        "0": "Sehr schwierig",
        "1": "Schwierig",
        "2": "Etwas schwieriger",
        "3": "Einfaches Deutsch.",
        "4": "Relativ einfach",
        "5": "Einfach",
        "6": "Sehr einfach"
      },
      descriptor: "zu lesen"
    },
    fleschKincaid: {
      title: "Flesch-Kincaid Notenstufe",
      description: "Übersetzt die Flesch-score in eine Deutsche Notenstufe."
    },
    colemanLiau: {
      title: "Coleman-Liau Notenstufe",
      description:
        "Nähert sich dem deutschen Standard unter Verwendung der durchschnittlichen Anzahl von Sätzen, Wörtern und Buchstaben."
    },
    smog: {
      title: "Einfache Messung of Gobbledygook",
      description:
        "Misst die Anzahl an Jahren erfahrener Bildung, die benötigt wird, um den Text zu verstehen, indem die Menge an Sätzen unter Verwendung der Anzahl von Sätzen und mehrsilbigen Wörtern untersucht wird."
    },
    lix: {
      title: "Lesbarkeitsindex",
      description:
        "Die Lesefreundlichkeit basiert auf der Gesamtzahl der Wörter, der Anzahl der Sätze und der Anzahl der langen Wörter (mehr als 6 Zeichen).",
      levels: {
        "0": "Sehr schwierigt",
        "1": "Schwierig",
        "2": "Durchschnittlich",
        "3": "Einfach",
        "4": "Sehr einfach"
      }
    },
    rix: {
      title: "Anderson's Lesbarkeitsindex",
      description:
        "Übersetzt LIX in die Klassenstufe, wobei die Anzahl der Sätze und langen Wörter verwendet wird."
    }
  }
};
