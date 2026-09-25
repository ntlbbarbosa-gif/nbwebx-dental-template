"use client";

import { useEffect, useMemo, useState } from "react";
import { ExternalLink, RotateCcw, Save, Upload } from "lucide-react";
import { ClinicTheme, defaultClinicTheme } from "@/lib/clinic-config";

const STORAGE_KEY = "nbwebx-dental-theme";

export function BrandingEditor() {
  const [theme, setTheme] = useState<ClinicTheme>(defaultClinicTheme);
  const [saved, setSaved] = useState(false);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [heroPreview, setHeroPreview] = useState<string | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try { setTheme({ ...defaultClinicTheme, ...JSON.parse(stored) }); } catch {}
    }
  }, []);

  const styleVars = useMemo(() => ({
    "--brand-primary": theme.primary,
    "--brand-secondary": theme.secondary,
    "--brand-accent": theme.accent,
    "--brand-bg": theme.background,
    "--brand-text": theme.text,
  } as React.CSSProperties), [theme]);

  function update<K extends keyof ClinicTheme>(key: K, value: ClinicTheme[K]) { setTheme(prev => ({ ...prev, [key]: value })); setSaved(false); }
  function save() { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(theme)); setSaved(true); setTimeout(() => setSaved(false), 1800); }
  function reset() { setTheme(defaultClinicTheme); window.localStorage.removeItem(STORAGE_KEY); setLogoPreview(null); setHeroPreview(null); }
  function previewFile(file: File | undefined, setter: (v: string) => void) { if (!file) return; setter(URL.createObjectURL(file)); }

  return <div className="mx-auto max-w-[1500px] space-y-6" style={styleVars}>
    <header className="admin-card flex flex-wrap items-center justify-between gap-4 p-6"><div><p className="text-sm text-slate-500">Configurações visuais</p><h1 className="mt-1 text-3xl font-black tracking-tight">Identidade da Clínica</h1><p className="mt-1 text-slate-500">Personalize o template sem precisar alterar o código.</p></div><div className="flex gap-2"><button onClick={reset} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold"><RotateCcw size={17}/> Restaurar</button><button onClick={save} className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-bold text-white"><Save size={17}/> {saved ? "Salvo" : "Salvar alterações"}</button></div></header>

    <div className="grid gap-6 xl:grid-cols-[1.35fr_.75fr]">
      <div className="space-y-6">
        <section className="admin-card p-6"><h2 className="text-lg font-black">Logotipos e imagens</h2><p className="mt-1 text-sm text-slate-500">Arquivos utilizados no cabeçalho e destaque do site.</p><div className="mt-5 grid gap-4 md:grid-cols-2">
          <UploadBox label="Logo principal" preview={logoPreview} onFile={f=>previewFile(f,setLogoPreview)} /><UploadBox label="Imagem do hero" preview={heroPreview} onFile={f=>previewFile(f,setHeroPreview)} />
        </div></section>

        <section className="admin-card p-6"><h2 className="text-lg font-black">Dados principais da marca</h2><div className="mt-5 grid gap-4 md:grid-cols-2"><Field label="Nome da clínica" value={theme.clinicName} onChange={v=>update("clinicName",v)}/><Field label="Texto da logo" value={theme.logoText} onChange={v=>update("logoText",v)}/><div className="md:col-span-2"><Field label="Headline principal" value={theme.tagline} onChange={v=>update("tagline",v)}/></div></div></section>

        <section className="admin-card p-6"><h2 className="text-lg font-black">Cores da marca</h2><p className="mt-1 text-sm text-slate-500">As cores abaixo alimentam os componentes do template.</p><div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <ColorField label="Primária" value={theme.primary} onChange={v=>update("primary",v)}/><ColorField label="Secundária" value={theme.secondary} onChange={v=>update("secondary",v)}/><ColorField label="Destaque" value={theme.accent} onChange={v=>update("accent",v)}/><ColorField label="Fundo" value={theme.background} onChange={v=>update("background",v)}/><ColorField label="Texto" value={theme.text} onChange={v=>update("text",v)}/>
        </div></section>

        <section className="admin-card p-6"><h2 className="text-lg font-black">Tipografia e estilo</h2><div className="mt-5 grid gap-4 md:grid-cols-3"><SelectField label="Fonte dos títulos" value={theme.headingFont} onChange={v=>update("headingFont",v)} options={["Poppins","Montserrat","Manrope","Inter"]}/><SelectField label="Fonte dos textos" value={theme.bodyFont} onChange={v=>update("bodyFont",v)} options={["Inter","Roboto","Open Sans","Lato"]}/><label className="block"><span className="mb-2 block text-sm font-bold">Raio das bordas: {theme.radius}px</span><input className="w-full accent-sky-500" type="range" min="0" max="32" step="2" value={theme.radius} onChange={e=>update("radius",Number(e.target.value))}/></label></div></section>
      </div>

      <aside className="xl:sticky xl:top-6 xl:self-start"><section className="admin-card overflow-hidden"><div className="flex items-center justify-between border-b border-slate-100 p-5"><div><h2 className="font-black">Pré-visualização</h2><p className="text-xs text-slate-500">Atualização em tempo real</p></div><a href="/" target="_blank" className="inline-flex items-center gap-1 text-xs font-bold text-sky-600">Abrir site <ExternalLink size={14}/></a></div>
        <div className="p-4" style={{ background: theme.background }}><div className="overflow-hidden border border-slate-200 bg-white shadow-xl" style={{ borderRadius: theme.radius }}><div className="flex items-center justify-between border-b border-slate-100 px-4 py-3"><div className="flex items-center gap-2">{logoPreview ? <img src={logoPreview} alt="Logo" className="h-8 max-w-[130px] object-contain"/> : <span className="text-xs font-black" style={{ color: theme.primary }}>{theme.logoText}</span>}</div><span className="rounded-full px-3 py-1.5 text-[10px] font-black text-white" style={{ background: theme.primary }}>AGENDAR</span></div><div className="grid min-h-[280px] md:grid-cols-2"><div className="flex flex-col justify-center p-6"><span className="text-[10px] font-black uppercase tracking-[.18em]" style={{ color: theme.secondary }}>Saúde bucal, mais vida</span><h3 className="mt-3 text-3xl font-black leading-tight" style={{ color: theme.text, fontFamily: theme.headingFont }}>{theme.tagline}</h3><p className="mt-3 text-xs leading-5 text-slate-500" style={{ fontFamily: theme.bodyFont }}>Odontologia moderna, tecnologia e atendimento humanizado.</p><button className="mt-5 w-fit px-4 py-2 text-xs font-black text-white" style={{ background: theme.primary, borderRadius: theme.radius }}>Agendar consulta</button></div><div className="min-h-[220px] bg-slate-100">{heroPreview ? <img src={heroPreview} alt="Hero" className="h-full w-full object-cover"/> : <div className="grid h-full min-h-[220px] place-items-center bg-gradient-to-br from-sky-50 to-emerald-50 text-center text-xs font-bold text-slate-400">Imagem principal<br/>da clínica</div>}</div></div><div className="grid grid-cols-3 gap-2 border-t border-slate-100 p-4">{["Implantes","Clareamento","Ortodontia"].map((x,i)=><div key={x} className="p-3 text-center text-[10px] font-bold" style={{ borderRadius: theme.radius, background: i===0?`${theme.primary}12`:i===1?`${theme.secondary}12`:`${theme.accent}12`, color: theme.text }}>{x}</div>)}</div></div></div>
      </section></aside>
    </div>
  </div>;
}

function Field({label,value,onChange}:{label:string;value:string;onChange:(v:string)=>void}) { return <label className="block"><span className="mb-2 block text-sm font-bold">{label}</span><input className="admin-input" value={value} onChange={e=>onChange(e.target.value)}/></label>; }
function SelectField({label,value,onChange,options}:{label:string;value:string;onChange:(v:string)=>void;options:string[]}) { return <label className="block"><span className="mb-2 block text-sm font-bold">{label}</span><select className="admin-input" value={value} onChange={e=>onChange(e.target.value)}>{options.map(o=><option key={o}>{o}</option>)}</select></label>; }
function ColorField({label,value,onChange}:{label:string;value:string;onChange:(v:string)=>void}) { return <label className="block rounded-xl border border-slate-200 p-3"><span className="mb-2 block text-xs font-bold text-slate-600">{label}</span><div className="flex items-center gap-2"><input type="color" value={value} onChange={e=>onChange(e.target.value)} className="h-10 w-12 cursor-pointer rounded border-0 bg-transparent"/><input className="min-w-0 flex-1 bg-transparent text-xs font-bold uppercase outline-none" value={value} onChange={e=>onChange(e.target.value)}/></div></label>; }
function UploadBox({label,preview,onFile}:{label:string;preview:string|null;onFile:(f:File|undefined)=>void}) { return <label className="cursor-pointer rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4"><span className="text-sm font-black">{label}</span><div className="mt-3 grid min-h-28 place-items-center overflow-hidden rounded-xl bg-white text-center text-xs text-slate-400">{preview?<img src={preview} alt={label} className="h-28 w-full object-cover"/>:<><Upload size={24}/><span className="mt-1">Clique para enviar</span></>}</div><input type="file" accept="image/*" className="hidden" onChange={e=>onFile(e.target.files?.[0])}/></label>; }
