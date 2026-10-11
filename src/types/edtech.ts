export type SubjectKey = 
  | 'math' 
  | 'physics' 
  | 'chemistry' 
  | 'biology' 
  | 'literature' 
  | 'history_geography' 
  | 'informatics' 
  | 'english';

export type CognitiveLevel = 'nhan_biet' | 'thong_hieu' | 'van_dung' | 'van_dung_cao';

export interface ObjectiveData {
  knowledge: string[];
  generalCompetencies: string[]; // Tự chủ & tự học, Giao tiếp & hợp tác, Giải quyết vấn đề & sáng tạo
  specificCompetencies: string[]; // Năng lực đặc thù môn học
  qualities: string[]; // Yêu nước, Nhân ái, Chăm chỉ, Trung thực, Trách nhiệm
}

export interface ActivityStep {
  teacherActivity: string; // Chuyển giao nhiệm vụ / Kết luận nhận định
  studentActivity: string; // Thực hiện nhiệm vụ / Báo cáo thảo luận
}

export interface LessonActivity {
  id: string;
  name: string; // Tên hoạt động (Khởi động, Hình thành kiến thức, Luyện tập, Vận dụng)
  stageNumber: 1 | 2 | 3 | 4;
  timeAllocation: string; // Ví dụ: "7 phút", "20 phút"
  objective: string; // a) Mục tiêu
  content: string; // b) Nội dung
  product: string; // c) Sản phẩm
  implementation: {
    // d) Tổ chức thực hiện: 4 bước 5512
    step1_transfer: string; // Bước 1: Giao nhiệm vụ
    step2_execution: string; // Bước 2: Thực hiện nhiệm vụ
    step3_discussion: string; // Bước 3: Báo cáo, thảo luận
    step4_conclusion: string; // Bước 4: Kết luận, nhận định
  };
}

export interface LessonPlan {
  id: string;
  title: string;
  subject: string;
  grade: number;
  duration: string; // Ví dụ: "2 tiết (90 phút)"
  curriculum: string; // Ví dụ: "Chân trời sáng tạo", "Kết nối tri thức", "Cánh diều"
  schoolName: string;
  teacherName: string;
  datePrepared: string;
  objectives: ObjectiveData;
  equipment: {
    teacher: string[];
    student: string[];
  };
  activities: LessonActivity[];
}

export interface SlideItem {
  id: string;
  activityStage: 1 | 2 | 3 | 4 | 0; // 0 for intro/conclusion
  slideNumber: number;
  title: string;
  subtitle?: string;
  bulletPoints: string[];
  calloutBox?: {
    type: 'definition' | 'question' | 'task' | 'tip';
    title: string;
    content: string;
  };
  visualType?: 'diagram' | 'formula' | 'timeline' | 'comparison' | 'code';
  visualContent?: string;
  speakerNotes: string;
  timerMinutes?: number;
}

// CÔNG VĂN 7991/BGDĐT-GDTrH: CẤU TRÚC ĐỀ 4 PHẦN ĐỘC LẬP
export interface MultipleChoiceItem {
  id: string;
  questionNumber: number;
  content: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  points: number;
  cognitiveLevel: CognitiveLevel;
  topic: string;
  explanation: string;
}

export interface TrueFalseStatement {
  id: string;
  letter: 'a' | 'b' | 'c' | 'd';
  content: string;
  isCorrect: boolean; // true = Đúng, false = Sai
  explanation: string;
}

export interface TrueFalseItem {
  id: string;
  questionNumber: number;
  contextPrompt: string; // Phần dẫn / ngữ cảnh bài toán
  statements: TrueFalseStatement[]; // 4 lệnh a, b, c, d
  cognitiveLevel: CognitiveLevel;
  topic: string;
  maxPoints: number; // Mặc định 1.0 điểm cho đủ 4 lệnh
}

export interface ShortAnswerItem {
  id: string;
  questionNumber: number;
  content: string;
  correctAnswer: string; // Giá trị số hoặc từ ngữ
  unit?: string;
  points: number;
  cognitiveLevel: CognitiveLevel;
  topic: string;
  explanation: string;
}

export interface EssayItem {
  id: string;
  questionNumber: number;
  content: string;
  subQuestions?: { label: string; text: string; points: number }[];
  points: number;
  cognitiveLevel: CognitiveLevel;
  topic: string;
  gradingCriteria: {
    step: string;
    detail: string;
    points: number;
  }[];
}

export interface MatrixRow {
  topic: string; // Chủ đề / Đơn vị kiến thức
  part1_nhanbiet: number;
  part1_thonghieu: number;
  part2_nhanbiet: number;
  part2_thonghieu: number;
  part2_vandung: number;
  part3_thonghieu: number;
  part3_vandung: number;
  part4_vandung: number;
  part4_vandungcao: number;
  totalPoints: number;
  percentage: number;
}

export interface ExamSpecificationItem {
  stt: number;
  topic: string;
  contentStandard: string; // Yêu cầu cần đạt
  cognitiveLevel: CognitiveLevel;
  part: 'I' | 'II' | 'III' | 'IV';
  questionNumber: number;
  points: number;
}

export interface ExamData {
  id: string;
  title: string;
  subject: string;
  grade: number;
  durationMinutes: number;
  academicYear: string;
  semester: string;
  schoolName: string;
  examCode: string;
  totalPoints: 10.0;
  weighting: {
    nhanBiet: number; // 40% (4.0 điểm)
    thongHieu: number; // 30% (3.0 điểm)
    vanDung: number; // 30% (3.0 điểm) bao gồm vận dụng cao
  };
  part1: MultipleChoiceItem[]; // Phần I: TN nhiều lựa chọn
  part2: TrueFalseItem[]; // Phần II: TN Đúng/Sai 4 lệnh
  part3: ShortAnswerItem[]; // Phần III: TN trả lời ngắn
  part4: EssayItem[]; // Phần IV: Tự luận
  matrix: MatrixRow[];
  specifications: ExamSpecificationItem[];
}

export interface EdTechWorkspaceState {
  version: string;
  lastUpdated: string;
  activeSubject: SubjectKey;
  lessonPlan: LessonPlan;
  slides: SlideItem[];
  exam: ExamData;
}
