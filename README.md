# 🛍️ Cloudflex Demo App

A responsive and modern product listing interface built with **Next.js (App Router)**, **Tailwind CSS**, and **React**. This app demonstrates clean component structure, responsive design, and basic routing using local data.


---

## ✨ Features

- 📦 Responsive product grid layout
- 📄 Product detail pages with dynamic routing (`/products/[id]`)
- 🔄 "More items you might like" section with circular indexing
- 💅 Clean UI styled using Tailwind CSS
- ⚙️ Modular, reusable components (`Card`, `Layout`, etc.)
- 💡 Local dummy data (no API integration needed)

---

## 📁 Project Structure

```
src/
├── app/
│   ├── page.js                 # Home page
│   └── products/
│       ├── page.jsx             # Products grid
│       └── [id]/page.jsx        # Product detail
├── components/
│   ├── card.jsx                 # Product card component
│   └── Layout.jsx               # Common layout wrapper
├── constants/
│   └── products.jsx              # Dummy product data
└── styles/
    └── globals.css              # Tailwind imports
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm or yarn

### Installation

```bash
git clone https://github.com/rahulisbusy/Cloudflex-assignment.git
cd techzone-products
npm install
```

### Run Development Server

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🖼️ Screenshots

| Home Page                     | Product Listing                | Product Detail Page            |
|------------------------------|--------------------------------|-------------------------------|
| ![Home](screenshots/home.png) | ![Grid](screenshots/grid.png)  | ![Detail](screenshots/detail.png) |

> 📸 Add your own screenshots inside a `/screenshots` folder.

---

## 🌐 Technologies Used

- [Next.js 14+ App Router](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)
- [Unsplash / Pixabay](https://pixabay.com/) for free image assets

---

## 📦 Future Enhancements

- ✅ Search or filter by category
- ✅ Product ratings and reviews
- ✅ Cart and checkout flow
- ✅ Backend integration (e.g., with a database or API)

---

## 🧑‍💻 Author

**Pritam Chakraborty**  
Connect on [LinkedIn](https://www.linkedin.com/in/pritam-chakraborty-0b74b4243/) 

---

## 📄 License

This project is open-source and free to use under the MIT License.
