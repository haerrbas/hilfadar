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
4. [Erweiterungen [Optional]](#4-erweiterungen-optional)
5. [Projektorganisation [Optional]](#5-projektorganisation-optional)
6. [KI-Deklaration](#6-ki-deklaration)
7. [Anhang [Optional]](#7-anhang-optional)
8. [Selbst-Check: Erfüllung der Vorgaben](#8-selbst-check-erfüllung-der-vorgaben)

> **Hinweis:** Massgeblich sind die im **Unterricht** und auf **Moodle** kommunizierten Anforderungen.

> **Live-Demo:** https://hilfadar.netlify.app · **Repository:** https://github.com/haerrbas/hilfadar

## 1. Ausgangslage
Im Alltag entstehen ständig kleine Aufgaben, bei denen kurzfristig Hilfe nützlich wäre – etwas tragen, ein Gerät reparieren, beim Umzug anpacken, eine Übersetzung, ein Fahrdienst. Gleichzeitig gibt es im näheren Umfeld viele Menschen mit genau den passenden Fähigkeiten und etwas freier Zeit. Die beiden finden heute aber kaum zusammen: Wer Hilfe braucht, weiss nicht, wer in der Nähe helfen kann und will; wer helfen würde, erfährt nichts von den offenen Aufgaben. Bestehende Plattformen lösen das meist über Geld (Gig-Economy) und erzeugen damit Druck, Hemmschwellen und eine rein transaktionale Beziehung.

- **Problem:** Menschen mit einem konkreten, kleinen Hilfebedarf und Menschen mit passenden Fähigkeiten und etwas Zeit finden im lokalen Umfeld nicht unkompliziert zueinander. Geldbasierte Lösungen passen für nachbarschaftliche, spontane Hilfe schlecht.
- **Ziele:**
  - Hilfesuchende und Helfende **anhand von Fähigkeiten (Skills)** schnell zusammenbringen (Matching).
  - Hilfe **ohne monetären Druck** ermöglichen – Verlässlichkeit entsteht über gegenseitige Bestätigung und Bewertung.
  - Den Ablauf so **einfach und transparent** halten, dass er auf dem Smartphone in wenigen Schritten funktioniert.
- **Primäre Zielgruppe:** Personen in einem lokalen Umfeld (z. B. Quartier/Campus/Gemeinde), die spontan oder geplant kleine Hilfeleistungen suchen oder anbieten möchten.
- **Weitere Stakeholder [Optional]:** Quartier-/Gemeindeorganisationen und Vereine, die nachbarschaftliche Hilfe fördern wollen.

## 2. Lösungsidee
**Hilfadar** ist eine mobile App, die zwei Rollen sauber trennt und über die untere Navigation jederzeit erreichbar macht: **Need** (Hilfe suchen) und **Give** (Hilfe anbieten). Über eine Kategorien-/Skill-Auswahl wird eine Anfrage gestartet; die App matcht Suchende und Helfende und führt beide über einen klaren, gegenseitig bestätigten Ablauf bis zum Abschluss.

- **Kernfunktionalität:**
  - **Need-Flow (Hilfe suchen):** Hilfekategorie wählen → Suche starten → Match prüfen (Profil der Person) → anrufen/kontaktieren → Auftrag abschliessen.
  - **Give-Flow (Hilfe anbieten):** Kategorie/Skills wählen → auf Match warten → Anfrage annehmen oder ablehnen → zur Person navigieren → Abschluss bestätigen.
  - **Gegenseitige Bestätigung:** Beide Flows enden mit einem Bestätigungsschritt – die helfende Person markiert den Auftrag als erledigt. Das schafft Verlässlichkeit ohne Geld.
- **Annahmen [Optional]:**
  - Vorhandene **Skills** sind das massgebliche Matching-Kriterium; Zeit/Verfügbarkeit ist zweitrangig, aber relevant.
  - Vertrauen lässt sich über **Name, Avatar und Sterne-Bewertung** aufbauen, sodass aus einer anonymen Anfrage eine konkrete, menschliche Begegnung wird.
- **Abgrenzung [Optional]:** Kein Bezahl-/Abrechnungssystem, keine Vermittlung kommerzieller Dienstleistungen. Der **Settings-Bereich** ist im aktuellen Prototyp bewusst als Platzhalter angelegt, da Need- und Give-Flow im Fokus stehen.

## 3. Vorgehen & Artefakte
Die Durchführung erfolgte phasenbasiert (Understand/Define → Sketch → Decide → Prototype → Validate). Nachfolgend die wichtigsten Ergebnisse je Phase.

### 3.1 Understand & Define
- **Zielgruppenverständnis:** Ausgangspunkt war der Problemraum «spontane, nachbarschaftliche Hilfe». Im Zentrum stehen zwei komplementäre Bedürfnisse: schnell passende Hilfe finden vs. eigene Fähigkeiten sinnvoll einbringen. Aus der Auseinandersetzung mit dem Problemraum entstanden die offenen Kernfragen (siehe «Kommentare»), die das Konzept geschärft haben.
- **Wesentliche Erkenntnisse (aus den Ideations-/Diskussionsnotizen):**
  - **Suchradius:** Wie weit soll die Suche räumlich gehen?
  - **Matching-Logik:** Genaues Matching vs. die Gefahr von «Racial Profiling» / unerwünschter Vorselektion – das Matching soll über Skills, nicht über persönliche Merkmale erfolgen.
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

> Die Original-Skizzen liegen im Repository unter [`/docs/sketches`](docs/) bzw. sind im Anhang referenziert.

### 3.3 Decide
- **Gewählte Variante & Begründung:** Gewählt wurde die Variante mit klarer **Bottom-Navigation (Need/Give)** und skill-basiertem Sucheinstieg («Swipe to search» + Skill-Auswahl). Entscheidkriterien:
  - **Klarheit der Rollen:** Need/Give als getrennte Tabs machen die zwei Kernrollen sofort sichtbar und reduzieren Verwechslungen.
  - **Fokus auf Skills:** Die Skill-Auswahl setzt die priorisierte Matching-Logik direkt um.
  - **Einfachheit/Mobile-First:** Wenige Schritte, grosse Touch-Ziele, schwarz-weisses Schema für maximalen Fokus auf Funktion.
- **End-to-End-Ablauf (User Journey):**
  - **Need (7 Screens):** Kategorie wählen → Suche starten («Searching…») → Match erhalten → Profil prüfen (Name, Avatar, Rating) → anrufen/kontaktieren → Status verfolgen («Susan will arrive in 5 min») → «Order done».
  - **Give:** Kategorie/Skills wählen → auf Match warten → Anfrage annehmen/ablehnen → zur wartenden Person navigieren → Abschluss bestätigen.
  - Beide Journeys treffen sich im **gemeinsamen Bestätigungsschritt** und enden im erledigten Auftrag.
- **Mockup:** Figma-Referenz-Mockup der gewählten Lösung: https://www.figma.com/community/file/1631066429495712411
  > TODO: 2–3 Screenshots der wichtigsten Mockup-Screens (Need-Einstieg, Match-Screen, Order-done) mit je einer kurzen Bildunterschrift einfügen.

### 3.4 Prototype

#### 3.4.1. Entwurf (Design)
- **Informationsarchitektur:** Zwei gleichwertige Hauptpfade über die Bottom-Navigation – **Need** und **Give** – plus ein (vorerst als Platzhalter angelegter) **Settings**-Bereich. Innerhalb von Need/Give führt jeweils ein linearer, schrittweiser Ablauf von der Kategorie-/Skill-Auswahl über das Matching bis zum Abschluss.
- **User Interface Design (zentrale Screens):**
  - **Sucheinstieg / Kategorieauswahl:** Skill-/Kategorieauswahl als Einstieg in den jeweiligen Flow.
  - **Such-/Matching-Status:** Statusmeldungen wie «Searching…» geben dem Prozess Transparenz und reduzieren Unsicherheit.
  - **Match-Screen:** Name, Avatar und Sterne-Rating der gematchten Person – aus der anonymen Anfrage wird eine menschliche Begegnung. Direktaktionen: anrufen/kontaktieren bzw. annehmen/ablehnen.
  - **Live-Status:** z. B. «Susan will arrive in 5 min».
  - **Abschluss:** «Order done» / Bestätigung durch die helfende Person.
  > TODO: Pro genanntem Screen einen Screenshot der **fertigen App** (nicht des Mockups) mit kurzer Erläuterung einfügen. Laut Raster sind «Screenshots inkl. Beschreibungen der fertigen App» Pflicht.
- **Designentscheidungen:**
  - **Schwarz-Weiss-Schema:** hält den Fokus auf Funktion statt Ästhetik.
  - **Grosse Schriftgrade & klare Kontraste:** Lesbarkeit auf kleinen Bildschirmen.
  - **Bottom-Navigation Need/Give:** trennt die zwei Kernrollen sofort sichtbar.
  - **Vertrauensaufbau über Name/Avatar/Rating** statt anonymer Anfrage.
  - **Transparente Statusmeldungen** zur Reduktion von Unsicherheit im Wartezustand.

#### 3.4.2. Umsetzung (Technik)
- **Technologie-Stack:** SvelteKit (HTML / CSS / JavaScript bzw. TypeScript).
  > TODO: Verwendete Bibliotheken ergänzen, falls genutzt (z. B. Icon-Set, Styling-Helfer).
- **Tooling:** Visual Studio Code als IDE; Git & GitHub für die Versionsverwaltung; Figma für das Mockup. Den KI-Einsatz siehe Kapitel **6. KI-Deklaration**.
- **Struktur & Komponenten:**
  > TODO: Kurz die SvelteKit-Routen/Seiten und die wichtigsten Komponenten/Stores auflisten (z. B. `src/routes/need/...`, `src/routes/give/...`, Komponenten für Match-Karte, Status, Bottom-Nav). Bitte an deine tatsächliche Ordnerstruktur anpassen.
- **Daten & Schnittstellen:**
  > TODO: Beschreiben, wie Daten im Prototyp gehalten werden (z. B. clientseitiger State/Stores, statische Beispieldaten/Mock-Daten). Falls eine Persistenz/DB genutzt wird, hier nennen.
- **Deployment:** Online deployt via **Netlify** unter https://hilfadar.netlify.app
- **Besondere Entscheidungen:** **Settings** ist bewusst als Platzhalter umgesetzt, um die verfügbare Zeit auf die beiden Kern-Flows (Need/Give) zu konzentrieren – eine bewusste Scope-Reduktion zugunsten der Kernfunktionalität.

### 3.5 Validate
- **Getestete Version:** Prototyp **v1.0**, Stand **20.05.2026**, getestet auf der deployten App (https://hilfadar.netlify.app) sowie am interaktiven Figma-Prototyp. Der Test wurde bewusst auf der Version **per 20.05.2026** durchgeführt.
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
  > **Hinweis (Ehrlichkeit der Daten):** Die quantitativen Felder (Skala 1–10 zur Bedienbarkeit, Issue-/Schweregrad-Tabelle, Erfolgsquote/Zeitbedarf) wurden im Test nicht ausgefüllt und werden hier daher nicht als Kennzahlen ausgewiesen. Grundlage sind die qualitativen Feedback-Grids beider Testpersonen.
- **Zusammenfassung der Resultate:** Beide Testpersonen verstanden die Grundidee und die Trennung in Need/Give; die Skill-Auswahl und das Accept/Decline-/Rating-Prinzip kamen gut an. Die wichtigsten Schwachstellen liegen beim **Status-/Wartescreen («Searching for»)**, bei der fehlenden **Karten-/Standort-Integration** und beim Wunsch nach **Profil/Account** sowie einem sichtbareren **Bewertungs-/Karma-System**.
- **Abgeleitete Verbesserungen (priorisiert):**
  1. **«Searching for …»-Screen klarer gestalten** – verständlicher Wartezustand mit mehr Erläuterung pro Schritt (von beiden Testpersonen angestossen; hoher Nutzen, mittlerer Aufwand).
  2. **Karten-/Maps-Integration** – Standort der Hilfe und Navigation sichtbar machen («Suche via Karte»).
  3. **Profil/Account einführen** – Identität und Wiedererkennbarkeit, Basis für Vertrauen.
  4. **Bewertungs-/Karma-System ausbauen** – sichtbares Rating/Karma pro Person; Terminangabe/Vorab-Planung für geplante Hilfe.
  > Falls eine dieser Verbesserungen bereits im Prototyp umgesetzt wurde: in Kapitel 4 dokumentieren.

## 4. Erweiterungen [Optional]
> **Hinweis:** Jede Erweiterung ist separat nach dem folgenden Schema zu beschreiben.
> TODO: Nur ausfüllen, wenn du über den Mindestumfang hinausgegangen bist. Andernfalls dieses Kapitel leer lassen oder entfernen.

### _[4.x Kurzbeschreibung / Titel]_
- **Beschreibung & Nutzen:** _[…]_
- **Wo umgesetzt:** _[Frontend / Backend / Datenbank]_
- **Referenz:** _[Screenshot/Kapitel]_
- **Aus Evaluation abgeleitet?:** _[Ja/Nein – falls ja, welches Issue/Finding aus 3.5]_

## 5. Projektorganisation [Optional]
- **Repository & Struktur:** https://github.com/haerrbas/hilfadar
  > TODO: Kurze Strukturübersicht ergänzen (wichtigste Ordner/Dateien).
- **Issue-Management:**
  > TODO: Falls genutzt, kurz beschreiben (z. B. GitHub Issues/Projects).
- **Commit-Praxis:**
  > TODO: z. B. sprechende Commit-Messages.

## 6. KI-Deklaration
Die folgende Deklaration ist verpflichtend und beschreibt den Einsatz von KI im Projekt.

### 6.1 KI-Tools
- **Eingesetzte Tools:** Claude (Anthropic) zur Unterstützung bei der **Projektdokumentation** (Strukturierung und Textentwürfe dieser README).
  > TODO: Weitere im Projekt genutzte Tools ergänzen (z. B. GitHub Copilot / ChatGPT für Codevorschläge), inkl. Version/Variante, falls bekannt.
- **Zweck & Umfang:** KI wurde eingesetzt, um aus den eigenen Projektartefakten (Skizzen, Designentscheide, Workflows, Test-Findings) einen strukturierten Dokumentationsentwurf zu erstellen.
  > TODO: Falls KI auch für Code/Tests/Refactoring genutzt wurde, hier Art und Umfang ergänzen und kennzeichnen, welche Teile (ganz/teilweise) KI-unterstützt entstanden sind.
- **Eigene Leistung (Abgrenzung):** Konzept, Problemdefinition, Skizzen, Designentscheide, Workflows, Mockup, Implementierung und die Durchführung/Auswertung des Usability-Tests sind eigenständig erarbeitet. Die inhaltlichen Aussagen wurden geprüft und verantwortet.

### 6.2 Prompt-Vorgehen
Die Doku wurde erstellt, indem die eigenen Artefakte (PDFs der Abgaben, Skizzen, Test-Notizen) als Kontext bereitgestellt und die KI angewiesen wurde, **strikt entlang der vorgegebenen ZHAW-Vorlage** zu strukturieren, ohne Inhalte zu erfinden. Nicht belegbare Angaben (Testkennzahlen) wurden bewusst als offene Punkte markiert statt frei generiert. Anschliessend wurden die Texte fachlich geprüft und angepasst.
> TODO: Bei Bedarf 1–2 konkrete Beispiel-Prompts als Illustration ergänzen.

### 6.3 Reflexion
- **Nutzen:** Schnelle, konsistente Strukturierung der vorhandenen Inhalte entlang der Vorlage; Zeitersparnis bei der Formulierung.
- **Grenzen:** Die KI kennt weder die genaue technische Umsetzung noch die echten Testkennzahlen – diese müssen eigenständig ergänzt werden.
- **Risiken/Qualitätssicherung:** Gefahr erfundener Details (Konfabulation) wurde durch explizites Markieren offener Punkte und durch eigene Prüfung adressiert. Verantwortung für Korrektheit und Urheberrecht liegt bei der/dem Studierenden.

## 7. Anhang [Optional]
- **Quellen / Assets:**
  - Figma-Mockup (Community-Datei): https://www.figma.com/community/file/1631066429495712411
  > TODO: Verwendete Assets/Icons/Schriften inkl. Lizenz ergänzen.
- **Testskript & Materialien:** Testleiterdokument (Szenario-Aufgaben, Feedback-Grid, Nachbefragung) – Vorlage für beide Tests.
- **Rohdaten/Auswertung:** Ausgefüllte Testleiterdokumente vom 20.05.2026: `Hilfadar_Usability_Test-Sandro.docx` und `Hilfadar_Usability_Test-Kanita.docx` (Prototyp v1.0). Getesteter Figma-Prototyp: https://www.figma.com/proto/b8ncFxcTipBZwTg0Qd4Zen/Helpadar
  > TODO: Die beiden .docx (und ggf. die Ideations-Notizen «Kommentare & Reflexion») ins Repository legen, z. B. unter `/docs`, und hier verlinken.
## 8. Selbst-Check: Erfüllung der Vorgaben

> Diese Selbst-Prüfung dient der Abgabe-Vorbereitung und orientiert sich am offiziellen Bewertungsraster (Aufgabenstellung «Prototyping-Projekt», Seite 3). Sie ersetzt nicht die Bewertung durch die Dozierenden.
> **Legende:** ✅ erfüllt · ⚠️ teilweise / mit offenen Punkten · ❌ noch nicht erfüllt

### 8.1 Mindestanforderungen (Voraussetzungen für das Bestehen)
Eine Nicht-Erfüllung eines dieser Punkte kann – unabhängig von der Punktzahl – zu einer ungenügenden Bewertung führen.

| # | Anforderung | Status | Beleg / Hinweis |
| --- | --- | --- | --- |
| 1 | Mindestumfang gemäss Übungen erfüllt und dokumentiert | ✅ | Phasen Understand/Define → Sketch → Decide → Prototype → Validate sind durchlaufen und in Kap. 3.1–3.5 dokumentiert. |
| 2 | Online zugängliche App | ✅ | https://hilfadar.netlify.app |
| 3 | GitHub-Repository mit Code **und** Dokumentation, für Dozierende zugänglich | ⚠️ | Repo ist public (https://github.com/haerrbas/hilfadar2). README ist vorhanden; **der SvelteKit-Sourcecode muss vor Abgabe noch in dieses Repo gepusht werden** (siehe 8.4). |
| 4 | Evaluation mit Auswertung gemäss Übungen | ✅ | n = 2 (Sandro, Kanita), 20.05.2026; siehe Kap. 3.5. Quantitative Felder (Skala 1–10, Issue-/Schweregrad-Tabelle) wurden im Testleiterdokument nicht ausgefüllt; Grundlage sind die qualitativen Feedback-Grids. |
| 5 | Einhaltung rechtlicher Rahmenbedingungen (u. a. Urheberrecht) | ⚠️ | Figma-Mockup als Community-Datei lizenziert; **Lizenzhinweise zu Icons/Schriften im Anhang (Kap. 7) noch zu vervollständigen**. |
| 6 | KI-Einsatz verantwortungsvoll und transparent | ✅ | Kap. 6 (Tools, Zweck & Umfang, Abgrenzung eigene Leistung, Prompt-Vorgehen, Reflexion) ist ausgefüllt. |

### 8.2 A) Mindestumfang (max. 60 Pkt → Note 4.0)

| Kriterium | Pkt. | Status | Notiz |
| --- | --- | --- | --- |
| Kernfunktionalität & technische Qualität | 15 | ⚠️ | App ist online und erfüllt die Need/Give-Kernfunktion; **nachvollziehbare Code-Struktur** wird erst nach dem Code-Push (8.4) belegbar. |
| Nutzerzentrierung & Bedienbarkeit | 15 | ✅ | Klare Trennung Need/Give via Bottom-Navigation, schwarz-weisses Schema für Fokus, transparente Statusmeldungen («Searching for …»), Match-Screen mit Name/Avatar/Rating. Figma-Mockup vorhanden und verlinkt. |
| Vorgehen | 15 | ✅ | Phasenbasiert dokumentiert (Kap. 3.1–3.5); Entscheide explizit begründet (Kap. 3.3: Klarheit der Rollen, Skill-Fokus, Mobile-First). |
| Evaluation | 10 | ✅ | Tests mit Sandro & Kanita durchgeführt, Findings konsolidiert, **4 priorisierte Verbesserungen abgeleitet** (Kap. 3.5). Mit ehrlicher Deklaration der nicht ausgefüllten quantitativen Felder. |
| Dokumentation & Video | 5 | ⚠️ | Doku nach Vorlage vollständig. **Screenshots der fertigen App fehlen noch** (gemäss Raster Pflicht – siehe TODO-Marker in Kap. 3.4.1). **Video noch zu erstellen** (~5 Min, max. 10 Min Walkthrough). |

### 8.3 B) Erweiterungen (max. 40 Pkt)
Optional – jeder Punkt hier ist «Kür» über den Mindestumfang hinaus.

| Kriterium | Pkt. | Status | Notiz |
| --- | --- | --- | --- |
| Hohe Qualität im Mindestumfang | 10 | offen | Wird aus der Endbewertung der A-Kriterien abgeleitet. |
| Produkt-/Funktions-Erweiterungen | 15 | offen | Aktuell keine über den Mindestumfang hinausgehenden Features ausgewiesen. Falls vorhanden, in Kap. 4 nach dem vorgegebenen Schema dokumentieren. |
| Zusätzliche Methoden/Artefakte | 10 | offen | Optional; nicht explizit eingesetzt. |
| Projektorganisation | 5 | ⚠️ | Sprechende Commit-Messages sind ab Commit 2 vorhanden; **.gitignore** ist gesetzt. **Issue-Management nicht genutzt** – könnte als kleine Erweiterung dienen. |

### 8.4 Offene Punkte vor Abgabe (Checkliste)
In dieser Reihenfolge empfohlen:

1. **Sourcecode in dieses Repo bringen** – SvelteKit-Projekt aus dem bestehenden Stand in `hilfadar2` pushen (lokal z. B. `git remote set-url origin https://github.com/haerrbas/hilfadar2.git` und `git push -u origin main`). **Wichtig: Ohne Code im Repo ist Mindestanforderung 3 nicht erfüllt.**
2. **Screenshots der fertigen App** (Need-Einstieg, Match-Screen, Order-done, Give-Flow) in Kap. 3.4.1 einfügen.
3. **Video** (~5 Min, max. 10 Min): kommentierter Walkthrough aller Workflows; ohne Code- oder Vorgehens-Teil.
4. **Testdokumente** `Hilfadar_Usability_Test-Sandro.docx` und `Hilfadar_Usability_Test-Kanita.docx` ins Repo legen (z. B. unter `/docs`) und in Kap. 7 verlinken.
5. **Lizenzhinweise** zu verwendeten Icons/Schriften im Anhang (Kap. 7) ergänzen.
6. **«Repository»-Link** im Kopf der README sowie in Kap. 5 prüfen: zeigt aktuell auf das alte `hilfadar`. Falls `hilfadar2` das Abgabe-Repo ist, auf `…/hilfadar2` ändern.
7. *Optional (für B-Punkte):* 1–2 sichtbare **Erweiterungen** umsetzen (z. B. den «Searching for …»-Screen aus Validate-Erkenntnis verbessern oder GitHub Issues nutzen) und in Kap. 4 dokumentieren.

> **Methodik dieser Selbst-Prüfung:** Die Status-Einschätzungen basieren auf dem aktuellen Inhalt dieses Repositories und der deployten App. Die Selbst-Prüfung wurde mit Unterstützung eines KI-Tools (Claude) erstellt; die fachliche Verantwortung liegt bei der/dem Studierenden.
