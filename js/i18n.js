/* ================================================================
   ABE Consulting SARL — i18n (FR / EN)
   Usage : data-i18n="key" sur les éléments à traduire
           data-i18n-placeholder="key" pour les placeholders
           data-i18n-html="key" pour le innerHTML (avec balises)
   ================================================================ */

'use strict';

const translations = {

  /* ── NAVIGATION ─────────────────────────────────────────────── */
  nav_services:      { fr: 'Services',        en: 'Services' },
  nav_about:         { fr: 'À propos',        en: 'About' },
  nav_approach:      { fr: 'Approche',        en: 'Approach' },
  nav_testimonials:  { fr: 'Témoignages',     en: 'Testimonials' },
  nav_faq:           { fr: 'FAQ',             en: 'FAQ' },
  nav_contact:       { fr: 'Contact',         en: 'Contact' },
  nav_client_space:  { fr: 'Espace client',   en: 'Client Portal' },
  nav_book:          { fr: 'Prendre RDV',     en: 'Book a Call' },

  /* ── HERO ────────────────────────────────────────────────────── */
  hero_eyebrow:      { fr: 'Cabinet certifié – Douala, Cameroun', en: 'Certified Firm – Douala, Cameroon' },
  hero_title_1:      { fr: 'Maîtrisez vos',   en: 'Master your' },
  hero_title_grad1:  { fr: 'finances,',        en: 'finances,' },
  hero_title_2:      { fr: 'accélérez votre', en: 'accelerate your' },
  hero_title_grad2:  { fr: 'croissance.',      en: 'growth.' },
  hero_sub:          { fr: 'ABE Consulting SARL accompagne les entreprises camerounaises et internationales dans leur gestion comptable, fiscale et financière — avec rigueur et proximité.', en: 'ABE Consulting SARL supports Cameroonian and international businesses in their accounting, tax, and financial management — with rigour and proximity.' },
  hero_cta1:         { fr: 'Consultation gratuite', en: 'Free Consultation' },
  hero_cta2:         { fr: 'Nos services',    en: 'Our services' },
  hero_stat1_label:  { fr: 'Clients accompagnés', en: 'Clients served' },
  hero_stat2_label:  { fr: "Années d'expertise",  en: 'Years of expertise' },
  hero_stat3_label:  { fr: "Domaines d'activité", en: 'Areas of expertise' },

  /* ── SERVICES ─────────────────────────────────────────────────  */
  sec_services_tag:  { fr: 'Nos domaines',    en: 'Our domains' },
  sec_services_h2:   { fr: 'Une expertise pluridisciplinaire<br />à votre service', en: 'Multidisciplinary expertise<br />at your service' },
  sec_services_lead: { fr: 'Un accompagnement global, de la tenue comptable à la stratégie fiscale, pour toutes les étapes de la vie de votre entreprise.', en: 'Comprehensive support, from bookkeeping to tax strategy, for every stage of your business.' },

  svc1_title:  { fr: 'Comptabilité',          en: 'Accounting' },
  svc1_desc:   { fr: 'Tenue et révision comptable, bilans et états financiers conformes au SYSCOHADA révisé.', en: 'Bookkeeping, financial statements, and accounts compliant with the revised SYSCOHADA standard.' },
  svc1_li1:    { fr: 'Tenue des livres comptables',  en: 'Bookkeeping' },
  svc1_li2:    { fr: 'Bilans & états financiers',    en: 'Balance sheets & financial statements' },
  svc1_li3:    { fr: 'Rapprochements bancaires',     en: 'Bank reconciliations' },
  svc1_li4:    { fr: "Clôture des exercices",        en: 'Year-end closing' },
  svc_more:    { fr: 'En savoir plus',               en: 'Learn more' },

  svc2_title:  { fr: 'Audit & Contrôle',      en: 'Audit & Control' },
  svc2_desc:   { fr: "Audit légal et contractuel, contrôle interne et évaluation des risques pour vos investisseurs et partenaires.", en: "Legal and contractual audit, internal control, and risk assessment for your investors and partners." },
  svc2_li1:    { fr: 'Audit légal des comptes',  en: 'Legal audit of accounts' },
  svc2_li2:    { fr: 'Contrôle interne',         en: 'Internal control' },
  svc2_li3:    { fr: 'Analyse des risques',      en: 'Risk analysis' },
  svc2_li4:    { fr: "Rapports d'audit certifiés", en: 'Certified audit reports' },

  svc3_title:  { fr: 'Fiscalité',             en: 'Taxation' },
  svc3_desc:   { fr: "Déclarations fiscales, optimisation légale et assistance lors des contrôles de la Direction Générale des Impôts.", en: "Tax returns, legal tax optimization, and assistance during DGI tax audits." },
  svc3_li1:    { fr: 'Déclarations IS, TVA, IRPP',  en: 'CIT, VAT, PIT returns' },
  svc3_li2:    { fr: 'Optimisation fiscale',         en: 'Tax optimization' },
  svc3_li3:    { fr: 'Assistance contrôle DGI',      en: 'DGI audit assistance' },
  svc3_li4:    { fr: 'Contentieux fiscal',           en: 'Tax litigation' },

  svc4_title:  { fr: 'Formation Professionnelle', en: 'Professional Training' },
  svc4_desc:   { fr: "Formations sur mesure pour renforcer les compétences de vos équipes comptables, financières et managériales.", en: "Tailored training to strengthen your accounting, financial, and managerial teams." },
  svc4_li1:    { fr: 'SYSCOHADA révisé',       en: 'Revised SYSCOHADA' },
  svc4_li2:    { fr: 'Fiscalité pratique DGI', en: 'Practical DGI taxation' },
  svc4_li3:    { fr: 'Logiciels comptables',   en: 'Accounting software' },
  svc4_li4:    { fr: 'Gestion financière',     en: 'Financial management' },

  svc5_title:  { fr: 'Conseil en Gestion',    en: 'Management Consulting' },
  svc5_desc:   { fr: "Création d'entreprise, business plan, restructuration financière et tableaux de bord pour piloter votre activité.", en: "Business creation, business plans, financial restructuring, and dashboards to steer your activity." },
  svc5_li1:    { fr: 'Création & immatriculation', en: 'Business creation & registration' },
  svc5_li2:    { fr: 'Business plan & prévisionnel', en: 'Business plan & forecast' },
  svc5_li3:    { fr: 'Tableaux de bord',       en: 'Management dashboards' },
  svc5_li4:    { fr: 'Restructuration financière', en: 'Financial restructuring' },

  svc6_title:  { fr: 'Commerce & Import-Export', en: 'Trade & Import-Export' },
  svc6_desc:   { fr: "Accompagnement des opérations commerciales, d'import-export et des transactions immobilières et mobilières.", en: "Support for commercial operations, import-export, and real estate or movable asset transactions." },
  svc6_li1:    { fr: "Opérations d'import-export", en: 'Import-export operations' },
  svc6_li2:    { fr: 'Transactions commerciales',  en: 'Commercial transactions' },
  svc6_li3:    { fr: 'Immobilier & foncier',        en: 'Real estate & land' },
  svc6_li4:    { fr: 'Agriculture & élevage',       en: 'Agriculture & livestock' },

  svc_top_badge: { fr: 'Top service',   en: 'Top service' },

  /* ── STATS ───────────────────────────────────────────────────── */
  stat1_label: { fr: 'Clients accompagnés', en: 'Clients served' },
  stat2_label: { fr: "Années d'expertise",  en: 'Years of expertise' },
  stat3_label: { fr: 'Missions réalisées',  en: 'Missions completed' },
  stat4_label: { fr: 'Conformité fiscale',  en: 'Tax compliance' },

  /* ── ABOUT ───────────────────────────────────────────────────── */
  sec_about_tag:    { fr: 'Qui sommes-nous',  en: 'Who we are' },
  sec_about_h2:     { fr: 'Un cabinet au service de vos ambitions', en: 'A firm at the service of your ambitions' },
  about_p1:         { fr: 'Fondée en 2022 et immatriculée au Registre du Commerce de Douala-Bonanjo sous le numéro <strong>RC/DLBB/2022/B/16/6</strong>, <strong>ABE Consulting SARL</strong> est un cabinet pluridisciplinaire qui accompagne les entreprises dans la maîtrise de leurs enjeux comptables, fiscaux et financiers.', en: 'Founded in 2022 and registered with the Douala-Bonanjo Trade Register under number <strong>RC/DLBB/2022/B/16/6</strong>, <strong>ABE Consulting SARL</strong> is a multidisciplinary firm that helps businesses master their accounting, tax, and financial challenges.' },
  about_p2:         { fr: 'Dirigé par <strong>M. Charly TEMGOUA</strong>, notre équipe allie rigueur professionnelle et connaissance approfondie du droit OHADA et de la réglementation fiscale camerounaise.', en: 'Led by <strong>Mr. Charly TEMGOUA</strong>, our team combines professional rigour with in-depth knowledge of OHADA law and Cameroonian tax regulations.' },
  val1_title:       { fr: 'Intégrité',   en: 'Integrity' },
  val1_desc:        { fr: "Respect strict des normes professionnelles et de la déontologie du métier.", en: "Strict adherence to professional standards and the ethics of our profession." },
  val2_title:       { fr: 'Excellence',  en: 'Excellence' },
  val2_desc:        { fr: "Qualité irréprochable à chaque mission, avec un soin particulier du détail.", en: "Flawless quality on every engagement, with particular attention to detail." },
  val3_title:       { fr: 'Proximité',   en: 'Proximity' },
  val3_desc:        { fr: "Un interlocuteur dédié, disponible et réactif pour chaque client.", en: "A dedicated, available, and responsive contact person for every client." },
  about_cta:        { fr: 'Parler à un expert', en: 'Talk to an expert' },
  about_float1_title: { fr: 'Conformité DGI', en: 'DGI Compliance' },
  about_float1_sub:   { fr: 'CDI Douala 2 – À jour', en: 'CDI Douala 2 – Up to date' },
  about_float2_title: { fr: 'Akwa, Douala',  en: 'Akwa, Douala' },
  about_float2_sub:   { fr: 'BP 15609 Douala', en: 'PO Box 15609 Douala' },

  /* ── PROCESS ─────────────────────────────────────────────────── */
  sec_process_tag:   { fr: 'Notre approche',    en: 'Our approach' },
  sec_process_h2:    { fr: 'Comment nous travaillons', en: 'How we work' },
  sec_process_lead:  { fr: 'Un processus clair, transparent et centré sur vos résultats.', en: 'A clear, transparent process focused on your results.' },
  proc1_title: { fr: 'Premier contact',            en: 'First contact' },
  proc1_desc:  { fr: "Échange gratuit pour comprendre vos besoins, votre secteur et vos enjeux actuels.", en: "Free exchange to understand your needs, your sector, and your current challenges." },
  proc2_title: { fr: 'Proposition sur mesure',     en: 'Tailored proposal' },
  proc2_desc:  { fr: "Offre personnalisée avec périmètre de mission, calendrier et honoraires transparents.", en: "Personalised offer with mission scope, timeline, and transparent fees." },
  proc3_title: { fr: 'Exécution & Suivi',          en: 'Execution & Follow-up' },
  proc3_desc:  { fr: "Réalisation rigoureuse avec reporting régulier et accès à votre espace client dédié.", en: "Rigorous execution with regular reporting and access to your dedicated client portal." },
  proc4_title: { fr: 'Rapport & Recommandations',  en: 'Report & Recommendations' },
  proc4_desc:  { fr: "Livraison des travaux avec analyse et conseils pour optimiser votre situation.", en: "Delivery of work with analysis and advice to optimise your situation." },

  /* ── TESTIMONIALS ────────────────────────────────────────────── */
  sec_testi_tag:   { fr: 'Témoignages',  en: 'Testimonials' },
  sec_testi_h2:    { fr: 'Ce que disent nos clients', en: 'What our clients say' },
  sec_testi_lead:  { fr: "Des entreprises de toutes tailles nous font confiance pour leur comptabilité et leur gestion fiscale.", en: "Businesses of all sizes trust us for their accounting and tax management." },
  testi1_quote: { fr: "ABE Consulting a complètement transformé notre gestion comptable. Leur maîtrise du SYSCOHADA révisé et des obligations fiscales camerounaises est remarquable. Un service vraiment professionnel.", en: "ABE Consulting completely transformed our accounting management. Their mastery of the revised SYSCOHADA and Cameroonian tax obligations is remarkable. A truly professional service." },
  testi1_name:  { fr: "Jean-Baptiste MFOU",  en: "Jean-Baptiste MFOU" },
  testi1_role:  { fr: "Directeur Commercial – ABC Négoce SARL, Douala", en: "Sales Director – ABC Négoce SARL, Douala" },
  testi2_quote: { fr: "Leur expertise fiscale nous a permis d'économiser considérablement lors du contrôle DGI. ABE Consulting connaît parfaitement la réglementation et sait défendre ses clients. Je recommande vivement.", en: "Their tax expertise allowed us to save considerably during the DGI audit. ABE Consulting knows the regulations perfectly and knows how to defend its clients. I highly recommend." },
  testi2_name:  { fr: "Marie-Claire NZENGUE", en: "Marie-Claire NZENGUE" },
  testi2_role:  { fr: "DG – Import-Export Nzengue SARL, Akwa", en: "CEO – Import-Export Nzengue SARL, Akwa" },
  testi3_quote: { fr: "Partenaire de confiance depuis 2 ans. Disponibilité remarquable, réactivité et professionnalisme à toute épreuve. Nos comptes sont irréprochables et nous pouvons dormir tranquilles.", en: "A trusted partner for 2 years. Remarkable availability, responsiveness, and unwavering professionalism. Our accounts are impeccable and we can sleep soundly." },
  testi3_name:  { fr: "Paul KAMGA",  en: "Paul KAMGA" },
  testi3_role:  { fr: "PDG – Groupe Kamga Holding, Douala", en: "CEO – Kamga Holding Group, Douala" },
  testi4_quote: { fr: "La formation sur le SYSCOHADA organisée par ABE Consulting pour notre équipe a été excellente — très pratique et adaptée à notre réalité. Nos comptables ont fait des progrès spectaculaires.", en: "The SYSCOHADA training organised by ABE Consulting for our team was excellent — very practical and adapted to our reality. Our accountants made spectacular progress." },
  testi4_name:  { fr: "Sandrine MBATA", en: "Sandrine MBATA" },
  testi4_role:  { fr: "Fondatrice – StartupCM Technologies, Bonanjo", en: "Founder – StartupCM Technologies, Bonanjo" },

  /* ── FAQ ─────────────────────────────────────────────────────── */
  sec_faq_tag:  { fr: 'FAQ',  en: 'FAQ' },
  sec_faq_h2:   { fr: 'Questions fréquentes', en: 'Frequently asked questions' },
  sec_faq_lead: { fr: "Vous avez des questions ? Voici les réponses aux interrogations les plus courantes de nos clients.", en: "Have questions? Here are answers to our clients' most common queries." },
  faq1_q: { fr: "Comment se passe la première consultation ?", en: "How does the first consultation work?" },
  faq1_a: { fr: "Un premier entretien de diagnostic (gratuit, sans engagement) est proposé pour comprendre votre activité, vos besoins et vos enjeux actuels. Cet échange peut avoir lieu en présentiel à notre bureau à Akwa ou par téléphone/visio.", en: "A free, no-obligation diagnostic interview is offered to understand your business, needs, and current challenges. This meeting can take place in person at our Akwa office or by phone/video call." },
  faq2_q: { fr: "Quels sont vos tarifs et comment sont-ils calculés ?", en: "What are your fees and how are they calculated?" },
  faq2_a: { fr: "Nos honoraires sont adaptés à la taille de votre entreprise, à la nature et à la complexité des missions. Nous proposons des forfaits mensuels pour la tenue comptable et des devis sur mesure pour les missions d'audit, de fiscalité et de conseil.", en: "Our fees are tailored to the size of your company and the nature and complexity of the mission. We offer monthly packages for bookkeeping and custom quotes for audit, tax, and advisory engagements." },
  faq3_q: { fr: "Intervenez-vous uniquement à Douala ?", en: "Do you only operate in Douala?" },
  faq3_a: { fr: "Notre siège est à Akwa, Douala, mais nous accompagnons des clients dans tout le Cameroun. Pour les clients en dehors de Douala, nous travaillons à distance grâce à notre espace client sécurisé et nous nous déplaçons si nécessaire.", en: "Our headquarters are in Akwa, Douala, but we serve clients throughout Cameroon. For clients outside Douala, we work remotely through our secure client portal and travel on site when necessary." },
  faq4_q: { fr: "Comment garantissez-vous la confidentialité de mes données ?", en: "How do you guarantee the confidentiality of my data?" },
  faq4_a: { fr: "Nous respectons strictement les règles de confidentialité professionnelle. Toutes vos données financières et stratégiques sont traitées avec la plus grande discrétion, ne sont jamais partagées avec des tiers, et sont stockées de manière sécurisée.", en: "We strictly adhere to professional confidentiality rules. All your financial and strategic data is handled with the utmost discretion, never shared with third parties, and stored securely." },
  faq5_q: { fr: "Êtes-vous en règle avec la DGI et le RCCM ?", en: "Are you compliant with the DGI and RCCM?" },
  faq5_a: { fr: "Absolument. ABE Consulting SARL est immatriculée au RCCM sous le numéro RC/DLBB/2022/B/16/6, dispose d'un NIU officiel (M022217153629Y) et possède une attestation de conformité fiscale valide délivrée par le CDI Douala 2. Nous sommes à jour de toutes nos obligations légales.", en: "Absolutely. ABE Consulting SARL is registered with the RCCM under number RC/DLBB/2022/B/16/6, holds an official NIU (M022217153629Y), and has a valid tax compliance certificate issued by CDI Douala 2. We are up to date with all our legal obligations." },
  faq6_q: { fr: "Proposez-vous un espace client en ligne ?", en: "Do you offer an online client portal?" },
  faq6_a: { fr: "Oui ! Nos clients disposent d'un espace client sécurisé pour accéder à leurs documents (bilans, déclarations, rapports), suivre l'avancement de leurs missions et communiquer directement avec leur conseiller. Accédez-y via le bouton \"Espace client\" en haut de page.", en: "Yes! Our clients have access to a secure client portal to view their documents (balance sheets, returns, reports), track mission progress, and communicate directly with their advisor. Access it via the \"Client Portal\" button at the top of the page." },

  /* ── CTA BANNER ──────────────────────────────────────────────── */
  cta_tag:   { fr: "Passez à l'action",   en: 'Take action' },
  cta_h2:    { fr: "Prêt à transformer la gestion<br />de votre entreprise ?", en: "Ready to transform<br />your business management?" },
  cta_p:     { fr: "Rejoignez plus de 150 entreprises qui font confiance à ABE Consulting pour leur comptabilité, leur audit et leur fiscalité.", en: "Join over 150 businesses that trust ABE Consulting for their accounting, audit, and taxation." },
  cta_btn1:  { fr: 'Demander un devis gratuit', en: 'Request a free quote' },
  cta_btn2:  { fr: 'Nous appeler',             en: 'Call us' },
  cta_trust1: { fr: 'Certifiés & conformes DGI',     en: 'DGI certified & compliant' },
  cta_trust2: { fr: 'Données 100% confidentielles',  en: '100% confidential data' },
  cta_trust3: { fr: 'Réponse sous 24h',              en: 'Response within 24h' },
  cta_trust4: { fr: 'Basés à Akwa, Douala',          en: 'Based in Akwa, Douala' },

  /* ── CERTIFICATIONS ──────────────────────────────────────────── */
  sec_cert_tag:   { fr: 'Légalité & Confiance',    en: 'Legality & Trust' },
  sec_cert_h2:    { fr: 'Des garanties solides pour vos affaires', en: 'Solid guarantees for your business' },
  sec_cert_lead:  { fr: "ABE Consulting SARL est une entreprise légalement constituée, en règle avec toutes ses obligations légales et fiscales.", en: "ABE Consulting SARL is a legally incorporated company, compliant with all its legal and tax obligations." },
  cert1_title: { fr: 'RCCM Officiel',          en: 'Official RCCM' },
  cert1_label: { fr: 'Immatriculée au Greffe du Tribunal de Commerce de Douala-Bonanjo', en: 'Registered at the Douala-Bonanjo Commercial Court Registry' },
  cert2_title: { fr: 'Numéro Identifiant Unique', en: 'Unique Identification Number' },
  cert2_label: { fr: 'NIU attribué par la Direction Générale des Impôts du Cameroun', en: 'TIN assigned by Cameroon\'s Directorate General of Taxes' },
  cert3_title: { fr: 'Attestation Fiscale',    en: 'Tax Compliance Certificate' },
  cert3_value: { fr: 'Valide – CDI Douala 2',  en: 'Valid – CDI Douala 2' },
  cert3_label: { fr: "À jour de toutes les obligations fiscales et déclaratives", en: "Up to date with all tax and filing obligations" },
  cert4_title: { fr: 'Capital Social',         en: 'Share Capital' },
  cert4_label: { fr: 'SARL de droit camerounais – Gérant : Charly TEMGOUA', en: 'LLC under Cameroonian law – Manager: Charly TEMGOUA' },
  legal_note:  { fr: "ABE Consulting SARL est une Société à Responsabilité Limitée de droit camerounais constituée conformément aux dispositions de l'Acte Uniforme OHADA. Siège social : Akwa, Douala — BP 15609 Douala, Cameroun. Gérant : <strong>Charly TEMGOUA</strong> (né le 13/05/1990 à Dschang).", en: "ABE Consulting SARL is a Limited Liability Company under Cameroonian law, incorporated in accordance with the OHADA Uniform Act. Registered office: Akwa, Douala — PO Box 15609 Douala, Cameroon. Manager: <strong>Charly TEMGOUA</strong> (born 13/05/1990 in Dschang)." },

  /* ── CONTACT ─────────────────────────────────────────────────── */
  sec_contact_tag:   { fr: 'Parlons de votre projet', en: 'Let\'s discuss your project' },
  sec_contact_h2:    { fr: 'Contactez-nous',   en: 'Contact us' },
  sec_contact_lead:  { fr: "Nous répondons à toutes les demandes sous 24 heures ouvrées. Consultation initiale gratuite.", en: "We respond to all inquiries within 24 business hours. Free initial consultation." },
  contact_title:     { fr: 'Nos coordonnées',  en: 'Our contact details' },
  contact_sub:       { fr: 'Disponibles du lundi au vendredi de 8h à 18h et le samedi matin.', en: 'Available Monday to Friday from 8am to 6pm and Saturday morning.' },
  ci_address_label:  { fr: 'Adresse',          en: 'Address' },
  ci_phone_label:    { fr: 'Téléphone',        en: 'Phone' },
  ci_email_label:    { fr: 'Email',            en: 'Email' },
  ci_hours_label:    { fr: "Heures d'ouverture", en: 'Opening hours' },
  ci_hours_val:      { fr: 'Lun – Ven : 8h00 – 18h00<br />Samedi : 9h00 – 13h00', en: 'Mon – Fri: 8:00am – 6:00pm<br />Saturday: 9:00am – 1:00pm' },
  soc_wa:            { fr: 'WhatsApp',         en: 'WhatsApp' },
  soc_em:            { fr: 'Email direct',     en: 'Direct Email' },
  form_title:        { fr: 'Envoyer un message', en: 'Send a message' },
  form_sub:          { fr: 'Décrivez votre besoin et nous vous recontactons rapidement.', en: 'Describe your need and we will get back to you quickly.' },
  form_name:         { fr: 'Nom complet *',    en: 'Full name *' },
  form_company:      { fr: 'Entreprise',       en: 'Company' },
  form_email:        { fr: 'Email *',          en: 'Email *' },
  form_phone:        { fr: 'Téléphone',        en: 'Phone' },
  form_service:      { fr: 'Service souhaité *', en: 'Desired service *' },
  form_service_opt0: { fr: '— Sélectionnez un service —', en: '— Select a service —' },
  form_service_opt1: { fr: 'Comptabilité',     en: 'Accounting' },
  form_service_opt2: { fr: 'Audit & Contrôle', en: 'Audit & Control' },
  form_service_opt3: { fr: 'Fiscalité',        en: 'Taxation' },
  form_service_opt4: { fr: 'Formation Professionnelle', en: 'Professional Training' },
  form_service_opt5: { fr: 'Conseil en Gestion', en: 'Management Consulting' },
  form_service_opt6: { fr: 'Commerce & Import-Export', en: 'Trade & Import-Export' },
  form_service_opt7: { fr: 'Plusieurs services', en: 'Multiple services' },
  form_msg:          { fr: 'Votre message *',  en: 'Your message *' },
  form_submit:       { fr: 'Envoyer le message', en: 'Send message' },
  form_note:         { fr: 'Vos données sont traitées en toute confidentialité.', en: 'Your data is handled in strict confidence.' },
  form_success_title: { fr: 'Message envoyé !', en: 'Message sent!' },
  form_success_p:     { fr: 'Merci. Nous vous répondrons dans les 24 heures ouvrées.', en: 'Thank you. We will reply within 24 business hours.' },
  ph_name:    { fr: 'Jean Dupont',          en: 'John Doe' },
  ph_company: { fr: 'Ma Société SARL',      en: 'My Company Ltd' },
  ph_email:   { fr: 'vous@exemple.com',     en: 'you@example.com' },
  ph_phone:   { fr: '+237 6XX XXX XXX',     en: '+237 6XX XXX XXX' },
  ph_msg:     { fr: 'Décrivez votre besoin ou votre projet…', en: 'Describe your need or project…' },

  /* ── FOOTER ──────────────────────────────────────────────────── */
  footer_brand_p: { fr: "Cabinet pluridisciplinaire dédié à la comptabilité, l'audit, le contrôle et la fiscalité des entreprises au Cameroun.", en: "A multidisciplinary firm dedicated to accounting, audit, control, and taxation for businesses in Cameroon." },
  footer_col1_h:  { fr: 'Services',   en: 'Services' },
  footer_col2_h:  { fr: 'Cabinet',    en: 'Firm' },
  footer_col3_h:  { fr: 'Contact',    en: 'Contact' },
  footer_about:   { fr: 'À propos',   en: 'About' },
  footer_legal:   { fr: 'Conformité légale', en: 'Legal compliance' },
  footer_client:  { fr: 'Espace client',     en: 'Client Portal' },
  footer_contact: { fr: 'Contact',    en: 'Contact' },
  footer_copy:    { fr: '© 2024 ABE Consulting SARL. Tous droits réservés.', en: '© 2024 ABE Consulting SARL. All rights reserved.' },

  /* ── SERVICE PAGES COMMON ────────────────────────────────────── */
  svc_pg_breadcrumb_home:     { fr: 'Accueil',   en: 'Home' },
  svc_pg_breadcrumb_services: { fr: 'Services',  en: 'Services' },
  svc_pg_more_h2:  { fr: 'Explorez toutes nos expertises', en: 'Explore all our expertise' },
  svc_pg_more_tag: { fr: 'Autres services',  en: 'Other services' },
  svc_pg_devis:    { fr: 'Demander un devis', en: 'Request a quote' },
  svc_pg_call:     { fr: 'Nous appeler',      en: 'Call us' },
  svc_pg_freedevis:{ fr: 'Demander un devis gratuit', en: 'Request a free quote' },

};

/* ── Core engine ─────────────────────────────────────────────── */
const I18N = {

  current: localStorage.getItem('abe_lang') || 'fr',

  t(key) {
    const entry = translations[key];
    if (!entry) return key;
    return entry[this.current] || entry['fr'] || key;
  },

  apply() {
    const lang = this.current;

    // data-i18n → textContent
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const t = this.t(key);
      if (t !== key) el.textContent = t;
    });

    // data-i18n-html → innerHTML
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const t = this.t(key);
      if (t !== key) el.innerHTML = t;
    });

    // data-i18n-placeholder → placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const t = this.t(key);
      if (t !== key) el.placeholder = t;
    });

    // data-i18n-label → for label text inside .f-grp
    document.querySelectorAll('[data-i18n-label]').forEach(el => {
      const key = el.getAttribute('data-i18n-label');
      const t = this.t(key);
      if (t !== key) el.textContent = t;
    });

    // Update <html lang>
    document.documentElement.lang = lang;

    // Update toggle buttons
    document.querySelectorAll('.lang-toggle').forEach(btn => {
      const fr = btn.querySelector('.lang-fr');
      const en = btn.querySelector('.lang-en');
      if (!fr || !en) return;
      if (lang === 'fr') {
        fr.classList.add('active');
        en.classList.remove('active');
      } else {
        en.classList.add('active');
        fr.classList.remove('active');
      }
    });
  },

  set(lang) {
    this.current = lang;
    localStorage.setItem('abe_lang', lang);
    this.apply();
  },

  toggle() {
    this.set(this.current === 'fr' ? 'en' : 'fr');
  },

  init() {
    this.apply();
    // Expose globally
    window.setLang = (l) => this.set(l);
    window.toggleLang = () => this.toggle();
  }
};

document.addEventListener('DOMContentLoaded', () => I18N.init());
