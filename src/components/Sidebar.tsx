import React from 'react';
import { 
  SubjectKey, 
  EdTechWorkspaceState 
} from '../types/edtech';
import { 
  BookOpen, 
  FileText, 
  Presentation, 
  HelpCircle, 
  Award, 
  Code, 
  Download, 
  Printer, 
  CheckCircle2, 
  AlertCircle,
  Sparkles,
  RefreshCw,
  FolderDown
} from 'lucide-react';
import { 
  exportLessonPlanWord, 
  exportExamPaperWord, 
  exportStandaloneHtml, 
  exportJsonState 
} from '../utils/exportUtils';

interface SidebarProps {
  state: EdTechWorkspaceState;
  onChangeSubject: (subject: SubjectKey) => void;
  onUpdateState: (newState: EdTechWorkspaceState) => void;
  activeTab: string;
  onSelectTab: (tab: string) => void;
  onOpenPrint: () => void;
}

const SUBJECT_OPTIONS: { id: SubjectKey; name: string; icon: string; gradeDefault: number }[] = [
  { id: 'math', name: 'Toán học', icon: '📐', gradeDefault: 11 },
  { id: 'physics', name: 'Vật lý', icon: '⚡', gradeDefault: 12 },
  { id: 'chemistry', name: 'Hóa học', icon: '🧪', gradeDefault: 11 },
  { id: 'biology', name: 'Sinh học', icon: '🌿', gradeDefault: 10 },
  { id: 'literature', name: 'Ngữ văn', icon: '📖', gradeDefault: 10 },
  { id: 'history_geography', name: 'Lịch sử & Địa lí', icon: '🌏', gradeDefault: 10 },
  { id: 'informatics', name: 'Tin học', icon: '💻', gradeDefault: 11 },
  { id: 'english', name: 'Tiếng Anh', icon: '🌐', gradeDefault: 10 },
];

export const Sidebar: React.FC<SidebarProps> = ({
  state,
  onChangeSubject,
  onUpdateState,
  activeTab,
  onSelectTab,
  onOpenPrint
}) => {
  const { lessonPlan, exam } = state;

  // Tính tổng điểm đề thi hiện tại
  const part1Total = exam.part1.reduce((sum, q) => sum + q.points, 0);
  const part2Total = exam.part2.reduce((sum, q) => sum + q.maxPoints, 0);
  const part3Total = exam.part3.reduce((sum, q) => sum + q.points, 0);
  const part4Total = exam.part4.reduce((sum, q) => sum + q.points, 0);
  const currentTotal = part1Total + part2Total + part3Total + part4Total;
  const isScoreStandard = Math.abs(currentTotal - 10.0) < 0.001;

  const navTabs = [
    { id: 'khbd', label: '1. KHBD (CV 5512)', icon: BookOpen, desc: '4 Hoạt động chuẩn sư phạm' },
    { id: 'slides', label: '2. Slide Bài giảng', icon: Presentation, desc: 'Trình chiếu theo tiến trình' },
    { id: 'matrix', label: '3. Ma trận & Đặc tả', icon: Award, desc: 'Ma trận 40-30-30 CV 7991' },
    { id: 'exam', label: '4. Đề kiểm tra (4 Phần)', icon: HelpCircle, desc: 'Đúng/Sai 4 lệnh & Điền ngắn' },
    { id: 'rubric', label: '5. Hướng dẫn chấm', icon: FileText, desc: 'Barem điểm & giải thích' },
    { id: 'json', label: '6. JSON State bàn giao', icon: Code, desc: 'Đồng bộ dữ liệu phiên sau' },
  ];

  return (
    <aside className="w-[380px] shrink-0 border-r border-slate-200 bg-white flex flex-col h-full select-none">
      {/* Brand Header */}
      <div className="p-4 border-b border-slate-100 bg-slate-900 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-sm shadow">
              VN
            </div>
            <div>
              <div className="text-sm font-bold tracking-tight">EdTech Workspace</div>
              <div className="text-[11px] text-slate-400">Chuyển đổi số Sư phạm K-12</div>
            </div>
          </div>
          <span className="text-[10px] font-mono bg-blue-900/60 text-blue-300 border border-blue-700/50 px-2 py-0.5 rounded">
            CV 7991 & 5512
          </span>
        </div>
      </div>

      {/* Main Nav Items */}
      <div className="p-3 border-b border-slate-100 bg-slate-50/60">
        <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-2 mb-1.5">
          Phân hệ làm việc
        </div>
        <nav className="space-y-1">
          {navTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm font-semibold'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <div className="min-w-0 flex-1">
                  <div className="text-xs truncate">{tab.label}</div>
                  <div className={`text-[10px] truncate ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>
                    {tab.desc}
                  </div>
                </div>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Scrollable Configuration Body */}
      <div className="flex-1 overflow-y-auto p-4 space-y-5">
        {/* Môn học & Chủ đề mẫu */}
        <div>
          <label className="block text-xs font-bold text-slate-800 mb-1.5">
            Môn học & Bài giảng chuẩn
          </label>
          <div className="grid grid-cols-2 gap-1.5">
            {SUBJECT_OPTIONS.map((sub) => {
              const isSelected = state.activeSubject === sub.id;
              return (
                <button
                  key={sub.id}
                  onClick={() => onChangeSubject(sub.id)}
                  className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium text-left transition border ${
                    isSelected
                      ? 'bg-blue-50 border-blue-500 text-blue-900 font-bold'
                      : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span className="text-sm">{sub.icon}</span>
                  <span className="truncate">{sub.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Thông tin bài dạy & Lớp */}
        <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 space-y-2.5 text-xs">
          <div className="font-bold text-slate-800 flex items-center justify-between">
            <span>Thông tin hồ sơ bài giảng</span>
            <span className="text-[10px] text-slate-500">GDPT 2018</span>
          </div>

          <div>
            <span className="text-[11px] text-slate-500 block mb-0.5">Tên bài học</span>
            <input
              type="text"
              value={lessonPlan.title}
              onChange={(e) =>
                onUpdateState({
                  ...state,
                  lessonPlan: { ...lessonPlan, title: e.target.value }
                })
              }
              className="w-full bg-white border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-800 font-medium focus:ring-1 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <span className="text-[11px] text-slate-500 block mb-0.5">Khối lớp</span>
              <select
                value={lessonPlan.grade}
                onChange={(e) =>
                  onUpdateState({
                    ...state,
                    lessonPlan: { ...lessonPlan, grade: Number(e.target.value) },
                    exam: { ...exam, grade: Number(e.target.value) }
                  })
                }
                className="w-full bg-white border border-slate-200 rounded px-2 py-1.5 text-xs text-slate-800 outline-none"
              >
                {[6, 7, 8, 9, 10, 11, 12].map((g) => (
                  <option key={g} value={g}>Lớp {g}</option>
                ))}
              </select>
            </div>
            <div>
              <span className="text-[11px] text-slate-500 block mb-0.5">Thời lượng</span>
              <input
                type="text"
                value={lessonPlan.duration}
                onChange={(e) =>
                  onUpdateState({
                    ...state,
                    lessonPlan: { ...lessonPlan, duration: e.target.value }
                  })
                }
                className="w-full bg-white border border-slate-200 rounded px-2 py-1.5 text-xs text-slate-800 outline-none"
              />
            </div>
          </div>

          <div>
            <span className="text-[11px] text-slate-500 block mb-0.5">Bộ sách giáo khoa</span>
            <input
              type="text"
              value={lessonPlan.curriculum}
              onChange={(e) =>
                onUpdateState({
                  ...state,
                  lessonPlan: { ...lessonPlan, curriculum: e.target.value }
                })
              }
              className="w-full bg-white border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-800 outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <span className="text-[11px] text-slate-500 block mb-0.5">Giáo viên</span>
              <input
                type="text"
                value={lessonPlan.teacherName}
                onChange={(e) =>
                  onUpdateState({
                    ...state,
                    lessonPlan: { ...lessonPlan, teacherName: e.target.value }
                  })
                }
                className="w-full bg-white border border-slate-200 rounded px-2 py-1.5 text-xs text-slate-800 outline-none"
              />
            </div>
            <div>
              <span className="text-[11px] text-slate-500 block mb-0.5">Trường</span>
              <input
                type="text"
                value={lessonPlan.schoolName}
                onChange={(e) =>
                  onUpdateState({
                    ...state,
                    lessonPlan: { ...lessonPlan, schoolName: e.target.value },
                    exam: { ...exam, schoolName: e.target.value }
                  })
                }
                className="w-full bg-white border border-slate-200 rounded px-2 py-1.5 text-xs text-slate-800 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Kiểm soát Barem Công văn 7991 */}
        <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 text-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-slate-800">Kiểm tra Barem CV 7991</span>
            {isScoreStandard ? (
              <span className="flex items-center gap-1 text-[11px] text-emerald-700 font-semibold bg-emerald-100 px-2 py-0.5 rounded">
                <CheckCircle2 className="w-3 h-3" /> Chuẩn 10.0đ
              </span>
            ) : (
              <span className="flex items-center gap-1 text-[11px] text-amber-700 font-semibold bg-amber-100 px-2 py-0.5 rounded">
                <AlertCircle className="w-3 h-3" /> {currentTotal.toFixed(2)}đ (Lệch 10đ)
              </span>
            )}
          </div>

          <div className="space-y-1.5 pt-1 text-[11px]">
            <div className="flex justify-between items-center text-slate-600">
              <span>Phần I (Nhiều lựa chọn):</span>
              <span className="font-mono font-semibold">{exam.part1.length} câu = {part1Total.toFixed(2)}đ</span>
            </div>
            <div className="flex justify-between items-center text-slate-600">
              <span>Phần II (Đúng/Sai 4 lệnh):</span>
              <span className="font-mono font-semibold">{exam.part2.length} câu = {part2Total.toFixed(1)}đ</span>
            </div>
            <div className="flex justify-between items-center text-slate-600">
              <span>Phần III (Trả lời ngắn):</span>
              <span className="font-mono font-semibold">{exam.part3.length} câu = {part3Total.toFixed(1)}đ</span>
            </div>
            <div className="flex justify-between items-center text-slate-600">
              <span>Phần IV (Tự luận):</span>
              <span className="font-mono font-semibold">{exam.part4.length} câu = {part4Total.toFixed(1)}đ</span>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200">
            <div className="text-[11px] text-slate-500 mb-1 flex justify-between">
              <span>Tỉ lệ cấp độ:</span>
              <span className="font-semibold text-slate-700">40% NB - 30% TH - 30% VD</span>
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden flex">
              <div style={{ width: '40%' }} className="bg-blue-600" title="Nhận biết: 40%"></div>
              <div style={{ width: '30%' }} className="bg-emerald-600" title="Thông hiểu: 30%"></div>
              <div style={{ width: '30%' }} className="bg-amber-600" title="Vận dụng: 30%"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Export Tools */}
      <div className="p-3 border-t border-slate-200 bg-slate-50/80 space-y-2">
        <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-1">
          Khu vực xuất hồ sơ
        </div>

        <div className="grid grid-cols-2 gap-1.5 text-xs">
          <button
            onClick={() => exportLessonPlanWord(state)}
            className="flex items-center justify-center gap-1.5 px-2.5 py-2 bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 rounded-lg font-medium transition shadow-xs"
            title="Xuất Kế hoạch bài dạy sang Microsoft Word (.doc)"
          >
            <Download className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span className="truncate">Word KHBD 5512</span>
          </button>

          <button
            onClick={() => exportExamPaperWord(state)}
            className="flex items-center justify-center gap-1.5 px-2.5 py-2 bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 rounded-lg font-medium transition shadow-xs"
            title="Xuất Đề thi sang Microsoft Word (.doc)"
          >
            <Download className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="truncate">Word Đề thi 7991</span>
          </button>
        </div>

        <button
          onClick={() => exportStandaloneHtml(state)}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition shadow-xs"
          title="Tải trọn gói 1 file HTML duy nhất (dùng trực tiếp không cần mạng/cài đặt)"
        >
          <FolderDown className="w-4 h-4 shrink-0" />
          <span>Tải File HTML Độc Lập (Offline)</span>
        </button>

        <div className="flex gap-1.5 pt-1">
          <button
            onClick={onOpenPrint}
            className="flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded text-[11px] font-medium transition"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>In / Lưu PDF</span>
          </button>
          <button
            onClick={() => exportJsonState(state)}
            className="flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded text-[11px] font-medium transition"
          >
            <Code className="w-3.5 h-3.5" />
            <span>Lưu JSON State</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
