"use client";
import { useEffect, useState } from "react";
import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";
import AddProductModal from "../_components/AddProductModal";
import EditProductModal from "../_components/EditProductModal";
import { db } from "../../firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import Image from "next/image";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editProduct, setEditProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Fetch products from Firestore
  const fetchProducts = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, "products"));
    const productsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProducts(productsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Add product
  const handleAddProduct = async (newProduct: any) => {
    await addDoc(collection(db, "products"), newProduct);
    fetchProducts();
    setIsAddOpen(false);
  };

  // Edit product
  const handleEditProduct = async (updatedProduct: any) => {
    const productRef = doc(db, "products", updatedProduct.id);
    await updateDoc(productRef, updatedProduct);
    fetchProducts();
    setEditProduct(null);
  };

  // Delete product
  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      await deleteDoc(doc(db, "products", id));
      fetchProducts();
    }
  };

  return (
    <div className="p-6 w-full min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Products</h1>
        <button
          onClick={() => setIsAddOpen(true)}
          className="flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-lg shadow hover:bg-primary/90 transition"
        >
          <FiPlus /> Add Product
        </button>
      </div>

      {/* Loading State */}
      {loading ? (
        <p className="text-center text-gray-500">Loading products...</p>
      ) : (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3">Image</th>
                <th className="p-3">Name</th>
                <th className="p-3">Category</th>
                <th className="p-3">Price</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 ? (
                products.map((product) => (
                  <tr key={product.id} className="border-b hover:bg-gray-50">
                    <td className="p-3">
                      <Image
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-md border"
                      />
                    </td>
                    <td className="p-3 font-medium text-gray-700">
                      {product.name}
                    </td>
                    <td className="p-3 text-gray-500">{product.category}</td>
                    <td className="p-3 text-green-600 font-semibold">
                      AED {product.price}
                    </td>
                    <td className="p-3 text-right flex gap-3 justify-end">
                      <button
                        onClick={() => setEditProduct(product)}
                        className="p-2 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200"
                      >
                        <FiEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="p-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200"
                      >
                        <FiTrash2 />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="text-center p-6 text-gray-500 italic"
                  >
                    No products found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Add Product Modal */}
      {isAddOpen && (
        <AddProductModal
          onClose={() => setIsAddOpen(false)}
          onSave={handleAddProduct}
        />
      )}

      {/* Edit Product Modal */}
      {editProduct && (
        <EditProductModal
          product={editProduct}
          onClose={() => setEditProduct(null)}
          onSave={handleEditProduct}
        />
      )}
    </div>
  );
}
