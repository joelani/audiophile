"use client";

import { api } from "../../../convex/_generated/api";
import { useMutation } from "convex/react";
import ThankYouModal from "@/components/layouts/ThankYouModal";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { useState } from "react";

export default function CheckoutPage() {
  const createOrder = useMutation(api.checkout.createOrder);
  const { cartItems, clearCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    zip: "",
    paymentMethod: "e-Money",
  });

  // handle form input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 50;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.address) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      setLoading(true);

      // ✅ save order to Convex (matches schema)
      await createOrder({
        formData, // all your billing/shipping details
        cartItems: cartItems.map((item) => ({
          id: item.name, // or item.id / slug if available
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image: item.image || "/default.png",
        })),
        total, // total amount
      });

      clearCart();
      setShowModal(true);
    } catch (error) {
      console.error("Order creation failed:", error);
      alert("Something went wrong while placing your order.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#f2f2f2] min-h-screen py-28 px-6 sm:px-8 lg:px-0">
      <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row gap-10">
        {/* LEFT — FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg p-6 sm:p-8 flex-1 space-y-8 shadow-sm"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold uppercase">
            Checkout
          </h2>

          {/* Billing Details */}
          <SectionTitle title="Billing Details" />
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Shipping Info */}
          <SectionTitle title="Shipping Info" />
          <Input
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              label="ZIP Code"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
            />
            <Input
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
            <Input
              label="Country"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>

          {/* Payment Details */}
          <SectionTitle title="Payment Details" />
          <div className="grid md:grid-cols-2 gap-4">
            <p className="text-xs uppercase tracking-wide text-gray-600 font-semibold">
              Payment Method
            </p>
            <div className="flex flex-col gap-3">
              {["e-Money", "Cash on Delivery"].map((method) => (
                <label
                  key={method}
                  className={`flex items-center gap-3 border rounded-md p-3 cursor-pointer hover:border-primary transition ${
                    formData.paymentMethod === method
                      ? "border-primary"
                      : "border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method}
                    checked={formData.paymentMethod === method}
                    onChange={handleChange}
                    className="accent-primary"
                  />
                  {method}
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-primary-light text-white py-3 sm:py-4 rounded-md uppercase tracking-wide text-sm sm:text-base transition disabled:opacity-70"
          >
            {loading ? "Processing..." : "Continue & Pay"}
          </button>
        </form>

        {/* RIGHT — SUMMARY */}
        <aside className="bg-white rounded-lg p-6 sm:p-8 w-full lg:w-[350px] h-fit shadow-sm">
          <h3 className="text-lg font-semibold uppercase mb-6">Summary</h3>

          <div className="space-y-4 max-h-[300px] overflow-y-auto">
            {cartItems.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-md object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-800 text-sm sm:text-base">
                      {item.name}
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      ${item.price}
                    </p>
                  </div>
                </div>
                <span className="font-semibold text-gray-600 text-sm">
                  x{item.quantity}
                </span>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="border-t border-gray-200 mt-6 pt-4 space-y-3 text-sm">
            <SummaryRow label="Total" value={subtotal} />
            <SummaryRow label="Shipping" value={shipping} />
            <SummaryRow label="VAT (10%)" value={tax} />
            <SummaryRow label="Grand Total" value={total} highlight />
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full mt-6 bg-primary hover:bg-primary-light text-white py-3 rounded-md uppercase tracking-wide transition disabled:opacity-70"
          >
            {loading ? "Processing..." : "Continue & Pay"}
          </button>
        </aside>
      </div>

      <ThankYouModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        total={total}
      />
    </main>
  );
}

/* ------------------------------- Subcomponents ------------------------------ */
function Input({ label, name, value, onChange }) {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={name}
        className="text-xs font-semibold uppercase text-gray-600"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="border rounded-md px-3 py-2 focus:outline-primary text-sm"
        required
      />
    </div>
  );
}

function SectionTitle({ title }) {
  return (
    <h3 className="uppercase text-primary text-xs sm:text-sm tracking-widest mb-2 font-semibold">
      {title}
    </h3>
  );
}

function SummaryRow({ label, value, highlight }) {
  return (
    <div className="flex justify-between items-center">
      <span className="uppercase text-gray-500 text-xs sm:text-sm">
        {label}
      </span>
      <span
        className={`font-semibold ${
          highlight
            ? "text-primary text-lg"
            : "text-gray-800 text-sm sm:text-base"
        }`}
      >
        ${value.toFixed(2)}
      </span>
    </div>
  );
}
