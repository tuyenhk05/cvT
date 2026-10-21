/**
 * Complete Database & Portfolio Registry for Vuong Tan Tai
 * Contains Academic Honors, Development Artifacts, Gaming Achievements, STAR Projects & Career Roadmap
 */

const PORTFOLIO_DATA = {
  vi: {
    personal: {
      name: "VƯƠNG TẤN TÀI",
      shortName: "Tấn Tài",
      title: "Kỹ sư Kỹ thuật Sản xuất (PE) & Tự động hóa",
      subTitle: "Mechatronics Engineering | Đại học Lạc Hồng",
      status: "Sẵn sàng gia nhập & Cống hiến",
      university: "Trường Đại học Lạc Hồng (LHU)",
      major: "Công nghệ Kỹ thuật Cơ điện tử",
      academicYear: "Sinh viên năm 4 (Dự kiến tốt nghiệp T5/2027)",
      gpa10: "8.35",
      gpa4: "3.34",
      academicRank: "Giỏi / Xuất sắc",
      phone: "0919784542",
      phoneDisplay: "0919 784 542",
      email: "vttai12052005@gmail.com",
      address: "Hẻm 475 Huỳnh Văn Nghệ, P. Trấn Biên, Tỉnh Đồng Nai",
      locationShort: "Đồng Nai / TP. Hồ Chí Minh",
      cvPdfUrl: "assets/docs/CV-VuongTanTai-Mechatronics.pdf",
      avatar: "assets/images/avatar.png",
      bio: "Sinh viên năm 4 ngành Công nghệ Kỹ thuật Cơ điện tử với nền tảng vững chắc về thiết kế SolidWorks, lập trình vi điều khiển, PLC và tiêu chuẩn quản lý sản xuất 3S-5S. Mong muốn ứng tuyển và phát triển ở vị trí Kỹ sư Kỹ thuật Sản xuất (PE) / Tự động hóa nhằm vận dụng kiến thức chuyên môn vào việc vận hành, cải tiến quy trình và hỗ trợ kỹ thuật hiệu quả tại doanh nghiệp.",
      quote: "Hành trình tại Đại học Lạc Hồng đã rèn luyện cho tôi tinh thần kỹ sư thực chiến: làm chủ sự giao thoa giữa Cơ khí chính xác, Điện tử điều khiển và Thuật toán nhúng, kết hợp văn hóa chuẩn mực 3S-5S Nhật Bản để tạo ra giá trị bền vững cho sản xuất."
    },
    metrics: [
      { label: "Điểm trung bình (GPA)", value: "8.35", suffix: "/10", sub: "Thang 4: 3.34 - Giỏi" },
      { label: "Giải Ba Toàn Quốc", value: "MISUMI", suffix: " 2026", sub: "Thiết kế Máy Tự Động Hóa" },
      { label: "Giấy Khen Học Tập", value: "02", suffix: " Lần", sub: "Hiệu trưởng ĐH Lạc Hồng tặng" },
      { label: "Chứng chỉ SolidWorks", value: "CSWA", suffix: "", sub: "Dassault Systèmes cấp" }
    ],
    // Development Artifacts (Quá trình nghiên cứu & lắp đặt máy thực tế)
    development: [
      {
        id: "dev-prototyping",
        title: "Nghiên Cứu & Ráp Thử Nghiệm Mô Hình Mẫu Thực Tế",
        tag: "R&D Prototype",
        date: "Tháng 11/2025",
        image: "assets/images/development/lap-dat-may-1.jpg",
        description: "Quá trình chế tạo mô hình thử nghiệm ban đầu: bố trí dàn cảm biến quang hồng ngoại (IR Obstacle Sensors) phát hiện từng khoang chứa, kết nối servo SG90 điều khiển barrier chắn, nạp firmware qua mạch nạp ST-Link V2 kết nối vi điều khiển STM32 Blue Pill và laptop kỹ thuật.",
        highlights: [
          "Tự tay thiết kế layout khoang đỗ xe và định tuyến dây tín hiệu chống nhiễu.",
          "Kiểm tra phản hồi ngắt ngoài (External Interrupt) của cảm biến hồng ngoại.",
          "Cân chỉnh góc mở 90 độ của micro servo barrier."
        ]
      },
      {
        id: "dev-testbench",
        title: "Kiểm Thử & Đo Kiểm Mạch Phần Cứng Trên Bàn Làm Việc",
        tag: "Hardware Test Bench",
        date: "Tháng 12/2025",
        image: "assets/images/development/lap-dat-may-2.jpg",
        description: "Bàn kiểm thử tín hiệu điện tử và vi điều khiển: vi điều khiển STM32F103C8T6 chạy trực tiếp trên breadboard, giao tiếp màn hình hiển thị LCD 16x2 hiển thị thông số thời gian thực, đo kiểm logic kích hoạt cảm biến với các đèn LED chỉ thị trạng thái.",
        highlights: [
          "Đo kiểm điện áp nguồn 5V/3.3V ổn định cho toàn mạch điều khiển.",
          "Lập trình giao tiếp bus hiển thị dữ liệu trạng thái lên màn hình LCD.",
          "Tối ưu thuật toán khử rung phím và chống nhiễu cảm biến bằng phần mềm C/C++."
        ]
      }
    ],
    // Official Awards & Certificates (Bằng khen & Chứng chỉ chính thức)
    awards: [
      {
        id: "misumi-ceremony",
        title: "Lễ Trao Giải Cuộc Thi Thiết Kế Máy Tự Động Hóa MISUMI 2026",
        issuer: "Tập đoàn MISUMI & Các Trường Đại Học Kỹ Thuật",
        date: "11/03/2026",
        rank: "GIẢI BA TOÀN QUỐC",
        image: "assets/images/awards/misumi-ceremony.jpg",
        description: "Đội thi LH-LTA (Đại học Lạc Hồng) vinh dự bước lên bục nhận Giải Ba Chung Kết toàn quốc tại Lễ trao giải diễn ra tại TP. Hồ Chí Minh với đề tài Hệ thống Pick & Place tự động gắp thả linh kiện chính xác.",
        isAward: true
      },
      {
        id: "misumi-cert",
        title: "Giấy Chứng Nhận Giải Ba MISUMI 2026 - Đội LH-LTA",
        issuer: "Tổng Giám Đốc MISUMI Việt Nam - Tomohiro Watanabe",
        date: "Tháng 03/2026",
        rank: "GIẢI BA CHUNG CUỘC",
        image: "assets/images/awards/misumi-certificate.jpg",
        description: "Bằng chứng nhận có đóng dấu đỏ chính thức từ Công ty TNHH MISUMI Việt Nam ghi nhận thành tích xuất sắc của thành viên Vương Tấn Tài cùng đội tuyển LH-LTA Đại học Lạc Hồng.",
        isAward: true
      },
      {
        id: "lhu-merit-2024",
        title: "Giấy Khen Thành Tích Giỏi Năm Học 2023 - 2024",
        issuer: "Hiệu Trưởng Trường Đại Học Lạc Hồng (TS. Lâm Thành Hiển)",
        date: "18/07/2024",
        rank: "SINH VIÊN GIỎI",
        image: "assets/images/awards/hoc-tap-loai-gioi.jpg",
        description: "Quyết định khen thưởng số 814/QĐ-ĐHLH trao tặng cho sinh viên Vương Tấn Tài (Lớp 23CD111) vì đã đạt thành tích Giỏi trong học tập năm học 2023 - 2024, chụp trước khuôn viên trường LHU.",
        isAward: true
      },
      {
        id: "lhu-merit-2026",
        title: "Giấy Khen Thành Tích Giỏi Năm Học 2025 - 2026",
        issuer: "Hiệu Trưởng Trường Đại Học Lạc Hồng (PGS.TS. Lâm Thành Hiển)",
        date: "22/08/2026",
        rank: "SINH VIÊN GIỎI",
        image: "assets/images/awards/giay-khen-hoc-tap.jpg",
        description: "Quyết định khen thưởng số 1573/QĐ-ĐHLH tiếp tục ghi nhận thành tích học tập Giỏi của Vương Tấn Tài năm học 2025 - 2026, khẳng định năng lực duy trì phong độ học tập ổn định.",
        isAward: true
      },
      {
        id: "cswa-badge",
        title: "Chứng Chỉ Quốc Tế SolidWorks CSWA",
        issuer: "Dassault Systèmes SolidWorks Corp",
        date: "Tháng 04/2025",
        rank: "CHỨNG CHỈ QUỐC TẾ",
        image: "assets/images/svg/cswa-badge.svg",
        description: "Chứng chỉ chuẩn hóa năng lực thiết kế 3D Part, Assembly, Motion và phân tích khối lượng vật liệu cơ khí theo tiêu chuẩn công nghiệp toàn cầu.",
        isAward: false
      },
      {
        id: "5s-badge",
        title: "Chứng Chỉ Tiêu Chuẩn Quản Lý 3S - 5S Kaizen",
        issuer: "Trung Tâm Đào Tạo Tiêu Chuẩn Sản Xuất",
        date: "Tháng 12/2025",
        rank: "TIÊU CHUẨN SẢN XUẤT",
        image: "assets/images/svg/5s-badge.svg",
        description: "Am hiểu và thực hành chuẩn mực 5S Nhật Bản: Sàng lọc - Sắp xếp - Sạch sẽ - Săn sóc - Sẵn sàng trong nhà xưởng chế tạo và quản lý hiện trường.",
        isAward: false
      }
    ],
    // Gaming & Esports Achievements (Thành tích giải trí & Thể thao điện tử)
    gaming: {
      title: "Giải Trí, Thể Thao Điện Tử & Tư Duy Chiến Thuật",
      subtitle: "Liên Quân Mobile - Rèn luyện phản xạ, quan sát bản đồ vĩ mô & tinh thần phối hợp đồng đội",
      quote: "Sau những giờ học tập và nghiên cứu căng thẳng trong phòng thí nghiệm, thể thao điện tử là không gian giúp tôi giải tỏa áp lực, đồng thời tôi luyện khả năng tư duy chiến thuật, đưa ra quyết định chớp nhoáng dưới áp lực cao và phối hợp ăn ý cùng đồng đội.",
      highlights: [
        {
          id: "mvp-record",
          title: "Chiến Tích Đỉnh Cao: MVP 16.0 - TOP 0.0% SSS Đường Giữa",
          image: "assets/images/gaming/chien-tich-lien-quan.jpg",
          score: "16.0 MVP",
          stats: "KDA 9 / 0 / 13 &bull; Quét Sạch (Hạ 30% toàn đội) &bull; Gây 139.1k ST",
          description: "Màn trình diễn hoàn hảo với điểm MVP tối đa tuyệt đối 16.0, không để ngã xuống lần nào (0 gục), gây lượng sát thương khủng lọt vào Top 1% toàn server."
        },
        {
          id: "win-streak",
          title: "Chuỗi Trận Thắng Liên Tiếp Toàn MVP Cực Kỳ Ổn Định",
          image: "assets/images/gaming/win-streak-lien-quan.jpg",
          score: "VICTORY STREAK",
          stats: "MVP SSS Jinna (9/0/13), MVP SS (11/2/7), MVP SS (12/0/7), MVP Slimz (8/0)",
          description: "Khả năng gánh team ổn định và giữ vững phong độ xuyên suốt nhiều trận đấu liên tiếp ở chế độ Đấu Hạng đỉnh cao."
        }
      ],
      video: {
        src: "assets/videos/highlight-lien-quan.mp4",
        title: "Video Highlight Xử Lý Kỹ Năng Đỉnh Cao Trong Liên Quân Mobile",
        desc: "Clip ghi lại pha xử lý chuẩn xác, di chuyển thông minh và phối hợp giao tranh tổng mẫu mực."
      }
    },
    // Career Roadmap (Lộ trình 3 năm - 5 năm - 10 năm)
    roadmap: [
      {
        phase: "3 NĂM ĐẦU",
        title: "Kỹ sư Nền tảng & Cải tiến Quy trình (PE / Automation)",
        period: "2026 - 2029",
        goals: [
          "Gia nhập doanh nghiệp sản xuất công nghiệp hoặc tập đoàn tự động hóa với vai trò Kỹ sư PE / Kỹ sư Tự động hóa chính thức.",
          "Vận dụng thành thạo PLC (Siemens/Omron), SolidWorks, vi điều khiển STM32 và gia công CNC vào cải tiến năng suất dây chuyền.",
          "Thực hiện các đề tài Kaizen thực tế, tối ưu hóa thời gian chu kỳ (Cycle Time), giảm tỉ lệ phế phẩm và kiểm soát dung sai vi mô.",
          "Duy trì văn hóa 3S-5S, hoàn thiện khả năng giao tiếp Tiếng Anh và trau dồi Tiếng Nhật kỹ thuật."
        ]
      },
      {
        phase: "5 NĂM",
        title: "Chuyên gia Kỹ thuật & Quản lý Dự án Tự động hóa",
        period: "2029 - 2034",
        goals: [
          "Làm chủ các công nghệ tiên tiến: Robot công nghiệp (6-DoF), Thị giác máy tính (Machine Vision AI), hệ thống SCADA/MES giám sát toàn nhà máy.",
          "Đảm nhận vai trò Kỹ sư trưởng (Lead Engineer) hoặc Trưởng nhóm Dự án Tự động hóa (Project Manager).",
          "Tham gia chuyển giao công nghệ, tiếp cận tiêu chuẩn sản xuất hiện đại tại Nhật Bản hoặc các tập đoàn đa quốc gia.",
          "Nâng cao tư duy quản trị tài chính dự án, tối ưu hóa OEE (Overall Equipment Effectiveness) cho toàn xưởng."
        ]
      },
      {
        phase: "10 NĂM",
        title: "Lãnh đạo Kỹ thuật & Cống hiến Cho Ngành Tự động hóa",
        period: "2034+",
        goals: [
          "Đảm nhiệm vị trí Giám đốc Kỹ thuật (Technical Director) hoặc Giám đốc Sản xuất (Plant / Production Director).",
          "Xây dựng và điều hành các dự án tự động hóa 'Make in Vietnam' phục vụ nền công nghiệp thông minh 4.0.",
          "Tham gia cố vấn, đào tạo kỹ sư trẻ và kết nối các cuộc thi nghiên cứu sáng tạo sinh viên."
        ]
      }
    ],
    // Projects Breakdown (Mô hình STAR)
    projects: [
      {
        id: "misumi-pnp",
        title: "Hệ thống Pick & Place Tự Động MISUMI 2026",
        badge: "Giải Ba Toàn Quốc",
        period: "12/2025 – 03/2026",
        category: "Cuộc thi Sáng tạo",
        role: "Thành viên cốt lõi | Thiết kế Cơ cấu Cơ khí SolidWorks",
        image: "assets/projects/pick-and-place.jpg",
        tools: ["SolidWorks 3D", "Linh kiện MISUMI", "Pneumatics", "Step Motor", "Sensor Integration"],
        star: {
          situation: "Cuộc thi Thiết kế Máy Tự Động Hóa MISUMI 2026 đặt ra bài toán thiết kế chế tạo hệ thống Pick & Place tự động gắp thả linh kiện chính xác cao, đòi hỏi tối ưu kết cấu cơ khí và sử dụng danh mục linh kiện tiêu chuẩn MISUMI.",
          task: "Phụ trách thiết kế cơ cấu máy hoàn chỉnh trên SolidWorks, tính toán tải trọng các trục chuyển động X-Y-Z, lựa chọn mã linh kiện tiêu chuẩn MISUMI (vít me bi, thanh trượt tuyến tính, xilanh khí nén, gối đỡ).",
          action: "Xây dựng mô hình 3D tổng thể, phân tích động học nhằm giảm thiểu rung động khi tăng tốc gắp thả; phối hợp cùng nhóm tối ưu hành trình chạy dao và cơ cấu kẹp; hoàn thiện hồ sơ thiết kế kỹ thuật phục vụ chế tạo.",
          result: "Hệ thống vận hành chính xác với độ lặp lại cao, đạt GIẢI 3 CHUNG KẾT toàn quốc, được ban giám khảo và Tổng Giám đốc MISUMI Việt Nam đánh giá rất cao về tính khả thi thương mại."
        }
      },
      {
        id: "smart-parking",
        title: "Hệ thống Bãi Đỗ Xe Tự Động Thông Minh",
        badge: "Trưởng nhóm Dự án",
        period: "11/2025",
        category: "Dự án Đại học",
        role: "Trưởng nhóm | Lập trình PLC Siemens TIA Portal & PC Simu",
        image: "assets/projects/smart-parking.jpg",
        tools: ["PLC Siemens S7", "TIA Portal", "PC Simu", "SCADA HMI", "Sensors"],
        star: {
          situation: "Bài toán thiếu hụt bãi đỗ xe tại đô thị đòi hỏi mô hình bãi đỗ xe nhiều tầng tự động có khả năng lưu giữ và trả xe nhanh chóng, an toàn, không phụ thuộc người lái.",
          task: "Lãnh đạo nhóm đồ án, chịu trách nhiệm thiết kế thuật toán điều khiển trung tâm, phân bổ slot đỗ xe logic và lập trình giao diện giám sát.",
          action: "Lập trình chương trình điều khiển trên TIA Portal; mô phỏng toàn diện trên PC Simu; tích hợp cảm biến quang nhận diện kích thước xe và cảm biến hành trình định vị chính xác khay nâng thang máy.",
          result: "Hệ thống hoạt động ổn định, loại trừ 100% rủi ro va chạm pallet; đồ án đạt điểm xuất sắc tại Khoa Cơ Điện - Điện Tử Đại học Lạc Hồng."
        }
      },
      {
        id: "tray-packing",
        title: "Hệ thống Xếp Hàng Vào Khay Tự Động",
        badge: "Trưởng nhóm Dự án",
        period: "12/2025",
        category: "Dự án Đại học",
        role: "Trưởng nhóm | Lắp đặt Phần cứng & Lập trình Vi điều khiển STM32",
        image: "assets/projects/tray-packing.jpg",
        tools: ["STM32F103C8T6", "KeilC / C++", "Stepper & Servo", "Pneumatic Pushers", "Sensors"],
        star: {
          situation: "Trong dây chuyền sản xuất pin và linh kiện hình trụ, việc xếp sản phẩm thủ công vào khay gây tốn nhân lực và dễ xước bề mặt chi tiết.",
          task: "Thiết kế mạch điều khiển nhúng thời gian thực và lập trình cơ cấu ma trận xếp sản phẩm đồng đều vào từng ô khay.",
          action: "Sử dụng vi điều khiển STM32F103C8T6, lập trình C nhúng quản lý tín hiệu xung PWM cấp cho động cơ bước, điều khiển servo gắp thả và van khí nén phân loại; thiết kế mạch nguồn chống nhiễu.",
          result: "Tốc độ xếp khay đạt hiệu suất cao, không có lỗi rơi rớt phôi, được giảng viên khen ngợi về kỹ năng gia công cơ khí và đi dây tủ điện chuẩn công nghiệp."
        }
      },
      {
        id: "ito-internship",
        title: "Thực tập Sinh Kỹ thuật Sản xuất (PE) tại ITO VN",
        badge: "Doanh nghiệp Nhật Bản",
        period: "06/2026 – 08/2026",
        category: "Kinh nghiệm Doanh nghiệp",
        role: "Thực tập sinh PE | Gia công CNC, CAD/CAM & Cải tiến 5S",
        image: "assets/projects/cnc-pe-ito.jpg",
        tools: ["Máy Phay CNC", "Phần mềm CAD/CAM", "Đọc Bản vẽ GD&T", "Tiêu chuẩn 5S", "Process Engineering"],
        star: {
          situation: "Thực tập tại Công ty TNHH ITO VN (204 Nơ Trang Long, Bình Thạnh, TP.HCM) – doanh nghiệp có quy trình quản lý chất lượng và công nghệ sản xuất nghiêm ngặt theo chuẩn Nhật Bản.",
          task: "Vận hành máy gia công CNC, tối ưu đường chạy dao CAD/CAM, kiểm soát dung sai kích thước và tham gia duy trì hiện trường sản xuất theo chuẩn 5S.",
          action: "Trực tiếp thiết lập đồ gá phôi, chọn chế độ cắt hợp lý cho các vật liệu nhôm/thép mechatronics; đọc hiểu sâu bản vẽ chi tiết; đề xuất cải tiến nhỏ (Kaizen) giúp giảm thời gian gá đặt phôi.",
          result: "Hoàn thành kỳ thực tập với đánh giá xuất sắc từ kỹ sư hướng dẫn ITO VN; tích lũy tác phong làm việc chuẩn mực trong môi trường sản xuất công nghiệp thực tế."
        }
      }
    ]
  }
};
