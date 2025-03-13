# ShoppyGlobe
 
# 🛒 ShoppyGlobe - A Modern E-Commerce App

ShoppyGlobe is a simple e-commerce web application built using **React, Redux, and Tailwind CSS**. It allows users to browse products, view product details, and manage their shopping cart.

---

## 🚀 Features
✅ **Product Listing** - Displays products fetched from an API  
✅ **Product Details** - View detailed information about a product  
✅ **Add to Cart** - Add/remove products from the cart  
✅ **Cart Page** - View and update cart items  
✅ **Search Functionality** - Search and filter products  
✅ **Dynamic Header** - Sticky navigation bar with color change on scroll  
✅ **Error Handling** - Handles API failures gracefully  
✅ **Responsive UI** - Fully mobile-friendly design with Tailwind CSS  
✅ **Performance Optimization** - Code splitting with `React.lazy()` and `Suspense`  

---

## 🛠️ Technologies Used
- **React.js** - Frontend UI  
- **Redux Toolkit** - State management  
- **React Router** - Navigation  
- **Tailwind CSS** - Styling  
- **Axios** - API requests  
- **Vite** - Build tool for fast performance  

---

## 📦 Installation & Setup

1️⃣ **Clone the repository**
```bash
git clone https://github.com/quaziyadgar/ShoppyGlobe.git
cd ShoppyGlobe

2️⃣ Install dependencies
npm install

3️⃣ Run the development server
npm run dev

4️⃣ Open the app in your browser
http://localhost:5173

📂 Project Structure
ShoppyGlobe/
│── src/
│   ├── components/       # Reusable components (Header, ProductList, etc.)
│   ├── pages/            # Page components (Home, ProductDetail, Cart)
│   ├── redux/            # Redux store, slices, and actions
│   ├── hooks/            # Custom hooks for data fetching
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Entry point
│── public/               # Static assets
│── README.md             # Project documentation
│── package.json          # Dependencies and scripts
│── vite.config.js        # Vite configuration
🔗 API Used
This project fetches product data from DummyJSON API:
https://dummyjson.com/products
📜 License
This project is open-source and free to use.
