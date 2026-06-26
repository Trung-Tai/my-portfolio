const navLinks = {
  en: [
    {
      name: "Work",
      link: "#/work",
    },
    {
      name: "Experience",
      link: "#/experience",
    },
    {
      name: "Skills",
      link: "#/skills",
    },
  ],
  vi: [
    {
      name: "Dự án",
      link: "#/work",
    },
    {
      name: "Kinh nghiệm",
      link: "#/experience",
    },
    {
      name: "Kỹ năng",
      link: "#/skills",
    },
  ],
};

const words = {
  en: [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
  ],
  vi: [
    { text: "Ý tưởng", imgPath: "/images/ideas.svg" },
    { text: "Khái niệm", imgPath: "/images/concepts.svg" },
    { text: "Thiết kế", imgPath: "/images/designs.svg" },
    { text: "Lập trình", imgPath: "/images/code.svg" },
    { text: "Ý tưởng", imgPath: "/images/ideas.svg" },
    { text: "Khái niệm", imgPath: "/images/concepts.svg" },
    { text: "Thiết kế", imgPath: "/images/designs.svg" },
    { text: "Lập trình", imgPath: "/images/code.svg" },
  ],
};

const counterItems = {
  en: [
    { value: 2, suffix: "+", label: "Years of Experience" },
    { value: 15, suffix: "+", label: "Integrations & APIs" },
    { value: 10, suffix: "+", label: "Completed Projects" },
    { value: 99, suffix: "%", label: "Client Satisfaction" },
  ],
  vi: [
    { value: 2, suffix: "+", label: "Năm kinh nghiệm" },
    { value: 15, suffix: "+", label: "Tích hợp & API" },
    { value: 10, suffix: "+", label: "Dự án hoàn thành" },
    { value: 99, suffix: "%", label: "Khách hàng hài lòng" },
  ],
};

const logoIconsList = [];

const abilities = {
  en: [
    {
      imgPath: "/images/seo.png",
      title: "Quality Focus",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: "/images/time.png",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
  ],
  vi: [
    {
      imgPath: "/images/seo.png",
      title: "Tập trung chất lượng",
      desc: "Mang lại kết quả chất lượng cao đồng thời chú trọng đến từng chi tiết nhỏ nhất.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Giao tiếp tin cậy",
      desc: "Luôn cập nhật thông tin trong từng bước để đảm bảo tính minh bạch và rõ ràng.",
    },
    {
      imgPath: "/images/time.png",
      title: "Bàn giao đúng hạn",
      desc: "Đảm bảo các dự án được hoàn thành đúng tiến độ, với chất lượng và sự tận tâm.",
    },
  ],
};

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Java Developer",
    imgPath: "/images/logos/java.png",
  },
  {
    name: "Next.js Developer",
    imgPath: "/images/logos/next.png",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Java Developer",
    texturePath: "/images/logos/java-clean.png",
    scale: 4.55,
    rotation: [0.25, -0.55, 0.08],
    depth: 0.22,
    depthLayers: 14,
    depthColor: "#0b6f8c",
  },
  {
    name: "Next.js Developer",
    texturePath: "/images/logos/next-clean-outlined.png",
    scale: 4.45,
    rotation: [0.22, -0.52, 0.08],
    depth: 0.2,
    depthLayers: 14,
    depthColor: "#111827",
  },
];

const expCards = {
  en: [
    {
      review: "Tai developed high-security payment applications for our Smart POS terminals and managed our MDM infrastructure with exceptional competence. His ability to handle low-level C code alongside modern cloud technologies was a huge asset to our team.",
      imgPath: "/images/exp1.png",
      logoPath: "/images/logo1.png",
      title: "Backend Developer",
      date: "October 2025 - Present",
      responsibilities: [
        "Developed and certified system software for the Q161 Smart POS terminal, and built C payment apps for the Q191 model in secure sandbox environments.",
        "Built core modules for scanning payment cards and real-time transaction reporting.",
        "Managed and extended the Headwind MDM (HMDM) platform, implementing backend features for device grouping and fleet synchronization.",
        "Designed scalable architectures using Java, C, MQTT, and Docker for secure payment infrastructure communication.",
      ],
    },
    {
      review: "Tai’s expertise in workflow automation and AI chatbots dramatically increased our efficiency. He built robust automation flows using n8n and successfully deployed complex solutions on our infrastructure with high quality.",
      imgPath: "/images/exp2.png",
      logoPath: "/images/logo2.png",
      title: "Software Engineer (Automation)",
      date: "April 2025 - June 2025",
      responsibilities: [
        "Built and optimized intelligent workflow automation systems using n8n integrated with AI and data tools.",
        "Designed and deployed custom Zalo & Facebook Messenger customer interaction chatbots.",
        "Built automated content generation pipelines and data analytics pipelines using GPT-4, Gemini, and LangChain.",
        "Deployed applications on Ubuntu VPS using Docker, Nginx, SSL, and custom subdomains.",
      ],
    },
    {
      review: "As an intern, Tai showed outstanding software engineering skills. He single-handedly developed our ShoesStore and Stock Market applications, showing a strong grasp of Next.js, databases, and secure authentication.",
      imgPath: "/images/exp3.png",
      logoPath: "/images/logo3.png",
      title: "Software Engineer Intern",

      date: "July 2024 - December 2024",
      responsibilities: [
        "Developed ShoesStore — a full e-commerce platform with Admin Dashboard and Storefront using Next.js, Tailwind CSS, Shadcn UI, Kinde Auth, and Stripe.",
        "Built Stock Market web app with real-time stock data, Google OAuth watchlist, and SePay payment integration.",
        "Configured secure authentication, Stripe webhooks, Redis cart, and PostgreSQL/Prisma database connections.",
      ],
    },
  ],
  vi: [
    {
      review: "Tài đã phát triển các ứng dụng thanh toán bảo mật cao cho máy Smart POS của chúng tôi và quản lý hạ tầng MDM với năng lực xuất sắc. Khả năng lập trình C cấp thấp kết hợp cùng công nghệ đám mây hiện đại của cậu ấy là một tài sản lớn đối với đội ngũ.",
      imgPath: "/images/exp1.png",
      logoPath: "/images/logo1.png",
      title: "Lập trình viên Backend",
      date: "Tháng 10/2025 - Hiện tại",
      responsibilities: [
        "Phát triển và chứng nhận phần mềm hệ thống cho thiết bị Smart POS Q161; xây dựng các ứng dụng thanh toán nhúng cho dòng Q191 bằng ngôn ngữ C trong môi trường sandbox bảo mật.",
        "Xây dựng các mô-đun cốt lõi để quét thẻ thanh toán và báo cáo giao dịch thành công theo thời gian thực.",
        "Quản lý và mở rộng nền tảng Headwind MDM (HMDM) - triển khai các tính năng phụ trợ để nhóm thiết bị, theo dõi trạng thái và đồng bộ hóa đội ngũ thiết bị từ xa.",
        "Thiết kế kiến trúc hệ thống backend có khả năng mở rộng bằng Java, C, MQTT và Docker để đảm bảo truyền thông bảo mật và triển khai ổn định.",
      ],
    },
    {
      review: "Chuyên môn của Tài về tự động hóa quy trình và chatbot tích hợp AI đã tăng đáng kể hiệu quả hoạt động của chúng tôi. Cậu ấy đã xây dựng các luồng tự động hóa mạnh mẽ bằng n8n và triển khai các giải pháp phức tạp trên hạ tầng của chúng tôi với chất lượng rất cao.",
      imgPath: "/images/exp2.png",
      logoPath: "/images/logo2.png",
      title: "Kỹ sư phần mềm (Tự động hóa)",
      date: "Tháng 04/2025 - Tháng 06/2025",
      responsibilities: [
        "Xây dựng và tối ưu hóa hệ thống tự động hóa quy trình thông minh sử dụng n8n, tích hợp với các công cụ dữ liệu và AI.",
        "Thiết kế và triển khai giải pháp Zalo Chatbot & Facebook Messenger Bot để tương tác tự động với khách hàng.",
        "Xây dựng luồng tạo nội dung tự động cho blog, mạng xã hội sử dụng GPT-4, Gemini và LangChain.",
        "Triển khai và quản lý các ứng dụng trên VPS Ubuntu sử dụng Docker, Nginx, SSL và cấu hình tên miền phụ.",
      ],
    },
    {
      review: "Trong thời gian thực tập, Tài đã thể hiện kỹ năng kỹ thuật xuất sắc. Cậu ấy tự tay phát triển toàn bộ ứng dụng ShoesStore và Stock Market, chứng tỏ khả năng nắm vững Next.js, cơ sở dữ liệu và bảo mật xác thực.",
      imgPath: "/images/exp3.png",
      logoPath: "/images/logo3.png",
      title: "Thực tập sinh Kỹ sư phần mềm",
      date: "Tháng 07/2024 - Tháng 12/2024",
      responsibilities: [
        "Phát triển dự án ShoesStore — nền tảng thương mại điện tử hoàn chỉnh tích hợp Admin Dashboard và Storefront sử dụng Next.js, Tailwind CSS, Shadcn UI, Kinde Auth và Stripe.",
        "Xây dựng ứng dụng Stock Market theo dõi thông tin chứng khoán thời gian thực, watchlist và tích hợp cổng thanh toán SePay.",
        "Cấu hình hệ thống xác thực bảo mật, Stripe webhooks, giỏ hàng Redis và kết nối database PostgreSQL qua Prisma ORM.",
      ],
    },
  ],
};

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [];

const socialImgs = [
  // {
  //   name: "fb",
  //   imgPath: "/images/fb.png",
  //   link: "https://www.facebook.com/trinhtrungtai.01",
  // },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/trinh-tai-03775b27b/",
  },
];

const uiTranslations = {
  en: {
    navContact: "Contact me",
    heroTitle1: "Shaping",
    heroTitle2: "into Real Projects",
    heroTitle3: "that Deliver Results",
    heroBio: "Hi, I'm Trinh Trung Tai, a Full-Stack Developer based <br /> in Ho Chi Minh City with a passion for building scalable <br /> systems and AI-powered automation.",
    heroCta: "See Experience",
    expTitle: "Professional Work Experience",
    // expSub: "💼 My Career Overview",
    expResp: "Responsibilities",
    skillsTitle: "How I Can Contribute & My Key Skills",
    skillsSub: "🤝 What I Bring to the Table",
    contactTitle: "Get in Touch – Let’s Connect",
    contactSub: "💬 Have questions or ideas? Let’s talk! 🚀",
    contactName: "Your name",
    contactNamePlaceholder: "What’s your good name?",
    contactEmail: "Your Email",
    contactEmailPlaceholder: "What’s your email address?",
    contactMessage: "Your Message",
    contactMessagePlaceholder: "How can I help you?",
    contactBtn: "Send Message",
    contactBtnSending: "Sending...",
    projectStudioTitle: "A Full-Featured Operating System for Art Studios — Studio OS",
    projectStudioDesc: "An all-in-one SaaS platform for booking, payment processing, artist payouts, and AI-driven automation using NestJS, n8n, and GPT-4o/Gemini.",
    projectShoesTitle: "ShoesStore E-Commerce — Modern Dashboard & Storefront",
    projectStockTitle: "Stock Market Web App — Real-Time Tracking & premium upgrades",
  },
  vi: {
    navContact: "Liên hệ",
    heroTitle1: "Biến",
    heroTitle2: "thành những Dự án",
    heroTitle3: "mang lại Hiệu quả thực tế",
    heroBio: "Xin chào, tôi là Trịnh Trung Tài, một kỹ sư phát triển Full-Stack tại <br /> TP. Hồ Chí Minh với đam mê xây dựng hệ thống quy mô lớn <br /> và giải pháp tự động hóa tích hợp AI.",
    heroCta: "Xem kinh nghiệm",
    expTitle: "Kinh nghiệm làm việc thực tế",
    // expSub: "💼 Tổng quan sự nghiệp",
    expResp: "Nhiệm vụ & Đóng góp chính",
    skillsTitle: "Năng lực đóng góp & Kỹ năng cốt lõi",
    skillsSub: "🤝 Những gì tôi mang lại cho doanh nghiệp",
    contactTitle: "Kết nối & Liên hệ với tôi",
    contactSub: "💬 Bạn có câu hỏi hoặc ý tưởng? Hãy cùng trò chuyện! 🚀",
    contactName: "Họ và tên của bạn",
    contactNamePlaceholder: "Tên bạn là gì?",
    contactEmail: "Địa chỉ Email của bạn",
    contactEmailPlaceholder: "Địa chỉ email nhận phản hồi?",
    contactMessage: "Lời nhắn của bạn",
    contactMessagePlaceholder: "Tôi có thể giúp gì cho bạn?",
    contactBtn: "Gửi tin nhắn",
    contactBtnSending: "Đang gửi...",
    projectStudioTitle: "Hệ điều hành quản lý Studio nghệ thuật — Studio OS",
    projectStudioDesc: "Nền tảng SaaS toàn diện quản lý lịch đặt, xử lý thanh toán, tính hoa hồng nghệ sĩ và tích hợp tự động hóa AI bằng NestJS, n8n và GPT-4o/Gemini.",
    projectShoesTitle: "Thương mại điện tử ShoesStore — Cửa hàng & Trang quản trị hiện đại",
    projectStockTitle: "Ứng dụng Chứng khoán — Theo dõi thời gian thực & Nâng cấp VIP",
  },
};

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  uiTranslations,
};
