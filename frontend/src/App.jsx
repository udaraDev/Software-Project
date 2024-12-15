// App.jsx
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Delivery from './pages/Delivery';
import InventoryManagement from './pages/InventoryManagement';
import StockManagement from './pages/StockManagement';
import ResourceManagement from './pages/ResourceManagement';
import Vehicle from './pages/Vehicle';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Machine from './pages/Machine';
import Sidebar from './components/Sidebar';
import AddProduct from './pages/AddProduct';
import Dashboard from './pages/Dashboard';
import ManageProducts from './pages/ManageProducts';
import ManageSales from './pages/ManageSales';
import { ProductProvider } from './context/ProductContext'; // Import ProductProvider
import Productions from './pages/Productions';

const App = () => {
  const location = useLocation();
  // Update routes where Navbar and Footer should not be displayed
  const hideNavbarFooterOnRoutes = [
    '/add-product', 
    '/dashboard', // Add dashboard to hide Navbar and Footer
    '/manage-products', 
    '/manage-sales',
    '/productions' // Add productions to hide Navbar and Footer
  ];

  // Update routes where Sidebar should not be displayed
  const hideSidebarOnRoutes = [
    '/', // Home page
    // Removed '/add-product' so that Sidebar appears on the AddProduct page
  ];

  // Determine if Navbar and Footer should be displayed
  const showNavbarAndFooter = !hideNavbarFooterOnRoutes.includes(location.pathname);
  // Determine if Sidebar should be displayed
  const showSidebar = !hideSidebarOnRoutes.includes(location.pathname);

  return (
    <ProductProvider> {/* Wrap the application with ProductProvider */}
      <div className="flex">
        {showSidebar && <Sidebar />}
        <div className={`flex-1 min-h-screen ${showSidebar ? 'ml-64' : ''}`}>
          {showNavbarAndFooter && <Navbar />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/inventory" element={<InventoryManagement />} />
            <Route path="/stock" element={<StockManagement />} />
            <Route path="/resource" element={<ResourceManagement />} />
            <Route path="/vehicle" element={<Vehicle />} />
            <Route path="/machine" element={<Machine />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/manage-products" element={<ManageProducts />} />
            <Route path="/manage-sales" element={<ManageSales />} />
            <Route path="/productions" element={<Productions />} />
          </Routes>
          {showNavbarAndFooter && <Footer />}
        </div>
      </div>
    </ProductProvider>
  );
}

export default App;