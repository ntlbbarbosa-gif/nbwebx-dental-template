"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, Building2, FileText, Home, Image, LayoutDashboard, Palette, Settings, Star, Stethoscope, Users } from "lucide-react";

const items = [
  ["Dashboard", "/admin", LayoutDashboard],
  ["Identidade", "/admin/identidade", Palette],
  ["Clínica", "/admin/clinica", Building2],
  ["Tratamentos", "/admin/tratamentos", Stethoscope],
  ["Profissionais", "/admin/profissionais", Users],
  ["Avaliações", "/admin/avaliacoes", Star],
  ["Antes e Depois", "/admin/antes-depois", Image],
  ["Blog", "/admin/blog", FileText],
  ["Leads", "/admin/leads", Users],
  ["SEO", "/admin/seo", BarChart3],
  ["Configurações", "/admin/configuracoes", Settings],
] as const;

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="min-h-screen bg-[#f6f9fc] text-slate-950 lg:grid lg:grid-cols-[250px_1fr]">
      <aside className="bg-[#0b1f33] px-4 py-6 text-white lg:min-h-screen">
        <Link href="/" className="block px-3 pb-8"><div className="text-2xl font-black tracking-tight">NBWeb<span className="text-sky-400">X</span></div><div className="text-xs text-slate-400">Clínicas Odontológicas</div></Link>
        <nav className="space-y-1">
          {items.map(([label, href, Icon]) => {
            const active = pathname === href;
            return <Link key={href} href={href} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition ${active ? "bg-sky-500/20 text-sky-300 ring-1 ring-inset ring-sky-400/20" : "text-slate-300 hover:bg-white/5 hover:text-white"}`}><Icon size={19}/>{label}</Link>;
          })}
        </nav>
        <Link href="/" className="mt-8 flex items-center gap-2 rounded-xl border border-white/10 px-3 py-3 text-sm text-slate-300 hover:bg-white/5"><Home size={18}/> Ver site público</Link>
      </aside>
      <main className="min-w-0 p-4 md:p-6 lg:p-8">{children}</main>
    </div>
  );
}
