---
title: "Jedno wejście, jedno żądanie – zrozumienie działania trackera"
description: "Jak działa tracker przy jednym wejściu? Zobacz, co naprawdę rejestruje."
pubDate: "2026-09-20"
author: "Magdalena Krzyżanowska"
authorBio: "Redaktorka i copywriterka. Pisze o zwięzłości, jasnym języku i komunikacji w pracy."
category: "Komunikacja"
tags: ["prywatność", "tracker", "cookies"]
readingTime: "5 min"
image: "https://images.unsplash.com/photo-1456327102063-fb5054efe647?auto=format&fit=crop&w=1400&h=900&q=80"
---

## Zrozumienie działania trackera

Wyobraź sobie, że wchodzisz na stronę internetową, a Twoje dane zaczynają krążyć w sieci. Każde kliknięcie, każda strona, którą odwiedzasz, generuje żądanie, które rejestruje twoją wizytę. W tym kontekście tracker odgrywa kluczową rolę. Przy jednym wejściu do strony przesyłane jest jedno żądanie HTTP, które może przybrać formę skryptu lub piksela 1x1 z innej domeny. 

W momencie, gdy strona ładuje się w przeglądarce, automatycznie dochodzi do dodania informacji, takich jak adres IP oraz user-agent. To właśnie na ich podstawie serwisy zbierają dane o użytkownikach. Ale to nie wszystko. W żądaniu przesyłane są również inne istotne informacje: adres artykułu, strona, z której użytkownik przyszedł, oraz nazwa zdarzenia, zazwyczaj oznaczona jako `page_view`, i identyfikator użytkownika. 

### Identyfikator użytkownika

Identyfikatory, takie jak `_ga` używany przez Google Analytics czy `_fbp` w przypadku piksela Meta, są istotnym elementem procesu. Te znaczniki nie są powiązane z nazwiskami użytkowników, lecz są unikalnymi identyfikatorami przeglądarki. , że czasami identyfikator może być przechowywany w localStorage, co sprawia, że lista ciasteczek pozostaje pusta, a numer identyfikacyjny jest przesyłany za pomocą parametrów.

Przykład zmyślonego adresu `collect.example.invalid/g/collect` ilustruje, jak te dane są przesyłane. Parametry takie jak `dl` (adres artykułu), `dr` (referrer), `en=page_view` oraz `cid` (identyfikator) stanowią zaledwie część tego, co wysyłane jest w żądaniu. 

### Działanie trackera w praktyce

Pierwsze wejście na stronę często wiąże się z założeniem numeru identyfikacyjnego. Gdy użytkownik odwiedza tę samą domenę po raz drugi, identyfikator `cid` pozostaje ten sam, ale URL się zmienia. To, co obserwujemy, to zlepianie ścieżki, które wynika z drugiego żądania, a nie z jednego piksela. W żądaniu nie ma miejsca na treść artykułu, hasła, pliki z dysku czy inne dane osobowe.

Należy pamiętać, że zamknięcie banera zgody na pliki cookie nie cofa wcześniejszego żądania. Często tracker działa, zanim użytkownik zdąży kliknąć "Akceptuję". Geolokalizacja oparta na IP jest jedynie szacunkowa i może prowadzić do błędów, ponieważ miasto może być niewłaściwie zidentyfikowane. 

### Kluczowe informacje o trackerach

Oto krótka lista informacji, które są przesyłane w typowym żądaniu trackera:

| Parametr      | Opis                                       |
|---------------|--------------------------------------------|
| `dl`          | Adres URL artykułu                         |
| `dr`          | Adres URL poprzedniej strony               |
| `en`          | Typ zdarzenia (np. `page_view`)           |
| `cid`         | Unikalny identyfikator przeglądarki       |

Sprawdzenie, co dzieje się w tle, można zrealizować poprzez otwarcie okna prywatnego oraz zakładki "Sieć" w narzędziach deweloperskich przeglądarki. Warto zwrócić uwagę na obce domeny oraz ścieżki takie jak `collect`, `pixel` lub `g/collect`, zanim zdecydujesz się na kliknięcie banera.

Na koniec, ważne jest zrozumienie, co widzi tracker przy `page_view`. Więcej informacji na ten temat znajdziesz w artykule [co widzi tracker przy page view](https://www.blackweb.pl/blog/co-tracker-wysyla-przy-jednym-wejscie).
