export type Project = {
  slug: string;
  title: string;
  client: string;
  category: "Iklan" | "Video" | "Podcast" | "Musik Original";
  year: string;
  description: string;
  youtubeId: string;
  // controls the visual footprint in the asymmetric portfolio grid
  size: "lg" | "md" | "sm";
};

// NOTE: placeholder content — ganti title/client/description/youtubeId
// dengan project asli kamu. youtubeId di bawah masih pakai video contoh.
export const projects: Project[] = [
  {
    slug: "senja-di-ufuk",
    title: "Senja di Ufuk",
    client: "Kopi Kenangan",
    category: "Iklan",
    year: "2025",
    description:
      "Original scoring untuk campaign TVC nasional — nuansa hangat, orkestrasi minim, fokus pada emosi.",
    youtubeId: "aqz-KE-bpKQ",
    size: "lg",
  },
  {
    slug: "langkah-pertama",
    title: "Langkah Pertama",
    client: "Traveloka",
    category: "Video",
    year: "2025",
    description: "Sound design & scoring untuk brand film durasi panjang.",
    youtubeId: "aqz-KE-bpKQ",
    size: "md",
  },
  {
    slug: "ruang-dengar",
    title: "Ruang Dengar",
    client: "Ruang Dengar Podcast",
    category: "Podcast",
    year: "2024",
    description: "Theme song & musik latar untuk podcast seri dokumenter.",
    youtubeId: "aqz-KE-bpKQ",
    size: "sm",
  },
  {
    slug: "arah-angin",
    title: "Arah Angin",
    client: "Karya Pribadi",
    category: "Musik Original",
    year: "2024",
    description: "Komposisi instrumental independen, dirilis di semua platform streaming.",
    youtubeId: "aqz-KE-bpKQ",
    size: "sm",
  },
  {
    slug: "jejak-kota",
    title: "Jejak Kota",
    client: "Bank Mandiri",
    category: "Iklan",
    year: "2024",
    description: "Scoring untuk campaign digital multi-platform, versi 15s & 60s.",
    youtubeId: "aqz-KE-bpKQ",
    size: "md",
  },
  {
    slug: "malam-tanpa-nama",
    title: "Malam Tanpa Nama",
    client: "Netflix Indonesia",
    category: "Video",
    year: "2023",
    description: "Original score untuk short film, tayang di festival film lokal.",
    youtubeId: "aqz-KE-bpKQ",
    size: "lg",
  },
  {
    slug: "suara-dari-jauh",
    title: "Suara dari Jauh",
    client: "Karya Pribadi",
    category: "Podcast",
    year: "2023",
    description: "Sound identity & scoring untuk podcast wawancara mingguan.",
    youtubeId: "aqz-KE-bpKQ",
    size: "sm",
  },
];

export const categories = [
  "Semua",
  "Iklan",
  "Video",
  "Podcast",
  "Musik Original",
] as const;
