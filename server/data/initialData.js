export const initialData = {
  settings: {
    schoolName: "Augustine English Medium HPS & HS",
    tagline: "Nurturing Minds, Building Character, Inspiring Excellence",
    location: "Hallikhed (B), Humanabad Taluk, Bidar District, Karnataka, India",
    address: "Augustine English Medium HPS & HS, Post: Hallikhed (B), Taluk: Humanabad, District: Bidar, Karnataka - 585414",
    board: "Karnataka State Board",
    classes: "Nursery to 10th Standard",
    phone: "+91 98XXX XXXXX [Editable Placeholder - Update in Admin]",
    alternatePhone: "+91 94XXX XXXXX [Office Placeholder]",
    email: "contact@augustineschool.edu.in [Editable Placeholder]",
    officeHours: "Monday to Saturday: 9:00 AM – 4:00 PM (Sunday Closed)",
    principalName: "Principal [Name Placeholder - Update in Admin]",
    principalMessage: "Welcome to Augustine English Medium HPS & HS, Hallikhed (B). Our educational mission is founded upon instilling sound moral values, academic diligence, and holistic personality development in every student. We provide a supportive, disciplined, and culturally rooted learning environment that enables children from Nursery to 10th Standard to discover their potential and excel in life under the Karnataka State Board syllabus.",
    bannerNotice: "Admissions Open for Academic Year from Nursery to 10th Standard. Contact school office or submit an enquiry online.",
    isBannerActive: true,
    establishedYear: "[Year Placeholder - Update in Admin]"
  },
  announcements: [
    {
      id: "ann-1",
      title: "Admissions Open for Nursery to 10th Standard",
      content: "Admissions are currently underway for the upcoming academic session for classes Nursery, LKG, UKG, Primary (1st to 7th), and High School (8th to 10th). Parents are invited to submit the online admission enquiry or visit the school office.",
      category: "Admissions",
      isPinned: true,
      publishDate: "2026-11-10",
      createdAt: new Date().toISOString()
    },
    {
      id: "ann-2",
      title: "Karnataka State Board SSLC Preparatory Examinations",
      content: "Preparatory examinations and intensive revision classes for 10th Standard students are scheduled according to the Karnataka State Board syllabus schedule. Special guidance sessions will be conducted.",
      category: "Academics",
      isPinned: true,
      publishDate: "2026-11-05",
      createdAt: new Date().toISOString()
    },
    {
      id: "ann-3",
      title: "Annual Sports Day & Athletic Meet Announcement",
      content: "The annual inter-house sports competitions will be conducted on the school playground. Events include track sprints, relay, volleyball, and physical fitness displays.",
      category: "Events",
      isPinned: false,
      publishDate: "2026-10-28",
      createdAt: new Date().toISOString()
    },
    {
      id: "ann-4",
      title: "Science & Art Exhibition Display",
      content: "Students from Primary and High School sections will present models, charts, and experiments in our upcoming Science and Art Exhibition.",
      category: "Activities",
      isPinned: false,
      publishDate: "2026-10-15",
      createdAt: new Date().toISOString()
    }
  ],
  gallery: [
    {
      id: "gal-1",
      title: "Morning School Assembly & Prayer",
      category: "School events",
      imageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80",
      description: "Students gathering for morning prayer, national anthem, and daily value discourse.",
      createdAt: new Date().toISOString()
    },
    {
      id: "gal-2",
      title: "Interactive Classroom Learning",
      category: "Classroom activities",
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80",
      description: "Dedicated teachers guiding primary and high school students with individual attention.",
      createdAt: new Date().toISOString()
    },
    {
      id: "gal-3",
      title: "Science Laboratory Experimentation",
      category: "Classroom activities",
      imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80",
      description: "High school students conducting practical experiments in the science lab.",
      createdAt: new Date().toISOString()
    },
    {
      id: "gal-4",
      title: "Independence Day & Republic Day Celebrations",
      category: "Cultural celebrations",
      imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80",
      description: "Flag hoisting ceremony, patriotic speeches, and cultural performances by students.",
      createdAt: new Date().toISOString()
    },
    {
      id: "gal-5",
      title: "Annual Day Stage Performances",
      category: "Annual day functions",
      imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80",
      description: "Colourful traditional dances, drama, and prize distribution on Annual Day.",
      createdAt: new Date().toISOString()
    },
    {
      id: "gal-6",
      title: "Inter-House Sports & Athletic Meet",
      category: "Sports activities",
      imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=80",
      description: "Students showcasing athletic skills, teamwork, and sportsmanship on the playground.",
      createdAt: new Date().toISOString()
    },
    {
      id: "gal-7",
      title: "Computer Laboratory Class",
      category: "Student activities",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
      description: "Hands-on computer education, keyboard practice, and digital literacy.",
      createdAt: new Date().toISOString()
    },
    {
      id: "gal-8",
      title: "Library Reading & Study Session",
      category: "Student activities",
      imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=80",
      description: "Cultivating lifelong reading habits with reference books and literature.",
      createdAt: new Date().toISOString()
    }
  ],
  admissions: [
    {
      id: "adm-1",
      parentName: "Suresh Patil",
      studentName: "Ananya Patil",
      applyingClass: "6th Standard",
      parentPhone: "+91 98451 23456",
      email: "spatil@example.com",
      message: "Looking for admission for my daughter in 6th standard. Interested in knowing about textbooks and uniform.",
      status: "new",
      createdAt: new Date().toISOString()
    },
    {
      id: "adm-2",
      parentName: "Mohammed Ibrahim",
      studentName: "Faizan Ibrahim",
      applyingClass: "LKG",
      parentPhone: "+91 97412 89012",
      email: "ibrahim.bdr@example.com",
      message: "Please inform about the Nursery/LKG admission requirements and documents needed.",
      status: "contacted",
      createdAt: new Date().toISOString()
    }
  ],
  contactMessages: [
    {
      id: "msg-1",
      name: "Ramesh Kulkarni",
      email: "rkulkarni@example.com",
      phone: "+91 99800 11223",
      subject: "Transfer Certificate Enquiry",
      message: "Hello, I wanted to inquire regarding the procedure for collecting previous academic records.",
      status: "read",
      createdAt: new Date().toISOString()
    }
  ]
};
