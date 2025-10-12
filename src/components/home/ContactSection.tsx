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
        <h2 className="text-3xl font-bold text-center mb-4">Contáctame</h2>
        <p className="text-center text-gray-600 mb-10">
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>
        <form className="space-y-4 bg-white p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Nombre
            </label>
            <input
              id="name"
              type="text"
              placeholder="Tu nombre"
              name="name"
              value={formData.name}
              className="w-full p-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-gray-400"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="tu@email.com"
              value={formData.email}
              name="email"
              className="w-full p-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-gray-400"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              placeholder="Cuéntame sobre tu proyecto..."
              name="message"
              rows={4}
              value={formData.message}
              className="w-full p-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-gray-400"
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <Button 
            type="submit" 
            className="w-full bg-black text-white hover:bg-gray-800 py-3"
          >
            Enviar Mensaje
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
