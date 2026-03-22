// ============================================================
// Clinical Cases for Pihu's Study Platform
// 15 interactive MBBS 3rd-year exam-focused clinical scenarios
// ============================================================

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface CaseChoice {
  id: string;
  text: string;
  isCorrect: boolean;
  pihuFeedback: string;
  nextStepId: string | null;
}

export interface CaseStep {
  id: string;
  type: 'presentation' | 'investigation' | 'diagnosis' | 'treatment' | 'outcome';
  narrative: string;
  pihuComment: string;
  choices: CaseChoice[];
}

export interface ClinicalCase {
  id: string;
  title: string;
  emoji: string;
  subjectSlug: string;
  topicSlugs: string[];
  difficulty: Difficulty;
  estimatedMinutes: number;
  patientSummary: string;
  steps: CaseStep[];
  totalScore: number;
}

// ─────────────────────────────────────────────────────────────
// CASE 1 — The Farmer Who Couldn't See
// ─────────────────────────────────────────────────────────────
const farmerVision: ClinicalCase = {
  id: 'farmer-vision',
  title: "The Farmer Who Couldn't See",
  emoji: '👨‍🌾',
  subjectSlug: 'ophthalmology',
  topicSlugs: ['glaucoma', 'blindness_prevention'],
  difficulty: 'easy',
  estimatedMinutes: 5,
  patientSummary:
    'A 55-year-old farmer from rural Punjab presents with gradual painless loss of peripheral vision over 6 months. He noticed bumping into things on the sides.',
  totalScore: 40,
  steps: [
    {
      id: 'fv-s1',
      type: 'presentation',
      narrative:
        'Harpal Singh, 55, walks into the eye OPD. He says, "Doctor sahib, mujhe sides ka dikhna band ho raha hai. Khet mein kaam karte waqt cheezein takra jaati hain." He has no pain, no redness. His family history reveals his father also lost vision in old age.',
      pihuComment:
        "Ooh Sammy, painless progressive loss of peripheral vision in an older patient? This is a CLASSIC exam scenario! Think about what affects the visual field from the sides...",
      choices: [
        {
          id: 'fv-s1-a',
          text: 'Check visual acuity and perform slit-lamp examination with tonometry',
          isCorrect: true,
          pihuFeedback:
            "Yesss Sammy! Tonometry is KEY here. When you hear peripheral vision loss, your brain should scream GLAUCOMA. And tonometry measures intraocular pressure (IOP) -- that's the first thing to check! Let's see what we find...",
          nextStepId: 'fv-s2',
        },
        {
          id: 'fv-s1-b',
          text: 'Order an MRI brain to rule out pituitary tumor',
          isCorrect: false,
          pihuFeedback:
            "Hold on Sammy! Pituitary tumors cause bitemporal hemianopia -- that's a specific pattern. This patient is losing peripheral vision all around, not just temporal sides. Plus, always do basic eye examination first before jumping to expensive imaging! Start simple, na?",
          nextStepId: null,
        },
        {
          id: 'fv-s1-c',
          text: 'Prescribe reading glasses and ask him to follow up in 3 months',
          isCorrect: false,
          pihuFeedback:
            "Nahi nahi Sammy! Glasses fix refractive errors, not peripheral vision loss. You can't just send someone home when they're bumping into things! This could be something serious that needs urgent attention. Always investigate first!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'fv-s2',
      type: 'investigation',
      narrative:
        'Slit-lamp exam shows a deep anterior chamber with open angles. Tonometry reveals IOP of 28 mmHg in the right eye and 30 mmHg in the left (normal: 10-21 mmHg). Fundoscopy shows a cup-to-disc ratio of 0.8 bilaterally. What investigation will confirm the diagnosis and map the damage?',
      pihuComment:
        "IOP is raised, cup-to-disc ratio is increased... we're building the classic picture! Now we need to document the field loss. Think Sammy -- what's the gold standard for mapping visual fields?",
      choices: [
        {
          id: 'fv-s2-a',
          text: 'Fluorescein angiography',
          isCorrect: false,
          pihuFeedback:
            "Nope! Fluorescein angiography is for retinal vascular diseases like diabetic retinopathy and ARMD. We need to MAP the visual field loss here, not look at blood vessels!",
          nextStepId: null,
        },
        {
          id: 'fv-s2-b',
          text: 'Humphrey visual field perimetry (automated perimetry)',
          isCorrect: true,
          pihuFeedback:
            "PERFECT! Humphrey automated perimetry is the gold standard for detecting and monitoring glaucomatous field loss. Remember for exams: it shows arcuate scotoma, nasal step, and eventually tunnel vision in advanced cases! This one's a gift question if you remember our notes!",
          nextStepId: 'fv-s3',
        },
        {
          id: 'fv-s2-c',
          text: 'OCT (Optical Coherence Tomography) only',
          isCorrect: false,
          pihuFeedback:
            "OCT is great for measuring retinal nerve fiber layer thickness and IS used in glaucoma workup, but the question asks about mapping the field damage. Perimetry is the answer for visual field assessment! OCT is supportive, not the primary field test.",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'fv-s3',
      type: 'diagnosis',
      narrative:
        'Perimetry reveals bilateral arcuate scotomas with nasal steps. Combined with raised IOP, increased cup-to-disc ratio, and open angles on gonioscopy -- what is your diagnosis?',
      pihuComment:
        "All the pieces are falling into place! Raised IOP + open angles + cupping + field loss = ? Come on Sammy, this should be automatic by now!",
      choices: [
        {
          id: 'fv-s3-a',
          text: 'Primary Open Angle Glaucoma (POAG)',
          isCorrect: true,
          pihuFeedback:
            "BINGO! Primary Open Angle Glaucoma -- the silent thief of sight! EXAM PEARL: POAG is the most common type of glaucoma. It's chronic, bilateral, painless with open angles. Remember the triad: raised IOP + optic disc cupping + visual field defects. Write this in your notes!",
          nextStepId: 'fv-s4',
        },
        {
          id: 'fv-s3-b',
          text: 'Acute Angle Closure Glaucoma',
          isCorrect: false,
          pihuFeedback:
            "No way Sammy! Angle closure glaucoma presents with ACUTE symptoms -- severe pain, red eye, halos around lights, nausea. This patient has had gradual painless loss over months with OPEN angles on gonioscopy. Totally different presentation!",
          nextStepId: null,
        },
        {
          id: 'fv-s3-c',
          text: 'Normal Tension Glaucoma',
          isCorrect: false,
          pihuFeedback:
            "Close, but no! Normal Tension Glaucoma has cupping and field loss but IOP is within normal range (less than 21 mmHg). Our patient has IOP of 28-30! That's clearly elevated. Read the numbers carefully in exams!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'fv-s4',
      type: 'treatment',
      narrative:
        'You diagnose POAG. The patient asks what treatment you will start. What is the first-line medical management?',
      pihuComment:
        "Treatment time! Remember, in POAG we start with medical management first. Think about the drug that reduces aqueous humor production AND is first-line... it's a beta blocker situation!",
      choices: [
        {
          id: 'fv-s4-a',
          text: 'Topical Timolol 0.5% eye drops twice daily',
          isCorrect: true,
          pihuFeedback:
            "YES! Timolol (a beta-blocker) is the GOLD STANDARD first-line treatment for POAG. It reduces aqueous humor production. EXAM TIP: Can also add Latanoprost (prostaglandin analog) which increases uveoscleral outflow. Contraindicated in asthma patients -- that's a favorite MCQ trap! Sammy, you nailed it!",
          nextStepId: null,
        },
        {
          id: 'fv-s4-b',
          text: 'Immediate trabeculectomy surgery',
          isCorrect: false,
          pihuFeedback:
            "Arre Sammy, surgery is not first-line for POAG! We always try medical management first. Trabeculectomy is reserved for cases not responding to maximum medical therapy. Step-wise approach: Drugs first, laser next (ALT/SLT), surgery last!",
          nextStepId: null,
        },
        {
          id: 'fv-s4-c',
          text: 'Oral acetazolamide 250mg four times daily long-term',
          isCorrect: false,
          pihuFeedback:
            "Acetazolamide (a carbonic anhydrase inhibitor) CAN lower IOP, but oral long-term use has too many side effects -- metabolic acidosis, kidney stones, tingling. It's used for acute attacks, not as maintenance therapy for POAG. Topical drops are the way to go!",
          nextStepId: null,
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// CASE 2 — Blurred Vision After Diwali
// ─────────────────────────────────────────────────────────────
const diwaliEyes: ClinicalCase = {
  id: 'diwali-eyes',
  title: 'Blurred Vision After Diwali',
  emoji: '🎆',
  subjectSlug: 'ophthalmology',
  topicSlugs: ['ocular_trauma', 'anatomy_of_eye'],
  difficulty: 'medium',
  estimatedMinutes: 6,
  patientSummary:
    'A 19-year-old college student presents to the emergency department on Diwali night with sudden pain and blurred vision in the right eye after a firecracker exploded near his face.',
  totalScore: 50,
  steps: [
    {
      id: 'de-s1',
      type: 'presentation',
      narrative:
        'Ravi, 19, is brought to the ER by his friends. His right eye is swollen, tearing profusely, and he can barely open it. He says, "A sutli bomb burst right in front of me!" You see periorbital ecchymosis, lid edema, and subconjunctival hemorrhage. Visual acuity in the right eye is 6/60. What is your immediate first step?',
      pihuComment:
        "Diwali emergency case, Sammy! Firecracker injuries are SUPER high-yield for exams. Stay calm and think systematically -- ABC of trauma, then eyes. What do we do first?",
      choices: [
        {
          id: 'de-s1-a',
          text: 'Immediately irrigate the eye with copious normal saline',
          isCorrect: false,
          pihuFeedback:
            "Wait! Irrigation is for chemical burns, not mechanical/blast injuries. If there's an open globe injury and you irrigate, you could push out intraocular contents. We need to ASSESS before we ACT in trauma!",
          nextStepId: null,
        },
        {
          id: 'de-s1-b',
          text: 'Gently examine the eye, check for open globe signs, and apply a rigid eye shield',
          isCorrect: true,
          pihuFeedback:
            "Excellent, Sammy! Rule number one in ocular trauma: assess for open globe injury first. Look for signs like irregular pupil, shallow anterior chamber, positive Seidel test. NEVER apply pressure! Use a rigid shield (like a cup) to protect the eye. No patches, no pressure. This is GOLD for exams!",
          nextStepId: 'de-s2',
        },
        {
          id: 'de-s1-c',
          text: 'Apply tight pressure bandage to stop bleeding and give oral painkillers',
          isCorrect: false,
          pihuFeedback:
            "NEVER apply pressure to a potentially ruptured globe, Sammy! Pressure can extrude intraocular contents and cause permanent damage. This is a classic exam trap. Always use a rigid SHIELD, never a pressure bandage!",
          nextStepId: null,
        },
        {
          id: 'de-s1-d',
          text: 'Order CT brain immediately to rule out intracranial injury',
          isCorrect: false,
          pihuFeedback:
            "CT may be needed later, but examining the eye first is the priority here. The patient is conscious and alert, so we focus on the eye injury. Remember: local before systemic in isolated injuries!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'de-s2',
      type: 'investigation',
      narrative:
        'On gentle examination, you find an irregular (teardrop-shaped) pupil, shallow anterior chamber compared to the left eye, and a positive Seidel test (fluorescein streaming from the wound site on the cornea). What imaging should you order?',
      pihuComment:
        "Teardrop pupil + shallow AC + positive Seidel test = ? This is textbook open globe! But what imaging do we need to rule out a retained intraocular foreign body (IOFB)?",
      choices: [
        {
          id: 'de-s2-a',
          text: 'MRI orbit to get detailed soft tissue images',
          isCorrect: false,
          pihuFeedback:
            "DANGER! MRI is ABSOLUTELY CONTRAINDICATED when you suspect a metallic intraocular foreign body! The magnet can pull the metal fragment through the eye and cause devastating damage. This is an EXAM FAVOURITE trick question. Always CT, never MRI for metallic IOFB!",
          nextStepId: null,
        },
        {
          id: 'de-s2-b',
          text: 'CT orbit (thin cuts, axial + coronal) without contrast',
          isCorrect: true,
          pihuFeedback:
            "PERFECT! CT orbit is the investigation of choice for suspected IOFB and to assess the extent of globe injury. It picks up metallic and glass foreign bodies beautifully. EXAM PEARL: MRI is contraindicated for metallic IOFB. CT is the way to go. Write this in your notes, Sammy!",
          nextStepId: 'de-s3',
        },
        {
          id: 'de-s2-c',
          text: 'X-ray orbit AP and lateral views',
          isCorrect: false,
          pihuFeedback:
            "X-ray can show radio-opaque foreign bodies but gives poor detail about location within the eye. CT is far superior for localizing foreign bodies and assessing the extent of damage. Always go for CT in ocular trauma!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'de-s3',
      type: 'diagnosis',
      narrative:
        'CT orbit reveals a small metallic foreign body in the posterior segment of the right eye with surrounding vitreous hemorrhage. The globe appears to have a corneal laceration with iris prolapse. What is your complete diagnosis?',
      pihuComment:
        "We have the CT results. Now put it all together -- corneal laceration, iris prolapse, metallic IOFB, vitreous hemorrhage. What's the full picture?",
      choices: [
        {
          id: 'de-s3-a',
          text: 'Open globe injury (Zone I corneal laceration with iris prolapse) with retained intraocular foreign body (IOFB) and vitreous hemorrhage',
          isCorrect: true,
          pihuFeedback:
            "Brilliant, Sammy! You got the complete diagnosis! EXAM TIP: Birmingham Eye Trauma Terminology (BETT) classifies open globe injuries. Zone I = cornea, Zone II = anterior 5mm of sclera, Zone III = posterior sclera. This is Zone I with IOFB -- a surgical emergency! Let's talk management next.",
          nextStepId: 'de-s4',
        },
        {
          id: 'de-s3-b',
          text: 'Closed globe injury with hyphema',
          isCorrect: false,
          pihuFeedback:
            "Sammy, the Seidel test was POSITIVE, meaning aqueous is leaking out. That's an open globe by definition. Closed globe means the wall integrity is maintained. And we have a through-and-through wound with IOFB -- definitely open!",
          nextStepId: null,
        },
        {
          id: 'de-s3-c',
          text: 'Corneal abrasion with traumatic cataract',
          isCorrect: false,
          pihuFeedback:
            "An abrasion is a superficial scratch -- this is a full-thickness laceration with iris prolapse and an IOFB sitting in the vitreous! This is way more serious than an abrasion. Don't underdiagnose in trauma!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'de-s4',
      type: 'treatment',
      narrative:
        'You have diagnosed an open globe injury with IOFB. The ophthalmology senior asks you: what is the immediate management plan?',
      pihuComment:
        "Treatment time for a surgical emergency! Think about what we need to do before the patient goes to the OT. Hint: protect the eye, prevent infection, keep the patient fasting...",
      choices: [
        {
          id: 'de-s4-a',
          text: 'Start topical antibiotics aggressively and observe for 48 hours before deciding on surgery',
          isCorrect: false,
          pihuFeedback:
            "No no no! An open globe with IOFB is a SURGICAL EMERGENCY. Delaying surgery increases the risk of endophthalmitis and siderosis/chalcosis. Primary repair should happen within 24 hours ideally!",
          nextStepId: null,
        },
        {
          id: 'de-s4-b',
          text: 'Rigid eye shield, IV antibiotics (ciprofloxacin + vancomycin), tetanus prophylaxis, NPO, and urgent surgical repair with IOFB removal',
          isCorrect: true,
          pihuFeedback:
            "PERFECT management Sammy! Shield the eye, start IV antibiotics to prevent endophthalmitis, update tetanus, keep NPO for surgery, and plan urgent primary repair + IOFB removal. EXAM PEARL: Intravitreal antibiotics may also be given intraoperatively. Metallic IOFB must be removed to prevent siderosis bulbi (iron) or chalcosis (copper). You're going to ace this!",
          nextStepId: 'de-s5',
        },
        {
          id: 'de-s4-c',
          text: 'Enucleation of the right eye to prevent sympathetic ophthalmia',
          isCorrect: false,
          pihuFeedback:
            "Whoa, way too aggressive! Enucleation is the absolute last resort. Sympathetic ophthalmia is a risk of penetrating injuries, but we should try to save the eye first with primary repair. Enucleation is considered only if the injured eye has no light perception and is severely damaged beyond repair!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'de-s5',
      type: 'outcome',
      narrative:
        'After successful primary repair and IOFB removal via pars plana vitrectomy, the patient is recovering well. On day 3 post-op, he asks you: "Doctor, kya mujhe aage se patakhe chhod dene chahiye?" What important counseling point should you emphasize?',
      pihuComment:
        "Great work getting through the case! Now the counseling part -- equally important for exams and real life. What's the public health message here?",
      choices: [
        {
          id: 'de-s5-a',
          text: 'Use protective eyewear if handling firecrackers and maintain a safe distance; ideally attend community displays rather than personal use',
          isCorrect: true,
          pihuFeedback:
            "Beautiful answer, Sammy! Prevention is always the best treatment. Firecracker injuries are one of the leading causes of preventable blindness during festivals. EXAM NOTE: National Program for Control of Blindness (NPCB) includes awareness about ocular trauma prevention. Tell patients: wear protective eyewear, keep distance, supervise children, and prefer community displays. You crushed this case!",
          nextStepId: null,
        },
        {
          id: 'de-s5-b',
          text: 'Just tell him the eye is fine now and he can resume normal activities',
          isCorrect: false,
          pihuFeedback:
            "Sammy, we can't miss the prevention angle! This patient almost lost an eye. Counseling about safety measures is a critical part of management, and examiners LOVE to test it. Always include prevention in your answer!",
          nextStepId: null,
        },
        {
          id: 'de-s5-c',
          text: 'Advise that his eye will be completely normal and there are no long-term risks',
          isCorrect: false,
          pihuFeedback:
            "That's not accurate. After open globe repair, patients need long-term follow-up for complications like retinal detachment, traumatic cataract, and sympathetic ophthalmia. Always be honest with patients about the recovery journey!",
          nextStepId: null,
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// CASE 3 — The Malnourished Child
// ─────────────────────────────────────────────────────────────
const malnourishedChild: ClinicalCase = {
  id: 'malnourished-child',
  title: 'The Malnourished Child',
  emoji: '👶',
  subjectSlug: 'psm',
  topicSlugs: ['nutrition', 'vitamin_a_deficiency'],
  difficulty: 'easy',
  estimatedMinutes: 5,
  patientSummary:
    'A 3-year-old boy from a tribal area is brought to the PHC with inability to see in dim light, dry rough skin, and poor weight gain. His mother says he refuses to eat vegetables.',
  totalScore: 40,
  steps: [
    {
      id: 'mc-s1',
      type: 'presentation',
      narrative:
        'Little Raju, 3 years old, is brought by his mother to the Primary Health Centre. She says, "Doctor, yeh raat ko bilkul nahi dekh paata. Aur bahut kamzor ho gaya hai." On examination: weight 9 kg (expected ~14 kg for age), dry scaly skin, foamy white spots on the conjunctiva bilaterally. What are these foamy spots?',
      pihuComment:
        "Poor little Raju! Night blindness + dry skin + foamy spots on conjunctiva in a malnourished child? This is classic PSM territory, Sammy! What are those conjunctival spots called?",
      choices: [
        {
          id: 'mc-s1-a',
          text: "Bitot's spots -- a sign of Vitamin A deficiency",
          isCorrect: true,
          pihuFeedback:
            "YES! Bitot's spots are triangular, foamy, cheesy-white patches on the bulbar conjunctiva, typically temporal side. They're pathognomonic of Vitamin A deficiency! EXAM PEARL: WHO classification -- Night blindness = XN, Conjunctival xerosis = X1A, Bitot's spots = X1B. This child has X1B at least!",
          nextStepId: 'mc-s2',
        },
        {
          id: 'mc-s1-b',
          text: 'Pinguecula -- a degenerative condition',
          isCorrect: false,
          pihuFeedback:
            "Nahi Sammy! Pinguecula is a yellowish deposit near the cornea seen in adults due to UV exposure. These are FOAMY WHITE spots in a malnourished child -- that's classic Bitot's spots from Vitamin A deficiency!",
          nextStepId: null,
        },
        {
          id: 'mc-s1-c',
          text: 'Pterygium -- needs surgical removal',
          isCorrect: false,
          pihuFeedback:
            "Pterygium is a wing-shaped fibrovascular growth that encroaches on the cornea. It's not foamy and is seen in adults with sun exposure. In a malnourished child with night blindness, think Vitamin A deficiency first!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'mc-s2',
      type: 'investigation',
      narrative:
        "On further examination, you notice the cornea of the right eye appears hazy and dry. There's a small area of corneal ulceration starting. How would you classify this child's Vitamin A deficiency according to WHO?",
      pihuComment:
        "The plot thickens! Corneal involvement means things are getting serious. Remember the WHO xerophthalmia classification we revised? Time to apply it!",
      choices: [
        {
          id: 'mc-s2-a',
          text: 'X2 (Corneal xerosis) with X1B (Bitot\'s spots)',
          isCorrect: true,
          pihuFeedback:
            "Correct! X2 means corneal xerosis -- the cornea is dry and hazy. Combined with Bitot's spots (X1B) and night blindness (XN). EXAM TABLE: XN = Night blindness, X1A = Conjunctival xerosis, X1B = Bitot's spots, X2 = Corneal xerosis, X3A = Corneal ulcer (<1/3 cornea), X3B = Keratomalacia (>1/3). Learn this table -- it comes EVERY year!",
          nextStepId: 'mc-s3',
        },
        {
          id: 'mc-s2-b',
          text: 'X3B (Keratomalacia)',
          isCorrect: false,
          pihuFeedback:
            "X3B would mean keratomalacia -- that's liquefactive necrosis of more than 1/3 of the cornea. This child has early corneal dryness and a small ulcer, not full-blown corneal melting. Be precise with the classification!",
          nextStepId: null,
        },
        {
          id: 'mc-s2-c',
          text: 'XS (Corneal scar from previous deficiency)',
          isCorrect: false,
          pihuFeedback:
            "XS means corneal scarring, which is a healed stage. This child has active ongoing disease with a dry hazy cornea and early ulceration. XS would come later if untreated corneal damage heals with scarring.",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'mc-s3',
      type: 'diagnosis',
      narrative:
        'You confirm Vitamin A deficiency with xerophthalmia (stage X2 + X1B + XN) in a severely malnourished child. The ANM asks you about the correct treatment schedule for Vitamin A supplementation. What is the WHO-recommended therapeutic dose?',
      pihuComment:
        "Now for the treatment schedule -- this is asked in EVERY PSM exam! The dose depends on the age. This child is 3 years old (over 1 year). Think carefully about the schedule...",
      choices: [
        {
          id: 'mc-s3-a',
          text: '2 lakh IU (200,000 IU) orally immediately, repeat next day, and once more after 2 weeks',
          isCorrect: true,
          pihuFeedback:
            "PERFECT! For children over 1 year with xerophthalmia: 2 lakh IU on Day 0, Day 1, and Day 14 (Week 2). EXAM MNEMONIC: '0-1-14 rule' for Vitamin A treatment. For children 6-12 months, it's half the dose (1 lakh IU). For under 6 months, 50,000 IU. This is your guaranteed marks question, Sammy!",
          nextStepId: 'mc-s4',
        },
        {
          id: 'mc-s3-b',
          text: '1 lakh IU once and follow up after 6 months',
          isCorrect: false,
          pihuFeedback:
            "That's the PROPHYLACTIC dose schedule, not therapeutic! When there's active xerophthalmia, we need the full treatment schedule: Day 0, Day 1, and Day 14. One dose is not enough for an active deficiency state!",
          nextStepId: null,
        },
        {
          id: 'mc-s3-c',
          text: '5 lakh IU single mega-dose intramuscularly',
          isCorrect: false,
          pihuFeedback:
            "Too much Sammy! Vitamin A is fat-soluble and excess causes toxicity -- pseudotumor cerebri, hepatotoxicity. The oral route is preferred, and the standard dose is 2 lakh IU for children over 1 year. Stick to WHO guidelines!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'mc-s4',
      type: 'treatment',
      narrative:
        'You administer the first dose of Vitamin A. The ASHA worker asks about the national program for preventing Vitamin A deficiency. Under which program are prophylactic doses given to children?',
      pihuComment:
        "Community medicine meets ophthalmology! Prevention is better than cure, right? Which national program handles Vitamin A prophylaxis in India?",
      choices: [
        {
          id: 'mc-s4-a',
          text: 'National Program for Control of Blindness and Visual Impairment (NPCBVI) -- Vitamin A prophylaxis given at 9 months with measles vaccine, then every 6 months up to 5 years',
          isCorrect: true,
          pihuFeedback:
            "Sammy, you're on fire! Under NPCBVI, Vitamin A prophylaxis: First dose at 9 months along with measles vaccine (1 lakh IU), then 2 lakh IU every 6 months up to 5 years of age. Total 9 doses! Also remember, ICDS (Integrated Child Development Services) helps in implementation. Exam mein aayega pakka!",
          nextStepId: null,
        },
        {
          id: 'mc-s4-b',
          text: 'RNTCP (Revised National TB Control Programme)',
          isCorrect: false,
          pihuFeedback:
            "Sammy, RNTCP is for tuberculosis! Vitamin A deficiency prevention falls under NPCBVI (National Program for Control of Blindness and Visual Impairment). Don't mix up your national programs -- examiners love testing this!",
          nextStepId: null,
        },
        {
          id: 'mc-s4-c',
          text: 'NMHP (National Mental Health Programme)',
          isCorrect: false,
          pihuFeedback:
            "That's for mental health, Sammy! Vitamin A supplementation comes under NPCBVI. Tip: Make a table of all national health programs and what they cover -- it's high-yield for PSM exams!",
          nextStepId: null,
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// CASE 4 — Mystery at the Water Pump
// ─────────────────────────────────────────────────────────────
const waterPumpMystery: ClinicalCase = {
  id: 'water-pump-mystery',
  title: 'Mystery at the Water Pump',
  emoji: '🚰',
  subjectSlug: 'psm',
  topicSlugs: ['epidemiology', 'environmental_health'],
  difficulty: 'medium',
  estimatedMinutes: 7,
  patientSummary:
    'Multiple families in a village develop acute watery diarrhea over 3 days. As the PHC medical officer, you must investigate this outbreak.',
  totalScore: 50,
  steps: [
    {
      id: 'wp-s1',
      type: 'presentation',
      narrative:
        'You are the Medical Officer at a rural PHC. Over 3 days, 47 patients from Rampur village present with acute watery diarrhea, vomiting, and dehydration. Two elderly patients have died. The village has one common hand pump and an open well. Sarpanch ji calls you urgently. What is your first action as an epidemiologist?',
      pihuComment:
        "An outbreak investigation! This is where John Snow vibes meet Indian PSM exams. Multiple cases of the same illness in a short time = ? What do we do first, Sammy?",
      choices: [
        {
          id: 'wp-s1-a',
          text: 'Confirm the diagnosis by collecting stool samples and verify the outbreak by comparing with baseline disease rates',
          isCorrect: true,
          pihuFeedback:
            "Textbook answer! Step 1 of outbreak investigation: CONFIRM the diagnosis and VERIFY the epidemic exists. Collect stool samples for culture and compare current cases with expected baseline. EXAM POINT: Steps of outbreak investigation -- Confirm, Verify, Define cases, Describe (time/place/person), Hypothesis, Test, Control, Report. Learn this sequence!",
          nextStepId: 'wp-s2',
        },
        {
          id: 'wp-s1-b',
          text: 'Immediately close the hand pump and well without any testing',
          isCorrect: false,
          pihuFeedback:
            "I know it's tempting to act fast, Sammy, but closing the water source without confirming the source of infection is premature! What if the outbreak is foodborne? We need to investigate systematically. Jumping to interventions without data is a common mistake!",
          nextStepId: null,
        },
        {
          id: 'wp-s1-c',
          text: 'Report to WHO immediately and wait for their team',
          isCorrect: false,
          pihuFeedback:
            "While reporting is important, your first duty as the local MO is to START the investigation and manage cases. You report to the District Surveillance Unit (under IDSP), not directly to WHO. Don't wait for anyone -- you're the first responder!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'wp-s2',
      type: 'investigation',
      narrative:
        'Stool cultures grow Vibrio cholerae O1 El Tor biotype. You now need to identify the source. You plot cases on a map and find that ALL affected families use the hand pump, while families using the open well are unaffected. You collect water samples. What epidemiological tool are you using by mapping cases by location?',
      pihuComment:
        "Vibrio cholerae confirmed! Now we're doing some detective work, just like John Snow with the Broad Street pump in 1854! What's this spatial mapping technique called?",
      choices: [
        {
          id: 'wp-s2-a',
          text: 'Spot map -- plotting cases by place to identify clustering and source',
          isCorrect: true,
          pihuFeedback:
            "Exactly! A spot map plots cases by geographical location to identify clustering. This is exactly what John Snow did in the 1854 London cholera outbreak! EXAM FACT: John Snow is the father of field epidemiology. He mapped cholera cases and traced them to the Broad Street pump. Your cases cluster around the hand pump -- same concept!",
          nextStepId: 'wp-s3',
        },
        {
          id: 'wp-s2-b',
          text: 'Cohort study design',
          isCorrect: false,
          pihuFeedback:
            "A cohort study follows exposed vs unexposed groups over time -- that's a study design, not a mapping tool. What you're doing by plotting cases on a map by location is called a spot map. Study designs come later in the investigation!",
          nextStepId: null,
        },
        {
          id: 'wp-s2-c',
          text: 'Case-control study',
          isCorrect: false,
          pihuFeedback:
            "Case-control study compares cases with controls to find risk factors. We might do one later, but right now we're simply MAPPING cases geographically. The tool for spatial plotting of cases = spot map!",
          nextStepId: null,
        },
        {
          id: 'wp-s2-d',
          text: 'Epidemic curve (Epi curve)',
          isCorrect: false,
          pihuFeedback:
            "Close, but epi curves plot cases over TIME, not location. An epi curve would show the pattern of the outbreak over days. Mapping cases by PLACE is a spot map. Both are important descriptive epidemiology tools, but know the difference!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'wp-s3',
      type: 'diagnosis',
      narrative:
        'Water sample from the hand pump tests positive for Vibrio cholerae. The hand pump is located 15 meters from an open drain. You draw an epi curve and it shows a sharp rise of cases over 2 days followed by a plateau. What type of outbreak pattern does this suggest?',
      pihuComment:
        "The epi curve shape tells us the outbreak pattern! Sharp rise and plateau from a single contaminated source... what type of epidemic is this?",
      choices: [
        {
          id: 'wp-s3-a',
          text: 'Common source (point source) epidemic -- single contaminated source exposure',
          isCorrect: true,
          pihuFeedback:
            "NAILED IT! A point source epidemic shows a sharp rise and fall, with all cases occurring within one incubation period of the exposure. The hand pump is the common source! EXAM TIP: Point source = sharp peak (e.g., food poisoning at a wedding). Propagated = multiple peaks (person-to-person). Continuous = plateau (ongoing contaminated water supply -- which is actually closest here!). This is a must-know distinction!",
          nextStepId: 'wp-s4',
        },
        {
          id: 'wp-s3-b',
          text: 'Propagated epidemic -- person to person transmission',
          isCorrect: false,
          pihuFeedback:
            "Propagated epidemics show MULTIPLE successive peaks as infection passes from person to person (like measles). Here, ALL cases cluster around one water source and occurred within a short time span. That's a common source pattern!",
          nextStepId: null,
        },
        {
          id: 'wp-s3-c',
          text: 'Pandemic -- because two people have died',
          isCorrect: false,
          pihuFeedback:
            "Sammy! Pandemic means disease spread across countries or continents. Two deaths in one village don't make a pandemic. This is a localized outbreak or epidemic at most. Remember: Endemic < Epidemic < Pandemic in terms of geographic spread.",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'wp-s4',
      type: 'treatment',
      narrative:
        'You have identified the contaminated hand pump as the source. What are the immediate control measures you should implement?',
      pihuComment:
        "Time to control this outbreak! Think about the three levels -- treat the sick, stop the source, protect the healthy. What's the comprehensive plan?",
      choices: [
        {
          id: 'wp-s4-a',
          text: 'Only treat the sick patients with ORS and antibiotics',
          isCorrect: false,
          pihuFeedback:
            "Treatment alone won't stop the outbreak! If the contaminated water source stays active, new cases will keep coming. You need to address the source AND treat patients simultaneously!",
          nextStepId: null,
        },
        {
          id: 'wp-s4-b',
          text: 'Chlorinate/disinfect the hand pump, provide safe drinking water (ORS points), treat patients (ORS + doxycycline), health education on hygiene, and notify under IDSP',
          isCorrect: true,
          pihuFeedback:
            "COMPREHENSIVE and correct! The control measures should be: (1) Disinfect the water source with superchlorination, (2) Provide alternative safe water, (3) Set up ORS corners and treat patients, (4) Doxycycline for cholera cases (single dose 300mg for adults), (5) Health education on handwashing and water purification, (6) Notify under IDSP (Integrated Disease Surveillance Programme). This complete approach is what examiners want to see!",
          nextStepId: 'wp-s5',
        },
        {
          id: 'wp-s4-c',
          text: 'Evacuate the entire village to prevent further spread',
          isCorrect: false,
          pihuFeedback:
            "That's way overboard, Sammy! Evacuation is neither practical nor necessary. The issue is contaminated water, not an airborne pathogen. Disinfect the source, provide safe water, treat the sick -- that's the practical approach!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'wp-s5',
      type: 'outcome',
      narrative:
        'After implementing control measures, no new cases appear after 5 days. The District Health Officer asks you to submit an outbreak investigation report. What should this report include as the key epidemiological finding?',
      pihuComment:
        "The outbreak is controlled! Now we document everything. What's the key finding for the report?",
      choices: [
        {
          id: 'wp-s5-a',
          text: 'The attack rate was highest among hand pump users with a strong association between hand pump water consumption and cholera (high Relative Risk), confirming a waterborne common source outbreak',
          isCorrect: true,
          pihuFeedback:
            "Beautiful conclusion, Sammy! The attack rate calculation (cases/exposed population), the relative risk comparing hand pump users vs well users, and the epi curve pattern all confirm a waterborne common source outbreak. EXAM PEARL: Always calculate attack rates and relative risk in outbreak investigations. This is how you write a stellar viva answer! Case solved!",
          nextStepId: null,
        },
        {
          id: 'wp-s5-b',
          text: 'The outbreak was caused by poor sanitation in general with no specific source identified',
          isCorrect: false,
          pihuFeedback:
            "But we DID identify the specific source -- the hand pump! The whole investigation pointed to it. A good outbreak report must clearly state the identified source, attack rates, and epidemiological evidence. Be specific!",
          nextStepId: null,
        },
        {
          id: 'wp-s5-c',
          text: 'The outbreak was likely airborne since so many people were affected simultaneously',
          isCorrect: false,
          pihuFeedback:
            "Cholera is NOT airborne, Sammy! It's transmitted through the fecal-oral route via contaminated water and food. The evidence clearly points to waterborne transmission through the hand pump. Don't forget basic transmission routes!",
          nextStepId: null,
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// CASE 5 — The Factory Worker's Cough
// ─────────────────────────────────────────────────────────────
const factoryCough: ClinicalCase = {
  id: 'factory-cough',
  title: "The Factory Worker's Cough",
  emoji: '🏭',
  subjectSlug: 'psm',
  topicSlugs: ['occupational_health', 'screening_tests'],
  difficulty: 'medium',
  estimatedMinutes: 6,
  patientSummary:
    'A 42-year-old worker from a stone-crushing unit presents with chronic dry cough and progressive breathlessness over 2 years. He has worked in the unit for 15 years without using any protective equipment.',
  totalScore: 50,
  steps: [
    {
      id: 'fc-s1',
      type: 'presentation',
      narrative:
        'Mohan, 42, comes to your clinic coughing. He works at a stone-crushing (silica) factory for 15 years. He says, "Doctor sahib, saans lene mein takleef hoti hai, aur khansi bhi bahut aati hai. Pehle thoda tha, ab badhta ja raha hai." No fever, no hemoptysis. He never wore a mask at work. Chest exam reveals fine end-inspiratory crepitations bilaterally. What is the most likely occupational lung disease?',
      pihuComment:
        "15 years in a stone-crushing unit without protection + progressive breathlessness + dry cough? This is a classic occupational health question, Sammy! Stone = silica = ?",
      choices: [
        {
          id: 'fc-s1-a',
          text: 'Silicosis -- caused by chronic inhalation of silica dust',
          isCorrect: true,
          pihuFeedback:
            "YES! Silicosis is caused by inhalation of crystalline silica (SiO2) dust. Stone crushing, sandblasting, mining, and pottery workers are at risk. EXAM PEARL: Silicosis is the MOST COMMON occupational lung disease worldwide. It's a type of pneumoconiosis. After 15 years of exposure, this is classic chronic silicosis!",
          nextStepId: 'fc-s2',
        },
        {
          id: 'fc-s1-b',
          text: 'Asbestosis from asbestos exposure',
          isCorrect: false,
          pihuFeedback:
            "Asbestosis is from asbestos fibers, found in insulation, roofing, and brake pad industries -- NOT stone crushing. Stone crushing exposes workers to SILICA dust. Match the occupation to the dust type!",
          nextStepId: null,
        },
        {
          id: 'fc-s1-c',
          text: 'Byssinosis from cotton dust',
          isCorrect: false,
          pihuFeedback:
            "Byssinosis (brown lung disease) is from cotton/textile dust and causes Monday morning tightness. This patient works with STONE, not cotton. Remember: Stone = Silicosis, Cotton = Byssinosis, Coal = Coal workers' pneumoconiosis, Asbestos = Asbestosis!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'fc-s2',
      type: 'investigation',
      narrative:
        'You order a chest X-ray. It shows multiple small rounded opacities predominantly in the upper and middle zones bilaterally, with eggshell calcification of hilar lymph nodes. What investigation would you order to assess the functional impairment?',
      pihuComment:
        "Eggshell calcification of hilar lymph nodes! That's a classic radiological sign of silicosis. Now, how do we quantify the lung damage?",
      choices: [
        {
          id: 'fc-s2-a',
          text: 'Pulmonary Function Tests (Spirometry) -- looking for restrictive pattern',
          isCorrect: true,
          pihuFeedback:
            "Correct! Spirometry will show a RESTRICTIVE pattern in silicosis -- reduced FVC with normal or high FEV1/FVC ratio. This tells us the extent of functional impairment. EXAM FACT: Silicosis shows restrictive lung disease because fibrosis makes lungs stiff. Obstructive pattern is seen in asthma/COPD. Know the difference!",
          nextStepId: 'fc-s3',
        },
        {
          id: 'fc-s2-b',
          text: 'Sputum for AFB to confirm tuberculosis',
          isCorrect: false,
          pihuFeedback:
            "Good thought -- silicosis IS a risk factor for TB (silicotuberculosis is important!). But the question asks about assessing FUNCTIONAL impairment, not diagnosing TB. Spirometry is the answer for measuring lung function!",
          nextStepId: null,
        },
        {
          id: 'fc-s2-c',
          text: 'Bronchoalveolar lavage for crystal analysis',
          isCorrect: false,
          pihuFeedback:
            "BAL can show birefringent silica particles, but it's invasive and mainly for research or atypical cases. For routine functional assessment, spirometry is the practical and standard choice!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'fc-s3',
      type: 'diagnosis',
      narrative:
        'Spirometry shows FVC 55% predicted (reduced) with FEV1/FVC ratio 85% (normal), confirming a restrictive pattern. Combined with the occupational history and X-ray findings, you confirm chronic silicosis. The patient asks, "Doctor, kya main theek ho jaunga?" What do you tell him about the prognosis?',
      pihuComment:
        "This is a tough conversation. Silicosis is irreversible, Sammy. But what important complication must we screen for?",
      choices: [
        {
          id: 'fc-s3-a',
          text: 'Silicosis is irreversible but we must screen for TB (silicotuberculosis) as silicosis increases TB risk 3-fold. Remove from exposure and provide supportive care.',
          isCorrect: true,
          pihuFeedback:
            "Honest and accurate, Sammy. Silicosis has NO CURE -- the fibrosis is irreversible. BUT the critical complication is TB! Silicosis increases TB risk 3x. EXAM PEARL: Silicotuberculosis is an important association. Also screen for autoimmune conditions (Caplan syndrome with RA). Management: remove from exposure + supportive + screen for TB regularly!",
          nextStepId: 'fc-s4',
        },
        {
          id: 'fc-s3-b',
          text: 'Start steroids which will reverse the fibrosis completely',
          isCorrect: false,
          pihuFeedback:
            "Sammy, silicosis fibrosis is NOT reversible with steroids or any medication. Unlike some inflammatory lung conditions, the silicotic nodules are permanent. Don't give false hope -- be honest and focus on preventing further exposure and complications!",
          nextStepId: null,
        },
        {
          id: 'fc-s3-c',
          text: 'Plan for lung transplant as the only definitive cure',
          isCorrect: false,
          pihuFeedback:
            "Lung transplant is theoretically an option for end-stage disease but is not the standard management or the focus of exam questions. The key point is that silicosis is irreversible, and we must screen for TB and remove the patient from further exposure!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'fc-s4',
      type: 'treatment',
      narrative:
        'As the factory doctor, you now need to recommend preventive measures for the other workers. What is the MOST important primary prevention measure for silicosis in the workplace?',
      pihuComment:
        "Prevention is the ONLY real solution for occupational diseases! What's the most effective way to prevent silicosis at the source?",
      choices: [
        {
          id: 'fc-s4-a',
          text: 'Provide N95 masks to all workers',
          isCorrect: false,
          pihuFeedback:
            "Masks (PPE) are important but they are the LAST line of defense, not the first! In occupational health, we follow the hierarchy of controls: Elimination > Substitution > Engineering controls > Administrative controls > PPE. Engineering controls like wet drilling come first!",
          nextStepId: null,
        },
        {
          id: 'fc-s4-b',
          text: 'Engineering controls: wet drilling, dust suppression, enclosed processes, and proper ventilation at the source',
          isCorrect: true,
          pihuFeedback:
            "PERFECT! Engineering controls are the most effective primary prevention. Wet drilling/cutting reduces dust by 90%+! EXAM PEARL: Hierarchy of controls in occupational health -- (1) Elimination, (2) Substitution, (3) Engineering controls (most practical for silicosis), (4) Administrative controls (job rotation, reduced hours), (5) PPE (last resort). For silicosis: TLV (Threshold Limit Value) for silica is 0.05 mg/m3. This is PSM gold!",
          nextStepId: null,
        },
        {
          id: 'fc-s4-c',
          text: 'Regular chest X-rays every month for early detection',
          isCorrect: false,
          pihuFeedback:
            "Regular screening is SECONDARY prevention (early detection), not PRIMARY prevention. The question asks about the most important primary prevention measure. We need to prevent the disease from occurring in the first place, not just detect it early!",
          nextStepId: null,
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// CASE 6 — Ringing in the Ears
// ─────────────────────────────────────────────────────────────
const ringingEars: ClinicalCase = {
  id: 'ringing-ears',
  title: 'Ringing in the Ears',
  emoji: '👂',
  subjectSlug: 'ent',
  topicSlugs: ['ear_hearing_otitis_deafness', 'vertigo'],
  difficulty: 'easy',
  estimatedMinutes: 5,
  patientSummary:
    'A 35-year-old woman presents with episodic vertigo, tinnitus, fluctuating hearing loss in the left ear, and a sensation of fullness. Episodes last 20 minutes to several hours.',
  totalScore: 40,
  steps: [
    {
      id: 're-s1',
      type: 'presentation',
      narrative:
        'Priya, 35, grabs the chair tightly as she sits in your clinic. "Doctor, duniya gol-gol ghoom rahi hai! Aur kaan mein seethi bajti rehti hai." She describes spinning episodes lasting hours, with left ear fullness and decreased hearing during attacks. Between attacks she feels mostly fine but hearing fluctuates. This has been happening for 3 months. What is the classic triad she is describing?',
      pihuComment:
        "Episodic vertigo + tinnitus + fluctuating hearing loss + aural fullness? This is ENT 101, Sammy! What condition has this classic triad (actually a tetrad)?",
      choices: [
        {
          id: 're-s1-a',
          text: "Meniere's disease triad: episodic vertigo, sensorineural hearing loss, and tinnitus (with aural fullness as the fourth feature)",
          isCorrect: true,
          pihuFeedback:
            "BINGO! Meniere's disease has the classic TETRAD: (1) Episodic vertigo lasting 20 min to hours, (2) Fluctuating sensorineural hearing loss (low frequency initially), (3) Tinnitus, (4) Aural fullness. EXAM TIP: It's caused by endolymphatic hydrops -- excess endolymph in the inner ear. This is asked every single year!",
          nextStepId: 're-s2',
        },
        {
          id: 're-s1-b',
          text: 'BPPV -- Benign Paroxysmal Positional Vertigo',
          isCorrect: false,
          pihuFeedback:
            "BPPV causes brief episodes of vertigo (seconds, not hours!) triggered by position changes and does NOT have hearing loss or tinnitus. Meniere's episodes are longer and include the full symptom tetrad!",
          nextStepId: null,
        },
        {
          id: 're-s1-c',
          text: 'Acoustic neuroma (Vestibular schwannoma)',
          isCorrect: false,
          pihuFeedback:
            "Acoustic neuroma causes progressive unilateral sensorineural hearing loss and tinnitus, but vertigo is less prominent. It doesn't cause episodic attacks with full recovery between episodes. Also, acoustic neuroma hearing loss is progressive, not fluctuating!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 're-s2',
      type: 'investigation',
      narrative:
        "You suspect Meniere's disease. What audiological finding would you expect on pure tone audiometry?",
      pihuComment:
        "Audiometry time! Meniere's affects the inner ear, so it causes sensorineural hearing loss. But WHICH frequencies are affected first? This is a classic exam question!",
      choices: [
        {
          id: 're-s2-a',
          text: 'Low-frequency sensorineural hearing loss -- the audiogram shows a rising pattern',
          isCorrect: true,
          pihuFeedback:
            "YES! Early Meniere's shows low-frequency SNHL -- the audiogram dips at low frequencies and rises at high frequencies (RISING audiogram). EXAM PEARL: As disease progresses, it becomes flat SNHL affecting all frequencies. Low-frequency loss = Meniere's is a classic association. Also, Rinne positive and Weber lateralized to the better ear (right) since it's SNHL!",
          nextStepId: 're-s3',
        },
        {
          id: 're-s2-b',
          text: 'High-frequency sensorineural hearing loss',
          isCorrect: false,
          pihuFeedback:
            "High-frequency SNHL is seen in presbycusis (age-related) and noise-induced hearing loss. Meniere's characteristically affects LOW frequencies first due to distension of the cochlear duct affecting the apex (which codes low frequencies)!",
          nextStepId: null,
        },
        {
          id: 're-s2-c',
          text: 'Conductive hearing loss with air-bone gap',
          isCorrect: false,
          pihuFeedback:
            "Meniere's is an INNER ear disease causing sensorineural hearing loss, not conductive. Conductive hearing loss with air-bone gap is seen in middle ear diseases like otosclerosis or chronic otitis media. Know your hearing loss types!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 're-s3',
      type: 'diagnosis',
      narrative:
        "Audiometry confirms low-frequency SNHL in the left ear. You clinically diagnose Meniere's disease. The patient is anxious and asks about treatment during acute attacks. What do you prescribe for the acute episode?",
      pihuComment:
        "Acute attack management! The patient is dizzy and nauseous right now. What's the go-to drug to calm down the vestibular system?",
      choices: [
        {
          id: 're-s3-a',
          text: 'Vestibular sedatives: Prochlorperazine (Stemetil) or Betahistine for acute vertigo, plus antiemetics',
          isCorrect: true,
          pihuFeedback:
            "Perfect, Sammy! For acute Meniere's attacks: Prochlorperazine (vestibular sedative + antiemetic) is excellent. Betahistine is also used -- it improves inner ear blood flow and reduces endolymphatic pressure. EXAM TIP: Betahistine is an H1 agonist and H3 antagonist. For long-term prevention: salt restriction + diuretics (to reduce endolymph volume). You're killing it!",
          nextStepId: 're-s4',
        },
        {
          id: 're-s3-b',
          text: 'Antibiotics -- amoxicillin for ear infection',
          isCorrect: false,
          pihuFeedback:
            "Meniere's is NOT an infection, Sammy! It's endolymphatic hydrops -- excess inner ear fluid. Antibiotics won't help here. Save antibiotics for otitis media and otitis externa!",
          nextStepId: null,
        },
        {
          id: 're-s3-c',
          text: 'Epley maneuver to reposition otoconia',
          isCorrect: false,
          pihuFeedback:
            "Epley maneuver is the treatment for BPPV, not Meniere's disease! Epley repositions displaced otoconia in the semicircular canals. Meniere's has a completely different pathology (endolymphatic hydrops). Don't mix them up in exams!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 're-s4',
      type: 'treatment',
      narrative:
        "Priya responds well to acute treatment. For long-term management, what lifestyle modification is MOST important for preventing Meniere's attacks?",
      pihuComment:
        "Long-term prevention is key! There's one dietary modification that's considered the cornerstone of Meniere's management...",
      choices: [
        {
          id: 're-s4-a',
          text: 'Low-salt diet (restricted sodium intake less than 2g/day) to reduce endolymphatic fluid retention',
          isCorrect: true,
          pihuFeedback:
            "Spot on! Low-salt diet is the CORNERSTONE of long-term Meniere's management. Salt restriction reduces fluid retention in the endolymphatic system. Also: avoid caffeine, alcohol, and stress. Thiazide diuretics may be added. EXAM NOTE: For refractory cases, intratympanic gentamicin (chemical labyrinthectomy) or endolymphatic sac surgery are options. Case complete, Sammy! You rocked it!",
          nextStepId: null,
        },
        {
          id: 're-s4-b',
          text: 'High-protein diet to strengthen the inner ear',
          isCorrect: false,
          pihuFeedback:
            "There's no evidence that high-protein diet helps Meniere's. The key dietary modification is SALT RESTRICTION because sodium causes fluid retention, worsening endolymphatic hydrops!",
          nextStepId: null,
        },
        {
          id: 're-s4-c',
          text: 'Complete bed rest for 6 months',
          isCorrect: false,
          pihuFeedback:
            "Prolonged bed rest would actually worsen vestibular function! Between attacks, patients should stay active. Vestibular rehabilitation exercises can even help improve balance. The key lifestyle change is dietary -- reduce salt!",
          nextStepId: null,
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// CASE 7 — The Singer Who Lost Her Voice
// ─────────────────────────────────────────────────────────────
const singerVoice: ClinicalCase = {
  id: 'singer-voice',
  title: 'The Singer Who Lost Her Voice',
  emoji: '🎤',
  subjectSlug: 'ent',
  topicSlugs: ['throat_tonsillitis_larynx', 'tumors_ent'],
  difficulty: 'medium',
  estimatedMinutes: 6,
  patientSummary:
    'A 50-year-old female classical singer presents with progressive hoarseness of voice for 3 months. She is a chronic smoker (20 pack-years) and drinks alcohol occasionally.',
  totalScore: 50,
  steps: [
    {
      id: 'sv-s1',
      type: 'presentation',
      narrative:
        'Savita ji, 50, a well-known classical singer, comes with tears in her eyes. "Doctor, meri awaaz ja rahi hai. Teen mahine se awaaz baithi hui hai aur aur badh rahi hai." She smokes 10 cigarettes daily for 20 years. No pain, no difficulty swallowing, no lump in neck. She clears her throat frequently. What should be your initial approach?',
      pihuComment:
        "Hoarseness for more than 3 weeks in a smoker over 40? Sammy, alarm bells should be ringing! This needs urgent investigation. What do we do first?",
      choices: [
        {
          id: 'sv-s1-a',
          text: 'Prescribe voice rest and steam inhalation, follow up in 3 months',
          isCorrect: false,
          pihuFeedback:
            "Absolutely NOT! Hoarseness lasting more than 3 weeks, especially in a smoker, is a RED FLAG for laryngeal malignancy until proven otherwise. You MUST visualize the larynx. Never just send them home!",
          nextStepId: null,
        },
        {
          id: 'sv-s1-b',
          text: 'Perform indirect laryngoscopy (IDL) or flexible nasolaryngoscopy to visualize the vocal cords',
          isCorrect: true,
          pihuFeedback:
            "PERFECT! Rule of ENT: Hoarseness > 3 weeks = MUST visualize the larynx! Indirect laryngoscopy with a mirror or flexible nasopharyngolaryngoscopy is the first step. EXAM PEARL: In a smoker with progressive hoarseness, always rule out laryngeal carcinoma. Hoarseness is the EARLIEST symptom of glottic (vocal cord) carcinoma. This is high-yield!",
          nextStepId: 'sv-s2',
        },
        {
          id: 'sv-s1-c',
          text: 'Start antibiotics for laryngitis and review in 2 weeks',
          isCorrect: false,
          pihuFeedback:
            "Three months of hoarseness is NOT simple laryngitis, Sammy! Acute laryngitis resolves in 2-3 weeks. Persistent hoarseness in a smoker needs direct visualization of the vocal cords to rule out malignancy!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'sv-s2',
      type: 'investigation',
      narrative:
        'Flexible laryngoscopy reveals an irregular, whitish, exophytic mass on the right true vocal cord. The cord mobility is reduced. Left cord appears normal. No neck nodes are palpable. What is the next essential investigation?',
      pihuComment:
        "A mass on the vocal cord in a smoker -- suspicious! Now we need to confirm the histology. What's the next step?",
      choices: [
        {
          id: 'sv-s2-a',
          text: 'Direct laryngoscopy under GA with biopsy of the mass',
          isCorrect: true,
          pihuFeedback:
            "YES! Direct laryngoscopy (microlaryngoscopy) under general anesthesia allows proper visualization AND tissue biopsy. Histopathology is ESSENTIAL to confirm malignancy. EXAM PEARL: Most laryngeal cancers are squamous cell carcinomas (95%). The most common site is the glottis (vocal cords). Glottic cancers present early with hoarseness because even a tiny lesion affects voice!",
          nextStepId: 'sv-s3',
        },
        {
          id: 'sv-s2-b',
          text: 'FNAC (Fine Needle Aspiration Cytology) of the vocal cord mass',
          isCorrect: false,
          pihuFeedback:
            "FNAC of a vocal cord mass? That's technically very difficult and not standard practice. Laryngeal masses need direct visualization and biopsy under anesthesia. FNAC is more useful for thyroid or lymph node lesions!",
          nextStepId: null,
        },
        {
          id: 'sv-s2-c',
          text: 'CT scan of neck with contrast directly',
          isCorrect: false,
          pihuFeedback:
            "CT is important for staging, but histological confirmation comes first! We need to know WHAT the mass is before we stage it. Biopsy first, imaging for staging after. Always confirm before you stage!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'sv-s3',
      type: 'diagnosis',
      narrative:
        'Biopsy confirms well-differentiated squamous cell carcinoma of the right vocal cord. CT scan shows no cartilage invasion, no lymph node involvement, and the tumor is confined to the vocal cord with impaired cord mobility. What is the TNM staging?',
      pihuComment:
        "SCC confirmed! Now let's stage it. The tumor is on one vocal cord with impaired mobility, no nodes, no metastasis. Think about the T staging for glottic cancers...",
      choices: [
        {
          id: 'sv-s3-a',
          text: 'T2 N0 M0 (Stage II) -- tumor limited to glottis with impaired cord mobility',
          isCorrect: true,
          pihuFeedback:
            "Correct staging! T1 = confined to vocal cord with NORMAL mobility. T2 = extends to supraglottis/subglottis OR has impaired cord mobility. Since mobility is impaired, it's T2. No nodes = N0, no distant metastasis = M0. EXAM PEARL: Glottic T1a = one cord, T1b = both cords. This patient is T2 N0 M0 = Stage II. Staging determines treatment!",
          nextStepId: 'sv-s4',
        },
        {
          id: 'sv-s3-b',
          text: 'T1a N0 M0 (Stage I)',
          isCorrect: false,
          pihuFeedback:
            "T1 requires NORMAL vocal cord mobility. Our patient has impaired cord mobility, which automatically upgrades it to T2 even though it's confined to the glottis. Read the staging criteria carefully!",
          nextStepId: null,
        },
        {
          id: 'sv-s3-c',
          text: 'T3 N0 M0 (Stage III)',
          isCorrect: false,
          pihuFeedback:
            "T3 means the vocal cord is FIXED (immobile), not just impaired. There's a difference between impaired mobility and fixation. Our patient still has some cord movement, so it's T2, not T3!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'sv-s4',
      type: 'treatment',
      narrative:
        'With Stage II glottic carcinoma (T2 N0 M0), what is the recommended treatment?',
      pihuComment:
        "Treatment for early glottic cancer! This is where we can either use radiation or surgery. What's the standard approach for T2 glottic SCC?",
      choices: [
        {
          id: 'sv-s4-a',
          text: 'Radical radiotherapy to the larynx -- offers good cure rates with voice preservation',
          isCorrect: true,
          pihuFeedback:
            "Excellent choice, Sammy! For T1-T2 glottic carcinoma, radiotherapy is preferred because it offers comparable cure rates to surgery (80-90% for T2) WITH voice preservation. EXAM PEARL: Glottic cancers have the BEST prognosis among laryngeal cancers because (1) they present early with hoarseness, (2) poor lymphatic drainage means less nodal spread, and (3) they respond well to radiation. Surgery is reserved for radiation failures. This singer may get her voice back!",
          nextStepId: null,
        },
        {
          id: 'sv-s4-b',
          text: 'Total laryngectomy immediately',
          isCorrect: false,
          pihuFeedback:
            "Too aggressive for early-stage disease! Total laryngectomy permanently removes the voice box. For T2 N0 M0, radiation offers excellent cure rates with voice preservation. Laryngectomy is for advanced disease or radiation failures!",
          nextStepId: null,
        },
        {
          id: 'sv-s4-c',
          text: 'Chemotherapy alone with cisplatin-based regimen',
          isCorrect: false,
          pihuFeedback:
            "Chemotherapy alone is NOT the standard treatment for laryngeal SCC. Chemo is used as an adjunct (concurrent chemoradiation) for advanced disease. For early-stage glottic cancer, radiation alone is sufficient!",
          nextStepId: null,
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// CASE 8 — Choking at a Wedding
// ─────────────────────────────────────────────────────────────
const weddingChoking: ClinicalCase = {
  id: 'wedding-choking',
  title: 'Choking at a Wedding',
  emoji: '🤵',
  subjectSlug: 'ent',
  topicSlugs: ['airway_emergencies'],
  difficulty: 'hard',
  estimatedMinutes: 5,
  patientSummary:
    'A 4-year-old child at a wedding suddenly starts choking while eating peanuts. He becomes cyanotic with stridor and severe respiratory distress.',
  totalScore: 50,
  steps: [
    {
      id: 'wc-s1',
      type: 'presentation',
      narrative:
        'You are a guest at a wedding when chaos erupts. Little Arjun, 4, was eating peanuts when he suddenly started coughing violently, then became silent with stridor, drooling, and is turning blue. He is conscious but cannot speak or cry effectively. His mother screams for help. You rush to him. What is your IMMEDIATE action?',
      pihuComment:
        "AIRWAY EMERGENCY, Sammy! A choking child who cannot speak or cough effectively = COMPLETE obstruction. This is life or death. Think fast -- what do we do for a conscious choking child over 1 year?",
      choices: [
        {
          id: 'wc-s1-a',
          text: 'Perform abdominal thrusts (Heimlich maneuver) -- stand behind, fist above umbilicus, quick upward thrusts',
          isCorrect: true,
          pihuFeedback:
            "YES! For a conscious choking child over 1 year: ABDOMINAL THRUSTS (Heimlich maneuver). Stand behind, place fist above umbilicus and below xiphoid, quick inward-upward thrusts. EXAM PEARL: For infants under 1 year: 5 back blows + 5 chest thrusts (NOT abdominal thrusts -- risk of liver injury). For unconscious patient: start CPR. This is LIFE-SAVING knowledge!",
          nextStepId: 'wc-s2',
        },
        {
          id: 'wc-s1-b',
          text: 'Open his mouth and try to blindly sweep the object out with your finger',
          isCorrect: false,
          pihuFeedback:
            "NEVER do blind finger sweeps, especially in children! You can push the foreign body deeper and cause complete obstruction. Only remove an object if you can clearly SEE it. The correct maneuver for a conscious child over 1 year is abdominal thrusts!",
          nextStepId: null,
        },
        {
          id: 'wc-s1-c',
          text: 'Lay him down and start chest compressions immediately',
          isCorrect: false,
          pihuFeedback:
            "CPR/chest compressions are for an UNCONSCIOUS choking victim or cardiac arrest. This child is still conscious! For a conscious choking child, we do abdominal thrusts (Heimlich) first. If he loses consciousness, THEN we start CPR.",
          nextStepId: null,
        },
        {
          id: 'wc-s1-d',
          text: 'Hold him upside down and shake him',
          isCorrect: false,
          pihuFeedback:
            "No no Sammy! That's dangerous and not an approved technique. It can cause injury and doesn't reliably dislodge foreign bodies. Stick to the evidence-based technique: abdominal thrusts for children over 1 year!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'wc-s2',
      type: 'investigation',
      narrative:
        'Your Heimlich maneuver partially relieves the obstruction. Arjun coughs out a peanut fragment but continues to wheeze on the right side with decreased air entry. He is now crying but still in distress. The ambulance arrives. At the hospital, what investigation should be done?',
      pihuComment:
        "Partial relief! But the unilateral wheeze with decreased air entry on one side means there might be a remaining foreign body. What imaging do we need?",
      choices: [
        {
          id: 'wc-s2-a',
          text: 'Chest X-ray (PA view in inspiration AND expiration) looking for unilateral hyperinflation or air trapping',
          isCorrect: true,
          pihuFeedback:
            "Brilliant! Inspiratory AND expiratory chest X-rays are key. Peanuts are radiolucent (not visible on X-ray directly), but they cause a BALL-VALVE effect -- air goes in but can't come out. EXAM PEARL: On expiratory film, the affected side stays hyperinflated while the normal side deflates. This is the HALLMARK of an aspirated foreign body. For very young/uncooperative children, bilateral decubitus views can substitute!",
          nextStepId: 'wc-s3',
        },
        {
          id: 'wc-s2-b',
          text: 'CT chest with 3D reconstruction',
          isCorrect: false,
          pihuFeedback:
            "CT is helpful but exposes the child to significant radiation and may delay management. A simple inspiratory-expiratory chest X-ray is the initial investigation of choice. CT is for complex or unclear cases!",
          nextStepId: null,
        },
        {
          id: 'wc-s2-c',
          text: 'No imaging needed -- the child coughed out the peanut, so just observe',
          isCorrect: false,
          pihuFeedback:
            "The child still has unilateral wheeze and decreased air entry! He coughed out only a FRAGMENT. There may be remaining pieces in the airway. Observation without imaging is dangerous here!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'wc-s3',
      type: 'diagnosis',
      narrative:
        'Expiratory chest X-ray shows right-sided hyperinflation with mediastinal shift to the left. The right lung does not deflate on expiration. What is the diagnosis and definitive management?',
      pihuComment:
        "Obstructive emphysema on the right side -- classic ball-valve effect! Now, what's the definitive treatment to remove that peanut from the right bronchus?",
      choices: [
        {
          id: 'wc-s3-a',
          text: 'Rigid bronchoscopy under general anesthesia for foreign body removal',
          isCorrect: true,
          pihuFeedback:
            "CORRECT! Rigid bronchoscopy under GA is the GOLD STANDARD for airway foreign body removal in children. EXAM PEARL: Rigid (not flexible) bronchoscopy is preferred because it allows ventilation during the procedure AND has better instruments for grasping. Right main bronchus is the most common site of FB lodgment because it's wider, shorter, and more vertical than the left. Peanuts are the most common aspirated FB in children!",
          nextStepId: 'wc-s4',
        },
        {
          id: 'wc-s3-b',
          text: 'Flexible bronchoscopy in the OPD under local anesthesia',
          isCorrect: false,
          pihuFeedback:
            "Flexible bronchoscopy under local anesthesia in a 4-year-old child? That won't work! Children need GA, and rigid bronchoscopy gives better visualization, ventilation capability, and superior instruments for foreign body extraction. Rigid under GA is the standard!",
          nextStepId: null,
        },
        {
          id: 'wc-s3-c',
          text: 'Chest physiotherapy and postural drainage to expectorate the peanut',
          isCorrect: false,
          pihuFeedback:
            "Postural drainage for an impacted foreign body? That's not reliable and is dangerous -- it could dislodge the FB into the trachea causing complete obstruction! Definitive removal under direct vision with rigid bronchoscopy is the only safe approach!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'wc-s4',
      type: 'outcome',
      narrative:
        'Rigid bronchoscopy successfully removes peanut fragments from the right main bronchus. Arjun recovers well. His mother asks what she should do to prevent this in the future. What key advice do you give?',
      pihuComment:
        "Case saved! Now the all-important prevention counseling. What do parents need to know about choking risks in young children?",
      choices: [
        {
          id: 'wc-s4-a',
          text: 'Avoid giving peanuts, hard candies, and small round foods to children under 5. Always supervise children while eating. Learn basic choking first aid.',
          isCorrect: true,
          pihuFeedback:
            "PERFECT counseling! Key prevention points: (1) No peanuts/nuts for children under 5, (2) Cut grapes/hot dogs lengthwise, (3) Supervise mealtimes, (4) No eating while running/playing, (5) Parents should learn Heimlich maneuver. EXAM NOTE: Foreign body aspiration is most common in children aged 1-3 years. Right main bronchus is most commonly affected. Prevention > Treatment always! Great job on this emergency case, Sammy!",
          nextStepId: null,
        },
        {
          id: 'wc-s4-b',
          text: 'Just crush the peanuts into smaller pieces next time',
          isCorrect: false,
          pihuFeedback:
            "Even crushed peanut pieces can be aspirated by a young child! The recommendation is to avoid peanuts entirely for children under 5. Small pieces can still enter the airway. Prevention means elimination of the risk!",
          nextStepId: null,
        },
        {
          id: 'wc-s4-c',
          text: 'No specific precautions needed, this was just bad luck',
          isCorrect: false,
          pihuFeedback:
            "Foreign body aspiration is a PREVENTABLE cause of death in children! It's not just bad luck -- giving peanuts to young children is a known risk factor. Counseling on prevention is a medical responsibility and an exam-relevant topic!",
          nextStepId: null,
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// CASE 9 — The Unidentified Body
// ─────────────────────────────────────────────────────────────
const unidentifiedBody: ClinicalCase = {
  id: 'unidentified-body',
  title: 'The Unidentified Body',
  emoji: '🔍',
  subjectSlug: 'forensic_medicine',
  topicSlugs: ['identification', 'postmortem_changes'],
  difficulty: 'medium',
  estimatedMinutes: 7,
  patientSummary:
    'An unidentified decomposing body is found near railway tracks. As the postmortem doctor, you must establish identity and time since death.',
  totalScore: 50,
  steps: [
    {
      id: 'ub-s1',
      type: 'presentation',
      narrative:
        'Police bring an unidentified male body found near railway tracks. The body is bloated with greenish discoloration of the abdomen, marbling of skin, and foul smell. Maggots are present. There are no identity documents. The face is unrecognizable due to decomposition. What postmortem change helps you estimate that death occurred approximately 48-72 hours ago?',
      pihuComment:
        "Forensic medicine detective mode ON! Decomposition changes help us estimate time since death. Bloating + green abdomen + marbling + maggots... what stage are we looking at?",
      choices: [
        {
          id: 'ub-s1-a',
          text: 'The greenish discoloration of the right iliac fossa spreading to abdomen (decomposition sign), along with bloating and marbling, suggests 48-72 hours',
          isCorrect: true,
          pihuFeedback:
            "Correct! EXAM TIMELINE for postmortem changes: Green discoloration starts at right iliac fossa at 24-48 hrs (cecum has most bacteria). Bloating from gas at 48-72 hrs. Marbling (vascular patterns) at 36-72 hrs. Maggots appear within 24 hrs in tropical climate. PEARL: Why right iliac fossa? Because the CECUM has the highest bacterial concentration! This timeline is asked every single exam!",
          nextStepId: 'ub-s2',
        },
        {
          id: 'ub-s1-b',
          text: 'Rigor mortis in all muscles indicates 12-24 hours',
          isCorrect: false,
          pihuFeedback:
            "If the body is already bloated with marbling and maggots, we're PAST the rigor mortis stage! Rigor develops in 2-4 hrs, is complete by 12 hrs, and passes off by 24-36 hrs. This body shows decomposition changes, which come AFTER rigor passes off.",
          nextStepId: null,
        },
        {
          id: 'ub-s1-c',
          text: 'Algor mortis (body cooling) suggests death within 6 hours',
          isCorrect: false,
          pihuFeedback:
            "A body that's bloated and green has been dead MUCH longer than 6 hours! Algor mortis (cooling) is useful only in the first 12-18 hours. Once decomposition sets in, temperature is useless for timing. Match the change to the timeline!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'ub-s2',
      type: 'investigation',
      narrative:
        'The face is unrecognizable. You need to establish identity. The body has intact teeth, and you notice a healed fracture of the right tibia. The fingertips are partially preserved. What is the MOST reliable method of identification for this body?',
      pihuComment:
        "Identification of unknown bodies is a crucial forensic topic! When the face is gone, what's the most reliable way to identify someone?",
      choices: [
        {
          id: 'ub-s2-a',
          text: 'DNA profiling (DNA fingerprinting) -- the most reliable and definitive method',
          isCorrect: true,
          pihuFeedback:
            "CORRECT! DNA profiling is the MOST RELIABLE and definitive method of identification. It can be done even from decomposed remains (bones, teeth, hair roots). EXAM RANKING of identification methods by reliability: (1) DNA profiling (most reliable), (2) Fingerprints (if available), (3) Dental records, (4) Old fractures/implants, (5) Physical features. DNA can identify even highly decomposed remains!",
          nextStepId: 'ub-s3',
        },
        {
          id: 'ub-s2-b',
          text: 'Fingerprints are the most reliable method',
          isCorrect: false,
          pihuFeedback:
            "Fingerprints are excellent and were historically the gold standard, but they require intact fingertip skin AND a database to match against. In decomposing bodies, fingerprints may be destroyed. DNA profiling has surpassed fingerprints as the most reliable method!",
          nextStepId: null,
        },
        {
          id: 'ub-s2-c',
          text: 'Dental examination is the gold standard',
          isCorrect: false,
          pihuFeedback:
            "Dental records are very useful and resistant to decomposition, but they require ante-mortem dental records for comparison. Without prior records, teeth alone can only give age and dietary info. DNA profiling doesn't need prior records for family matching!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'ub-s3',
      type: 'diagnosis',
      narrative:
        'During autopsy, you find the hyoid bone is fractured. There are ligature marks on the neck with an oblique, non-continuous pattern going upward behind the ear. No other injuries. What does this pattern suggest?',
      pihuComment:
        "Hyoid fracture + ligature mark pattern -- this is where forensic medicine gets really interesting! The pattern of the ligature mark tells us the mechanism. Oblique, going up behind the ear...",
      choices: [
        {
          id: 'ub-s3-a',
          text: 'Hanging -- the ligature mark is oblique, non-continuous, above the thyroid cartilage, going upward toward the point of suspension',
          isCorrect: true,
          pihuFeedback:
            "Excellent! In HANGING, the ligature mark is: Oblique, non-continuous (gap at knot point), above thyroid cartilage, going upward to the point of suspension. EXAM COMPARISON: In strangulation, the mark is HORIZONTAL, continuous, at or below thyroid cartilage, and deeper all around. Hyoid fracture is more common in strangulation but can occur in hanging too, especially in people over 40 (calcified hyoid). This distinction is EXAM GOLD!",
          nextStepId: 'ub-s4',
        },
        {
          id: 'ub-s3-b',
          text: 'Strangulation by ligature -- consistent with homicide',
          isCorrect: false,
          pihuFeedback:
            "In ligature strangulation, the mark is HORIZONTAL, continuous all around, and at or BELOW thyroid cartilage level. Our case has an OBLIQUE, NON-CONTINUOUS mark going UPWARD -- that's the pattern of hanging, not strangulation. The direction and continuity of the mark is the key difference!",
          nextStepId: null,
        },
        {
          id: 'ub-s3-c',
          text: 'Manual strangulation (throttling) by hands',
          isCorrect: false,
          pihuFeedback:
            "Manual strangulation (throttling) shows nail marks, finger-tip bruises, and crescentic nail abrasions on the neck -- not a ligature pattern. There's no continuous ligature mark in throttling. The pattern here clearly shows a ligature was used!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'ub-s4',
      type: 'treatment',
      narrative:
        'You determine the cause of death as asphyxia due to hanging. Now the magistrate asks you: can you determine whether this was suicidal or homicidal hanging? What is your forensic opinion?',
      pihuComment:
        "The million-dollar forensic question! Suicide vs homicide in hanging. What does the evidence tell us?",
      choices: [
        {
          id: 'ub-s4-a',
          text: 'Hanging is almost always suicidal. Absence of defense wounds, signs of struggle, or other injuries supports suicidal hanging. Homicidal hanging is extremely rare.',
          isCorrect: true,
          pihuFeedback:
            "Spot on! EXAM FACT: Hanging is almost ALWAYS suicidal (most common manner). Homicidal hanging is extremely rare because a conscious person will resist. Signs favoring homicide: defense wounds, signs of struggle, bound hands, bruises. Signs favoring suicide: no struggle marks, suicide note, history of depression. PEARL: Ligature strangulation is usually HOMICIDAL. Hanging is usually SUICIDAL. This distinction is asked in every forensic exam!",
          nextStepId: null,
        },
        {
          id: 'ub-s4-b',
          text: 'The hyoid fracture proves it was homicidal',
          isCorrect: false,
          pihuFeedback:
            "Hyoid fracture alone does NOT determine manner of death! It can occur in both hanging (especially in older individuals with calcified hyoid) and strangulation. The manner (suicidal vs homicidal) is determined by circumstantial evidence, not just the fracture!",
          nextStepId: null,
        },
        {
          id: 'ub-s4-c',
          text: 'It is impossible to distinguish suicidal from homicidal hanging',
          isCorrect: false,
          pihuFeedback:
            "While it can be challenging, there ARE forensic indicators that help differentiate. Absence of defense wounds, no signs of struggle, and the statistical rarity of homicidal hanging all help. A forensic expert can give an opinion based on the totality of evidence!",
          nextStepId: null,
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// CASE 10 — Suspicious Death
// ─────────────────────────────────────────────────────────────
const suspiciousDeath: ClinicalCase = {
  id: 'suspicious-death',
  title: 'Suspicious Death',
  emoji: '☠️',
  subjectSlug: 'forensic_medicine',
  topicSlugs: ['poisoning', 'asphyxia', 'legal_procedures'],
  difficulty: 'hard',
  estimatedMinutes: 8,
  patientSummary:
    'A 28-year-old newly married woman is brought dead to the hospital with burns on her body. The husband claims it was a kitchen accident. Police suspect dowry death.',
  totalScore: 60,
  steps: [
    {
      id: 'sd-s1',
      type: 'presentation',
      narrative:
        'Meera, 28, married 8 months ago, is brought dead to the ER. She has extensive burns. Her husband says, "Kitchen mein stove phatt gaya." But her parents claim she was being harassed for dowry. You notice the burns are predominantly on the front of the body and upper limbs with a "splash" pattern. Her clothes have a kerosene-like smell. What is the legal significance of this death?',
      pihuComment:
        "This is a sensitive but SUPER important forensic case. A married woman dying of burns within 7 years of marriage? There are specific legal provisions for this. Think Section 304B IPC...",
      choices: [
        {
          id: 'sd-s1-a',
          text: 'This is a suspected dowry death under Section 304B IPC since death occurred within 7 years of marriage under suspicious circumstances. Postmortem is mandatory.',
          isCorrect: true,
          pihuFeedback:
            "CORRECT! Section 304B IPC: If a woman dies of burns or bodily injury within 7 YEARS of marriage, and there's evidence of dowry harassment, it's presumed to be a dowry death until proven otherwise. EXAM PEARL: Burden of proof shifts to the ACCUSED (reverse onus). Postmortem is mandatory under Section 174 CrPC (now BNSS). This is one of the most important medico-legal topics!",
          nextStepId: 'sd-s2',
        },
        {
          id: 'sd-s1-b',
          text: 'Since the husband says it was an accident, accept his statement and issue a death certificate',
          isCorrect: false,
          pihuFeedback:
            "ABSOLUTELY NOT! A doctor cannot just accept the husband's version in a suspicious burn death of a young married woman. This requires a medico-legal case (MLC) registration, police investigation, and mandatory postmortem. Accepting his version without investigation would be a grave medicolegal error!",
          nextStepId: null,
        },
        {
          id: 'sd-s1-c',
          text: 'This is a routine accidental death case, no police involvement needed',
          isCorrect: false,
          pihuFeedback:
            "Wrong, Sammy! Any death within 7 years of marriage, especially by burns, is automatically suspicious under Indian law. Police must be informed, FIR should be filed, and postmortem examination is MANDATORY. Never treat such cases as routine!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'sd-s2',
      type: 'investigation',
      narrative:
        'During postmortem examination, you find that the burns are predominantly on the anterior aspect of the body with a splash pattern. The back is relatively spared. The hair is singed. You also notice old healed bruises on both arms. What pattern of burns suggests homicidal rather than accidental burns?',
      pihuComment:
        "Burns pattern analysis is crucial forensic evidence! Where the burns are and what pattern they form tells us a lot about how they occurred. Think about it...",
      choices: [
        {
          id: 'sd-s2-a',
          text: 'Accidental stove burns typically affect the lower body and are patchy. These anterior splash pattern burns with a relatively spared back suggest the person was doused from the front -- consistent with homicidal burns.',
          isCorrect: true,
          pihuFeedback:
            "Excellent analysis! EXAM TABLE: Suicidal burns = often pour kerosene over head, burns on top of head, scalp. Accidental burns = lower body (sari catching fire), patchy, irregular. Homicidal burns = splash pattern, accelerant poured FROM OUTSIDE (anterior body), back may be spared, old injuries suggesting prior abuse. The old bruises on arms suggest prior domestic violence. Document EVERYTHING!",
          nextStepId: 'sd-s3',
        },
        {
          id: 'sd-s2-b',
          text: 'All burn patterns look the same regardless of cause',
          isCorrect: false,
          pihuFeedback:
            "That's completely wrong! Burn patterns are like fingerprints of the mechanism. The distribution, depth, presence of accelerant, sparing of certain areas, and associated injuries all help determine suicidal vs accidental vs homicidal. This is core forensic medicine!",
          nextStepId: null,
        },
        {
          id: 'sd-s2-c',
          text: 'Anterior burns always indicate suicide by self-immolation',
          isCorrect: false,
          pihuFeedback:
            "Not necessarily! In self-immolation, burns often start from the HEAD (person pours kerosene over themselves). Anterior splash pattern with back spared suggests someone else threw the accelerant on the victim from the front. Context matters in forensic interpretation!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'sd-s3',
      type: 'diagnosis',
      narrative:
        'You collect viscera samples and send them to the Forensic Science Laboratory (FSL). On internal examination, you find soot particles only in the mouth and upper trachea, NOT in the lower airways. There is no cherry-red discoloration of blood. What does the absence of soot in lower airways indicate?',
      pihuComment:
        "This is a CRITICAL forensic finding! The presence or absence of soot in the airways tells us something very important about whether the person was alive or dead when the fire started...",
      choices: [
        {
          id: 'sd-s3-a',
          text: 'The person was likely dead or unconscious before the major burning occurred. Soot only in upper airways suggests minimal breathing during the fire.',
          isCorrect: true,
          pihuFeedback:
            "CRUCIAL finding, Sammy! If a person is ALIVE during a fire, they breathe in soot deep into the bronchi and lungs, and CO causes cherry-red lividity. Absence of deep soot inhalation and no cherry-red blood suggests the person was NOT ALIVE (or barely conscious) when the major burning occurred. EXAM PEARL: Signs of ante-mortem burns = soot in airways, cherry-red blood (CO), vital reaction in burn wounds. Absence of these suggests postmortem burns or person was already dead/unconscious!",
          nextStepId: 'sd-s4',
        },
        {
          id: 'sd-s3-b',
          text: 'It means the fire was in an open area with good ventilation',
          isCorrect: false,
          pihuFeedback:
            "Ventilation doesn't explain absence of soot in lower airways. If a person is breathing in a fire, soot enters the lungs regardless of ventilation. The key finding is that this person was NOT actively breathing when the fire was significant -- suggesting she was already dead or rendered unconscious!",
          nextStepId: null,
        },
        {
          id: 'sd-s3-c',
          text: 'This is a normal finding in all burn deaths',
          isCorrect: false,
          pihuFeedback:
            "No! In genuine ante-mortem burn deaths, soot is found deep in the airways and the blood shows cherry-red color from carboxyhemoglobin. The ABSENCE of these findings is abnormal and suspicious -- it suggests the person was not breathing during the fire. This is a red flag for homicide!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'sd-s4',
      type: 'treatment',
      narrative:
        'Your postmortem findings suggest: (1) Homicidal burn pattern, (2) Evidence of prior physical abuse, (3) Person was likely unconscious/dead before major burning. The magistrate asks you to prepare a postmortem report. Under which legal section do you submit the cause of death, and what should you mention?',
      pihuComment:
        "Time to write the medicolegal report! This is where your documentation becomes legal evidence. What goes into the PM report?",
      choices: [
        {
          id: 'sd-s4-a',
          text: 'Cause of death: burns with evidence suggesting ante-mortem assault. Opinion: death is consistent with homicidal burns. Note the old injuries. Submit under Section 174 CrPC. Preserve viscera for chemical analysis.',
          isCorrect: true,
          pihuFeedback:
            "TEXTBOOK answer! The PM report should include: (1) Detailed description of all injuries (old and new), (2) Burn pattern analysis, (3) Airway findings, (4) Viscera preservation for FSL (to check for poison/sedation), (5) Cause of death, (6) Opinion on manner (homicidal). Section 174 CrPC (now BNSS) covers inquest by police/magistrate. EXAM TIP: Always preserve viscera in saturated common salt solution in a sealed container for FSL analysis. Document everything meticulously!",
          nextStepId: 'sd-s5',
        },
        {
          id: 'sd-s4-b',
          text: 'Simply write "cause of death: burns" without any opinion on manner of death',
          isCorrect: false,
          pihuFeedback:
            "A forensic pathologist MUST give an opinion on the manner of death when the evidence supports it. Writing just 'burns' without the critical findings is incomplete and doesn't serve justice. Your expertise is specifically sought for this opinion!",
          nextStepId: null,
        },
        {
          id: 'sd-s4-c',
          text: 'Declare it as suicidal burn death based on the anterior distribution',
          isCorrect: false,
          pihuFeedback:
            "The evidence does NOT support suicide! Anterior splash pattern with spared back, absent deep soot inhalation, old abuse marks -- all point to homicidal burns. A forensic doctor must be objective and let the evidence speak, not make assumptions!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'sd-s5',
      type: 'outcome',
      narrative:
        'FSL report comes back showing presence of organophosphorus compound in the viscera, suggesting the victim was poisoned before being set on fire. The case is now registered under Section 302 (murder) and 304B (dowry death) IPC. What is the punishment for dowry death under Section 304B IPC?',
      pihuComment:
        "The full picture emerges -- poisoned first, then set on fire. Horrific but unfortunately tested in exams. What's the legal punishment?",
      choices: [
        {
          id: 'sd-s5-a',
          text: 'Minimum 7 years imprisonment, which may extend to life imprisonment',
          isCorrect: true,
          pihuFeedback:
            "Correct! Section 304B IPC: Dowry death carries a MINIMUM of 7 years and maximum of life imprisonment. EXAM PEARLS: (1) 304B = Dowry death (min 7 yrs to life), (2) 302 = Murder (death/life imprisonment), (3) 498A = Cruelty by husband/relatives (up to 3 yrs). These sections are ALWAYS asked in forensic viva! Remember: 7 years of marriage is the cutoff for 304B presumption. Sammy, you handled this tough case beautifully!",
          nextStepId: null,
        },
        {
          id: 'sd-s5-b',
          text: 'Maximum 3 years imprisonment with fine',
          isCorrect: false,
          pihuFeedback:
            "3 years is the punishment under Section 498A (cruelty), not 304B (dowry death). Dowry death is a much more serious offense with a MINIMUM of 7 years. Don't confuse the sections!",
          nextStepId: null,
        },
        {
          id: 'sd-s5-c',
          text: 'Only fine, no imprisonment since it cannot be proven beyond doubt',
          isCorrect: false,
          pihuFeedback:
            "Under Section 304B, the burden of proof is REVERSED (presumption of dowry death). The accused has to prove their innocence. And the minimum punishment is 7 years imprisonment, not just a fine. The law is very strict on dowry deaths!",
          nextStepId: null,
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// CASE 11 — A Face That Wouldn't Move
// ─────────────────────────────────────────────────────────────
const frozenFace: ClinicalCase = {
  id: 'frozen-face',
  title: "A Face That Wouldn't Move",
  emoji: '😐',
  subjectSlug: 'ent',
  topicSlugs: ['facial_nerve_palsy', 'squint'],
  difficulty: 'medium',
  estimatedMinutes: 6,
  patientSummary:
    'A 30-year-old man wakes up and notices the right side of his face is drooping. He cannot close his right eye, and water dribbles from the right corner of his mouth.',
  totalScore: 50,
  steps: [
    {
      id: 'ff-s1',
      type: 'presentation',
      narrative:
        'Rahul, 30, rushes to your clinic in panic. "Doctor, subah utha toh chehra tedha ho gaya! Aankh band nahi ho rahi, paani muh se gir raha hai!" He noticed this suddenly upon waking. He had a mild cold 2 days ago. On examination: right-sided facial weakness affecting BOTH upper and lower face, inability to close the right eye, loss of forehead wrinkles on the right, and mouth drooling to the right. What type of facial nerve palsy is this?',
      pihuComment:
        "The ENTIRE right side of the face is affected -- both upper and lower parts, including the forehead! This distinction is the MOST important thing in facial nerve palsy. What does it tell us?",
      choices: [
        {
          id: 'ff-s1-a',
          text: 'Lower Motor Neuron (LMN) facial nerve palsy -- affecting both upper and lower face on the same side',
          isCorrect: true,
          pihuFeedback:
            "YES! LMN lesion affects the ENTIRE half of the face (both upper and lower). UMN lesion spares the FOREHEAD (because the forehead muscles receive bilateral cortical innervation). EXAM GOLD: Can't wrinkle forehead = LMN. Can wrinkle forehead = UMN. This is the SINGLE MOST IMPORTANT distinction in facial nerve examination. Write it in bold in your notes!",
          nextStepId: 'ff-s2',
        },
        {
          id: 'ff-s1-b',
          text: 'Upper Motor Neuron (UMN) facial nerve palsy from a stroke',
          isCorrect: false,
          pihuFeedback:
            "In UMN lesion (like stroke), the FOREHEAD is SPARED because it gets bilateral cortical input. This patient has lost forehead wrinkles -- that means the entire nerve below the nucleus is affected. This is LMN, not UMN!",
          nextStepId: null,
        },
        {
          id: 'ff-s1-c',
          text: 'Bilateral facial nerve palsy from Guillain-Barre syndrome',
          isCorrect: false,
          pihuFeedback:
            "GBS can cause bilateral facial palsy, but this patient has UNILATERAL involvement (only right side). Also, GBS typically presents with ascending paralysis starting from the legs. This is a unilateral LMN facial palsy!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'ff-s2',
      type: 'investigation',
      narrative:
        "You confirm LMN facial nerve palsy. The patient has no ear discharge, no vesicles, no parotid swelling, and hearing is normal. He had a viral URI 2 days ago. There are no other cranial nerve deficits. What is the most likely diagnosis?",
      pihuComment:
        "Isolated LMN facial palsy after a viral URI, no other findings... this is the most common cause of facial palsy! What's it called?",
      choices: [
        {
          id: 'ff-s2-a',
          text: "Bell's palsy -- idiopathic LMN facial nerve palsy, likely post-viral inflammation",
          isCorrect: true,
          pihuFeedback:
            "CORRECT! Bell's palsy is the most common cause of unilateral LMN facial nerve palsy. It's idiopathic but thought to be due to viral reactivation (HSV-1) causing inflammation and edema of the nerve within the facial canal. EXAM PEARL: Bell's palsy is a diagnosis of EXCLUSION. Rule out: Ramsay Hunt syndrome (herpes zoster -- look for vesicles), CSOM with cholesteatoma, parotid tumor, acoustic neuroma. No vesicles here = not Ramsay Hunt!",
          nextStepId: 'ff-s3',
        },
        {
          id: 'ff-s2-b',
          text: 'Ramsay Hunt syndrome from herpes zoster',
          isCorrect: false,
          pihuFeedback:
            "Ramsay Hunt syndrome (Herpes Zoster Oticus) presents with facial palsy + vesicles on the ear/ear canal + severe ear pain. There are NO vesicles in this patient. No vesicles = not Ramsay Hunt. It's Bell's palsy!",
          nextStepId: null,
        },
        {
          id: 'ff-s2-c',
          text: 'Parotid gland tumor compressing the nerve',
          isCorrect: false,
          pihuFeedback:
            "Parotid tumors cause slowly progressive facial weakness, not sudden onset. Also, there would be a palpable parotid swelling. This patient has sudden onset after a viral illness with no swelling -- classic Bell's palsy!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'ff-s3',
      type: 'diagnosis',
      narrative:
        "You diagnose Bell's palsy. The patient is very worried about his eye -- he can't close it and it feels dry and irritated. What is the most important immediate concern regarding the eye?",
      pihuComment:
        "Eye protection is CRITICAL in facial palsy! When you can't close the eye, what happens to the cornea?",
      choices: [
        {
          id: 'ff-s3-a',
          text: 'Exposure keratitis -- the cornea dries out because the eye cannot close (lagophthalmos), leading to corneal ulceration',
          isCorrect: true,
          pihuFeedback:
            "Exactly! Lagophthalmos (inability to close the eye) leads to exposure keratitis and corneal ulceration. This is the most serious complication to prevent in Bell's palsy. IMMEDIATE eye care: artificial tears during the day, lubricating ointment at night, tape the eye shut while sleeping. EXAM PEARL: Bell's phenomenon -- when attempting to close the eye, the eyeball rolls upward, exposing the cornea. This protective reflex is present in Bell's palsy!",
          nextStepId: 'ff-s4',
        },
        {
          id: 'ff-s3-b',
          text: 'Glaucoma from increased eye pressure',
          isCorrect: false,
          pihuFeedback:
            "Bell's palsy doesn't cause glaucoma. The concern is the OPEN eye drying out. When you can't blink or close the eye, the cornea loses its tear film protection and is at risk of drying, ulceration, and potentially permanent scarring!",
          nextStepId: null,
        },
        {
          id: 'ff-s3-c',
          text: 'Retinal detachment from the nerve damage',
          isCorrect: false,
          pihuFeedback:
            "The facial nerve controls the eyelid muscles, not the retina. Retinal detachment is not a complication of facial palsy. The concern is corneal exposure from inability to close the eye!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'ff-s4',
      type: 'treatment',
      narrative:
        "What is the standard medical treatment for Bell's palsy if the patient presents within 72 hours of onset?",
      pihuComment:
        "Treatment within the golden window of 72 hours! There's strong evidence for one particular drug class. What is it?",
      choices: [
        {
          id: 'ff-s4-a',
          text: "Oral corticosteroids (Prednisolone 1mg/kg/day for 5 days, then taper over 5 days) started within 72 hours + eye care",
          isCorrect: true,
          pihuFeedback:
            "PERFECT! Prednisolone within 72 hours is the CORNERSTONE of Bell's palsy treatment. It reduces inflammation and edema of the nerve. EXAM FACTS: Steroids alone improve recovery rate significantly. Adding antivirals (Acyclovir/Valacyclovir) is debatable but often given for severe cases. Eye care is ESSENTIAL -- artificial tears + ointment + taping. Prognosis: 85% recover completely within 3-6 months even without treatment, but steroids improve outcomes!",
          nextStepId: null,
        },
        {
          id: 'ff-s4-b',
          text: 'Emergency surgical decompression of the facial nerve',
          isCorrect: false,
          pihuFeedback:
            "Surgery is NOT first-line for Bell's palsy. It's controversial and only considered for complete paralysis not responding to medical therapy after several months. Medical management with steroids is the standard treatment!",
          nextStepId: null,
        },
        {
          id: 'ff-s4-c',
          text: 'Antibiotics (Amoxicillin) since it might be an infection',
          isCorrect: false,
          pihuFeedback:
            "Bell's palsy is thought to be viral (HSV-1), not bacterial. Antibiotics have no role here. The key treatment is STEROIDS to reduce nerve inflammation. If antivirals are used, it's acyclovir or valacyclovir, not antibiotics!",
          nextStepId: null,
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// CASE 12 — The Ethics Dilemma
// ─────────────────────────────────────────────────────────────
const ethicsDilemma: ClinicalCase = {
  id: 'ethics-dilemma',
  title: 'The Ethics Dilemma',
  emoji: '⚖️',
  subjectSlug: 'forensic_medicine',
  topicSlugs: ['medical_ethics', 'ipc_crpc_basics'],
  difficulty: 'easy',
  estimatedMinutes: 5,
  patientSummary:
    'A 16-year-old girl is brought to the ER after a road traffic accident. She needs emergency surgery but her parents cannot be reached. The doctor faces an ethical and legal dilemma regarding consent.',
  totalScore: 40,
  steps: [
    {
      id: 'ed-s1',
      type: 'presentation',
      narrative:
        'Ananya, 16, is brought to the emergency department after a scooter accident. She has a ruptured spleen with internal bleeding and is hemodynamically unstable (BP 80/50, pulse 130). She needs emergency splenectomy. She is conscious but in pain. Her parents are in another city and cannot be reached by phone. The surgical team is ready. Can you proceed with surgery without parental consent?',
      pihuComment:
        "Medical ethics meets emergency medicine! This is a classic exam scenario. A minor in a life-threatening emergency and parents are unreachable. What does the law say?",
      choices: [
        {
          id: 'ed-s1-a',
          text: 'Yes -- in a life-threatening emergency, implied consent applies. Treatment should not be delayed for want of consent when delay would endanger life.',
          isCorrect: true,
          pihuFeedback:
            "CORRECT! In a bona fide emergency where delay would endanger life, IMPLIED CONSENT applies. You don't need written consent. EXAM PEARL: Types of consent -- (1) Implied (emergencies), (2) Expressed (verbal or written), (3) Informed (detailed explanation given). Section 92 IPC: An act done in good faith for the benefit of a person without consent is not an offense if the person cannot give consent and no guardian is available. SAVE THE LIFE FIRST!",
          nextStepId: 'ed-s2',
        },
        {
          id: 'ed-s1-b',
          text: 'No -- wait for parents to arrive since she is a minor and cannot consent for herself',
          isCorrect: false,
          pihuFeedback:
            "Waiting could KILL the patient! A ruptured spleen with hemodynamic instability is a surgical emergency. The law protects doctors who act in good faith in emergencies. Implied consent applies here. Never let a patient die waiting for paperwork!",
          nextStepId: null,
        },
        {
          id: 'ed-s1-c',
          text: 'Ask the 16-year-old to sign her own consent since she is conscious',
          isCorrect: false,
          pihuFeedback:
            "A minor (under 18) cannot give valid legal consent in India, except in specific situations. While her assent matters, it's not legally sufficient. In this emergency, the correct approach is implied consent -- proceed with surgery in good faith to save her life!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'ed-s2',
      type: 'investigation',
      narrative:
        'The surgery is successful. Next day, you have another patient: a 25-year-old man brought unconscious after an accident. Blood tests reveal he is HIV positive. His wife is in the waiting room. She asks you about his test results. What should you do?',
      pihuComment:
        "Oooh, this is a classic ethics question about patient confidentiality vs duty to warn! HIV status, unconscious patient, wife asking... what does medical ethics say?",
      choices: [
        {
          id: 'ed-s2-a',
          text: 'Tell the wife immediately since she has a right to know as his spouse',
          isCorrect: false,
          pihuFeedback:
            "Not so fast! HIV status is confidential under the HIV/AIDS Act, 2017. You cannot disclose without the patient's consent. Even the spouse doesn't have an automatic right to know. Wait for the patient to regain consciousness and counsel him to disclose!",
          nextStepId: null,
        },
        {
          id: 'ed-s2-b',
          text: 'Maintain patient confidentiality. When the patient regains consciousness, counsel him to disclose to his wife. Only breach confidentiality if he refuses AND his wife is at imminent risk.',
          isCorrect: true,
          pihuFeedback:
            "PERFECT ethical approach! EXAM PRINCIPLES: (1) Patient confidentiality is paramount, (2) HIV/AIDS Act 2017 protects patient's right to confidentiality, (3) Counsel the patient to disclose voluntarily, (4) If patient refuses and spouse is at imminent risk, a doctor MAY disclose as a 'duty to warn' under specific circumstances. The correct sequence: counsel first, disclose only as last resort. This is a VIVA FAVOURITE!",
          nextStepId: 'ed-s3',
        },
        {
          id: 'ed-s2-c',
          text: 'Refuse to answer any questions and keep all information completely secret forever',
          isCorrect: false,
          pihuFeedback:
            "While confidentiality is important, you can't just ignore the situation. The wife may be at risk. The ethical approach is to counsel the patient (when conscious) to disclose, and if he refuses, there may be a duty to warn. Total secrecy isn't ethical when someone's health is at risk!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'ed-s3',
      type: 'diagnosis',
      narrative:
        'A colleague asks you about medical negligence. She treated a patient who had a bad outcome despite proper treatment. The patient is threatening to sue. What constitutes medical negligence legally?',
      pihuComment:
        "Medical negligence is one of the most important medicolegal topics! Not every bad outcome is negligence. What are the legal criteria?",
      choices: [
        {
          id: 'ed-s3-a',
          text: 'Medical negligence requires proof of all 4 Ds: Duty of care existed, Dereliction of that duty, Direct causation, and Damages resulted. A bad outcome alone is NOT negligence if standard of care was followed.',
          isCorrect: true,
          pihuFeedback:
            "NAILED IT! The 4 Ds of medical negligence: (1) DUTY -- doctor-patient relationship existed, (2) DERELICTION -- breach of the standard of care, (3) DIRECT CAUSATION -- the breach directly caused the harm, (4) DAMAGES -- actual harm/injury occurred. ALL four must be proven! EXAM PEARL: Bolam test -- a doctor is not negligent if they acted in accordance with a practice accepted by a responsible body of medical professionals. A bad outcome alone doesn't mean negligence!",
          nextStepId: 'ed-s4',
        },
        {
          id: 'ed-s3-b',
          text: 'Any bad outcome after treatment automatically constitutes negligence',
          isCorrect: false,
          pihuFeedback:
            "Absolutely NOT! Medicine has inherent risks and not every bad outcome means the doctor was negligent. If the doctor followed the standard of care, a bad outcome is a known complication, not negligence. This is a critical distinction for exams and practice!",
          nextStepId: null,
        },
        {
          id: 'ed-s3-c',
          text: 'Negligence only applies to surgeons, not to general physicians',
          isCorrect: false,
          pihuFeedback:
            "Wrong! Negligence can apply to ANY medical professional -- doctors, surgeons, nurses, dentists, even pharmacists. Anyone who has a duty of care can be held liable for negligence if they breach the standard of care!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'ed-s4',
      type: 'treatment',
      narrative:
        'Your colleague is relieved. Finally, a patient requests you to issue a false medical certificate stating he was unwell on a day he took unauthorized leave from work. What should you do?',
      pihuComment:
        "The most common ethical temptation in practice! Someone wants a fake medical certificate. What does the law say about this?",
      choices: [
        {
          id: 'ed-s4-a',
          text: 'Refuse -- issuing a false medical certificate is a criminal offense under Section 197 IPC (now BNS) and grounds for disciplinary action by the Medical Council',
          isCorrect: true,
          pihuFeedback:
            "100% correct! Issuing a false certificate is: (1) Criminal offense under Section 197 IPC (punishment up to 3 years), (2) Professional misconduct under Indian Medical Council (Professional Conduct, Etiquette and Ethics) Regulations 2002, (3) Can lead to suspension or removal from medical register. EXAM FACT: A medical certificate is a LEGAL DOCUMENT. Fraud in medical certificates is taken very seriously. Never compromise your license for someone's convenience, Sammy! Great ethics case completed!",
          nextStepId: null,
        },
        {
          id: 'ed-s4-b',
          text: 'Issue it since it is a minor request and not harmful to anyone',
          isCorrect: false,
          pihuFeedback:
            "DANGEROUS thinking! A 'minor' false certificate is still a criminal offense. It can lead to prosecution, loss of medical license, and imprisonment. No matter how small the request seems, falsifying medical documents is NEVER acceptable!",
          nextStepId: null,
        },
        {
          id: 'ed-s4-c',
          text: 'Issue it but charge extra fees for the inconvenience',
          isCorrect: false,
          pihuFeedback:
            "That's not just unethical -- it's criminal! Charging money for a false certificate makes it even worse. It's fraud AND professional misconduct. Refuse firmly and explain why it's illegal!",
          nextStepId: null,
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// CASE 13 — Village Health Camp
// ─────────────────────────────────────────────────────────────
const villageCamp: ClinicalCase = {
  id: 'village-camp',
  title: 'Village Health Camp',
  emoji: '🏘️',
  subjectSlug: 'clinical_postings',
  topicSlugs: ['community_visits_field_surveys', 'public_health_programs_practical'],
  difficulty: 'easy',
  estimatedMinutes: 5,
  patientSummary:
    'You are posted at a village health camp during your community medicine posting. You encounter various public health scenarios and must apply your knowledge of national health programs.',
  totalScore: 40,
  steps: [
    {
      id: 'vc-s1',
      type: 'presentation',
      narrative:
        'It is your first day at the village health camp in Sundernagar, MP. The ASHA worker brings 5-month-old baby Guddi for routine immunization. The mother asks, "Doctor, aaj kaunse teeke lagenge?" According to the National Immunization Schedule, which vaccines should a 5-month-old receive today if she received her birth doses and previous doses on schedule?',
      pihuComment:
        "Immunization schedule is MUST-KNOW for clinical postings and PSM exams! A 5-month-old... she should be getting her third primary dose. What vaccines are due?",
      choices: [
        {
          id: 'vc-s1-a',
          text: 'OPV-3 + Pentavalent-3 (DPT-HepB-Hib) + IPV-2 + Rotavirus-3 (in applicable states)',
          isCorrect: true,
          pihuFeedback:
            "Spot on! At 14 weeks (approximately 3.5 months, given here at 5 months -- still fine as catch-up): Third doses of OPV, Pentavalent, and Rotavirus + second dose of IPV. EXAM SCHEDULE: Birth = BCG + OPV-0 + HepB-0. 6 weeks = OPV-1 + Penta-1 + IPV-1 + Rota-1 + PCV-1. 10 weeks = OPV-2 + Penta-2 + Rota-2. 14 weeks = OPV-3 + Penta-3 + IPV-2 + Rota-3 + PCV-2. Make a table and memorize it!",
          nextStepId: 'vc-s2',
        },
        {
          id: 'vc-s1-b',
          text: 'MMR + Vitamin A supplementation',
          isCorrect: false,
          pihuFeedback:
            "MMR is given at 9-12 months (MR-1), not at 5 months! And Vitamin A starts at 9 months with the MR vaccine. At 5 months, the child should be receiving the third primary doses of OPV and Pentavalent. Know your schedule!",
          nextStepId: null,
        },
        {
          id: 'vc-s1-c',
          text: 'DPT booster and OPV booster',
          isCorrect: false,
          pihuFeedback:
            "Boosters are given much later! DPT booster-1 is at 16-24 months and booster-2 at 5-6 years. At 5 months, we're still in the PRIMARY immunization phase, giving third doses!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'vc-s2',
      type: 'investigation',
      narrative:
        'After immunization, a pregnant woman in her second trimester comes for an antenatal checkup. She has hemoglobin of 8 g/dL. What grade of anemia is this according to ICMR classification for pregnant women, and what is the management at the PHC level?',
      pihuComment:
        "Anemia in pregnancy is the most common nutritional deficiency you'll see at health camps! Know the grading and management protocol, Sammy!",
      choices: [
        {
          id: 'vc-s2-a',
          text: 'Moderate anemia (Hb 7-10.9 g/dL for pregnant women). Give oral iron (100mg elemental iron) + folic acid daily and follow up in 4 weeks.',
          isCorrect: true,
          pihuFeedback:
            "Correct! WHO/ICMR classification for pregnant women: Mild = 10-10.9, Moderate = 7-9.9, Severe = <7 g/dL. At 8 g/dL, this is MODERATE anemia. Management: Oral iron (100mg elemental iron) + 500 mcg folic acid daily. EXAM PEARL: Under Anemia Mukt Bharat program, all pregnant women receive IFA tablets (180 tabs for 180 days). If Hb <7, refer for parenteral iron or transfusion!",
          nextStepId: 'vc-s3',
        },
        {
          id: 'vc-s2-b',
          text: 'Severe anemia requiring immediate blood transfusion',
          isCorrect: false,
          pihuFeedback:
            "Hb of 8 g/dL is moderate, not severe. Severe anemia is Hb <7 g/dL. Blood transfusion is for very severe anemia (Hb <4 g/dL) or decompensated anemia. Don't overtransfuse -- oral iron is sufficient for moderate anemia!",
          nextStepId: null,
        },
        {
          id: 'vc-s2-c',
          text: 'Mild anemia, just advice dietary modifications',
          isCorrect: false,
          pihuFeedback:
            "Hb 8 g/dL in pregnancy is MODERATE anemia (7-10.9), not mild (10-10.9). Dietary advice alone is insufficient for moderate anemia -- she needs therapeutic iron supplementation. Classify correctly and treat accordingly!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'vc-s3',
      type: 'diagnosis',
      narrative:
        'The village has reported 3 cases of high fever with chills over the past week. The ASHA worker collected blood slides. Two slides show ring forms of Plasmodium falciparum. Under which national program should these cases be managed?',
      pihuComment:
        "Malaria cases in the village! You need to know the national malaria program and the treatment protocol. Which program handles this?",
      choices: [
        {
          id: 'vc-s3-a',
          text: 'National Vector Borne Disease Control Programme (NVBDCP) -- now under NCVBDC. Treat uncomplicated P. falciparum with ACT (Artesunate-based Combination Therapy)',
          isCorrect: true,
          pihuFeedback:
            "PERFECT! NVBDCP (now NCVBDC -- National Centre for Vector Borne Diseases Control) handles malaria, dengue, chikungunya, kala-azar, filariasis, and Japanese encephalitis. EXAM TREATMENT: P. falciparum = ACT (Artesunate + Sulfadoxine-Pyrimethamine) for 3 days + single dose Primaquine on Day 2. P. vivax = Chloroquine 3 days + Primaquine 14 days (for radical cure of liver stages). Know both protocols!",
          nextStepId: 'vc-s4',
        },
        {
          id: 'vc-s3-b',
          text: 'NPCBVI (National Program for Control of Blindness)',
          isCorrect: false,
          pihuFeedback:
            "NPCBVI is for blindness prevention! Malaria falls under NVBDCP/NCVBDC. Each disease has its own national program -- make a comprehensive list for your exams!",
          nextStepId: null,
        },
        {
          id: 'vc-s3-c',
          text: 'IDSP (Integrated Disease Surveillance Programme) -- just report and wait',
          isCorrect: false,
          pihuFeedback:
            "IDSP handles disease surveillance and reporting, but TREATMENT falls under NVBDCP/NCVBDC. Yes, you should report to IDSP too, but active treatment must begin immediately under the malaria program protocols!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'vc-s4',
      type: 'treatment',
      narrative:
        'As you wrap up the health camp, the Sarpanch asks you to summarize what indicators you would use to assess the health status of this village. What is the SINGLE BEST indicator of the overall health status of a community?',
      pihuComment:
        "Last question of the camp! Health indicators are fundamental to PSM. What single number best tells you about a community's health?",
      choices: [
        {
          id: 'vc-s4-a',
          text: 'Infant Mortality Rate (IMR) -- the most sensitive index of community health',
          isCorrect: true,
          pihuFeedback:
            "TEXTBOOK answer! IMR (deaths under 1 year per 1000 live births) is the SINGLE MOST SENSITIVE indicator of community health. EXAM PEARL: Why IMR? Because infant deaths reflect maternal health, nutrition, sanitation, access to healthcare, immunization coverage, and socioeconomic status -- all in one number! India's IMR is approximately 28/1000 (as per recent data). Other important indicators: MMR, life expectancy, under-5 mortality rate. You aced the village health camp, Sammy!",
          nextStepId: null,
        },
        {
          id: 'vc-s4-b',
          text: 'GDP per capita of the village',
          isCorrect: false,
          pihuFeedback:
            "GDP is an economic indicator, not a health indicator. While wealth correlates with health, IMR is the direct health indicator that reflects the overall health status of a community!",
          nextStepId: null,
        },
        {
          id: 'vc-s4-c',
          text: 'Number of hospitals in the area',
          isCorrect: false,
          pihuFeedback:
            "Number of hospitals is a health infrastructure indicator, not a health outcome indicator. More hospitals don't automatically mean better health. IMR measures actual health outcomes and is the best single indicator of community health!",
          nextStepId: null,
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// CASE 14 — First Day on Rounds
// ─────────────────────────────────────────────────────────────
const firstRounds: ClinicalCase = {
  id: 'first-rounds',
  title: 'First Day on Rounds',
  emoji: '🏥',
  subjectSlug: 'clinical_postings',
  topicSlugs: ['case_taking_history', 'basic_examination_skills'],
  difficulty: 'easy',
  estimatedMinutes: 5,
  patientSummary:
    'It is your first day of clinical posting. Your professor asks you to take a complete history and perform a basic examination on a patient in the general ward.',
  totalScore: 40,
  steps: [
    {
      id: 'fr-s1',
      type: 'presentation',
      narrative:
        'Professor assigns you Bed No. 7: Mr. Sharma, 55, admitted with chief complaints of chest pain and breathlessness. The professor watches as you begin. What is the CORRECT sequence for taking a clinical history?',
      pihuComment:
        "First clinical posting nerves? Don't worry, Sammy! History taking has a FIXED sequence. Get this right and you'll impress the professor. What comes first?",
      choices: [
        {
          id: 'fr-s1-a',
          text: 'Biodata > Chief Complaints (with duration) > History of Present Illness > Past History > Family History > Personal History > Treatment History > Review of Systems',
          isCorrect: true,
          pihuFeedback:
            "PERFECT sequence! EXAM MNEMONIC: 'Before Doctors Can Help Patients, Friends Try Remedies' -- Biodata, Chief Complaints, HPI, Past Hx, Family Hx, Personal Hx, Treatment Hx, Review of Systems. Chief complaints should ALWAYS be listed with duration in the patient's own words. This sequence is the foundation of clinical medicine!",
          nextStepId: 'fr-s2',
        },
        {
          id: 'fr-s1-b',
          text: 'Start with a detailed examination, then ask about history later',
          isCorrect: false,
          pihuFeedback:
            "No no no! HISTORY FIRST, then examination! 80% of diagnoses are made from history alone. The sequence is: History > General Examination > Systemic Examination > Investigations > Diagnosis. Never examine before taking a proper history!",
          nextStepId: null,
        },
        {
          id: 'fr-s1-c',
          text: 'Ask the diagnosis from the nurse and then confirm with the patient',
          isCorrect: false,
          pihuFeedback:
            "Sammy, you need to take the history yourself! Looking at the chart first creates bias. A good clinician approaches the patient fresh, takes their own history, forms their differential, and then checks against existing records. Clinical skills start with YOU!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'fr-s2',
      type: 'investigation',
      narrative:
        'You take the history: Mr. Sharma has chest pain for 2 days -- central, crushing, radiating to the left arm, worsened with exertion, associated with sweating and breathlessness. He is diabetic and hypertensive. Now the professor says, "Examine the cardiovascular system." What is the correct sequence of cardiovascular examination?',
      pihuComment:
        "CV system examination has a classic sequence. Remember the four steps -- they're the same for every system but in a specific order for the heart!",
      choices: [
        {
          id: 'fr-s2-a',
          text: 'Inspection > Palpation > Percussion > Auscultation (IPPA sequence)',
          isCorrect: true,
          pihuFeedback:
            "YES! IPPA -- Inspection, Palpation, Percussion, Auscultation. This is the UNIVERSAL sequence for all systemic examinations. EXAM POINTS for CVS: Inspection -- look for apex beat, scars, visible pulsations. Palpation -- feel the apex beat (normal: left 5th ICS, MCL), thrills. Percussion -- cardiac borders. Auscultation -- heart sounds in 4 areas (mitral, tricuspid, aortic, pulmonary). The only exception to IPPA is the ABDOMEN where it's Inspection > Auscultation > Percussion > Palpation!",
          nextStepId: 'fr-s3',
        },
        {
          id: 'fr-s2-b',
          text: 'Start directly with the stethoscope (auscultation)',
          isCorrect: false,
          pihuFeedback:
            "Classic clinical posting mistake! Grabbing the stethoscope first looks unprofessional and skips important findings. You might miss a visible apex beat, a surgical scar, or a palpable thrill. Always follow IPPA sequence!",
          nextStepId: null,
        },
        {
          id: 'fr-s2-c',
          text: 'Percussion > Palpation > Inspection > Auscultation',
          isCorrect: false,
          pihuFeedback:
            "The sequence is wrong! It's IPPA: Inspection first (look before you touch), then Palpation, then Percussion, then Auscultation. This logical sequence ensures you don't miss anything visible or palpable before using instruments!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'fr-s3',
      type: 'diagnosis',
      narrative:
        'On examination, you find: apex beat in the left 5th ICS at MCL, no parasternal heave, S1 S2 heard, no murmurs. BP is 160/100 mmHg. Professor asks you to present the case to the team. What is the standard format for case presentation on rounds?',
      pihuComment:
        "Case presentation is an ART, Sammy! There's a structured way to present that'll make you look like a star even on your first day!",
      choices: [
        {
          id: 'fr-s3-a',
          text: '"A 55-year-old male, known diabetic and hypertensive, presents with chief complaints of central crushing chest pain for 2 days radiating to the left arm, associated with sweating and breathlessness, aggravated by exertion." -- Start with one-liner summary, then systematically present history, examination findings, and your differential diagnosis.',
          isCorrect: true,
          pihuFeedback:
            "BEAUTIFUL presentation format! Start with a crisp one-liner (age, sex, relevant comorbidities, chief complaint with duration), then present HPI, past history, examination findings, and your differential diagnoses. EXAM TIP for viva: Always end your presentation with 'My provisional diagnosis is X, and my differentials include Y and Z.' This shows clinical reasoning. For this patient, think: Acute Coronary Syndrome (MI vs unstable angina) given the classic presentation!",
          nextStepId: 'fr-s4',
        },
        {
          id: 'fr-s3-b',
          text: 'Read out everything from the case sheet word by word',
          isCorrect: false,
          pihuFeedback:
            "Reading verbatim from the case sheet shows you haven't internalized the case. A good presentation is CONCISE and ORGANIZED, highlighting the relevant positives and pertinent negatives. Professors want to see that you've processed the information, not just copied it!",
          nextStepId: null,
        },
        {
          id: 'fr-s3-c',
          text: 'Just say the diagnosis directly without presenting the history and findings',
          isCorrect: false,
          pihuFeedback:
            "You MUST walk through the history and examination that LED you to the diagnosis. Jumping to the diagnosis without showing your clinical reasoning process is a big no-no in clinical postings. The process matters as much as the answer!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'fr-s4',
      type: 'treatment',
      narrative:
        'Impressive presentation! The professor now asks: "What investigations would you order for this patient with suspected acute coronary syndrome?" What is the most important initial investigation?',
      pihuComment:
        "ACS workup -- what's the first thing we order? It's quick, cheap, and can be done at bedside. Every medical student should know this!",
      choices: [
        {
          id: 'fr-s4-a',
          text: '12-lead ECG immediately -- it should be done within 10 minutes of presentation and can show ST-segment changes diagnostic of MI',
          isCorrect: true,
          pihuFeedback:
            "CORRECT! 12-lead ECG within 10 minutes is the FIRST investigation in suspected ACS. EXAM FINDINGS: ST elevation = STEMI (emergency PCI or thrombolysis), ST depression/T inversion = NSTEMI/UA. Also order: Troponin I/T (most sensitive and specific cardiac biomarker), CBC, RFT, RBS, lipid profile. PEARL: Troponin rises in 3-4 hours and peaks at 24 hours. A single negative troponin doesn't rule out MI -- repeat at 6-12 hours! Sammy, you survived your first day on rounds. The professor is impressed!",
          nextStepId: null,
        },
        {
          id: 'fr-s4-b',
          text: 'CT coronary angiography to directly see the blocked artery',
          isCorrect: false,
          pihuFeedback:
            "CT coronary angiography is not the first-line investigation for acute chest pain. It's used for stable patients with intermediate probability. In an ACUTE presentation, we need a quick bedside test first -- that's the 12-lead ECG. Speed is everything in ACS!",
          nextStepId: null,
        },
        {
          id: 'fr-s4-c',
          text: 'Chest X-ray to look at the heart size',
          isCorrect: false,
          pihuFeedback:
            "Chest X-ray is part of the workup but is NOT the most important initial test. It shows heart size and can exclude other causes (like pneumothorax, aortic dissection) but doesn't diagnose MI. ECG is the priority -- it directly shows ST changes and guides treatment!",
          nextStepId: null,
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// CASE 15 — The Cloudy Eye
// ─────────────────────────────────────────────────────────────
const cloudyEye: ClinicalCase = {
  id: 'cloudy-eye',
  title: 'The Cloudy Eye',
  emoji: '🌫️',
  subjectSlug: 'ophthalmology',
  topicSlugs: ['cataract', 'refraction_errors', 'physiology_of_vision'],
  difficulty: 'hard',
  estimatedMinutes: 7,
  patientSummary:
    'A 65-year-old retired schoolteacher presents with gradually progressive painless diminution of vision in both eyes over 2 years, with difficulty reading and glare while driving at night.',
  totalScore: 60,
  steps: [
    {
      id: 'ce-s1',
      type: 'presentation',
      narrative:
        'Kamala ji, 65, a retired teacher, says "Doctor, kitaab padhne mein bahut mushkil ho rahi hai. Raat ko driving karte waqt lights se bahut chamak lagti hai. Dono aankhon se dhundla dikhta hai." She has well-controlled diabetes for 10 years. Visual acuity: 6/24 in both eyes, not improving with pinhole. Slit lamp shows a grayish-white opacity in the lens of both eyes. What is the most likely diagnosis?',
      pihuComment:
        "Painless progressive vision loss + glare + lens opacity in an elderly patient? This is the MOST COMMON cause of preventable blindness worldwide! What is it, Sammy?",
      choices: [
        {
          id: 'ce-s1-a',
          text: 'Age-related (senile) cataract -- bilateral opacification of the crystalline lens',
          isCorrect: true,
          pihuFeedback:
            "YES! Senile cataract is the most common type of cataract and the leading cause of preventable blindness globally. EXAM PEARL: Key features -- painless, progressive, bilateral (often asymmetric), glare, difficulty with night driving, and the vision does NOT improve with pinhole (unlike refractive errors). TYPES to remember: Nuclear (most common, causes index myopia -- 'second sight'), Cortical (spoke-like opacities), and Posterior Subcapsular (most common in diabetes, causes glare). This is CORE ophthalmology!",
          nextStepId: 'ce-s2',
        },
        {
          id: 'ce-s1-b',
          text: 'Diabetic retinopathy causing vision loss',
          isCorrect: false,
          pihuFeedback:
            "Diabetic retinopathy can cause vision loss, but it doesn't cause lens opacity on slit lamp. The slit lamp clearly shows opacity in the LENS, not the retina. Retinal problems need fundoscopy to diagnose. The lens opacity = cataract!",
          nextStepId: null,
        },
        {
          id: 'ce-s1-c',
          text: 'Age-related Macular Degeneration (ARMD)',
          isCorrect: false,
          pihuFeedback:
            "ARMD affects the macula (central retina) and causes central vision loss with metamorphopsia (distortion). It doesn't cause lens opacity. The slit lamp shows a lens opacity here, which is definitively a cataract!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'ce-s2',
      type: 'investigation',
      narrative:
        'You diagnose bilateral senile cataract. Interestingly, Kamala ji mentions that last year she could suddenly read without her reading glasses for a few months, but now her vision has worsened again. What phenomenon explains this temporary improvement in near vision?',
      pihuComment:
        "Ooh this is a FAVOURITE exam question! A cataract patient who temporarily didn't need reading glasses... there's a specific name for this phenomenon!",
      choices: [
        {
          id: 'ce-s2-a',
          text: 'Second sight -- nuclear sclerosis increases the refractive index of the lens, causing index myopia that temporarily compensates for presbyopia',
          isCorrect: true,
          pihuFeedback:
            "BRILLIANT! 'Second sight' occurs in nuclear cataract. As the nucleus becomes denser, the refractive index increases, making the eye more myopic. This TEMPORARILY corrects presbyopia (age-related farsightedness), so the patient can read without glasses! But it's actually a sign of worsening cataract. EXAM PEARL: Second sight = nuclear cataract = index myopia. Eventually, the cataract progresses and vision worsens despite the myopic shift. This is a classic viva question!",
          nextStepId: 'ce-s3',
        },
        {
          id: 'ce-s2-b',
          text: 'Spontaneous healing of the cataract',
          isCorrect: false,
          pihuFeedback:
            "Cataracts do NOT spontaneously heal! They only progress. The temporary improvement in near vision is due to a change in the refractive index of the lens (index myopia from nuclear sclerosis), not healing. It's called 'second sight' and it's actually a sign of progressing cataract!",
          nextStepId: null,
        },
        {
          id: 'ce-s2-c',
          text: 'Accommodation spasm from diabetes',
          isCorrect: false,
          pihuFeedback:
            "At age 65, accommodation is virtually zero (complete presbyopia). Accommodation spasm occurs in young patients. The phenomenon described here is 'second sight' due to index myopia from nuclear cataract!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'ce-s3',
      type: 'diagnosis',
      narrative:
        'Before planning surgery, you need to assess the retina and optic nerve (since the lens opacity makes direct visualization difficult). What preoperative investigation is essential to predict post-surgical visual potential?',
      pihuComment:
        "The cataract is so dense we can't see the retina clearly. But we need to know if the retina is healthy before we promise the patient good vision after surgery. What test helps?",
      choices: [
        {
          id: 'ce-s3-a',
          text: 'B-scan ultrasonography to rule out posterior segment pathology + potential acuity meter or laser interferometry to predict postoperative visual potential',
          isCorrect: true,
          pihuFeedback:
            "EXCELLENT! When the cataract is dense and you can't see the fundus: (1) B-scan USG checks for retinal detachment, vitreous hemorrhage, or intraocular tumors behind the opaque lens, (2) Potential Acuity Meter (PAM) or laser interferometry predicts what vision the patient COULD achieve after surgery by bypassing the cataract. Also essential: A-scan biometry for IOL power calculation (SRK formula)! EXAM PEARL: IOL power = A constant - 2.5(axial length) - 0.9(keratometry). These preoperative tests are exam favorites!",
          nextStepId: 'ce-s4',
        },
        {
          id: 'ce-s3-b',
          text: 'MRI orbit to check the retina',
          isCorrect: false,
          pihuFeedback:
            "MRI is not the standard for preoperative cataract assessment. B-scan ultrasonography is the standard for evaluating the posterior segment when direct visualization is not possible. It's quick, non-invasive, and gives excellent information!",
          nextStepId: null,
        },
        {
          id: 'ce-s3-c',
          text: 'No preoperative tests needed -- just proceed with surgery',
          isCorrect: false,
          pihuFeedback:
            "Never go to surgery blind (pun intended)! You MUST assess the posterior segment and calculate IOL power before cataract surgery. Operating without knowing the retinal status could lead to unhappy outcomes and medicolegal issues!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'ce-s4',
      type: 'treatment',
      narrative:
        'All preoperative assessments are satisfactory. B-scan is normal, and PAM predicts good postoperative vision. What is the current gold standard surgical procedure for cataract?',
      pihuComment:
        "Surgery time! Cataract surgery has evolved dramatically. What's the modern gold standard technique? This is asked in EVERY ophthalmology exam!",
      choices: [
        {
          id: 'ce-s4-a',
          text: 'Phacoemulsification with posterior chamber IOL implantation -- the gold standard with small incision (2-3 mm), minimal astigmatism, and rapid visual recovery',
          isCorrect: true,
          pihuFeedback:
            "PERFECT! Phacoemulsification (phaco) is the GOLD STANDARD for cataract surgery worldwide. It uses ultrasonic energy to emulsify and aspirate the lens through a small 2-3mm incision. EXAM COMPARISON: (1) Phaco = gold standard, 2-3mm incision, sutureless, fast recovery. (2) SICS (Small Incision Cataract Surgery) = 6-7mm incision, cheaper, used in mass camps. (3) ECCE = older technique, larger incision, needs sutures. For Indian exam context: SICS is important for community ophthalmology as it's cost-effective for camp settings!",
          nextStepId: 'ce-s5',
        },
        {
          id: 'ce-s4-b',
          text: 'ICCE (Intracapsular Cataract Extraction) -- removing the entire lens with capsule',
          isCorrect: false,
          pihuFeedback:
            "ICCE is an obsolete technique! Removing the entire lens with its capsule means you can't place a posterior chamber IOL (the best type). ICCE is now only done in rare cases like lens subluxation. Modern surgery always preserves the posterior capsule!",
          nextStepId: null,
        },
        {
          id: 'ce-s4-c',
          text: 'Laser treatment to dissolve the cataract without surgery',
          isCorrect: false,
          pihuFeedback:
            "There is no laser that dissolves cataracts! Femtosecond laser can ASSIST in some steps of cataract surgery, but it doesn't replace surgery. The cataract must be physically removed. Nd:YAG laser is used only for POSTERIOR CAPSULE opacification (after-cataract), not for the primary cataract!",
          nextStepId: null,
        },
      ],
    },
    {
      id: 'ce-s5',
      type: 'outcome',
      narrative:
        'After successful phacoemulsification with PC-IOL in the right eye, Kamala ji comes for her 1-week follow-up. Her vision is 6/6. She is thrilled but asks: "Doctor, 2 months ke baad kya mujhe doosri aankh bhi karwani padegi?" She also asks about a common complication she read about online -- something about the vision becoming cloudy again after cataract surgery. What is she referring to?',
      pihuComment:
        "Post-op follow-up! She's asking about a common late complication of cataract surgery. Vision becoming cloudy again months to years after surgery... what's it called?",
      choices: [
        {
          id: 'ce-s5-a',
          text: "After-cataract (Posterior Capsule Opacification, PCO) -- the most common late complication, treated with Nd:YAG laser capsulotomy",
          isCorrect: true,
          pihuFeedback:
            "PERFECT ending to a perfect case! PCO (after-cataract) is the MOST COMMON late complication of cataract surgery. The posterior capsule (left behind to support the IOL) becomes opaque due to epithelial cell proliferation. Treatment: Nd:YAG laser posterior capsulotomy -- a quick OPD procedure. EXAM PEARL: PCO occurs in 20-30% of cases within 2-5 years. Tell her: yes, get the other eye done (usually wait 2-4 weeks between eyes), and if vision becomes cloudy again later, a simple laser procedure can fix it. Sammy, you absolutely CRUSHED all 15 cases! You're going to ace these exams!",
          nextStepId: null,
        },
        {
          id: 'ce-s5-b',
          text: 'The cataract growing back in the same eye',
          isCorrect: false,
          pihuFeedback:
            "A cataract cannot grow BACK because the lens has been removed! What happens is the posterior capsule (left behind to hold the IOL) becomes cloudy -- that's PCO or after-cataract. It's a new opacity, not the cataract returning!",
          nextStepId: null,
        },
        {
          id: 'ce-s5-c',
          text: 'IOL rejection by the body like organ transplant rejection',
          isCorrect: false,
          pihuFeedback:
            "Modern IOLs are made of biocompatible materials (acrylic, PMMA, silicone) and are NOT rejected like organ transplants. The eye is also an immunologically privileged site. The cloudy vision after surgery is due to PCO, not IOL rejection!",
          nextStepId: null,
        },
      ],
    },
  ],
};

// ═════════════════════════════════════════════════════════════
// EXPORT ALL CASES
// ═════════════════════════════════════════════════════════════

export const cases: ClinicalCase[] = [
  farmerVision,
  diwaliEyes,
  malnourishedChild,
  waterPumpMystery,
  factoryCough,
  ringingEars,
  singerVoice,
  weddingChoking,
  unidentifiedBody,
  suspiciousDeath,
  frozenFace,
  ethicsDilemma,
  villageCamp,
  firstRounds,
  cloudyEye,
];

export const totalCases = cases.length;
