export interface VivaQuestion {
  id: string;
  subjectSlug: string;
  topicSlug: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  expectedKeyPoints: string[];
  modelAnswer: string;
  followUpQuestions: string[];
  pihuHint: string;
  marks: number;
}

export const vivaQuestions: VivaQuestion[] = [
  // ============================================================
  // PSM — epidemiology
  // ============================================================
  {
    id: 'epidemiology-easy',
    subjectSlug: 'psm',
    topicSlug: 'epidemiology',
    difficulty: 'easy',
    question: 'Define epidemiology and state its objectives.',
    expectedKeyPoints: [
      'Study of distribution and determinants of disease in populations',
      'Frequency, pattern, and causes of health events',
      'Objective: identify etiology and risk factors',
      'Objective: determine extent of disease in community',
      'Objective: plan and evaluate preventive measures',
    ],
    modelAnswer:
      'Epidemiology is the study of the distribution and determinants of health-related states or events in specified populations and the application of this study to control health problems. Its objectives include identifying disease etiology, measuring disease burden, and planning prevention and control strategies.',
    followUpQuestions: [
      'What is the difference between descriptive and analytical epidemiology?',
      'Name the types of epidemiological study designs.',
    ],
    pihuHint: 'Yaar, just remember — epi means "upon" and demos means "people," so it is literally studying what falls upon people!',
    marks: 5,
  },
  {
    id: 'epidemiology-medium',
    subjectSlug: 'psm',
    topicSlug: 'epidemiology',
    difficulty: 'medium',
    question: 'Compare and contrast cohort study and case-control study with examples.',
    expectedKeyPoints: [
      'Cohort: follows exposed and unexposed groups forward in time',
      'Case-control: starts with diseased and non-diseased, looks back at exposure',
      'Cohort measures relative risk; case-control measures odds ratio',
      'Cohort is prospective or retrospective; case-control is always retrospective',
      'Cohort is costly and time-consuming; case-control is quicker and cheaper',
      'Example: Framingham Heart Study (cohort), smoking and lung cancer (case-control)',
    ],
    modelAnswer:
      'A cohort study selects subjects based on exposure status and follows them to observe disease outcomes, yielding relative risk. A case-control study selects based on disease status and looks back at exposure history, yielding odds ratio. Cohort studies are ideal for common exposures while case-control studies suit rare diseases.',
    followUpQuestions: [
      'What are the biases specific to case-control studies?',
      'When would you prefer a retrospective cohort over a prospective cohort?',
    ],
    pihuHint: 'Cohort goes forward like your career goals, case-control looks backward like your exam regrets — simple!',
    marks: 8,
  },
  {
    id: 'epidemiology-hard',
    subjectSlug: 'psm',
    topicSlug: 'epidemiology',
    difficulty: 'hard',
    question: 'An outbreak of acute gastroenteritis occurs in a village after a community feast. How would you investigate this outbreak as a medical officer?',
    expectedKeyPoints: [
      'Confirm the diagnosis and verify the outbreak',
      'Define and identify cases using a case definition',
      'Collect and analyze data by time, place, and person',
      'Draw an epidemic curve to identify type of outbreak',
      'Formulate and test hypothesis about source and transmission',
      'Implement control measures such as water chlorination and food safety',
    ],
    modelAnswer:
      'First, confirm the diagnosis clinically and by lab tests, then establish a case definition. Conduct active surveillance, collect line-listing data, and plot an epidemic curve. Analyze the data by time, place, and person to identify the source, then implement control measures including treatment, sanitation, and health education.',
    followUpQuestions: [
      'How would you differentiate a point-source from a propagated epidemic on the curve?',
      'What is the role of attack rate in outbreak investigation?',
    ],
    pihuHint: 'Think like a detective at a shaadi — who ate what, when did they fall sick, and which dish was the culprit!',
    marks: 10,
  },

  // ============================================================
  // PSM — biostatistics
  // ============================================================
  {
    id: 'biostatistics-easy',
    subjectSlug: 'psm',
    topicSlug: 'biostatistics',
    difficulty: 'easy',
    question: 'Define mean, median, and mode. When is median preferred over mean?',
    expectedKeyPoints: [
      'Mean is the arithmetic average of all values',
      'Median is the middle value when data is arranged in order',
      'Mode is the most frequently occurring value',
      'Median is preferred when data is skewed or has outliers',
      'Median is used for ordinal data',
    ],
    modelAnswer:
      'Mean is the sum of all observations divided by their number. Median is the central value in an ordered dataset. Mode is the most frequently occurring value. Median is preferred over mean in skewed distributions or when extreme outliers are present, as it is not affected by extreme values.',
    followUpQuestions: [
      'What is the relationship between mean, median, and mode in a normal distribution?',
      'Give an example of when mode is the most appropriate measure.',
    ],
    pihuHint: 'Mean is the class average, median is the middle bench student, mode is the most popular kid — that is it!',
    marks: 5,
  },
  {
    id: 'biostatistics-medium',
    subjectSlug: 'psm',
    topicSlug: 'biostatistics',
    difficulty: 'medium',
    question: 'Explain the concept of p-value and its significance in hypothesis testing. What does a p-value of 0.03 mean?',
    expectedKeyPoints: [
      'p-value is the probability of obtaining results as extreme as observed under null hypothesis',
      'If p < 0.05, result is statistically significant at 5% level',
      'p = 0.03 means 3% chance of seeing this result if null hypothesis is true',
      'Does not measure the size or clinical importance of effect',
      'Type I error (alpha) is rejecting a true null hypothesis',
      'Type II error (beta) is failing to reject a false null hypothesis',
    ],
    modelAnswer:
      'A p-value represents the probability of observing results at least as extreme as those obtained, assuming the null hypothesis is true. A p-value of 0.03 means there is a 3% probability that the observed difference occurred by chance, which is statistically significant at the conventional 5% threshold. However, statistical significance does not always imply clinical significance.',
    followUpQuestions: [
      'What is the difference between statistical significance and clinical significance?',
      'What is the power of a statistical test?',
    ],
    pihuHint: 'p-value is basically the probability ki "yeh sab coincidence hai" — if it is too low, coincidence nahi, real effect hai!',
    marks: 8,
  },
  {
    id: 'biostatistics-hard',
    subjectSlug: 'psm',
    topicSlug: 'biostatistics',
    difficulty: 'hard',
    question: 'A clinical trial reports that a new drug reduces mortality by 10% (ARR), with NNT of 10. The p-value is 0.04 and 95% CI is 2-18%. Interpret these findings and discuss clinical applicability.',
    expectedKeyPoints: [
      'Absolute risk reduction of 10% means 10 fewer deaths per 100 treated',
      'NNT of 10 means treating 10 patients prevents 1 death',
      'p = 0.04 is statistically significant at 5% level',
      'CI 2-18% does not include zero, confirming significance',
      'Wide CI suggests imprecise estimate, possibly small sample',
      'Must consider side effects, cost, and patient factors for applicability',
    ],
    modelAnswer:
      'The drug shows a clinically meaningful 10% absolute risk reduction with NNT of 10, meaning one death is prevented for every 10 patients treated. The p-value of 0.04 and CI of 2-18% confirm statistical significance. However, the wide confidence interval indicates imprecision, and clinical applicability requires weighing drug side effects, cost, and patient population characteristics.',
    followUpQuestions: [
      'How does NNT relate to absolute and relative risk reduction?',
      'Why might a statistically significant result not be clinically useful?',
    ],
    pihuHint: 'NNT is your ROI on treatment — how many patients you need to treat before one actually benefits, like how many reels before one goes viral!',
    marks: 10,
  },

  // ============================================================
  // PSM — screening_tests
  // ============================================================
  {
    id: 'screening_tests-easy',
    subjectSlug: 'psm',
    topicSlug: 'screening_tests',
    difficulty: 'easy',
    question: 'Define sensitivity and specificity of a screening test.',
    expectedKeyPoints: [
      'Sensitivity is the ability to correctly identify those with disease (true positive rate)',
      'Specificity is the ability to correctly identify those without disease (true negative rate)',
      'High sensitivity means few false negatives',
      'High specificity means few false positives',
      'Formulae: Sensitivity = TP/(TP+FN), Specificity = TN/(TN+FP)',
    ],
    modelAnswer:
      'Sensitivity is the proportion of truly diseased persons who test positive (TP/TP+FN), reflecting the test ability to detect disease. Specificity is the proportion of truly non-diseased persons who test negative (TN/TN+FP), reflecting the test ability to exclude disease. An ideal screening test has high sensitivity to minimize missed cases.',
    followUpQuestions: [
      'What is the trade-off between sensitivity and specificity?',
      'Define positive predictive value and negative predictive value.',
    ],
    pihuHint: 'SenSitivity catches the Sick (SnOut rules out), SPecificity catches the Positive (SpIn rules in) — write it on your hand!',
    marks: 5,
  },
  {
    id: 'screening_tests-medium',
    subjectSlug: 'psm',
    topicSlug: 'screening_tests',
    difficulty: 'medium',
    question: 'Explain why positive predictive value changes with disease prevalence while sensitivity does not.',
    expectedKeyPoints: [
      'PPV depends on prevalence: PPV = (Sensitivity x Prevalence) / [(Sensitivity x Prevalence) + (1-Specificity)(1-Prevalence)]',
      'In low prevalence, even a specific test yields many false positives',
      'Sensitivity is an intrinsic property of the test, independent of prevalence',
      'PPV increases as prevalence increases',
      'Clinical implication: a positive test in low-prevalence populations is less reliable',
      'NPV behaves inversely to PPV with prevalence changes',
    ],
    modelAnswer:
      'Sensitivity and specificity are intrinsic test characteristics determined during validation, independent of prevalence. PPV, however, depends on the proportion of true positives among all positives, which is influenced by how many truly diseased individuals are in the tested population. In low-prevalence settings, even highly specific tests generate more false positives than true positives, lowering PPV.',
    followUpQuestions: [
      'How does prevalence affect negative predictive value?',
      'What strategies can improve PPV in low-prevalence settings?',
    ],
    pihuHint: 'PPV is like popularity in a small college versus a big city — same talent, but your fame depends on the crowd size!',
    marks: 8,
  },
  {
    id: 'screening_tests-hard',
    subjectSlug: 'psm',
    topicSlug: 'screening_tests',
    difficulty: 'hard',
    question: 'You are designing a national screening program for cervical cancer. Discuss the criteria for choosing the screening test, the target population, and how you would evaluate the program effectiveness.',
    expectedKeyPoints: [
      'Wilson and Jungner criteria for screening program',
      'Disease should be common, serious, and have a detectable preclinical phase',
      'Test options: Pap smear, VIA, HPV DNA testing',
      'Target population: women aged 30-65 years',
      'Evaluation metrics: coverage, detection rate, compliance, reduction in mortality',
      'Consider cost-effectiveness, infrastructure, and follow-up mechanisms',
    ],
    modelAnswer:
      'The screening program should follow Wilson-Jungner criteria: cervical cancer has a long preclinical phase, effective treatment exists, and suitable tests are available. VIA or HPV DNA testing may be preferred in resource-limited settings over Pap smear. Target women aged 30-65, evaluate using coverage rates, cancer detection rates, and ultimately reduction in cervical cancer mortality and morbidity.',
    followUpQuestions: [
      'What are the advantages of HPV DNA testing over conventional Pap smear?',
      'How does lead-time bias affect screening program evaluation?',
    ],
    pihuHint: 'Wilson-Jungner criteria are your checklist before starting any screening program — like a pre-flight checklist before takeoff!',
    marks: 10,
  },

  // ============================================================
  // PSM — national_health_programs
  // ============================================================
  {
    id: 'national_health_programs-easy',
    subjectSlug: 'psm',
    topicSlug: 'national_health_programs',
    difficulty: 'easy',
    question: 'Name five important National Health Programs in India and their target diseases.',
    expectedKeyPoints: [
      'NTEP (National Tuberculosis Elimination Program) — Tuberculosis',
      'NVBDCP (National Vector Borne Disease Control Program) — Malaria, Dengue, Kala-azar',
      'NLEP (National Leprosy Eradication Program) — Leprosy',
      'NPCB (National Programme for Control of Blindness) — Blindness',
      'RNTCP renamed to NTEP with goal of TB elimination by 2025',
    ],
    modelAnswer:
      'Important National Health Programs include NTEP for tuberculosis elimination, NVBDCP for malaria and other vector-borne diseases, NLEP for leprosy eradication, NPCB for blindness control, and Universal Immunization Programme for vaccine-preventable diseases. These programs are implemented through the public health infrastructure from national to subcentre level.',
    followUpQuestions: [
      'What is the DOTS strategy under NTEP?',
      'What is the current status of polio eradication in India?',
    ],
    pihuHint: 'National Health Programs are the government\'s battle plan — just remember the disease and the acronym and you are set, bestie!',
    marks: 5,
  },
  {
    id: 'national_health_programs-medium',
    subjectSlug: 'psm',
    topicSlug: 'national_health_programs',
    difficulty: 'medium',
    question: 'Describe the DOTS strategy under NTEP. How has it improved TB management in India?',
    expectedKeyPoints: [
      'DOTS: Directly Observed Treatment, Short-course',
      'Five components: political commitment, quality microscopy, drug supply, DOT, monitoring',
      'Standardized treatment regimens with fixed-dose combinations',
      'Treatment success rate improved significantly',
      'Reduction in drug resistance through compliance',
      'Nikshay portal for notification and tracking',
    ],
    modelAnswer:
      'DOTS involves five components: government commitment, sputum smear microscopy for diagnosis, uninterrupted drug supply, directly observed short-course chemotherapy, and systematic monitoring. It has improved TB management by ensuring treatment adherence, reducing default rates, improving cure rates above 85%, and minimizing development of multi-drug resistant TB through supervised therapy.',
    followUpQuestions: [
      'What is the treatment regimen for new sputum-positive pulmonary TB?',
      'How does India plan to achieve TB elimination by 2025?',
    ],
    pihuHint: 'DOTS is basically the government making sure you actually finish your antibiotic course — no skipping allowed!',
    marks: 8,
  },
  {
    id: 'national_health_programs-hard',
    subjectSlug: 'psm',
    topicSlug: 'national_health_programs',
    difficulty: 'hard',
    question: 'Critically analyze the Ayushman Bharat scheme. Discuss its two components, achievements, and challenges in implementation.',
    expectedKeyPoints: [
      'Two components: Health and Wellness Centres (HWCs) and PM-JAY insurance',
      'PM-JAY provides Rs 5 lakh per family per year for secondary and tertiary care',
      'HWCs upgrade subcentres to deliver comprehensive primary health care',
      'Achievement: largest government-funded health insurance globally',
      'Challenges: empanelment of hospitals, fraud, awareness, quality assurance',
      'Does not cover outpatient expenses which constitute majority of OOPE',
    ],
    modelAnswer:
      'Ayushman Bharat has two components: HWCs for comprehensive primary care and PM-JAY providing cashless hospitalization up to Rs 5 lakh for poor families. While it has expanded hospital access for millions, challenges include low awareness among beneficiaries, hospital empanelment issues, fraud detection, and the exclusion of outpatient expenses that constitute the bulk of out-of-pocket expenditure.',
    followUpQuestions: [
      'How does PM-JAY differ from previous RSBY scheme?',
      'What is the role of HWCs in delivering preventive and promotive healthcare?',
    ],
    pihuHint: 'Ayushman Bharat is India\'s biggest health insurance glow-up — know both HWC and PM-JAY sides and you will shine in viva!',
    marks: 10,
  },

  // ============================================================
  // PSM — environmental_health
  // ============================================================
  {
    id: 'environmental_health-easy',
    subjectSlug: 'psm',
    topicSlug: 'environmental_health',
    difficulty: 'easy',
    question: 'What are the methods of water purification on a large scale?',
    expectedKeyPoints: [
      'Sedimentation to remove suspended particles',
      'Coagulation using alum (flocculation)',
      'Filtration through rapid sand or slow sand filters',
      'Disinfection using chlorination',
      'Residual chlorine should be 0.5 mg/L after 30 minutes contact time',
    ],
    modelAnswer:
      'Large-scale water purification involves sequential steps: storage and sedimentation to settle suspended particles, coagulation with alum for flocculation, filtration through slow or rapid sand filters, and finally disinfection by chlorination. The treated water should have a residual chlorine of 0.5 mg/L to ensure safety during distribution.',
    followUpQuestions: [
      'What is break-point chlorination?',
      'Compare slow sand filter and rapid sand filter.',
    ],
    pihuHint: 'Water purification is like getting ready for a party: settle down, filter out the drama, and add that final touch of chlorine-freshness!',
    marks: 5,
  },
  {
    id: 'environmental_health-medium',
    subjectSlug: 'psm',
    topicSlug: 'environmental_health',
    difficulty: 'medium',
    question: 'Discuss the health effects of air pollution and the important air pollutants with their sources.',
    expectedKeyPoints: [
      'Particulate matter (PM2.5, PM10) from vehicles and industries',
      'Sulphur dioxide from coal burning causes respiratory illness',
      'Carbon monoxide from incomplete combustion causes hypoxia',
      'Nitrogen oxides from vehicle exhaust cause bronchitis',
      'Indoor air pollution from biomass fuels — major issue in rural India',
      'Health effects: COPD, asthma, lung cancer, cardiovascular disease',
    ],
    modelAnswer:
      'Major air pollutants include PM2.5 and PM10 from vehicles and industries, SO2 from coal combustion, CO from incomplete combustion, and NOx from vehicle exhaust. Health effects range from acute respiratory infections and asthma exacerbations to chronic diseases like COPD and lung cancer. Indoor air pollution from biomass fuels is a significant problem in rural India, particularly affecting women and children.',
    followUpQuestions: [
      'What is the Air Quality Index and how is it classified?',
      'What measures can reduce indoor air pollution in rural areas?',
    ],
    pihuHint: 'PM2.5 is tiny enough to enter your lungs and bloodstream — think of it as the uninvited guest who gets everywhere at the party!',
    marks: 8,
  },
  {
    id: 'environmental_health-hard',
    subjectSlug: 'psm',
    topicSlug: 'environmental_health',
    difficulty: 'hard',
    question: 'A new industry is proposed near a village. As a public health expert, what environmental health impact assessment would you recommend and what preventive measures would you suggest?',
    expectedKeyPoints: [
      'Environmental Impact Assessment (EIA) is mandatory under Environmental Protection Act 1986',
      'Assess baseline air, water, soil, and noise quality',
      'Predict health impacts: respiratory disease, water contamination, occupational hazards',
      'Recommend emission controls, effluent treatment plants, green buffer zones',
      'Occupational health services for workers',
      'Community health surveillance and periodic monitoring',
    ],
    modelAnswer:
      'An Environmental Impact Assessment should evaluate baseline air, water, soil quality and predict potential health impacts. Preventive measures include installing effluent treatment plants, air pollution control devices, creating green buffer zones, ensuring occupational health services, and establishing community health surveillance systems. The EIA should also assess noise pollution, solid waste management, and long-term health monitoring plans.',
    followUpQuestions: [
      'What are the components of an Environmental Impact Assessment?',
      'Describe the role of the Central Pollution Control Board.',
    ],
    pihuHint: 'EIA is basically asking "will this factory ruin our vibe?" before letting it set up shop near the village!',
    marks: 10,
  },

  // ============================================================
  // PSM — occupational_health
  // ============================================================
  {
    id: 'occupational_health-easy',
    subjectSlug: 'psm',
    topicSlug: 'occupational_health',
    difficulty: 'easy',
    question: 'Define occupational disease. Give four examples with the associated occupation.',
    expectedKeyPoints: [
      'Disease arising out of or in the course of employment',
      'Silicosis in stone crushers and miners',
      'Asbestosis in insulation workers',
      'Byssinosis in cotton textile workers',
      'Lead poisoning in battery workers and painters',
    ],
    modelAnswer:
      'An occupational disease is one that arises directly from exposure to risk factors at the workplace. Examples include silicosis in miners due to silica dust, asbestosis in insulation workers, byssinosis in cotton mill workers from cotton dust, and lead poisoning in battery manufacturing workers from lead fumes and dust.',
    followUpQuestions: [
      'What is the Factories Act 1948 and its provisions for worker health?',
      'Differentiate between occupational disease and work-related disease.',
    ],
    pihuHint: 'Just link the dust to the job — silica miners get silicosis, cotton workers get byssinosis, easy peasy!',
    marks: 5,
  },
  {
    id: 'occupational_health-medium',
    subjectSlug: 'psm',
    topicSlug: 'occupational_health',
    difficulty: 'medium',
    question: 'Describe the clinical features, diagnosis, and prevention of silicosis.',
    expectedKeyPoints: [
      'Caused by inhalation of free crystalline silica (SiO2) dust',
      'Progressive nodular fibrosis of lungs',
      'Symptoms: progressive dyspnea, cough, eventually respiratory failure',
      'Diagnosis: occupational history, chest X-ray showing eggshell calcification of hilar nodes',
      'Prevention: dust control, wet drilling, PPE, pre-employment and periodic medical examination',
      'No curative treatment — prevention is key',
    ],
    modelAnswer:
      'Silicosis results from chronic inhalation of crystalline silica dust, causing progressive pulmonary fibrosis. Patients present with progressive dyspnea and cough. Chest X-ray shows bilateral nodular opacities and characteristic eggshell calcification of hilar lymph nodes. Prevention involves engineering controls like wet drilling, ventilation, use of respirators, and regular medical surveillance. There is no curative treatment.',
    followUpQuestions: [
      'What is the association between silicosis and tuberculosis?',
      'Differentiate between simple and complicated silicosis.',
    ],
    pihuHint: 'Eggshell calcification on CXR is the silicosis signature — spot it and you have cracked the diagnosis, literally!',
    marks: 8,
  },
  {
    id: 'occupational_health-hard',
    subjectSlug: 'psm',
    topicSlug: 'occupational_health',
    difficulty: 'hard',
    question: 'A 35-year-old farmer presents with abdominal pain, excessive salivation, miosis, and muscle fasciculations after spraying pesticides. Diagnose the condition and outline the management.',
    expectedKeyPoints: [
      'Diagnosis: organophosphorus compound poisoning',
      'Mechanism: irreversible inhibition of acetylcholinesterase',
      'Muscarinic effects: miosis, salivation, lacrimation, bronchospasm',
      'Nicotinic effects: fasciculations, weakness, paralysis',
      'Treatment: atropine (for muscarinic effects), pralidoxime (PAM) for reactivation of AChE',
      'Decontamination, remove clothes, ABC management',
    ],
    modelAnswer:
      'This is organophosphorus poisoning presenting with cholinergic crisis. The SLUDGE symptoms (salivation, lacrimation, urination, defecation, GI cramps, emesis) plus miosis and fasciculations are characteristic. Management includes decontamination, maintaining airway, IV atropine titrated to dry secretions, and pralidoxime (PAM) to reactivate acetylcholinesterase. Monitor for intermediate syndrome and delayed neuropathy.',
    followUpQuestions: [
      'What is intermediate syndrome in OP poisoning?',
      'How do you monitor atropinization adequacy?',
    ],
    pihuHint: 'SLUDGE symptoms plus farming history equals OP poisoning — atropine for the muscarinic mess, PAM for the enzyme rescue!',
    marks: 10,
  },

  // ============================================================
  // PSM — nutrition
  // ============================================================
  {
    id: 'nutrition-easy',
    subjectSlug: 'psm',
    topicSlug: 'nutrition',
    difficulty: 'easy',
    question: 'Classify proteins and explain what is meant by biological value of protein.',
    expectedKeyPoints: [
      'Complete proteins contain all essential amino acids (animal sources)',
      'Incomplete proteins lack one or more essential amino acids (plant sources)',
      'Biological value: proportion of absorbed nitrogen retained by body',
      'Egg has the highest biological value (reference protein)',
      'Mutual supplementation can improve protein quality',
    ],
    modelAnswer:
      'Proteins are classified as complete (containing all essential amino acids, e.g., egg, milk) and incomplete (lacking one or more essential amino acids, e.g., cereals, pulses). Biological value is the percentage of absorbed nitrogen retained by the body for growth and maintenance. Egg protein has the highest BV of 96 and is used as the reference protein.',
    followUpQuestions: [
      'What is the concept of mutual supplementation? Give an example.',
      'What is the recommended daily protein intake for an adult Indian?',
    ],
    pihuHint: 'Egg is the gold standard of protein — highest BV, and that is why every hostel kid survives on eggs during exams!',
    marks: 5,
  },
  {
    id: 'nutrition-medium',
    subjectSlug: 'psm',
    topicSlug: 'nutrition',
    difficulty: 'medium',
    question: 'Describe the clinical features and management of Protein Energy Malnutrition. Differentiate between kwashiorkor and marasmus.',
    expectedKeyPoints: [
      'Kwashiorkor: edema, moon face, flag sign in hair, fatty liver, adequate calories but protein deficient',
      'Marasmus: severe wasting, old man facies, no edema, overall calorie deficiency',
      'Marasmic kwashiorkor: features of both',
      'WHO classification by weight-for-age, mid-arm circumference',
      'Management: stabilization, catch-up feeding, micronutrients, treat infections',
      'F-75 and F-100 therapeutic feeds in severe malnutrition',
    ],
    modelAnswer:
      'Kwashiorkor results primarily from protein deficiency and presents with edema, moon face, skin changes, and fatty liver. Marasmus results from overall calorie deficiency with severe wasting, loss of subcutaneous fat, and old man facies without edema. Management involves WHO 10-step protocol: treating hypoglycemia, hypothermia, dehydration, electrolyte imbalance, infections, and providing graduated feeding with F-75 and F-100 formulas.',
    followUpQuestions: [
      'What is the WHO 10-step management protocol for severe acute malnutrition?',
      'Explain the role of RUTF in community-based management of malnutrition.',
    ],
    pihuHint: 'Kwashiorkor has edema (the K has a belly), Marasmus is all bones (M for muscle wasting) — visual memory for the win!',
    marks: 8,
  },
  {
    id: 'nutrition-hard',
    subjectSlug: 'psm',
    topicSlug: 'nutrition',
    difficulty: 'hard',
    question: 'Design a nutrition intervention program for a tribal area with high prevalence of anemia and undernutrition in children under 5 years.',
    expectedKeyPoints: [
      'Baseline survey to assess prevalence and dietary patterns',
      'Iron-folic acid supplementation through Anganwadi centres',
      'Nutrition education for mothers on complementary feeding',
      'Mid-day meal scheme and supplementary nutrition under ICDS',
      'Deworming and malaria control as contributing factors',
      'Growth monitoring, referral system, and community health worker training',
    ],
    modelAnswer:
      'The program should begin with a baseline nutritional survey. Interventions include iron-folic acid supplementation, biannual deworming, and strengthening ICDS supplementary nutrition. Nutrition education targeting mothers on complementary feeding, dietary diversification, and local food-based solutions is essential. Growth monitoring with MUAC screening, community health worker training, and convergence with malaria control and sanitation programs will address root causes.',
    followUpQuestions: [
      'What is the ICDS scheme and its services?',
      'How would you monitor and evaluate this nutrition program?',
    ],
    pihuHint: 'Think ICDS plus IFA plus deworming — the triple combo that can rescue undernutrition in tribal kids!',
    marks: 10,
  },

  // ============================================================
  // PSM — demography
  // ============================================================
  {
    id: 'demography-easy',
    subjectSlug: 'psm',
    topicSlug: 'demography',
    difficulty: 'easy',
    question: 'Define crude birth rate, crude death rate, and natural growth rate of population.',
    expectedKeyPoints: [
      'CBR: number of live births per 1000 mid-year population per year',
      'CDR: number of deaths per 1000 mid-year population per year',
      'Natural growth rate = CBR - CDR',
      'These are crude rates as they do not account for age and sex structure',
      'Current CBR of India is approximately 19-20 per 1000',
    ],
    modelAnswer:
      'Crude birth rate is the number of live births per 1000 mid-year population in a year. Crude death rate is the number of deaths per 1000 mid-year population in a year. Natural growth rate is the difference between CBR and CDR, representing population growth without migration. They are called "crude" because they do not adjust for age and sex composition.',
    followUpQuestions: [
      'Why are age-specific rates preferred over crude rates?',
      'What is total fertility rate and replacement level fertility?',
    ],
    pihuHint: 'CBR minus CDR equals natural growth — if births beat deaths, population goes up, basic math bestie!',
    marks: 5,
  },
  {
    id: 'demography-medium',
    subjectSlug: 'psm',
    topicSlug: 'demography',
    difficulty: 'medium',
    question: 'Explain the demographic cycle (theory of demographic transition) and identify which stage India is currently in.',
    expectedKeyPoints: [
      'Stage 1: High birth rate, high death rate, slow population growth',
      'Stage 2: High birth rate, declining death rate, rapid population growth (population explosion)',
      'Stage 3: Declining birth rate, low death rate, decreasing growth rate',
      'Stage 4: Low birth rate, low death rate, stable population',
      'India is in late Stage 3 transitioning toward Stage 4',
      'Different states at different stages of transition',
    ],
    modelAnswer:
      'The demographic transition theory describes four stages: Stage 1 has high birth and death rates with slow growth. Stage 2 has declining death rates but high birth rates causing rapid growth. Stage 3 shows declining birth rates with decelerating growth. Stage 4 achieves low birth and death rates with stable population. India is broadly in late Stage 3, though states like Kerala are in Stage 4 while states like Bihar remain in earlier stages.',
    followUpQuestions: [
      'What factors caused the decline in death rate in Stage 2?',
      'Why do some Indian states lag behind in demographic transition?',
    ],
    pihuHint: 'India is like a train — Kerala is already at the station (Stage 4), UP-Bihar are still on the way (Stage 2-3)!',
    marks: 8,
  },
  {
    id: 'demography-hard',
    subjectSlug: 'psm',
    topicSlug: 'demography',
    difficulty: 'hard',
    question: 'India\'s population is expected to surpass China\'s. Discuss the demographic challenges India faces and the strategies to achieve population stabilization.',
    expectedKeyPoints: [
      'Youth bulge: large working-age population — opportunity and challenge',
      'Regional disparity in fertility rates between north and south',
      'Aging population in states that completed transition early',
      'Strategies: female education, contraception access, raising marriage age',
      'National Population Policy 2000 goals: TFR of 2.1',
      'Addressing son preference and gender discrimination',
    ],
    modelAnswer:
      'India faces a dual demographic challenge: population momentum from its youth bulge and regional disparities in fertility rates. Strategies for stabilization include expanding female education and empowerment, improving access to contraception, enforcing legal marriage age, and addressing sociocultural factors like son preference. States like Bihar and UP require focused efforts, while states that completed transition face aging-population challenges.',
    followUpQuestions: [
      'What is population momentum and why does it matter?',
      'Compare India\'s population policy approach with China\'s.',
    ],
    pihuHint: 'Population stabilization is not just about fewer babies — it is about educating girls, because every year of female education drops fertility!',
    marks: 10,
  },

  // ============================================================
  // PSM — health_indicators
  // ============================================================
  {
    id: 'health_indicators-easy',
    subjectSlug: 'psm',
    topicSlug: 'health_indicators',
    difficulty: 'easy',
    question: 'Define Infant Mortality Rate (IMR) and state its significance as a health indicator.',
    expectedKeyPoints: [
      'IMR: deaths of infants under 1 year per 1000 live births per year',
      'Reflects overall socioeconomic development and health care quality',
      'Sensitive indicator of maternal and child health services',
      'India IMR approximately 28 per 1000 live births (recent data)',
      'Components: neonatal mortality and post-neonatal mortality',
    ],
    modelAnswer:
      'Infant mortality rate is the number of deaths among infants under one year of age per 1000 live births in a year. It is considered the most sensitive indicator of a community health status because it reflects the quality of maternal and child health services, nutrition, sanitation, and overall socioeconomic development. It has two components: neonatal (0-28 days) and post-neonatal (29 days to 1 year).',
    followUpQuestions: [
      'What are the major causes of neonatal mortality in India?',
      'How does IMR differ between urban and rural India?',
    ],
    pihuHint: 'IMR is the report card of a nation\'s health — lower is better, just like your exam anxiety should be!',
    marks: 5,
  },
  {
    id: 'health_indicators-medium',
    subjectSlug: 'psm',
    topicSlug: 'health_indicators',
    difficulty: 'medium',
    question: 'Compare DALY and QALY as measures of disease burden. Explain the components of DALY.',
    expectedKeyPoints: [
      'DALY = Years of Life Lost (YLL) + Years Lived with Disability (YLD)',
      'One DALY represents one lost year of healthy life',
      'QALY measures quality-adjusted years gained from an intervention',
      'DALY measures burden of disease; QALY measures health gain from treatment',
      'DALY used by WHO for Global Burden of Disease studies',
      'Higher DALYs mean greater disease burden; higher QALYs mean better intervention outcome',
    ],
    modelAnswer:
      'DALY (Disability-Adjusted Life Year) is the sum of Years of Life Lost due to premature death (YLL) and Years Lived with Disability (YLD), measuring disease burden. QALY (Quality-Adjusted Life Year) measures health outcomes by combining survival with quality of life, used to evaluate interventions. While DALY quantifies disease burden (higher is worse), QALY quantifies health gains (higher is better), making them complementary metrics.',
    followUpQuestions: [
      'What disability weight is used in DALY calculation?',
      'How are DALYs used in health policy decision-making?',
    ],
    pihuHint: 'DALY is the bad score (disease burden), QALY is the good score (health gained) — they are two sides of the same coin!',
    marks: 8,
  },
  {
    id: 'health_indicators-hard',
    subjectSlug: 'psm',
    topicSlug: 'health_indicators',
    difficulty: 'hard',
    question: 'You are asked to compare the health status of two districts in India. Which health indicators would you use and why? Design a composite index for comparison.',
    expectedKeyPoints: [
      'Mortality indicators: IMR, MMR, under-5 mortality, life expectancy',
      'Morbidity indicators: incidence and prevalence of communicable and NCD',
      'Service indicators: immunization coverage, institutional delivery rate',
      'Socioeconomic indicators: literacy rate, per capita income, access to sanitation',
      'Composite index like HDI or NITI Aayog health index methodology',
      'Weightage to each indicator based on public health importance',
    ],
    modelAnswer:
      'A composite health index should include mortality indicators (IMR, MMR, under-5 MR), morbidity indicators (TB incidence, NCD prevalence), service utilization (immunization coverage, institutional delivery, doctor-population ratio), and socioeconomic determinants (female literacy, sanitation coverage). Assign weights based on public health priority, normalize indicators on a 0-1 scale, and compute a weighted composite score similar to the NITI Aayog Health Index methodology.',
    followUpQuestions: [
      'What are the limitations of using a single indicator like IMR for comparison?',
      'How does the Human Development Index incorporate health indicators?',
    ],
    pihuHint: 'Do not depend on one indicator — it is like judging someone by one exam, use the composite index for the full picture!',
    marks: 10,
  },

  // ============================================================
  // PSM — health_system_india
  // ============================================================
  {
    id: 'health_system_india-easy',
    subjectSlug: 'psm',
    topicSlug: 'health_system_india',
    difficulty: 'easy',
    question: 'Describe the three-tier health care delivery system in rural India.',
    expectedKeyPoints: [
      'Sub-centre: most peripheral, serves 5000 population (3000 in hilly areas)',
      'Primary Health Centre (PHC): serves 30,000 population, first referral point',
      'Community Health Centre (CHC): serves 120,000 population, 30-bed hospital',
      'Staffing: sub-centre has ANM and MPW, PHC has medical officer',
      'CHC has specialists in surgery, medicine, obstetrics, pediatrics',
    ],
    modelAnswer:
      'Rural India has a three-tier health system: sub-centres (serving 5000 population with ANM and health worker), Primary Health Centres (serving 30,000 with a medical officer and 6 beds), and Community Health Centres (serving 120,000 with 30 beds and specialist services). This system provides preventive, promotive, and curative services with a referral chain from sub-centre upward.',
    followUpQuestions: [
      'What are the functions of an ANM at the sub-centre?',
      'What are the Indian Public Health Standards for a PHC?',
    ],
    pihuHint: 'Sub-centre, PHC, CHC — think of it as gali, mohalla, city-level hospitals, each bigger than the last!',
    marks: 5,
  },
  {
    id: 'health_system_india-medium',
    subjectSlug: 'psm',
    topicSlug: 'health_system_india',
    difficulty: 'medium',
    question: 'What is the National Health Mission? Describe its key components and achievements.',
    expectedKeyPoints: [
      'NHM has two sub-missions: NRHM (rural) and NUHM (urban)',
      'ASHA workers as community health activists in NRHM',
      'Janani Suraksha Yojana for institutional deliveries',
      'Free drugs and diagnostics at public facilities',
      'Achievements: improved IMR, MMR, institutional delivery rates',
      'Challenges: workforce shortage, infrastructure gaps, quality of care',
    ],
    modelAnswer:
      'National Health Mission encompasses NRHM and NUHM, aiming to provide accessible, affordable healthcare. Key components include deployment of ASHA workers, Janani Suraksha Yojana for promoting institutional deliveries, free drugs and diagnostics, and mobile medical units. Major achievements include significant reduction in IMR and MMR, increased institutional deliveries, and improved immunization coverage, though challenges in workforce and quality persist.',
    followUpQuestions: [
      'What are the roles and responsibilities of an ASHA worker?',
      'How has JSY contributed to reducing maternal mortality?',
    ],
    pihuHint: 'ASHA worker is the real MVP of rural healthcare — she connects the village to the health system, remember her role well!',
    marks: 8,
  },
  {
    id: 'health_system_india-hard',
    subjectSlug: 'psm',
    topicSlug: 'health_system_india',
    difficulty: 'hard',
    question: 'India spends about 1.3% of GDP on public health. Discuss the implications of low public health expenditure and suggest reforms to strengthen the health system.',
    expectedKeyPoints: [
      'High out-of-pocket expenditure (around 50-60%) causes catastrophic health spending',
      'Poor infrastructure and workforce shortages in public sector',
      'Urban-rural and interstate disparities in healthcare access',
      'Reforms: increase expenditure to 2.5% GDP as per NHP 2017',
      'Strengthen primary care, invest in health workforce',
      'Universal Health Coverage through insurance and public system strengthening',
    ],
    modelAnswer:
      'Low public health expenditure leads to high out-of-pocket spending causing financial catastrophe for families, poor infrastructure, workforce shortages, and reliance on unregulated private sector. Reforms should include increasing public spending to 2.5% of GDP per NHP 2017 recommendations, strengthening primary care infrastructure, expanding health workforce, regulating private sector through Clinical Establishments Act, and moving toward universal health coverage.',
    followUpQuestions: [
      'What is the concept of Universal Health Coverage?',
      'How does catastrophic health expenditure push families into poverty?',
    ],
    pihuHint: 'India\'s health budget is like a student\'s pocket money — too little for what is needed, time for a raise!',
    marks: 10,
  },

  // ============================================================
  // OPHTHALMOLOGY — anatomy_of_eye
  // ============================================================
  {
    id: 'anatomy_of_eye-easy',
    subjectSlug: 'ophthalmology',
    topicSlug: 'anatomy_of_eye',
    difficulty: 'easy',
    question: 'Describe the layers of the cornea.',
    expectedKeyPoints: [
      'Epithelium: stratified squamous, non-keratinized, 5-6 layers',
      'Bowman membrane: acellular condensation of stroma',
      'Stroma: thickest layer, collagen fibrils in regular arrangement',
      'Descemet membrane: basement membrane of endothelium',
      'Endothelium: single layer of hexagonal cells, does not regenerate',
    ],
    modelAnswer:
      'The cornea has five layers from anterior to posterior: epithelium (stratified squamous, regenerates rapidly), Bowman membrane (acellular, does not regenerate), stroma (90% of corneal thickness, regular collagen arrangement for transparency), Descemet membrane (strong elastic layer), and endothelium (single layer of non-regenerating cells responsible for maintaining corneal dehydration and transparency).',
    followUpQuestions: [
      'Why is the endothelium critical for corneal transparency?',
      'What happens if Bowman membrane is damaged?',
    ],
    pihuHint: 'Five layers of cornea: Every Boy Should Drink Energy — Epithelium, Bowman, Stroma, Descemet, Endothelium!',
    marks: 5,
  },
  {
    id: 'anatomy_of_eye-medium',
    subjectSlug: 'ophthalmology',
    topicSlug: 'anatomy_of_eye',
    difficulty: 'medium',
    question: 'Describe the blood supply of the retina. Why is the fovea avascular?',
    expectedKeyPoints: [
      'Inner retina supplied by central retinal artery (branch of ophthalmic artery)',
      'Outer retina (photoreceptors) supplied by choriocapillaris',
      'Central retinal artery is an end artery — occlusion causes retinal infarction',
      'Fovea is avascular to allow maximum light transmission to photoreceptors',
      'Fovea receives nutrition solely from choriocapillaris',
      'Foveal avascular zone (FAZ) is clinically significant in diabetic retinopathy',
    ],
    modelAnswer:
      'The inner two-thirds of the retina is supplied by the central retinal artery, which is an end artery. The outer one-third, including photoreceptors, is nourished by the choriocapillaris of the choroid. The fovea is avascular because retinal vessels would scatter light and degrade the high-resolution central vision. The fovea depends entirely on the choroidal circulation for its metabolic needs.',
    followUpQuestions: [
      'What is a cherry-red spot and in which condition is it seen?',
      'How does diabetes affect the foveal avascular zone?',
    ],
    pihuHint: 'Fovea has no blood vessels because even a tiny shadow there would blur your sharpest vision — it is like keeping the stage spotlight clear!',
    marks: 8,
  },
  {
    id: 'anatomy_of_eye-hard',
    subjectSlug: 'ophthalmology',
    topicSlug: 'anatomy_of_eye',
    difficulty: 'hard',
    question: 'A patient presents with sudden painless loss of vision in one eye. On fundoscopy, you see a pale retina with a cherry-red spot at the macula. Discuss the anatomy-based explanation and management.',
    expectedKeyPoints: [
      'Diagnosis: Central Retinal Artery Occlusion (CRAO)',
      'Central retinal artery is an end artery with no anastomoses',
      'Cherry-red spot: choroidal flush visible through thin fovea while surrounding retina is pale from ischemia',
      'Causes: embolism from carotid atherosclerosis, giant cell arteritis',
      'Emergency management within golden period (90-120 minutes)',
      'Treatment: ocular massage, anterior chamber paracentesis, carbogen inhalation',
    ],
    modelAnswer:
      'This is CRAO causing infarction of the inner retina supplied by the end-artery central retinal artery. The cherry-red spot appears because the thin fovea (devoid of inner retinal layers) transmits the underlying choroidal blush, while the surrounding edematous ischemic retina appears pale. Emergency treatment includes digital ocular massage, lowering IOP by paracentesis, and vasodilation with carbogen. Evaluate for carotid source and giant cell arteritis.',
    followUpQuestions: [
      'Why should ESR be checked urgently in a patient with CRAO above 50 years?',
      'How does branch retinal artery occlusion differ from CRAO?',
    ],
    pihuHint: 'Cherry-red spot means the choroid is showing through the fovea window while the rest of the retina has no blood — end artery ka result!',
    marks: 10,
  },

  // ============================================================
  // OPHTHALMOLOGY — physiology_of_vision
  // ============================================================
  {
    id: 'physiology_of_vision-easy',
    subjectSlug: 'ophthalmology',
    topicSlug: 'physiology_of_vision',
    difficulty: 'easy',
    question: 'Explain the mechanism of accommodation of the eye.',
    expectedKeyPoints: [
      'Accommodation: ability to change lens shape to focus on near objects',
      'Contraction of ciliary muscle relaxes zonular fibers',
      'Lens becomes more convex (increased refractive power)',
      'Near triad: accommodation, convergence, miosis',
      'Accommodation decreases with age — presbyopia',
    ],
    modelAnswer:
      'Accommodation is the process by which the eye increases its refractive power to focus on near objects. When the ciliary muscle contracts, it relaxes the zonular fibers, allowing the elastic lens to become more convex. This is part of the near reflex triad that includes accommodation, convergence of both eyes, and pupillary constriction (miosis). With age, the lens loses elasticity, reducing accommodative power leading to presbyopia.',
    followUpQuestions: [
      'What is amplitude of accommodation and how does it change with age?',
      'At what age does presbyopia typically manifest?',
    ],
    pihuHint: 'Ciliary muscle contracts, zonules relax, lens becomes chubby — your eye autofocusing like a phone camera!',
    marks: 5,
  },
  {
    id: 'physiology_of_vision-medium',
    subjectSlug: 'ophthalmology',
    topicSlug: 'physiology_of_vision',
    difficulty: 'medium',
    question: 'Describe the visual pathway from retina to visual cortex. What are the effects of lesions at different points?',
    expectedKeyPoints: [
      'Retina to optic nerve to optic chiasm to optic tract',
      'Lateral geniculate body to optic radiation to visual cortex (area 17)',
      'Optic nerve lesion: ipsilateral blindness',
      'Chiasm lesion (central): bitemporal hemianopia',
      'Optic tract lesion: contralateral homonymous hemianopia',
      'Macular sparing in occipital cortex lesions due to dual blood supply',
    ],
    modelAnswer:
      'The visual pathway: retinal ganglion cells form the optic nerve, nasal fibers decussate at the chiasm, then continue as the optic tract to the lateral geniculate body, then via optic radiations to the primary visual cortex (area 17). Optic nerve lesion causes ipsilateral blindness, chiasmal lesion causes bitemporal hemianopia, optic tract lesion causes contralateral homonymous hemianopia, and occipital cortex lesion causes homonymous hemianopia with macular sparing.',
    followUpQuestions: [
      'Why does a pituitary tumor cause bitemporal hemianopia?',
      'What is the significance of RAPD (relative afferent pupillary defect)?',
    ],
    pihuHint: 'Nasal fibers cross at the chiasm, temporal fibers stay — that is why a chiasm lesion knocks out both temporal fields!',
    marks: 8,
  },
  {
    id: 'physiology_of_vision-hard',
    subjectSlug: 'ophthalmology',
    topicSlug: 'physiology_of_vision',
    difficulty: 'hard',
    question: 'A patient has right homonymous hemianopia with macular sparing. Localize the lesion and explain the physiological basis for macular sparing.',
    expectedKeyPoints: [
      'Lesion is in the left visual cortex (occipital lobe)',
      'Right homonymous hemianopia means loss of right visual field in both eyes',
      'Macular sparing occurs because macular cortex has dual blood supply (PCA and MCA)',
      'Large cortical representation of macula (cortical magnification)',
      'Common cause: posterior cerebral artery occlusion',
      'Macular sparing distinguishes cortical from tract lesions',
    ],
    modelAnswer:
      'The lesion is in the left occipital visual cortex, likely from left posterior cerebral artery occlusion. Right homonymous hemianopia results from damage to the left visual cortex receiving right visual field information. Macular sparing occurs because the macular area has dual blood supply from both posterior cerebral and middle cerebral arteries, and occupies a disproportionately large cortical area. This macular sparing distinguishes cortical lesions from optic tract lesions.',
    followUpQuestions: [
      'How would you differentiate a tract lesion from an occipital lesion clinically?',
      'What is cortical magnification of the macula?',
    ],
    pihuHint: 'Macular sparing means the macula has a backup blood supply — it is the VIP area with dual power source in your visual cortex!',
    marks: 10,
  },

  // ============================================================
  // OPHTHALMOLOGY — refraction_errors
  // ============================================================
  {
    id: 'refraction_errors-easy',
    subjectSlug: 'ophthalmology',
    topicSlug: 'refraction_errors',
    difficulty: 'easy',
    question: 'Define myopia and its correction. What are the types of myopia?',
    expectedKeyPoints: [
      'Myopia: parallel rays focus in front of retina',
      'Far point is closer than infinity (at a finite distance)',
      'Corrected by concave (diverging) lens',
      'Types: simple, pathological (degenerative), pseudomyopia',
      'Axial myopia: eyeball too long; refractive myopia: lens too powerful',
    ],
    modelAnswer:
      'Myopia is a refractive error where parallel rays of light focus in front of the retina, causing blurred distant vision. The far point is at a finite distance. It is corrected by concave (minus) lenses that diverge light rays before entering the eye. Types include axial myopia (elongated eyeball), refractive myopia (excess lens power), and pathological myopia with degenerative changes in retina and sclera.',
    followUpQuestions: [
      'What are the complications of pathological myopia?',
      'How does myopia differ from hypermetropia in terms of correcting lens?',
    ],
    pihuHint: 'Myopia means you are near-sighted — your eye is too eager and focuses too early, use a minus lens to calm it down!',
    marks: 5,
  },
  {
    id: 'refraction_errors-medium',
    subjectSlug: 'ophthalmology',
    topicSlug: 'refraction_errors',
    difficulty: 'medium',
    question: 'Explain the principles of retinoscopy. How do you determine the refractive error using retinoscopy?',
    expectedKeyPoints: [
      'Retinoscopy is an objective method of refraction',
      'Light is shone into the eye and the reflex movement in the pupil is observed',
      'With movement: patient is hypermetropic (or less myopic than working distance)',
      'Against movement: patient is more myopic than working distance',
      'Neutralization point: no movement — refractive error equals inverse of working distance correction',
      'Working distance usually 1 meter, subtract 1 diopter from final reading',
    ],
    modelAnswer:
      'Retinoscopy involves projecting light into the patient eye and observing the retinal reflex in the pupil. "With" movement indicates hypermetropia and is neutralized with plus lenses. "Against" movement indicates myopia and is neutralized with minus lenses. At neutralization, the reflex fills the pupil without movement. The final refractive error equals the neutralizing lens minus the working distance correction (typically 1 diopter for 1 meter).',
    followUpQuestions: [
      'What is the difference between static and dynamic retinoscopy?',
      'Why is cycloplegic refraction important in children?',
    ],
    pihuHint: 'With movement means with you (add plus), against movement means against you (add minus) — retinoscopy decoded!',
    marks: 8,
  },
  {
    id: 'refraction_errors-hard',
    subjectSlug: 'ophthalmology',
    topicSlug: 'refraction_errors',
    difficulty: 'hard',
    question: 'A 7-year-old child presents with complaints of difficulty seeing the blackboard. Describe your approach to refraction and prescribing glasses in this child. Why is cycloplegic refraction mandatory?',
    expectedKeyPoints: [
      'Children have strong accommodation that can mask hypermetropia',
      'Cycloplegia paralyzes ciliary muscle, revealing true refractive error',
      'Atropine is the gold standard cycloplegic agent in children',
      'Cyclopentolate is an alternative for quicker examination',
      'Post-mydriatic test after 3 weeks of atropine instillation',
      'Under-correction of myopia, full correction of hypermetropia and astigmatism',
    ],
    modelAnswer:
      'In a 7-year-old, cycloplegic refraction is mandatory because children have powerful accommodation that can mask true refractive error, especially latent hypermetropia. Use atropine 1% eye drops for 3 days before examination. Perform retinoscopy under cycloplegia, then a post-mydriatic test to determine the accepted correction. For myopia, prescribe the minimum minus lens giving best vision. For hypermetropia, correct fully to prevent amblyopia and accommodate comfortably.',
    followUpQuestions: [
      'When should you suspect amblyopia in a child with refractive error?',
      'What is the role of atropine penalization in amblyopia treatment?',
    ],
    pihuHint: 'Kids are little accommodation machines — without cycloplegia, they will fool your retinoscopy every time, so paralyze that ciliary muscle first!',
    marks: 10,
  },

  // ============================================================
  // OPHTHALMOLOGY — cataract
  // ============================================================
  {
    id: 'cataract-easy',
    subjectSlug: 'ophthalmology',
    topicSlug: 'cataract',
    difficulty: 'easy',
    question: 'Define cataract and enumerate the types of senile cataract.',
    expectedKeyPoints: [
      'Cataract: opacity of the crystalline lens or its capsule',
      'Senile cataract is the most common type',
      'Types by morphology: cortical, nuclear, posterior subcapsular',
      'Stages of cortical cataract: immature, mature (intumescent), hypermature (Morgagnian)',
      'Nuclear cataract causes index myopia (second sight of the aged)',
    ],
    modelAnswer:
      'Cataract is any opacity of the crystalline lens or its capsule causing visual impairment. Senile cataract, the most common type, has three morphological types: cortical (spoke-like opacities), nuclear (yellowing and hardening of nucleus causing index myopia), and posterior subcapsular (granular opacity near posterior capsule, common in diabetics). Cortical cataract progresses through immature, mature, and hypermature stages.',
    followUpQuestions: [
      'What is second sight of the aged?',
      'What are the complications of a hypermature cataract?',
    ],
    pihuHint: 'Cataract is simply a cloudy lens — cortical, nuclear, or posterior subcapsular, just remember where the cloudiness sits!',
    marks: 5,
  },
  {
    id: 'cataract-medium',
    subjectSlug: 'ophthalmology',
    topicSlug: 'cataract',
    difficulty: 'medium',
    question: 'Compare the surgical techniques of ECCE, SICS, and phacoemulsification for cataract surgery.',
    expectedKeyPoints: [
      'ECCE: large incision (10-12mm), manual nucleus removal, requires sutures',
      'SICS: self-sealing scleral tunnel (6-7mm), no sutures needed, cost-effective',
      'Phacoemulsification: small incision (2.8mm), ultrasound emulsification of nucleus',
      'Phaco has fastest visual recovery and least astigmatism',
      'SICS preferred in developing countries for hard cataracts and camp settings',
      'All involve IOL implantation in the capsular bag',
    ],
    modelAnswer:
      'ECCE uses a large corneal incision requiring sutures with slower recovery. SICS uses a self-sealing scleral tunnel, is sutureless, and is ideal for mature cataracts in resource-limited settings. Phacoemulsification uses a small incision with ultrasonic nucleus fragmentation, providing fastest recovery and least induced astigmatism but requires expensive equipment. SICS is the preferred technique in India for camp-based cataract programs due to cost-effectiveness.',
    followUpQuestions: [
      'What are the complications specific to phacoemulsification?',
      'What is posterior capsule opacification and how is it treated?',
    ],
    pihuHint: 'Phaco is the fancy one (small cut, fast recovery), SICS is the desi jugaad (cheap, effective, no sutures) — both get the job done!',
    marks: 8,
  },
  {
    id: 'cataract-hard',
    subjectSlug: 'ophthalmology',
    topicSlug: 'cataract',
    difficulty: 'hard',
    question: 'A 60-year-old diabetic patient presents with sudden onset pain, redness, and decreased vision 2 days after cataract surgery. What is the most likely diagnosis? Discuss the management.',
    expectedKeyPoints: [
      'Diagnosis: Post-operative endophthalmitis',
      'Most common organism: Staphylococcus epidermidis',
      'Features: pain, lid edema, hypopyon, vitritis, decreased red reflex',
      'B-scan ultrasonography to assess vitreous involvement',
      'Management: intravitreal antibiotics (vancomycin + ceftazidime)',
      'Vitreous tap and culture; vitrectomy if vision is light perception only',
    ],
    modelAnswer:
      'This is acute post-operative endophthalmitis, the most dreaded complication after cataract surgery. The presentation of pain, redness, hypopyon, and decreased vision within days of surgery is characteristic. Management per the EVS (Endophthalmitis Vitrectomy Study): immediate vitreous tap for culture and intravitreal injection of vancomycin and ceftazidime. If vision is light perception only, pars plana vitrectomy is recommended. Diabetic patients are at higher risk.',
    followUpQuestions: [
      'What were the key findings of the Endophthalmitis Vitrectomy Study?',
      'How would you differentiate TASS from endophthalmitis?',
    ],
    pihuHint: 'Pain after cataract surgery is never normal — think endophthalmitis until proven otherwise, and intravitreal antibiotics are the SOS!',
    marks: 10,
  },

  // ============================================================
  // OPHTHALMOLOGY — glaucoma
  // ============================================================
  {
    id: 'glaucoma-easy',
    subjectSlug: 'ophthalmology',
    topicSlug: 'glaucoma',
    difficulty: 'easy',
    question: 'Define glaucoma. What is the normal intraocular pressure and how is aqueous humor produced and drained?',
    expectedKeyPoints: [
      'Glaucoma: group of conditions with optic neuropathy and visual field loss',
      'Normal IOP: 10-21 mmHg',
      'Aqueous humor produced by ciliary epithelium (ciliary body)',
      'Drainage: trabecular meshwork to Schlemm canal (conventional pathway — 90%)',
      'Uveoscleral pathway accounts for about 10% of drainage',
    ],
    modelAnswer:
      'Glaucoma is a progressive optic neuropathy characterized by optic disc cupping and visual field loss, often associated with raised intraocular pressure. Normal IOP is 10-21 mmHg. Aqueous humor is produced by the ciliary epithelium, flows from posterior to anterior chamber, and drains primarily (90%) through the trabecular meshwork into Schlemm canal, with a secondary uveoscleral pathway accounting for 10%.',
    followUpQuestions: [
      'Can glaucoma occur with normal IOP?',
      'What is the role of tonometry in glaucoma screening?',
    ],
    pihuHint: 'Aqueous is made by ciliary body and drained by trabecular meshwork — block the drain and pressure goes up, just like a clogged sink!',
    marks: 5,
  },
  {
    id: 'glaucoma-medium',
    subjectSlug: 'ophthalmology',
    topicSlug: 'glaucoma',
    difficulty: 'medium',
    question: 'Differentiate between primary open-angle glaucoma and primary angle-closure glaucoma in terms of pathology, presentation, and management.',
    expectedKeyPoints: [
      'POAG: open angle, chronic, painless, gradual visual field loss',
      'PACG: narrow angle, can present as acute attack with severe pain',
      'POAG: resistance at trabecular meshwork; PACG: iris blocks drainage angle',
      'POAG management: medical (prostaglandins, beta-blockers), laser trabeculoplasty, surgery',
      'Acute PACG: emergency — pilocarpine, timolol, IV mannitol, laser iridotomy',
      'Gonioscopy differentiates open from closed angle',
    ],
    modelAnswer:
      'POAG is a chronic, painless condition with open drainage angles but increased resistance at the trabecular meshwork, causing gradual peripheral visual field loss. PACG involves mechanical closure of the drainage angle by the iris, and can present acutely with severe pain, halos, and raised IOP. POAG is managed with topical medications and surgery. Acute PACG is an emergency requiring IOP-lowering agents and definitive laser peripheral iridotomy.',
    followUpQuestions: [
      'What are the visual field changes in glaucoma?',
      'How does gonioscopy help in differentiating types of glaucoma?',
    ],
    pihuHint: 'POAG is the silent thief of sight (painless), PACG announces itself with a bang (painful red eye) — know the drama difference!',
    marks: 8,
  },
  {
    id: 'glaucoma-hard',
    subjectSlug: 'ophthalmology',
    topicSlug: 'glaucoma',
    difficulty: 'hard',
    question: 'A 55-year-old woman presents with severe headache, nausea, vomiting, and a red painful eye with hazy cornea and mid-dilated fixed pupil. IOP is 55 mmHg. Diagnose and outline step-by-step emergency management.',
    expectedKeyPoints: [
      'Diagnosis: Acute primary angle-closure glaucoma',
      'Immediate: IV mannitol 20% (1-2 g/kg) to reduce IOP',
      'Topical pilocarpine 2% to constrict pupil and open angle',
      'Topical timolol 0.5% and oral acetazolamide to reduce aqueous production',
      'Definitive treatment: laser peripheral iridotomy once cornea clears',
      'Prophylactic iridotomy in the fellow eye',
    ],
    modelAnswer:
      'This is acute angle-closure glaucoma requiring emergency management. Immediate steps: position patient supine, IV mannitol 20% to rapidly reduce IOP, topical timolol 0.5% and oral acetazolamide 500mg to reduce aqueous production. Once IOP drops below 40 mmHg, apply topical pilocarpine 2% to break the pupillary block. When the cornea clears, perform laser peripheral iridotomy as definitive treatment. Prophylactic LPI must be done in the fellow eye to prevent attack.',
    followUpQuestions: [
      'Why is pilocarpine ineffective when IOP is very high?',
      'What are the risk factors for acute angle closure?',
    ],
    pihuHint: 'Step 1: bring the pressure down with mannitol and timolol, Step 2: pilocarpine to open the angle, Step 3: laser iridotomy to prevent it from happening again!',
    marks: 10,
  },

  // ============================================================
  // OPHTHALMOLOGY — uveitis
  // ============================================================
  {
    id: 'uveitis-easy',
    subjectSlug: 'ophthalmology',
    topicSlug: 'uveitis',
    difficulty: 'easy',
    question: 'Define uveitis and classify it anatomically.',
    expectedKeyPoints: [
      'Uveitis: inflammation of the uveal tract (iris, ciliary body, choroid)',
      'Anterior uveitis (iritis/iridocyclitis) — most common',
      'Intermediate uveitis (pars planitis)',
      'Posterior uveitis (choroiditis/chorioretinitis)',
      'Panuveitis: involves all parts of the uveal tract',
    ],
    modelAnswer:
      'Uveitis is inflammation of the uveal tract. It is classified anatomically as anterior (iritis, iridocyclitis — most common), intermediate (pars planitis), posterior (choroiditis, chorioretinitis), and panuveitis involving all three parts. Anterior uveitis is the most common type, presenting with pain, photophobia, redness, and miosis.',
    followUpQuestions: [
      'What are the signs of anterior uveitis on slit-lamp examination?',
      'Name the systemic conditions associated with anterior uveitis.',
    ],
    pihuHint: 'Uvea has three coats — iris, ciliary body, choroid — and uveitis can hit any or all of them!',
    marks: 5,
  },
  {
    id: 'uveitis-medium',
    subjectSlug: 'ophthalmology',
    topicSlug: 'uveitis',
    difficulty: 'medium',
    question: 'Describe the clinical features and complications of acute anterior uveitis. What are the principles of treatment?',
    expectedKeyPoints: [
      'Features: pain, redness (circumcorneal congestion), photophobia, lacrimation, miosis',
      'Slit lamp: cells and flare in anterior chamber, keratic precipitates',
      'Complications: posterior synechiae, secondary glaucoma, complicated cataract, band keratopathy',
      'Treatment: cycloplegics (atropine) to prevent synechiae and relieve spasm',
      'Topical steroids to control inflammation',
      'Treat underlying cause if identified',
    ],
    modelAnswer:
      'Acute anterior uveitis presents with pain, photophobia, circumcorneal congestion, miosis, and cells and flare in the anterior chamber on slit-lamp. Keratic precipitates may be seen on the corneal endothelium. Complications include posterior synechiae, secondary glaucoma, and complicated cataract. Treatment involves topical corticosteroids to suppress inflammation and cycloplegics like atropine to prevent posterior synechiae, relieve ciliary spasm, and stabilize the blood-aqueous barrier.',
    followUpQuestions: [
      'Differentiate between granulomatous and non-granulomatous uveitis.',
      'What investigations would you order for recurrent anterior uveitis?',
    ],
    pihuHint: 'Atropine is the bestie of uveitis management — dilates the pupil to prevent synechiae and relieves that painful ciliary spasm!',
    marks: 8,
  },
  {
    id: 'uveitis-hard',
    subjectSlug: 'ophthalmology',
    topicSlug: 'uveitis',
    difficulty: 'hard',
    question: 'A 30-year-old male with HLA-B27 positive ankylosing spondylitis presents with recurrent episodes of acute anterior uveitis. How would you manage this patient comprehensively?',
    expectedKeyPoints: [
      'HLA-B27 associated AAU is the most common extra-articular manifestation of AS',
      'Acute management: intensive topical steroids (hourly initially) and cycloplegics',
      'Consider periocular or intravitreal steroids if severe',
      'Coordinate with rheumatologist for systemic immunosuppression',
      'TNF-alpha inhibitors (adalimumab) reduce recurrence of HLA-B27 uveitis',
      'Long-term monitoring for complications: glaucoma, cataract, CME',
    ],
    modelAnswer:
      'HLA-B27 associated recurrent AAU requires aggressive topical steroids (prednisolone acetate 1% hourly) and cycloplegics during acute episodes. For recurrent or severe cases, coordinate with rheumatology for systemic immunosuppression. TNF-alpha inhibitors like adalimumab have shown efficacy in reducing recurrence rates. Monitor for complications including secondary glaucoma and cataract with each episode. Patient education about early symptom recognition is essential to prevent complications.',
    followUpQuestions: [
      'What other systemic diseases are associated with HLA-B27 positive uveitis?',
      'When would you consider systemic immunosuppression over topical treatment?',
    ],
    pihuHint: 'HLA-B27 and uveitis are besties who keep meeting — manage the episode AND prevent the next one with systemic therapy!',
    marks: 10,
  },

  // ============================================================
  // OPHTHALMOLOGY — retinal_diseases
  // ============================================================
  {
    id: 'retinal_diseases-easy',
    subjectSlug: 'ophthalmology',
    topicSlug: 'retinal_diseases',
    difficulty: 'easy',
    question: 'Describe the fundus findings in nonproliferative diabetic retinopathy.',
    expectedKeyPoints: [
      'Microaneurysms: earliest clinical sign (dot hemorrhages)',
      'Hard exudates: lipid deposits in outer plexiform layer',
      'Flame-shaped hemorrhages in nerve fiber layer',
      'Dot and blot hemorrhages in deeper retinal layers',
      'Cotton wool spots: nerve fiber layer infarcts',
    ],
    modelAnswer:
      'Nonproliferative diabetic retinopathy shows microaneurysms (earliest sign appearing as tiny red dots), dot and blot hemorrhages, flame-shaped hemorrhages, hard exudates (yellowish waxy deposits from lipid leakage), and cotton-wool spots (white fluffy patches from retinal ischemia). These changes occur within the retina without neovascularization. Severity is graded as mild, moderate, and severe based on the findings.',
    followUpQuestions: [
      'What is the 4-2-1 rule for severe NPDR?',
      'When does macular edema occur in diabetic retinopathy?',
    ],
    pihuHint: 'Microaneurysms are the first red flag (literally red dots) in diabetic retinopathy — spot them early!',
    marks: 5,
  },
  {
    id: 'retinal_diseases-medium',
    subjectSlug: 'ophthalmology',
    topicSlug: 'retinal_diseases',
    difficulty: 'medium',
    question: 'Differentiate between nonproliferative and proliferative diabetic retinopathy. What is the role of laser photocoagulation?',
    expectedKeyPoints: [
      'NPDR: changes within the retina (microaneurysms, hemorrhages, exudates)',
      'PDR: neovascularization on disc (NVD) or elsewhere (NVE)',
      'PDR carries risk of vitreous hemorrhage and tractional retinal detachment',
      'Pan-retinal photocoagulation (PRP) for PDR — destroys ischemic retina, reduces VEGF',
      'Focal laser for clinically significant macular edema',
      'Anti-VEGF injections increasingly used as adjunct or alternative',
    ],
    modelAnswer:
      'NPDR involves intraretinal changes without neovascularization. PDR is characterized by new blood vessel formation (neovascularization) on the disc or retina, driven by retinal ischemia and VEGF release. PDR carries risk of vitreous hemorrhage and tractional detachment. Pan-retinal photocoagulation ablates peripheral ischemic retina, reducing VEGF drive for neovascularization. Anti-VEGF agents like ranibizumab and aflibercept are now first-line for diabetic macular edema.',
    followUpQuestions: [
      'What are the complications of PRP laser?',
      'How do anti-VEGF agents work in diabetic retinopathy?',
    ],
    pihuHint: 'NPDR stays inside the retina, PDR grows new vessels outside — once new vessels appear, it is laser time to shut them down!',
    marks: 8,
  },
  {
    id: 'retinal_diseases-hard',
    subjectSlug: 'ophthalmology',
    topicSlug: 'retinal_diseases',
    difficulty: 'hard',
    question: 'A 50-year-old diabetic presents with sudden loss of vision in one eye. Fundoscopy reveals vitreous hemorrhage obscuring the retina. Discuss the differential diagnosis and management plan.',
    expectedKeyPoints: [
      'Most likely: vitreous hemorrhage from proliferative diabetic retinopathy',
      'Differential: retinal vein occlusion, retinal tear, Terson syndrome',
      'B-scan ultrasonography to rule out retinal detachment behind hemorrhage',
      'Conservative management initially: head elevation, avoid anticoagulants',
      'If hemorrhage does not clear in 1-3 months: pars plana vitrectomy',
      'Pan-retinal photocoagulation after vitreous clears or during vitrectomy',
    ],
    modelAnswer:
      'In a diabetic with sudden vitreous hemorrhage, PDR is the most likely cause. B-scan ultrasonography is essential to rule out underlying retinal detachment. Initial management is conservative with head elevation and observation. If hemorrhage does not clear in 1-3 months, or if retinal detachment is present, pars plana vitrectomy with endolaser is performed. Anti-VEGF injection may be given pre-operatively to reduce bleeding risk during surgery.',
    followUpQuestions: [
      'When is early vitrectomy indicated in diabetic vitreous hemorrhage?',
      'What is the role of anti-VEGF as an adjunct to vitrectomy?',
    ],
    pihuHint: 'Cannot see the retina? B-scan is your best friend — always rule out retinal detachment hiding behind that vitreous blood!',
    marks: 10,
  },

  // ============================================================
  // OPHTHALMOLOGY — squint
  // ============================================================
  {
    id: 'squint-easy',
    subjectSlug: 'ophthalmology',
    topicSlug: 'squint',
    difficulty: 'easy',
    question: 'Define squint (strabismus). How is it classified?',
    expectedKeyPoints: [
      'Squint: misalignment of the visual axes of the two eyes',
      'Comitant (non-paralytic): deviation same in all directions of gaze',
      'Incomitant (paralytic): deviation varies with direction of gaze',
      'Esotropia: inward deviation; Exotropia: outward deviation',
      'Hypertropia: upward deviation; Hypotropia: downward deviation',
    ],
    modelAnswer:
      'Squint or strabismus is a condition where the visual axes of the two eyes are not aligned. It is classified as comitant (same angle of deviation in all gazes, common in children) or incomitant (paralytic, angle varies with gaze direction). Based on direction of deviation: esotropia (convergent), exotropia (divergent), hypertropia (upward), and hypotropia (downward).',
    followUpQuestions: [
      'What is the cover-uncover test and how is it performed?',
      'Differentiate between phoria and tropia.',
    ],
    pihuHint: 'Eso means inward, exo means outward — just like entry and exit, eso enters and exo exits!',
    marks: 5,
  },
  {
    id: 'squint-medium',
    subjectSlug: 'ophthalmology',
    topicSlug: 'squint',
    difficulty: 'medium',
    question: 'Explain the concept of amblyopia. What are its types and how is it managed?',
    expectedKeyPoints: [
      'Amblyopia: reduced best-corrected visual acuity without organic disease',
      'Caused by abnormal visual experience during critical period (up to 7-8 years)',
      'Types: strabismic, refractive (anisometropic), stimulus deprivation (occlusion)',
      'Treatment: correct underlying cause (glasses, cataract surgery)',
      'Occlusion therapy: patch the better eye to stimulate the amblyopic eye',
      'Atropine penalization as alternative to patching',
    ],
    modelAnswer:
      'Amblyopia is reduced best-corrected visual acuity in one or both eyes without detectable organic pathology, caused by abnormal visual development during the critical period. Types include strabismic (suppression of squinting eye), anisometropic (unequal refractive error), and deprivation (from media opacity). Treatment involves correcting the underlying cause, then occlusion therapy (patching the sound eye) or atropine penalization to force use of the amblyopic eye.',
    followUpQuestions: [
      'What is the critical period for visual development?',
      'How long should occlusion therapy be continued?',
    ],
    pihuHint: 'Amblyopia is a lazy eye — the brain ignores one eye, so you force it to work by patching the good one, like hiding your friend\'s phone!',
    marks: 8,
  },
  {
    id: 'squint-hard',
    subjectSlug: 'ophthalmology',
    topicSlug: 'squint',
    difficulty: 'hard',
    question: 'A 3-year-old child presents with left eye inward deviation noticed by parents for 6 months. On examination, there is a 30 prism diopter left esotropia. Outline the evaluation and management plan.',
    expectedKeyPoints: [
      'Detailed history: onset, frequency, family history, birth history',
      'Full ophthalmic examination including cycloplegic refraction',
      'Rule out accommodative esotropia (correct hypermetropia first)',
      'Check for amblyopia and assess binocular vision potential',
      'If non-accommodative: surgical correction (bilateral medial rectus recession)',
      'Post-operative orthoptic exercises and amblyopia treatment if needed',
    ],
    modelAnswer:
      'Evaluation includes detailed history, visual acuity assessment using age-appropriate methods, cycloplegic refraction to identify hypermetropia, cover test to confirm and measure deviation, and fundoscopy to rule out organic causes like retinoblastoma. If significant hypermetropia is present, prescribe full correction and reassess (accommodative esotropia). If deviation persists after refractive correction, surgical correction is planned. Treat any associated amblyopia with patching before and after surgery to achieve best visual outcome.',
    followUpQuestions: [
      'Why must you rule out retinoblastoma in a child with new-onset squint?',
      'What is the optimal age for squint surgery?',
    ],
    pihuHint: 'In a child with squint, always do cycloplegic refraction first — glasses might fix everything before you even think about surgery!',
    marks: 10,
  },

  // ============================================================
  // OPHTHALMOLOGY — ocular_trauma
  // ============================================================
  {
    id: 'ocular_trauma-easy',
    subjectSlug: 'ophthalmology',
    topicSlug: 'ocular_trauma',
    difficulty: 'easy',
    question: 'Classify ocular injuries. What is the first aid for chemical burns of the eye?',
    expectedKeyPoints: [
      'Classification: mechanical (blunt, penetrating, perforating) and non-mechanical (chemical, thermal, radiation)',
      'Chemical burns: alkali is more dangerous than acid (penetrates deeper)',
      'First aid: immediate copious irrigation with water or normal saline for at least 30 minutes',
      'Check pH of conjunctival sac — irrigate until pH is 7.0',
      'Remove any particulate matter from fornices',
    ],
    modelAnswer:
      'Ocular injuries are classified as mechanical (blunt, penetrating, perforating, foreign body) and non-mechanical (chemical, thermal, radiation). For chemical burns, immediate copious irrigation with water or normal saline is the single most important first aid, continuing for at least 30 minutes. Check and normalize the conjunctival pH. Alkali burns are more dangerous than acid burns as alkali penetrates deeper. Never attempt to neutralize the chemical.',
    followUpQuestions: [
      'Why are alkali burns more serious than acid burns?',
      'What is the Roper-Hall classification of chemical burns?',
    ],
    pihuHint: 'Chemical burn in eye? Do not think, just wash with water for 30 minutes non-stop — irrigation is literally the life-saver here!',
    marks: 5,
  },
  {
    id: 'ocular_trauma-medium',
    subjectSlug: 'ophthalmology',
    topicSlug: 'ocular_trauma',
    difficulty: 'medium',
    question: 'Describe the clinical features and management of an open globe injury.',
    expectedKeyPoints: [
      'Open globe: full-thickness wound of the cornea or sclera',
      'Features: distorted pupil, shallow AC, uveal prolapse, hypotony, positive Seidel test',
      'Do NOT apply pressure or attempt to remove foreign body in field',
      'Shield the eye with a rigid eye shield',
      'Start systemic antibiotics and tetanus prophylaxis',
      'Surgical repair: primary closure within 24 hours, assess for IOFB with CT scan',
    ],
    modelAnswer:
      'An open globe injury presents with distorted pupil, shallow anterior chamber, uveal tissue prolapse, low IOP, and a positive Seidel test (streaming fluorescein). Management: protect the eye with a rigid shield without applying pressure, start IV antibiotics, give tetanus prophylaxis, and arrange urgent CT scan (not MRI) to detect intraocular foreign bodies. Primary surgical repair should be performed within 24 hours. Monitor for endophthalmitis and sympathetic ophthalmia.',
    followUpQuestions: [
      'What is sympathetic ophthalmia and when does it occur?',
      'Why is MRI contraindicated in suspected metallic IOFB?',
    ],
    pihuHint: 'Open globe means the eyeball wall is breached — shield it, do not squeeze it, antibiotics stat, and rush to surgery!',
    marks: 8,
  },
  {
    id: 'ocular_trauma-hard',
    subjectSlug: 'ophthalmology',
    topicSlug: 'ocular_trauma',
    difficulty: 'hard',
    question: 'A factory worker presents with a metallic foreign body injury to the left eye. He has decreased vision, irregular pupil, and CT orbit shows an intraocular foreign body. Discuss the management and potential complications.',
    expectedKeyPoints: [
      'Emergency primary repair of the globe wound',
      'Intraocular foreign body (IOFB) removal: vitrectomy with IOFB extraction using forceps or magnet',
      'Intravitreal antibiotics for endophthalmitis prophylaxis',
      'Complications: endophthalmitis, retinal detachment, siderosis/chalcosis',
      'Siderosis bulbi: iron IOFB causes retinal degeneration over time',
      'Follow-up: monitor for PVR, retinal detachment, sympathetic ophthalmia',
    ],
    modelAnswer:
      'Management involves primary globe repair followed by pars plana vitrectomy with IOFB removal. Intravitreal antibiotics are given prophylactically. Retained metallic IOFB causes siderosis bulbi (iron) or chalcosis (copper), leading to progressive retinal degeneration. Other complications include traumatic endophthalmitis, retinal detachment, proliferative vitreoretinopathy, and sympathetic ophthalmia in the fellow eye. Long-term follow-up with electroretinography monitors for siderosis.',
    followUpQuestions: [
      'How does siderosis differ from chalcosis?',
      'What is the timeline for development of sympathetic ophthalmia?',
    ],
    pihuHint: 'Iron foreign body left in the eye causes siderosis — the eye slowly rusts from inside, so get it out ASAP!',
    marks: 10,
  },

  // ============================================================
  // OPHTHALMOLOGY — vitamin_a_deficiency
  // ============================================================
  {
    id: 'vitamin_a_deficiency-easy',
    subjectSlug: 'ophthalmology',
    topicSlug: 'vitamin_a_deficiency',
    difficulty: 'easy',
    question: 'Describe the WHO classification of xerophthalmia.',
    expectedKeyPoints: [
      'XN: Night blindness (earliest symptom)',
      'X1A: Conjunctival xerosis',
      'X1B: Bitot spots (foamy triangular spots on conjunctiva)',
      'X2: Corneal xerosis',
      'X3A: Corneal ulcer/keratomalacia (less than 1/3 cornea)',
      'X3B: Corneal ulcer/keratomalacia (more than 1/3 cornea)',
      'XS: Corneal scar, XF: Xerophthalmic fundus',
    ],
    modelAnswer:
      'WHO classifies xerophthalmia as: XN (night blindness), X1A (conjunctival xerosis), X1B (Bitot spots — foamy white spots on bulbar conjunctiva), X2 (corneal xerosis), X3A (corneal ulceration less than one-third), X3B (keratomalacia involving more than one-third of cornea), XS (corneal scarring), and XF (xerophthalmic fundus). Night blindness is the earliest symptom and Bitot spots are the most common clinical sign.',
    followUpQuestions: [
      'What is the Vitamin A prophylaxis schedule for children under 5?',
      'What is the emergency dose of Vitamin A in xerophthalmia?',
    ],
    pihuHint: 'Remember XN to X3B in order — it is the eye slowly drying up from night blindness to cornea melting, stage by stage!',
    marks: 5,
  },
  {
    id: 'vitamin_a_deficiency-medium',
    subjectSlug: 'ophthalmology',
    topicSlug: 'vitamin_a_deficiency',
    difficulty: 'medium',
    question: 'Describe the management protocol for a child with keratomalacia due to Vitamin A deficiency.',
    expectedKeyPoints: [
      'WHO emergency Vitamin A schedule: 200,000 IU orally on day 0, day 1, and day 14',
      'Half dose for children 6-12 months; quarter dose for under 6 months',
      'Topical antibiotics to prevent secondary infection',
      'Lubricating eye drops for corneal xerosis',
      'Treat associated protein-energy malnutrition and systemic illness',
      'Bandage contact lens or tarsorraphy for corneal protection',
    ],
    modelAnswer:
      'Keratomalacia is a medical emergency. Give Vitamin A immediately: 200,000 IU orally on day 0, day 1, and day 14 (halve dose for 6-12 months, quarter for under 6 months). Apply topical antibiotics to prevent secondary corneal infection and use lubricants. Protect the eye from perforation with patching or tarsorraphy. Treat concurrent malnutrition with therapeutic feeding and manage any systemic infections. Early treatment can prevent permanent blindness.',
    followUpQuestions: [
      'What is the national Vitamin A supplementation program in India?',
      'Why is Vitamin A toxicity a concern and what are its features?',
    ],
    pihuHint: 'Vitamin A in keratomalacia: Day 0, Day 1, Day 14 — three doses that can save a child\'s eyes, remember this schedule by heart!',
    marks: 8,
  },
  {
    id: 'vitamin_a_deficiency-hard',
    subjectSlug: 'ophthalmology',
    topicSlug: 'vitamin_a_deficiency',
    difficulty: 'hard',
    question: 'You are posted in a rural PHC. Three children from the same village present with night blindness and Bitot spots. How would you manage these cases and plan a community-level intervention?',
    expectedKeyPoints: [
      'Individual management: Vitamin A supplementation per WHO protocol',
      'Cluster of cases suggests community-level deficiency — notify and investigate',
      'Screen all children under 5 in the village for xerophthalmia signs',
      'Mass Vitamin A supplementation through ICDS/Anganwadi system',
      'Nutrition education: dietary sources of Vitamin A (dark green leafy vegetables, orange fruits)',
      'Strengthen Vitamin A prophylaxis program and coordinate with district health office',
    ],
    modelAnswer:
      'Treat each child with WHO-recommended Vitamin A doses. A cluster of cases indicates community-level deficiency requiring a public health response. Screen all children under 5 for xerophthalmia, provide mass Vitamin A supplementation, and strengthen the routine Vitamin A prophylaxis program through Anganwadi centres. Conduct nutrition education promoting locally available Vitamin A-rich foods. Report to the district health authority and coordinate with ICDS for sustained supplementation and nutritional support.',
    followUpQuestions: [
      'What are the food sources of preformed Vitamin A and provitamin A?',
      'How does measles exacerbate Vitamin A deficiency?',
    ],
    pihuHint: 'Three kids with night blindness in one village is not a coincidence — it is a community problem, so think public health, not just clinic!',
    marks: 10,
  },

  // ============================================================
  // OPHTHALMOLOGY — blindness_prevention
  // ============================================================
  {
    id: 'blindness_prevention-easy',
    subjectSlug: 'ophthalmology',
    topicSlug: 'blindness_prevention',
    difficulty: 'easy',
    question: 'Define blindness as per WHO criteria. What are the leading causes of preventable blindness in India?',
    expectedKeyPoints: [
      'WHO definition: visual acuity less than 3/60 in the better eye with best correction',
      'Economic blindness: VA less than 6/60 in better eye',
      'Leading cause in India: cataract (most common cause of avoidable blindness)',
      'Other causes: refractive errors, glaucoma, corneal opacity, diabetic retinopathy',
      'National Programme for Control of Blindness and Visual Impairment (NPCBVI)',
    ],
    modelAnswer:
      'WHO defines blindness as visual acuity less than 3/60 in the better eye with best possible correction. In India, cataract is the leading cause of avoidable blindness, followed by uncorrected refractive errors, glaucoma, corneal opacities, and diabetic retinopathy. NPCBVI aims to reduce blindness prevalence through cataract surgeries, school eye screening, and strengthening eye care infrastructure.',
    followUpQuestions: [
      'What is the difference between blindness and visual impairment per WHO?',
      'What are the components of VISION 2020: The Right to Sight initiative?',
    ],
    pihuHint: 'Cataract is the number one villain of blindness in India — and the good news is it is completely treatable with surgery!',
    marks: 5,
  },
  {
    id: 'blindness_prevention-medium',
    subjectSlug: 'ophthalmology',
    topicSlug: 'blindness_prevention',
    difficulty: 'medium',
    question: 'Describe the National Programme for Control of Blindness and Visual Impairment (NPCBVI). What are its key strategies?',
    expectedKeyPoints: [
      'Launched in 1976, revamped multiple times',
      'Strategies: cataract surgery camps, IOL implantation',
      'School eye screening and free spectacle distribution',
      'Strengthening eye care at district hospital level',
      'Training of ophthalmic manpower (ophthalmologists, optometrists, ophthalmic assistants)',
      'Integration with VISION 2020 initiative',
    ],
    modelAnswer:
      'NPCBVI, launched in 1976, aims to reduce blindness prevalence through multiple strategies: performing quality cataract surgeries with IOL implantation, school eye screening programs with free spectacles, training eye care manpower, establishing district-level eye care facilities, and controlling corneal blindness through eye banking. The program has been integrated with VISION 2020 initiative for elimination of avoidable blindness.',
    followUpQuestions: [
      'What is the current target for cataract surgical rate under NPCBVI?',
      'How has the quality of cataract surgery improved over the years?',
    ],
    pihuHint: 'NPCBVI is India\'s war on blindness — cataract surgery, school screening, and training more eye doctors are its main weapons!',
    marks: 8,
  },
  {
    id: 'blindness_prevention-hard',
    subjectSlug: 'ophthalmology',
    topicSlug: 'blindness_prevention',
    difficulty: 'hard',
    question: 'You are the district ophthalmologist. How would you plan and execute a comprehensive eye care program to reduce avoidable blindness in your district? Discuss the challenges.',
    expectedKeyPoints: [
      'Conduct rapid assessment of avoidable blindness (RAAB) survey',
      'Set up outreach screening camps in underserved areas',
      'Establish cataract surgical services with quality monitoring',
      'School eye screening program for refractive errors',
      'Train primary care workers for vision screening and referral',
      'Challenges: lack of trained manpower, poor awareness, cost, follow-up compliance',
    ],
    modelAnswer:
      'Begin with a RAAB survey to determine blindness burden and causes. Establish a comprehensive program including: high-volume quality cataract surgery with IOL, outreach screening camps in rural areas, school eye screening for refractive errors, diabetic retinopathy screening in collaboration with physicians, corneal blindness prevention through eye banking, and primary eye care training for health workers. Key challenges include workforce shortage, geographic barriers, poor awareness, and ensuring surgical quality and follow-up compliance.',
    followUpQuestions: [
      'What is the RAAB methodology and its significance?',
      'How would you ensure quality monitoring in camp-based cataract surgeries?',
    ],
    pihuHint: 'Think RAAB survey first to know your enemy, then plan your attack with camps, schools, training, and quality monitoring!',
    marks: 10,
  },

  // ============================================================
  // ENT — ear_hearing_otitis_deafness
  // ============================================================
  {
    id: 'ear_hearing_otitis_deafness-easy',
    subjectSlug: 'ent',
    topicSlug: 'ear_hearing_otitis_deafness',
    difficulty: 'easy',
    question: 'Differentiate between conductive and sensorineural hearing loss. How do tuning fork tests help?',
    expectedKeyPoints: [
      'Conductive: pathology in external or middle ear (wax, otitis media, ossicular fixation)',
      'Sensorineural: pathology in cochlea or auditory nerve',
      'Rinne test: positive in SNHL (AC > BC), negative in CHL (BC > AC)',
      'Weber test: lateralizes to affected ear in CHL, to normal ear in SNHL',
      'Absolute bone conduction (ABC) test differentiates SNHL from normal',
    ],
    modelAnswer:
      'Conductive hearing loss arises from pathology in the external or middle ear preventing sound transmission, while sensorineural hearing loss results from inner ear or nerve damage. Rinne test is negative in CHL (bone conduction better than air) and positive in SNHL. Weber test lateralizes to the affected ear in CHL and the better ear in SNHL. These bedside tests help localize the type of hearing loss before audiometry.',
    followUpQuestions: [
      'What is a false negative Rinne test?',
      'How does pure tone audiometry differentiate CHL from SNHL?',
    ],
    pihuHint: 'Rinne negative means bone beats air — something is blocking the sound path, that is conductive hearing loss!',
    marks: 5,
  },
  {
    id: 'ear_hearing_otitis_deafness-medium',
    subjectSlug: 'ent',
    topicSlug: 'ear_hearing_otitis_deafness',
    difficulty: 'medium',
    question: 'Describe the types, clinical features, and management of chronic suppurative otitis media (CSOM).',
    expectedKeyPoints: [
      'Tubotympanic (safe/mucosal): central perforation, mucoid discharge, conductive hearing loss',
      'Atticoantral (unsafe/squamous): marginal perforation, cholesteatoma, foul-smelling discharge',
      'Safe type: aural toilet, topical antibiotics, consider myringoplasty',
      'Unsafe type: requires surgery (modified radical mastoidectomy) due to complications risk',
      'Complications: mastoiditis, brain abscess, lateral sinus thrombosis',
      'Cholesteatoma is not a tumor but keratinized squamous epithelium in middle ear',
    ],
    modelAnswer:
      'CSOM has two types: tubotympanic (safe) with central perforation and mucoid discharge managed conservatively, and atticoantral (unsafe) with marginal/attic perforation and cholesteatoma requiring surgery. Cholesteatoma is a collection of keratinized squamous epithelium that erodes bone and causes serious complications like intracranial abscess, lateral sinus thrombosis, and facial nerve palsy. Modified radical mastoidectomy is the standard surgery for unsafe CSOM.',
    followUpQuestions: [
      'What are the intracranial complications of CSOM?',
      'How does cholesteatoma cause bone erosion?',
    ],
    pihuHint: 'Safe CSOM is central and chill, unsafe has cholesteatoma at the margins — unsafe means surgery is non-negotiable!',
    marks: 8,
  },
  {
    id: 'ear_hearing_otitis_deafness-hard',
    subjectSlug: 'ent',
    topicSlug: 'ear_hearing_otitis_deafness',
    difficulty: 'hard',
    question: 'A 12-year-old child with CSOM develops sudden severe headache, high fever, and projectile vomiting. On examination, there is neck rigidity. What is the likely complication and how would you manage it?',
    expectedKeyPoints: [
      'Diagnosis: Otogenic meningitis — intracranial complication of CSOM',
      'Most common intracranial complication of CSOM',
      'Organisms: Pneumococcus, H. influenzae, Proteus',
      'CT/MRI brain to rule out brain abscess before LP',
      'IV antibiotics: third-generation cephalosporins crossing BBB',
      'Mastoid surgery after stabilizing the patient to remove focus of infection',
    ],
    modelAnswer:
      'This child has otogenic meningitis, the most common intracranial complication of CSOM. Immediate management includes high-dose IV antibiotics (ceftriaxone + metronidazole), CT brain to rule out brain abscess, and lumbar puncture for CSF analysis. Once the patient is stabilized, cortical mastoidectomy or modified radical mastoidectomy is performed to remove the primary source of infection. Delays in surgery can be fatal. The mortality rate without treatment is very high.',
    followUpQuestions: [
      'What other intracranial complications can occur from CSOM?',
      'How would management differ if CT showed a temporal lobe abscess?',
    ],
    pihuHint: 'Headache plus fever plus neck rigidity in a CSOM patient is meningitis alarm — IV antibiotics now, mastoid surgery after stabilizing!',
    marks: 10,
  },

  // ============================================================
  // ENT — nose_sinusitis_dns_epistaxis
  // ============================================================
  {
    id: 'nose_sinusitis_dns_epistaxis-easy',
    subjectSlug: 'ent',
    topicSlug: 'nose_sinusitis_dns_epistaxis',
    difficulty: 'easy',
    question: 'What is epistaxis? Describe the common sites and first aid management.',
    expectedKeyPoints: [
      'Epistaxis: bleeding from the nose',
      'Little area (Kiesselbach plexus): most common site of anterior epistaxis',
      'Woodruff plexus: posterior epistaxis (more dangerous)',
      'First aid: sit forward, pinch the soft nose firmly for 10-15 minutes',
      'Apply ice pack over the nasal bridge',
      'Anterior nasal packing if first aid fails',
    ],
    modelAnswer:
      'Epistaxis is bleeding from the nose. The most common site is Little area (Kiesselbach plexus) on the anterior nasal septum where branches of multiple arteries anastomose. First aid: seat the patient upright leaning forward, pinch the soft part of the nose for 10-15 minutes, and apply ice to the bridge. If bleeding persists, anterior nasal packing is done. Posterior epistaxis from Woodruff plexus is more serious and may need posterior packing.',
    followUpQuestions: [
      'Which arteries contribute to Kiesselbach plexus?',
      'What systemic conditions can cause epistaxis?',
    ],
    pihuHint: 'Little area is the VIP bleeding spot of the nose — pinch and lean forward, do NOT tilt the head back, that is a myth!',
    marks: 5,
  },
  {
    id: 'nose_sinusitis_dns_epistaxis-medium',
    subjectSlug: 'ent',
    topicSlug: 'nose_sinusitis_dns_epistaxis',
    difficulty: 'medium',
    question: 'Describe the clinical features, diagnosis, and management of acute and chronic sinusitis.',
    expectedKeyPoints: [
      'Acute sinusitis: nasal obstruction, purulent discharge, facial pain, headache, fever',
      'Chronic sinusitis: symptoms lasting more than 12 weeks',
      'Diagnosis: clinical, X-ray PNS (Water view), CT PNS for chronic cases',
      'Acute: antibiotics (amoxicillin-clavulanate), nasal decongestants, steam inhalation',
      'Chronic: topical nasal steroids, saline irrigation, antibiotics, consider FESS',
      'Functional Endoscopic Sinus Surgery (FESS) for chronic refractory cases',
    ],
    modelAnswer:
      'Acute sinusitis presents with facial pain, purulent nasal discharge, nasal obstruction, and fever lasting less than 12 weeks. Chronic sinusitis persists beyond 12 weeks with nasal congestion, post-nasal drip, and facial pressure. Diagnosis involves clinical assessment and CT PNS for chronic cases. Acute sinusitis is managed with antibiotics, decongestants, and steam inhalation. Chronic sinusitis requires topical steroids, saline irrigation, and FESS when medical management fails.',
    followUpQuestions: [
      'What are the complications of sinusitis?',
      'How does FESS differ from conventional sinus surgery?',
    ],
    pihuHint: 'Acute is less than 12 weeks, chronic is more — if medicines do not work for chronic, FESS is the way to go!',
    marks: 8,
  },
  {
    id: 'nose_sinusitis_dns_epistaxis-hard',
    subjectSlug: 'ent',
    topicSlug: 'nose_sinusitis_dns_epistaxis',
    difficulty: 'hard',
    question: 'A 25-year-old male presents with left-sided nasal obstruction, recurrent epistaxis, and a reddish mass in the left nasal cavity. CT shows a mass in the nasopharynx with extension into the pterygopalatine fossa. What is the likely diagnosis and management?',
    expectedKeyPoints: [
      'Diagnosis: Juvenile nasopharyngeal angiofibroma (JNA)',
      'Benign but locally aggressive vascular tumor',
      'Exclusive to adolescent males',
      'Contrast-enhanced CT shows Holman-Miller sign (anterior bowing of posterior maxillary wall)',
      'Biopsy is contraindicated due to risk of massive hemorrhage',
      'Management: preoperative embolization followed by surgical excision',
    ],
    modelAnswer:
      'This is juvenile nasopharyngeal angiofibroma, a benign vascular tumor occurring exclusively in adolescent males. It presents with unilateral nasal obstruction and recurrent epistaxis. CT with contrast shows a highly vascular mass with characteristic Holman-Miller sign. Biopsy is absolutely contraindicated due to risk of life-threatening hemorrhage. Management involves preoperative angiography with embolization of feeding vessels followed by surgical excision, with radiation reserved for inoperable residual or recurrent disease.',
    followUpQuestions: [
      'What is the blood supply of JNA?',
      'What staging system is used for angiofibroma?',
    ],
    pihuHint: 'Adolescent boy plus nasal mass plus epistaxis equals angiofibroma until proven otherwise — and never ever biopsy it!',
    marks: 10,
  },

  // ============================================================
  // ENT — throat_tonsillitis_larynx
  // ============================================================
  {
    id: 'throat_tonsillitis_larynx-easy',
    subjectSlug: 'ent',
    topicSlug: 'throat_tonsillitis_larynx',
    difficulty: 'easy',
    question: 'What are the indications for tonsillectomy?',
    expectedKeyPoints: [
      'Recurrent acute tonsillitis (7 episodes in 1 year, or 5/year for 2 years, or 3/year for 3 years)',
      'Peritonsillar abscess (quinsy)',
      'Obstructive sleep apnea due to tonsillar hypertrophy',
      'Suspected malignancy (unilateral enlargement)',
      'Chronic tonsillitis not responding to medical treatment',
    ],
    modelAnswer:
      'Indications for tonsillectomy include recurrent acute tonsillitis meeting Paradise criteria (7 episodes in 1 year, or 5/year for 2 years, or 3/year for 3 years), peritonsillar abscess, obstructive sleep apnea from tonsillar hypertrophy, suspected tonsillar malignancy, and chronic tonsillitis refractory to medical management. Tonsillectomy may also be indicated as part of treatment for diphtheria carriers not responding to antibiotics.',
    followUpQuestions: [
      'What are the complications of tonsillectomy?',
      'Describe the Paradise criteria in detail.',
    ],
    pihuHint: 'Remember the rule of threes and sevens — 7 times in 1 year, 5 in 2, or 3 in 3 means those tonsils gotta go!',
    marks: 5,
  },
  {
    id: 'throat_tonsillitis_larynx-medium',
    subjectSlug: 'ent',
    topicSlug: 'throat_tonsillitis_larynx',
    difficulty: 'medium',
    question: 'Describe the clinical features and management of acute epiglottitis. Why is it an emergency?',
    expectedKeyPoints: [
      'Common in children 2-7 years, caused by H. influenzae type B',
      'Features: sudden onset high fever, sore throat, drooling, muffled voice, stridor',
      'Tripod position: sitting upright leaning forward with chin extended',
      'Thumb sign on lateral neck X-ray (swollen epiglottis)',
      'EMERGENCY: can cause sudden complete airway obstruction',
      'Management: secure airway first (intubation or tracheostomy), IV antibiotics (ceftriaxone)',
    ],
    modelAnswer:
      'Acute epiglottitis is a life-threatening emergency caused primarily by H. influenzae type B, presenting with abrupt onset high fever, severe sore throat, drooling, muffled hot-potato voice, and inspiratory stridor. The child assumes a tripod position. It is an emergency because the swollen epiglottis can completely obstruct the airway suddenly. Management priority is securing the airway in a controlled setting, followed by IV antibiotics. Do not examine the throat or agitate the child before airway is secured.',
    followUpQuestions: [
      'How do you differentiate epiglottitis from croup?',
      'What is the role of Hib vaccination in preventing epiglottitis?',
    ],
    pihuHint: 'Drooling child with stridor sitting in tripod position is epiglottitis — secure the airway before doing ANYTHING else!',
    marks: 8,
  },
  {
    id: 'throat_tonsillitis_larynx-hard',
    subjectSlug: 'ent',
    topicSlug: 'throat_tonsillitis_larynx',
    difficulty: 'hard',
    question: 'A 55-year-old male smoker presents with progressive hoarseness of voice for 3 months. Indirect laryngoscopy shows a growth on the right vocal cord. Discuss the differential diagnosis, workup, and management.',
    expectedKeyPoints: [
      'Most likely diagnosis: carcinoma of the larynx (glottic carcinoma)',
      'Differential: vocal cord polyp, papilloma, TB laryngitis, contact ulcer',
      'Workup: direct laryngoscopy with biopsy, CT neck with contrast',
      'Staging: TNM classification, assess nodal spread',
      'Early glottic (T1-T2): radiotherapy (excellent cure rate, voice preservation)',
      'Advanced (T3-T4): total/partial laryngectomy with neck dissection and adjuvant RT',
    ],
    modelAnswer:
      'In a 55-year-old smoker with progressive hoarseness, laryngeal carcinoma is the primary concern. Glottic carcinoma presents early with hoarseness due to vocal cord involvement. Workup includes direct laryngoscopy with biopsy for histopathology and CT neck for staging. Early-stage glottic carcinoma has excellent prognosis with radiotherapy alone (voice preservation). Advanced disease requires surgery (laryngectomy) with post-operative radiotherapy. Glottic tumors have better prognosis than supraglottic tumors due to early symptom presentation.',
    followUpQuestions: [
      'Why does glottic carcinoma have a better prognosis than supraglottic carcinoma?',
      'What rehabilitation options exist after total laryngectomy?',
    ],
    pihuHint: 'Hoarseness beyond 3 weeks in a smoker is laryngeal cancer until proven otherwise — scope and biopsy, no delays!',
    marks: 10,
  },

  // ============================================================
  // ENT — vertigo
  // ============================================================
  {
    id: 'vertigo-easy',
    subjectSlug: 'ent',
    topicSlug: 'vertigo',
    difficulty: 'easy',
    question: 'Define vertigo. Differentiate between peripheral and central vertigo.',
    expectedKeyPoints: [
      'Vertigo: illusion of rotatory movement of self or surroundings',
      'Peripheral: inner ear or vestibular nerve (BPPV, Meniere, vestibular neuritis)',
      'Central: brainstem or cerebellum (stroke, tumor, MS)',
      'Peripheral has auditory symptoms, horizontal nystagmus, no neurological deficits',
      'Central has neurological signs, multidirectional nystagmus, no auditory symptoms typically',
    ],
    modelAnswer:
      'Vertigo is an illusion of rotational movement. Peripheral vertigo arises from the labyrinth or vestibular nerve and presents with intense episodic vertigo, auditory symptoms (hearing loss, tinnitus), and horizontal nystagmus. Central vertigo arises from the brainstem or cerebellum and presents with milder but continuous vertigo, neurological deficits, and multidirectional or vertical nystagmus without auditory symptoms.',
    followUpQuestions: [
      'What is the Dix-Hallpike test and what does it diagnose?',
      'Name the common causes of peripheral vertigo.',
    ],
    pihuHint: 'Peripheral vertigo is the dramatic one (intense, comes and goes), central is the sneaky one (mild but with neuro signs) — know the difference!',
    marks: 5,
  },
  {
    id: 'vertigo-medium',
    subjectSlug: 'ent',
    topicSlug: 'vertigo',
    difficulty: 'medium',
    question: 'Describe the clinical features and management of Benign Paroxysmal Positional Vertigo (BPPV).',
    expectedKeyPoints: [
      'Most common cause of peripheral vertigo',
      'Caused by displaced otoconia in semicircular canals (usually posterior)',
      'Brief episodes of vertigo triggered by head position changes',
      'Diagnosed by Dix-Hallpike test (latent, fatigable, rotatory nystagmus)',
      'Treatment: Epley maneuver (canalith repositioning procedure)',
      'Self-limiting but can recur; no role of medications for cure',
    ],
    modelAnswer:
      'BPPV is the most common cause of peripheral vertigo, caused by otoconia displaced into the posterior semicircular canal. Patients experience brief episodes of rotatory vertigo triggered by head movements like lying down or rolling in bed. Diagnosis is by positive Dix-Hallpike test showing latent, fatigable, geotropic nystagmus. Treatment is the Epley canalith repositioning maneuver, which is highly effective. Medications like betahistine provide symptomatic relief but do not treat the underlying cause.',
    followUpQuestions: [
      'How is the Epley maneuver performed?',
      'What is the difference between canalithiasis and cupulolithiasis?',
    ],
    pihuHint: 'BPPV is otoconia gone rogue in your semicircular canal — the Epley maneuver puts them back in place like tidying up your room!',
    marks: 8,
  },
  {
    id: 'vertigo-hard',
    subjectSlug: 'ent',
    topicSlug: 'vertigo',
    difficulty: 'hard',
    question: 'A 40-year-old woman presents with episodic vertigo lasting hours, associated with fluctuating hearing loss, tinnitus, and aural fullness. Episodes have been occurring monthly for 6 months. Diagnose and discuss the comprehensive management.',
    expectedKeyPoints: [
      'Diagnosis: Meniere disease (endolymphatic hydrops)',
      'Classic triad: episodic vertigo, fluctuating sensorineural hearing loss, tinnitus',
      'Plus aural fullness — forms the classic tetrad',
      'Audiometry: low-frequency sensorineural hearing loss',
      'Medical management: salt restriction, diuretics, betahistine',
      'Refractory cases: intratympanic gentamicin or steroids, endolymphatic sac surgery',
    ],
    modelAnswer:
      'This is Meniere disease with the classic tetrad of episodic vertigo lasting hours, fluctuating low-frequency sensorineural hearing loss, tinnitus, and aural fullness. Management begins with lifestyle modifications including sodium restriction (less than 2g/day) and caffeine avoidance. Medications include betahistine and diuretics. For refractory cases, intratympanic gentamicin (chemical labyrinthectomy) or steroids can be used. Surgical options include endolymphatic sac decompression. Hearing aids may be needed for progressive hearing loss.',
    followUpQuestions: [
      'What is the pathophysiology of endolymphatic hydrops?',
      'What is the role of intratympanic gentamicin in Meniere disease?',
    ],
    pihuHint: 'Meniere is the triad queen — vertigo + hearing loss + tinnitus lasting hours, with salt restriction being the first line of defense!',
    marks: 10,
  },

  // ============================================================
  // ENT — facial_nerve_palsy
  // ============================================================
  {
    id: 'facial_nerve_palsy-easy',
    subjectSlug: 'ent',
    topicSlug: 'facial_nerve_palsy',
    difficulty: 'easy',
    question: 'Describe the course of the facial nerve and differentiate between upper motor neuron and lower motor neuron facial palsy.',
    expectedKeyPoints: [
      'Facial nerve (CN VII): motor, sensory, and parasympathetic functions',
      'Course: brainstem to internal auditory meatus, through middle ear, exits stylomastoid foramen',
      'UMN: contralateral lower face weakness, forehead spared (bilateral cortical supply)',
      'LMN: ipsilateral complete face weakness including forehead',
      'UMN causes: stroke, tumor; LMN causes: Bell palsy, otitis media, parotid tumor',
    ],
    modelAnswer:
      'The facial nerve originates in the pons, travels through the internal auditory canal, temporal bone (with its labyrinthine, tympanic, and mastoid segments), and exits via the stylomastoid foramen. UMN lesion causes contralateral lower face weakness with forehead sparing (due to bilateral cortical innervation of the upper face). LMN lesion causes complete ipsilateral facial weakness including forehead, as all fibers to that side are affected.',
    followUpQuestions: [
      'What branches does the facial nerve give off in the temporal bone?',
      'Name the branches of the facial nerve after it exits the stylomastoid foramen.',
    ],
    pihuHint: 'Forehead spared means UMN (stroke territory), forehead involved means LMN (Bell palsy territory) — that is your one-step differentiator!',
    marks: 5,
  },
  {
    id: 'facial_nerve_palsy-medium',
    subjectSlug: 'ent',
    topicSlug: 'facial_nerve_palsy',
    difficulty: 'medium',
    question: 'Describe the clinical features, investigations, and management of Bell palsy.',
    expectedKeyPoints: [
      'Bell palsy: idiopathic LMN facial palsy (most common cause)',
      'Sudden onset unilateral facial weakness, inability to close eye, drooling',
      'Associated: post-auricular pain, hyperacusis, loss of taste (anterior 2/3 tongue)',
      'Diagnosis is clinical; MRI if atypical features or no recovery',
      'Treatment: oral prednisolone within 72 hours, eye care (artificial tears, taping)',
      'Antiviral (acyclovir) role is debated; prognosis generally good (85% recover fully)',
    ],
    modelAnswer:
      'Bell palsy presents with sudden onset unilateral LMN facial weakness with inability to close the eye, smooth forehead, and deviation of mouth to the opposite side. It may be preceded by post-auricular pain. Treatment includes oral prednisolone started within 72 hours to reduce inflammation, eye protection with artificial tears and night-time taping, and physiotherapy. Most patients (85%) recover completely. Poor prognostic signs include complete palsy, advanced age, and absence of recovery by 3 weeks.',
    followUpQuestions: [
      'What is the House-Brackmann grading system for facial palsy?',
      'What are the complications of incomplete eye closure in facial palsy?',
    ],
    pihuHint: 'Bell palsy is idiopathic — steroids within 72 hours and protect that eye, most patients recover just fine!',
    marks: 8,
  },
  {
    id: 'facial_nerve_palsy-hard',
    subjectSlug: 'ent',
    topicSlug: 'facial_nerve_palsy',
    difficulty: 'hard',
    question: 'A patient with CSOM develops sudden facial palsy. How would you localize the lesion in the facial nerve, and what is the management approach?',
    expectedKeyPoints: [
      'Facial palsy in CSOM is due to erosion of fallopian canal by cholesteatoma or infection',
      'Localization by testing nerve branches: Schirmer test (lacrimation), stapedial reflex, taste',
      'Lesion proximal to geniculate ganglion: loss of lacrimation, stapedial reflex, taste',
      'Lesion in tympanic segment: intact lacrimation, lost stapedial reflex and taste',
      'Management: emergency mastoid surgery to decompress the nerve',
      'Facial nerve decompression within 3 weeks for best recovery',
    ],
    modelAnswer:
      'Facial palsy in CSOM indicates tympanic or mastoid segment involvement by cholesteatoma or infection. Localization uses topographic tests: Schirmer test (greater superficial petrosal nerve), stapedial reflex (nerve to stapedius), and taste testing (chorda tympani). Emergency surgical exploration with cortical mastoidectomy and facial nerve decompression is indicated. Cholesteatoma must be removed while preserving the nerve. Systemic antibiotics and steroids are adjuncts. Early surgery within 3 weeks gives the best functional recovery.',
    followUpQuestions: [
      'What is the role of electroneuronography (ENoG) in facial palsy?',
      'How does Ramsay Hunt syndrome differ from Bell palsy?',
    ],
    pihuHint: 'Facial palsy plus CSOM equals emergency surgery — that cholesteatoma is eating through the nerve canal and every hour counts!',
    marks: 10,
  },

  // ============================================================
  // ENT — tumors_ent
  // ============================================================
  {
    id: 'tumors_ent-easy',
    subjectSlug: 'ent',
    topicSlug: 'tumors_ent',
    difficulty: 'easy',
    question: 'Classify the tumors of the larynx. What are the risk factors for laryngeal carcinoma?',
    expectedKeyPoints: [
      'Benign: vocal cord polyp, nodule, papilloma, hemangioma',
      'Malignant: squamous cell carcinoma (most common), verrucous carcinoma',
      'Risk factors: smoking (strongest), alcohol, HPV, GERD, occupational exposure',
      'Sites: glottic (most common), supraglottic, subglottic',
      'Glottic tumors present early with hoarseness',
    ],
    modelAnswer:
      'Laryngeal tumors are benign (vocal polyps, nodules, papillomas) or malignant (squamous cell carcinoma being most common). Risk factors include smoking, alcohol, HPV, chronic laryngeal irritation, and asbestos exposure. Carcinoma is classified by site as glottic (most common, presents early with hoarseness), supraglottic (presents late with dysphagia), and subglottic (rarest, presents late with stridor). Smoking and alcohol have a synergistic carcinogenic effect.',
    followUpQuestions: [
      'Why does supraglottic carcinoma present later than glottic?',
      'What is the role of HPV in laryngeal carcinoma?',
    ],
    pihuHint: 'Smoking plus alcohol is the deadly duo for laryngeal cancer — glottic is kind enough to cause hoarseness early, supraglottic hides!',
    marks: 5,
  },
  {
    id: 'tumors_ent-medium',
    subjectSlug: 'ent',
    topicSlug: 'tumors_ent',
    difficulty: 'medium',
    question: 'Describe the clinical features and management of nasopharyngeal carcinoma.',
    expectedKeyPoints: [
      'Strong association with Epstein-Barr virus (EBV)',
      'Common in South-East Asian and Southern Chinese populations',
      'Symptoms: nasal obstruction, epistaxis, conductive hearing loss (eustachian tube obstruction)',
      'Cervical lymphadenopathy often the presenting complaint',
      'Cranial nerve palsies (CN III-VI) from skull base invasion',
      'Management: radiotherapy is the mainstay (highly radiosensitive); concurrent chemotherapy for advanced disease',
    ],
    modelAnswer:
      'Nasopharyngeal carcinoma is strongly associated with EBV and is endemic in South-East Asian populations. It presents with nasal symptoms, serous otitis media from eustachian tube obstruction, cervical lymphadenopathy, and cranial nerve palsies in advanced cases. Diagnosis is by endoscopic biopsy; EBV titers support diagnosis. Radiotherapy is the primary treatment as this tumor is highly radiosensitive. Concurrent chemoradiotherapy is used for advanced stages. Surgery has a limited role due to the anatomical location.',
    followUpQuestions: [
      'How does EBV contribute to nasopharyngeal carcinoma pathogenesis?',
      'What is the Trotter triad in nasopharyngeal carcinoma?',
    ],
    pihuHint: 'NPC loves EBV and South-East Asians — radiotherapy is the hero here because this tumor is super radiosensitive!',
    marks: 8,
  },
  {
    id: 'tumors_ent-hard',
    subjectSlug: 'ent',
    topicSlug: 'tumors_ent',
    difficulty: 'hard',
    question: 'A 60-year-old male presents with unilateral progressive nasal obstruction, bloody discharge, and proptosis. CT scan shows a mass in the maxillary sinus with orbital floor destruction. Discuss the diagnosis and management.',
    expectedKeyPoints: [
      'Diagnosis: Carcinoma of the maxillary sinus (squamous cell carcinoma most common)',
      'Ohngren line: divides maxilla into anteroinferior (better prognosis) and posterosuperior (worse)',
      'Proptosis indicates orbital involvement — advanced disease',
      'Staging with CT/MRI and biopsy confirmation',
      'Management: multimodal — surgery (maxillectomy) with post-operative radiotherapy',
      'Orbital exenteration may be needed if orbital invasion is confirmed',
    ],
    modelAnswer:
      'This is maxillary sinus carcinoma with orbital extension. Ohngren classification divides the maxilla by an imaginary line from medial canthus to angle of mandible: posterosuperior (infrastructure) tumors have worse prognosis. Proptosis indicates orbital floor destruction. After biopsy confirmation and MRI staging, treatment involves maxillectomy (possibly with orbital exenteration) followed by post-operative radiotherapy. Prosthetic rehabilitation is needed post-surgery. The prognosis depends on the extent of invasion and adequacy of surgical margins.',
    followUpQuestions: [
      'What is the significance of Ohngren line in maxillary sinus tumors?',
      'How would you differentiate sinusitis from maxillary sinus malignancy clinically?',
    ],
    pihuHint: 'Unilateral nasal obstruction plus bloody discharge plus proptosis in an older patient screams maxillary sinus cancer — CT and biopsy ASAP!',
    marks: 10,
  },

  // ============================================================
  // ENT — airway_emergencies
  // ============================================================
  {
    id: 'airway_emergencies-easy',
    subjectSlug: 'ent',
    topicSlug: 'airway_emergencies',
    difficulty: 'easy',
    question: 'What are the indications for tracheostomy? Describe the types.',
    expectedKeyPoints: [
      'Upper airway obstruction (tumor, bilateral vocal cord palsy, Ludwig angina)',
      'Prolonged intubation (more than 7-10 days)',
      'Respiratory toilet in neurological diseases',
      'Elective tracheostomy: planned, done in controlled setting',
      'Emergency tracheostomy: for acute airway obstruction when intubation fails',
      'Minitracheostomy: for bronchial toilet only',
    ],
    modelAnswer:
      'Indications for tracheostomy include upper airway obstruction from tumors or bilateral vocal cord palsy, prolonged mechanical ventilation, bronchial toilet in comatose patients, and sleep apnea refractory to other treatments. Types include elective (planned under controlled settings), emergency (life-saving for acute obstruction), and minitracheostomy (for sputum clearance). The standard site is between the 2nd and 3rd tracheal rings.',
    followUpQuestions: [
      'What are the complications of tracheostomy?',
      'Differentiate between tracheostomy and cricothyrotomy.',
    ],
    pihuHint: 'Tracheostomy is the emergency exit when the main airway door is blocked — know the indications and you are sorted!',
    marks: 5,
  },
  {
    id: 'airway_emergencies-medium',
    subjectSlug: 'ent',
    topicSlug: 'airway_emergencies',
    difficulty: 'medium',
    question: 'Describe the clinical features and management of foreign body aspiration in a child.',
    expectedKeyPoints: [
      'History of choking episode followed by cough, wheeze, or stridor',
      'Right main bronchus more common (wider, more vertical)',
      'Check valve obstruction: unilateral hyperinflation, mediastinal shift to opposite side',
      'Chest X-ray may show radio-opaque FB, hyperinflation, or atelectasis',
      'Emergency Heimlich maneuver if complete obstruction',
      'Definitive: rigid bronchoscopy for removal under general anesthesia',
    ],
    modelAnswer:
      'Foreign body aspiration in children typically presents after a choking episode with persistent cough, unilateral wheeze, or stridor. The right main bronchus is more commonly affected. Chest X-ray may show hyperinflation (check-valve mechanism) or atelectasis. For complete obstruction causing cyanosis, perform Heimlich maneuver (back blows in infants). Definitive management is rigid bronchoscopy under general anesthesia for foreign body removal. Delay increases risk of pneumonia, abscess, and bronchiectasis.',
    followUpQuestions: [
      'Why is the right bronchus more commonly involved?',
      'What is the difference between inspiratory and expiratory films in FB detection?',
    ],
    pihuHint: 'Sudden choking in a child plus unilateral wheeze means foreign body until proven otherwise — rigid bronchoscopy is the answer!',
    marks: 8,
  },
  {
    id: 'airway_emergencies-hard',
    subjectSlug: 'ent',
    topicSlug: 'airway_emergencies',
    difficulty: 'hard',
    question: 'A 50-year-old diabetic presents with severe throat pain, drooling, trismus, and swelling in the floor of the mouth. He is febrile with stridor. Diagnose and outline the emergency management.',
    expectedKeyPoints: [
      'Diagnosis: Ludwig angina (bilateral submandibular space infection)',
      'Life-threatening due to rapid airway compromise',
      'Brawny, board-like swelling of floor of mouth pushing tongue upward',
      'Most common cause: dental infection (lower molars)',
      'Management: secure airway first (awake fiber-optic intubation or tracheostomy)',
      'IV antibiotics (ampicillin-sulbactam + metronidazole), surgical drainage if abscess formed',
    ],
    modelAnswer:
      'This is Ludwig angina — a rapidly progressive bilateral submandibular space cellulitis, typically from dental infection in diabetics. The primary concern is airway obstruction from elevation of the tongue. Management: immediate airway assessment and securing via awake fiber-optic intubation or tracheostomy if severe. High-dose IV antibiotics covering aerobes and anaerobes. CT neck to assess for drainable abscess. Surgical drainage if fluctuance present. Monitor closely in ICU as airway can deteriorate rapidly.',
    followUpQuestions: [
      'What spaces are involved in Ludwig angina?',
      'What is the role of CT scan in deep neck space infections?',
    ],
    pihuHint: 'Ludwig angina is a floor-of-mouth infection that pushes the tongue up and blocks the airway — secure that airway before anything else!',
    marks: 10,
  },

  // ============================================================
  // FORENSIC MEDICINE — legal_procedures
  // ============================================================
  {
    id: 'legal_procedures-easy',
    subjectSlug: 'forensic_medicine',
    topicSlug: 'legal_procedures',
    difficulty: 'easy',
    question: 'What is an inquest? Describe the types of inquest in India.',
    expectedKeyPoints: [
      'Inquest: investigation into the cause and circumstances of death',
      'Police inquest (Section 174 CrPC): conducted by police officer for unnatural death',
      'Magistrate inquest (Section 176 CrPC): for deaths in custody, dowry deaths within 7 years',
      'Coroner inquest: in cities like Mumbai (rare, being phased out)',
      'Medical examiner system: used in some Western countries',
    ],
    modelAnswer:
      'An inquest is a legal investigation to determine the cause and circumstances of death. In India, two main types exist: police inquest under Section 174 CrPC (conducted by police for all cases of unnatural death) and magistrate inquest under Section 176 CrPC (mandatory for deaths in police custody, dowry deaths within 7 years of marriage, and other cases ordered by magistrate). Coroner inquest exists in Mumbai but is largely being phased out.',
    followUpQuestions: [
      'When is a magistrate inquest mandatory?',
      'What is the difference between an inquest and a post-mortem examination?',
    ],
    pihuHint: 'Police inquest is routine for unnatural deaths, magistrate inquest is for special cases like custody deaths — know the sections!',
    marks: 5,
  },
  {
    id: 'legal_procedures-medium',
    subjectSlug: 'forensic_medicine',
    topicSlug: 'legal_procedures',
    difficulty: 'medium',
    question: 'What are the medicolegal duties of a medical practitioner at the time of receiving an injured patient?',
    expectedKeyPoints: [
      'Treat the patient first — life-saving treatment cannot be denied',
      'Prepare a detailed injury report (wound certificate)',
      'Inform the police in medicolegal cases (MLC)',
      'Document injuries accurately: site, size, shape, nature, weapon used',
      'Preserve evidence: clothes, swabs, projectiles',
      'Maintain chain of custody for all evidence collected',
    ],
    modelAnswer:
      'A doctor must first provide emergency treatment regardless of police formalities — this is both a legal and ethical duty. Then, prepare a detailed wound certificate documenting each injury with its exact location, dimensions, nature, age, and possible weapon. Inform the police about the MLC. Preserve physical evidence including bloodstained clothes, swabs, and foreign bodies in sealed containers maintaining chain of custody. Record the patient statement if conscious.',
    followUpQuestions: [
      'What constitutes a medicolegal case?',
      'What is the legal consequence of refusing treatment to an emergency patient?',
    ],
    pihuHint: 'Treatment first, paperwork second — but do not skip either, your injury report can make or break a court case!',
    marks: 8,
  },
  {
    id: 'legal_procedures-hard',
    subjectSlug: 'forensic_medicine',
    topicSlug: 'legal_procedures',
    difficulty: 'hard',
    question: 'A doctor is summoned to court as an expert witness in a murder trial. Discuss the duties and responsibilities of a medical expert witness and the legal framework governing expert testimony.',
    expectedKeyPoints: [
      'Expert witness under Section 45 of Indian Evidence Act: person with special skill/knowledge',
      'Duty to be impartial and give honest opinion, not advocate for either side',
      'Opinion based on examination findings, reports, and scientific evidence',
      'Must be prepared to explain and defend opinions under cross-examination',
      'Dying declaration recorded under Section 32 of Evidence Act',
      'Can be held liable for perjury if gives false evidence',
    ],
    modelAnswer:
      'Under Section 45 of the Indian Evidence Act, an expert witness is someone with special knowledge in a subject. The medical expert must give an impartial, honest opinion based on examination findings and scientific evidence. The expert should clearly distinguish between facts observed and opinions formed. During cross-examination, the expert must defend opinions logically. The expert should not suppress or modify findings. False testimony constitutes perjury under Section 191 IPC. The expert should maintain all original records and photographs.',
    followUpQuestions: [
      'What is the difference between a fact witness and an expert witness?',
      'Can a doctor refuse to appear in court when summoned?',
    ],
    pihuHint: 'Expert witness means you are the court\'s science teacher — be honest, be impartial, and always stick to what you actually found!',
    marks: 10,
  },

  // ============================================================
  // FORENSIC MEDICINE — ipc_crpc_basics
  // ============================================================
  {
    id: 'ipc_crpc_basics-easy',
    subjectSlug: 'forensic_medicine',
    topicSlug: 'ipc_crpc_basics',
    difficulty: 'easy',
    question: 'Define the terms: hurt, grievous hurt, and simple hurt as per IPC.',
    expectedKeyPoints: [
      'Hurt (Section 319 IPC): causing bodily pain, disease, or infirmity to any person',
      'Grievous hurt (Section 320 IPC): includes 8 types of serious injuries',
      'Grievous hurt includes: emasculation, permanent loss of sight/hearing, fracture, dislocation',
      'Also includes: loss of limb, destruction of joint, permanent disfiguration of face',
      'Simple hurt: any hurt that is not grievous',
    ],
    modelAnswer:
      'Under IPC, hurt (Section 319) is causing bodily pain, disease, or infirmity. Grievous hurt (Section 320) includes eight categories: emasculation, permanent loss of sight or hearing of either ear, privation of any member or joint, destruction or permanent impairment of any member or joint, permanent disfiguration of head or face, fracture or dislocation of bone or tooth, and any hurt endangering life or causing severe bodily pain for 20 days. Simple hurt is any injury not classified as grievous.',
    followUpQuestions: [
      'What is the punishment for causing grievous hurt?',
      'Differentiate between hurt and assault.',
    ],
    pihuHint: 'Grievous hurt has 8 specific types under Section 320 — if the injury matches any, it upgrades from simple to grievous!',
    marks: 5,
  },
  {
    id: 'ipc_crpc_basics-medium',
    subjectSlug: 'forensic_medicine',
    topicSlug: 'ipc_crpc_basics',
    difficulty: 'medium',
    question: 'Explain the concepts of Section 304A (death by negligence) and Section 304B (dowry death) of IPC with examples.',
    expectedKeyPoints: [
      'Section 304A: causing death by rash or negligent act (not amounting to culpable homicide)',
      'Applicable to medical negligence resulting in patient death',
      'Punishment: up to 2 years imprisonment and/or fine',
      'Section 304B: dowry death — death within 7 years of marriage under suspicious circumstances',
      'Cruelty or harassment for dowry must be shown',
      'Presumption of guilt shifts burden of proof to the accused',
    ],
    modelAnswer:
      'Section 304A covers death caused by a rash or negligent act, not amounting to culpable homicide, carrying up to 2 years imprisonment. This applies to medical negligence cases where a doctor causes death through negligence. Section 304B addresses dowry death, where a woman dies within 7 years of marriage from burns or bodily injury under abnormal circumstances, and it is shown she was subjected to cruelty or harassment for dowry. The legal presumption shifts the burden of proof to the accused.',
    followUpQuestions: [
      'What is the difference between Section 302 and Section 304A?',
      'What role does forensic evidence play in dowry death investigation?',
    ],
    pihuHint: '304A is rash and negligent death (like medical negligence), 304B is dowry death within 7 years — do not mix up A and B!',
    marks: 8,
  },
  {
    id: 'ipc_crpc_basics-hard',
    subjectSlug: 'forensic_medicine',
    topicSlug: 'ipc_crpc_basics',
    difficulty: 'hard',
    question: 'A patient dies during surgery due to an anesthetic complication. The family alleges medical negligence. Discuss the legal framework (civil and criminal) for medical negligence in India and the landmark case law.',
    expectedKeyPoints: [
      'Criminal negligence: Section 304A IPC if gross negligence causing death',
      'Civil negligence: tort law, compensation under Consumer Protection Act',
      'Four Ds of negligence: duty, dereliction, direct cause, damage',
      'Bolam test: standard of reasonable and competent doctor in that field',
      'Jacob Mathew vs State of Punjab (2005): landmark SC judgment',
      'Three-judge bench ruling: simple error of judgment is not negligence, gross negligence needed for criminal prosecution',
    ],
    modelAnswer:
      'Medical negligence has both civil and criminal dimensions. Civilly, the patient family can seek compensation through Consumer Protection Act or civil court. Criminally, Section 304A IPC applies if gross negligence is proven. The landmark Jacob Mathew vs State of Punjab (2005) case held that a medical professional should not be criminally prosecuted for mere negligence — only gross or reckless negligence warrants criminal action. The Bolam principle applies: the standard is that of a reasonable competent practitioner in that specialty, not perfection.',
    followUpQuestions: [
      'What are the four elements needed to prove medical negligence?',
      'How does the Consumer Protection Act apply to medical services?',
    ],
    pihuHint: 'Jacob Mathew case is your go-to landmark — it says simple error in judgment is not criminal negligence, only gross recklessness counts!',
    marks: 10,
  },

  // ============================================================
  // FORENSIC MEDICINE — medical_ethics
  // ============================================================
  {
    id: 'medical_ethics-easy',
    subjectSlug: 'forensic_medicine',
    topicSlug: 'medical_ethics',
    difficulty: 'easy',
    question: 'What is informed consent? What are its essential elements?',
    expectedKeyPoints: [
      'Informed consent: voluntary permission by patient after understanding the procedure',
      'Elements: disclosure, understanding, voluntariness, competence, authorization',
      'Patient must be informed of: diagnosis, nature of procedure, risks, benefits, alternatives',
      'Must be given by a competent adult (18 years and above)',
      'Written consent preferred for invasive procedures and medicolegal situations',
    ],
    modelAnswer:
      'Informed consent is the voluntary agreement by a competent patient to undergo a medical procedure after being informed of its nature, purpose, risks, benefits, and alternatives. Essential elements include adequate disclosure of information, patient comprehension, voluntariness without coercion, decision-making capacity, and documented authorization. Written consent is mandatory for surgical procedures, anesthesia, and medicolegal examinations.',
    followUpQuestions: [
      'When can treatment be given without consent?',
      'Who gives consent for a minor or unconscious patient?',
    ],
    pihuHint: 'Informed consent is not just a signature — the patient must actually understand what they are agreeing to, that is the key!',
    marks: 5,
  },
  {
    id: 'medical_ethics-medium',
    subjectSlug: 'forensic_medicine',
    topicSlug: 'medical_ethics',
    difficulty: 'medium',
    question: 'Discuss the ethical principle of confidentiality in medical practice. When can a doctor breach patient confidentiality?',
    expectedKeyPoints: [
      'Confidentiality: duty to protect patient information shared during doctor-patient relationship',
      'Part of Hippocratic oath and medical ethics codes',
      'Exceptions: notifiable diseases (communicable diseases to authorities)',
      'Court orders requiring disclosure',
      'When patient is a danger to themselves or others',
      'Reporting gunshot wounds, sexual offences, child abuse',
    ],
    modelAnswer:
      'Confidentiality is a fundamental ethical principle protecting patient information shared during the doctor-patient relationship. However, breach is justified when required by law (notifiable diseases, medicolegal cases), court orders, protecting third parties from serious harm (e.g., partner of HIV-positive patient), preventing imminent danger, and reporting suspected child abuse or sexual offences. Even in these situations, disclosure should be limited to the minimum necessary information.',
    followUpQuestions: [
      'How does patient confidentiality apply in telemedicine?',
      'What is privileged communication?',
    ],
    pihuHint: 'Confidentiality is sacred but not absolute — notifiable diseases, court orders, and protecting others are the valid exceptions!',
    marks: 8,
  },
  {
    id: 'medical_ethics-hard',
    subjectSlug: 'forensic_medicine',
    topicSlug: 'medical_ethics',
    difficulty: 'hard',
    question: 'A terminally ill cancer patient requests euthanasia. Discuss the ethical, legal, and medical perspectives on euthanasia and palliative care in India.',
    expectedKeyPoints: [
      'Active euthanasia (mercy killing) is illegal in India — amounts to murder (Section 302 IPC)',
      'Passive euthanasia (withdrawal of life support) is legally permitted since Aruna Shanbaug case (2011)',
      'Common Cause vs Union of India (2018): Supreme Court recognized living will/advance directive',
      'Palliative care: focuses on quality of life, pain management, symptom control',
      'Ethical principles: autonomy, beneficence, non-maleficence, justice',
      'Indian Medical Council regulations on withholding futile treatment',
    ],
    modelAnswer:
      'Active euthanasia remains illegal in India. However, the Supreme Court in Common Cause vs Union of India (2018) legalized passive euthanasia and recognized the concept of living will/advance directive for terminally ill patients. The ethical framework involves balancing patient autonomy with non-maleficence. Palliative care, focusing on pain relief and quality of life, is the recommended approach for terminal illness. The decision to withdraw life support requires a medical board opinion and legal safeguards to prevent misuse.',
    followUpQuestions: [
      'What is the difference between active and passive euthanasia?',
      'What is an advance medical directive and how does it work in India?',
    ],
    pihuHint: 'Active euthanasia is a no in India, passive is allowed after Aruna Shanbaug and Common Cause — know both landmark cases!',
    marks: 10,
  },

  // ============================================================
  // FORENSIC MEDICINE — identification
  // ============================================================
  {
    id: 'identification-easy',
    subjectSlug: 'forensic_medicine',
    topicSlug: 'identification',
    difficulty: 'easy',
    question: 'What are the methods of personal identification in forensic medicine?',
    expectedKeyPoints: [
      'Fingerprints (dactylography): most reliable and widely used',
      'DNA profiling: most accurate method of identification',
      'Dental records (forensic odontology)',
      'Anthropometric measurements (Bertillon system)',
      'Scars, tattoos, birthmarks, deformities',
      'Photographs, clothing, personal belongings',
    ],
    modelAnswer:
      'Methods of personal identification include fingerprints (most reliable routine method as they are unique and permanent), DNA profiling (most accurate, even from decomposed remains), dental records (resistant to fire and decomposition), anthropometric measurements, facial features, scars, tattoos, and birthmarks. For mass disasters, dental records and DNA profiling are particularly valuable when bodies are mutilated or decomposed.',
    followUpQuestions: [
      'Why are fingerprints considered the most reliable method?',
      'What are the types of fingerprint patterns?',
    ],
    pihuHint: 'Fingerprints for routine ID, DNA for the ultimate proof — these two are the forensic identification power couple!',
    marks: 5,
  },
  {
    id: 'identification-medium',
    subjectSlug: 'forensic_medicine',
    topicSlug: 'identification',
    difficulty: 'medium',
    question: 'Describe the role of DNA profiling in forensic identification. What are the methods used and their applications?',
    expectedKeyPoints: [
      'DNA profiling analyzes variable regions (STR — Short Tandem Repeats)',
      'PCR (Polymerase Chain Reaction) amplifies small DNA samples',
      'Can be extracted from blood, saliva, hair, semen, bone',
      'Applications: paternity testing, identification of decomposed bodies',
      'Disaster victim identification, sexual assault cases',
      'Mitochondrial DNA used when nuclear DNA is degraded',
    ],
    modelAnswer:
      'DNA profiling analyzes Short Tandem Repeats (STRs) at multiple loci to create a unique genetic fingerprint. PCR amplification allows analysis from minute samples. It is used for personal identification in decomposed bodies, mass disasters, paternity disputes, and sexual assault cases. Nuclear DNA provides the highest discrimination but requires relatively intact samples. Mitochondrial DNA, inherited maternally, can be extracted from degraded remains and is useful when nuclear DNA is unavailable.',
    followUpQuestions: [
      'What is the difference between nuclear and mitochondrial DNA profiling?',
      'What is the significance of the CODIS database?',
    ],
    pihuHint: 'DNA profiling with STRs is like reading a unique barcode that every person has — no two people have the same pattern except identical twins!',
    marks: 8,
  },
  {
    id: 'identification-hard',
    subjectSlug: 'forensic_medicine',
    topicSlug: 'identification',
    difficulty: 'hard',
    question: 'A mass disaster occurs (airplane crash) with 150 casualties. Many bodies are fragmented and decomposed. As the forensic expert, how would you organize the identification process?',
    expectedKeyPoints: [
      'Establish disaster victim identification (DVI) team with Interpol protocol',
      'Ante-mortem data collection from families: dental records, DNA, medical records, photos',
      'Post-mortem examination: dental charting, DNA sampling, fingerprints, radiology',
      'Reconciliation: match ante-mortem and post-mortem data',
      'Primary identifiers: DNA, dental, fingerprints (most reliable)',
      'Chain of custody, documentation, and dignified handling of remains',
    ],
    modelAnswer:
      'Following Interpol DVI protocol: establish ante-mortem and post-mortem teams. Ante-mortem team collects data from families (dental records, medical records, DNA reference samples, photographs). Post-mortem team performs systematic examination: numbering, photography, fingerprinting, dental charting, DNA sampling, and radiological examination. Reconciliation team matches ante-mortem and post-mortem data using primary identifiers (dental, fingerprints, DNA) and secondary identifiers (personal effects, medical devices). Maintain strict chain of custody and ethical handling throughout.',
    followUpQuestions: [
      'What is the Interpol DVI protocol?',
      'Why are dental records particularly valuable in mass disaster identification?',
    ],
    pihuHint: 'DVI is teamwork — ante-mortem team collects from families, post-mortem team examines remains, and the reconciliation team matches them!',
    marks: 10,
  },

  // ============================================================
  // FORENSIC MEDICINE — postmortem_changes
  // ============================================================
  {
    id: 'postmortem_changes-easy',
    subjectSlug: 'forensic_medicine',
    topicSlug: 'postmortem_changes',
    difficulty: 'easy',
    question: 'Describe the early postmortem changes and their timeline.',
    expectedKeyPoints: [
      'Cooling of body (algor mortis): body cools to environmental temperature',
      'Rigor mortis: stiffening of muscles starting 2-4 hours after death',
      'Livor mortis (postmortem lividity): gravitational pooling of blood in dependent areas',
      'Rigor mortis sequence: face > neck > trunk > limbs (Nysten law)',
      'Rigor becomes complete by 12 hours, lasts 24-48 hours',
      'Lividity becomes fixed after 6-8 hours',
    ],
    modelAnswer:
      'Early postmortem changes include algor mortis (body cooling at approximately 1.5 degrees F per hour initially), livor mortis (purplish discoloration in dependent areas, appearing within 1-2 hours, becoming fixed by 6-8 hours), and rigor mortis (muscle stiffening starting in small muscles of face at 2-4 hours, becoming complete by 12 hours, and disappearing by 24-48 hours in the same sequence). These changes help estimate time since death.',
    followUpQuestions: [
      'What factors affect the rate of body cooling?',
      'What is the difference between fixation and unfixation of lividity?',
    ],
    pihuHint: 'Algor cools, livor colors, rigor stiffens — the three amigos of early death changes, each with their own timeline!',
    marks: 5,
  },
  {
    id: 'postmortem_changes-medium',
    subjectSlug: 'forensic_medicine',
    topicSlug: 'postmortem_changes',
    difficulty: 'medium',
    question: 'Discuss the medicolegal significance of rigor mortis and livor mortis in death investigation.',
    expectedKeyPoints: [
      'Rigor mortis helps estimate time since death (onset, completion, resolution)',
      'Position of body at time of death can be inferred from rigor distribution',
      'Cadaveric spasm (instantaneous rigor): indicates manner of death (e.g., drowning victim clutching weeds)',
      'Livor mortis distribution indicates body position after death',
      'Fixed lividity contradicting body position suggests body was moved',
      'Color of lividity: cherry red in CO poisoning, dark brown in nitrate poisoning',
    ],
    modelAnswer:
      'Rigor mortis helps estimate time since death and indicates body position at death. Cadaveric spasm is instantaneous rigor at time of death that cannot be reproduced and provides evidence of last action before death. Livor mortis indicates the position of the body after death — if distribution contradicts the body position when found, it suggests the body was moved. The color of lividity is diagnostically important: cherry red in CO poisoning and cyanide, and dark brown in methemoglobinemia.',
    followUpQuestions: [
      'What is the difference between true rigor mortis and cadaveric spasm?',
      'How does cold stiffening differ from rigor mortis?',
    ],
    pihuHint: 'If lividity is on the back but the body is face-down, someone moved the body — that is how lividity catches liars!',
    marks: 8,
  },
  {
    id: 'postmortem_changes-hard',
    subjectSlug: 'forensic_medicine',
    topicSlug: 'postmortem_changes',
    difficulty: 'hard',
    question: 'A decomposed body is found in a forest. Describe how you would estimate the time since death using all available postmortem changes and forensic entomology.',
    expectedKeyPoints: [
      'Late postmortem changes: decomposition stages (fresh, bloat, decay, dry)',
      'Putrefaction starts in right iliac fossa (greenish discoloration)',
      'Marbling, bloating, and skin slippage indicate advancing decomposition',
      'Adipocere formation in moist environments (weeks to months)',
      'Mummification in dry, hot environments (weeks to months)',
      'Forensic entomology: insect succession patterns and larval stages estimate time',
    ],
    modelAnswer:
      'For a decomposed body, estimate time since death using: stage of decomposition (green discoloration, bloating, marbling, tissue liquefaction), environmental factors (temperature, humidity), presence of adipocere or mummification, and forensic entomology. Insect succession follows predictable patterns: blowflies arrive within minutes, lay eggs that progress through larval stages at temperature-dependent rates. Larval stage and species succession can estimate post-mortem interval from days to months. Other indicators include plant growth through remains and soil chemistry changes.',
    followUpQuestions: [
      'What is adipocere and how does it form?',
      'How does temperature affect the rate of decomposition?',
    ],
    pihuHint: 'When the body is too decomposed for standard methods, the insects become your best witnesses — their lifecycle is your timeline!',
    marks: 10,
  },

  // ============================================================
  // FORENSIC MEDICINE — injuries_types_weapons
  // ============================================================
  {
    id: 'injuries_types_weapons-easy',
    subjectSlug: 'forensic_medicine',
    topicSlug: 'injuries_types_weapons',
    difficulty: 'easy',
    question: 'Classify mechanical injuries. Describe the differences between abrasion, bruise, and laceration.',
    expectedKeyPoints: [
      'Abrasion: superficial injury to epidermis from friction or scraping',
      'Bruise (contusion): extravasation of blood in tissues from blunt force, skin intact',
      'Laceration: tearing of tissue by blunt force, irregular margins, bridging of tissue',
      'Incised wound: caused by sharp cutting weapon, clean edges, no bridging',
      'Abrasion does not bleed profusely, bruise may not be seen immediately',
    ],
    modelAnswer:
      'Mechanical injuries are classified as abrasions (superficial skin scraping with epidermis damage), bruises (subcutaneous bleeding from blunt force with intact skin), lacerations (tearing of tissue by blunt force with irregular margins and tissue bridging), incised wounds (clean-cut sharp force injuries), and stab wounds (depth exceeds length). Abrasions indicate direction of force, bruises indicate force application area, and lacerations show features of blunt trauma with tissue bridges, crushed margins, and irregular edges.',
    followUpQuestions: [
      'How does a laceration differ from an incised wound?',
      'What is the medicolegal significance of a bruise?',
    ],
    pihuHint: 'Laceration has bridges and rough edges (blunt force), incised wound is clean-cut (sharp force) — this difference is exam gold!',
    marks: 5,
  },
  {
    id: 'injuries_types_weapons-medium',
    subjectSlug: 'forensic_medicine',
    topicSlug: 'injuries_types_weapons',
    difficulty: 'medium',
    question: 'Describe the features of entry and exit wounds in firearm injuries. How do you determine the range of fire?',
    expectedKeyPoints: [
      'Entry wound: inverted margins, collar of abrasion (contact ring), smaller than bullet',
      'Exit wound: everted margins, irregular, no collar of abrasion, usually larger',
      'Contact range: muzzle imprint, soot in wound, stellate laceration over bone',
      'Close range: tattooing (powder burns), singeing of hair',
      'Medium range: tattooing without singeing',
      'Distant range: only bullet enters, no powder marks',
    ],
    modelAnswer:
      'Entry wounds show inverted margins, collar of abrasion, and are typically smaller and round. Exit wounds have everted irregular margins, are larger, and lack abrasion collar. Range of fire is determined by: contact (muzzle imprint, star-shaped wound over bone, soot in wound), close range (tattooing and singeing present), intermediate range (tattooing but no singeing), and distant (no powder marks). Tattooing is caused by unburnt powder particles embedded in skin and cannot be washed off.',
    followUpQuestions: [
      'What is the difference between tattooing and sooting?',
      'How does a rifled weapon injury differ from a shotgun injury?',
    ],
    pihuHint: 'Entry has inverted edges with a collar, exit has everted edges without — and tattooing tells you the gun was close!',
    marks: 8,
  },
  {
    id: 'injuries_types_weapons-hard',
    subjectSlug: 'forensic_medicine',
    topicSlug: 'injuries_types_weapons',
    difficulty: 'hard',
    question: 'A body is found with multiple stab wounds. Some wounds have clean-cut edges while others show tailing. How would you determine the weapon type, direction of assault, and manner of death (homicide vs suicide)?',
    expectedKeyPoints: [
      'Clean-cut edges: single-edged or double-edged weapon',
      'Tailing: indicates direction of withdrawal of the weapon',
      'Single-edged weapon: one sharp and one blunt margin',
      'Depth greater than surface wound length suggests forceful stab',
      'Homicide signs: multiple deep wounds, varying directions, defense wounds on hands',
      'Suicide signs: wounds over accessible areas, parallel tentative cuts, clothing usually removed',
    ],
    modelAnswer:
      'Wound characteristics reveal weapon type: clean edges bilaterally indicate double-edged weapon, one clean and one blunt edge suggest single-edged weapon. Tailing indicates withdrawal direction. Homicidal stab wounds show multiple wounds of varying depth and direction, defense wounds on palms and forearms, and wounds through clothing. Suicidal stab wounds are typically over accessible areas (chest, wrist), show tentative or hesitation marks, and clothing is often displaced. Scene examination and wound distribution pattern are critical for determining manner of death.',
    followUpQuestions: [
      'What are defense wounds and their significance?',
      'How would you differentiate homicidal from suicidal injuries in a neck wound?',
    ],
    pihuHint: 'Defense wounds on hands plus wounds through clothes plus multiple deep wounds all over equals homicide — suicidal wounds are neat and accessible!',
    marks: 10,
  },

  // ============================================================
  // FORENSIC MEDICINE — asphyxia
  // ============================================================
  {
    id: 'asphyxia-easy',
    subjectSlug: 'forensic_medicine',
    topicSlug: 'asphyxia',
    difficulty: 'easy',
    question: 'Define asphyxia and describe its general postmortem findings.',
    expectedKeyPoints: [
      'Asphyxia: condition of deficient oxygen supply to tissues',
      'External: cyanosis, petechial hemorrhages on face and conjunctivae',
      'Internal: congested dark-colored organs',
      'Tardieu spots: petechial hemorrhages on visceral pleura and pericardium',
      'Dark fluid blood due to deoxygenation',
      'Lungs are congested and edematous',
    ],
    modelAnswer:
      'Asphyxia is a condition of insufficient oxygen supply to body tissues despite adequate blood supply. General postmortem findings include external cyanosis, facial congestion, petechial hemorrhages on conjunctivae and skin, and protrusion of tongue. Internal findings include congested viscera, dark fluid blood, Tardieu spots (subpleural and subepicardial petechiae), and pulmonary congestion and edema. These findings, however, are not pathognomonic and must be interpreted in context.',
    followUpQuestions: [
      'What are Tardieu spots and where are they found?',
      'Why is dark fluid blood found in asphyxia?',
    ],
    pihuHint: 'Cyanosis plus petechiae plus congested organs is the asphyxia triad — look for Tardieu spots on lungs and heart!',
    marks: 5,
  },
  {
    id: 'asphyxia-medium',
    subjectSlug: 'forensic_medicine',
    topicSlug: 'asphyxia',
    difficulty: 'medium',
    question: 'Differentiate between hanging and strangulation based on ligature mark, neck findings, and other features.',
    expectedKeyPoints: [
      'Hanging: ligature mark oblique, non-continuous, above thyroid cartilage',
      'Strangulation: ligature mark horizontal, continuous, at or below thyroid',
      'Hanging: fracture of hyoid bone in older adults, cervical vertebra dislocation rare',
      'Strangulation: fracture of hyoid common, especially in manual strangulation',
      'Hanging: knot impression at a point, face pale above ligature',
      'Strangulation: face congested and cyanotic, petechiae prominent',
    ],
    modelAnswer:
      'In hanging, the ligature mark is oblique, non-continuous (gap at knot point), situated above the thyroid cartilage, and parchment-like. The face is pale if suspension is complete. In strangulation, the mark is horizontal, continuous, at or below thyroid cartilage level. The face is congested with prominent petechiae. Hyoid bone fracture is more common in strangulation. Hanging usually causes death by carotid compression, while strangulation combines venous obstruction with airway compression.',
    followUpQuestions: [
      'What is the difference between complete and incomplete hanging?',
      'How do you distinguish ante-mortem from post-mortem ligature marks?',
    ],
    pihuHint: 'Hanging mark goes upward (oblique), strangulation mark stays horizontal — the direction of the ligature mark tells the story!',
    marks: 8,
  },
  {
    id: 'asphyxia-hard',
    subjectSlug: 'forensic_medicine',
    topicSlug: 'asphyxia',
    difficulty: 'hard',
    question: 'A body is recovered from a river. Describe the postmortem findings that would help you determine whether the person died by drowning or was dead before submersion.',
    expectedKeyPoints: [
      'Signs of ante-mortem drowning: fine white froth at mouth and nostrils',
      'Emphysema aquosum: voluminous waterlogged lungs filling the chest cavity',
      'Water in stomach and proximal small intestine (swallowed while alive)',
      'Diatom test: diatoms in bone marrow, liver, kidney (definitive test)',
      'Cutis anserina (goose skin) and washerwoman hands (post-mortem artefacts)',
      'If dead before submersion: lungs not waterlogged, no froth, no diatoms in distant organs',
    ],
    modelAnswer:
      'Ante-mortem drowning shows: fine white persistent froth at nose and mouth, voluminous waterlogged lungs (emphysema aquosum), water in stomach and proximal intestine, hemorrhages in middle ear and mastoid. The definitive test is the diatom test — presence of diatoms in bone marrow and closed organs like kidney confirms drowning, as diatoms can only reach these sites through intact circulation. If the person was dead before submersion, lungs will not be overinflated, no froth will be present, and diatoms will not be found in distant organs.',
    followUpQuestions: [
      'What is the mechanism of death in freshwater vs saltwater drowning?',
      'What are the limitations of the diatom test?',
    ],
    pihuHint: 'Diatoms in bone marrow means the person was alive and breathing underwater — that is the gold standard to prove drowning!',
    marks: 10,
  },

  // ============================================================
  // FORENSIC MEDICINE — poisoning
  // ============================================================
  {
    id: 'poisoning-easy',
    subjectSlug: 'forensic_medicine',
    topicSlug: 'poisoning',
    difficulty: 'easy',
    question: 'Define poison. Classify poisons with examples.',
    expectedKeyPoints: [
      'Poison: substance that causes harm or death when introduced into the body',
      'Corrosives: acids (sulphuric), alkalis (NaOH)',
      'Irritants: arsenic, mercury, copper sulphate',
      'Neurotoxic: organophosphorus, strychnine, barbiturates',
      'Asphyxiants: carbon monoxide, hydrogen cyanide',
      'Miscellaneous: snake venom, plant poisons (oleander, datura)',
    ],
    modelAnswer:
      'A poison is any substance that, when administered in sufficient quantity, causes harmful effects or death. Classification includes: corrosives (strong acids and alkalis causing tissue destruction), irritants (metallic like arsenic, non-metallic like phosphorus), neurotoxic (organophosphorus, strychnine, barbiturates), cardiac poisons (digitalis, oleander), asphyxiants (CO, cyanide), and miscellaneous (snake venom, food poisoning). The effect depends on dose, route, and individual susceptibility.',
    followUpQuestions: [
      'What is the difference between a poison and a drug?',
      'What are the general principles of management of poisoning?',
    ],
    pihuHint: 'Everything is a poison, the dose makes the difference — even water can kill if you drink too much, Paracelsus said it first!',
    marks: 5,
  },
  {
    id: 'poisoning-medium',
    subjectSlug: 'forensic_medicine',
    topicSlug: 'poisoning',
    difficulty: 'medium',
    question: 'Describe the clinical features, postmortem findings, and medicolegal aspects of arsenic poisoning.',
    expectedKeyPoints: [
      'Acute arsenic poisoning: rice-water stools, garlic odor, severe vomiting',
      'Chronic: rain-drop pigmentation, Mees lines on nails, peripheral neuropathy',
      'Postmortem: yellow subcutaneous fat, congested GI mucosa',
      'Detection: Reinsch test, Marsh test (gold standard)',
      'Arsenic preserved in hair and nails — can detect chronic exposure',
      'Medicolegal: commonly used as homicidal poison (tasteless, odorless)',
    ],
    modelAnswer:
      'Acute arsenic poisoning presents with profuse rice-water diarrhea, vomiting, abdominal pain, and garlic odor of breath. Chronic exposure causes rain-drop pigmentation, Mees lines on nails, keratosis, and peripheral neuropathy. Postmortem shows yellow subcutaneous fat and congested gastric mucosa. Detection uses Marsh test. Arsenic is historically important as a homicidal poison because it is tasteless and symptoms mimic cholera. It accumulates in hair, nails, and bones, allowing detection even years after death through exhumation.',
    followUpQuestions: [
      'What is the treatment for acute arsenic poisoning?',
      'Why is arsenic called "inheritance powder"?',
    ],
    pihuHint: 'Arsenic is the king of homicidal poisons — tasteless, mimics cholera, and hides in hair and nails for forensic detectives to find!',
    marks: 8,
  },
  {
    id: 'poisoning-hard',
    subjectSlug: 'forensic_medicine',
    topicSlug: 'poisoning',
    difficulty: 'hard',
    question: 'A farmer is brought unconscious to the emergency with smell of organophosphorus compound, pinpoint pupils, excessive secretions, and bradycardia. Describe the emergency management and forensic implications.',
    expectedKeyPoints: [
      'ABC management: secure airway, suction secretions, oxygen',
      'Decontamination: remove clothes, wash skin with soap and water',
      'Atropine IV: titrate to dry secretions (atropinization)',
      'Pralidoxime (PAM): reactivates acetylcholinesterase if given within 24-48 hours',
      'Forensic: collect gastric aspirate, blood, urine for cholinesterase levels',
      'Inform police as this is a medicolegal case; determine manner (suicidal most common in India)',
    ],
    modelAnswer:
      'Emergency management: secure airway and provide oxygen, decontaminate by removing clothes and washing with soap and water. Give IV atropine in escalating doses until secretions dry (may need large doses). Administer pralidoxime to reactivate acetylcholinesterase before enzyme aging occurs. Monitor for respiratory failure. Forensically, this is a medicolegal case: inform police, collect samples (blood for cholinesterase, urine, gastric lavage) maintaining chain of custody. In India, OP poisoning is predominantly suicidal, making psychiatric evaluation important for survivors.',
    followUpQuestions: [
      'What is enzyme aging in OP poisoning and why is early PAM administration crucial?',
      'What is the intermediate syndrome in OP poisoning?',
    ],
    pihuHint: 'OP poisoning is MLC by default — treat aggressively with atropine and PAM, but also collect forensic samples before they are lost!',
    marks: 10,
  },

  // ============================================================
  // FORENSIC MEDICINE — sexual_offences
  // ============================================================
  {
    id: 'sexual_offences-easy',
    subjectSlug: 'forensic_medicine',
    topicSlug: 'sexual_offences',
    difficulty: 'easy',
    question: 'Define rape as per Indian law. What are the essential elements of rape under Section 375 IPC?',
    expectedKeyPoints: [
      'Section 375 IPC defines rape: sexual intercourse with a woman under certain circumstances',
      'Against her will, without her consent',
      'Consent obtained by fear, fraud, or intoxication',
      'With or without consent when she is under 18 years of age',
      'Penetration is sufficient to constitute intercourse',
      'Marital rape exception exists for wife above 18 years (debated)',
    ],
    modelAnswer:
      'Under Section 375 IPC, rape is sexual intercourse with a woman against her will, without consent, or with consent obtained through fear, fraud, intoxication, or when she cannot understand the nature of consent, or when she is under 18 years regardless of consent. Even slight penetration constitutes the offence. Consent must be voluntary and informed. The marital rape exception for wives above 18 years exists but has been subject to legal challenge.',
    followUpQuestions: [
      'What changes were made by the Criminal Law Amendment Act 2013?',
      'Can a husband be charged with rape of his wife?',
    ],
    pihuHint: 'Section 375 covers all scenarios where consent was absent, fake, or the person is a minor — penetration even slightly is enough!',
    marks: 5,
  },
  {
    id: 'sexual_offences-medium',
    subjectSlug: 'forensic_medicine',
    topicSlug: 'sexual_offences',
    difficulty: 'medium',
    question: 'Describe the procedure for medical examination of a victim of sexual assault. What samples should be collected?',
    expectedKeyPoints: [
      'Written informed consent from victim (or guardian if minor)',
      'General examination: noting injuries, mental state, emotional condition',
      'Genital examination: hymen status, vaginal tears, discharge',
      'Sample collection: vaginal swabs (high, low), pubic hair combings, nail scrapings',
      'Clothing preservation: each piece in separate paper bag',
      'Samples from accused: penile swabs, blood for DNA, pubic hair',
    ],
    modelAnswer:
      'The examination requires written informed consent and should be conducted with sensitivity. Document general condition, injuries on body, and psychological state. Genital examination notes hymen status, vaginal tears, and discharge. Collect: high and low vaginal swabs, cervical swab, pubic hair combings, nail scrapings, bloodstained clothing (in paper bags), blood for DNA and grouping. Maintain chain of custody for all samples. A proforma report is completed. Absence of injuries does not rule out sexual assault.',
    followUpQuestions: [
      'What is the significance of the two-finger test and current legal position on it?',
      'How long after the assault can spermatozoa be detected?',
    ],
    pihuHint: 'Consent from the victim first, then systematic examination and sample collection with chain of custody — sensitivity is as important as science here!',
    marks: 8,
  },
  {
    id: 'sexual_offences-hard',
    subjectSlug: 'forensic_medicine',
    topicSlug: 'sexual_offences',
    difficulty: 'hard',
    question: 'A 16-year-old girl is brought to the hospital by police alleging sexual assault 3 days ago. She is reluctant and scared. Discuss the ethical, legal, and forensic approach to this case.',
    expectedKeyPoints: [
      'POCSO Act (2012) applies as victim is under 18 years',
      'Mandatory reporting to police; medical examination by female doctor if available',
      'Consent from guardian as she is a minor',
      'Sensitive counseling before examination; child-friendly approach',
      'Even at 3 days, collect samples — spermatozoa can persist up to 72 hours',
      'Document psychological state, injuries; refer for psychological support',
    ],
    modelAnswer:
      'Under POCSO Act 2012, this is a cognizable offence requiring mandatory reporting. Obtain consent from guardian. A female doctor should examine with a female attendant present. Despite the 3-day delay, collect vaginal swabs (motile sperm up to 72 hours, non-motile up to 7 days), clothing, and DNA samples. Provide emotional support and counseling first. Document all physical and genital findings carefully. Absence of physical findings does not negate assault. Refer for psychological support and follow-up. The medical report must be submitted to the investigating officer.',
    followUpQuestions: [
      'What are the key provisions of the POCSO Act?',
      'How does the medical examination differ in a child victim compared to an adult?',
    ],
    pihuHint: 'POCSO for minors is non-negotiable — protect the child, collect evidence carefully, and provide psychological support along with medical care!',
    marks: 10,
  },

  // ============================================================
  // FORENSIC MEDICINE — age_estimation
  // ============================================================
  {
    id: 'age_estimation-easy',
    subjectSlug: 'forensic_medicine',
    topicSlug: 'age_estimation',
    difficulty: 'easy',
    question: 'What are the methods of age estimation in a living person?',
    expectedKeyPoints: [
      'Dental examination: eruption of teeth is most reliable in children',
      'Ossification centres and epiphyseal fusion on X-ray',
      'Secondary sexual characters: puberty markers',
      'General physical development: height, weight',
      'Gustafson method for age estimation from teeth in adults',
    ],
    modelAnswer:
      'Age estimation in living persons uses multiple methods: dental examination (most reliable in children — eruption pattern of deciduous and permanent teeth), radiological assessment of ossification centres and epiphyseal fusion in long bones, development of secondary sexual characters, and general physical appearance. In adults, dental age estimation using attrition, periodontosis, cementum apposition, root resorption, root transparency, and secondary dentin (Gustafson method) is useful.',
    followUpQuestions: [
      'At what age do the third molars typically erupt?',
      'Which epiphysis is important for age estimation around 18 years?',
    ],
    pihuHint: 'Teeth for kids, bones for teens, wrinkles for adults — age estimation uses different tools at different life stages!',
    marks: 5,
  },
  {
    id: 'age_estimation-medium',
    subjectSlug: 'forensic_medicine',
    topicSlug: 'age_estimation',
    difficulty: 'medium',
    question: 'Describe the radiological methods of age estimation. Which ossification centres are important at different age groups?',
    expectedKeyPoints: [
      'X-ray of wrist and hand: most commonly used (Greulich-Pyle atlas)',
      'Elbow: 11-17 years (important for juvenile justice)',
      'Pelvis: iliac crest apophysis fuses at 21-23 years',
      'Clavicle: medial end fuses last at 25 years (important for age 25 determination)',
      'Skull suture closure: unreliable but used for adult age estimation',
      'In India, important legal ages: 7, 12, 16, 18, 21 years',
    ],
    modelAnswer:
      'Radiological age estimation uses X-rays of different areas: wrist and hand (Greulich-Pyle atlas for children), elbow (11-17 years, important for juvenile justice at 16/18 years), pelvis (iliac crest fuses at 21-23 years), and medial clavicle (last epiphysis to fuse at 25 years). Important legal ages include: 7 years (criminal responsibility), 12 years (consent), 16 years (juvenile justice), 18 years (majority, consent for sexual intercourse), and 21 years (drinking age in many states). A margin of 2 years is generally accepted.',
    followUpQuestions: [
      'Why is the medial end of the clavicle important in forensic age estimation?',
      'What legal significance does the age of 18 years have?',
    ],
    pihuHint: 'Wrist X-ray for kids, elbow for teens, clavicle for young adults — each bone tells the judge a different age story!',
    marks: 8,
  },
  {
    id: 'age_estimation-hard',
    subjectSlug: 'forensic_medicine',
    topicSlug: 'age_estimation',
    difficulty: 'hard',
    question: 'A person claiming to be 17 years old is accused of a serious crime. The prosecution says he is above 18. As a forensic expert, how would you estimate his age and what is the medicolegal significance of your opinion?',
    expectedKeyPoints: [
      'Age estimation involves dental, radiological, and physical examination',
      'X-ray of wrist, elbow, pelvis, and clavicle for epiphyseal fusion',
      'Dental: third molar eruption status (usually 17-21 years)',
      'Physical: secondary sexual characters assessment',
      'Opinion should give a range (e.g., 17-19 years) not an exact age',
      'Juvenile Justice Act: below 18 tried as juvenile with lesser punishment',
    ],
    modelAnswer:
      'Perform comprehensive examination: dental (third molar eruption status), radiological (X-ray of wrist, elbow, pelvis, iliac crest for fusion status), and physical (secondary sexual characters). The opinion should provide an age range rather than exact age, with standard deviation considered. The Juvenile Justice Act mandates trial as a juvenile if under 18 years, with significant implications for sentencing. If bone age suggests 17-19 years with uncertainty, the benefit typically goes to the accused. Document all findings meticulously as they will be scrutinized in court.',
    followUpQuestions: [
      'What are the limitations of radiological age estimation?',
      'How does the Juvenile Justice Act 2015 handle heinous offences by 16-18 year olds?',
    ],
    pihuHint: 'Always give an age range, never a single number — and remember, the difference between 17 and 18 can change someone\'s entire legal fate!',
    marks: 10,
  },

  // ============================================================
  // CLINICAL POSTINGS — case_taking_history
  // ============================================================
  {
    id: 'case_taking_history-easy',
    subjectSlug: 'clinical_postings',
    topicSlug: 'case_taking_history',
    difficulty: 'easy',
    question: 'What are the components of a complete medical history?',
    expectedKeyPoints: [
      'Biodata: name, age, sex, occupation, address',
      'Chief complaints in chronological order with duration',
      'History of present illness: detailed account of each complaint',
      'Past history: previous illnesses, surgeries, hospitalizations',
      'Family history: hereditary conditions, similar illness in family',
      'Personal history: diet, sleep, habits, bowel/bladder, menstrual history in females',
    ],
    modelAnswer:
      'A complete medical history includes: biodata (demographic details), chief complaints (in chronological order with duration), history of present illness (detailed narrative of each complaint), past medical and surgical history, family history of relevant diseases, personal history (habits, diet, lifestyle), drug history with allergies, and obstetric/menstrual history in women. Systematic review of systems ensures no symptoms are missed. A well-taken history leads to correct diagnosis in about 80% of cases.',
    followUpQuestions: [
      'Why is history taking considered the most important clinical skill?',
      'How do you handle a patient who gives a poor history?',
    ],
    pihuHint: 'History is 80% of your diagnosis — biodata, complaints, HPI, past history, family history, personal history, done!',
    marks: 5,
  },
  {
    id: 'case_taking_history-medium',
    subjectSlug: 'clinical_postings',
    topicSlug: 'case_taking_history',
    difficulty: 'medium',
    question: 'How would you take a focused history from a patient presenting with chest pain? What red flags would you look for?',
    expectedKeyPoints: [
      'SOCRATES mnemonic: Site, Onset, Character, Radiation, Associated symptoms, Timing, Exacerbating/relieving factors, Severity',
      'Cardiac red flags: crushing/squeezing pain, left arm radiation, sweating, breathlessness',
      'Risk factors: smoking, diabetes, hypertension, family history, dyslipidemia',
      'Differential: cardiac, respiratory, GI, musculoskeletal, anxiety',
      'Drug history: current medications including antianginals',
      'Previous cardiac events or investigations',
    ],
    modelAnswer:
      'Use SOCRATES for chest pain: Site (retrosternal suggests cardiac), Onset (sudden in MI, gradual in angina), Character (crushing in MI, pleuritic in PE), Radiation (left arm, jaw for cardiac), Associated symptoms (sweating, nausea, breathlessness), Timing (relation to exertion), Exacerbating/relieving factors (exertion worsens angina, relieved by rest/GTN), Severity. Red flags include acute severe pain with diaphoresis, syncope, or breathlessness suggesting MI or PE. Risk stratification using cardiovascular risk factors guides urgency.',
    followUpQuestions: [
      'How would you differentiate cardiac from non-cardiac chest pain?',
      'What is the HEART score for chest pain risk stratification?',
    ],
    pihuHint: 'SOCRATES is your bestie for any pain history — Site, Onset, Character, Radiation, Associated, Time, Exacerbating, Severity!',
    marks: 8,
  },
  {
    id: 'case_taking_history-hard',
    subjectSlug: 'clinical_postings',
    topicSlug: 'case_taking_history',
    difficulty: 'hard',
    question: 'A 45-year-old woman presents with progressive breathlessness and swelling of feet for 2 months. Take a comprehensive history and discuss how you would formulate a differential diagnosis.',
    expectedKeyPoints: [
      'Dyspnea assessment: grade (NYHA), orthopnea, PND, exertional',
      'Pedal edema: pitting/non-pitting, bilateral/unilateral, timing',
      'Cardiac causes: valvular disease, cardiomyopathy, IHD',
      'Renal causes: nephrotic syndrome, CKD (oliguria, facial puffiness)',
      'Hepatic causes: cirrhosis (abdominal distension, jaundice)',
      'Past history, medication history, thyroid disease, anemia as causes',
    ],
    modelAnswer:
      'Explore dyspnea progression, NYHA class, presence of orthopnea and PND suggesting cardiac cause. Characterize edema: bilateral pitting suggests cardiac, renal, or hepatic; unilateral suggests DVT. Ask about oliguria and frothy urine (renal), abdominal distension and jaundice (hepatic), chest pain and palpitations (cardiac), weight gain and cold intolerance (hypothyroid). Past history of rheumatic fever, hypertension, diabetes, alcohol use, and drug history are critical. Differential formulation integrates symptom pattern, timeline, risk factors, and associated features to prioritize cardiac, renal, hepatic, or other etiologies.',
    followUpQuestions: [
      'How does orthopnea help differentiate cardiac from pulmonary dyspnea?',
      'What investigations would you prioritize based on your differential?',
    ],
    pihuHint: 'Breathlessness plus pedal edema — think heart, kidney, or liver as the big three, and let the history guide you to the right one!',
    marks: 10,
  },

  // ============================================================
  // CLINICAL POSTINGS — basic_examination_skills
  // ============================================================
  {
    id: 'basic_examination_skills-easy',
    subjectSlug: 'clinical_postings',
    topicSlug: 'basic_examination_skills',
    difficulty: 'easy',
    question: 'Describe the steps of a systematic general physical examination.',
    expectedKeyPoints: [
      'General survey: build, nutrition, posture, gait, level of consciousness',
      'Vitals: pulse, blood pressure, respiratory rate, temperature, SpO2',
      'Pallor, icterus, cyanosis, clubbing, edema, lymphadenopathy (PICCLE)',
      'Examination of thyroid, JVP assessment',
      'Oral cavity examination',
      'Proceed to systemic examination after general examination',
    ],
    modelAnswer:
      'Systematic general examination begins with observing general appearance including built, nourishment, consciousness level, and posture. Record vital signs: pulse (rate, rhythm, volume), blood pressure, respiratory rate, temperature, and oxygen saturation. Check for pallor, icterus, cyanosis, clubbing, lymphadenopathy, and edema systematically. Examine the thyroid, oral cavity, and assess JVP. Only after a thorough general examination should one proceed to systemic examination of cardiovascular, respiratory, abdominal, and nervous systems.',
    followUpQuestions: [
      'What does the presence of clubbing suggest?',
      'How do you differentiate central from peripheral cyanosis?',
    ],
    pihuHint: 'PICCLE — Pallor, Icterus, Cyanosis, Clubbing, Lymphadenopathy, Edema — check all six on every patient, every time!',
    marks: 5,
  },
  {
    id: 'basic_examination_skills-medium',
    subjectSlug: 'clinical_postings',
    topicSlug: 'basic_examination_skills',
    difficulty: 'medium',
    question: 'Describe the technique of abdominal examination. What findings would you expect in a patient with cirrhosis of the liver?',
    expectedKeyPoints: [
      'Sequence: inspection, palpation, percussion, auscultation',
      'Inspection: shape, movements, scars, veins, hernial sites',
      'Palpation: superficial then deep, liver, spleen, kidneys, masses',
      'Percussion: liver span, shifting dullness for ascites',
      'Cirrhosis findings: hepatomegaly (shrunken in advanced), splenomegaly, ascites',
      'Caput medusae, spider naevi, palmar erythema, jaundice',
    ],
    modelAnswer:
      'Abdominal examination follows: inspection (distension, caput medusae, scars), palpation (tender hepatomegaly initially then shrunken liver, splenomegaly), percussion (shifting dullness and fluid thrill for ascites, reduced liver span in advanced disease), and auscultation (venous hum at umbilicus). In cirrhosis, expect signs of portal hypertension (splenomegaly, ascites, caput medusae), liver cell failure (jaundice, palmar erythema, spider naevi, gynecomastia, testicular atrophy), and features of decompensation (encephalopathy).',
    followUpQuestions: [
      'How do you elicit shifting dullness?',
      'What is the clinical significance of spider naevi distribution?',
    ],
    pihuHint: 'Cirrhosis shows the dual face of portal hypertension and liver failure — know both sets of signs and you own this case!',
    marks: 8,
  },
  {
    id: 'basic_examination_skills-hard',
    subjectSlug: 'clinical_postings',
    topicSlug: 'basic_examination_skills',
    difficulty: 'hard',
    question: 'A patient presents with unilateral leg swelling. Describe your systematic examination approach to determine the cause and list the differential diagnoses you would consider.',
    expectedKeyPoints: [
      'Inspect: extent, skin changes (redness, warmth, trophic changes), ulcers, varicosities',
      'Palpate: pitting vs non-pitting, tenderness over calf (DVT), inguinal lymph nodes',
      'Measure: circumference comparison at fixed points on both legs',
      'DVT: Homan sign (unreliable), tender calf, increased warmth',
      'Differentials: DVT, lymphedema, cellulitis, chronic venous insufficiency, filariasis, lipedema',
      'Systemic exam: cardiac, renal, hepatic causes cause bilateral edema',
    ],
    modelAnswer:
      'Examine systematically: inspect for unilateral extent, skin color, temperature, varicosities, and ulcers. Palpate for tenderness along the deep vein pathway, measure and compare leg circumference. Check inguinal lymph nodes and popliteal fossa. Key differentials include DVT (acute onset, warm, tender, Homan sign), cellulitis (erythema, warmth, fever), lymphedema (non-pitting, skin thickening, positive Stemmer sign), chronic venous insufficiency (pigmentation, lipodermatosclerosis), and filariasis (endemic areas). Unilateral presentation makes systemic causes (cardiac, renal, hepatic) unlikely. Wells score helps stratify DVT risk.',
    followUpQuestions: [
      'What is the Wells score for DVT probability?',
      'How would you confirm suspected DVT?',
    ],
    pihuHint: 'Unilateral swelling is the key — bilateral means systemic, unilateral means local cause like DVT, lymphedema, or cellulitis!',
    marks: 10,
  },

  // ============================================================
  // CLINICAL POSTINGS — community_visits_field_surveys
  // ============================================================
  {
    id: 'community_visits_field_surveys-easy',
    subjectSlug: 'clinical_postings',
    topicSlug: 'community_visits_field_surveys',
    difficulty: 'easy',
    question: 'What is a community health survey? What are the steps in conducting a health survey in a village?',
    expectedKeyPoints: [
      'Community health survey: systematic collection of health data from a defined population',
      'Step 1: Define objectives and select the study area',
      'Step 2: Design the survey questionnaire',
      'Step 3: Train the field workers and conduct pilot testing',
      'Step 4: Collect data through house-to-house visits',
      'Step 5: Analyze data and prepare a report with recommendations',
    ],
    modelAnswer:
      'A community health survey systematically collects health data from a defined population to assess health status and needs. Steps include: defining clear objectives, selecting the study area and sample size, designing a validated questionnaire, training field workers and pilot testing the tool, conducting house-to-house data collection, analyzing data using appropriate statistical methods, and preparing a report with actionable recommendations for local health authorities.',
    followUpQuestions: [
      'What sampling methods can be used in a community survey?',
      'What are the common sources of bias in community health surveys?',
    ],
    pihuHint: 'A health survey is just going door-to-door with a plan — define what you want to know, ask the right questions, and crunch the numbers!',
    marks: 5,
  },
  {
    id: 'community_visits_field_surveys-medium',
    subjectSlug: 'clinical_postings',
    topicSlug: 'community_visits_field_surveys',
    difficulty: 'medium',
    question: 'During a community visit, you are asked to assess the nutritional status of children under 5 years. Describe the methods and indicators you would use.',
    expectedKeyPoints: [
      'Anthropometric measurements: weight, height/length, MUAC',
      'Weight-for-age: underweight indicator (WHO z-scores)',
      'Height-for-age: stunting indicator (chronic malnutrition)',
      'Weight-for-height: wasting indicator (acute malnutrition)',
      'MUAC: mid-upper arm circumference for rapid screening (SAM if <11.5 cm)',
      'Clinical assessment: signs of vitamin deficiencies, edema for kwashiorkor',
    ],
    modelAnswer:
      'Assess nutritional status using anthropometry: weight-for-age (identifies underweight), height-for-age (identifies stunting — chronic malnutrition), weight-for-height (identifies wasting — acute malnutrition). Use WHO growth standards z-scores for classification. MUAC is a rapid screening tool: less than 11.5 cm indicates severe acute malnutrition in 6-59 month children. Supplement with clinical examination for micronutrient deficiencies (Bitot spots, angular stomatitis, dental caries) and check for bilateral pedal edema indicating kwashiorkor.',
    followUpQuestions: [
      'What is the WHO classification of malnutrition using z-scores?',
      'How does MUAC screening help in field settings?',
    ],
    pihuHint: 'Weight-for-age = underweight, height-for-age = stunting, weight-for-height = wasting — three combos, three problems, know them all!',
    marks: 8,
  },
  {
    id: 'community_visits_field_surveys-hard',
    subjectSlug: 'clinical_postings',
    topicSlug: 'community_visits_field_surveys',
    difficulty: 'hard',
    question: 'You are conducting a field survey and find that 40% of households in a village lack access to safe drinking water and 60% practice open defecation. Design an intervention plan addressing these public health issues.',
    expectedKeyPoints: [
      'Assess current water sources and contamination levels',
      'Intervention: install hand pumps, rainwater harvesting, community water purification',
      'Swachh Bharat Mission integration for toilet construction and behavior change',
      'IEC (Information Education Communication) for behavior change',
      'Train village health workers and panchayat members',
      'Monitor through regular water quality testing and WASH indicators',
    ],
    modelAnswer:
      'Design a multi-pronged intervention: for water, test existing sources for contamination, install bore wells or hand pumps, promote household water treatment (chlorination, filtration), and establish community water purification systems. For sanitation, leverage Swachh Bharat Mission for toilet construction, conduct IEC campaigns using local language and culture, train community health workers as WASH champions, involve panchayat leadership, and implement CLTS (Community-Led Total Sanitation) approach. Monitor through periodic water quality testing and sanitation coverage surveys. Address community barriers including cost, beliefs, and gender-specific sanitation needs.',
    followUpQuestions: [
      'What is the CLTS approach and how does it work?',
      'How would you evaluate the success of this intervention after one year?',
    ],
    pihuHint: 'Safe water plus toilets plus behavior change is the WASH trifecta — build it, teach it, and monitor it for lasting impact!',
    marks: 10,
  },

  // ============================================================
  // CLINICAL POSTINGS — public_health_programs_practical
  // ============================================================
  {
    id: 'public_health_programs_practical-easy',
    subjectSlug: 'clinical_postings',
    topicSlug: 'public_health_programs_practical',
    difficulty: 'easy',
    question: 'What is the Universal Immunization Programme? List the vaccines given under UIP with their schedule.',
    expectedKeyPoints: [
      'UIP launched in 1985 to cover all infants and pregnant women',
      'BCG at birth, OPV at birth and 6/10/14 weeks, Hepatitis B at birth and 6/10/14 weeks',
      'Pentavalent (DPT+HepB+Hib) at 6/10/14 weeks',
      'Measles-Rubella at 9-12 months and 16-24 months',
      'IPV (Injectable Polio Vaccine) at 6 and 14 weeks',
      'DPT and OPV boosters at 16-24 months, DPT at 5-6 years, TT at 10 and 16 years',
    ],
    modelAnswer:
      'The Universal Immunization Programme covers all infants and pregnant women with free vaccination. Schedule: BCG, Hepatitis B birth dose, and OPV-0 at birth. Pentavalent, OPV, IPV, and Rotavirus vaccines at 6, 10, and 14 weeks. Measles-Rubella first dose at 9-12 months. Boosters of DPT, OPV, and MR at 16-24 months. DPT booster at 5-6 years. TT at 10 and 16 years. Pregnant women receive TT or Td. Recent additions include Pneumococcal conjugate vaccine and Rotavirus vaccine.',
    followUpQuestions: [
      'What is the cold chain and its importance in immunization?',
      'What are the recent additions to the UIP schedule?',
    ],
    pihuHint: 'UIP is the government\'s gift to every baby — BCG at birth, pentavalent at 6-10-14 weeks, MR at 9 months, boosters later!',
    marks: 5,
  },
  {
    id: 'public_health_programs_practical-medium',
    subjectSlug: 'clinical_postings',
    topicSlug: 'public_health_programs_practical',
    difficulty: 'medium',
    question: 'You are posted at a Primary Health Centre. How would you organize and monitor the immunization services? What are the common challenges?',
    expectedKeyPoints: [
      'Microplan: list of beneficiaries, session sites, outreach areas',
      'Cold chain maintenance: monitor temperature (2-8 degrees C), avoid freezing',
      'Session planning: fixed site and outreach sessions per schedule',
      'Recording: maintain immunization register, mother-child protection card',
      'Monitoring: coverage evaluation, drop-out rate analysis',
      'Challenges: vaccine hesitancy, cold chain breaks, tracking migrants, drop-outs',
    ],
    modelAnswer:
      'Organize immunization through micro-planning: enumerate all eligible beneficiaries, plan session sites (fixed at PHC and outreach), and ensure cold chain equipment functions between 2-8 degrees Celsius. Conduct sessions as per national schedule, maintain immunization registers and tracking systems, calculate coverage and drop-out rates. Key challenges include vaccine hesitancy requiring targeted communication, cold chain breaks especially in remote areas, tracking migrant populations, high drop-out rates between first and third doses, and adverse events following immunization requiring prompt management and reporting.',
    followUpQuestions: [
      'How do you calculate drop-out rate between vaccines?',
      'What is AEFI and how should it be managed?',
    ],
    pihuHint: 'Microplan plus cold chain plus tracking equals successful immunization — break any of these three and coverage drops!',
    marks: 8,
  },
  {
    id: 'public_health_programs_practical-hard',
    subjectSlug: 'clinical_postings',
    topicSlug: 'public_health_programs_practical',
    difficulty: 'hard',
    question: 'You are the Medical Officer of a PHC in a malaria-endemic area. There is a sudden spike in malaria cases. How would you investigate and manage this outbreak?',
    expectedKeyPoints: [
      'Confirm diagnosis: rapid diagnostic tests and blood smear microscopy',
      'Determine if it is P. vivax or P. falciparum (treatment differs)',
      'Investigate: source mapping, breeding site identification, travel history',
      'Case management: ACT for falciparum, chloroquine + primaquine for vivax',
      'Vector control: indoor residual spraying (IRS), insecticide-treated bed nets (ITNs)',
      'Community surveillance: active case detection through ASHA workers',
    ],
    modelAnswer:
      'Investigate the spike by confirming cases with RDT/microscopy, identifying Plasmodium species, and mapping cases to identify transmission hotspots and breeding sites. Implement immediate case management: ACT for P. falciparum, chloroquine plus primaquine (after G6PD testing) for P. vivax. Launch vector control: emergency IRS with pyrethroid, distribute ITNs, larval source management. Activate surveillance through ASHA workers for active case detection. Coordinate with district malaria officer for additional resources. Monitor for treatment failures and drug resistance.',
    followUpQuestions: [
      'Why is G6PD testing important before prescribing primaquine?',
      'What is the role of intermittent preventive treatment in malaria endemic areas?',
    ],
    pihuHint: 'Malaria outbreak means test-treat-spray-sleep under nets — confirm species, treat right, kill mosquitoes, and protect the community!',
    marks: 10,
  },
];

export const totalVivaQuestions: number = vivaQuestions.length;
