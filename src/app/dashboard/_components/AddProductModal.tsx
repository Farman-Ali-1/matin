"use client";
import { useState } from "react";

export default function AddProductModal({ onClose, onSave }: any) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
  });

  const handleSubmit = () => {
    if (!form.name || !form.price || !form.category)
      return alert("All fields are required");
    onSave({ ...form, price: Number(form.price) });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add Product</h2>
        <input
          type="text"
          placeholder="Name"
          className="w-full mb-3 p-2 border rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          className="w-full mb-3 p-2 border rounded"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          className="w-full mb-3 p-2 border rounded"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          className="w-full mb-3 p-2 border rounded"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />
        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-primary text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
