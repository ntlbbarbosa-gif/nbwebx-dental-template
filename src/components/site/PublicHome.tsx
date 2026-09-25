import { ArrowRight, CalendarDays, CheckCircle2, MapPin, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";
import { defaultClinicTheme } from "@/lib/clinic-config";

const treatments = [
  ["Implantes Dentários", "Recupere função e confiança com planejamento individualizado."],
  ["Clareamento Dental", "Protocolos seguros para um sorriso mais claro e natural."],
  ["Ortodontia", "Alinhamento moderno com opções fixas e estéticas."],
];

export function PublicHome() {
  const t = defaultClinicTheme;
  return (
    <main style={{ background: t.background, color: t.text }}>
      <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#inicio" className="font-black tracking-tight" style={{ color: t.primary }}>{t.logoText}</a>
          <nav className="hidden gap-7 text-sm font-semibold text-slate-600 md:flex">
            <a href="#tratamentos">Tratamentos</a><a href="#clinica">A clínica</a><a href="#contato">Contato</a>
          </nav>
          <a href={`https://wa.me/${t.whatsapp}`} className="rounded-full px-5 py-2.5 text-sm font-bold text-white" style={{ background: t.primary }}>Agendar consulta</a>
        </div>
      </header>

      <section id="inicio" className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold shadow-sm"><Sparkles size={15} style={{ color: t.accent }} /> Odontologia moderna e humanizada</span>
          <h1 className="mt-6 max-w-2xl text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">{t.tagline}</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Tecnologia, especialistas e atendimento próximo para cuidar do seu sorriso em todas as fases.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`https://wa.me/${t.whatsapp}`} className="inline-flex items-center gap-2 px-6 py-3 font-bold text-white" style={{ background: t.primary, borderRadius: t.radius }}>Agendar avaliação <ArrowRight size={18}/></a>
            <a href="#tratamentos" className="border border-slate-300 bg-white px-6 py-3 font-bold" style={{ borderRadius: t.radius }}>Conhecer tratamentos</a>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-600">
            <span className="flex items-center gap-2"><CheckCircle2 size={18} style={{ color: t.secondary }}/> Profissionais especializados</span>
            <span className="flex items-center gap-2"><ShieldCheck size={18} style={{ color: t.secondary }}/> Atendimento seguro</span>
          </div>
        </div>
        <div className="relative min-h-[460px] overflow-hidden bg-gradient-to-br from-sky-100 via-white to-emerald-100 shadow-2xl" style={{ borderRadius: t.radius + 12 }}>
          <div className="absolute inset-0 grid place-items-center p-10 text-center">
            <div className="max-w-sm rounded-3xl border border-white/70 bg-white/80 p-8 shadow-xl backdrop-blur">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl text-white" style={{ background: t.primary }}><Stethoscope size={30}/></div>
              <h2 className="mt-5 text-2xl font-black">Sua clínica, sua marca</h2>
              <p className="mt-3 text-slate-600">Esta área pode receber a foto principal da clínica ou do dentista diretamente pelo painel.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="tratamentos" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <p className="text-sm font-black uppercase tracking-[.2em]" style={{ color: t.primary }}>Tratamentos</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight">Cuidado completo para o seu sorriso</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {treatments.map(([name, description], i) => (
              <article key={name} className="border border-slate-200 p-6 shadow-sm" style={{ borderRadius: t.radius }}>
                <div className="grid h-12 w-12 place-items-center rounded-xl" style={{ background: `${i === 0 ? t.primary : i === 1 ? t.secondary : t.accent}18`, color: i === 0 ? t.primary : i === 1 ? t.secondary : t.accent }}><Sparkles size={22}/></div>
                <h3 className="mt-5 text-xl font-black">{name}</h3><p className="mt-3 leading-7 text-slate-600">{description}</p>
                <a className="mt-5 inline-flex items-center gap-2 font-bold" href="#contato" style={{ color: t.primary }}>Saiba mais <ArrowRight size={16}/></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-8 bg-slate-950 p-8 text-white md:grid-cols-3 md:p-12" style={{ borderRadius: t.radius + 8 }}>
          <div className="md:col-span-2"><h2 className="text-3xl font-black">Pronto para cuidar do seu sorriso?</h2><p className="mt-3 text-slate-300">Fale com nossa equipe e escolha o melhor horário para sua avaliação.</p></div>
          <div className="space-y-3 text-sm"><p className="flex items-center gap-2"><CalendarDays size={18}/> {t.phone}</p><p className="flex items-center gap-2"><MapPin size={18}/> {t.address}</p></div>
        </div>
      </section>
    </main>
  );
}
