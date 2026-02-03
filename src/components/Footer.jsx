"use client";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 bg-nude-100 border-t border-black/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <div className="text-3xl font-heading tracking-widest">
            NATALIA KHARCHENKO<span className="text-gold">.</span>
          </div>

          <div className="flex gap-12">
            {[
              { name: "Послуги", href: "#services" },
              { name: "Про нас", href: "#about" },
              { name: "Портфоліо", href: "#portfolio" },
              { name: "Освіта", href: "#courses" },
            ].map((item) => (
              <a key={item.name} href={item.href} className="text-[10px] uppercase tracking-widest text-muted hover:text-gold transition-colors">
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-black/5 gap-8">
          <p className="text-[10px] uppercase tracking-widest text-muted/60">
            &copy; {currentYear} NATALIA Мистецтво краси. Всі права захищені.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest text-muted/60 italic">Розроблено @vlad05x</span>
            <div className="w-4 h-px bg-gold" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
