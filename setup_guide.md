# IvoBau Website - Setup & Deployment Guide

## 1. Lokaler Start
Da die Webseite nur aus Standard-Webtechnologien (HTML, CSS, JS) besteht, wird kein komplexer Build-Prozess benötigt.
1. Öffnen Sie den Ordner im Explorer.
2. Doppelklicken Sie auf die `index.html`, um sie im Browser anzusehen.
*(Für die volle Funktionalität von Modulen empfiehlt sich ein lokaler Server wie das VSCode Plugin "Live Server").*

## 2. Kontaktformular aktivieren (WICHTIG)
Das Formular ist technisch fertig programmiert und nutzt **Formspree** (eine kostenlose, zuverlässige Serverless-Lösung für statische Seiten), da keine eigene Backend-Infrastruktur nötig ist. Die E-Mails werden direkt an `bau.tunjic@gmail.com` gesendet.

**Schritte:**
1. Gehen Sie auf[Formspree.io](https://formspree.io) und erstellen Sie einen kostenlosen Account mit der E-Mail `bau.tunjic@gmail.com`.
2. Erstellen Sie ein neues Formular ("New Project" -> "New Form").
3. Sie erhalten eine **Form ID** oder eine Endpunkt-URL (z.B. `https://formspree.io/f/xqkjjwpz`).
4. Öffnen Sie die Datei `app.js` in einem Texteditor.
5. Suchen Sie nach Zeile 108:
   `const FORMSPREE_ENDPOINT = 'https://formspree.io/f/REPLACE_WITH_YOUR_ID';`
6. Ersetzen Sie `REPLACE_WITH_YOUR_ID` durch Ihre erhaltene ID (oder fügen Sie die ganze URL ein).
7. Speichern. Das Formular sendet nun echte E-Mails!

## 3. Bilder anpassen
Im Code der `index.html` sind hochwertige Platzhalterbilder (`https://images.unsplash.com/...`) hinterlegt. 
Suchen Sie im Code nach `<img src="..."` und ersetzen Sie die URLs durch Ihre eigenen Projektbilder. Es wird empfohlen, Bilder vorab auf die gleiche Größe/Seitenverhältnis zuzuschneiden.

## 4. Hosting & Deployment
Die Seite ist bereit für die Veröffentlichung. Empfohlene, kostenlose Hosting-Anbieter:
* **Vercel** oder **Netlify**: Ordner per Drag & Drop hochladen. Automatisch schnelles, globales CDN mit SSL-Zertifikat.
* **GitHub Pages**: Ordner als Repository hochladen und Pages aktivieren.
* **Klassisches Webhosting (z.B. Strato, IONOS)**: Laden Sie einfach alle Dateien (index.html, app.js, style.css, etc.) per FTP in Ihr Hauptverzeichnis hoch.
