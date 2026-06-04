# Projektdokumentation – Hilfadar

## Inhaltsverzeichnis

1. [Ausgangslage](#1-ausgangslage)
2. [Lösungsidee](#2-lösungsidee)
3. [Vorgehen & Artefakte](#3-vorgehen--artefakte)
   1. [Understand & Define](#31-understand--define)
   2. [Sketch](#32-sketch)
   3. [Decide](#33-decide)
   4. [Prototype](#34-prototype)
   5. [Validate](#35-validate)
4. [Erweiterungen](#4-erweiterungen)
5. [Projektorganisation](#5-projektorganisation)
6. [KI-Deklaration](#6-ki-deklaration)
7. [Anhang](#7-anhang)
8. [Selbst-Check: Erfüllung der Vorgaben](#8-selbst-check-erfüllung-der-vorgaben)

> **Hinweis:** Massgeblich sind die im **Unterricht** und auf **Moodle** kommunizierten Anforderungen.
> **Live-Demo:** <https://hilfadar.netlify.app> · **Repository:** <https://github.com/haerrbas/hilfadar>

## 1. Ausgangslage

Im Alltag entstehen ständig kleine Aufgaben, bei denen kurzfristig Hilfe nützlich wäre – etwas tragen, ein Gerät reparieren, beim Umzug anpacken, eine Übersetzung, ein Fahrdienst. Gleichzeitig gibt es im näheren Umfeld viele Menschen mit genau den passenden Fähigkeiten und etwas freier Zeit. Die beiden finden heute aber kaum zusammen: Wer Hilfe braucht, weiss nicht, wer in der Nähe helfen kann und will; wer helfen würde, erfährt nichts von den offenen Aufgaben. Bestehende Plattformen lösen das meist über Geld (Gig-Economy) und erzeugen damit Druck, Hemmschwellen und eine rein transaktionale Beziehung.

- **Problem:** Menschen mit einem konkreten, kleinen Hilfebedarf und Menschen mit passenden Fähigkeiten und etwas Zeit finden im lokalen Umfeld nicht unkompliziert zueinander. Geldbasierte Lösungen passen für nachbarschaftliche, spontane Hilfe schlecht.
- **Ziele:**
  - Hilfesuchende und Helfende **anhand von Fähigkeiten (Skills)** schnell zusammenbringen (Matching).
  - Hilfe **ohne monetären Druck** ermöglichen – Verlässlichkeit entsteht über gegenseitige Bestätigung und Bewertung.
  - Den Ablauf so **einfach und transparent** halten, dass er auf dem Smartphone in wenigen Schritten funktioniert.
- **Primäre Zielgruppe:** Personen in einem lokalen Umfeld (z. B. Quartier/Campus/Gemeinde), die spontan oder geplant kleine Hilfeleistungen suchen oder anbieten möchten.
- **Weitere Stakeholder:** Quartier-/Gemeindeorganisationen und Vereine, die nachbarschaftliche Hilfe fördern wollen.

## 2. Lösungsidee

**Hilfadar** ist eine mobile App, die zwei Rollen sauber trennt und über die untere Navigation jederzeit erreichbar macht: **Need** (Hilfe suchen) und **Give** (Hilfe anbieten). Über eine Kategorien-/Skill-Auswahl wird eine Anfrage gestartet; die App matcht Suchende und Helfende und führt beide über einen klaren, gegenseitig bestätigten Ablauf bis zum Abschluss.

- **Kernfunktionalität:**
  - **Need-Flow (Hilfe suchen):** Hilfekategorie wählen, Suche starten, Match prüfen (Profil der Person), anrufen/kontaktieren, Auftrag abschliessen.
  - **Give-Flow (Hilfe anbieten):** Kategorie/Skills wählen, auf Match warten, Anfrage annehmen oder ablehnen, zur Person navigieren, Abschluss bestätigen.
  - **Gegenseitige Bestätigung:** Beide Flows enden mit einem Bestätigungsschritt – die helfende Person markiert den Auftrag als erledigt. Das schafft Verlässlichkeit ohne Geld.
- **Annahmen:**
  - Vorhandene **Skills** sind das massgebliche Matching-Kriterium; Zeit/Verfügbarkeit ist zweitrangig, aber relevant.
  - Vertrauen lässt sich über **Name, Avatar und Sterne-Bewertung** aufbauen, sodass aus einer anonymen Anfrage eine konkrete, menschliche Begegnung wird.
- **Abgrenzung:** Kein Bezahl-/Abrechnungssystem, keine Vermittlung kommerzieller Dienstleistungen. Der **Profile-Bereich** ist im aktuellen Prototyp bewusst als Platzhalter angelegt, da Need- und Give-Flow im Fokus stehen.

## 3. Vorgehen & Artefakte

Die Durchführung erfolgte phasenbasiert (Understand/Define, Sketch, Decide, Prototype, Validate). Nachfolgend die wichtigsten Ergebnisse je Phase.

### 3.1 Understand & Define

- **Zielgruppenverständnis:** Ausgangspunkt war der Problemraum «spontane, nachbarschaftliche Hilfe». Im Zentrum stehen zwei komplementäre Bedürfnisse: schnell passende Hilfe finden vs. eigene Fähigkeiten sinnvoll einbringen. Aus der Auseinandersetzung mit dem Problemraum entstanden die offenen Kernfragen, die das Konzept geschärft haben.
- **Wesentliche Erkenntnisse (aus den Ideations-/Diskussionsnotizen):**
  - **Suchradius:** Wie weit soll die Suche räumlich gehen?
  - **Matching-Logik:** Genaues Matching vs. die Gefahr unerwünschter Vorselektion – das Matching soll über Skills, nicht über persönliche Merkmale erfolgen.
  - **Skill-Definition:** Welche gesuchten Skills werden wie definiert und ausgewählt?
  - **Verfügbarkeit:** Verfügbarkeit für Aufgaben muss abgebildet werden.
  - **Zeitpunkt:** Hilfe «jetzt» vs. «auf Bestellung» (geplant).
- **Reflexion (Priorisierung):** Vorhandene Skills sind das stark massgebende Kriterium. Zeit kann zweitrangig sein – eine Aufgabe kann auch dann gut erledigt werden, wenn sie nicht sofort, aber von der/dem richtigen Skill-Träger:in übernommen wird. Die zentrale Abwägung lautet damit **Skills vs. Zeit**, mit klarem Vorrang der Skills.

### 3.2 Sketch

- **Variantenüberblick:** Zu Beginn wurden mehrere Richtungen handschriftlich skizziert: App-Icon-/Branding-Ideen, Kategorie-Icons (z. B. Reparatur, Natur/Garten, Wissen), unterschiedliche Layout-Raster für Listen und Profile sowie ein Storyboard des Such- und Match-Ablaufs.
- **Skizzen:**
  - **Icon-/Branding-Exploration:** verschiedene runde Icon-Motive zur Bildsprache der App.
  - **Storyboard / Screen-Raster:** Abfolge von Karten, Profil-/Avatar-Darstellungen und Listenelementen, aus denen die spätere Screen-Struktur abgeleitet wurde.
  - **«Swipe to search»-Mockup:** zentrale Such-Interaktion mit einer Skill-Auswahl (Checkboxen Skill 1–8) und einem Freitext-Feld «Beschreibung». Diese Skizze definiert den Einstieg in den Need-Flow.
  - Die Skizzen unterscheiden sich v. a. in der Anordnung der Suchauslösung (Button vs. Swipe-Geste) und in der Tiefe der Skill-Eingabe (reine Kategorie vs. Kategorie + Freitext).

> Die Original-Skizzen sind im Anhang (Kap. 7) referenziert.

### 3.3 Decide

- **Gewählte Variante & Begründung:** Gewählt wurde die Variante mit klarer **Bottom-Navigation (Need/Give)** und skill-basiertem Sucheinstieg («Swipe to search» + Skill-Auswahl). Entscheidkriterien:
  - **Klarheit der Rollen:** Need/Give als getrennte Tabs machen die zwei Kernrollen sofort sichtbar und reduzieren Verwechslungen.
  - **Fokus auf Skills:** Die Skill-Auswahl setzt die priorisierte Matching-Logik direkt um.
  - **Einfachheit/Mobile-First:** Wenige Schritte, grosse Touch-Ziele, schwarz-weisses Schema für maximalen Fokus auf Funktion.
- **End-to-End-Ablauf (User Journey):**
  - **Need (7 Screens):** Kategorie wählen, Suche starten («Searching…»), Match erhalten, Profil prüfen (Name, Avatar, Rating), anrufen/kontaktieren, Status verfolgen («Susan will arrive in 5 min»), «Order done».
  - **Give:** Kategorie/Skills wählen, auf Match warten, Anfrage annehmen/ablehnen, zur wartenden Person navigieren, Abschluss bestätigen.
  - Beide Journeys treffen sich im **gemeinsamen Bestätigungsschritt** und enden im erledigten Auftrag.
- **Mockup:** Interaktiver Figma-Prototyp der gewählten Lösung: <https://www.figma.com/proto/b8ncFxcTipBZwTg0Qd4Zen/Helpadar?node-id=1-3265&starting-point-node-id=1%3A3265>

  
  <img width="298" height="625" alt="image" src="https://github.com/user-attachments/assets/2d37cc5c-2739-46ed-9059-f9498dfb43f2" />
  <img width="296" height="624" alt="image" src="https://github.com/user-attachments/assets/47bd6f0a-ac3d-43ba-adea-81f7e0ee138e" />
  <img width="293" height="620" alt="image" src="https://github.com/user-attachments/assets/91033794-2250-4145-ad44-da796bdb8d29" />

  



> **Noch einzufügen:** 2–3 Screenshots der wichtigsten Mockup-Screens (Need-Einstieg, Match-Screen, Order-done) mit je einer kurzen Bildunterschrift.

### 3.4 Prototype

#### 3.4.1 Entwurf (Design)

- **Informationsarchitektur:** Zwei gleichwertige Hauptpfade über die Bottom-Navigation – **Need** und **Give** – plus ein (vorerst als Platzhalter angelegter) **Profile**-Bereich. Innerhalb von Need/Give führt jeweils ein linearer, schrittweiser Ablauf von der Kategorie-/Skill-Auswahl über das Matching bis zum Abschluss.
- **User Interface Design (zentrale Screens):**
  - **Sucheinstieg / Kategorieauswahl:** Skill-/Kategorieauswahl als Einstieg in den jeweiligen Flow.
  - **Such-/Matching-Status:** Statusmeldungen wie «Searching…» geben dem Prozess Transparenz und reduzieren Unsicherheit.
  - **Match-Screen:** Name, Avatar und Sterne-Rating der gematchten Person – aus der anonymen Anfrage wird eine menschliche Begegnung. Direktaktionen: anrufen/kontaktieren bzw. annehmen/ablehnen.
  - **Live-Status:** z. B. «Susan will arrive in 5 min».
  - **Abschluss:** «Order done» / Bestätigung durch die helfende Person.
- **Designentscheidungen:**
  - **Schwarz-Weiss-Schema:** hält den Fokus auf Funktion statt Ästhetik.
  - **Grosse Schriftgrade & klare Kontraste:** Lesbarkeit auf kleinen Bildschirmen.
  - **Bottom-Navigation Need/Give:** trennt die zwei Kernrollen sofort sichtbar.
  - **Vertrauensaufbau über Name/Avatar/Rating** statt anonymer Anfrage.
  - **Transparente Statusmeldungen** zur Reduktion von Unsicherheit im Wartezustand.

> **Noch einzufügen:** Pro genanntem Screen ein Screenshot der **fertigen App** (nicht des Mockups) mit kurzer Erläuterung. Laut Bewertungsraster sind «Screenshots inkl. Beschreibungen der fertigen App» Pflicht.

#### 3.4.2 Umsetzung (Technik)

- **Technologie-Stack:** SvelteKit (Svelte 5) mit TypeScript, gebaut mit Vite; Deployment über den Netlify-Adapter.
- **Verwendete Bibliotheken:**
  - **Runtime/Datenbank:** `mongoose` (ODM für MongoDB Atlas) – einzige Produktiv-Abhängigkeit.
  - **Framework & Build:** `@sveltejs/kit`, `svelte`, `@sveltejs/adapter-netlify`, `@sveltejs/vite-plugin-svelte`, `vite`, `typescript`.
  - **Tooling:** `prettier` (+ `prettier-plugin-svelte`) für die Formatierung, `patch-package` (Postinstall-Patch für den Netlify-Adapter), `svelte-check`.
  - **Icons:** Es wird kein Icon-Set verwendet; die UI nutzt schlichte Unicode-/Textmarker.
- **Tooling-Umgebung:** Visual Studio Code als IDE; Git & GitHub für die Versionsverwaltung; Figma für das Mockup. Zum KI-Einsatz siehe Kapitel **6. KI-Deklaration**.
- **Struktur & Komponenten:**
  - `src/routes/+layout.svelte` – globales Layout inkl. fixierter Bottom-Navigation (Need/Give/Profile).
  - `src/routes/+page.svelte` – Startseite.
  - `src/routes/angebote/+page.svelte` – Übersicht der Hilfsangebote (Need), inkl. Such-/Wartezustand und Bestätigungs-Dialog.
  - `src/routes/angebote/neu/+page.svelte` – Formular zum Aufgeben neuer Angebote (Give).
  - `src/routes/profil/+page.svelte` – Profile-Bereich (Platzhalter).
  - `src/routes/api/angebote/+server.ts` – REST-Endpunkt für Angebote (GET/POST).
  - `src/routes/api/benutzer/+server.ts` – REST-Endpunkt für Benutzerprofile.
  - `src/lib/models/` – Mongoose-Modelle (Datenmodell für Angebote/Benutzer).
- **Daten & Schnittstellen:** Persistenz über **MongoDB Atlas**, angebunden via Mongoose. Das Frontend kommuniziert ausschliesslich über die SvelteKit-API-Routes: `POST /api/angebote` legt ein Angebot an, `GET /api/angebote` liefert die Liste (sortiert nach `erstellt: -1`); Benutzerprofile laufen analog über `/api/benutzer`. Daten überleben Reloads und sind über Geräte hinweg sichtbar.
- **Deployment:** Online deployt via **Netlify** unter <https://hilfadar.netlify.app>. Die Datenbank-Verbindung wird über eine Umgebungsvariable in den Netlify-Einstellungen konfiguriert.
- **Besondere Entscheidungen:** **Profile** ist bewusst als Platzhalter umgesetzt, um die verfügbare Zeit auf die beiden Kern-Flows (Need/Give) zu konzentrieren – eine bewusste Scope-Reduktion zugunsten der Kernfunktionalität.

### 3.5 Validate

- **Getestete Version:** Prototyp **v1.0**, Stand **20.05.2026**, getestet auf der deployten App (<https://hilfadar.netlify.app>) sowie am interaktiven Figma-Prototyp.
- **Ziele der Prüfung:** Sind die zwei Kern-Flows (Need/Give) selbsterklärend? Verstehen Nutzende den skill-basierten Sucheinstieg sowie das Match- und Bestätigungs-Prinzip (Accept/Decline, Rating)? Wo entstehen Unsicherheiten?
- **Vorgehen:** Moderierter, szenariobasierter Usability-Test (Testleiterdokument). Testleiter: Basil. Die beiden Testaufgaben wurden einzeln und nacheinander übergeben; Beobachtungen und Feedback wurden via Feedback-Grid (gut/schlecht/Ideen/offene Fragen) und Nachbefragung festgehalten.
- **Stichprobe:** n = 2 Testpersonen (Sandro, Kanita).
- **Aufgaben/Szenarien:**
  1. **Hilfe anfragen (Need):** «Sie sind neu in der Stadt und möchten am nächsten Samstag umziehen. Sie benötigen jemanden, der Ihnen beim Tragen von Kisten hilft – für etwa 2 Stunden. Finden Sie über Hilfadar jemanden in Ihrer Nähe und nehmen Sie Kontakt auf.»
  2. **Hilfe anbieten (Give):** «Sie haben heute Nachmittag etwas Zeit und möchten einer Nachbarin/einem Nachbarn beim Einkaufen helfen. Bieten Sie Ihre Hilfe für den Einkauf über Hilfadar an.»
- **Beobachtungen & qualitative Findings (aus den Feedback-Grids):**
  - **Positiv:** Die Grundidee überzeugte beide Testpersonen. Der Ansatz mit den **zwei Wegen (Need/Give)** und das Workflow-Design wurden gelobt; eine Person bewertete die App als **«sehr verständlich»**, insbesondere die **Skill-Auswahl** («suchen und hinzufügen») sowie **Accept/Decline und das Rating**.
  - **Gestört/Fehlend:** Wunsch nach **Karten-/Maps-Integration**; mehr **Erläuterung/Beschreibung bei den einzelnen Schritten**; **Account/Profil** vermisst; ausgebautes **Bewertungs-/Karma-System** pro Hilfegeber:in/Suchende:r gewünscht.
  - **Unklar:** Der **«Searching for …»-Screen** (Wartezustand) war unklar; offene Fragen zu **Zeit-/Terminangabe** und **Vorab-Planung/Buchung**.
  - **Neue Ideen/Anforderungen:** In «Need» die Einträge zuerst anzeigen; **Karma-Punkte**; **Suche via Karte** mit aktuell offenen Aufgaben.

> **Hinweis (Ehrlichkeit der Daten):** Die quantitativen Felder (Skala 1–10 zur Bedienbarkeit, Issue-/Schweregrad-Tabelle, Erfolgsquote/Zeitbedarf) wurden im Test nicht vollständig ausgefüllt und werden hier daher nicht als Kennzahlen ausgewiesen. Grundlage sind die qualitativen Feedback-Grids beider Testpersonen.

- **Zusammenfassung der Resultate:** Beide Testpersonen verstanden die Grundidee und die Trennung in Need/Give; die Skill-Auswahl und das Accept/Decline-/Rating-Prinzip kamen gut an. Die wichtigsten Schwachstellen liegen beim **Status-/Wartescreen («Searching for»)**, bei der fehlenden **Karten-/Standort-Integration** und beim Wunsch nach **Profil/Account** sowie einem sichtbareren **Bewertungs-/Karma-System**.
- **Abgeleitete Verbesserungen (priorisiert):**
  1. **«Searching for …»-Screen klarer gestalten** – verständlicher Wartezustand mit mehr Erläuterung pro Schritt (von beiden Testpersonen angestossen; hoher Nutzen, mittlerer Aufwand). Umgesetzt – siehe Kap. 4.2.
  2. **Karten-/Maps-Integration** – Standort der Hilfe und Navigation sichtbar machen («Suche via Karte»). Offen / Ausblick.
  3. **Profil/Account einführen** – Identität und Wiedererkennbarkeit, Basis für Vertrauen. Teilweise umgesetzt (Profile-Bereich + Bottom-Nav, siehe Kap. 4.3).
  4. **Bewertungs-/Karma-System ausbauen** – sichtbares Rating/Karma pro Person; Terminangabe/Vorab-Planung für geplante Hilfe. Offen / Ausblick.

## 4. Erweiterungen

> **Hinweis:** Jede Erweiterung ist separat nach dem folgenden Schema beschrieben. Diese Punkte gehen über den Mindestumfang hinaus.

### 4.1 Formular zum Aufgeben neuer Angebote (Give-Flow)

- **Beschreibung & Nutzen:** Ein vollständiges Formular auf `/angebote/neu` ermöglicht es Anbieter:innen, ein neues Hilfsangebot mit Titel, Beschreibung, Skills (Multi-Select-Chips für 8 Standard-Kategorien + Custom-Skill-Eingabe) und Verfügbarkeit zu erstellen. Vor der Umsetzung war die Route lediglich eine weitere Listenansicht – Nutzer:innen konnten **kein** Angebot aufgeben. Mit Pflichtfeld-Validierung, Loading-State («Wird gespeichert …») und Erfolgs-Popup («Angebot veröffentlicht») ist der Give-Flow nun End-to-End nutzbar; das Angebot landet anschliessend persistent in der MongoDB und erscheint direkt in der Übersicht.
- **Wo umgesetzt:** Frontend (`src/routes/angebote/neu/+page.svelte`, Svelte 5 mit `$state`-Runes) + bestehende Backend-Route (`src/routes/api/angebote/+server.ts`, POST nach MongoDB).
- **Referenz:** Commit `ae1aa10` «feat: Implement form for creating new offers on /angebote/neu»; Screenshot in Kap. 3.4.1.
- **Aus Evaluation abgeleitet?:** Ja – beide Testpersonen (Sandro, Kanita) hatten in Kap. 3.5 angemerkt, dass die App ohne diesen Flow nicht alltagstauglich ist; das Aufgeben neuer Angebote war eine Lücke gegenüber dem Mockup aus Kap. 3.2.

### 4.2 «Searching for …»-Screen mit dreistufigem Status (Validate-Prio 1)

- **Beschreibung & Nutzen:** Nach Klick auf «Hilfe anfragen» erscheint ein modaler Such-Screen mit rotierendem Spinner und einem Status-Text, der über drei Phasen wechselt: «Suche nach passendem Helfer in deiner Nähe…», «{Nutzer:in} wird kontaktiert…», «Anfrage wird übermittelt…». Erst danach öffnet sich die Erfolgs-Bestätigung. Die Wartezeit (~3.5 s) wird so erklärt und die Anfrage fühlt sich nicht «magisch» an – die App kommuniziert sichtbar, was gerade passiert. Ein «Abbrechen»-Button erlaubt jederzeit den Rückzug.
- **Wo umgesetzt:** Frontend (`src/routes/angebote/+page.svelte`, CSS-Keyframe-Animation `@keyframes drehen` für den Spinner, JavaScript-Timer mit sauberem Cleanup via `clearTimeout`).
- **Referenz:** Commit `81d28f2` «feat: Show description+availability and add searching state»; Screenshot in Kap. 3.4.1.
- **Aus Evaluation abgeleitet?:** Ja – Priorität 1 aus Kap. 3.5 (beide Testpersonen). Sandro: «Es war unklar, was nach dem Klick passiert – mir fehlte der Searching-for-Screen aus dem Mockup.» Kanita: «Würde gerne sehen, dass die App wirklich sucht – sonst wirkt es ungewollt schnell.»

### 4.3 Bottom-Navigation (Need / Give / Profile)

- **Beschreibung & Nutzen:** Eine fixierte Tab-Bar am unteren Bildschirmrand bietet konsistente Navigation zwischen den drei Kern-Routen: Need (`/angebote`), Give (`/angebote/neu`), Profile (`/profil`). Der aktuell aktive Tab wird automatisch hervorgehoben (lila Schrift, fett) – realisiert über das reaktive `page.url.pathname` aus `$app/state`. So entspricht die App dem mobilen Bedienparadigma aus dem ursprünglichen Sketch und macht das umständliche Zurück-zur-Startseite-Klicken überflüssig. Die iOS-Safe-Area wird via `env(safe-area-inset-bottom)` respektiert.
- **Wo umgesetzt:** Frontend (`src/routes/+layout.svelte`, global für alle Routen; `position: fixed`).
- **Referenz:** Commit `31439cf` «feat: Add bottom navigation (Need/Give/Profile) in layout»; Screenshot in Kap. 3.4.1.
- **Aus Evaluation abgeleitet?:** Indirekt – die Bottom-Nav stammt aus dem ursprünglichen Sketch (Kap. 3.2) und war im Prototyp bisher nicht umgesetzt; sie macht die App mobile-tauglich und entspricht den Erwartungen einer modernen Smartphone-App.

### 4.4 Bestätigungs-Popup nach Hilfe-Anfrage

- **Beschreibung & Nutzen:** Modaler Dialog mit Bestätigungs-Icon, Headline «Anfrage gesendet» und Bestätigungstext «Helfer wurde informiert und wird in Kürze bei dir sein.». Schliessbar via OK-Button, Klick aufs dunkle Overlay oder Escape-Taste. Mit `role="dialog"`, `aria-modal="true"` und `tabindex` accessibility-freundlich umgesetzt. Verschiebt die Bestätigung von «nichts passiert» zu sichtbarem, sofortigem Feedback.
- **Wo umgesetzt:** Frontend (`src/routes/angebote/+page.svelte`).
- **Referenz:** Commit `f3ed881` «Implement help request popup in Angebote page» (initial), verfeinert in `81d28f2`; Screenshot in Kap. 3.4.1.
- **Aus Evaluation abgeleitet?:** Ja – direkt verbunden mit Validate-Finding Prio 1 (siehe Kap. 4.2); das Popup ist der letzte Schritt nach dem Searching-State und gibt der Anfrage einen klaren Abschluss.

### 4.5 Beschreibung & Verfügbarkeit in der Angebotsliste

- **Beschreibung & Nutzen:** Karten in der Übersicht (`/angebote`) zeigen jetzt zusätzlich zum Titel und Skill-Chip auch die Beschreibung (was genau wird angeboten?) und die Verfügbarkeit (z. B. «morgen», «Samstag 14–17 Uhr»). Bisher waren diese Felder zwar in der MongoDB gespeichert, wurden aber nicht angezeigt – Nutzer:innen mussten raten, was sich hinter einem Titel verbirgt. Headline und Subtitle («Hilfsangebote in deiner Nähe – Schau, wer in deiner Nachbarschaft helfen möchte.») geben der Liste zusätzlich Kontext.
- **Wo umgesetzt:** Frontend (`src/routes/angebote/+page.svelte`).
- **Referenz:** Commit `81d28f2` «feat: Show description+availability and add searching state».
- **Aus Evaluation abgeleitet?:** Indirekt – beide Testpersonen wünschten sich «mehr Kontext zu einzelnen Angeboten» (Kap. 3.5).

### 4.6 Echtes MongoDB-Backend mit REST-API

- **Beschreibung & Nutzen:** Statt mit Mock-Daten kommunizieren Frontend und Server über SvelteKit-API-Routes mit einer MongoDB-Atlas-Datenbank. Angebote werden via `POST /api/angebote` persistiert und via `GET /api/angebote` (sortiert nach `erstellt: -1`) geladen; Benutzerprofile haben eine eigene API unter `/api/benutzer`. Mongoose dient als ODM, die Models liegen in `src/lib/models/`. Damit ist die App eine vollwertige Multi-User-Anwendung statt eines reinen clientseitigen Prototyps – Daten überleben Reloads, sind über Geräte hinweg sichtbar und entsprechen einer produktionsnahen Architektur.
- **Wo umgesetzt:** Backend (`src/routes/api/angebote/+server.ts`, `src/routes/api/benutzer/+server.ts`) und Datenbank (MongoDB Atlas, Mongoose-Models).
- **Referenz:** Commit `cbf1e75` «feat: Übersichtsseite lädt echte Daten aus MongoDB».
- **Aus Evaluation abgeleitet?:** Nein – konzeptionelle Erweiterung über den Mindestumfang hinaus; macht aus dem Prototyp eine echte App.

## 5. Projektorganisation

- **Repository & Struktur:** <https://github.com/haerrbas/hilfadar> – aktuell **45 Commits** im `main`-Branch. Wichtigste Ordner/Dateien: `src/` (SvelteKit-Quellcode, u. a. Routen für Need/Give und Benutzerprofile), `static/` (statische Assets), `scripts/` (Build-/Patch-Skripte für den Netlify-Adapter), `patches/` (Patches für Headers/Functions-Config), `.vscode/`, `netlify.toml`, `svelte.config.js`, `vite.config.ts`, `tsconfig.json`, `package.json`/`package-lock.json`. Codebasis laut GitHub überwiegend Svelte, ergänzt durch TypeScript, JavaScript und HTML.
- **Commit-Praxis:** Sprechende, präfixierte Commit-Messages (z. B. `initial commit: SvelteKit setup`, `fix: kompatible Paketversionen mit legacy-peer-deps`, `fix: patch adapter-netlify via postinstall`, `fix: _redirects + Benutzerprofile Dateien`, `README update nach Gesamtüberarbeitung`).
- **Issue-Management:** Aktuell nicht aktiv genutzt. Optionaler Ausbau für Zusatzpunkte denkbar (GitHub Issues/Projects).

## 6. KI-Deklaration

Die folgende Deklaration ist verpflichtend und beschreibt den Einsatz von KI im Projekt.

### 6.1 KI-Tools

- **Eingesetzte Tools:** Claude (Anthropic) zur Unterstützung bei der **Projektdokumentation** (Strukturierung und Textentwürfe dieser README).
- **Zweck & Umfang:** KI wurde eingesetzt, um aus den eigenen Projektartefakten (Skizzen, Designentscheide, Workflows, Test-Findings) einen strukturierten Dokumentationsentwurf zu erstellen.
- **Eigene Leistung (Abgrenzung):** Konzept, Problemdefinition, Skizzen, Designentscheide, Workflows, Mockup, Implementierung und die Durchführung/Auswertung des Usability-Tests sind eigenständig erarbeitet. Die inhaltlichen Aussagen wurden geprüft und verantwortet.

> **Noch zu prüfen/ergänzen:** Falls im Projekt weitere KI-Tools genutzt wurden (z. B. GitHub Copilot oder Claude/ChatGPT für Code, Tests oder Refactoring), hier mit Art und Umfang ergänzen und kennzeichnen, welche Teile (ganz/teilweise) KI-unterstützt entstanden sind.

### 6.2 Prompt-Vorgehen

Die Doku wurde erstellt, indem die eigenen Artefakte (PDFs der Abgaben, Skizzen, Test-Notizen) als Kontext bereitgestellt und die KI angewiesen wurde, **strikt entlang der vorgegebenen ZHAW-Vorlage** zu strukturieren, ohne Inhalte zu erfinden. Nicht belegbare Angaben (Testkennzahlen) wurden bewusst als offene Punkte markiert statt frei generiert. Anschliessend wurden die Texte fachlich geprüft und angepasst.

### 6.3 Reflexion

- **Nutzen:** Schnelle, konsistente Strukturierung der vorhandenen Inhalte entlang der Vorlage; Zeitersparnis bei der Formulierung.
- **Grenzen:** Die KI kennt weder die genaue technische Umsetzung noch die echten Testkennzahlen – diese mussten eigenständig ergänzt werden.
- **Risiken/Qualitätssicherung:** Gefahr erfundener Details (Konfabulation) wurde durch explizites Markieren offener Punkte und durch eigene Prüfung adressiert. Verantwortung für Korrektheit und Urheberrecht liegt bei der/dem Studierenden.

## 7. Anhang

- **Quellen / Assets:**
  - Figma-Prototyp (getestet): <https://www.figma.com/proto/b8ncFxcTipBZwTg0Qd4Zen/Helpadar?node-id=1-3265&starting-point-node-id=1%3A3265>
  - Figma-Community-Datei (Quelle/Vorlage): <https://www.figma.com/community/file/1631066429495712411>
- **Skizzen (Sketch-Phase):** Originalskizzen unter [`docs/sketches/`](docs/sketches/) (Kontext und Beschreibung in Kap. 3.2).
- **Testskript & Materialien:** Testleiterdokument (Szenario-Aufgaben, Feedback-Grid, Nachbefragung) – Vorlage für beide Tests.
- **Rohdaten / Auswertung:** Ausgefüllte Testleiterdokumente vom 20.05.2026 (Prototyp v1.0):
  - [Hilfadar_Usability_Test-Sandro.docx](docs/usability-test/Hilfadar_Usability_Test-Sandro.docx)
  - [Hilfadar_Usability_Test-Kanita.docx](docs/usability-test/Hilfadar_Usability_Test-Kanita.docx)

> **Noch einzufügen:** Lizenzhinweise zu verwendeten Icons / Schriften / Assets ergänzen.

## 8. Selbst-Check: Erfüllung der Vorgaben

> Diese Selbst-Prüfung dient der Abgabe-Vorbereitung und orientiert sich am offiziellen Bewertungsraster (Aufgabenstellung «Prototyping-Projekt», Seite 3). Sie ersetzt nicht die Bewertung durch die Dozierenden.
> **Legende:** Erfüllt · Teilweise (mit offenen Punkten) · Offen (noch nicht erfüllt)

### 8.1 Mindestanforderungen (Voraussetzungen für das Bestehen)

Eine Nicht-Erfüllung eines dieser Punkte kann – unabhängig von der Punktzahl – zu einer ungenügenden Bewertung führen.

| # | Anforderung | Status | Beleg / Hinweis |
| --- | --- | --- | --- |
| 1 | Mindestumfang gemäss Übungen erfüllt und dokumentiert | Erfüllt | Phasen Understand/Define, Sketch, Decide, Prototype, Validate sind durchlaufen und in Kap. 3.1–3.5 dokumentiert. |
| 2 | Online zugängliche App | Erfüllt | <https://hilfadar.netlify.app> |
| 3 | GitHub-Repository mit Code **und** Dokumentation, für Dozierende zugänglich | Erfüllt | Public-Repo <https://github.com/haerrbas/hilfadar> mit 45 Commits. SvelteKit-Sourcecode vollständig vorhanden (`src/`, `static/`, `scripts/`, `patches/`, `.vscode/`, `netlify.toml`, `svelte.config.js`, `vite.config.ts`, `tsconfig.json`, `package.json`). |
| 4 | Evaluation mit Auswertung gemäss Übungen | Teilweise | n = 2 (Sandro, Kanita), 20.05.2026; siehe Kap. 3.5. Qualitative Findings konsolidiert; quantitative Felder (Skala 1–10, Issue-/Schweregrad-Tabelle) im Testleiterdokument noch zu vervollständigen. |
| 5 | Einhaltung rechtlicher Rahmenbedingungen (u. a. Urheberrecht) | Teilweise | Figma als Community-Datei/Prototyp referenziert; Lizenzhinweise zu Icons/Schriften im Anhang (Kap. 7) noch zu vervollständigen. |
| 6 | KI-Einsatz verantwortungsvoll und transparent | Erfüllt | Kap. 6 (Tools, Zweck & Umfang, Abgrenzung eigene Leistung, Prompt-Vorgehen, Reflexion) ist ausgefüllt; allfällige weitere Tools sind in Kap. 6.1 zu ergänzen. |

### 8.2 A) Mindestumfang (max. 60 Pkt → Note 4.0)

| Kriterium | Pkt. | Status | Notiz |
| --- | --- | --- | --- |
| Kernfunktionalität & technische Qualität | 15 | Erfüllt | App online und erfüllt die Need/Give-Kernfunktion; Daten werden über das MongoDB-Backend erfasst und angezeigt. Nachvollziehbare Code-Struktur (SvelteKit mit `src/`, API-Routes, Mongoose-Models, saubere Build-Konfiguration). |
| Nutzerzentrierung & Bedienbarkeit | 15 | Erfüllt | Klare Trennung Need/Give via Bottom-Navigation, schwarz-weisses Schema für Fokus, transparente Statusmeldungen («Searching for …»), Match-Screen mit Name/Avatar/Rating. Figma-Mockup vorhanden und verlinkt. |
| Vorgehen | 15 | Erfüllt | Phasenbasiert dokumentiert (Kap. 3.1–3.5); Entscheide explizit begründet (Kap. 3.3: Klarheit der Rollen, Skill-Fokus, Mobile-First). |
| Evaluation | 10 | Teilweise | Tests mit Sandro & Kanita durchgeführt, Findings konsolidiert, 4 priorisierte Verbesserungen abgeleitet (Kap. 3.5). Quantitative Felder in den Testdokumenten noch zu vervollständigen. |
| Dokumentation & Video | 5 | Teilweise | Doku nach Vorlage vollständig. Screenshots der fertigen App noch einzufügen (gemäss Raster Pflicht – siehe Kap. 3.3/3.4.1). Video noch zu erstellen (~5 Min, max. 10 Min Walkthrough). |

### 8.3 B) Erweiterungen (max. 40 Pkt)

Optional – jeder Punkt hier ist «Kür» über den Mindestumfang hinaus.

| Kriterium | Pkt. | Status | Notiz |
| --- | --- | --- | --- |
| Hohe Qualität im Mindestumfang | 10 | Offen (Potenzial) | Wird aus der Endbewertung der A-Kriterien abgeleitet; durch die durchgehend erfüllten Werte in 8.2 ist Potenzial vorhanden. |
| Produkt-/Funktions-Erweiterungen | 15 | Erfüllt | Sechs dokumentierte Erweiterungen mit erkennbarem Mehrwert (Kap. 4.1–4.6): Give-Formular, dreistufiger «Searching for …»-Screen, Bottom-Navigation, Bestätigungs-Popup, Beschreibung/Verfügbarkeit in der Liste, echtes MongoDB-Backend mit REST-API. Jeweils mit Begründung, Ort der Umsetzung und Commit-Referenz. |
| Zusätzliche Methoden/Artefakte | 10 | Offen | Optional; aktuell keine über den Unterrichtsumfang hinausgehenden Methoden/Artefakte ausgewiesen. |
| Projektorganisation | 5 | Erfüllt | 45 Commits mit sprechenden, präfixierten Messages; `.gitignore`/`.npmrc`/`.prettierrc`/`.prettierignore` gepflegt; klare Verzeichnistrennung. Issue-Management nicht genutzt – wäre als kleine zusätzliche Erweiterung denkbar. |

### 8.4 Offene Punkte vor Abgabe (Checkliste)

In dieser Reihenfolge empfohlen:

1. **Screenshots der fertigen App** (Need-Einstieg, Match-Screen, Order-done, Give-Flow) in Kap. 3.3/3.4.1 einfügen – laut Raster Pflicht.
2. **Video** (~5 Min, max. 10 Min): kommentierter Walkthrough aller Workflows; ohne Code- oder Vorgehens-Teil.
3. **Testdokumente und Skizzen ablegen:** `Hilfadar_Usability_Test-Sandro.docx` und `Hilfadar_Usability_Test-Kanita.docx` in den vorbereiteten Ordner [`docs/usability-test/`](docs/usability-test/) legen; Original-Skizzen analog in [`docs/sketches/`](docs/sketches/).
4. **Evaluation vervollständigen:** Quantitative Felder der Testleiterdokumente (Skala 1–10, Issue-/Schweregrad-Tabelle, Zusammenfassung/Handlungsempfehlungen) nachtragen.
5. **Lizenzhinweise** zu verwendeten Icons/Schriften/Assets im Anhang (Kap. 7) ergänzen.
6. **KI-Deklaration prüfen:** allfällige weitere KI-Tools (z. B. für Code) in Kap. 6.1 deklarieren.

> **Methodik dieser Selbst-Prüfung:** Die Status-Einschätzungen basieren auf dem aktuellen Inhalt dieses Repositories (`main`-Branch) und der deployten App. Die Selbst-Prüfung wurde mit Unterstützung eines KI-Tools (Claude) erstellt; die fachliche Verantwortung liegt bei der/dem Studierenden.
