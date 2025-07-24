"use client";
import { useState } from "react";
import {
  FiHome,
  FiBox,
  FiShoppingCart,
  FiUsers,
  FiBarChart2,
  FiTag,
  FiTruck,
  FiSettings,
  FiMenu,
  FiX
} from "react-icons/fi";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <FiHome />, path: "/dashboard" },
    { name: "Products", icon: <FiBox />, path: "/dashboard/products" },
    { name: "Orders", icon: <FiShoppingCart />, path: "/dashboard/orders" },
    { name: "Customers", icon: <FiUsers />, path: "/dashboard/customers" },
    { name: "Analytics", icon: <FiBarChart2 />, path: "/dashboard/analytics" },
    { name: "Promotions", icon: <FiTag />, path: "/dashboard/promotions" },
    { name: "Shipping", icon: <FiTruck />, path: "/dashboard/shipping" },
    { name: "Settings", icon: <FiSettings />, path: "/dashboard/settings" },
  ];

  return (
    <div className="flex w-full">
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden p-3 text-2xl"
        onClick={() => setIsOpen(true)}
      >
        <FiMenu />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-1/5 bg-white shadow-lg p-4 flex flex-col justify-between z-50 transform transition-transform duration-300 ease-in-out 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Sidebar Header */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-primary">Admin Panel</h2>
            <button
              className="lg:hidden text-2xl"
              onClick={() => setIsOpen(false)}
            >
              <FiX />
            </button>
          </div>

          {/* Menu Items */}
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.path}
                  className="flex items-center gap-3 p-3 rounded-md hover:bg-primary hover:text-white transition-colors"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-base font-medium">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer / Logout */}
        <div className="mt-6 border-t pt-4">
          <button className="w-full text-left p-3 rounded-md bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition">
            Logout
          </button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}
