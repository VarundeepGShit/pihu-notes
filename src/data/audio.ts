import { subjects } from "./topics";

export interface Episode {
  slug: string;
  title: string;
  emoji: string;
  subjectSlug: string;
  subjectName: string;
  subjectColor: string;
  audioPath: string;
  description: string;
}

const descriptions: Record<string, string> = {
  // PSM
  epidemiology: "Pihu tracks diseases like a detective — magnifying glass and all!",
  biostatistics: "Numbers don't lie, but Pihu makes them way less boring.",
  screening_tests: "Sensitivity, specificity… Pihu screens you before the exam does.",
  national_health_programs: "Every government scheme explained — Pihu style, with desi flair.",
  environmental_health: "Pihu fights pollution, one funny story at a time.",
  occupational_health: "Factory hazards? Pihu's got her hard hat on for this one.",
  nutrition: "Pihu explains why your hostel food is basically a deficiency diet.",
  demography: "Population pyramids, but make it a bedtime story.",
  health_indicators: "IMR, MMR, and other scary abbreviations — decoded by Pihu.",
  health_system_india: "PHC, CHC, sub-centres… Pihu maps India's health maze for you.",

  // Ophthalmology
  anatomy_of_eye: "Pihu dissects the eyeball so you don't have to squint at diagrams.",
  physiology_of_vision: "Rods, cones, and Pihu's colourful take on seeing things.",
  refraction_errors: "Myopia, hypermetropia — Pihu finally explains why you need glasses.",
  cataract: "Cloudy lens, clear explanation — Pihu's cataract crash course.",
  glaucoma: "Pressure's on! Pihu tackles the silent thief of sight.",
  uveitis: "Red, painful eyes — no, it's not from studying too much.",
  retinal_diseases: "Pihu takes you on a retinal road trip — detachments included.",
  squint: "Cross-eyed confusion? Pihu straightens it all out.",
  ocular_trauma: "Pihu's eye injury survival guide — don't poke around!",
  vitamin_a_deficiency: "Eat your carrots, or Pihu will lecture you about Bitot's spots.",
  blindness_prevention: "Pihu's mission: save every eye before the exam saves none.",

  // ENT
  ear_hearing_otitis_deafness: "Pihu whispers ENT secrets — but makes sure you hear them!",
  nose_sinusitis_dns_epistaxis: "Sneezes, bleeds, and deviated septums — Pihu nose it all.",
  throat_tonsillitis_larynx: "Pihu clears her throat and spills all the larynx tea.",
  vertigo: "The room is spinning — or is it just Pihu's storytelling?",
  facial_nerve_palsy: "Pihu can't keep a straight face while teaching Bell's palsy.",
  tumors_ent: "Pihu hunts ENT tumors — no nasopharynx left unchecked.",
  airway_emergencies: "Choking? Pihu to the rescue — tracheostomy tales included!",

  // Forensic Medicine
  legal_procedures: "Pihu goes to court — objection overruled, learning sustained.",
  ipc_crpc_basics: "Law sections that even Pihu had to read twice — simplified!",
  medical_ethics: "Pihu's moral compass is pointing straight at your exam.",
  identification: "Fingerprints, dental records — Pihu plays forensic detective.",
  postmortem_changes: "Rigor mortis and friends — Pihu's spookiest episode yet.",
  injuries_types_weapons: "Blunt, sharp, firearm — Pihu covers every wound with flair.",
  asphyxia: "Pihu holds her breath to teach you all types of asphyxia.",
  poisoning: "Pihu sips chai while explaining cyanide — don't worry, it's safe.",
  sexual_offences: "Sensitive topic, handled with Pihu's usual care and clarity.",
  age_estimation: "Pihu guesses your bone age — spoiler: she's always right.",

  // Clinical Postings
  case_taking_history: "Pihu interviews a patient — plot twist: it's hilarious.",
  basic_examination_skills: "Pihu picks up a stethoscope and teaches you to actually use it.",
  community_visits_field_surveys: "Pihu goes to the village — field survey adventure mode ON.",
  public_health_programs_practical: "Vaccines, camps, and Pihu's hands-on public health diary.",
};

export const episodes: Episode[] = subjects.flatMap((subject) =>
  subject.topics.map((topic) => ({
    slug: topic.slug,
    title: topic.name,
    emoji: topic.emoji,
    subjectSlug: subject.slug,
    subjectName: subject.shortName,
    subjectColor: subject.color,
    audioPath: `/audio/${subject.slug}/${topic.slug}.mp3`,
    description: descriptions[topic.slug] || "Pihu tells you everything you need to know!",
  }))
);

export const totalEpisodes = episodes.length;
