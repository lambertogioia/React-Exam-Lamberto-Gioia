
# 🛒 React E-Commerce Shop

Un semplice progetto di **e-commerce frontend** realizzato con **React + Vite** e Redux.  
Permette di visualizzare prodotti, applicare filtri, aggiungere articoli al carrello e gestire un login utente/admin.

---

## 📌 Panoramica del Progetto

Il progetto simula un piccolo shop online con:

- **Home page** con lista di prodotti caricati tramite API esterna (EscuelaJS).
- **Filtri** per categoria, numero di prodotti per pagina e ricerca testuale.
- **Carrello** con aggiunta/rimozione prodotti, gestione quantità e calcolo totale.
- **Login utente e admin** con routing dedicato.
- **Admin Manager** per aggiungere nuovi prodotti (simulazione).
- **Product detail page** con informazioni sul singolo articolo.
- Gestione stato globale tramite **Redux Toolkit**.

---

## ⚙️ Istruzioni di esecuzione

1. **Clona il repository**
   ```bash
   git clone https://github.com/tuo-username/react-ecommerce-shop.git
   
   ```

2. **Installa le dipendenze**
   ```bash
   npm install
   ```

3. **Avvia il server di sviluppo**
   ```bash
   npm run dev
   ```

4. **Apri nel browser**
   ```
   http://localhost:5173
   ```

---

## ✨ Funzionalità principali

- ✅ Visualizzazione prodotti da API esterna  
- ✅ Ricerca e filtri (limite, categoria, titolo)  
- ✅ Aggiunta/rimozione dal carrello con aggiornamento totale  
- ✅ Gestione quantità articoli nel carrello  
- ✅ Login utente e login admin con redirezione  
- ✅ Inserimento nuovi prodotti via form admin (simulazione con POST)  
- ✅ Pagine dedicate: Home, Login, Admin, Cart, Product Detail, NotFound  
- ✅ UI coerente con card, toolbar, form e bottoni stilizzati  

---

## 🛠️ Tecnologie utilizzate

- **React 18 + Vite** → framework frontend e bundler veloce  
- **React Router** → gestione delle rotte (Home, Login, Admin, Cart, ecc.)  
- **Redux Toolkit** → gestione stato globale (carrello, esempio di counter)  
- **React Redux** → integrazione Redux/React  
- **React Spinners** → loader animato (ClimbingBoxLoader)  
- **React Bootstrap** → componenti UI (Alert, ecc.)  
- **EscuelaJS API** → API pubblica per prodotti fake  
- **CSS custom** → styling coerente di card, navbar, toolbar, form  

---

## 📦 Dipendenze

Versioni indicative basate sul progetto:

```json
{
  "dependencies": {
    "@reduxjs/toolkit": "^1.9.7",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^8.1.3",
    "react-router": "^6.16.0",
    "react-router-dom": "^6.16.0",
    "react-spinners": "^0.13.8",
    "react-bootstrap": "^2.9.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.1.0",
    "vite": "^5.0.0"
  }
}
```

---

## 📂 Struttura del progetto

```
src/
 ├── components/        # Navbar, Footer, Product, ProductFilters, ecc.
 ├── pages/             # Home, Login, AdminLogin, AdminManager, Cart, ProductDetail, NotFound
 ├── redux/             # store.js, cartReducer.js, cartActions.js, orderActions.js
 ├── layout/            # Layout.jsx (Navbar + Footer wrapper)
 ├── App.jsx            # Definizione rotte principali
 ├── main.jsx           # Entry point React con BrowserRouter e Redux Provider
 ├── index.css          # Stile globale
 └── App.css            # Stili aggiuntivi
```

---

## 📖 Note

- Questo progetto è solo **frontend**: il login è simulato, non avviene nessuna validazione server-side.
- Le API utilizzate (`https://api.escuelajs.co/api/v1/products/`) sono pubbliche e servono solo a scopo dimostrativo.
