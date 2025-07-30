import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const AddItem = ({ onAddProduct }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    stock: "",
    unit: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(formData); // optional prop callback
    console.log("Product Data:", formData);
    setFormData({
      name: "",
      category: "",
      description: "",
      price: "",
      stock: "",
      unit: "",
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 border border-emerald-100">
      <h2 className="text-xl font-semibold text-emerald-700 mb-4">
        Add New Item
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          className="bg-slate-50"
        />
        <Input
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="bg-slate-50"
        />
        <Textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="bg-slate-50"
        />
        <div className="grid grid-cols-3 gap-3">
          <Input
            name="price"
            placeholder="Price ₹"
            type="number"
            value={formData.price}
            onChange={handleChange}
            className="bg-slate-50"
          />
          <Input
            name="stock"
            placeholder="Stock"
            type="number"
            value={formData.stock}
            onChange={handleChange}
            className="bg-slate-50"
          />
          <Input
            name="unit"
            placeholder="Unit (kg/litre)"
            value={formData.unit}
            onChange={handleChange}
            className="bg-slate-50"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-2"
        >
          <PlusCircle size={18} />
          Add Item
        </Button>
      </form>
    </div>
  );
};

export default AddItem;
