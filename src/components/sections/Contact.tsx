import { CONTACT_EMAIL, CONTACT_TELEGRAM_HANDLE, CONTACT_TELEGRAM_URL, VK_URL } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-semibold tracking-[-0.04em] mb-6">
          Давай работать вместе
        </h2>
        <p className="text-xl text-muted-foreground leading-relaxed mb-12">
          Ищу интересные проекты и сотрудничество.
          <br />
          Буду рад обсудить вашу задачу.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-16">
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
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-medium hover:text-primary transition-colors"
            >
              @{CONTACT_TELEGRAM_HANDLE}
            </a>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">VK</div>
            <a
              href={VK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-medium hover:text-primary transition-colors"
            >
              vk.ru/moonsh1ne_vk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
