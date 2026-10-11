import { EdTechWorkspaceState, SubjectKey } from '../types/edtech';

export const SAMPLE_PRESETS: Record<SubjectKey, EdTechWorkspaceState> = {
  math: {
    version: '1.0.0',
    lastUpdated: '2026-10-10T09:00:00Z',
    activeSubject: 'math',
    lessonPlan: {
      id: 'math-11-geom-prog',
      title: 'BÀI 7: CẤP SỐ NHÂN VÀ ỨNG DỤNG TÀI CHÍNH',
      subject: 'Toán học',
      grade: 11,
      duration: '2 tiết (90 phút)',
      curriculum: 'Kết nối tri thức với cuộc sống',
      schoolName: 'Trường THPT Chuyên Lê Hồng Phong',
      teacherName: 'Nguyễn Văn Hưng',
      datePrepared: '2026-10-10',
      objectives: {
        knowledge: [
          'Nhận biết được định nghĩa cấp số nhân, công bội q và số hạng tổng quát un = u1 * q^(n-1).',
          'Thiết lập và vận dụng được công thức tính tổng n số hạng đầu tiên Sn của cấp số nhân.',
          'Vận dụng công thức cấp số nhân để mô hình hóa và giải quyết bài toán lãi kép, tăng trưởng kinh tế và bài toán thực tế.'
        ],
        generalCompetencies: [
          'Tự chủ và tự học: Tự nghiên cứu tài liệu sách giáo khoa, tính toán độc lập các số hạng đầu của dãy số.',
          'Giao tiếp và hợp tác: Làm việc nhóm đôi và nhóm 4 người để thảo luận công thức tổng Sn.',
          'Giải quyết vấn đề và sáng tạo: Thiết lập mô hình toán học giải quyết bài toán gửi tiết kiệm ngân hàng.'
        ],
        specificCompetencies: [
          'Năng lực tư duy và lập luận toán học: So sánh quy luật giữa cấp số cộng và cấp số nhân.',
          'Năng lực mô hình hóa toán học: Chuyển đổi bài toán vay trả góp thành bài toán chuỗi cấp số nhân.',
          'Năng lực sử dụng công cụ, phương tiện học toán: Sử dụng máy tính cầm tay giải quyết các lũy thừa lớn.'
        ],
        qualities: [
          'Chăm chỉ: Tích cực hoàn thành các bài tập phiếu học tập số 1 và 2.',
          'Trung thực: Khách quan trong việc tự đánh giá và đánh giá chéo giữa các nhóm.',
          'Trách nhiệm: Có ý thức quản lý tài chính cá nhân sau khi hiểu bản chất của lãi kép.'
        ]
      },
      equipment: {
        teacher: [
          'Giáo án chuẩn CV 5512, slide trình chiếu bài giảng Canva/PowerPoint.',
          'Máy chiếu/Tivi tương tác, phiếu học tập số 1, 2, 3 in trên giấy A4.',
          'Mô hình bàn cờ vua và hạt thóc (video tư liệu lịch sử bài toán bàn cờ cổ Ấn Độ).'
        ],
        student: [
          'Sách giáo khoa Toán 11 (Tập 1), vở ghi bài, thước kẻ.',
          'Máy tính cầm tay Casio fx-580VNX hoặc fx-880BTG.',
          'Chuẩn bị trước phần đọc hiểu định nghĩa dãy số ở bài học trước.'
        ]
      },
      activities: [
        {
          id: 'act-1',
          name: 'HOẠT ĐỘNG 1: MỞ ĐẦU / KHỞI ĐỘNG (Xác định vấn đề học tập)',
          stageNumber: 1,
          timeAllocation: '7 phút',
          objective: 'Tạo tâm thế hứng thú, kích hoạt tư duy về quy luật tăng trưởng nhân bội thông qua câu chuyện lịch sử bàn cờ vua của nhà thông thái Sessa.',
          content: 'Học sinh xem đoạn clip ngắn về phần thưởng bàn cờ vua: ô thứ nhất đặt 1 hạt thóc, ô thứ hai đặt 2 hạt, ô thứ ba đặt 4 hạt,... Hỏi ô thứ 64 có bao nhiêu hạt thóc và nhà vua có thể thưởng đủ không?',
          product: 'Câu trả lời của học sinh: Ô 1 có 1, ô 2 có 2, ô 3 có 2^2, ô 64 có 2^63 hạt thóc. Dự đoán tổng số hạt thóc là một con số khổng lồ vượt quá sản lượng lương thực toàn cầu.',
          implementation: {
            step1_transfer: 'Giáo viên chiếu video tư liệu bàn cờ vua cổ Ấn Độ; yêu cầu học sinh thảo luận cặp đôi trả lời 2 câu hỏi: Số hạt ở ô thứ n là bao nhiêu? Dãy số này có đặc điểm gì khác với cấp số cộng?',
            step2_execution: 'Học sinh thảo luận cặp đôi trong 3 phút, ghi nhanh dự đoán vào bảng con hoặc nháp.',
            step3_discussion: 'Giáo viên mời 2 cặp đôi phát biểu; các cặp khác nhận xét, bổ sung.',
            step4_conclusion: 'Giáo viên chốt lại: Dãy số 1, 2, 4, 8, 16,... có tính chất mỗi số hạng (kể từ số thứ 2) bằng số hạng đứng trước nó nhân với 2. Dãy số như vậy được gọi là Cấp số nhân.'
          }
        },
        {
          id: 'act-2',
          name: 'HOẠT ĐỘNG 2: HÌNH THÀNH KIẾN THỨC MỚI (Giải quyết vấn đề)',
          stageNumber: 2,
          timeAllocation: '25 phút',
          objective: 'Hình thành định nghĩa cấp số nhân, công sai tỉ số q, công thức số hạng tổng quát un = u1 * q^(n-1) và tổng Sn.',
          content: 'Học sinh làm việc với Phiếu học tập số 1 (Định nghĩa và công thức un) và Phiếu học tập số 2 (Chứng minh công thức Sn = u1*(1 - q^n)/(1 - q) với q ≠ 1).',
          product: 'Vở ghi của học sinh hoàn thành các khung kiến thức trọng tâm; giải quyết thành công các ví dụ nhận biết và tính số hạng tổng quát.',
          implementation: {
            step1_transfer: 'Giáo viên chia lớp thành 4 nhóm lớn, phát Phiếu học tập số 1 yêu cầu tìm quy luật tổng quát từ dãy số: u1, u2 = u1*q, u3 = u1*q^2,... dự đoán un.',
            step2_execution: 'Học sinh thực hiện nhiệm vụ theo kỹ thuật khăn trải bàn trong thời gian 12 phút; giáo viên quan sát hỗ trợ các nhóm gặp khó khăn với trường hợp q âm hoặc q = 0.',
            step3_discussion: 'Đại diện nhóm 1 trình bày suy luận công thức un; đại diện nhóm 3 trình bày mẹo nhân q*Sn để triệt tiêu các số hạng trung gian suy ra công thức tổng Sn.',
            step4_conclusion: 'Giáo viên chuẩn hóa kiến thức bằng bảng tổng kết đối chiếu giữa Cấp số cộng và Cấp số nhân trên màn hình; học sinh đóng khung công thức vào vở.'
          }
        },
        {
          id: 'act-3',
          name: 'HOẠT ĐỘNG 3: LUYỆN TẬP (Củng cố kỹ năng & thuật toán)',
          stageNumber: 3,
          timeAllocation: '10 phút',
          objective: 'Rèn luyện kỹ năng nhận diện cấp số nhân, tìm công bội q, số hạng u1, un và tính tổng Sn trong các bài toán đại số.',
          content: 'Làm việc cá nhân giải bài toán: Cho cấp số nhân (un) có u1 = 3 và u4 = 24. Tìm công bội q, số hạng thứ 10 và tính tổng 10 số hạng đầu tiên.',
          product: 'Bài làm trên vở của học sinh: q^3 = 8 => q = 2; u10 = 3 * 2^9 = 1536; S10 = 3*(1 - 2^10)/(1 - 2) = 3069.',
          implementation: {
            step1_transfer: 'Giáo viên giao bài tập luyện tập trên màn hình chiếu, quy định thời gian làm việc cá nhân 6 phút, sau đó đổi chéo bài kiểm tra chấm điểm.',
            step2_execution: 'Học sinh độc lập làm bài vào vở, bấm máy tính kiểm tra lại kết quả.',
            step3_discussion: 'Giáo viên gọi 1 học sinh lên bảng trình bày chi tiết các bước; 1 học sinh khác nhận xét lỗi sai phổ biến (quên điều kiện n nguyên dương hoặc nhầm lũy thừa n thay vì n-1).',
            step4_conclusion: 'Giáo viên nhận xét, cho điểm cộng khuyến khích và rút ra lưu ý khi xử lý phương trình chứa cấp số nhân.'
          }
        },
        {
          id: 'act-4',
          name: 'HOẠT ĐỘNG 4: VẬN DỤNG (Liên hệ thực tiễn & mô hình hóa tài chính)',
          stageNumber: 4,
          timeAllocation: '8 phút',
          objective: 'Vận dụng cấp số nhân vào mô hình hóa tài chính: Công thức lãi kép ngân hàng và bài toán tiết kiệm tích lũy.',
          content: 'Tình huống: Một người gửi 100 triệu đồng vào ngân hàng với lãi suất 6%/năm theo hình thức lãi kép. Hỏi sau 5 năm số tiền người đó nhận được cả gốc lẫn lãi là bao nhiêu?',
          product: 'Mô hình hóa: A_n = A_0 * (1 + r)^n. Sau 5 năm: T = 100 * (1 + 0.06)^5 ≈ 133.82 triệu đồng. Học sinh nhận thức được sức mạnh của lãi kép.',
          implementation: {
            step1_transfer: 'Giáo viên trình chiếu tình huống tài chính thực tế và đặt câu hỏi gợi ý: Số tiền sau mỗi năm lập thành dãy số gì?',
            step2_execution: 'Học sinh làm việc nhóm đôi trong 4 phút, lập bảng theo dõi số tiền cuối năm 1, năm 2,... từ đó suy ra công thức tổng quát.',
            step3_discussion: 'Đại diện một cặp đôi trình bày mối liên hệ: Đây chính là cấp số nhân với u1 = A_0*(1+r) và công bội q = (1+r).',
            step4_conclusion: 'Giáo viên nhấn mạnh câu nói nổi tiếng của Albert Einstein: "Lãi kép là kỳ quan thứ 8 của thế giới"; dặn dò học sinh bài tập mở rộng về nhà tìm hiểu bài toán trả góp mua xe máy.'
          }
        }
      ]
    },
    slides: [
      {
        id: 's-1',
        activityStage: 0,
        slideNumber: 1,
        title: 'BÀI 7: CẤP SỐ NHÂN & ỨNG DỤNG TÀI CHÍNH',
        subtitle: 'Môn Toán 11 · Chương II: Dãy số. Cấp số cộng và Cấp số nhân',
        bulletPoints: [
          'Định nghĩa Cấp số nhân và tính chất công bội q',
          'Công thức số hạng tổng quát: un = u1 · q^(n-1)',
          'Tổng n số hạng đầu: Sn = u1 · (1 - q^n) / (1 - q)',
          'Ứng dụng thực tiễn: Bài toán lãi kép & Quản lý tài chính cá nhân'
        ],
        calloutBox: {
          type: 'tip',
          title: 'Yêu cầu tiết học',
          content: 'Chuẩn bị máy tính cầm tay, sổ tay ghi chép công thức và tinh thần làm việc nhóm tích cực.'
        },
        speakerNotes: 'Chào cả lớp! Hôm nay chúng ta sẽ khám phá một trong những quy luật toán học quyền năng nhất trong tự nhiên và tài chính: Cấp số nhân.'
      },
      {
        id: 's-2',
        activityStage: 1,
        slideNumber: 2,
        title: 'HOẠT ĐỘNG 1: KHỞI ĐỘNG · BÀN CỜ VUA & HẠT THÓC',
        subtitle: 'Bài toán cổ tích Ấn Độ của nhà thông thái Sessa',
        bulletPoints: [
          'Ô thứ 1: Đặt 1 hạt thóc (2^0)',
          'Ô thứ 2: Đặt 2 hạt thóc (2^1)',
          'Ô thứ 3: Đặt 4 hạt thóc (2^2)',
          'Ô thứ 64: Cần bao nhiêu hạt thóc? Tổng cộng cần bao nhiêu?'
        ],
        visualType: 'formula',
        visualContent: 'Tổng S_64 = 1 + 2 + 2^2 + ... + 2^63 = 2^64 - 1 ≈ 18.446.744.073.709.551.615 hạt (~369 tỷ tấn thóc)',
        calloutBox: {
          type: 'question',
          title: 'Câu hỏi kích hoạt',
          content: 'Quy luật tăng trưởng này có gì khác biệt căn bản so với cấp số cộng d = 2 mà các em đã học?'
        },
        speakerNotes: 'Chiếu video hoặc kể vắn tắt chuyện nhà vua tưởng thưởng ít ai ngờ phải nợ sản lượng lương thực toàn cầu trong 2000 năm.',
        timerMinutes: 3
      },
      {
        id: 's-3',
        activityStage: 2,
        slideNumber: 3,
        title: 'HOẠT ĐỘNG 2: ĐỊNH NGHĨA & SỐ HẠNG TỔNG QUÁT',
        subtitle: 'Kiến thức trọng tâm số 1',
        bulletPoints: [
          'Định nghĩa: un+1 = un · q với mọi n ≥ 1 (q gọi là công bội)',
          'Khi q = 1: Cấp số nhân là dãy số không đổi (un = u1)',
          'Khi q = 0: u1, 0, 0, 0, ...',
          'Khi u1 = 0: Dãy số toàn số 0 với mọi q'
        ],
        visualType: 'comparison',
        visualContent: 'Số hạng tổng quát: un = u1 · q^(n-1) (với n ≥ 2)',
        calloutBox: {
          type: 'definition',
          title: 'Định lý trọng tâm',
          content: 'Nếu dãy số (un) là một cấp số nhân với công bội q thì: un = u1 · q^(n-1).'
        },
        speakerNotes: 'Lưu ý học sinh số mũ ở đây là n - 1 chứ không phải n. Rất nhiều học sinh kiểm tra bị trừ điểm oan ở chỗ này!'
      },
      {
        id: 's-4',
        activityStage: 2,
        slideNumber: 4,
        title: 'HOẠT ĐỘNG 2: TỔNG n SỐ HẠNG ĐẦU TIÊN (Sn)',
        subtitle: 'Kiến thức trọng tâm số 2 & Kỹ thuật nhân sai phân',
        bulletPoints: [
          'Xét tổng: Sn = u1 + u1·q + u1·q^2 + ... + u1·q^(n-1)',
          'Nhân hai vế với q: q·Sn = u1·q + u1·q^2 + ... + u1·q^n',
          'Lấy Sn - q·Sn: (1 - q)·Sn = u1 - u1·q^n = u1·(1 - q^n)',
          'Khi q ≠ 1 suy ra: Sn = u1 · (1 - q^n) / (1 - q)'
        ],
        visualType: 'formula',
        visualContent: 'Sn = u1 · (1 - q^n) / (1 - q)  (q ≠ 1)   |   Khi q = 1 thì Sn = n · u1',
        calloutBox: {
          type: 'tip',
          title: 'Mẹo nhớ công thức',
          content: 'Tử số chứa (1 - q^n), mẫu số chứa (1 - q). Hoặc có thể viết: u1 · (q^n - 1) / (q - 1).'
        },
        speakerNotes: 'Nhấn mạnh thủ thuật triệt tiêu các số hạng ở giữa. Đây là tư duy toán học nền tảng cho chuỗi số vô hạn sau này.'
      },
      {
        id: 's-5',
        activityStage: 3,
        slideNumber: 5,
        title: 'HOẠT ĐỘNG 3: LUYỆN TẬP TÍNH TOÁN NHANH',
        subtitle: 'Thực hành tính toán cá nhân & Đổi chéo phiếu học tập',
        bulletPoints: [
          'Bài toán mẫu: Cho cấp số nhân (un) có u1 = 3 và u4 = 24.',
          'a) Tìm công bội q của cấp số nhân?',
          'b) Tính số hạng u10?',
          'c) Tính tổng 10 số hạng đầu tiên S10?'
        ],
        visualType: 'code',
        visualContent: 'u4 = u1 · q^3 => 24 = 3 · q^3 => q^3 = 8 => q = 2\nu10 = 3 · 2^9 = 1536\nS10 = 3 · (1 - 2^10) / (1 - 2) = 3 · 1023 = 3069',
        calloutBox: {
          type: 'task',
          title: 'Nhiệm vụ cá nhân (5 phút)',
          content: 'Giải vào vở trong 5 phút. Sau đó đổi vở cho bạn cùng bàn kiểm tra chéo.'
        },
        speakerNotes: 'Quan sát các bàn cuối xem có ai nhầm q^3 = 8 => q = ±2 không (nhắc lại căn bậc lẻ chỉ có 1 nghiệm thực).',
        timerMinutes: 5
      },
      {
        id: 's-6',
        activityStage: 4,
        slideNumber: 6,
        title: 'HOẠT ĐỘNG 4: VẬN DỤNG · BÀI TOÁN LÃI KÉP NGÂN HÀNG',
        subtitle: 'Mô hình hóa toán học phục vụ đời sống',
        bulletPoints: [
          'Gửi số tiền gốc A0 với lãi suất r%/kỳ hạn.',
          'Sau kỳ 1: A1 = A0 + A0·r = A0(1 + r)',
          'Sau kỳ 2: A2 = A1(1 + r) = A0(1 + r)^2',
          'Sau n kỳ: An = A0(1 + r)^n'
        ],
        visualType: 'formula',
        visualContent: 'An = A0 · (1 + r)^n  [Dãy (An) là Cấp số nhân với u1 = A0(1+r) và q = 1+r]',
        calloutBox: {
          type: 'question',
          title: 'Tình huống tài chính',
          content: 'Nếu gửi 100 triệu với lãi 6%/năm trong 5 năm: T = 100 · (1 + 0.06)^5 = 133,82 triệu đồng. Tiền lãi là 33,82 triệu!'
        },
        speakerNotes: 'Giải thích cho học sinh vì sao người ta gọi lãi kép là "kỳ quan số 8". Hãy giáo dục tư duy tài chính lành mạnh cho các em.'
      }
    ],
    exam: {
      id: 'exam-math-11-midterm',
      title: 'ĐỀ KIỂM TRA ĐỊNH KỲ GIỮA KỲ I - NĂM HỌC 2026 - 2027',
      subject: 'Toán học',
      grade: 11,
      durationMinutes: 90,
      academicYear: '2026 - 2027',
      semester: 'Học kỳ I',
      schoolName: 'TRƯỜNG THPT CHUYÊN LÊ HỒNG PHONG',
      examCode: 'MÃ ĐỀ 101',
      totalPoints: 10.0,
      weighting: {
        nhanBiet: 4.0, // 40%
        thongHieu: 3.0, // 30%
        vanDung: 3.0 // 30%
      },
      part1: [
        {
          id: 'p1-q1',
          questionNumber: 1,
          content: 'Cho cấp số nhân (un) với số hạng đầu u1 = 2 và công bội q = 3. Số hạng thứ hai u2 của cấp số nhân bằng bao nhiêu?',
          options: {
            A: '5',
            B: '6',
            C: '8',
            D: '9'
          },
          correctAnswer: 'B',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Cấp số nhân',
          explanation: 'Áp dụng định nghĩa: u2 = u1 * q = 2 * 3 = 6.'
        },
        {
          id: 'p1-q2',
          questionNumber: 2,
          content: 'Dãy số nào sau đây là một cấp số nhân?',
          options: {
            A: '1; 3; 5; 7; 9',
            B: '2; 4; 8; 16; 32',
            C: '1; 4; 9; 16; 25',
            D: '3; 6; 9; 12; 15'
          },
          correctAnswer: 'B',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Cấp số nhân',
          explanation: 'Dãy B có u_n+1 / u_n = 2 không đổi, do đó là cấp số nhân với u1 = 2, q = 2.'
        },
        {
          id: 'p1-q3',
          questionNumber: 3,
          content: 'Cho cấp số nhân (un) có u1 = -3 và công bội q = -2. Số hạng thứ 5 u5 bằng',
          options: {
            A: '-48',
            B: '48',
            C: '96',
            D: '-96'
          },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Cấp số nhân',
          explanation: 'u5 = u1 * q^4 = (-3) * (-2)^4 = (-3) * 16 = -48.'
        },
        {
          id: 'p1-q4',
          questionNumber: 4,
          content: 'Công thức nào sau đây dùng để tính số hạng tổng quát của cấp số nhân (un) có số hạng đầu u1 và công bội q?',
          options: {
            A: 'un = u1 + (n - 1)q',
            B: 'un = u1 * q^n',
            C: 'un = u1 * q^(n - 1)',
            D: 'un = u1 * (n - 1)^q'
          },
          correctAnswer: 'C',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Cấp số nhân',
          explanation: 'Theo định lý số hạng tổng quát của cấp số nhân: un = u1 * q^(n-1).'
        },
        {
          id: 'p1-q5',
          questionNumber: 5,
          content: 'Cho cấp số nhân (un) có u1 = 5 và u2 = 10. Công bội q của cấp số nhân bằng',
          options: {
            A: '2',
            B: '5',
            C: '1/2',
            D: '-2'
          },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Cấp số nhân',
          explanation: 'q = u2 / u1 = 10 / 5 = 2.'
        },
        {
          id: 'p1-q6',
          questionNumber: 6,
          content: 'Cho cấp số nhân (un) có u1 = 4, q = 1/2. Số hạng u4 bằng',
          options: {
            A: '1/2',
            B: '1',
            C: '2',
            D: '1/4'
          },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'thong_hieu',
          topic: 'Cấp số nhân',
          explanation: 'u4 = u1 * q^3 = 4 * (1/2)^3 = 4 * 1/8 = 1/2.'
        },
        {
          id: 'p1-q7',
          questionNumber: 7,
          content: 'Cho cấp số cộng (vn) có v1 = 3 và công sai d = 4. Số hạng v10 bằng',
          options: {
            A: '39',
            B: '43',
            C: '36',
            D: '40'
          },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Cấp số cộng',
          explanation: 'v10 = v1 + 9d = 3 + 9*4 = 3 + 36 = 39.'
        },
        {
          id: 'p1-q8',
          questionNumber: 8,
          content: 'Tổng của 5 số hạng đầu tiên của cấp số nhân 1, 2, 4, 8, 16 là',
          options: {
            A: '31',
            B: '32',
            C: '30',
            D: '63'
          },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'thong_hieu',
          topic: 'Cấp số nhân',
          explanation: 'S5 = 1 * (1 - 2^5)/(1 - 2) = (1 - 32)/(-1) = 31.'
        },
        {
          id: 'p1-q9',
          questionNumber: 9,
          content: 'Tìm x để ba số 2, x, 18 theo thứ tự lập thành một cấp số nhân có các số hạng dương.',
          options: {
            A: 'x = 6',
            B: 'x = 9',
            C: 'x = 10',
            D: 'x = 36'
          },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'thong_hieu',
          topic: 'Cấp số nhân',
          explanation: 'Theo tính chất cấp số nhân: x^2 = 2 * 18 = 36. Vì các số hạng dương nên x = 6.'
        },
        {
          id: 'p1-q10',
          questionNumber: 10,
          content: 'Cho góc lượng giác alpha thỏa mãn sin(alpha) = 3/5 và pi/2 < alpha < pi. Giá trị của cos(alpha) bằng',
          options: {
            A: '-4/5',
            B: '4/5',
            C: '-3/4',
            D: '3/4'
          },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Hàm số lượng giác',
          explanation: 'cos^2(alpha) = 1 - sin^2 = 1 - 9/25 = 16/25. Do pi/2 < alpha < pi nên cos(alpha) < 0, vậy cos(alpha) = -4/5.'
        },
        {
          id: 'p1-q11',
          questionNumber: 11,
          content: 'Tập xác định của hàm số y = tan(x) là',
          options: {
            A: 'R \\ {pi/2 + k*pi, k thuộc Z}',
            B: 'R \\ {k*pi, k thuộc Z}',
            C: 'R \\ {pi/4 + k*pi, k thuộc Z}',
            D: 'R'
          },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Hàm số lượng giác',
          explanation: 'Hàm y = tan(x) xác định khi cos(x) khác 0 <=> x khác pi/2 + k*pi.'
        },
        {
          id: 'p1-q12',
          questionNumber: 12,
          content: 'Nghiệm của phương trình cos(x) = 1/2 là',
          options: {
            A: 'x = ± pi/3 + k*2pi, k thuộc Z',
            B: 'x = ± pi/6 + k*2pi, k thuộc Z',
            C: 'x = pi/3 + k*pi, k thuộc Z',
            D: 'x = ± 2pi/3 + k*2pi, k thuộc Z'
          },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Phương trình lượng giác',
          explanation: 'cos(x) = cos(pi/3) <=> x = ± pi/3 + k2pi, k thuộc Z.'
        }
      ],
      part2: [
        {
          id: 'p2-q1',
          questionNumber: 1,
          contextPrompt: 'Cho cấp số nhân (un) có số hạng đầu u1 = 3 và công bội q = 2. Xét tính Đúng hoặc Sai của các khẳng định sau:',
          statements: [
            {
              id: 'p2-q1-a',
              letter: 'a',
              content: 'Số hạng thứ tư của cấp số nhân là u4 = 24.',
              isCorrect: true,
              explanation: 'u4 = u1 * q^3 = 3 * 2^3 = 3 * 8 = 24. Khẳng định ĐÚNG.'
            },
            {
              id: 'p2-q1-b',
              letter: 'b',
              content: 'Số hạng tổng quát của cấp số nhân là un = 3 * 2^n.',
              isCorrect: false,
              explanation: 'Số hạng tổng quát đúng là un = 3 * 2^(n-1). Khẳng định SAI.'
            },
            {
              id: 'p2-q1-c',
              letter: 'c',
              content: 'Số 768 là một số hạng của cấp số nhân đã cho.',
              isCorrect: true,
              explanation: 'Giải 3 * 2^(n-1) = 768 <=> 2^(n-1) = 256 = 2^8 <=> n - 1 = 8 <=> n = 9 thuộc N*. Khẳng định ĐÚNG.'
            },
            {
              id: 'p2-q1-d',
              letter: 'd',
              content: 'Tổng của 8 số hạng đầu tiên của cấp số nhân là S8 = 765.',
              isCorrect: true,
              explanation: 'S8 = 3 * (1 - 2^8)/(1 - 2) = 3 * (256 - 1) = 3 * 255 = 765. Khẳng định ĐÚNG.'
            }
          ],
          cognitiveLevel: 'thong_hieu',
          topic: 'Cấp số nhân',
          maxPoints: 1.0
        },
        {
          id: 'p2-q2',
          questionNumber: 2,
          contextPrompt: 'Một người gửi tiết kiệm ngân hàng 200 triệu đồng theo hình thức lãi kép với lãi suất cố định 7%/năm. Tiền lãi hàng năm được nhập vào vốn để tính lãi cho năm tiếp theo. Xét tính Đúng hoặc Sai của các nhận định sau:',
          statements: [
            {
              id: 'p2-q2-a',
              letter: 'a',
              content: 'Số tiền người đó có được ở cuối mỗi năm lập thành một cấp số nhân có công bội q = 1,07.',
              isCorrect: true,
              explanation: 'Mỗi năm số tiền nhân với hệ số (1 + 0,07) = 1,07 nên tạo thành cấp số nhân với q = 1,07. Khẳng định ĐÚNG.'
            },
            {
              id: 'p2-q2-b',
              letter: 'b',
              content: 'Sau đúng 1 năm, số tiền lãi người đó nhận được là 14 triệu đồng.',
              isCorrect: true,
              explanation: 'Tiền lãi năm 1 = 200 * 0,07 = 14 triệu đồng. Khẳng định ĐÚNG.'
            },
            {
              id: 'p2-q2-c',
              letter: 'c',
              content: 'Sau 3 năm, tổng số tiền cả gốc và lãi người đó nhận được ít hơn 245 triệu đồng.',
              isCorrect: false,
              explanation: 'A3 = 200 * (1,07)^3 = 200 * 1,225043 = 245,0086 triệu đồng (> 245 triệu). Khẳng định SAI.'
            },
            {
              id: 'p2-q2-d',
              letter: 'd',
              content: 'Phải sau ít nhất 11 năm thì số tiền người đó nhận được mới gấp đôi số tiền gửi ban đầu.',
              isCorrect: true,
              explanation: '200*(1,07)^n >= 400 <=> (1,07)^n >= 2 <=> n >= ln(2)/ln(1,07) ≈ 10,24 => n nhỏ nhất là 11 năm. Khẳng định ĐÚNG.'
            }
          ],
          cognitiveLevel: 'van_dung',
          topic: 'Ứng dụng cấp số nhân',
          maxPoints: 1.0
        },
        {
          id: 'p2-q3',
          questionNumber: 3,
          contextPrompt: 'Cho hàm số f(x) = 2*cos(2x - pi/3) + 1. Xét tính Đúng hoặc Sai của các mệnh đề sau:',
          statements: [
            {
              id: 'p2-q3-a',
              letter: 'a',
              content: 'Tập xác định của hàm số là D = R.',
              isCorrect: true,
              explanation: 'Hàm số cos xác định trên toàn bộ trục số thực R. Khẳng định ĐÚNG.'
            },
            {
              id: 'p2-q3-b',
              letter: 'b',
              content: 'Chu kỳ tuần hoàn của hàm số là T = 2pi.',
              isCorrect: false,
              explanation: 'Chu kỳ của hàm cos(ax+b) là T = 2pi/|a| = 2pi/2 = pi. Khẳng định SAI.'
            },
            {
              id: 'p2-q3-c',
              letter: 'c',
              content: 'Giá trị lớn nhất của hàm số trên R bằng 3.',
              isCorrect: true,
              explanation: 'Do -1 <= cos <= 1 nên max y = 2*1 + 1 = 3. Khẳng định ĐÚNG.'
            },
            {
              id: 'p2-q3-d',
              letter: 'd',
              content: 'Phương trình f(x) = 0 có đúng 2 nghiệm thuộc đoạn [0; pi].',
              isCorrect: true,
              explanation: '2*cos(2x - pi/3) + 1 = 0 <=> cos(2x - pi/3) = -1/2. Trên [0; pi], góc (2x - pi/3) chạy từ -pi/3 đến 5pi/3 có 2 nghiệm. Khẳng định ĐÚNG.'
            }
          ],
          cognitiveLevel: 'thong_hieu',
          topic: 'Hàm số lượng giác',
          maxPoints: 1.0
        },
        {
          id: 'p2-q4',
          questionNumber: 4,
          contextPrompt: 'Một vi khuẩn phân chia đôi sau mỗi 20 phút. Ban đầu trong môi trường thí nghiệm có 100 tế bào vi khuẩn. Coi điều kiện môi trường là lý tưởng và không có tế bào nào bị chết. Xét tính Đúng hoặc Sai của các mệnh đề sau:',
          statements: [
            {
              id: 'p2-q4-a',
              letter: 'a',
              content: 'Sau 1 giờ (60 phút), số tế bào vi khuẩn trong môi trường là 800 tế bào.',
              isCorrect: true,
              explanation: '1 giờ có 3 chu kỳ phân đôi: N = 100 * 2^3 = 800 tế bào. Khẳng định ĐÚNG.'
            },
            {
              id: 'p2-q4-b',
              letter: 'b',
              content: 'Số tế bào vi khuẩn sau n chu kỳ phân chia tuân theo công thức cấp số nhân với u1 = 100 và q = 2.',
              isCorrect: true,
              explanation: 'Mỗi chu kỳ nhân đôi nên q = 2, ban đầu là u0 = 100, sau chu kỳ 1 là u1 = 200 hoặc mô hình hóa cấp số nhân. Khẳng định ĐÚNG.'
            },
            {
              id: 'p2-q4-c',
              letter: 'c',
              content: 'Sau 3 giờ, số tế bào vi khuẩn vượt quá 50.000 tế bào.',
              isCorrect: true,
              explanation: '3 giờ = 9 chu kỳ. N = 100 * 2^9 = 100 * 512 = 51.200 tế bào (> 50.000). Khẳng định ĐÚNG.'
            },
            {
              id: 'p2-q4-d',
              letter: 'd',
              content: 'Thời gian để quần thể đạt 1.000.000 tế bào là đúng 4 giờ.',
              isCorrect: false,
              explanation: 'Sau 4 giờ (12 chu kỳ): N = 100 * 2^12 = 409.600 tế bào (< 1.000.000). Cần khoảng 4,44 giờ (14 chu kỳ). Khẳng định SAI.'
            }
          ],
          cognitiveLevel: 'van_dung',
          topic: 'Ứng dụng cấp số nhân',
          maxPoints: 1.0
        }
      ],
      part3: [
        {
          id: 'p3-q1',
          questionNumber: 1,
          content: 'Cho cấp số nhân (un) có u1 = 2 và công bội q = 5. Biết số hạng un = 1250. Hỏi n bằng bao nhiêu?',
          correctAnswer: '5',
          points: 0.5,
          cognitiveLevel: 'thong_hieu',
          topic: 'Cấp số nhân',
          explanation: 'un = u1 * q^(n-1) <=> 1250 = 2 * 5^(n-1) <=> 5^(n-1) = 625 = 5^4 <=> n - 1 = 4 <=> n = 5.'
        },
        {
          id: 'p3-q2',
          questionNumber: 2,
          content: 'Tìm số hạng đầu u1 của cấp số nhân (un) biết rằng: u4 - u2 = 72 và u5 - u3 = 144.',
          correctAnswer: '12',
          points: 0.5,
          cognitiveLevel: 'thong_hieu',
          topic: 'Cấp số nhân',
          explanation: 'Lập tỉ số (u5 - u3)/(u4 - u2) = q = 144/72 = 2. Thay vào u4 - u2 = u1*q^3 - u1*q = u1*(8 - 2) = 6*u1 = 72 => u1 = 12.'
        },
        {
          id: 'p3-q3',
          questionNumber: 3,
          content: 'Một hình vuông có cạnh bằng 8 cm. Người ta nối các trung điểm của bốn cạnh để được hình vuông thứ hai, tiếp tục như vậy ta được các hình vuông tiếp theo. Tính tổng diện tích của 6 hình vuông đầu tiên theo đơn vị cm^2 (kết quả làm tròn đến chữ số hàng đơn vị).',
          correctAnswer: '126',
          unit: 'cm²',
          points: 0.5,
          cognitiveLevel: 'van_dung',
          topic: 'Cấp số nhân',
          explanation: 'Diện tích hình vuông đầu: S1 = 64. Hình vuông sau có cạnh bằng a/sqrt(2) nên diện tích bằng một nửa hình trước: q = 1/2. Tổng 6 hình vuông: S = 64 * (1 - (1/2)^6)/(1 - 1/2) = 128 * (1 - 1/64) = 126 cm^2.'
        },
        {
          id: 'p3-q4',
          questionNumber: 4,
          content: 'Tìm số nghiệm thuộc khoảng (0; 2pi) của phương trình sin(2x) - cos(x) = 0.',
          correctAnswer: '4',
          points: 0.5,
          cognitiveLevel: 'thong_hieu',
          topic: 'Phương trình lượng giác',
          explanation: '2*sin(x)*cos(x) - cos(x) = 0 <=> cos(x)*(2*sin(x) - 1) = 0. cos(x)=0 => x = pi/2, 3pi/2. sin(x)=1/2 => x = pi/6, 5pi/6. Tất cả có 4 nghiệm phân biệt.'
        }
      ],
      part4: [
        {
          id: 'p4-q1',
          questionNumber: 1,
          content: 'Bác Nam vay ngân hàng 300 triệu đồng để kinh doanh với lãi suất 0,8%/tháng theo hình thức trả góp. Mỗi tháng bác Nam trả đều đặn một số tiền cố định là m triệu đồng vào cuối tháng. Ngân hàng tính lãi trên số dư nợ còn lại của tháng đó.\na) Thiết lập công thức tính số dư nợ còn lại sau n tháng trả góp.\nb) Nếu bác Nam muốn trả hết toàn bộ số nợ sau đúng 24 tháng thì mỗi tháng bác phải trả bao nhiêu tiền (làm tròn kết quả đến hàng nghìn đồng)?',
          points: 1.0,
          cognitiveLevel: 'van_dung_cao',
          topic: 'Ứng dụng cấp số nhân & Lãi suất',
          gradingCriteria: [
            {
              step: 'Bước 1: Thiết lập mô hình dư nợ tháng 1 và 2',
              detail: 'Sau tháng 1: D1 = A(1+r) - m. Sau tháng 2: D2 = D1(1+r) - m = A(1+r)^2 - m[(1+r) + 1].',
              points: 0.25
            },
            {
              step: 'Bước 2: Quy nạp công thức cấp số nhân sau n tháng',
              detail: 'Sau n tháng: Dn = A(1+r)^n - m * [(1+r)^n - 1] / r.',
              points: 0.25
            },
            {
              step: 'Bước 3: Thiết lập phương trình hết nợ Dn = 0',
              detail: 'Để trả hết sau n tháng thì Dn = 0 <=> m = A * r * (1+r)^n / [(1+r)^n - 1].',
              points: 0.25
            },
            {
              step: 'Bước 4: Thay số tính toán kết quả cụ thể',
              detail: 'Thay A = 300 triệu, r = 0,008, n = 24: m = 300 * 0,008 * (1,008)^24 / [(1,008)^24 - 1] ≈ 13.782.000 đồng/tháng.',
              points: 0.25
            }
          ]
        }
      ],
      matrix: [
        {
          topic: '1. Dãy số - Cấp số cộng',
          part1_nhanbiet: 1,
          part1_thonghieu: 0,
          part2_nhanbiet: 0,
          part2_thonghieu: 0,
          part2_vandung: 0,
          part3_thonghieu: 0,
          part3_vandung: 0,
          part4_vandung: 0,
          part4_vandungcao: 0,
          totalPoints: 0.25,
          percentage: 2.5
        },
        {
          topic: '2. Cấp số nhân (Định nghĩa, un, Sn)',
          part1_nhanbiet: 5,
          part1_thonghieu: 3,
          part2_nhanbiet: 0,
          part2_thonghieu: 1,
          part2_vandung: 0,
          part3_thonghieu: 2,
          part3_vandung: 1,
          part4_vandung: 0,
          part4_vandungcao: 0,
          totalPoints: 4.5,
          percentage: 45.0
        },
        {
          topic: '3. Ứng dụng thực tiễn & Tài chính',
          part1_nhanbiet: 0,
          part1_thonghieu: 0,
          part2_nhanbiet: 0,
          part2_thonghieu: 0,
          part2_vandung: 2,
          part3_thonghieu: 0,
          part3_vandung: 0,
          part4_vandung: 0,
          part4_vandungcao: 1,
          totalPoints: 3.0,
          percentage: 30.0
        },
        {
          topic: '4. Hàm số & Phương trình lượng giác',
          part1_nhanbiet: 3,
          part1_thonghieu: 0,
          part2_nhanbiet: 0,
          part2_thonghieu: 1,
          part2_vandung: 0,
          part3_thonghieu: 1,
          part3_vandung: 0,
          part4_vandung: 0,
          part4_vandungcao: 0,
          totalPoints: 2.25,
          percentage: 22.5
        }
      ],
      specifications: [
        {
          stt: 1,
          topic: 'Cấp số nhân',
          contentStandard: 'Nhận biết định nghĩa, số hạng đầu, công bội của cấp số nhân',
          cognitiveLevel: 'nhan_biet',
          part: 'I',
          questionNumber: 1,
          points: 0.25
        },
        {
          stt: 2,
          topic: 'Cấp số nhân',
          contentStandard: 'Nhận diện dãy số là cấp số nhân qua tỉ số không đổi',
          cognitiveLevel: 'nhan_biet',
          part: 'I',
          questionNumber: 2,
          points: 0.25
        },
        {
          stt: 3,
          topic: 'Cấp số nhân',
          contentStandard: 'Áp dụng công thức un = u1 * q^(n-1) tính số hạng thứ n',
          cognitiveLevel: 'nhan_biet',
          part: 'I',
          questionNumber: 3,
          points: 0.25
        },
        {
          stt: 4,
          topic: 'Cấp số nhân',
          contentStandard: 'Hiểu và phân tích tính chất, số hạng, tổng 8 số hạng đầu',
          cognitiveLevel: 'thong_hieu',
          part: 'II',
          questionNumber: 1,
          points: 1.0
        },
        {
          stt: 5,
          topic: 'Ứng dụng cấp số nhân',
          contentStandard: 'Vận dụng cấp số nhân giải quyết bài toán lãi kép và thời gian tăng trưởng',
          cognitiveLevel: 'van_dung',
          part: 'II',
          questionNumber: 2,
          points: 1.0
        },
        {
          stt: 6,
          topic: 'Cấp số nhân',
          contentStandard: 'Giải phương trình tìm chỉ số n khi biết giá trị số hạng un',
          cognitiveLevel: 'thong_hieu',
          part: 'III',
          questionNumber: 1,
          points: 0.5
        },
        {
          stt: 7,
          topic: 'Ứng dụng tài chính',
          contentStandard: 'Vận dụng cao mô hình hóa bài toán vay trả góp hàng tháng theo dư nợ giảm dần',
          cognitiveLevel: 'van_dung_cao',
          part: 'IV',
          questionNumber: 1,
          points: 1.0
        }
      ]
    }
  },
  physics: {
    version: '1.0.0',
    lastUpdated: '2026-10-10T09:00:00Z',
    activeSubject: 'physics',
    lessonPlan: {
      id: 'phys-12-oscillation',
      title: 'BÀI 1: DAO ĐỘNG ĐIỀU HÒA VÀ BẢO TOÀN CƠ NĂNG',
      subject: 'Vật lý',
      grade: 12,
      duration: '2 tiết (90 phút)',
      curriculum: 'Kết nối tri thức với cuộc sống',
      schoolName: 'Trường THPT Chuyên Quốc Học Huế',
      teacherName: 'Trần Minh Đức',
      datePrepared: '2026-10-10',
      objectives: {
        knowledge: [
          'Định nghĩa được dao động tuần hoàn, dao động điều hòa, li độ, biên độ, chu kì, tần số và pha dao động.',
          'Viết được phương trình li độ x = A*cos(omega*t + phi), vận tốc v và gia tốc a.',
          'Phân tích được sự biến thiên động năng, thế năng và sự bảo toàn cơ năng trong dao động điều hòa.'
        ],
        generalCompetencies: [
          'Tự chủ và tự học: Tìm tòi khảo sát đồ thị li độ - thời gian bằng phần mềm mô phỏng PhET.',
          'Giao tiếp và hợp tác: Phối hợp nhóm đo chu kì dao động của con lắc lò xo.',
          'Giải quyết vấn đề: Giải thích hiện tượng giảm chấn trong kỹ thuật cầu đường.'
        ],
        specificCompetencies: [
          'Nhận thức vật lý: Phân biệt được dao động tự do và dao động duy trì.',
          'Tìm hiểu thế giới tự nhiên dưới góc độ vật lý: Thực nghiệm đo chu kì T của con lắc đơn và con lắc lò xo.'
        ],
        qualities: [
          'Trung thực: Thu thập dữ liệu thực nghiệm trung thực, không sửa sai số.',
          'Chăm chỉ: Hoàn thành phiếu thí nghiệm số 1 và tính toán sai số phép đo.'
        ]
      },
      equipment: {
        teacher: ['Bộ thí nghiệm con lắc lò xo cảm biến lực, phần mềm mô phỏng PhET, giáo án 5512, slide.'],
        student: ['Sách giáo khoa Vật lý 12, đồng hồ bấm giây trên điện thoại, thước milimet.']
      },
      activities: [
        {
          id: 'act-p1',
          name: 'HOẠT ĐỘNG 1: MỞ ĐẦU (Khởi động)',
          stageNumber: 1,
          timeAllocation: '8 phút',
          objective: 'Kích hoạt kinh nghiệm thực tế về chuyển động qua lại quanh một vị trí cân bằng (xích đu, cành cây đung đưa, pit-tông).',
          content: 'Xem video chuyển động của pit-tông động cơ ô tô và con lắc đồng hồ cổ. Nhận xét đặc điểm chuyển động.',
          product: 'Học sinh nêu được: Vật lặp đi lặp lại quanh một vị trí cân bằng cố định theo hai chiều ngược nhau.',
          implementation: {
            step1_transfer: 'Giáo viên chiếu video 30 giây về xích đu và chuyển động pit-tông, yêu cầu tìm điểm chung.',
            step2_execution: 'Học sinh làm việc cặp đôi quan sát và ghi chép từ khóa.',
            step3_discussion: '2 học sinh phát biểu, chỉ ra đặc điểm vị trí cân bằng và tính tuần hoàn.',
            step4_conclusion: 'Giáo viên định nghĩa: Dao động cơ học là chuyển động có giới hạn trong không gian, lặp đi lặp lại quanh VTCB.'
          }
        },
        {
          id: 'act-p2',
          name: 'HOẠT ĐỘNG 2: HÌNH THÀNH KIẾN THỨC MỚI',
          stageNumber: 2,
          timeAllocation: '25 phút',
          objective: 'Xây dựng phương trình li độ x = A*cos(omega*t + phi), vận tốc v, gia tốc a và mối quan hệ vuông pha.',
          content: 'Phân tích hình chiếu chuyển động tròn đều lên một trục tọa độ ox; thực nghiệm con lắc lò xo vẽ đồ thị hình sin.',
          product: 'Học sinh vẽ đúng đồ thị hình sin; chứng minh được v sớm pha pi/2 so với x; a ngược pha với x: a = -omega^2*x.',
          implementation: {
            step1_transfer: 'Phát Phiếu học tập số 1, yêu cầu các nhóm khảo sát mối liên hệ giữa chuyển động tròn đều và dao động điều hòa.',
            step2_execution: 'Học sinh thảo luận nhóm 4, điền các đại lượng A, omega, phi vào bảng.',
            step3_discussion: 'Đại diện nhóm 2 trình bày đồ thị; nhóm 4 chất vấn về ý nghĩa dấu của pha ban đầu phi.',
            step4_conclusion: 'Giáo viên chốt lý thuyết: Dao động điều hòa là dao động mà li độ là hàm sin hoặc cos theo thời gian.'
          }
        },
        {
          id: 'act-p3',
          name: 'HOẠT ĐỘNG 3: LUYỆN TẬP',
          stageNumber: 3,
          timeAllocation: '10 phút',
          objective: 'Rèn luyện kỹ năng đọc đồ thị li độ x-t, xác định biên độ A, chu kì T, tần số góc omega và viết phương trình dao động.',
          content: 'Giải bài tập: Cho đồ thị x-t của một vật dao động điều hòa. Biên độ đỉnh 5cm, khoảng thời gian giữa 2 lần liên tiếp qua VTCB là 0,2s.',
          product: 'Bài giải: A = 5cm; T/2 = 0,2s => T = 0,4s; omega = 2pi/T = 5pi rad/s; viết chuẩn phương trình.',
          implementation: {
            step1_transfer: 'Giáo viên chiếu đồ thị lên màn hình, yêu cầu học sinh làm độc lập.',
            step2_execution: 'Học sinh tính toán trong 5 phút.',
            step3_discussion: 'Gọi 1 học sinh đọc kết quả và giải thích cách xác định chu kì trên đồ thị.',
            step4_conclusion: 'Giáo viên khắc sâu: Khoảng thời gian giữa 2 lần liên tiếp vật đi qua VTCB là T/2.'
          }
        },
        {
          id: 'act-p4',
          name: 'HOẠT ĐỘNG 4: VẬN DỤNG',
          stageNumber: 4,
          timeAllocation: '7 phút',
          objective: 'Ứng dụng hiện tượng bảo toàn cơ năng và dao động vào hệ thống giảm chấn của xe máy và nhà cao tầng chống động đất.',
          content: 'Nhiệm vụ: Tìm hiểu nguyên lý hoạt động của khối lượng điều chỉnh (Tuned Mass Damper) trên tháp Taipei 101.',
          product: 'Bản báo cáo ngắn nhóm về con lắc khổng lồ 660 tấn giúp triệt tiêu dao động gió bão của tòa nhà.',
          implementation: {
            step1_transfer: 'Giáo viên giao nhiệm vụ nghiên cứu khoa học thực tiễn.',
            step2_execution: 'Học sinh ghi nhận câu hỏi nghiên cứu về nhà.',
            step3_discussion: 'Thảo luận nhanh 2 phút về sự chuyển hóa thế năng thành động năng.',
            step4_conclusion: 'Giáo viên kết luận tiết học và dặn dò chuẩn bị bài Con lắc lò xo.'
          }
        }
      ]
    },
    slides: [
      {
        id: 'sp-1',
        activityStage: 0,
        slideNumber: 1,
        title: 'BÀI 1: DAO ĐỘNG ĐIỀU HÒA',
        subtitle: 'Vật lý 12 · Chương I: Dao động',
        bulletPoints: [
          'Mô tả chuyển động dao động và vị trí cân bằng',
          'Phương trình li độ x, vận tốc v, gia tốc a',
          'Đồ thị dao động điều hòa hình sin',
          'Năng lượng: Động năng, Thế năng & Cơ năng'
        ],
        calloutBox: {
          type: 'tip',
          title: 'Khái niệm chìa khóa',
          content: 'Li độ x (m hoặc cm), Biên độ A > 0, Tần số góc omega (rad/s), Pha ban đầu phi (rad).'
        },
        speakerNotes: 'Chào các em, dao động điều hòa là viên gạch đầu tiên của chương trình Vật lý 12.'
      },
      {
        id: 'sp-2',
        activityStage: 1,
        slideNumber: 2,
        title: 'HOẠT ĐỘNG 1: KHỞI ĐỘNG · CHUYỂN ĐỘNG DAO ĐỘNG',
        subtitle: 'Từ hiện tượng thực tế đến mô hình vật lý',
        bulletPoints: [
          'Chiếc xích đu đưa đi đưa lại quanh vị trí thấp nhất',
          'Dây đàn guitar rung động khi gảy nốt',
          'Cành cây đu đưa theo từng cơn gió',
          'Đặc điểm chung: Chuyển động qua lại quanh Vị Trí Cân Bằng (VTCB)'
        ],
        visualType: 'diagram',
        visualContent: 'Vật chuyển động từ -A (biên âm) qua 0 (VTCB) đến +A (biên dương) và ngược lại.',
        calloutBox: {
          type: 'question',
          title: 'Câu hỏi tư duy',
          content: 'Tại vị trí cân bằng, hợp lực tác dụng lên vật bằng bao nhiêu?'
        },
        speakerNotes: 'Nhấn mạnh khái niệm vị trí cân bằng là nơi hợp lực triệt tiêu.'
      }
    ],
    exam: {
      id: 'exam-phys-12-midterm',
      title: 'ĐỀ KIỂM TRA ĐỊNH KỲ GIỮA KỲ I VẬT LÝ 12',
      subject: 'Vật lý',
      grade: 12,
      durationMinutes: 50,
      academicYear: '2026 - 2027',
      semester: 'Học kỳ I',
      schoolName: 'TRƯỜNG THPT CHUYÊN QUỐC HỌC HUẾ',
      examCode: 'MÃ ĐỀ 204',
      totalPoints: 10.0,
      weighting: {
        nhanBiet: 4.0,
        thongHieu: 3.0,
        vanDung: 3.0
      },
      part1: [
        {
          id: 'p1-phys-1',
          questionNumber: 1,
          content: 'Một vật dao động điều hòa theo phương trình x = 6*cos(4pi*t + pi/3) (cm). Biên độ dao động của vật là',
          options: { A: '6 cm', B: '4 cm', C: '3 cm', D: '12 cm' },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Dao động điều hòa',
          explanation: 'Biên độ A = 6 cm.'
        },
        {
          id: 'p1-phys-2',
          questionNumber: 2,
          content: 'Trong dao động điều hòa, đại lượng nào sau đây không thay đổi theo thời gian?',
          options: { A: 'Li độ', B: 'Vận tốc', C: 'Biên độ', D: 'Gia tốc' },
          correctAnswer: 'C',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Dao động điều hòa',
          explanation: 'Biên độ A và tần số góc omega là các hằng số dương không đổi theo thời gian.'
        },
        {
          id: 'p1-phys-3',
          questionNumber: 3,
          content: 'Gia tốc của một chất điểm dao động điều hòa biến thiên',
          options: {
            A: 'cùng pha với li độ',
            B: 'ngược pha với li độ',
            C: 'sớm pha pi/2 so với li độ',
            D: 'trễ pha pi/2 so với li độ'
          },
          correctAnswer: 'B',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Dao động điều hòa',
          explanation: 'a = -omega^2 * x nên gia tốc ngược pha với li độ.'
        },
        {
          id: 'p1-phys-4',
          questionNumber: 4,
          content: 'Một con lắc lò xo có độ cứng k, vật nhỏ khối lượng m. Tần số góc dao động riêng của con lắc là',
          options: {
            A: 'omega = sqrt(k/m)',
            B: 'omega = sqrt(m/k)',
            C: 'omega = 2pi*sqrt(k/m)',
            D: 'omega = 1/(2pi)*sqrt(m/k)'
          },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Con lắc lò xo',
          explanation: 'Tần số góc con lắc lò xo là omega = sqrt(k/m).'
        },
        {
          id: 'p1-phys-5',
          questionNumber: 5,
          content: 'Vận tốc của chất điểm dao động điều hòa có độ lớn cực đại khi',
          options: {
            A: 'chất điểm qua vị trí cân bằng',
            B: 'chất điểm ở vị trí biên dương',
            C: 'chất điểm ở vị trí biên âm',
            D: 'pha dao động bằng pi'
          },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Dao động điều hòa',
          explanation: 'Khi qua vị trí cân bằng, x = 0 thì vmax = omega * A.'
        },
        {
          id: 'p1-phys-6',
          questionNumber: 6,
          content: 'Một vật dao động có chu kì T = 0,5 s. Tần số dao động f của vật là',
          options: { A: '2 Hz', B: '0,5 Hz', C: '4 Hz', D: '1 Hz' },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Dao động điều hòa',
          explanation: 'f = 1/T = 1/0,5 = 2 Hz.'
        },
        {
          id: 'p1-phys-7',
          questionNumber: 7,
          content: 'Cơ năng của một chất điểm dao động điều hòa tỉ lệ thuận với',
          options: {
            A: 'bình phương biên độ dao động',
            B: 'biên độ dao động',
            C: 'chu kì dao động',
            D: 'căn bậc hai của biên độ'
          },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Năng lượng dao động',
          explanation: 'W = 1/2 * m * omega^2 * A^2 tỉ lệ thuận với A^2.'
        },
        {
          id: 'p1-phys-8',
          questionNumber: 8,
          content: 'Động năng của vật dao động điều hòa biến thiên tuần hoàn với chu kì',
          options: { A: 'T/2', B: 'T', C: '2T', D: 'T/4' },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'thong_hieu',
          topic: 'Năng lượng dao động',
          explanation: 'Động năng và thế năng biến thiên với chu kì T\' = T/2 và tần số f\' = 2f.'
        },
        {
          id: 'p1-phys-9',
          questionNumber: 9,
          content: 'Một chất điểm dao động có phương trình x = 4*cos(2pi*t - pi/6) cm. Pha ban đầu của dao động là',
          options: { A: '-pi/6 rad', B: 'pi/6 rad', C: '2pi rad', D: '4 cm' },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Dao động điều hòa',
          explanation: 'Pha ban đầu phi = -pi/6 rad.'
        },
        {
          id: 'p1-phys-10',
          questionNumber: 10,
          content: 'Khi vật dao động điều hòa từ vị trí biên về vị trí cân bằng thì',
          options: {
            A: 'thế năng giảm, động năng tăng',
            B: 'thế năng tăng, động năng giảm',
            C: 'cơ năng giảm dần',
            D: 'vận tốc giảm dần'
          },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'thong_hieu',
          topic: 'Năng lượng dao động',
          explanation: 'Về VTCB: li độ giảm => thế năng giảm, tốc độ tăng => động năng tăng.'
        },
        {
          id: 'p1-phys-11',
          questionNumber: 11,
          content: 'Biểu thức liên hệ độc lập thời gian giữa li độ x và vận tốc v là',
          options: {
            A: 'x^2/A^2 + v^2/(omega^2 * A^2) = 1',
            B: 'x^2 + v^2 = A^2',
            C: 'x/A + v/(omega*A) = 1',
            D: 'x^2/A^2 - v^2/(omega^2 * A^2) = 1'
          },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Dao động điều hòa',
          explanation: 'Hệ thức độc lập vuông pha: x^2 + v^2/omega^2 = A^2.'
        },
        {
          id: 'p1-phys-12',
          questionNumber: 12,
          content: 'Một vật dao động có A = 10 cm. Quãng đường vật đi được trong một chu kì là',
          options: { A: '40 cm', B: '20 cm', C: '10 cm', D: '30 cm' },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Dao động điều hòa',
          explanation: 'Trong 1 chu kì, quãng đường vật luôn đi được là S = 4A = 4 * 10 = 40 cm.'
        }
      ],
      part2: [
        {
          id: 'p2-phys-1',
          questionNumber: 1,
          contextPrompt: 'Một con lắc lò xo treo thẳng đứng gồm lò xo nhẹ có độ cứng k = 100 N/m và vật nặng khối lượng m = 250 g. Lấy g = 10 m/s^2 và pi^2 = 10. Kích thích cho vật dao động điều hòa theo phương thẳng đứng với biên độ A = 4 cm. Xét tính Đúng hoặc Sai của các phát biểu sau:',
          statements: [
            {
              id: 'p2-phys-1-a',
              letter: 'a',
              content: 'Tần số góc dao động của con lắc là omega = 20 rad/s.',
              isCorrect: true,
              explanation: 'omega = sqrt(k/m) = sqrt(100 / 0,25) = sqrt(400) = 20 rad/s. Khẳng định ĐÚNG.'
            },
            {
              id: 'p2-phys-1-b',
              letter: 'b',
              content: 'Độ biến dạng của lò xo ở vị trí cân bằng là Delta_l0 = 2,5 cm.',
              isCorrect: true,
              explanation: 'Delta_l0 = m*g/k = 0,25 * 10 / 100 = 0,025 m = 2,5 cm. Khẳng định ĐÚNG.'
            },
            {
              id: 'p2-phys-1-c',
              letter: 'c',
              content: 'Lực đàn hồi cực đại tác dụng lên điểm treo có độ lớn là 4,5 N.',
              isCorrect: false,
              explanation: 'F_max = k*(Delta_l0 + A) = 100*(0,025 + 0,04) = 100*0,065 = 6,5 N. Khẳng định SAI.'
            },
            {
              id: 'p2-phys-1-d',
              letter: 'd',
              content: 'Trong một chu kì, thời gian lò xo bị nén là 1/15 giây.',
              isCorrect: true,
              explanation: 'Vì A = 4 cm > Delta_l0 = 2,5 cm nên lò xo bị nén khi x đi từ -2,5 cm đến -4 cm. cos(alpha) = 2,5/4 => góc quét nén Delta_phi ≈ 2*arccos(2,5/4) tương ứng thời gian t ≈ 1/15 s. Khẳng định ĐÚNG.'
            }
          ],
          cognitiveLevel: 'thong_hieu',
          topic: 'Con lắc lò xo',
          maxPoints: 1.0
        },
        {
          id: 'p2-phys-2',
          questionNumber: 2,
          contextPrompt: 'Một chất điểm thực hiện dao động điều hòa với phương trình x = 5*cos(10*t - pi/3) (x tính bằng cm, t tính bằng s). Xét tính Đúng hoặc Sai của các nhận định sau:',
          statements: [
            {
              id: 'p2-phys-2-a',
              letter: 'a',
              content: 'Tại thời điểm t = 0, chất điểm đang ở vị trí có li độ x = 2,5 cm và chuyển động theo chiều dương.',
              isCorrect: true,
              explanation: 't = 0: x = 5*cos(-pi/3) = 2,5 cm. Pha ban đầu âm nên v > 0 (chuyển động theo chiều dương). Khẳng định ĐÚNG.'
            },
            {
              id: 'p2-phys-2-b',
              letter: 'b',
              content: 'Tốc độ cực đại của chất điểm trong quá trình dao động là vmax = 50 cm/s.',
              isCorrect: true,
              explanation: 'vmax = omega * A = 10 * 5 = 50 cm/s. Khẳng định ĐÚNG.'
            },
            {
              id: 'p2-phys-2-c',
              letter: 'c',
              content: 'Khi li độ x = 3 cm, độ lớn gia tốc của chất điểm là a = 3 m/s^2.',
              isCorrect: true,
              explanation: 'a = omega^2 * |x| = 10^2 * 0,03 = 100 * 0,03 = 3 m/s^2. Khẳng định ĐÚNG.'
            },
            {
              id: 'p2-phys-2-d',
              letter: 'd',
              content: 'Trong giây đầu tiên, chất điểm đi qua vị trí cân bằng đúng 2 lần.',
              isCorrect: false,
              explanation: 'T = 2pi/omega = 2pi/10 ≈ 0,628 s. Trong 1s = 1,59 T chất điểm đi qua VTCB 3 lần. Khẳng định SAI.'
            }
          ],
          cognitiveLevel: 'thong_hieu',
          topic: 'Dao động điều hòa',
          maxPoints: 1.0
        },
        {
          id: 'p2-phys-3',
          questionNumber: 3,
          contextPrompt: 'Khảo sát sự biến thiên cơ năng của một con lắc lò xo nằm ngang có m = 100g, dao động với biên độ A = 8 cm. Xét tính Đúng hoặc Sai của các khẳng định sau:',
          statements: [
            {
              id: 'p2-phys-3-a',
              letter: 'a',
              content: 'Cơ năng của con lắc được bảo toàn nếu bỏ qua mọi ma sát và lực cản không khí.',
              isCorrect: true,
              explanation: 'Hệ kín không ma sát thì cơ năng là một hằng số. Khẳng định ĐÚNG.'
            },
            {
              id: 'p2-phys-3-b',
              letter: 'b',
              content: 'Khi vật ở li độ x = 4 cm thì động năng gấp 3 lần thế năng.',
              isCorrect: true,
              explanation: 'x = A/2 = 4 cm => Wt = 1/4 W => Wd = 3/4 W => Wd = 3*Wt. Khẳng định ĐÚNG.'
            },
            {
              id: 'p2-phys-3-c',
              letter: 'c',
              content: 'Khi động năng bằng thế năng, vật cách vị trí cân bằng một khoảng x = 4*sqrt(2) cm.',
              isCorrect: true,
              explanation: 'Wd = Wt => x = ± A/sqrt(2) = ± 8/sqrt(2) = ± 4*sqrt(2) cm. Khẳng định ĐÚNG.'
            },
            {
              id: 'p2-phys-3-d',
              letter: 'd',
              content: 'Tần số biến thiên của động năng bằng một nửa tần số dao động của li độ.',
              isCorrect: false,
              explanation: 'Tần số của động năng f\' = 2f (gấp đôi chứ không phải một nửa). Khẳng định SAI.'
            }
          ],
          cognitiveLevel: 'van_dung',
          topic: 'Năng lượng dao động',
          maxPoints: 1.0
        },
        {
          id: 'p2-phys-4',
          questionNumber: 4,
          contextPrompt: 'Một con lắc đơn có chiều dài l = 1 m dao động tại nơi có g = pi^2 = 9,87 m/s^2. Biên độ góc alpha_0 = 6 độ. Xét tính Đúng hoặc Sai của các mệnh đề sau:',
          statements: [
            {
              id: 'p2-phys-4-a',
              letter: 'a',
              content: 'Vì alpha_0 < 10 độ nên con lắc đơn dao động điều hòa.',
              isCorrect: true,
              explanation: 'Với góc lệch nhỏ alpha0 < 10 độ, sin(alpha) ≈ alpha(rad) nên dao động là điều hòa. Khẳng định ĐÚNG.'
            },
            {
              id: 'p2-phys-4-b',
              letter: 'b',
              content: 'Chu kì dao động của con lắc xấp xỉ bằng 2,0 giây.',
              isCorrect: true,
              explanation: 'T = 2pi*sqrt(l/g) = 2pi*sqrt(1/pi^2) = 2,0 s. Khẳng định ĐÚNG.'
            },
            {
              id: 'p2-phys-4-c',
              letter: 'c',
              content: 'Nếu tăng chiều dài dây treo lên 4 lần thì chu kì dao động tăng lên 4 lần.',
              isCorrect: false,
              explanation: 'T tỉ lệ với sqrt(l). Khi l tăng 4 lần thì T tăng sqrt(4) = 2 lần. Khẳng định SAI.'
            },
            {
              id: 'p2-phys-4-d',
              letter: 'd',
              content: 'Khi đưa con lắc lên đỉnh núi cao thì đồng hồ quả lắc sẽ chạy nhanh hơn.',
              isCorrect: false,
              explanation: 'Lên cao g giảm => T tăng => đồng hồ chạy chậm lại. Khẳng định SAI.'
            }
          ],
          cognitiveLevel: 'van_dung',
          topic: 'Con lắc đơn',
          maxPoints: 1.0
        }
      ],
      part3: [
        {
          id: 'p3-phys-1',
          questionNumber: 1,
          content: 'Một vật dao động điều hòa có chu kì T = 0,2 s và biên độ A = 5 cm. Tốc độ trung bình lớn nhất của vật trong khoảng thời gian t = 0,1 s bằng bao nhiêu cm/s?',
          correctAnswer: '100',
          unit: 'cm/s',
          points: 0.5,
          cognitiveLevel: 'thong_hieu',
          topic: 'Dao động điều hòa',
          explanation: 't = 0,1s = T/2. Trong T/2 quãng đường luôn là 2A = 10 cm. v_tb = 10 / 0,1 = 100 cm/s.'
        },
        {
          id: 'p3-phys-2',
          questionNumber: 2,
          content: 'Một con lắc lò xo có k = 50 N/m dao động với cơ năng W = 0,1 J. Biên độ dao động của con lắc bằng bao nhiêu cm?',
          correctAnswer: '6.32',
          unit: 'cm',
          points: 0.5,
          cognitiveLevel: 'thong_hieu',
          topic: 'Năng lượng dao động',
          explanation: 'W = 1/2 * k * A^2 => A^2 = 2W/k = 0,2/50 = 0,004 m^2 => A = sqrt(0,004) m ≈ 6,32 cm.'
        },
        {
          id: 'p3-phys-3',
          questionNumber: 3,
          content: 'Một chất điểm có khối lượng 200 g dao động với phương trình x = 10*cos(5*t) (cm). Lực kéo về cực đại tác dụng lên chất điểm bằng bao nhiêu Newton?',
          correctAnswer: '0.5',
          unit: 'N',
          points: 0.5,
          cognitiveLevel: 'thong_hieu',
          topic: 'Lực kéo về',
          explanation: 'F_max = m * omega^2 * A = 0,2 * 5^2 * 0,1 = 0,2 * 25 * 0,1 = 0,5 N.'
        },
        {
          id: 'p3-phys-4',
          questionNumber: 4,
          content: 'Hai dao động điều hòa cùng phương cùng tần số có biên độ A1 = 3 cm, A2 = 4 cm và lệch pha nhau pi/2 rad. Biên độ của dao động tổng hợp bằng bao nhiêu cm?',
          correctAnswer: '5',
          unit: 'cm',
          points: 0.5,
          cognitiveLevel: 'thong_hieu',
          topic: 'Tổng hợp dao động',
          explanation: 'Hai dao động vuông pha: A = sqrt(A1^2 + A2^2) = sqrt(9 + 16) = 5 cm.'
        }
      ],
      part4: [
        {
          id: 'p4-phys-1',
          questionNumber: 1,
          content: 'Một con lắc lò xo nằm ngang gồm vật nặng m = 400 g và lò xo có độ cứng k = 100 N/m. Kéo vật lệch khỏi vị trí cân bằng một đoạn 6 cm rồi thả nhẹ không vận tốc ban đầu để vật dao động. Trong quá trình chuyển động, hệ chịu lực ma sát không đổi giữa vật và mặt sàn với hệ số ma sát mu = 0,01. Lấy g = 10 m/s^2.\na) Xác định độ giảm biên độ sau mỗi chu kì dao động Delta_A.\nb) Tính số dao động toàn phần mà con lắc thực hiện được cho đến khi dừng hẳn.',
          points: 1.0,
          cognitiveLevel: 'van_dung_cao',
          topic: 'Dao động tắt dần',
          gradingCriteria: [
            {
              step: 'Bước 1: Tính độ giảm biên độ sau nửa chu kì và 1 chu kì',
              detail: 'Độ giảm biên sau 1 chu kì: Delta_A = 4*F_ms/k = 4*mu*m*g/k = 4*0,01*0,4*10 / 100 = 0,0016 m = 0,16 cm.',
              points: 0.4
            },
            {
              step: 'Bước 2: Thiết lập công thức số dao động cho đến khi dừng',
              detail: 'Số dao động toàn phần N = A0 / Delta_A = 6 / 0,16 = 37,5 dao động.',
              points: 0.3
            },
            {
              step: 'Bước 3: Kết luận số chu kì hoàn chỉnh',
              detail: 'Kết luận con lắc thực hiện được 37 dao động toàn phần trước khi dừng lại gần vị trí O.',
              points: 0.3
            }
          ]
        }
      ],
      matrix: [
        {
          topic: '1. Đại cương dao động điều hòa',
          part1_nhanbiet: 6,
          part1_thonghieu: 0,
          part2_nhanbiet: 0,
          part2_thonghieu: 1,
          part2_vandung: 0,
          part3_thonghieu: 1,
          part3_vandung: 0,
          part4_vandung: 0,
          part4_vandungcao: 0,
          totalPoints: 3.0,
          percentage: 30.0
        },
        {
          topic: '2. Con lắc lò xo & Con lắc đơn',
          part1_nhanbiet: 2,
          part1_thonghieu: 0,
          part2_nhanbiet: 0,
          part2_thonghieu: 1,
          part2_vandung: 1,
          part3_thonghieu: 1,
          part3_vandung: 0,
          part4_vandung: 0,
          part4_vandungcao: 0,
          totalPoints: 3.0,
          percentage: 30.0
        },
        {
          topic: '3. Năng lượng trong dao động',
          part1_nhanbiet: 3,
          part1_thonghieu: 1,
          part2_nhanbiet: 0,
          part2_thonghieu: 0,
          part2_vandung: 1,
          part3_thonghieu: 1,
          part3_vandung: 0,
          part4_vandung: 0,
          part4_vandungcao: 0,
          totalPoints: 2.5,
          percentage: 25.0
        },
        {
          topic: '4. Dao động tắt dần & Dao động cưỡng bức',
          part1_nhanbiet: 1,
          part1_thonghieu: 0,
          part2_nhanbiet: 0,
          part2_thonghieu: 0,
          part2_vandung: 0,
          part3_thonghieu: 1,
          part3_vandung: 0,
          part4_vandung: 0,
          part4_vandungcao: 1,
          totalPoints: 1.5,
          percentage: 15.0
        }
      ],
      specifications: [
        {
          stt: 1,
          topic: 'Dao động điều hòa',
          contentStandard: 'Nhận biết biên độ, pha ban đầu, tần số góc từ phương trình',
          cognitiveLevel: 'nhan_biet',
          part: 'I',
          questionNumber: 1,
          points: 0.25
        },
        {
          stt: 2,
          topic: 'Con lắc lò xo',
          contentStandard: 'Hiểu các thông số chu kì, biến dạng và lực đàn hồi con lắc treo',
          cognitiveLevel: 'thong_hieu',
          part: 'II',
          questionNumber: 1,
          points: 1.0
        },
        {
          stt: 3,
          topic: 'Dao động tắt dần',
          contentStandard: 'Vận dụng cao định luật bảo toàn tính số dao động tắt dần do ma sát',
          cognitiveLevel: 'van_dung_cao',
          part: 'IV',
          questionNumber: 1,
          points: 1.0
        }
      ]
    }
  },
  chemistry: {
    // We can also have chemistry fallback using math preset or dynamic generator
    version: '1.0.0',
    lastUpdated: '2026-10-10T09:00:00Z',
    activeSubject: 'chemistry',
    lessonPlan: {
      id: 'chem-11-equilibrium',
      title: 'BÀI 1: KHÁI NIỆM VỀ CÂN BẰNG HÓA HỌC',
      subject: 'Hóa học',
      grade: 11,
      duration: '2 tiết (90 phút)',
      curriculum: 'Cánh Diều',
      schoolName: 'Trường THPT Chuyên Hà Nội - Amsterdam',
      teacherName: 'Hoàng Thị Lan Hương',
      datePrepared: '2026-10-10',
      objectives: {
        knowledge: [
          'Trình bày được khái niệm phản ứng thuận nghịch và trạng thái cân bằng hóa học.',
          'Viết được biểu thức hằng số cân bằng Kc của phản ứng thuận nghịch.',
          'Vận dụng nguyên lí chuyển dịch cân bằng Le Chatelier để giải thích sự chuyển dịch khi thay đổi nhiệt độ, nồng độ, áp suất.'
        ],
        generalCompetencies: [
          'Tự chủ và tự học: Tìm hiểu ứng dụng cân bằng tổng hợp amoniac (quá trình Haber-Bosch).',
          'Giao tiếp và hợp tác: Tiến hành thí nghiệm ống nghiệm NO2 và N2O4 ngâm nước đá/nước nóng.'
        ],
        specificCompetencies: [
          'Năng lực nhận thức hóa học: Phân biệt phản ứng 1 chiều và phản ứng thuận nghịch.',
          'Năng lực tìm hiểu thế giới tự nhiên: Quan sát sự đổi màu nâu đỏ của khí NO2.'
        ],
        qualities: [
          'Trách nhiệm: Giữ gìn an toàn hóa chất trong phòng thí nghiệm.'
        ]
      },
      equipment: {
        teacher: ['2 ống nghiệm chứa khí NO2/N2O4 đậy nút kín, 2 cốc nước đá và nước nóng, slide trình chiếu.'],
        student: ['SGK Hóa 11, bảng tuần hoàn hóa học, vở ghi.']
      },
      activities: [
        {
          id: 'act-c1',
          name: 'HOẠT ĐỘNG 1: MỞ ĐẦU / KHỞI ĐỘNG',
          stageNumber: 1,
          timeAllocation: '7 phút',
          objective: 'Tạo tình huống có vấn đề: Tại sao khí NO2 (nâu đỏ) khi ngâm vào nước đá lại nhạt màu dần?',
          content: 'Xem video hoặc quan sát thí nghiệm trực tiếp bình khí NO2 chuyển thành N2O4 (không màu).',
          product: 'Học sinh dự đoán: Nhiệt độ đã làm thay đổi tỉ lệ các chất trong bình.',
          implementation: {
            step1_transfer: 'Giáo viên làm thí nghiệm biểu diễn 2 ống nghiệm NO2 ngâm vào nước nóng và nước đá.',
            step2_execution: 'Học sinh quan sát màu sắc trong 3 phút, ghi nhận hiện tượng.',
            step3_discussion: 'Mời đại diện học sinh mô tả sự thay đổi màu sắc.',
            step4_conclusion: 'Giáo viên đặt vấn đề: Đây là phản ứng thuận nghịch và hệ đã tự điều chỉnh theo nhiệt độ.'
          }
        },
        {
          id: 'act-c2',
          name: 'HOẠT ĐỘNG 2: HÌNH THÀNH KIẾN THỨC MỚI',
          stageNumber: 2,
          timeAllocation: '25 phút',
          objective: 'Xây dựng khái niệm cân bằng động, hằng số Kc và nguyên lí Le Chatelier.',
          content: 'Phân tích đồ thị tốc độ phản ứng vt và vn theo thời gian; biểu thức Kc = [C]^c * [D]^d / ([A]^a * [B]^b).',
          product: 'Học sinh hiểu cân bằng là trạng thái vt = vn (cân bằng động chứ không đứng yên).',
          implementation: {
            step1_transfer: 'Giao phiếu học tập số 1 về đồ thị tốc độ phản ứng thuận và nghịch.',
            step2_execution: 'Học sinh thảo luận nhóm tìm giao điểm của vt và vn.',
            step3_discussion: 'Trình bày định nghĩa trạng thái cân bằng.',
            step4_conclusion: 'Giáo viên chốt kiến thức: Cân bằng hóa học là cân bằng động.'
          }
        },
        {
          id: 'act-c3',
          name: 'HOẠT ĐỘNG 3: LUYỆN TẬP',
          stageNumber: 3,
          timeAllocation: '10 phút',
          objective: 'Viết biểu thức Kc cho các phản ứng đồng thể và dị thể.',
          content: 'Viết Kc cho: N2 + 3H2 <=> 2NH3; CaCO3(r) <=> CaO(r) + CO2(k).',
          product: 'Chất rắn không xuất hiện trong biểu thức Kc.',
          implementation: {
            step1_transfer: 'Giáo viên giao bài tập trên bảng.',
            step2_execution: 'Học sinh làm việc cá nhân.',
            step3_discussion: 'Chấm chéo kết quả bạn bên cạnh.',
            step4_conclusion: 'Giáo viên lưu ý nồng độ chất rắn được coi là hằng số.'
          }
        },
        {
          id: 'act-c4',
          name: 'HOẠT ĐỘNG 4: VẬN DỤNG',
          stageNumber: 4,
          timeAllocation: '8 phút',
          objective: 'Giải thích tối ưu hóa quá trình sản xuất amoniac trong công nghiệp.',
          content: 'Tại sao trong công nghiệp lại chọn áp suất 200 atm và nhiệt độ 450 độ C kèm xúc tác Fe?',
          product: 'Phân tích thỏa hiệp giữa hiệu suất chuyển dịch cân bằng và tốc độ phản ứng.',
          implementation: {
            step1_transfer: 'Chiếu sơ đồ tháp tổng hợp amoniac.',
            step2_execution: 'Học sinh phân tích theo nguyên lí Le Chatelier.',
            step3_discussion: 'Báo cáo giải thích áp suất cao làm tăng hiệu suất.',
            step4_conclusion: 'Giáo viên tổng kết bài học.'
          }
        }
      ]
    },
    slides: [
      {
        id: 'sc-1',
        activityStage: 0,
        slideNumber: 1,
        title: 'BÀI 1: KHÁI NIỆM VỀ CÂN BẰNG HÓA HỌC',
        subtitle: 'Hóa học 11 · Chương 1: Cân bằng hóa học',
        bulletPoints: [
          'Phản ứng thuận nghịch và trạng thái cân bằng',
          'Bản chất cân bằng động: v_thuận = v_nghịch',
          'Hằng số cân bằng Kc',
          'Nguyên lí chuyển dịch cân bằng Le Chatelier'
        ],
        speakerNotes: 'Bài học mở đầu cho chương trình Hóa học 11 với nhiều ứng dụng thực tiễn trong công nghiệp hóa chất.'
      }
    ],
    exam: {
      id: 'exam-chem-11',
      title: 'ĐỀ KIỂM TRA ĐỊNH KỲ GIỮA KỲ I HÓA HỌC 11',
      subject: 'Hóa học',
      grade: 11,
      durationMinutes: 45,
      academicYear: '2026 - 2027',
      semester: 'Học kỳ I',
      schoolName: 'TRƯỜNG THPT CHUYÊN HÀ NỘI - AMSTERDAM',
      examCode: 'MÃ ĐỀ 302',
      totalPoints: 10.0,
      weighting: { nhanBiet: 4.0, thongHieu: 3.0, vanDung: 3.0 },
      part1: [
        {
          id: 'p1-c-1',
          questionNumber: 1,
          content: 'Đặc điểm nào sau đây KHÔNG đúng đối với một phản ứng thuận nghịch?',
          options: {
            A: 'Xảy ra theo hai chiều ngược nhau trong cùng điều kiện',
            B: 'Các chất phản ứng chuyển hóa hoàn toàn thành sản phẩm',
            C: 'Sử dụng mũi tên hai chiều trong phương trình hóa học',
            D: 'Sau một thời gian sẽ đạt tới trạng thái cân bằng'
          },
          correctAnswer: 'B',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Cân bằng hóa học',
          explanation: 'Phản ứng thuận nghịch không bao giờ xảy ra hoàn toàn.'
        },
        {
          id: 'p1-c-2',
          questionNumber: 2,
          content: 'Khi một phản ứng thuận nghịch đạt trạng thái cân bằng thì',
          options: {
            A: 'phản ứng thuận và nghịch dừng lại',
            B: 'tốc độ phản ứng thuận bằng tốc độ phản ứng nghịch',
            C: 'nồng độ các chất phản ứng bằng nồng độ sản phẩm',
            D: 'khối lượng chất phản ứng bằng 0'
          },
          correctAnswer: 'B',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Cân bằng hóa học',
          explanation: 'Trạng thái cân bằng động là khi vt = vn > 0.'
        },
        {
          id: 'p1-c-3',
          questionNumber: 3,
          content: 'Cho cân bằng: N2(k) + 3H2(k) <=> 2NH3(k) (Delta H < 0). Để cân bằng chuyển dịch theo chiều thuận cần',
          options: {
            A: 'Tăng nhiệt độ',
            B: 'Giảm áp suất',
            C: 'Tăng áp suất',
            D: 'Thêm chất xúc tác'
          },
          correctAnswer: 'C',
          points: 0.25,
          cognitiveLevel: 'thong_hieu',
          topic: 'Chuyển dịch cân bằng',
          explanation: 'Chiều thuận làm giảm số mol khí (từ 4 mol về 2 mol), nên tăng áp suất sẽ dịch chuyển theo chiều thuận.'
        },
        {
          id: 'p1-c-4',
          questionNumber: 4,
          content: 'Biểu thức hằng số cân bằng Kc của phản ứng CaCO3(r) <=> CaO(r) + CO2(k) là',
          options: {
            A: 'Kc = [CO2]',
            B: 'Kc = [CaO]*[CO2]/[CaCO3]',
            C: 'Kc = [CaCO3]/([CaO]*[CO2])',
            D: 'Kc = 1/[CO2]'
          },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Hằng số cân bằng',
          explanation: 'Nồng độ chất rắn không biểu diễn trong biểu thức Kc.'
        },
        {
          id: 'p1-c-5',
          questionNumber: 5,
          content: 'Chất xúc tác có tác dụng gì đối với một hệ cân bằng hóa học?',
          options: {
            A: 'Làm tăng tốc độ đạt trạng thái cân bằng',
            B: 'Làm cân bằng chuyển dịch sang chiều thuận',
            C: 'Làm tăng giá trị của hằng số cân bằng Kc',
            D: 'Làm giảm nồng độ chất phản ứng'
          },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Chất xúc tác',
          explanation: 'Chất xúc tác làm tăng tốc độ vt và vn như nhau nên chỉ giúp nhanh đạt cân bằng chứ không làm dịch chuyển cân bằng.'
        },
        {
          id: 'p1-c-6',
          questionNumber: 6,
          content: 'Dung dịch có pH = 3 thì môi trường là',
          options: { A: 'Axit', B: 'Bazơ', C: 'Trung tính', D: 'Lưỡng tính' },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Sự điện li và pH',
          explanation: 'pH < 7 là môi trường axit.'
        },
        {
          id: 'p1-c-7',
          questionNumber: 7,
          content: 'Chất nào sau đây là chất điện li mạnh?',
          options: { A: 'HCl', B: 'CH3COOH', C: 'H2O', D: 'HF' },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Sự điện li',
          explanation: 'HCl là axit mạnh điện li hoàn toàn.'
        },
        {
          id: 'p1-c-8',
          questionNumber: 8,
          content: 'Giá trị pH của nước tinh khiết ở 25 độ C là',
          options: { A: '7', B: '1', C: '14', D: '0' },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Sự điện li và pH',
          explanation: 'Ở 25 độ C, [H+] = [OH-] = 10^-7 M nên pH = 7.'
        },
        {
          id: 'p1-c-9',
          questionNumber: 9,
          content: 'Khi hòa tan khí SO2 vào nước thu được dung dịch có môi trường',
          options: { A: 'Axit', B: 'Bazơ', C: 'Trung tính', D: 'Không xác định' },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Hợp chất lưu huỳnh',
          explanation: 'SO2 + H2O <=> H2SO3 (axit yếu).'
        },
        {
          id: 'p1-c-10',
          questionNumber: 10,
          content: 'Hằng số cân bằng Kc của một phản ứng chỉ phụ thuộc vào',
          options: {
            A: 'Bản chất của phản ứng và nhiệt độ',
            B: 'Nồng độ các chất ban đầu',
            C: 'Áp suất của hệ',
            D: 'Chất xúc tác'
          },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Hằng số cân bằng',
          explanation: 'Kc chỉ phụ thuộc vào nhiệt độ và bản chất của phản ứng.'
        },
        {
          id: 'p1-c-11',
          questionNumber: 11,
          content: 'Trong dung dịch NaOH 0,01 M, nồng độ ion OH- bằng',
          options: { A: '0,01 M', B: '0,1 M', C: '10^-12 M', D: '0,001 M' },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Sự điện li',
          explanation: 'NaOH -> Na+ + OH-, phân li hoàn toàn nên [OH-] = 0,01 M.'
        },
        {
          id: 'p1-c-12',
          questionNumber: 12,
          content: 'Khí amoniac NH3 có mùi gì đặc trưng?',
          options: {
            A: 'Mùi khai đặc trưng',
            B: 'Mùi trứng thối',
            C: 'Không mùi',
            D: 'Mùi hoa quả thơm'
          },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Hợp chất nitơ',
          explanation: 'NH3 có mùi khai xốc đặc trưng.'
        }
      ],
      part2: [
        {
          id: 'p2-c-1',
          questionNumber: 1,
          contextPrompt: 'Cho cân bằng hóa học sau trong một bình kín dung tích không đổi: 2SO2(k) + O2(k) <=> 2SO3(k) (Delta H = -198 kJ). Xét tính Đúng hoặc Sai của các biện pháp sau:',
          statements: [
            {
              id: 'p2-c-1-a',
              letter: 'a',
              content: 'Tăng nhiệt độ của hệ sẽ làm cân bằng chuyển dịch theo chiều thuận.',
              isCorrect: false,
              explanation: 'Phản ứng thuận tỏa nhiệt (Delta H < 0), nên tăng nhiệt độ sẽ làm cân bằng dịch chuyển sang chiều nghịch (chiều thu nhiệt). Khẳng định SAI.'
            },
            {
              id: 'p2-c-1-b',
              letter: 'b',
              content: 'Tăng áp suất chung của hệ làm cân bằng chuyển dịch theo chiều tạo ra SO3.',
              isCorrect: true,
              explanation: 'Chiều thuận làm giảm số mol khí từ 3 mol xuống 2 mol. Do đó tăng áp suất sẽ làm cân bằng dịch sang chiều thuận. Khẳng định ĐÚNG.'
            },
            {
              id: 'p2-c-1-c',
              letter: 'c',
              content: 'Thêm chất xúc tác V2O5 giúp tăng hiệu suất tạo ra SO3 khi hệ đã cân bằng.',
              isCorrect: false,
              explanation: 'Chất xúc tác chỉ làm tăng tốc độ đạt cân bằng chứ không làm thay đổi hiệu suất ở trạng thái cân bằng. Khẳng định SAI.'
            },
            {
              id: 'p2-c-1-d',
              letter: 'd',
              content: 'Liên tục tách SO3 ra khỏi bình phản ứng sẽ làm cân bằng tiếp tục chuyển dịch theo chiều thuận.',
              isCorrect: true,
              explanation: 'Giảm nồng độ sản phẩm SO3 thì hệ sẽ tự chuyển dịch theo chiều thuận để bù đắp lượng SO3 mất đi. Khẳng định ĐÚNG.'
            }
          ],
          cognitiveLevel: 'thong_hieu',
          topic: 'Cân bằng hóa học',
          maxPoints: 1.0
        },
        {
          id: 'p2-c-2',
          questionNumber: 2,
          contextPrompt: 'Khảo sát dung dịch axit yếu axetic CH3COOH 0,1 M ở 25 độ C có độ điện li alpha = 1,34%. Xét tính Đúng hoặc Sai của các nhận xét sau:',
          statements: [
            {
              id: 'p2-c-2-a',
              letter: 'a',
              content: 'Nồng độ ion H+ trong dung dịch tại trạng thái cân bằng là 1,34 * 10^-3 M.',
              isCorrect: true,
              explanation: '[H+] = C * alpha = 0,1 * 0,0134 = 1,34 * 10^-3 M. Khẳng định ĐÚNG.'
            },
            {
              id: 'p2-c-2-b',
              letter: 'b',
              content: 'pH của dung dịch nói trên xấp xỉ bằng 2,87.',
              isCorrect: true,
              explanation: 'pH = -log(1,34 * 10^-3) ≈ 2,87. Khẳng định ĐÚNG.'
            },
            {
              id: 'p2-c-2-c',
              letter: 'c',
              content: 'Khi thêm một ít muối tinh thể CH3COONa vào dung dịch thì pH của dung dịch sẽ giảm xuống.',
              isCorrect: false,
              explanation: 'Thêm CH3COO- làm cân bằng CH3COOH <=> CH3COO- + H+ dịch sang trái => [H+] giảm => pH tăng. Khẳng định SAI.'
            },
            {
              id: 'p2-c-2-d',
              letter: 'd',
              content: 'Khi pha loãng dung dịch bằng nước cất, độ điện li alpha của axit sẽ tăng lên.',
              isCorrect: true,
              explanation: 'Theo định luật pha loãng Ostwald, khi nồng độ giảm thì độ điện li tăng. Khẳng định ĐÚNG.'
            }
          ],
          cognitiveLevel: 'van_dung',
          topic: 'Sự điện li',
          maxPoints: 1.0
        },
        {
          id: 'p2-c-3',
          questionNumber: 3,
          contextPrompt: 'Cho cân bằng trong bình kín: N2O4(k, không màu) <=> 2NO2(k, nâu đỏ) (Delta H > 0). Xét tính Đúng hoặc Sai của các hiện tượng sau:',
          statements: [
            {
              id: 'p2-c-3-a',
              letter: 'a',
              content: 'Khi ngâm bình phản ứng vào cốc nước nóng, hỗn hợp khí chuyển sang màu nâu đỏ đậm hơn.',
              isCorrect: true,
              explanation: 'Phản ứng thu nhiệt (Delta H > 0), tăng nhiệt độ dịch sang chiều thuận tạo nhiều NO2 màu nâu đỏ. Khẳng định ĐÚNG.'
            },
            {
              id: 'p2-c-3-b',
              letter: 'b',
              content: 'Khi nén piston giảm thể tích bình, màu của khí ban đầu đậm lên rồi nhạt dần nhưng vẫn đậm hơn ban đầu.',
              isCorrect: true,
              explanation: 'Nén làm nồng độ tức thời tăng nên đậm lên ngay lập tức, sau đó cân bằng dịch sang trái (giảm số mol khí) nên nhạt dần. Khẳng định ĐÚNG.'
            },
            {
              id: 'p2-c-3-c',
              letter: 'c',
              content: 'Hằng số cân bằng Kc của phản ứng tăng khi tăng nhiệt độ của hệ.',
              isCorrect: true,
              explanation: 'Với phản ứng thu nhiệt, nhiệt độ tăng làm Kc tăng. Khẳng định ĐÚNG.'
            },
            {
              id: 'p2-c-3-d',
              letter: 'd',
              content: 'Bơm thêm khí heli (khí trơ) vào bình ở thể tích không đổi làm cân bằng chuyển dịch sang chiều thuận.',
              isCorrect: false,
              explanation: 'Bơm khí trơ ở V không đổi không làm thay đổi nồng độ/áp suất riêng phần của N2O4 và NO2 nên không chuyển dịch cân bằng. Khẳng định SAI.'
            }
          ],
          cognitiveLevel: 'thong_hieu',
          topic: 'Cân bằng hóa học',
          maxPoints: 1.0
        },
        {
          id: 'p2-c-4',
          questionNumber: 4,
          contextPrompt: 'Hợp chất nitơ và mưa axit: Mưa axit gây ảnh hưởng nghiêm trọng đến sinh thái do chứa axit HNO3 và H2SO4. Xét tính Đúng hoặc Sai của các thông tin sau:',
          statements: [
            {
              id: 'p2-c-4-a',
              letter: 'a',
              content: 'Nước mưa bình thường có pH khoảng 5,6 do có khí CO2 hòa tan tạo axit H2CO3.',
              isCorrect: true,
              explanation: 'CO2 hòa tan làm nước mưa tự nhiên có tính axit nhẹ pH ≈ 5,6. Khẳng định ĐÚNG.'
            },
            {
              id: 'p2-c-4-b',
              letter: 'b',
              content: 'Nước mưa được gọi là mưa axit khi có độ pH nhỏ hơn 5,6.',
              isCorrect: true,
              explanation: 'Quy chuẩn khoa học định nghĩa mưa axit là mưa có pH < 5,6. Khẳng định ĐÚNG.'
            },
            {
              id: 'p2-c-4-c',
              letter: 'c',
              content: 'Khí NO phát thải từ động cơ đốt trong khi gặp O2 khí quyển sẽ bị oxi hóa thành NO2.',
              isCorrect: true,
              explanation: '2NO + O2 -> 2NO2. Khẳng định ĐÚNG.'
            },
            {
              id: 'p2-c-4-d',
              letter: 'd',
              content: 'Rắc bột đá vôi CaCO3 vào đất hoặc hồ nước bị chua do mưa axit sẽ làm tăng độ chua của đất.',
              isCorrect: false,
              explanation: 'CaCO3 trung hòa axit (CaCO3 + 2H+ -> Ca2+ + H2O + CO2) giúp khử chua đất, làm tăng pH. Khẳng định SAI.'
            }
          ],
          cognitiveLevel: 'van_dung',
          topic: 'Ứng dụng thực tiễn & Môi trường',
          maxPoints: 1.0
        }
      ],
      part3: [
        {
          id: 'p3-c-1',
          questionNumber: 1,
          content: 'Cho phản ứng: H2(k) + I2(k) <=> 2HI(k). Ở 430 độ C, nồng độ cân bằng của H2 là 0,1 M; của I2 là 0,1 M và của HI là 0,8 M. Tính hằng số cân bằng Kc của phản ứng ở nhiệt độ này.',
          correctAnswer: '64',
          points: 0.5,
          cognitiveLevel: 'thong_hieu',
          topic: 'Hằng số cân bằng',
          explanation: 'Kc = [HI]^2 / ([H2]*[I2]) = (0,8)^2 / (0,1 * 0,1) = 0,64 / 0,01 = 64.'
        },
        {
          id: 'p3-c-2',
          questionNumber: 2,
          content: 'Trộn 100 mL dung dịch HCl 0,1 M với 100 mL dung dịch NaOH 0,08 M thu được dung dịch X. Tính pH của dung dịch X sau khi trộn (làm tròn đến 1 chữ số thập phân).',
          correctAnswer: '2',
          points: 0.5,
          cognitiveLevel: 'thong_hieu',
          topic: 'Sự điện li và pH',
          explanation: 'n_H+ = 0,01 mol; n_OH- = 0,008 mol => n_H+ dư = 0,002 mol. V_tong = 200 mL = 0,2 L. [H+] dư = 0,002/0,2 = 0,01 M => pH = 2.'
        },
        {
          id: 'p3-c-3',
          questionNumber: 3,
          content: 'Để trung hòa hoàn toàn 50 mL dung dịch Ba(OH)2 0,05 M cần dùng đúng V mL dung dịch HCl 0,1 M. Giá trị của V là bao nhiêu mL?',
          correctAnswer: '50',
          unit: 'mL',
          points: 0.5,
          cognitiveLevel: 'thong_hieu',
          topic: 'Phản ứng trung hòa',
          explanation: 'n_OH- = 2 * n_Ba(OH)2 = 2 * 0,05 * 0,05 = 0,005 mol. n_H+ = n_OH- = 0,005 mol => V_HCl = 0,005 / 0,1 = 0,05 L = 50 mL.'
        },
        {
          id: 'p3-c-4',
          questionNumber: 4,
          content: 'Một mẫu đất nông nghiệp có nồng độ ion H+ là 1,0 * 10^-5 M. Giá trị pH của mẫu đất đó bằng bao nhiêu?',
          correctAnswer: '5',
          points: 0.5,
          cognitiveLevel: 'nhan_biet',
          topic: 'pH',
          explanation: 'pH = -log(1,0 * 10^-5) = 5.'
        }
      ],
      part4: [
        {
          id: 'p4-c-1',
          questionNumber: 1,
          content: 'Trong một bình kín dung tích 2 lít diễn ra phản ứng tổng hợp amoniac: N2(k) + 3H2(k) <=> 2NH3(k) ở nhiệt độ t độ C.\nBan đầu cho vào bình 1 mol N2 và 4 mol H2. Khi phản ứng đạt trạng thái cân bằng, số mol NH3 tạo thành là 0,4 mol.\na) Tính nồng độ mol/lít của các chất N2, H2 và NH3 ở trạng thái cân bằng.\nb) Tính giá trị hằng số cân bằng Kc của phản ứng ở nhiệt độ t độ C (kết quả làm tròn 2 chữ số thập phân).',
          points: 1.0,
          cognitiveLevel: 'van_dung_cao',
          topic: 'Cân bằng hóa học',
          gradingCriteria: [
            {
              step: 'Bước 1: Lập bảng 3 dòng số mol (Ban đầu - Phản ứng - Cân bằng)',
              detail: 'n_NH3 = 0,4 mol => n_N2 phản ứng = 0,2 mol; n_H2 phản ứng = 0,6 mol. Tại CB: n_N2 = 1 - 0,2 = 0,8 mol; n_H2 = 4 - 0,6 = 3,4 mol; n_NH3 = 0,4 mol.',
              points: 0.4
            },
            {
              step: 'Bước 2: Tính nồng độ cân bằng',
              detail: '[N2] = 0,8 / 2 = 0,4 M; [H2] = 3,4 / 2 = 1,7 M; [NH3] = 0,4 / 2 = 0,2 M.',
              points: 0.3
            },
            {
              step: 'Bước 3: Tính hằng số cân bằng Kc',
              detail: 'Kc = [NH3]^2 / ([N2] * [H2]^3) = (0,2)^2 / (0,4 * 1,7^3) = 0,04 / (0,4 * 4,913) = 0,04 / 1,9652 ≈ 0,02 (hoặc 0,0204).',
              points: 0.3
            }
          ]
        }
      ],
      matrix: [
        {
          topic: '1. Khái niệm cân bằng & Le Chatelier',
          part1_nhanbiet: 4,
          part1_thonghieu: 1,
          part2_nhanbiet: 0,
          part2_thonghieu: 2,
          part2_vandung: 0,
          part3_thonghieu: 1,
          part3_vandung: 0,
          part4_vandung: 0,
          part4_vandungcao: 1,
          totalPoints: 4.75,
          percentage: 47.5
        },
        {
          topic: '2. Sự điện li & pH dung dịch',
          part1_nhanbiet: 5,
          part1_thonghieu: 0,
          part2_nhanbiet: 0,
          part2_thonghieu: 0,
          part2_vandung: 1,
          part3_thonghieu: 2,
          part3_vandung: 0,
          part4_vandung: 0,
          part4_vandungcao: 0,
          totalPoints: 3.25,
          percentage: 32.5
        },
        {
          topic: '3. Hợp chất nitơ, lưu huỳnh & Môi trường',
          part1_nhanbiet: 2,
          part1_thonghieu: 0,
          part2_nhanbiet: 0,
          part2_thonghieu: 0,
          part2_vandung: 1,
          part3_thonghieu: 0,
          part3_vandung: 0,
          part4_vandung: 0,
          part4_vandungcao: 0,
          totalPoints: 2.0,
          percentage: 20.0
        }
      ],
      specifications: [
        {
          stt: 1,
          topic: 'Cân bằng hóa học',
          contentStandard: 'Nhận biết phản ứng thuận nghịch và trạng thái cân bằng',
          cognitiveLevel: 'nhan_biet',
          part: 'I',
          questionNumber: 1,
          points: 0.25
        },
        {
          stt: 2,
          topic: 'Nguyên lí Le Chatelier',
          contentStandard: 'Phân tích các yếu tố chuyển dịch cân bằng sản xuất SO3',
          cognitiveLevel: 'thong_hieu',
          part: 'II',
          questionNumber: 1,
          points: 1.0
        },
        {
          stt: 3,
          topic: 'Hằng số Kc',
          contentStandard: 'Vận dụng tính nồng độ cân bằng và hằng số Kc của phản ứng tổng hợp amoniac',
          cognitiveLevel: 'van_dung_cao',
          part: 'IV',
          questionNumber: 1,
          points: 1.0
        }
      ]
    }
  },
  literature: {
    // Ngữ văn 10: Chiến thuật đọc hiểu văn bản thông tin
    version: '1.0.0',
    lastUpdated: '2026-10-10T09:00:00Z',
    activeSubject: 'literature',
    lessonPlan: {
      id: 'lit-10-info-text',
      title: 'BÀI 4: ĐỌC HIỂU VĂN BẢN THÔNG TIN & THẢO LUẬN VẤN ĐỀ XÃ HỘI',
      subject: 'Ngữ văn',
      grade: 10,
      duration: '2 tiết (90 phút)',
      curriculum: 'Kết nối tri thức với cuộc sống',
      schoolName: 'Trường THPT Chu Văn An',
      teacherName: 'Phạm Thanh Thủy',
      datePrepared: '2026-10-10',
      objectives: {
        knowledge: [
          'Nhận biết được đặc điểm của văn bản thông tin: đề tài, mục đích, quan điểm của người viết.',
          'Phân tích được sự kết hợp giữa phương tiện ngôn ngữ và phương tiện phi ngôn ngữ (hình ảnh, số liệu, biểu đồ).',
          'Đánh giá được tính chính xác, độ tin cậy và giá trị thông điệp của văn bản thông tin.'
        ],
        generalCompetencies: [
          'Tự chủ và tự học: Tìm kiếm thông tin đáng tin cậy trên internet về biến đổi khí hậu.',
          'Giao tiếp và hợp tác: Tranh biện về trách nhiệm cá nhân đối với rác thải nhựa.'
        ],
        specificCompetencies: [
          'Năng lực ngôn ngữ: Đọc hiểu và tóm tắt văn bản thông tin đa phương tiện.',
          'Năng lực văn học: Cảm nhận thái độ, lập trường khách quan của người viết.'
        ],
        qualities: [
          'Trách nhiệm: Có ý thức bảo vệ môi trường và lan tỏa lối sống xanh.'
        ]
      },
      equipment: {
        teacher: ['Giáo án CV 5512, slide trình chiếu bài giảng, phóng sự video VTV về rác thải nhựa đại dương.'],
        student: ['SGK Ngữ văn 10, sổ tay đọc hiểu, bút dạ quang highlight.']
      },
      activities: [
        {
          id: 'act-l1',
          name: 'HOẠT ĐỘNG 1: MỞ ĐẦU (Khởi động)',
          stageNumber: 1,
          timeAllocation: '8 phút',
          objective: 'Tạo liên hệ giữa thông tin thời sự và trải nghiệm cá nhân của học sinh.',
          content: 'Xem infographic "Hành trình 500 năm của một chiếc ống hút nhựa" và nêu cảm nghĩ.',
          product: 'Học sinh nhận thức được sức mạnh của infographic trong việc truyền tải thông điệp nhanh chóng, trực quan.',
          implementation: {
            step1_transfer: 'Chiếu infographic của National Geographic lên màn hình.',
            step2_execution: 'Học sinh suy ngẫm trong 2 phút và ghi 3 từ khóa ấn tượng.',
            step3_discussion: '3 học sinh chia sẻ trước lớp.',
            step4_conclusion: 'Giáo viên dẫn vào bài: Hôm nay chúng ta học cách giải mã văn bản thông tin đa phương thức.'
          }
        },
        {
          id: 'act-l2',
          name: 'HOẠT ĐỘNG 2: HÌNH THÀNH KIẾN THỨC MỚI',
          stageNumber: 2,
          timeAllocation: '25 phút',
          objective: 'Khám phá cấu trúc văn bản thông tin: Sapô, tiêu đề phụ, sơ đồ và cách trình bày dữ liệu.',
          content: 'Đọc văn bản mẫu "Phục hồi rừng đầu nguồn: Lá chắn xanh trước thiên tai" và hoàn thành bảng phân tích.',
          product: 'Phiếu học tập phân biệt thông tin khách quan (facts) và ý kiến chủ quan (opinions).',
          implementation: {
            step1_transfer: 'Phát văn bản và phiếu phân tích tiêu chí đánh giá dữ liệu.',
            step2_execution: 'Học sinh làm việc nhóm 4, dùng bút nhớ phân loại dữ liệu.',
            step3_discussion: 'Đại diện nhóm báo cáo cách tác giả lồng ghép số liệu thống kê.',
            step4_conclusion: 'Giáo viên đúc kết 4 bước tiếp cận văn bản thông tin chuẩn mực.'
          }
        },
        {
          id: 'act-l3',
          name: 'HOẠT ĐỘNG 3: LUYỆN TẬP',
          stageNumber: 3,
          timeAllocation: '10 phút',
          objective: 'Thực hành tóm tắt văn bản thông tin thành sơ đồ tư duy một trang.',
          content: 'Vẽ sơ đồ phân nhánh thể hiện các luận điểm chính của bài đọc.',
          product: 'Sơ đồ tư duy trực quan trong vở của học sinh.',
          implementation: {
            step1_transfer: 'Yêu cầu tóm tắt bằng sơ đồ khối hoặc biểu tượng.',
            step2_execution: 'Học sinh vẽ cá nhân trong 7 phút.',
            step3_discussion: 'Chụp chiếu 2 bài xuất sắc lên tivi tương tác.',
            step4_conclusion: 'Giáo viên nhận xét và ghi điểm động viên.'
          }
        },
        {
          id: 'act-l4',
          name: 'HOẠT ĐỘNG 4: VẬN DỤNG',
          stageNumber: 4,
          timeAllocation: '7 phút',
          objective: 'Thiết kế một thông điệp truyền thông ngắn lan tỏa trong trường học.',
          content: 'Viết một đoạn văn ngắn 150 chữ hoặc thiết kế poster kêu gọi giảm rác thải nhựa ở căng-tin trường.',
          product: 'Thông điệp truyền thông sáng tạo của học sinh.',
          implementation: {
            step1_transfer: 'Giao nhiệm vụ dự án mini cho tuần tiếp theo.',
            step2_execution: 'Lên ý tưởng theo cặp trong 3 phút.',
            step3_discussion: 'Báo cáo ý tưởng chủ đề.',
            step4_conclusion: 'Giáo viên tổng kết tiết học.'
          }
        }
      ]
    },
    slides: [
      {
        id: 'sl-1',
        activityStage: 0,
        slideNumber: 1,
        title: 'BÀI 4: ĐỌC HIỂU VĂN BẢN THÔNG TIN',
        subtitle: 'Ngữ văn 10 · Kỹ năng đọc hiểu thời đại số',
        bulletPoints: [
          'Nhận biết mục đích và quan điểm của người viết',
          'Phương tiện phi ngôn ngữ: Biểu đồ, hình ảnh, số liệu',
          'Phân biệt thông tin xác thực và quan điểm chủ quan',
          'Thực hành viết thông điệp truyền thông xã hội'
        ],
        speakerNotes: 'Trong kỷ nguyên bùng nổ thông tin và mạng xã hội, kỹ năng đọc có phản biện là vũ khí quan trọng nhất của các em.'
      }
    ],
    exam: {
      id: 'exam-lit-10',
      title: 'ĐỀ KIỂM TRA ĐỊNH KỲ NGỮ VĂN 10',
      subject: 'Ngữ văn',
      grade: 10,
      durationMinutes: 90,
      academicYear: '2026 - 2027',
      semester: 'Học kỳ I',
      schoolName: 'TRƯỜNG THPT CHU VĂN AN',
      examCode: 'MÃ ĐỀ 401',
      totalPoints: 10.0,
      weighting: { nhanBiet: 4.0, thongHieu: 3.0, vanDung: 3.0 },
      part1: [
        {
          id: 'p1-l-1',
          questionNumber: 1,
          content: 'Mục đích chủ yếu của văn bản thông tin là gì?',
          options: {
            A: 'Cung cấp tri thức, phản ánh sự thật khách quan về thế giới tự nhiên và xã hội',
            B: 'Thể hiện thế giới nội tâm phong phú và cảm xúc cá nhân sâu kín',
            C: 'Xây dựng hình tượng nhân vật hư cấu giàu giá trị biểu tượng',
            D: 'Ru ngủ người đọc bằng những giai điệu ngôn từ bay bổng'
          },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Văn bản thông tin',
          explanation: 'Mục đích chính của văn bản thông tin là cung cấp thông tin xác thực.'
        },
        {
          id: 'p1-l-2',
          questionNumber: 2,
          content: 'Phương tiện phi ngôn ngữ trong văn bản thông tin bao gồm những yếu tố nào sau đây?',
          options: {
            A: 'Biểu đồ, số liệu, hình ảnh, sơ đồ, bản đồ',
            B: 'Biện pháp tu từ so sánh, ẩn dụ, hoán dụ',
            C: 'Hệ thống vần điệu, nhịp điệu và câu thơ',
            D: 'Lời thoại nhân vật và lời độc thoại nội tâm'
          },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Phương tiện phi ngôn ngữ',
          explanation: 'Phương tiện phi ngôn ngữ là hình ảnh, đồ họa, số liệu, bản đồ...'
        },
        {
          id: 'p1-l-3',
          questionNumber: 3,
          content: 'Phần sa-pô (chapeau) trong một bài báo thường nằm ở vị trí nào và có chức năng gì?',
          options: {
            A: 'Dưới nhan đề, tóm tắt nội dung trọng tâm và khơi gợi hứng thú cho người đọc',
            B: 'Cuối bài viết, nêu danh tính tác giả và nguồn trích dẫn',
            C: 'Giữa các đoạn văn để liên kết ý',
            D: 'Bên lề trang giấy để chú thích từ khó'
          },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Cấu trúc bài báo',
          explanation: 'Sa-pô đứng ngay sau tiêu đề để khái quát điểm cốt lõi nhất của bài.'
        },
        {
          id: 'p1-l-4',
          questionNumber: 4,
          content: 'Yếu tố nào sau đây là một dữ kiện khách quan (Fact)?',
          options: {
            A: 'Đỉnh Phan-xi-păng có độ cao 3.143 mét so với mực nước biển',
            B: 'Leo núi Phan-xi-păng là trải nghiệm tuyệt vời nhất đời người',
            C: 'Khí hậu mùa đông ở Sa Pa quá đỗi khắc nghiệt và khó chịu',
            D: 'Ẩm thực Tây Bắc ngon hơn ẩm thực mọi vùng miền khác'
          },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Dữ kiện và Ý kiến',
          explanation: 'Độ cao 3.143m là số liệu đo đạc khách quan có thể kiểm chứng được.'
        },
        {
          id: 'p1-l-5',
          questionNumber: 5,
          content: 'Văn bản thuyết minh về một danh lam thắng cảnh thuộc thể loại nào?',
          options: {
            A: 'Văn bản thông tin',
            B: 'Văn bản nghị luận',
            C: 'Văn bản văn học',
            D: 'Kịch bản sân khấu'
          },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Thể loại văn bản',
          explanation: 'Thuyết minh là một dạng tiêu biểu của văn bản thông tin.'
        },
        {
          id: 'p1-l-6',
          questionNumber: 6,
          content: 'Cách trình bày thông tin theo trật tự thời gian (chronological order) thường bắt đầu từ đâu?',
          options: {
            A: 'Sự việc xảy ra trước kể trước, sự việc xảy ra sau kể sau',
            B: 'Từ kết quả ngược về nguyên nhân ban đầu',
            C: 'Từ bộ phận đến toàn thể bức tranh',
            D: 'Từ ý kiến chủ quan đến kết luận'
          },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Trình bày thông tin',
          explanation: 'Trật tự thời gian sắp xếp tuyến tính từ quá khứ đến hiện tại.'
        },
        {
          id: 'p1-l-7',
          questionNumber: 7,
          content: 'Nhan đề của văn bản thông tin thường mang đặc điểm gì nổi bật?',
          options: {
            A: 'Ngắn gọn, rõ ràng, nêu đúng đối tượng và vấn đề chính được đề cập',
            B: 'Bóng bẩy, hàm súc, giàu hình tượng ẩn dụ nhiều tầng nghĩa',
            C: 'Dài dòng, liệt kê tất cả các chi tiết trong văn bản',
            D: 'Bắt buộc phải gieo vần như một câu thơ'
          },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Nhan đề văn bản',
          explanation: 'Nhan đề văn bản thông tin đòi hỏi tính chính xác, trực tiếp.'
        },
        {
          id: 'p1-l-8',
          questionNumber: 8,
          content: 'Biện pháp liên kết câu "Tuy nhiên, điều này không có nghĩa là..." sử dụng phép liên kết nào?',
          options: {
            A: 'Phép nối',
            B: 'Phép lặp',
            C: 'Phép thế',
            D: 'Phép đồng nghĩa'
          },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Tiếng Việt',
          explanation: '"Tuy nhiên" là từ ngữ chuyển ý thuộc phép nối.'
        },
        {
          id: 'p1-l-9',
          questionNumber: 9,
          content: 'Khi trích dẫn số liệu trong văn bản thông tin, người viết cần lưu ý điều gì quan trọng nhất?',
          options: {
            A: 'Ghi rõ nguồn trích dẫn đáng tin cậy và thời điểm công bố',
            B: 'Làm tròn số liệu thật to để gây ấn tượng mạnh mẽ',
            C: 'Tự biên tập số liệu theo sở thích cá nhân',
            D: 'Chỉ chọn các con số đẹp mắt mang lại may mắn'
          },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Độ tin cậy',
          explanation: 'Tính trung thực và nguồn trích dẫn là cốt lõi của thông tin.'
        },
        {
          id: 'p1-l-10',
          questionNumber: 10,
          content: 'Biểu đồ tròn (pie chart) thích hợp nhất để minh họa cho dạng dữ liệu nào?',
          options: {
            A: 'Tỉ trọng, cơ cấu phần trăm các thành phần trong một tổng thể',
            B: 'Sự biến thiên tốc độ tăng trưởng liên tục qua nhiều năm',
            C: 'Quy trình các bước vận hành máy móc kỹ thuật',
            D: 'Vị trí địa lí của một vùng đất'
          },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'thong_hieu',
          topic: 'Phương tiện phi ngôn ngữ',
          explanation: 'Biểu đồ tròn thể hiện cơ cấu tỉ lệ % của tổng thể 100%.'
        },
        {
          id: 'p1-l-11',
          questionNumber: 11,
          content: 'Mục đích của việc đặt các câu hỏi gợi mở trong bài viết thông tin là gì?',
          options: {
            A: 'Kích thích sự suy ngẫm và lôi cuốn người đọc tương tác với vấn đề',
            B: 'Thể hiện sự lúng túng thiếu hiểu biết của người viết',
            C: 'Đánh đố độc giả khiến họ không tìm ra câu trả lời',
            D: 'Để kéo dài dung lượng bài báo'
          },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'thong_hieu',
          topic: 'Kỹ năng đọc viết',
          explanation: 'Câu hỏi tu từ/gợi mở giúp người đọc nhập tâm và phản tư.'
        },
        {
          id: 'p1-l-12',
          questionNumber: 12,
          content: 'Từ ngữ nào sau đây mang tính chất trung hòa, khách quan trong phong cách báo chí?',
          options: {
            A: 'Ghi nhận',
            B: 'Kinh hoàng tột độ',
            C: 'Tuyệt đỉnh vô song',
            D: 'Ghê tởm'
          },
          correctAnswer: 'A',
          points: 0.25,
          cognitiveLevel: 'nhan_biet',
          topic: 'Ngôn ngữ báo chí',
          explanation: '"Ghi nhận" là động từ khách quan trung tính, không chứa định kiến cảm xúc.'
        }
      ],
      part2: [
        {
          id: 'p2-l-1',
          questionNumber: 1,
          contextPrompt: 'Đọc đoạn trích sau về "Trí tuệ nhân tạo (AI) trong giáo dục":\n"AI đang mở ra kỷ nguyên học tập cá nhân hóa, giúp học sinh tiếp cận bài giảng phù hợp với tốc độ riêng. Tuy nhiên, nếu phụ thuộc hoàn toàn vào các mô hình ngôn ngữ lớn, người học có nguy cơ suy giảm năng lực tư duy phản biện và khả năng viết tự thân. Các chuyên gia khuyến cáo cần tích hợp AI như một người trợ giảng, chứ không phải người làm hộ bài tập."\nXét tính Đúng hoặc Sai của các phát biểu sau:',
          statements: [
            {
              id: 'p2-l-1-a',
              letter: 'a',
              content: 'Đoạn trích nhìn nhận tác động của AI đối với giáo dục từ cả hai mặt tích cực và tiêu cực.',
              isCorrect: true,
              explanation: 'Đoạn văn nêu mặt tốt (cá nhân hóa) và nguy cơ (giảm tư duy phản biện). Khẳng định ĐÚNG.'
            },
            {
              id: 'p2-l-1-b',
              letter: 'b',
              content: 'Tác giả khuyến nghị nên cấm hoàn toàn học sinh sử dụng AI trong nhà trường.',
              isCorrect: false,
              explanation: 'Tác giả khuyến nghị dùng AI như trợ giảng chứ không cấm đoán. Khẳng định SAI.'
            },
            {
              id: 'p2-l-1-c',
              letter: 'c',
              content: 'Nguy cơ suy giảm tư duy phản biện khi phụ thuộc máy móc là một quan điểm cảnh báo xác đáng.',
              isCorrect: true,
              explanation: 'Đoạn trích chỉ rõ rủi ro này nếu lệ thuộc AI. Khẳng định ĐÚNG.'
            },
            {
              id: 'p2-l-1-d',
              letter: 'd',
              content: 'Phương thức biểu đạt chính của đoạn văn trên là miêu tả và tự sự trữ tình.',
              isCorrect: false,
              explanation: 'Phương thức chính là thuyết minh kết hợp nghị luận. Khẳng định SAI.'
            }
          ],
          cognitiveLevel: 'thong_hieu',
          topic: 'Đọc hiểu văn bản',
          maxPoints: 1.0
        },
        {
          id: 'p2-l-2',
          questionNumber: 2,
          contextPrompt: 'Khảo sát đồ thị infographic "Tỷ lệ che phủ rừng tại Việt Nam giai đoạn 2010 - 2024" cho thấy diện tích rừng trồng tăng trưởng đều đặn đạt 42,02%, nhưng diện tích rừng nguyên sinh tự nhiên có dấu hiệu suy giảm về chất lượng sinh học. Xét tính Đúng hoặc Sai của các nhận xét sau:',
          statements: [
            {
              id: 'p2-l-2-a',
              letter: 'a',
              content: 'Đồ thị cung cấp cả số lượng (tỉ lệ che phủ) và chất lượng (đa dạng sinh học rừng tự nhiên).',
              isCorrect: true,
              explanation: 'Phân tích phản ánh cả 2 khía cạnh số lượng và phẩm chất rừng. Khẳng định ĐÚNG.'
            },
            {
              id: 'p2-l-2-b',
              letter: 'b',
              content: 'Rừng trồng kinh tế (keo, tràm) có giá trị phòng hộ và đa dạng sinh thái tương đương rừng già nguyên sinh.',
              isCorrect: false,
              explanation: 'Rừng đơn loài trồng ngắn ngày không thể thay thế hệ sinh thái rừng già nguyên sinh. Khẳng định SAI.'
            },
            {
              id: 'p2-l-2-c',
              letter: 'c',
              content: 'Phương tiện phi ngôn ngữ (đồ thị cột và đường) giúp người đọc đối chiếu xu hướng trực quan hơn văn bản thuần túy.',
              isCorrect: true,
              explanation: 'Đồ họa trực quan hóa chuỗi dữ liệu theo thời gian. Khẳng định ĐÚNG.'
            },
            {
              id: 'p2-l-2-d',
              letter: 'd',
              content: 'Dữ liệu tỉ lệ che phủ 42,02% là một ý kiến chủ quan chưa thể xác thực.',
              isCorrect: false,
              explanation: 'Đây là số liệu thống kê chính thức của Bộ Nông nghiệp. Khẳng định SAI.'
            }
          ],
          cognitiveLevel: 'thong_hieu',
          topic: 'Đọc hiểu dữ liệu',
          maxPoints: 1.0
        },
        {
          id: 'p2-l-3',
          questionNumber: 3,
          contextPrompt: 'Về nghệ thuật lập luận trong văn bản thông tin thời sự: Xét tính Đúng hoặc Sai của các mệnh đề sau:',
          statements: [
            {
              id: 'p2-l-3-a',
              letter: 'a',
              content: 'Tính mạch lạc của văn bản được thể hiện qua mối quan hệ logic giữa các đề mục con và luận điểm.',
              isCorrect: true,
              explanation: 'Mạch lạc đảm bảo cấu trúc văn bản thông suốt. Khẳng định ĐÚNG.'
            },
            {
              id: 'p2-l-3-b',
              letter: 'b',
              content: 'Việc sử dụng quá nhiều từ cảm thán cá nhân sẽ làm gia tăng tính xác thực cho bài báo.',
              isCorrect: false,
              explanation: 'Từ cảm thán làm giảm tính khách quan khoa học của văn bản thông tin. Khẳng định SAI.'
            },
            {
              id: 'p2-l-3-c',
              letter: 'c',
              content: 'Trích dẫn lời phát biểu của nhân chứng trực tiếp tại hiện trường tạo độ tin cậy cao cho bài báo.',
              isCorrect: true,
              explanation: 'Nhân chứng trực tiếp là nguồn tin gốc có giá trị xác thực. Khẳng định ĐÚNG.'
            },
            {
              id: 'p2-l-3-d',
              letter: 'd',
              content: 'Một văn bản thông tin chuẩn mực luôn dung hòa giữa tính chính xác và sự hấp dẫn đối với công chúng.',
              isCorrect: true,
              explanation: 'Tính đúng đắn và tính đại chúng là hai tiêu chuẩn song hành. Khẳng định ĐÚNG.'
            }
          ],
          cognitiveLevel: 'thong_hieu',
          topic: 'Nghệ thuật lập luận',
          maxPoints: 1.0
        },
        {
          id: 'p2-l-4',
          questionNumber: 4,
          contextPrompt: 'Vấn đề bản quyền và đạo văn trong kỷ nguyên số: Xét tính Đúng hoặc Sai của các nhận định sau:',
          statements: [
            {
              id: 'p2-l-4-a',
              letter: 'a',
              content: 'Sao chép nguyên văn lời người khác mà không để trong ngoặc kép và không dẫn nguồn là hành vi đạo văn.',
              isCorrect: true,
              explanation: 'Đây là định nghĩa cơ bản của hành vi vi phạm liêm chính học thuật. Khẳng định ĐÚNG.'
            },
            {
              id: 'p2-l-4-b',
              letter: 'b',
              content: 'Diễn giải lại (paraphrase) ý tưởng của người khác bằng từ ngữ của mình thì không cần ghi nguồn tham khảo.',
              isCorrect: false,
              explanation: 'Dù diễn đạt lại vẫn phải trích dẫn nguồn tác giả gốc của ý tưởng. Khẳng định SAI.'
            },
            {
              id: 'p2-l-4-c',
              letter: 'c',
              content: 'Việc tôn trọng bản quyền thể hiện phẩm chất trung thực và lòng tự trọng của người học.',
              isCorrect: true,
              explanation: 'Phù hợp với mục tiêu phát triển phẩm chất Trung thực trong chương trình GDPT 2018. Khẳng định ĐÚNG.'
            },
            {
              id: 'p2-l-4-d',
              letter: 'd',
              content: 'Mọi thông tin trên không gian mạng đều là tài sản miễn phí có thể tùy ý sử dụng cho mục đích thương mại.',
              isCorrect: false,
              explanation: 'Nội dung số được bảo hộ bởi Luật Sở hữu trí tuệ. Khẳng định SAI.'
            }
          ],
          cognitiveLevel: 'van_dung',
          topic: 'Văn hóa số & Bản quyền',
          maxPoints: 1.0
        }
      ],
      part3: [
        {
          id: 'p3-l-1',
          questionNumber: 1,
          content: 'Xác định từ khóa (keyword) quan trọng nhất thể hiện chủ đề của văn bản về biến đổi khí hậu sau: "Hiệu ứng nhà kính gia tăng khiến nhiệt độ Trái Đất chạm ngưỡng kỷ lục trong thế kỷ XXI."',
          correctAnswer: 'Hiệu ứng nhà kính',
          points: 0.5,
          cognitiveLevel: 'nhan_biet',
          topic: 'Từ khóa chủ đề',
          explanation: '"Hiệu ứng nhà kính" là nguyên nhân và thuật ngữ hạt nhân của câu.'
        },
        {
          id: 'p3-l-2',
          questionNumber: 2,
          content: 'Chỉ ra biện pháp tu từ được sử dụng trong câu văn: "Rừng già là lá phổi xanh che chở cho sự sống của hành tinh."',
          correctAnswer: 'Ẩn dụ',
          points: 0.5,
          cognitiveLevel: 'nhan_biet',
          topic: 'Biện pháp tu từ',
          explanation: 'Gọi rừng già là lá phổi xanh dựa trên nét tương đồng về chức năng hô hấp/trao đổi khí.'
        },
        {
          id: 'p3-l-3',
          questionNumber: 3,
          content: 'Trong cấu trúc một bản tin báo chí, mô hình cấu trúc nào được sử dụng phổ biến nhất để sắp xếp thông tin từ quan trọng nhất đến ít quan trọng hơn?',
          correctAnswer: 'Hình tháp ngược',
          points: 0.5,
          cognitiveLevel: 'thong_hieu',
          topic: 'Mô hình bản tin',
          explanation: 'Mô hình "Hình tháp ngược" (Inverted Pyramid) đặt tin nóng nhất ở đầu bài.'
        },
        {
          id: 'p3-l-4',
          questionNumber: 4,
          content: 'Một bài báo khoa học cần nêu rõ bao nhiêu câu hỏi cơ bản trong quy tắc 5W1H của báo chí?',
          correctAnswer: '6',
          points: 0.5,
          cognitiveLevel: 'nhan_biet',
          topic: 'Quy tắc 5W1H',
          explanation: '5W1H gồm 6 câu hỏi: Who, What, Where, When, Why, How.'
        }
      ],
      part4: [
        {
          id: 'p4-l-1',
          questionNumber: 1,
          content: 'Từ việc đọc hiểu văn bản về "Văn hóa đọc của giới trẻ trong kỷ nguyên số", em hãy viết một đoạn văn nghị luận xã hội (khoảng 200 chữ) trả lời câu hỏi: Giới trẻ ngày nay nên đọc sâu (deep reading) hay đọc lướt (skimming) trên mạng internet?',
          points: 1.0,
          cognitiveLevel: 'van_dung_cao',
          topic: 'Nghị luận xã hội',
          gradingCriteria: [
            {
              step: 'Hình thức đoạn văn & Dung lượng',
              detail: 'Đúng cấu trúc đoạn văn, không xuống dòng tùy tiện, dung lượng khoảng 200 chữ (dung sai ±30 chữ).',
              points: 0.25
            },
            {
              step: 'Xác định đúng vấn đề nghị luận',
              detail: 'Phân tích được vai trò của cả đọc lướt để bao quát thông tin và đọc sâu để hình thành tư duy đa chiều.',
              points: 0.25
            },
            {
              step: 'Lập luận thuyết phục & Dẫn chứng thực tế',
              detail: 'Đưa ra giải pháp kết hợp hài hòa, dẫn chứng người thực việc thực, tránh nói sáo rỗng.',
              points: 0.25
            },
            {
              step: 'Chính tả, ngữ pháp & Sáng tạo cá nhân',
              detail: 'Diễn đạt trong sáng, không mắc lỗi dùng từ, có góc nhìn độc đáo, phản tư bản thân.',
              points: 0.25
            }
          ]
        }
      ],
      matrix: [
        {
          topic: '1. Nhận biết văn bản thông tin & 5W1H',
          part1_nhanbiet: 6,
          part1_thonghieu: 0,
          part2_nhanbiet: 0,
          part2_thonghieu: 0,
          part2_vandung: 0,
          part3_thonghieu: 0,
          part3_vandung: 0,
          part4_vandung: 0,
          part4_vandungcao: 0,
          totalPoints: 1.5,
          percentage: 15.0
        },
        {
          topic: '2. Phương tiện phi ngôn ngữ & Đọc dữ liệu',
          part1_nhanbiet: 3,
          part1_thonghieu: 2,
          part2_nhanbiet: 0,
          part2_thonghieu: 2,
          part2_vandung: 0,
          part3_thonghieu: 1,
          part3_vandung: 0,
          part4_vandung: 0,
          part4_vandungcao: 0,
          totalPoints: 3.75,
          percentage: 37.5
        },
        {
          topic: '3. Phân biệt Fact - Opinion & Đạo đức học thuật',
          part1_nhanbiet: 3,
          part1_thonghieu: 0,
          part2_nhanbiet: 0,
          part2_thonghieu: 1,
          part2_vandung: 1,
          part3_thonghieu: 1,
          part3_vandung: 0,
          part4_vandung: 0,
          part4_vandungcao: 0,
          totalPoints: 3.25,
          percentage: 32.5
        },
        {
          topic: '4. Viết đoạn văn nghị luận xã hội ứng dụng',
          part1_nhanbiet: 0,
          part1_thonghieu: 0,
          part2_nhanbiet: 0,
          part2_thonghieu: 0,
          part2_vandung: 0,
          part3_thonghieu: 0,
          part3_vandung: 0,
          part4_vandung: 0,
          part4_vandungcao: 1,
          totalPoints: 1.5,
          percentage: 15.0
        }
      ],
      specifications: [
        {
          stt: 1,
          topic: 'Văn bản thông tin',
          contentStandard: 'Nhận biết mục đích và phương tiện phi ngôn ngữ',
          cognitiveLevel: 'nhan_biet',
          part: 'I',
          questionNumber: 1,
          points: 0.25
        },
        {
          stt: 2,
          topic: 'Đọc hiểu văn bản',
          contentStandard: 'Phân tích đa chiều quan điểm tác giả về AI trong giáo dục',
          cognitiveLevel: 'thong_hieu',
          part: 'II',
          questionNumber: 1,
          points: 1.0
        },
        {
          stt: 3,
          topic: 'Nghị luận xã hội',
          contentStandard: 'Vận dụng viết đoạn văn phản biện về văn hóa đọc trong kỷ nguyên số',
          cognitiveLevel: 'van_dung_cao',
          part: 'IV',
          questionNumber: 1,
          points: 1.0
        }
      ]
    }
  },
  biology: {
    // Fallback referencing math or initialized
    ...({} as any)
  },
  history_geography: {
    ...({} as any)
  },
  informatics: {
    ...({} as any)
  },
  english: {
    ...({} as any)
  }
};

// Mirror biology, history, informatics, english to have valid objects fallback to math/physics
SAMPLE_PRESETS.biology = {
  ...SAMPLE_PRESETS.physics,
  activeSubject: 'biology',
  lessonPlan: {
    ...SAMPLE_PRESETS.physics.lessonPlan,
    id: 'bio-10-cell',
    title: 'BÀI 8: TẾ BÀO NHÂN THỰC VÀ HỆ THỐNG NỘI BÀO',
    subject: 'Sinh học',
    grade: 10
  }
};

SAMPLE_PRESETS.history_geography = {
  ...SAMPLE_PRESETS.literature,
  activeSubject: 'history_geography',
  lessonPlan: {
    ...SAMPLE_PRESETS.literature.lessonPlan,
    id: 'hist-10-civilization',
    title: 'BÀI 5: VĂN MINH ĐẠI VIỆT VÀ BÀI HỌC DỰNG NƯỚC',
    subject: 'Lịch sử & Địa lí',
    grade: 10
  }
};

SAMPLE_PRESETS.informatics = {
  ...SAMPLE_PRESETS.math,
  activeSubject: 'informatics',
  lessonPlan: {
    ...SAMPLE_PRESETS.math.lessonPlan,
    id: 'info-11-python-algo',
    title: 'BÀI 12: THUẬT TOÁN ĐỆ QUY VÀ QUY HOẠCH ĐỘNG TRONG PYTHON',
    subject: 'Tin học',
    grade: 11
  }
};

SAMPLE_PRESETS.english = {
  ...SAMPLE_PRESETS.literature,
  activeSubject: 'english',
  lessonPlan: {
    ...SAMPLE_PRESETS.literature.lessonPlan,
    id: 'eng-10-environment',
    title: 'UNIT 9: PROTECTING THE ENVIRONMENT',
    subject: 'Tiếng Anh',
    grade: 10
  }
};
