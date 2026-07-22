export const confData = {
  name: "ICICCT2027",
  fullName: "International Conference on Intelligent Communications and Computing Technologies",
  date: "April 1 - 2, 2027",
  location: "SXCCE",

  importantDates: [
    { title: "Full paper submission deadline", date: "1st November 2026", passed: false },
    { title: "Paper Acceptance Intimation", date: "15th December 2026", passed: false },
    { title: "Last date for registration and Camera Ready Paper Submission", date: "15th January 2027", passed: false },
    { title: "Date of Conference", date: "1st to 2nd April 2027", passed: false }
  ],

  speakers: [
    {
      id: 1,
      name: "Dr. Gabriel Gomes de Oliveira",
      role: "Keynote Speaker",
      affiliation: "UNICAMP, Brazil",
      topic: "TBA",
      image: "/images/Speakers/Dr. Gabriel Gomes de Oliveira.jpg",
      bio: "Speaker biography will be announced soon."
    },
    {
      id: 2,
      name: "Dr. D. Jude Hemanth",
      role: "Keynote Speaker",
      affiliation: "Karunya University, India",
      topic: "TBA",
      image: "/images/Speakers/Dr. D. Jude Hemanth.jpg",
      bio: "Speaker biography will be announced soon."
    }
  ],

  committees: {
    patrons: [
      { name: "Most Rev. Dr. Albert G.A. Anasthas", affiliation: "Chairman,\nSt. Xavier's Catholic College of Engineering\n(Autonomous), India", image: "/images/Patrons/Chairman.png" },
      { name: "Rev. Fr. S. Godwin Selva Justus", affiliation: "Correspondent,\nSt. Xavier's Catholic College of Engineering\n(Autonomous), India", image: "/images/Patrons/Correspondent.jpg" },
      { name: "Dr. J. Maheswaran", affiliation: "Principal,\nSt. Xavier's Catholic College of Engineering\n(Autonomous), India", image: "/images/Patrons/Principal.jpg" },
      { name: "Rev. Fr. A. Ranjeeth", affiliation: "Financial Administrator,\nSt. Xavier's Catholic College of Engineering\n(Autonomous), India", image: "/images/Patrons/Financial Administrator.jpg" }

    ],
    coPatrons: [
      { name: "Dr. V. Christus Jeya Singh", affiliation: "Vice Principal & Dean (Student Affairs),\nSt. Xavier's Catholic College of Engineering\n(Autonomous), India", image: "/images/Co-patrons/Christus Jeya Singh.jpg" },
      { name: "Dr. A. Milton", affiliation: "Controller of Examinations,\nSt. Xavier's Catholic College of Engineering\n(Autonomous), India", image: "/images/Co-patrons/Dr. A. Milton.jpg" },
      { name: "Dr. R.P. Anto Kumar", affiliation: "Dean (Academics),\nSt. Xavier's Catholic College of Engineering\n(Autonomous), India", image: "/images/Co-patrons/Dr. R.P. Anto Kumar.jpg" },
      { name: "Dr. J. Annrose", affiliation: "Coordinator (IQAC),\nSt. Xavier's Catholic College of Engineering\n(Autonomous), India", image: "/images/Co-patrons/Dr. J. Annrose.jpg" },
      { name: "Mr. M. Anto Xavier Roche", affiliation: "Dean (Student Futuristic Services),\nSt. Xavier's Catholic College of Engineering\n(Autonomous), India", image: "/images/Co-patrons/Mr. M. Anto Xavier Roche.jpg" },
      { name: "Dr. C. Seldev Christopher", affiliation: "Dean (Research),\nSt. Xavier's Catholic College of Engineering\n(Autonomous), India", image: "/images/Co-patrons/Dr. C. Seldev Christopher.jpg" }


    ],
    organizingChairs: [
      { name: "Dr. Suja A. Alex", affiliation: "St. Xavier's Catholic College of Engineering (Autonomous), India", image: "/images/organizingChairs/Dr. Suja A. Alex.jpg" },
      { name: "Dr. Mainak Adhikari", affiliation: "IISER Thiruvananthapuram, India", image: "/images/organizingChairs/Dr. Mainak Adhikari.jpg" },
      { name: "Dr. D. Jude Hemanth", affiliation: "Karunya University, India", image: "/images/Speakers/Dr. D. Jude Hemanth.jpg" },
      { name: "Dr. Gabriel Gomes de Oliveira", affiliation: "UNICAMP, Brazil", image: "/images/organizingChairs/Dr. Gabriel Gomes de Oliveira.jpg" }
    ],
    advisoryCommittee: [
      // --- Foreign (Non-Indian) ---
      { name: "Prof. Thierry Oscar Edoh", affiliation: "Department of Applied Software Engineering, Technical University of Munich, Munich, Germany" },
      { name: "Prof. Diego Paredes", affiliation: "Universidad de Zaragoza, Spain" },
      { name: "Prof. Francisco Pérez", affiliation: "Universitat Politécnica de Valencia, Spain" },
      { name: "Prof. Vlademir de Jesus Silva Oliveira", affiliation: "UNEMAT/Sinop, Brazil" },
      { name: "Prof. Vania Vieira Estrela", affiliation: "UFF, Brazil" },
      { name: "Prof. Claudia Pezzuto", affiliation: "PUC CAMPINAS, Brazil" },
      { name: "Prof. Angela del Pilar Flores Granados", affiliation: "FEA/UNICAMP, Brazil" },
      { name: "Lia Toledo Moreira Mota", affiliation: "PUC/Campinas, Brazil" },
      { name: "Prof. Antonio Carlos Demanboro", affiliation: "PUC CAMPINAS, Brazil" },
      { name: "Prof. Dr. Gaby Patrícia Teran Ortiz", affiliation: "IFMG, Brazil" },
      { name: "Prof Dr. Eduardo Cavalcanti", affiliation: "UFRN, Brazil" },
      { name: "Prof. Silva Neto", affiliation: "UERJ, Brazil" },
      { name: "Lucas Heitzmann Gabrielli", affiliation: "DECOM/FEEC/UNICAMP, Brazil" },
      { name: "Prof. Vania V. Estrela", affiliation: "Brazil" },
      { name: "Prof. Miguel Botto", affiliation: "Universidad de Guayaquil, Ecuador" },
      { name: "Prof. Ernesto Karlo Celi Arevalo", affiliation: "UNPRG, Lambayeque, Perú" },
      { name: "Prof. José M. Merigó", affiliation: "Universidad de Chile, Chile" },
      // --- Indian ---
      { name: "Prof. M. Tanveer", affiliation: "Indian Institute of Technology, Indore" },
      { name: "Dr. J. Jesu Vedha Nayahi J", affiliation: "Anna University Regional Campus Tirunelveli, India" },
      { name: "Dr. SGK. Manikandan", affiliation: "LPSC, ISRO, India" },
      { name: "Dr. K.Hareef baba shaeb", affiliation: "NRSC, ISRO, India" }
    ],
    programCommittee: [
      // --- USA ---
      { name: "Dr. Mustafa Kaddoura", affiliation: "University of Minnesota, US" },
      // --- Middle East ---
      { name: "Dr. Sanaa Kaddoura", affiliation: "Zayed University, Abu Dhabi" },
      { name: "Dr. Nadia", affiliation: "Zayed University, Abu Dhabi" },
      { name: "Dr. Suha Khalil Assayed", affiliation: "British University in Dubai (BUiD), Dubai" },
      { name: "Dr. Nabil Abdoun", affiliation: "Lebanese American University, Lebanon" },
      // --- Africa ---
      { name: "Dr. Ahmed Elngar", affiliation: "Beni-Suef University, Egypt" },
      // --- South America ---
      { name: "Prof. Alessandra Akkari", affiliation: "Universidade Presbiteriana Mackenzie" },
      // --- India ---
      { name: "Dr. Neha Singh", affiliation: "Chandigarh University, India" },
      { name: "Dr. Alkha Mohan", affiliation: "IIIT Kottayam, India" },
      { name: "Dr. Manasa Kulkarni", affiliation: "Christ University Bangalore, India" },
      { name: "Dr. S. Murali", affiliation: "VIT Vellore, India" },
      { name: "Dr. Mukesh Kumar", affiliation: "CGC University, Punjab, India" },
      { name: "Dr. S. Gnanavel", affiliation: "SRMIST Chennai, India" },
      { name: "Dr. Gavaskar S", affiliation: "SRM University-AP, India" },
      { name: "Dr. U. Kumaran", affiliation: "Amrita Vishwa Vidyapeetham, Bengaluru, India" },
      { name: "Prof. S. Neelakandan", affiliation: "R.M.K Engineering College, India" },
      { name: "Dr. V. Raji", affiliation: "SKP Engineering College, India" },
      { name: "Prof. Renu Vyaas", affiliation: "MIT ADT, India" },
      { name: "Dr. Surjeet Dalal", affiliation: "Amity University Haryana, India" },
      { name: "Dr. Mayuri Mehta", affiliation: "India" },
      { name: "Dr. Hikku G. S", affiliation: "Chettinad Academy of Research & Education, India" },
      { name: "Dr. Ananth J P", affiliation: "Dayananda Sagar University, Bengaluru, India" },
      { name: "Prof. Sanjiv Kumar Jain", affiliation: "Medicaps University, India" }
    ],
    publicityChair: [
      { name: "Prof. Paulo Waldir Tardioli", affiliation: "UFSCAR, Brazil", image: "/images/publicityChair/Prof. Paulo Waldir Tardioli.jpg" }
    ],
    localOrganizingCommittee: [
      { name: "Dr. D. Hevin Rajesh", affiliation: "St. Xavier's Catholic College of Engineering (Autonomous), India" },
      { name: "Dr. J. Annrose", affiliation: "St. Xavier's Catholic College of Engineering (Autonomous), India" },
      { name: "Dr. G. Sahaya Stalin Jose", affiliation: "St. Xavier's Catholic College of Engineering (Autonomous), India" },
      { name: "Er. T.M. Angelin Monisha Sharean", affiliation: "St. Xavier's Catholic College of Engineering (Autonomous), India" },
      { name: "Dr. M. Antony Joans Kumar", affiliation: "St. Xavier's Catholic College of Engineering (Autonomous), India" },
      { name: "Dr. G. Geo Jenefer", affiliation: "St. Xavier's Catholic College of Engineering (Autonomous), India" },
      { name: "Er. P. Agnes Alex Rathy", affiliation: "St. Xavier's Catholic College of Engineering (Autonomous), India" },
      { name: "Dr. A. Arul Rex", affiliation: "St. Xavier's Catholic College of Engineering (Autonomous), India" },
      { name: "Er. P. Innasi Lineta", affiliation: "St. Xavier's Catholic College of Engineering (Autonomous), India" }
    ]
  },

  tracks: [
    {
      title: "Track 1: Generative AI",
      topics: ["Machine Learning and Deep Learning", "Generative AI and Large Language Models (LLMs)", "Prompt Engineering", "Retrieval-Augmented Generation (RAG)", "Explainable AI (XAI)", "Responsible and Trustworthy AI", "Federated Learning", "Reinforcement Learning", "AI Ethics and Governance"]
    },
    {
      title: "Track 2: NLP and Intelligent Analytics",
      topics: ["Data Mining and Big Data Analytics", "Natural Language Processing", "Question Answering Systems", "Information Retrieval", "Text Summarization", "Sentiment Analysis", "Knowledge Graphs", "Predictive Analytics", "Decision Support Systems"]
    },
    {
      title: "Track 3: Edge Computing, Cloud Computing, IoT, and Smart Systems",
      topics: ["Edge Intelligence", "Mobile Edge Computing", "Cloud and Distributed Computing", "Internet of Things (IoT)", "Industrial IoT", "Smart Cities and Smart Healthcare", "Resource Allocation and Scheduling", "Digital Twins", "Green and Sustainable Computing"]
    },
    {
      title: "Track 4: Computer Vision and Intelligent Applications",
      topics: ["Computer Vision and Image Processing", "Multimedia Analytics", "Augmented Reality (AR) and Virtual Reality (VR)", "Quantum Computing", "Robotics and Autonomous Systems", "Industry 5.0", "AI Applications in Healthcare, Finance, and Education", "Human-Computer Interaction", "Future Computing Technologies"]
    }
  ],

  pricing: [
    { category: "International Authors", fee: "$250" },
    { category: "National Authors", fee: "₹ 9,000" },
    { category: "National Students", fee: "₹ 6,000" },
    { category: "Listeners / Attendees", fee: "₹ 2,000" }
  ],

  schedule: [
    {
      day: "Day 1 (April 1, 2027)",
      events: [
        { time: "TBA", title: "Event to be announced" },
        { time: "TBA", title: "Event to be announced" },
        { time: "TBA", title: "Event to be announced" }
      ]
    },
    {
      day: "Day 2 (April 2, 2027)",
      events: [
        { time: "TBA", title: "Event to be announced" },
        { time: "TBA", title: "Event to be announced" },
        { time: "TBA", title: "Event to be announced" }
      ]
    }
  ],

  history: [
    { year: 2026, location: "TBA", attendees: 0, papers: 0 },
    { year: 2025, location: "TBA", attendees: 0, papers: 0 }
  ]
};

