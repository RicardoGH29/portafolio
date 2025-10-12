"use client";
import { Button } from "@mui/material";
import React from "react";
import { fetchDataPostAsync } from "@/services/fetch";

const ContactSection = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  async function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // setFormData((prev) => [...prev, [name, value]]);
  }
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const response = await fetchDataPostAsync("/api/contact", formData);
      console.log(response);
      if (response?.success) {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        alert("¡La operación se realizó con éxito!");
      } else {
        alert("¡La operación no se pudo realizar!");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert("¡La operación no se pudo realizar!");
    }
  }
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-md mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Contáctame</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={formData.name}
            className="w-full p-2 rounded-md border border-input bg-white"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="email"
            value={formData.email}
            name="email"
            className="w-full p-2 rounded-md border border-input bg-white"
            onChange={handleChange}
          />
          <textarea
            placeholder="message"
            name="message"
            rows={4}
            value={formData.message}
            className="w-full p-2 rounded-md border border-input bg-white"
            onChange={handleChange}
          ></textarea>
          <Button type="submit" className="w-full bg-black text-white">
            Enviar Mensaje
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
