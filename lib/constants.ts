/** Authors are people unless `kind` says otherwise; structured data uses it to pick Person or Organization. */
export type Author = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  kind?: "organization";
};

export const authors: Author[] = [
  {
    slug: "yusuf-baha-erarslan",
    name: "Yusuf Baha Erarslan",
    role: "Senior Software Developer",
    bio: "Full-stack developer specializing in AI-powered applications and scalable cloud architectures.",
    image: "/images/authors/yusuf-baha-erarslan.jpg",
  },
  {
    slug: "ercan-mungan",
    name: "Ercan Mungan",
    role: "Software Development Lead",
    bio: "Expert in distributed systems and DevOps practices with a focus on CI/CD pipelines.",
    image: "/images/authors/ercan-mungan.jpg",
  },
  {
    slug: "ahmet-furkan-gunes",
    name: "Ahmet Furkan Gunes",
    role: "Mechanical Engineer & Developer",
    bio: "Bridging mechanical engineering with software development through computational design and automation.",
    image: "/images/authors/ahmet-furkan-gunes.jpg",
  },
  {
    slug: "yusha-talha-kuralay",
    name: "Yusha Talha Kuralay",
    role: "Frontend Architect",
    bio: "Specializing in modern React applications and design system implementation.",
    image: "/images/authors/yusha-talha-kuralay.jpg",
  },
  {
    slug: "mertcan-tacyildiz",
    name: "Mertcan Tacyildiz",
    role: "Fullstack Developer",
    bio: "Full-stack developer at Poshet, working across the front end, the back end and everything that connects them.",
    image: "/images/authors/mertcan-tacyildiz.jpg",
  },
  {
    slug: "poshet-editorial",
    name: "Poshet Editorial",
    role: "Editorial team",
    bio: "News and practical guides from the Poshet studio, drafted with AI assistance from linked sources.",
    image: "/images/authors/poshet-editorial.jpg",
    kind: "organization",
  },
];
