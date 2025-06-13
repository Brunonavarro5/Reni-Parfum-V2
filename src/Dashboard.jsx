
import React, { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";

export default function Dashboard() {
  const [step, setStep] = useState("dashboard");
  const [form, setForm] = useState({
    cliente: "",
    perfume: "",
    cantidad: 1,
    metodo: ""
  });

  const precios = {
    "Oud Sultan": 25,
    "Amber Night": 30,
    "Musk Royal": 22
  };

  const precioUSD = precios[form.perfume] || 0;
  const dolar = 1250;
  const totalUSD = precioUSD * form.cantidad;
  const totalARS = totalUSD * dolar;

  const handleChange = (campo, valor) => {
    setForm({ ...form, [campo]: valor });
  };

  return (
    <div className="min-h-screen bg-white text-black p-4 md:p-8 font-sans">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-light tracking-wide">Reni Parfum</h1>
        <p className="text-sm text-gray-500">Sistema de gestión</p>
      </header>

      {step === "dashboard" && (
        <>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <Card className="rounded-2xl shadow-sm border border-gray-200">
              <CardContent className="p-6">
                <p className="text-sm text-gray-500 mb-2">Ingresos del mes</p>
                <h2 className="text-2xl font-semibold">$ 127.500</h2>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-sm border border-gray-200">
              <CardContent className="p-6">
                <p className="text-sm text-gray-500 mb-2">Gastos del mes</p>
                <h2 className="text-2xl font-semibold">$ 35.200</h2>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-sm border border-gray-200">
              <CardContent className="p-6">
                <p className="text-sm text-gray-500 mb-2">Ganancia neta</p>
                <h2 className="text-2xl font-semibold">$ 92.300</h2>
              </CardContent>
            </Card>
          </section>

          <section className="text-center">
            <Button onClick={() => setStep("venta")} className="text-base px-6 py-3 rounded-full shadow-md">
              Registrar nueva venta
            </Button>
          </section>
        </>
      )}

      {step === "venta" && (
        <div className="max-w-xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">Registrar venta</h2>

          <Select onValueChange={(val) => handleChange("cliente", val)}>
            <SelectTrigger>
              <SelectValue placeholder="Seleccionar cliente" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Lucía Fernández">Lucía Fernández</SelectItem>
              <SelectItem value="Javier Ruiz">Javier Ruiz</SelectItem>
              <SelectItem value="Marta López">Marta López</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={(val) => handleChange("perfume", val)}>
            <SelectTrigger>
              <SelectValue placeholder="Seleccionar perfume" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Oud Sultan">Oud Sultan</SelectItem>
              <SelectItem value="Amber Night">Amber Night</SelectItem>
              <SelectItem value="Musk Royal">Musk Royal</SelectItem>
            </SelectContent>
          </Select>

          <Input
            type="number"
            value={form.cantidad}
            onChange={(e) => handleChange("cantidad", parseInt(e.target.value))}
            placeholder="Cantidad"
            min={1}
          />

          <Select onValueChange={(val) => handleChange("metodo", val)}>
            <SelectTrigger>
              <SelectValue placeholder="Método de pago" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Efectivo">Efectivo</SelectItem>
              <SelectItem value="Transferencia">Transferencia</SelectItem>
              <SelectItem value="Crédito">Crédito</SelectItem>
            </SelectContent>
          </Select>

          <div className="text-sm text-gray-600">
            <p>Precio Unitario: <strong>USD {precioUSD}</strong></p>
            <p>Total: <strong>USD {totalUSD} / ARS {totalARS}</strong></p>
          </div>

          <Button onClick={() => alert("Venta registrada (simulado)")} className="w-full py-3 text-base rounded-full">
            Registrar venta
          </Button>
          <div className="text-center">
            <Button variant="ghost" onClick={() => setStep("dashboard")}>Volver al panel</Button>
          </div>
        </div>
      )}
    </div>
  );
}
