import { FaAws, FaMicrosoft } from "react-icons/fa";
import {
  LuCircuitBoard,
  LuCpu,
  LuHardDrive,
  LuMemoryStick,
  LuMonitor,
  LuNetwork,
} from "react-icons/lu";
import { SiDatacamp, SiGooglecloud, SiJunipernetworks, SiRedhat } from "react-icons/si";
import {
  bcaLogo,
  citilinkLogo,
  datacommLogo,
  diskolaLogo,
  dotLogo,
  superbankLogo,
} from "~/assets/intern-company";
import type { TypeLabSpec } from "~/components/home/Infrastructure";
import type { GroupName, TypeInterestGroup } from "~/components/home/InterestGroups";
import type { TypePartner } from "~/components/home/Partners";
import type { TypeSenior } from "~/components/home/Seniors";
import type { TypeMember } from "~/components/memberLists/Member";

export const interestGroups: TypeInterestGroup[] = [
  {
    name: "Software Development",
    description:
      "Master modern software engineering by building scalable applications and intelligent systems. From web platforms to AI integration, learn to solve real-world problems with code.",
  },
  {
    name: "Cloud and Infrastructure",
    description:
      "Learn to bridge the gap between development and operations. Develop expertise in managing and securing computer systems and networks. Learn essential skills for modern IT infrastructure.",
  },
];

export const getGroupDetails = (clubName: GroupName): string[] => {
  const details: Record<GroupName, string[]> = {
    "Software Development": [
      "Web Development (Frontend & Backend)",
      "API Development & Integration",
      "Mobile App Development",
      "Machine Learning & AI Implementation",
      "Data Analysis & Visualization",
    ],
    "Cloud and Infrastructure": [
      "Cloud Native & Microservices",
      "Computer Networks & Security",
      "Operating Systems (Linux/Unix)",
      "DevOps & CI/CD Pipelines",
      "System Administration",
    ],
  };
  return details[clubName];
};

export const partnerships: TypePartner[] = [
  {
    name: "DataCamp",
    icon: SiDatacamp,
    description: "Official learning partner for data science education",
  },
  {
    name: "Juniper Networks",
    icon: SiJunipernetworks,
    description: "Infrastructure and networking solutions partner",
  },
  {
    name: "Red Hat",
    icon: SiRedhat,
    description: "Open source and cloud technology partner",
  },
  {
    name: "Microsoft",
    icon: FaMicrosoft,
    description: "Cloud and development tools partner",
  },
  {
    name: "AWS",
    icon: FaAws,
    description: "Cloud infrastructure partner",
  },
  {
    name: "Google Cloud",
    icon: SiGooglecloud,
    description: "Cloud and AI technology partner",
  },
];

export const labSpecs: TypeLabSpec[] = [
  {
    label: "CPU Cores",
    value: "64 Cores",
    detail: "AMD EPYC 7763, Intel i7, Intel i9",
    icon: LuCpu,
  },
  {
    label: "Memory",
    value: "512 GB",
    detail: "DDR4 ECC",
    icon: LuMemoryStick,
  },
  {
    label: "GPU",
    value: "NVIDIA RTX 3050, 4080",
    detail: "80 GB VRAM",
    icon: LuCircuitBoard,
  },
  {
    label: "Storage",
    value: "20 TB",
    detail: "NVMe SSD, HDD SATA",
    icon: LuHardDrive,
  },
  {
    label: "Network",
    value: "1 Gbps",
    detail: "Dedicated uplink",
    icon: LuNetwork,
  },
  {
    label: "Workstations",
    value: "12 Units",
    detail: "Available 24/7",
    icon: LuMonitor,
  },
];

export const seniors: TypeSenior[] = [
  {
    name: "Naufal Farras Pratama",
    role: "Backend Engineer Intern",
    company: "Superbank",
    logo: superbankLogo,
    prodi: "Teknik Informatika",
    batch: "2022",
  },
  {
    name: "Muhammad Istiqlal",
    role: "Cloud Development Engineer",
    company: "Datacomm Diangraha",
    logo: datacommLogo,
    prodi: "Teknik Informatika",
    batch: "2022",
  },
  {
    name: "Helmy Luqmanulhakim",
    role: "Application Developer",
    company: "Bank Central Asia",
    logo: bcaLogo,
    prodi: "Teknik Informatika",
    batch: "2022",
  },
  {
    name: "Cornelius Louis Nathan",
    role: "Software Engineer",
    company: "Citilink",
    logo: citilinkLogo,
    prodi: "Teknik Informatika",
    batch: "2023",
  },
  {
    name: "Afrizal Luthfi Eka Arnatha",
    role: "Frontend Engineer",
    company: "PT Era Baru Digitama",
    logo: diskolaLogo,
    prodi: "Teknik Informatika",
    batch: "2023",
  },
  {
    name: "Rayhan Hendra Atmadja",
    role: "Backend Engineer",
    company: "DOT Indonesia",
    logo: dotLogo,
    prodi: "Teknik Informatika",
    batch: "2023",
  },
];

export const members: TypeMember[] = [
  {
    name: "Muhammad Istiqlal",
    role: "Cloud Infrastructure Lead",
    prodi: "Teknik Informatika",
    batch: "2022",
  },
  {
    name: "Mohammad Ariffansyah",
    role: "Software Development Lead",
    prodi: "Teknik Informatika",
    batch: "2024",
  },
  {
    name: "Helmy Luqmanulhakim",
    role: "Software Development Member",
    prodi: "Teknik Informatika",
    batch: "2022",
  },
  {
    name: "Ahmd Mufahras Li Alfazh Assardew",
    role: "Software Development Member",
    prodi: "Teknik Informatika",
    batch: "2022",
  },
  {
    name: "Yunus Dhanzky Handitra",
    role: "Software Development Member",
    prodi: "Teknik Informatika",
    batch: "2022",
  },
  {
    name: "Vincent Louis Fernando",
    role: "Software Development Member",
    prodi: "Teknik Informatika",
    batch: "2022",
  },
  {
    name: "Dyan Dananjaya Tejo Pamungkas",
    role: "Software Development Member",
    prodi: "Teknik Informatika",
    batch: "2022",
  },
  {
    name: "Rayhan Hendra Atmadja",
    role: "Software Development Member",
    prodi: "Teknik Informatika",
    batch: "2023",
  },
  {
    name: "Cornelius Louis Nathan",
    role: "Software Development Member",
    prodi: "Teknik Informatika",
    batch: "2023",
  },
  {
    name: "Muhammad Nur Azhar Dhiyaulhaq",
    role: "Cloud Infrastructure Member",
    prodi: "Teknik Informatika",
    batch: "2023",
  },
  {
    name: "Afrizal Luthfi Eka Arnatha",
    role: "Software Development Member",
    prodi: "Teknik Informatika",
    batch: "2023",
  },
  {
    name: "Fakthur Rozaq",
    role: "Software Development Member",
    prodi: "Teknik Informatika",
    batch: "2024",
  },
  {
    name: "I Made Nandana Devadatta Giri",
    role: "Software Development Member",
    prodi: "Teknik Informatika",
    batch: "2024",
  },
  {
    name: "Amira Najihah Fadri Putri",
    role: "Software Development Member",
    prodi: "Teknik Informatika",
    batch: "2024",
  },
  {
    name: "Sulthania Auliya Afandi",
    role: "Software Development Member",
    prodi: "Teknik Informatika",
    batch: "2024",
  },
  {
    name: "Muhromin",
    role: "Software Development Member",
    prodi: "Teknik Informatika",
    batch: "2025",
  },
  {
    name: "Johana Putri Adelia",
    role: "Software Development Member",
    prodi: "Teknik Informatika",
    batch: "2025",
  },
  {
    name: "Nailah Salsabila Ramadhani Kusnadi",
    role: "Cloud Infrastructure and Software Development Member",
    prodi: "Teknik Informatika",
    batch: "2025",
  },
  {
    name: "Aisyah Miyuki Anastasya Syafila",
    role: "Software Development Member",
    prodi: "Teknik Informatika",
    batch: "2025",
  },
  {
    name: "Krishna Surya Dewata",
    role: "Cloud Infrastructure Member",
    prodi: "Teknik Informatika",
    batch: "2025",
  },
  {
    name: "Amelia Prasa Agustin",
    role: "Cloud Infrastructure Member",
    prodi: "Teknik Informatika",
    batch: "2025",
  },
  {
    name: "Rosa Anjelita",
    role: "Software Development Member",
    prodi: "Teknik Informatika",
    batch: "2025",
  },
  {
    name: "Ardiansyah Dhevashidqi Madany",
    role: "Software Development Member",
    prodi: "Teknik Informatika",
    batch: "2025",
  },
  {
    name: "Ahmad Jouwdad Aufa Robbani",
    role: "Software Development Member",
    prodi: "Teknik Informatika",
    batch: "2025",
  },
  {
    name: "Debora Angelika Purba",
    role: "Cloud Infrastructure Member",
    prodi: "Teknik Informatika",
    batch: "2025",
  },
  {
    name: "Panji Rafi Musyafah",
    role: "Cloud Infrastructure Member",
    prodi: "Teknik Informatika",
    batch: "2025",
  },
];
