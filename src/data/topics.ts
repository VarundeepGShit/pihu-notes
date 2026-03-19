export interface Topic {
  slug: string;
  name: string;
  emoji: string;
  pdfPath: string;
}

export interface Subject {
  slug: string;
  name: string;
  shortName: string;
  emoji: string;
  color: string;
  lightColor: string;
  topics: Topic[];
}

export const subjects: Subject[] = [
  {
    slug: "psm",
    name: "Community Medicine (PSM)",
    shortName: "PSM",
    emoji: "🏥",
    color: "#E91E8C",
    lightColor: "#FCE4EC",
    topics: [
      { slug: "epidemiology", name: "Epidemiology", emoji: "🔬", pdfPath: "/pdfs/psm/epidemiology.pdf" },
      { slug: "biostatistics", name: "Biostatistics", emoji: "📊", pdfPath: "/pdfs/psm/biostatistics.pdf" },
      { slug: "screening_tests", name: "Screening Tests", emoji: "🧪", pdfPath: "/pdfs/psm/screening_tests.pdf" },
      { slug: "national_health_programs", name: "National Health Programs", emoji: "🇮🇳", pdfPath: "/pdfs/psm/national_health_programs.pdf" },
      { slug: "environmental_health", name: "Environmental Health", emoji: "🌍", pdfPath: "/pdfs/psm/environmental_health.pdf" },
      { slug: "occupational_health", name: "Occupational Health", emoji: "⚒️", pdfPath: "/pdfs/psm/occupational_health.pdf" },
      { slug: "nutrition", name: "Nutrition", emoji: "🥗", pdfPath: "/pdfs/psm/nutrition.pdf" },
      { slug: "demography", name: "Demography", emoji: "📈", pdfPath: "/pdfs/psm/demography.pdf" },
      { slug: "health_indicators", name: "Health Indicators", emoji: "📋", pdfPath: "/pdfs/psm/health_indicators.pdf" },
      { slug: "health_system_india", name: "Health System in India", emoji: "🏛️", pdfPath: "/pdfs/psm/health_system_india.pdf" },
    ],
  },
  {
    slug: "ophthalmology",
    name: "Ophthalmology",
    shortName: "Ophthal",
    emoji: "👁️",
    color: "#7B1FA2",
    lightColor: "#F3E5F5",
    topics: [
      { slug: "anatomy_of_eye", name: "Anatomy of the Eye", emoji: "🧬", pdfPath: "/pdfs/ophthalmology/anatomy_of_eye.pdf" },
      { slug: "physiology_of_vision", name: "Physiology of Vision", emoji: "👀", pdfPath: "/pdfs/ophthalmology/physiology_of_vision.pdf" },
      { slug: "refraction_errors", name: "Refraction Errors", emoji: "👓", pdfPath: "/pdfs/ophthalmology/refraction_errors.pdf" },
      { slug: "cataract", name: "Cataract", emoji: "🔍", pdfPath: "/pdfs/ophthalmology/cataract.pdf" },
      { slug: "glaucoma", name: "Glaucoma", emoji: "💧", pdfPath: "/pdfs/ophthalmology/glaucoma.pdf" },
      { slug: "uveitis", name: "Uveitis", emoji: "🔴", pdfPath: "/pdfs/ophthalmology/uveitis.pdf" },
      { slug: "retinal_diseases", name: "Retinal Diseases", emoji: "🌈", pdfPath: "/pdfs/ophthalmology/retinal_diseases.pdf" },
      { slug: "squint", name: "Squint", emoji: "↔️", pdfPath: "/pdfs/ophthalmology/squint.pdf" },
      { slug: "ocular_trauma", name: "Ocular Trauma", emoji: "⚡", pdfPath: "/pdfs/ophthalmology/ocular_trauma.pdf" },
      { slug: "vitamin_a_deficiency", name: "Vitamin A Deficiency", emoji: "🥕", pdfPath: "/pdfs/ophthalmology/vitamin_a_deficiency.pdf" },
      { slug: "blindness_prevention", name: "Blindness Prevention", emoji: "🛡️", pdfPath: "/pdfs/ophthalmology/blindness_prevention.pdf" },
    ],
  },
  {
    slug: "ent",
    name: "ENT (Otorhinolaryngology)",
    shortName: "ENT",
    emoji: "👂",
    color: "#00838F",
    lightColor: "#E0F7FA",
    topics: [
      { slug: "ear_hearing_otitis_deafness", name: "Ear — Hearing, Otitis & Deafness", emoji: "👂", pdfPath: "/pdfs/ent/ear_hearing_otitis_deafness.pdf" },
      { slug: "nose_sinusitis_dns_epistaxis", name: "Nose — Sinusitis, DNS & Epistaxis", emoji: "👃", pdfPath: "/pdfs/ent/nose_sinusitis_dns_epistaxis.pdf" },
      { slug: "throat_tonsillitis_larynx", name: "Throat — Tonsillitis & Larynx", emoji: "🗣️", pdfPath: "/pdfs/ent/throat_tonsillitis_larynx.pdf" },
      { slug: "vertigo", name: "Vertigo", emoji: "🌀", pdfPath: "/pdfs/ent/vertigo.pdf" },
      { slug: "facial_nerve_palsy", name: "Facial Nerve Palsy", emoji: "😐", pdfPath: "/pdfs/ent/facial_nerve_palsy.pdf" },
      { slug: "tumors_ent", name: "Tumors of ENT", emoji: "🎗️", pdfPath: "/pdfs/ent/tumors_ent.pdf" },
      { slug: "airway_emergencies", name: "Airway Emergencies", emoji: "🚨", pdfPath: "/pdfs/ent/airway_emergencies.pdf" },
    ],
  },
  {
    slug: "forensic_medicine",
    name: "Forensic Medicine (FMT)",
    shortName: "FMT",
    emoji: "⚖️",
    color: "#C62828",
    lightColor: "#FFEBEE",
    topics: [
      { slug: "legal_procedures", name: "Legal Procedures", emoji: "📜", pdfPath: "/pdfs/forensic_medicine/legal_procedures.pdf" },
      { slug: "ipc_crpc_basics", name: "IPC & CrPC Basics", emoji: "⚖️", pdfPath: "/pdfs/forensic_medicine/ipc_crpc_basics.pdf" },
      { slug: "medical_ethics", name: "Medical Ethics", emoji: "🤝", pdfPath: "/pdfs/forensic_medicine/medical_ethics.pdf" },
      { slug: "identification", name: "Identification", emoji: "🔎", pdfPath: "/pdfs/forensic_medicine/identification.pdf" },
      { slug: "postmortem_changes", name: "Postmortem Changes", emoji: "⏰", pdfPath: "/pdfs/forensic_medicine/postmortem_changes.pdf" },
      { slug: "injuries_types_weapons", name: "Injuries — Types & Weapons", emoji: "🗡️", pdfPath: "/pdfs/forensic_medicine/injuries_types_weapons.pdf" },
      { slug: "asphyxia", name: "Asphyxia", emoji: "💨", pdfPath: "/pdfs/forensic_medicine/asphyxia.pdf" },
      { slug: "poisoning", name: "Poisoning", emoji: "☠️", pdfPath: "/pdfs/forensic_medicine/poisoning.pdf" },
      { slug: "sexual_offences", name: "Sexual Offences", emoji: "📋", pdfPath: "/pdfs/forensic_medicine/sexual_offences.pdf" },
      { slug: "age_estimation", name: "Age Estimation", emoji: "📏", pdfPath: "/pdfs/forensic_medicine/age_estimation.pdf" },
    ],
  },
  {
    slug: "clinical_postings",
    name: "Clinical Postings",
    shortName: "Clinical",
    emoji: "🩺",
    color: "#2E7D32",
    lightColor: "#E8F5E9",
    topics: [
      { slug: "case_taking_history", name: "Case Taking — History", emoji: "📝", pdfPath: "/pdfs/clinical_postings/case_taking_history.pdf" },
      { slug: "basic_examination_skills", name: "Basic Examination Skills", emoji: "🔦", pdfPath: "/pdfs/clinical_postings/basic_examination_skills.pdf" },
      { slug: "community_visits_field_surveys", name: "Community Visits & Field Surveys", emoji: "🏘️", pdfPath: "/pdfs/clinical_postings/community_visits_field_surveys.pdf" },
      { slug: "public_health_programs_practical", name: "Public Health Programs — Practical", emoji: "💉", pdfPath: "/pdfs/clinical_postings/public_health_programs_practical.pdf" },
    ],
  },
];

export const allTopics = subjects.flatMap((s) =>
  s.topics.map((t) => ({ ...t, subject: s.slug, subjectName: s.name }))
);

export const totalTopics = allTopics.length;
