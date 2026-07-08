// data/legends.js
// Static dataset of notable chess figures for the "On This Day" feature.
// month is 1-indexed (1 = January) to match everyday date conventions.
// "role" is the one-line description shown on the card.
// Verify dates against a second source before shipping to production —
// most world champions are rock-solid public record; a few modern
// streamer birthdates are less consistently documented across sources.

export const legends = [
  // === World Champions & Historical Greats ===
  { name: "Wilhelm Steinitz", role: "1st World Chess Champion.", month: 5, day: 17, year: 1836 },
  { name: "Emanuel Lasker", role: "2nd World Chess Champion.", month: 12, day: 24, year: 1868 },
  { name: "Jose Raul Capablanca", role: "3rd World Chess Champion.", month: 11, day: 19, year: 1888 },
  { name: "Alexander Alekhine", role: "4th World Chess Champion.", month: 10, day: 31, year: 1892 },
  { name: "Max Euwe", role: "5th World Chess Champion.", month: 5, day: 20, year: 1901 },
  { name: "Mikhail Botvinnik", role: "6th World Chess Champion.", month: 8, day: 17, year: 1911 },
  { name: "Vasily Smyslov", role: "7th World Chess Champion.", month: 3, day: 24, year: 1921 },
  { name: "Mikhail Tal", role: "8th World Chess Champion. The Magician from Riga.", month: 11, day: 9, year: 1936 },
  { name: "Tigran Petrosian", role: "9th World Chess Champion.", month: 6, day: 17, year: 1929 },
  { name: "Boris Spassky", role: "10th World Chess Champion.", month: 1, day: 30, year: 1937 },
  { name: "Bobby Fischer", role: "11th World Chess Champion.", month: 3, day: 9, year: 1943 },
  { name: "Anatoly Karpov", role: "12th World Chess Champion. Master of positional play.", month: 5, day: 23, year: 1951 },
  { name: "Garry Kasparov", role: "13th World Chess Champion.", month: 4, day: 13, year: 1963 },
  { name: "Vladimir Kramnik", role: "14th World Chess Champion.", month: 6, day: 25, year: 1975 },
  { name: "Viswanathan Anand", role: "15th World Chess Champion.", month: 12, day: 11, year: 1969 },
  { name: "Magnus Carlsen", role: "16th World Chess Champion. Highest-rated player in history.", month: 11, day: 30, year: 1990 },

  // === Other Legendary Players ===
  { name: "Paul Morphy", role: "19th-century American chess prodigy.", month: 6, day: 22, year: 1837 },
  { name: "Mikhail Chigorin", role: "Father of the Russian chess school.", month: 11, day: 12, year: 1850 },
  { name: "Akiba Rubinstein", role: "One of the strongest players never to hold the world title.", month: 12, day: 1, year: 1880 },
  { name: "Aron Nimzowitsch", role: "Hypermodern theorist, author of My System.", month: 11, day: 7, year: 1886 },
  { name: "Savielly Tartakower", role: "Chess journalist and grandmaster.", month: 2, day: 21, year: 1887 },
  { name: "Richard Reti", role: "Hypermodern pioneer and endgame composer.", month: 5, day: 28, year: 1889 },
  { name: "Viktor Korchnoi", role: "Four-time World Championship challenger.", month: 3, day: 23, year: 1931 },
  { name: "Vera Menchik", role: "First Women's World Chess Champion.", month: 2, day: 16, year: 1906 },
  { name: "Nona Gaprindashvili", role: "First woman awarded the Grandmaster title.", month: 5, day: 3, year: 1941 },
  { name: "Judit Polgar", role: "Strongest female player in history.", month: 7, day: 23, year: 1976 },
  { name: "Susan Polgar", role: "First woman to earn the Grandmaster title through open competition.", month: 4, day: 19, year: 1969 },
  { name: "Sofia Polgar", role: "International Master, third of the Polgar sisters.", month: 11, day: 2, year: 1974 },
  { name: "Xie Jun", role: "Former Women's World Chess Champion.", month: 10, day: 30, year: 1970 },

  // === Modern Elite ===
  { name: "Fabiano Caruana", role: "2018 World Championship Challenger.", month: 7, day: 30, year: 1992 },
  { name: "Ding Liren", role: "17th World Chess Champion.", month: 10, day: 24, year: 1992 },
  { name: "Ian Nepomniachtchi", role: "Two-time World Championship Challenger.", month: 7, day: 14, year: 1990 },
  { name: "Wesley So", role: "Former World Fischer Random Champion.", month: 10, day: 9, year: 1993 },
  { name: "Levon Aronian", role: "Long-time top-5 elite grandmaster.", month: 10, day: 6, year: 1982 },
  { name: "Alireza Firouzja", role: "Youngest player ever to break 2800.", month: 6, day: 18, year: 2003 },
  { name: "Hikaru Nakamura", role: "Five-time US Chess Champion.", month: 12, day: 9, year: 1987 },
  { name: "Gukesh Dommaraju", role: "18th World Chess Champion, youngest ever.", month: 5, day: 29, year: 2006 },
  { name: "Praggnanandhaa R", role: "Youngest player to beat Magnus Carlsen at the time.", month: 8, day: 10, year: 2005 },
  { name: "Sergey Karjakin", role: "Youngest grandmaster in history at the time (12 years old).", month: 1, day: 12, year: 1990 },
  { name: "Veselin Topalov", role: "Former FIDE World Chess Champion.", month: 3, day: 15, year: 1975 },
  { name: "Peter Svidler", role: "Eight-time Russian Chess Champion.", month: 6, day: 17, year: 1976 },
  { name: "Maxime Vachier-Lagrave", role: "Long-time French no. 1 and elite blitz specialist.", month: 10, day: 21, year: 1990 },
  { name: "Shakhriyar Mamedyarov", role: "Former World no. 2 and Azerbaijan's top player.", month: 4, day: 12, year: 1985 },
  { name: "Teimour Radjabov", role: "Youngest player to beat a reigning World Champion (Kasparov) at the time.", month: 3, day: 12, year: 1987 },
  { name: "Hou Yifan", role: "Youngest ever Women's World Chess Champion.", month: 2, day: 27, year: 1994 },
  { name: "Wei Yi", role: "Youngest player in history to reach 2700.", month: 6, day: 2, year: 1999 },
  { name: "Jan-Krzysztof Duda", role: "Poland's top player and elite tactician.", month: 4, day: 26, year: 1998 },
  { name: "Richard Rapport", role: "Known for his unorthodox, creative opening choices.", month: 3, day: 25, year: 1996 },
  { name: "Alexandra Kosteniuk", role: "Former Women's World Chess Champion.", month: 4, day: 23, year: 1984 },
  { name: "Pia Cramling", role: "Long-reigning Swedish no. 1 and elite grandmaster.", month: 4, day: 23, year: 1963 },

  // === Streamers & Content Creators ===
  { name: "Levy Rozman", role: "GothamChess — The Internet's Chess Teacher.", month: 12, day: 5, year: 1995 },
  { name: "Anna Cramling", role: "Chess streamer and WFM, daughter of GM Pia Cramling.", month: 3, day: 3, year: 2002 },
  { name: "Alexandra Botez", role: "Co-founder of BotezLive.", month: 8, day: 8, year: 1998 },
  { name: "Andrea Botez", role: "Co-founder of BotezLive.", month: 11, day: 6, year: 2000 },
  { name: "Daniel Naroditsky", role: "Grandmaster, educator, and beloved speedrun streamer.", month: 11, day: 9, year: 1995 },
  { name: "Ben Finegold", role: "Grandmaster known for his sharp wit and teaching style.", month: 3, day: 3, year: 1969 },
];
