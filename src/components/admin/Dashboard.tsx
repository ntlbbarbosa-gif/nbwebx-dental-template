import Link from "next/link";
import { CalendarDays, ExternalLink, FileText, MessageSquareText, Star, Users } from "lucide-react";

const leads = [
  { name: "Ana Clara Souza", origin: "Google", interest: "Implante", status: "Novo" },
  { name: "Bruno Almeida", origin: "Instagram", interest: "Clareamento", status: "Em contato" },
  { name: "Carla Mendes", origin: "Site", interest: "Facetas", status: "Agendado" },
  { name: "Diego Ribeiro", origin: "Google", interest: "Invisalign", status: "Novo" },
];

const metrics = [
  { label: "Leads novos", value: "28", Icon: Users, meta: "+40%" },
  { label: "Agendamentos", value: "12", Icon: CalendarDays, meta: "+20%" },
  { label: "Avaliações", value: "4,9", Icon: Star, meta: "86 avaliações" },
  { label: "Páginas publicadas", value: "18", Icon: FileText, meta: "+3" },
];

const shortcuts = [
  { label: "Editar identidade", href: "/admin/identidade" },
  { label: "Adicionar tratamento", href: "/admin/tratamentos" },
  { label: "Gerenciar profissionais", href: "/admin/profissionais" },
  { label: "Publicar no blog", href: "/admin/blog" },
  { label: "Configurar SEO", href: "/admin/seo" },
];

export function Dashboard() {
  return (
    <div className="mx-auto max-w-[1500px] space-y-6">
      <header className="admin-card flex flex-wrap items-center justify-between gap-4 p-6">
        <div>
          <p className="text-sm text-slate-500">Olá, Doutor(a)!</p>
          <h1 className="mt-1 text-3xl font-black tracking-tight">Bem-vindo ao seu painel</h1>
          <p className="mt-1 text-slate-500">Gerencie conteúdo, identidade e oportunidades da clínica.</p>
        </div>
        <Link href="/" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold">
          Abrir site <ExternalLink size={17} />
        </Link>
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map(({ label, value, Icon, meta }) => (
          <div key={label} className="admin-card p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-500">{label}</span>
              <div className="rounded-xl bg-sky-50 p-2 text-sky-600"><Icon size={20} /></div>
            </div>
            <div className="mt-4 text-3xl font-black">{value}</div>
            <div className="mt-1 text-xs font-bold text-emerald-600">{meta}</div>
          </div>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.5fr_.8fr]">
        <div className="admin-card overflow-hidden">
          <div className="flex items-center justify-between border-b border-slate-100 p-5">
            <div><h2 className="text-lg font-black">Leads recentes</h2><p className="text-sm text-slate-500">Oportunidades vindas do site e campanhas.</p></div>
            <MessageSquareText className="text-sky-500" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500"><tr>{["Nome", "Origem", "Interesse", "Status"].map((heading) => <th key={heading} className="px-5 py-3">{heading}</th>)}</tr></thead>
              <tbody>{leads.map((lead) => <tr key={lead.name} className="border-t border-slate-100"><td className="px-5 py-4 font-bold">{lead.name}</td><td className="px-5 py-4 text-slate-600">{lead.origin}</td><td className="px-5 py-4 text-slate-600">{lead.interest}</td><td className="px-5 py-4"><span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-700">{lead.status}</span></td></tr>)}</tbody>
            </table>
          </div>
        </div>

        <div className="admin-card p-5">
          <h2 className="text-lg font-black">Atalhos rápidos</h2>
          <div className="mt-4 grid gap-3">{shortcuts.map(({ label, href }) => <Link key={href} href={href} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold hover:border-sky-300 hover:bg-sky-50">{label} →</Link>)}</div>
        </div>
      </section>
    </div>
  );
}
