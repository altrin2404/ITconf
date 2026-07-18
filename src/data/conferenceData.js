export const confData = {
  name: "ICICCT2027",
  fullName: "International Conference on Intelligent Communications and Computing Technologies",
  date: "April 1 - 2, 2027",
  location: "SXCCE",

  importantDates: [
    { title: "Full paper submission deadline", date: "15th October 2026", passed: false },
    { title: "Paper Acceptance Intimation", date: "16th November 2026", passed: false },
    { title: "Last date for registration and Camera Ready Paper Submission", date: "23rd November 2026", passed: false },
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
      { name: "Most Rev. Dr. Albert G.A. Anasthas", affiliation: "Chairman,\nSt. Xavier's Catholic College of Engineering\n(Autonomous), Nagercoil", image: "/images/Patrons/Chairman.png" },
      { name: "Rev. Fr. S. Godwin Selva Justus", affiliation: "Correspondent,\nSt. Xavier's Catholic College of Engineering\n(Autonomous), Nagercoil", image: "/images/Patrons/Correspondent.jpg" },
      { name: "Dr. J. Maheswaran", affiliation: "Principal,\nSt. Xavier's Catholic College of Engineering\n(Autonomous), Nagercoil", image: "/images/Patrons/Principal.jpg" },
      { name: "Rev. Fr. A. Ranjeeth", affiliation: "Financial Administrator,\nSt. Xavier's Catholic College of Engineering\n(Autonomous), Nagercoil", image: "/images/Patrons/Financial Administrator.jpg" }
    ],
    organizingChairs: [
      { name: "Dr. Suja A. Alex", affiliation: "St. Xavier's Catholic College of Engineering (Autonomous), Nagercoil, India", image: "/images/organizingChairs/Dr. Suja A. Alex.jpg" },
      { name: "Dr. Mainak Adhikari", affiliation: "IISER Thiruvananthapuram, India", image: "/images/organizingChairs/Dr. Mainak Adhikari.jpg" },
      { name: "Dr. D. Jude Hemanth", affiliation: "Karunya University, India", image: "/images/Speakers/Dr. D. Jude Hemanth.jpg" },
      { name: "Dr. Gabriel Gomes de Oliveira", affiliation: "UNICAMP, Brazil", image: "/images/organizingChairs/Dr. Gabriel Gomes de Oliveira.jpg" }
    ],
    advisoryCommittee: [
      { name: "Prof. Vlademir de Jesus Silva Oliveira", affiliation: "UNEMAT/Sinop" },
      { name: "Prof. Vania Vieira Estrela", affiliation: "UFF" },
      { name: "Prof. Claudia Pezzuto", affiliation: "PUC CAMPINAS" },
      { name: "Prof. Miguel Botto", affiliation: "Universidad de Guayaquil" },
      { name: "Prof. Angela del Pilar Flores Granados", affiliation: "FEA/UNICAMP" },
      { name: "Lia Toledo Moreira Mota", affiliation: "PUC/Campinas" },
      { name: "Prof. Thierry Oscar Edoh", affiliation: "Department of Applied Software Engineering, Technical University of Munich, Munich" },
      { name: "Prof. Ernesto Karlo Celi Arevalo", affiliation: "UNPRG, Lambayeque, Perú" },
      { name: "Prof. Diego Paredes", affiliation: "Universidad de Zaragoza" },
      { name: "Prof. Antonio Carlos Demanboro", affiliation: "PUC CAMPINAS" },
      { name: "Prof. José M. Merigó", affiliation: "Universidad de Chile" },
      { name: "Prof. Dr. Gaby Patrícia Teran Ortiz", affiliation: "IFMG" },
      { name: "Prof Dr. Eduardo Cavalcanti", affiliation: "UFRN" },
      { name: "Prof. Silva Neto", affiliation: "UERJ" },
      { name: "Prof. Francisco Pérez", affiliation: "Universitat Politécnica de Valencia" },
      { name: "Lucas Heitzmann Gabrielli", affiliation: "DECOM/FEEC/UNICAMP" },
      { name: "Prof. M. Tanveer", affiliation: "Indian Institute of Technology, Indore" },
      { name: "Prof. Vania V. Estrela", affiliation: "Brazil" },
      { name: "Dr. J. Jesu Vedha Nayahi J", affiliation: "Anna University Regional Campus Tirunelveli, India" },
      { name: "Dr. SGK. Manikandan", affiliation: "LPSC, ISRO, India" },
      { name: "Dr. K.Hareef baba shaeb", affiliation: "NRSC, ISRO, India" }
    ],
    programCommittee: [
      { name: "Dr. Sanaa Kaddoura", affiliation: "Zayed University, Abu Dhabi" },
      { name: "Dr. Nadia", affiliation: "Zayed University, Abu Dhabi" },
      { name: "Dr. Nabil Abdoun", affiliation: "Lebanese American University, Lebanon" },
      { name: "Dr. Suha Khalil Assayed", affiliation: "British University in Dubai (BUiD), Dubai" },
      { name: "Dr. Mustafa Kaddoura", affiliation: "University of Minnesota, US" },
      { name: "Prof. Alessandra Akkari", affiliation: "Universidade Presbiteriana Mackenzie" },
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
      { name: "Dr. Ahmed Elngar", affiliation: "Beni-Suef University, Egypt" },
      { name: "Prof. Sanjiv Kumar Jain", affiliation: "Medicaps University, India" }
    ],
    publicityChair: [
      { name: "Prof. Paulo Waldir Tardioli", affiliation: "UFSCAR", image: "/images/publicityChair/Prof. Paulo Waldir Tardioli.jpg" }
    ],
    localOrganizingCommittee: [
      { name: "Dr. D. Hevin Rajesh", affiliation: "St. Xavier's Catholic College of Engineering (Autonomous), Nagercoil, India" },
      { name: "Dr. J. Annrose", affiliation: "St. Xavier's Catholic College of Engineering (Autonomous), Nagercoil, India" },
      { name: "Dr. G. Sahaya Stalin Jose", affiliation: "St. Xavier's Catholic College of Engineering (Autonomous), Nagercoil, India" },
      { name: "Er. T.M. Angelin Monisha Sharean", affiliation: "St. Xavier's Catholic College of Engineering (Autonomous), Nagercoil, India" },
      { name: "Dr. M. Antony Joans Kumar", affiliation: "St. Xavier's Catholic College of Engineering (Autonomous), Nagercoil, India" },
      { name: "Dr. G. Geo Jenefer", affiliation: "St. Xavier's Catholic College of Engineering (Autonomous), Nagercoil, India" },
      { name: "Er. P. Agnes Alex Rathy", affiliation: "St. Xavier's Catholic College of Engineering (Autonomous), Nagercoil, India" },
      { name: "Dr. A. Arul Rex", affiliation: "St. Xavier's Catholic College of Engineering (Autonomous), Nagercoil, India" },
      { name: "Er. P. Innasi Lineta", affiliation: "St. Xavier's Catholic College of Engineering (Autonomous), Nagercoil, India" }
    ]
  },

  tracks: [
    {
      title: "Track 1: Artificial Intelligence, Machine Learning, and Generative AI",
      topics: ["Machine Learning and Deep Learning", "Generative AI and Large Language Models (LLMs)", "Prompt Engineering", "Retrieval-Augmented Generation (RAG)", "Explainable AI (XAI)", "Responsible and Trustworthy AI", "Federated Learning", "Reinforcement Learning", "AI Ethics and Governance"]
    },
    {
      title: "Track 2: Data Science, Natural Language Processing, and Intelligent Analytics",
      topics: ["Data Mining and Big Data Analytics", "Natural Language Processing", "Question Answering Systems", "Information Retrieval", "Text Summarization", "Sentiment Analysis", "Knowledge Graphs", "Predictive Analytics", "Decision Support Systems"]
    },
    {
      title: "Track 3: Edge Computing, Cloud Computing, IoT, and Smart Systems",
      topics: ["Edge Intelligence", "Mobile Edge Computing", "Cloud and Distributed Computing", "Internet of Things (IoT)", "Industrial IoT", "Smart Cities and Smart Healthcare", "Resource Allocation and Scheduling", "Digital Twins", "Green and Sustainable Computing"]
    },
    {
      title: "Track 4: Computer Vision, Emerging Technologies, and Intelligent Applications",
      topics: ["Computer Vision and Image Processing", "Multimedia Analytics", "Augmented Reality (AR) and Virtual Reality (VR)", "Quantum Computing", "Robotics and Autonomous Systems", "Industry 5.0", "AI Applications in Healthcare, Finance, and Education", "Human-Computer Interaction", "Future Computing Technologies"]
    }
  ],

  pricing: [
    { category: "International Authors", mode: "Online (Remote Presentation)", fee: "$250" },
    { category: "National Delegates", mode: "Offline (On-campus)", fee: "₹ 12,000" },
    { category: "National Students", mode: "Offline (On-campus)", fee: "₹ 6,000" },
    { category: "Listeners / Attendees", mode: "Hybrid / Co-authors", fee: "₹ 2,000" }
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

