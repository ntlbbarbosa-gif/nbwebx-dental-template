export type ClinicTheme = {
  clinicName: string;
  tagline: string;
  logoText: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  headingFont: string;
  bodyFont: string;
  radius: number;
  whatsapp: string;
  phone: string;
  address: string;
};

export const defaultClinicTheme: ClinicTheme = {
  clinicName: "Sorriso Vida Odontologia",
  tagline: "Sorrisos que transformam vidas",
  logoText: "SORRISO VIDA",
  primary: "#0EA5E9",
  secondary: "#10B981",
  accent: "#F59E0B",
  background: "#F8FAFC",
  text: "#0F172A",
  headingFont: "Poppins",
  bodyFont: "Inter",
  radius: 16,
  whatsapp: "5521999999999",
  phone: "(21) 99999-9999",
  address: "Rio de Janeiro - RJ",
};
