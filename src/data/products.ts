import type { Product } from "../types";

export const products: Product[] = [
  {
    id: "5",
    name: "Exterior Paint Set",
    price: 45.99,
    rating: 3.5,
    category: "Paint & Coatings",
    imageUrl:
      "https://images.unsplash.com/photo-1673297821205-e0575bbc2ab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGNhbnMlMjBjb25zdHJ1Y3Rpb24lMjBzdXBwbGllc3xlbnwxfHx8fDE3NzExODUyNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1673297821205-e0575bbc2ab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGNhbnMlMjBjb25zdHJ1Y3Rpb24lMjBzdXBwbGllc3xlbnwxfHx8fDE3NzExODUyNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1673297821205-e0575bbc2ab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGNhbnMlMjBjb25zdHJ1Y3Rpb24lMjBzdXBwbGllc3xlbnwxfHx8fDE3NzExODUyNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1673297821205-e0575bbc2ab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGNhbnMlMjBjb25zdHJ1Y3Rpb24lMjBzdXBwbGllc3xlbnwxfHx8fDE3NzExODUyNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    description:
      "Professional-grade exterior paint set designed to withstand harsh weather conditions. This premium paint offers excellent coverage, durability, and color retention. Perfect for residential and commercial applications.",
    technicalSpecs: [
      { label: "VOLUME", value: "5 gallons total" },
      { label: "TYPE", value: "100% Acrylic Latex" },
      { label: "COVERAGE", value: "400 sq ft per gallon" },
      { label: "FINISH", value: "Satin" },
      { label: "DRY TIME", value: "2-4 hours" },
      { label: "COLORS", value: "Assorted neutral tones" },
    ],
  },
  {
    id: "2",
    name: "Plywood Sheets",
    price: 52.99,
    rating: 4.5,
    category: "Wood & Lumber",
    imageUrl:
      "https://images.unsplash.com/photo-1704167674713-649193461719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHl3b29kJTIwc2hlZXRzJTIwY29uc3RydWN0aW9uJTIwbWF0ZXJpYWx8ZW58MXx8fHwxNzcxMDczNjEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1704167674713-649193461719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHl3b29kJTIwc2hlZXRzJTIwY29uc3RydWN0aW9uJTIwbWF0ZXJpYWx8ZW58MXx8fHwxNzcxMDczNjEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1704167674713-649193461719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHl3b29kJTIwc2hlZXRzJTIwY29uc3RydWN0aW9uJTIwbWF0ZXJpYWx8ZW58MXx8fHwxNzcxMDczNjEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1704167674713-649193461719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHl3b29kJTIwc2hlZXRzJTIwY29uc3RydWN0aW9uJTIwbWF0ZXJpYWx8ZW58MXx8fHwxNzcxMDczNjEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    description:
      "Versatile construction-grade plywood sheets suitable for a wide range of applications. These sheets are engineered for strength and dimensional stability, perfect for subfloors, roofing, walls, and general construction.",
    technicalSpecs: [
      { label: "DIMENSIONS", value: "4' x 8'" },
      { label: "THICKNESS", value: "3/4 inch" },
      { label: "GRADE", value: "CDX" },
      { label: "PLIES", value: "7-ply construction" },
      { label: "EXPOSURE", value: "Exterior grade" },
      { label: "VENEER", value: "Softwood" },
    ],
  },
  {
    id: "1",
    name: "Premium Cement Bags",
    price: 24.99,
    rating: 5.0,
    category: "Cement & Concrete",
    imageUrl:
      "https://images.unsplash.com/photo-1718117075248-3d3c3cd65264?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBjZW1lbnQlMjBiYWdzJTIwd2FyZWhvdXNlfGVufDF8fHx8MTc3MTE4NDE1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1718117075248-3d3c3cd65264?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBjZW1lbnQlMjBiYWdzJTIwd2FyZWhvdXNlfGVufDF8fHx8MTc3MTE4NDE1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1718117075248-3d3c3cd65264?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBjZW1lbnQlMjBiYWdzJTIwd2FyZWhvdXNlfGVufDF8fHx8MTc3MTE4NDE1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1718117075248-3d3c3cd65264?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBjZW1lbnQlMjBiYWdzJTIwd2FyZWhvdXNlfGVufDF8fHx8MTc3MTE4NDE1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    description:
      "High-quality Portland cement bags designed for heavy-duty construction projects. Our premium cement offers exceptional strength, durability, and workability. Ideal for foundations, structural work, and general concrete applications. Each bag contains precisely measured and tested cement that meets international quality standards.",
    technicalSpecs: [
      { label: "WEIGHT", value: "50 lbs per bag" },
      { label: "TYPE", value: "Portland Cement Type I/II" },
      { label: "COMPRESSIVE STRENGTH", value: "3500 PSI at 28 days" },
      { label: "SETTING TIME", value: "2-4 hours initial set" },
      { label: "COVERAGE", value: "Approximately 0.45 cubic feet" },
      { label: "STORAGE LIFE", value: "6 months in sealed bag" },
    ],
  },
  {
    id: "3",
    name: "Premium Lumber Planks",
    price: 89.99,
    rating: 4.5,
    category: "Wood & Lumber",
    imageUrl:
      "https://images.unsplash.com/photo-1764025390519-1ccc15d719a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMG1hdGVyaWFscyUyMHdvb2QlMjBsdW1iZXIlMjBwbGFua3N8ZW58MXx8fHwxNzcxMTg1MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1764025390519-1ccc15d719a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMG1hdGVyaWFscyUyMHdvb2QlMjBsdW1iZXIlMjBwbGFua3N8ZW58MXx8fHwxNzcxMTg1MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1764025390519-1ccc15d719a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMG1hdGVyaWFscyUyMHdvb2QlMjBsdW1iZXIlMjBwbGFua3N8ZW58MXx8fHwxNzcxMTg1MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1764025390519-1ccc15d719a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMG1hdGVyaWFscyUyMHdvb2QlMjBsdW1iZXIlMjBwbGFua3N8ZW58MXx8fHwxNzcxMTg1MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    description:
      "Premium kiln-dried lumber planks perfect for all your woodworking and construction needs. These high-grade wooden planks are carefully selected for strength and appearance. Suitable for framing, decking, furniture making, and various carpentry projects.",
    technicalSpecs: [
      { label: "DIMENSIONS", value: "2\" x 6\" x 8'" },
      { label: "WOOD TYPE", value: "Douglas Fir" },
      { label: "GRADE", value: "Premium Select" },
      { label: "MOISTURE CONTENT", value: "15% kiln-dried" },
      { label: "TREATMENT", value: "Pressure-treated option available" },
      { label: "QUANTITY", value: "Sold individually" },
    ],
  },
  {
    id: "4",
    name: "Red Clay Bricks",
    price: 0.89,
    rating: 4.0,
    category: "Bricks & Blocks",
    imageUrl:
      "https://images.unsplash.com/photo-1761358270922-5a4df4ab9782?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBicmlja3MlMjByZWQlMjBzdGFja3xlbnwxfHx8fDE3NzExODUyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1761358270922-5a4df4ab9782?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBicmlja3MlMjByZWQlMjBzdGFja3xlbnwxfHx8fDE3NzExODUyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1761358270922-5a4df4ab9782?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBicmlja3MlMjByZWQlMjBzdGFja3xlbnwxfHx8fDE3NzExODUyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1761358270922-5a4df4ab9782?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBicmlja3MlMjByZWQlMjBzdGFja3xlbnwxfHx8fDE3NzExODUyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    description:
      "Traditional red clay bricks manufactured to the highest standards. These durable bricks are perfect for walls, patios, pathways, and architectural features. Fire-hardened for exceptional strength and weather resistance.",
    technicalSpecs: [
      { label: "DIMENSIONS", value: "8\" x 4\" x 2.25\"" },
      { label: "MATERIAL", value: "Fire-hardened clay" },
      { label: "COMPRESSIVE STRENGTH", value: "3000+ PSI" },
      { label: "WATER ABSORPTION", value: "Less than 8%" },
      { label: "COLOR", value: "Classic red" },
      { label: "WEIGHT", value: "4.5 lbs per brick" },
    ],
  },
  {
    id: "6",
    name: "Steel I-Beams",
    price: 349.99,
    rating: 5.0,
    category: "Steel & Metal",
    imageUrl:
      "https://images.unsplash.com/photo-1707236527163-bd3478178466?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGJlYW1zJTIwY29uc3RydWN0aW9uJTIwbWV0YWx8ZW58MXx8fHwxNzcxMTg1MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1707236527163-bd3478178466?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGJlYW1zJTIwY29uc3RydWN0aW9uJTIwbWV0YWx8ZW58MXx8fHwxNzcxMTg1MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1707236527163-bd3478178466?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGJlYW1zJTIwY29uc3RydWN0aW9uJTIwbWV0YWx8ZW58MXx8fHwxNzcxMTg1MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1707236527163-bd3478178466?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGJlYW1zJTIwY29uc3RydWN0aW9uJTIwbWV0YWx8ZW58MXx8fHwxNzcxMTg1MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    description:
      "Heavy-duty structural steel I-beams engineered for maximum load-bearing capacity. These professional-grade beams are essential for large construction projects, building frames, and structural support applications.",
    technicalSpecs: [
      { label: "LENGTH", value: "20 feet" },
      { label: "PROFILE", value: "W10x49" },
      { label: "MATERIAL", value: "ASTM A992 Grade 50 Steel" },
      { label: "WEIGHT", value: "980 lbs" },
      { label: "YIELD STRENGTH", value: "50 ksi" },
      { label: "FINISH", value: "Mill finish" },
    ],
  },
];
