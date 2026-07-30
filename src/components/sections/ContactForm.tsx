"use client";

import { useState } from "react";
import { CONTACT_EMAIL, CONTACT_TELEGRAM_HANDLE, CONTACT_TELEGRAM_URL } from "@/lib/content";

export default function ContactForm() {
  const [statusMessage, setStatusMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const contact = String(formData.get("contact") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Портфолио: сообщение от ${name}`);
    const body = encodeURIComponent(
      `Имя: ${name}\nКонтакт: ${contact}\n\n${message}`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setStatusMessage("Открывается почтовый клиент…");
  }

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16 items-center">
          {/* Левая колонка */}
          <div className="md:col-span-5">
            <h2 className="text-5xl md:text-6xl font-semibold tracking-[-0.04em] mb-6">
              Давай работать вместе
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ищу интересные проекты и сотрудничество.
              <br />
              Буду рад обсудить вашу задачу.
            </p>

            <div className="mt-12 space-y-6">
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-2xl font-medium hover:text-primary transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Telegram</div>
                <a
                  href={CONTACT_TELEGRAM_URL}
                  className="text-2xl font-medium hover:text-primary transition-colors"
                >
                  @{CONTACT_TELEGRAM_HANDLE}
                </a>
              </div>
            </div>
          </div>

          {/* Правая колонка — форма */}
          <div className="md:col-span-7">
            <div className="bg-card border border-border rounded-3xl p-8 md:p-10">
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm text-muted-foreground mb-2"
                    >
                      Имя
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="w-full bg-background border border-border rounded-2xl px-5 py-4 focus:outline-none focus:border-primary transition-colors"
                      placeholder="Владислав"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-method"
                      className="block text-sm text-muted-foreground mb-2"
                    >
                      Email или Telegram
                    </label>
                    <input
                      id="contact-method"
                      name="contact"
                      type="text"
                      required
                      autoComplete="email"
                      className="w-full bg-background border border-border rounded-2xl px-5 py-4 focus:outline-none focus:border-primary transition-colors"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm text-muted-foreground mb-2"
                  >
                    Сообщение
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={6}
                    className="w-full bg-background border border-border rounded-3xl px-5 py-4 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Расскажите о вашем проекте..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-5 bg-primary text-primary-foreground rounded-3xl font-medium text-lg hover:bg-primary/90 transition-all active:scale-[0.98]"
                >
                  Отправить сообщение
                </button>

                <p aria-live="polite" className="text-sm text-muted-foreground text-center">
                  {statusMessage}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
