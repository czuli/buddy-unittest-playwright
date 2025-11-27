# Playwright Test Project

Prosty projekt do testowania Playwright z CI/CD.

## Opis

To jest minimalny projekt zawierający:
- Prostą stronę HTML z elementami do testowania
- Podstawowe style CSS
- JavaScript z interaktywnymi elementami
- Konfigurację Playwright
- Przykładowe testy

## Struktura projektu

```
├── index.html          # Główna strona
├── styles.css          # Style CSS
├── script.js           # JavaScript
├── package.json        # Zależności Node.js
├── playwright.config.js # Konfiguracja Playwright
├── tests/              # Katalog z testami
│   ├── basic.spec.js   # Podstawowe testy
│   ├── interactive.spec.js # Testy interaktywnych elementów
│   ├── recording.spec.js # Testy formularza nagrania
│   └── failing.spec.js # Testy które failują (do demonstracji)
└── README.md           # Ten plik
```

## Instalacja

1. Zainstaluj zależności:
```bash
npm install
```

2. Zainstaluj przeglądarki dla Playwright:
```bash
npm run install:browsers
```

## Uruchamianie

### Lokalny serwer
```bash
npm run serve
```
Strona będzie dostępna pod adresem: http://localhost:3000

### Testy
```bash
# Uruchom wszystkie testy
npm test

# Uruchom testy z interfejsem graficznym
npm run test:ui

# Uruchom testy w trybie debug
npm run test:debug

# Uruchom testy z widoczną przeglądarką
npm run test:headed

# Pokaż raport testów
npm run test:report
```

## Testy

Projekt zawiera następujące testy:

### Podstawowe testy (basic.spec.js)
- Ładowanie strony
- Działanie formularza
- Licznik kliknięć
- Przełączanie tekstu
- Nawigacja
- Alerty

### Testy interaktywne (interactive.spec.js)
- Klikalność przycisków
- Walidacja formularza
- Funkcje JavaScript
- Responsywność

### Testy formularza nagrania (recording.spec.js)
- Ładowanie formularza nagrania
- Walidacja pól nagrania
- Postęp nagrania
- Funkcje JavaScript dla nagrania

### Testy failujące (failing.spec.js)
- Testy które celowo failują
- Demonstracja obsługi błędów
- Różne typy niepowodzeń testów

## CI/CD

Projekt jest przygotowany do uruchamiania w CI/CD. Playwright automatycznie:
- Uruchomi lokalny serwer
- Wykona testy na różnych przeglądarkach
- Wygeneruje raport HTML

## Elementy testowe na stronie

- **Formularz podstawowy** - pola tekstowe, email, textarea
- **Formularz nagrania** - tytuł, czas trwania, jakość, format, opis, zgoda
- **Przyciski** - licznik kliknięć, przełączanie, alert
- **Nawigacja** - linki menu
- **Postęp nagrania** - pasek postępu, status
- **JavaScript** - funkcje testowe dostępne globalnie

## Przydatne komendy

```bash
# Sprawdź wersję Playwright
npx playwright --version

# Uruchom konkretny test
npx playwright test basic.spec.js

# Uruchom testy w konkretnej przeglądarce
npx playwright test --project=chromium

# Uruchom tylko testy podstawowe
npx playwright test basic.spec.js

# Uruchom tylko testy nagrania
npx playwright test recording.spec.js

# Uruchom testy failujące (do demonstracji)
npx playwright test failing.spec.js

# Uruchom wszystkie testy oprócz failujących
npx playwright test --grep-invert "failing"

# Wygeneruj kod testowy
npx playwright codegen localhost:3000
```
