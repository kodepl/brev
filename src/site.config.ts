const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${Math.round(w * 0.56)}&q=80`;

const site = {
  name: "Brev",
  domain: "brev.pl",
  tagline: "Zwięzłość, jasna komunikacja i teksty bez nadmiaru słów",
  email: "redakcja@brev.pl",
  city: "Łódź",
  address: "ul. Piotrkowska 217, 90-456 Łódź",
  author: "Magdalena Krzyżanowska",
  authorBio: "Redaktorka i copywriterka. Skraca maile, raporty i prezentacje — zostawia sens, wycina watę.",
  authorRole: "Redaktorka naczelna",
  authorAvatar:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80",
  heroImage: u("photo-1455398962984-3177c1a9e7c6", 1600),
  aboutImage: u("photo-1486312338219-ce68d2c6f44d", 1200),
  covers: {
    Zwięzłość: u("photo-1455398962984-3177c1a9e7c6"),
    Komunikacja: u("photo-1557200134-90327ee9fafa"),
    Język: u("photo-1456324504439-367cee3b3c32"),
    Praca: u("photo-1497366216548-37526070297c"),
    default: u("photo-1486312338219-ce68d2c6f44d"),
  } as Record<string, string>,
  rubrics: [
    { name: "Zwięzłość", blurb: "Maile, tematy i teksty, które mieszczą się w jednym ekranie." },
    { name: "Komunikacja", blurb: "Pitch, feedback i rozmowy bez owijania w bawełnę." },
    { name: "Język", blurb: "Interpunkcja, słowa-wypełniacze i język prosty po polsku." },
    { name: "Praca", blurb: "Notatki ze spotkań, Slack i podsumowania dla zabieganych zespołów." },
  ],
};

export function rubricSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/ą/g, "a")
    .replace(/ć/g, "c")
    .replace(/ę/g, "e")
    .replace(/ł/g, "l")
    .replace(/ń/g, "n")
    .replace(/ó/g, "o")
    .replace(/ś/g, "s")
    .replace(/ź|ż/g, "z")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function coverFor(category?: string, image?: string) {
  if (image && !image.includes("source.unsplash.com")) return image;
  return site.covers[category || ""] || site.covers.default;
}

export default site;
