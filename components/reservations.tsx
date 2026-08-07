"use client";
import { useState } from "react";
import { sb } from "@/lib/supabase";
import { T } from "@/lib/i18n";

const BOOKING_URL = "https://papagayocali.com/reservar";

export function Reservations() {
  const [form, setForm] = useState({ name: "", phone: "", date: "", guests: "2", occasion: "", note: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const { error } = await sb.from("reservations").insert({
        name: form.name.trim(), phone: form.phone.trim(), date: form.date,
        guests: form.guests, occasion: form.occasion || null, note: form.note.trim() || null,
      });
      if (error) throw error;
      setStatus("ok");
      setForm({ name: "", phone: "", date: "", guests: "2", occasion: "", note: "" });
    } catch { setStatus("err"); }
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-verde relative overflow-hidden" id="res">
      <span className="eyebrow"><T es="Reserve Su Mesa" en="Book Your Table" /></span>
      <h2 className="res-title mt-3 mb-10">
        <T
          es={<>¿LISTOS PARA<br />EL <span className="text-oro">PARAÍSO?</span></>}
          en={<>READY FOR<br />THE <span className="text-oro">PARADISE?</span></>}
        />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="flex flex-col gap-3 items-start mb-6">
            <a href="https://wa.me/573158126369" target="_blank" rel="noreferrer" className="res-btn">📱 WhatsApp</a>
            <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="res-btn"><T es="📅 Reservar Online" en="📅 Book Online" /></a>
            <a href="https://instagram.com/papagayo_gastrobar" target="_blank" rel="noreferrer" className="res-btn">📸 Instagram</a>
          </div>
          <p className="text-[0.68rem] text-crema/40 tracking-[0.06em]">
            <T es="Cra. 105 #14-250 · Ciudad Jardín · Frente a Velas Plaza · Cali" en="Cra. 105 #14-250 · Ciudad Jardín · In front of Velas Plaza · Cali" />
          </p>
        </div>
        <div className="bg-black/25 border border-oro/20 p-8">
          <div className="font-bebas text-xl tracking-[0.06em] text-crema mb-6">
            <T es={<>SOLICITAR <span className="text-oro">RESERVA</span></>} en={<>REQUEST A <span className="text-oro">RESERVATION</span></>} />
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label={<T es="Nombre *" en="Name *" />}><input name="name" value={form.name} onChange={handleChange} required placeholder="Tu nombre completo" className="rf-input" /></Field>
              <Field label="WhatsApp *"><input name="phone" value={form.phone} onChange={handleChange} required placeholder="+57 300 000 0000" className="rf-input" /></Field>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label={<T es="Fecha *" en="Date *" />}><input name="date" type="date" value={form.date} onChange={handleChange} required className="rf-input" /></Field>
              <Field label={<T es="Personas *" en="Guests *" />}>
                <select name="guests" value={form.guests} onChange={handleChange} className="rf-input">
                  {["1","2","3","4","5","6+"].map((v) => <option key={v} value={v}>{v}</option>)}
                </select>
              </Field>
            </div>
            <Field label={<T es="Ocasión especial" en="Special occasion" />}>
              <select name="occasion" value={form.occasion} onChange={handleChange} className="rf-input">
                <option value=""><T es="— Seleccionar —" en="— Select —" /></option>
                <option value="tardear"><T es="Tardear (4–7pm)" en="Happy Hour (4–7pm)" /></option>
                <option value="cena"><T es="Cena" en="Dinner" /></option>
                <option value="cumpleanos"><T es="Cumpleaños" en="Birthday" /></option>
                <option value="aniversario"><T es="Aniversario" en="Anniversary" /></option>
                <option value="empresa"><T es="Evento empresarial" en="Corporate event" /></option>
              </select>
            </Field>
            <Field label={<T es="Nota (opcional)" en="Note (optional)" />}>
              <textarea name="note" value={form.note} onChange={handleChange} rows={3} placeholder="Alergias, peticiones especiales..." className="rf-input resize-none" />
            </Field>
            <button type="submit" disabled={status === "loading"}
              className="bg-oro text-carbon border-2 border-oro py-3 font-sans text-[0.74rem] font-bold tracking-[0.12em] uppercase cursor-pointer hover:bg-transparent hover:text-oro transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              <T es="Enviar Solicitud" en="Send Request" />
            </button>
            {status === "ok" && <div className="text-[0.78rem] px-4 py-3 bg-tropical/10 border border-tropical/30 text-tropical"><T es="✓ ¡Solicitud enviada! Te contactaremos pronto por WhatsApp." en="✓ Request sent! We'll contact you soon via WhatsApp." /></div>}
            {status === "err" && <div className="text-[0.78rem] px-4 py-3 bg-coral/10 border border-coral/30 text-coral"><T es="Algo salió mal. Por favor escríbenos por WhatsApp." en="Something went wrong. Please message us on WhatsApp." /></div>}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[0.58rem] tracking-[0.14em] uppercase text-crema/40 font-bold">{label}</label>
      {children}
    </div>
  );
}
