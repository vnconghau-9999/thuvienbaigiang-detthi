import React, { useState } from 'react';
import { ExamData } from '../types/edtech';
import { 
  HelpCircle, 
  Download, 
  Printer, 
  CheckCircle2, 
  XCircle, 
  Play, 
  RotateCcw, 
  Award,
  Sparkles
} from 'lucide-react';
import { exportExamPaperWord } from '../utils/exportUtils';
import { EdTechWorkspaceState } from '../types/edtech';

interface ExamPaperViewProps {
  exam: ExamData;
  fullState: EdTechWorkspaceState;
}

export const ExamPaperView: React.FC<ExamPaperViewProps> = ({ exam, fullState }) => {
  // Test mode states
  const [isTestMode, setIsTestMode] = useState(false);
  const [userAnswersP1, setUserAnswersP1] = useState<Record<string, string>>({});
  const [userAnswersP2, setUserAnswersP2] = useState<Record<string, Record<string, boolean>>>({});
  const [userAnswersP3, setUserAnswersP3] = useState<Record<string, string>>({});
  const [isGraded, setIsGraded] = useState(false);
  const [testScore, setTestScore] = useState<number | null>(null);

  const handleSelectP1 = (qId: string, opt: string) => {
    if (isGraded) return;
    setUserAnswersP1({ ...userAnswersP1, [qId]: opt });
  };

  const handleSelectP2 = (qId: string, stmtLetter: string, val: boolean) => {
    if (isGraded) return;
    const currentQ = userAnswersP2[qId] || {};
    setUserAnswersP2({
      ...userAnswersP2,
      [qId]: { ...currentQ, [stmtLetter]: val }
    });
  };

  const handleInputP3 = (qId: string, val: string) => {
    if (isGraded) return;
    setUserAnswersP3({ ...userAnswersP3, [qId]: val });
  };

  // Tính điểm theo đúng chuẩn Công văn 7991
  const handleGradeExam = () => {
    let score = 0;

    // Phần I: 0.25đ / câu
    exam.part1.forEach((q) => {
      if (userAnswersP1[q.id] === q.correctAnswer) {
        score += q.points;
      }
    });

    // Phần II: Barem chuẩn BGD 7991: 1 ý = 0.1; 2 ý = 0.25; 3 ý = 0.5; 4 ý = 1.0
    exam.part2.forEach((q) => {
      const userQ = userAnswersP2[q.id] || {};
      let correctCount = 0;
      q.statements.forEach((stmt) => {
        if (userQ[stmt.letter] === stmt.isCorrect) {
          correctCount++;
        }
      });

      if (correctCount === 1) score += 0.1;
      else if (correctCount === 2) score += 0.25;
      else if (correctCount === 3) score += 0.5;
      else if (correctCount === 4) score += 1.0;
    });

    // Phần III: 0.5đ / câu
    exam.part3.forEach((q) => {
      const userAns = (userAnswersP3[q.id] || '').trim().toLowerCase();
      const trueAns = q.correctAnswer.trim().toLowerCase();
      if (userAns === trueAns) {
        score += q.points;
      }
    });

    setTestScore(Math.min(10.0, score));
    setIsGraded(true);
  };

  const handleResetTest = () => {
    setUserAnswersP1({});
    setUserAnswersP2({});
    setUserAnswersP3({});
    setIsGraded(false);
    setTestScore(null);
  };

  return (
    <div className="space-y-6">
      {/* Top Header Actions */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 flex flex-wrap items-center justify-between gap-4 shadow-2xs">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-50 text-blue-700 rounded-lg">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900 leading-tight">
              Đề Kiểm Tra Định Kỳ (4 Phần Độc Lập)
            </h2>
            <div className="text-xs text-slate-500 mt-0.5">
              Tuyệt đối chuẩn <strong className="text-blue-700">Công văn 7991/BGDĐT-GDTrH</strong> (ngày 17/12/2024)
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Toggle Interactive Test Mode */}
          <button
            onClick={() => {
              setIsTestMode(!isTestMode);
              if (!isTestMode) handleResetTest();
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition border ${
              isTestMode
                ? 'bg-amber-600 text-white border-amber-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            <span>{isTestMode ? 'Thoát làm bài thử' : 'Chế độ làm bài thử'}</span>
          </button>

          {isTestMode && !isGraded && (
            <button
              onClick={handleGradeExam}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Chấm điểm ngay (CV 7991)</span>
            </button>
          )}

          {isTestMode && isGraded && (
            <button
              onClick={handleResetTest}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-700 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Làm lại từ đầu</span>
            </button>
          )}

          <button
            onClick={() => exportExamPaperWord(fullState)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition shadow-2xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Xuất file Word</span>
          </button>

          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-xs font-semibold transition shadow-2xs"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>In đề kiểm tra</span>
          </button>
        </div>
      </div>

      {/* Floating score banner when graded */}
      {isGraded && testScore !== null && (
        <div className="bg-emerald-50 border-2 border-emerald-500 rounded-xl p-4 flex items-center justify-between shadow-md animate-fadeIn">
          <div className="flex items-center gap-3">
            <Award className="w-8 h-8 text-emerald-600 shrink-0" />
            <div>
              <div className="text-base font-bold text-emerald-950">
                KẾT QUẢ TỰ ĐỘNG CHẤM THEO CÔNG VĂN 7991
              </div>
              <div className="text-xs text-emerald-700">
                Barem Phần II Đúng/Sai: 1 ý = 0.1đ · 2 ý = 0.25đ · 3 ý = 0.5đ · 4 ý = 1.0đ
              </div>
            </div>
          </div>
          <div className="text-right">
            <span className="text-3xl font-extrabold text-emerald-700 font-mono">
              {testScore.toFixed(2)}
            </span>
            <span className="text-sm font-bold text-emerald-900"> / 10.0 điểm</span>
          </div>
        </div>
      )}

      {/* Paper Canvas (A4 Sheet Simulation) */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 max-w-5xl mx-auto space-y-8 text-slate-900 print:shadow-none print:border-none print:p-0">
        {/* Header Đề thi */}
        <div className="grid grid-cols-2 text-center text-xs pb-4 border-b border-slate-200">
          <div>
            <div className="uppercase font-semibold text-slate-700">{exam.schoolName}</div>
            <div className="font-bold text-slate-900 text-sm mt-0.5">{exam.examCode}</div>
          </div>
          <div>
            <div className="font-bold text-slate-900 text-sm uppercase">{exam.title}</div>
            <div className="font-semibold text-slate-800 mt-0.5">
              Môn: {exam.subject} - Lớp: {exam.grade}
            </div>
            <div className="italic text-slate-500">
              Thời gian làm bài: {exam.durationMinutes} phút (Không kể thời gian phát đề)
            </div>
          </div>
        </div>

        {/* Khung Phách & Điểm */}
        <div className="border border-slate-300 rounded-lg overflow-hidden text-xs grid grid-cols-1 md:grid-cols-3">
          <div className="p-3 border-r border-slate-300 space-y-1.5 md:col-span-2">
            <div>Họ và tên thí sinh: ......................................................................................................</div>
            <div>Số báo danh: ..................................................... Lớp: ................................................</div>
          </div>
          <div className="p-3 bg-slate-50 flex flex-col items-center justify-center text-center">
            <div className="font-bold text-slate-800 uppercase">ĐIỂM TOÀN BÀI</div>
            <div className="text-xl font-mono font-bold text-blue-700 mt-1">
              {isGraded && testScore !== null ? `${testScore.toFixed(2)}` : '..... / 10.0'}
            </div>
          </div>
        </div>

        {/* ===================== PHẦN I ===================== */}
        <section className="space-y-4">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-3 rounded-r-lg">
            <h3 className="text-sm font-bold text-blue-950 uppercase">
              PHẦN I. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN ({exam.part1.length} câu - {(exam.part1.length * 0.25).toFixed(2)} điểm)
            </h3>
            <p className="text-xs text-blue-800 italic mt-0.5">
              Thí sinh trả lời từ câu 1 đến câu {exam.part1.length}. Mỗi câu hỏi thí sinh chỉ chọn một phương án chính xác nhất. Mỗi câu đúng được 0.25 điểm.
            </p>
          </div>

          <div className="space-y-4 text-xs">
            {exam.part1.map((q) => {
              const selected = userAnswersP1[q.id];
              const isCorrect = isGraded && selected === q.correctAnswer;
              const isWrong = isGraded && selected && selected !== q.correctAnswer;

              return (
                <div
                  key={q.id}
                  className={`p-3.5 rounded-lg border transition ${
                    isCorrect
                      ? 'bg-emerald-50/70 border-emerald-300'
                      : isWrong
                      ? 'bg-rose-50/70 border-rose-300'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <p className="font-semibold text-slate-900 mb-2.5 leading-relaxed">
                    <span className="font-bold text-blue-900">Câu {q.questionNumber}: </span>
                    {q.content}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-slate-700">
                    {(['A', 'B', 'C', 'D'] as const).map((opt) => {
                      const isOptionSelected = selected === opt;
                      const isOptionAnswer = isGraded && q.correctAnswer === opt;

                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => isTestMode && handleSelectP1(q.id, opt)}
                          disabled={!isTestMode || isGraded}
                          className={`flex items-start gap-2 p-2 rounded text-left transition border ${
                            isOptionAnswer
                              ? 'bg-emerald-100 border-emerald-500 font-bold text-emerald-950'
                              : isOptionSelected
                              ? 'bg-blue-100 border-blue-500 font-bold text-blue-950'
                              : 'bg-slate-50/60 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          <span className="font-bold shrink-0">{opt}.</span>
                          <span className="leading-snug">{q.options[opt]}</span>
                        </button>
                      );
                    })}
                  </div>

                  {isGraded && (
                    <div className="mt-2.5 pt-2 border-t border-slate-200/80 text-[11px] text-slate-600 flex items-start gap-2">
                      <span className="font-bold text-emerald-700 shrink-0">Đáp án đúng: {q.correctAnswer}</span>
                      <span>— {q.explanation}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ===================== PHẦN II ===================== */}
        <section className="space-y-4">
          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-3 rounded-r-lg">
            <h3 className="text-sm font-bold text-emerald-950 uppercase">
              PHẦN II. CÂU TRẮC NGHIỆM ĐÚNG SAI ({exam.part2.length} câu - {(exam.part2.length * 1.0).toFixed(1)} điểm)
            </h3>
            <p className="text-xs text-emerald-800 italic mt-0.5">
              Thí sinh trả lời từ câu 1 đến câu {exam.part2.length}. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn Đúng hoặc Sai.
              <br />
              <strong>Quy chuẩn tính điểm CV 7991:</strong> Chọn chính xác 01 ý: 0.1đ · 02 ý: 0.25đ · 03 ý: 0.50đ · Cả 04 ý: 1.00đ.
            </p>
          </div>

          <div className="space-y-6 text-xs">
            {exam.part2.map((q) => {
              const userQ = userAnswersP2[q.id] || {};
              let correctCount = 0;
              q.statements.forEach((s) => {
                if (userQ[s.letter] === s.isCorrect) correctCount++;
              });

              return (
                <div
                  key={q.id}
                  className="p-4 rounded-xl border border-slate-200 bg-white space-y-3 shadow-2xs"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-semibold text-slate-900 leading-relaxed">
                      <span className="font-bold text-emerald-800">Câu {q.questionNumber}: </span>
                      {q.contextPrompt}
                    </p>
                    {isGraded && (
                      <span className="shrink-0 px-2.5 py-1 rounded bg-slate-100 font-mono font-bold text-slate-800">
                        Đúng {correctCount}/4 ý
                      </span>
                    )}
                  </div>

                  {/* 4 lệnh a, b, c, d */}
                  <div className="border border-slate-200 rounded-lg overflow-hidden divide-y divide-slate-200">
                    {q.statements.map((stmt) => {
                      const userChoice = userQ[stmt.letter];
                      const isCorrectStmt = isGraded && userChoice === stmt.isCorrect;
                      const isWrongStmt = isGraded && userChoice !== undefined && userChoice !== stmt.isCorrect;

                      return (
                        <div
                          key={stmt.id}
                          className={`p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                            isCorrectStmt
                              ? 'bg-emerald-50/60'
                              : isWrongStmt
                              ? 'bg-rose-50/60'
                              : 'bg-white'
                          }`}
                        >
                          <div className="leading-relaxed text-slate-800">
                            <strong className="text-slate-900 mr-1.5">{stmt.letter})</strong>
                            <span>{stmt.content}</span>
                          </div>

                          <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                            <button
                              type="button"
                              onClick={() => isTestMode && handleSelectP2(q.id, stmt.letter, true)}
                              disabled={!isTestMode || isGraded}
                              className={`px-3 py-1 rounded font-bold transition text-xs border ${
                                userChoice === true
                                  ? 'bg-emerald-600 text-white border-emerald-600'
                                  : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'
                              }`}
                            >
                              Đúng
                            </button>
                            <button
                              type="button"
                              onClick={() => isTestMode && handleSelectP2(q.id, stmt.letter, false)}
                              disabled={!isTestMode || isGraded}
                              className={`px-3 py-1 rounded font-bold transition text-xs border ${
                                userChoice === false
                                  ? 'bg-rose-600 text-white border-rose-600'
                                  : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'
                              }`}
                            >
                              Sai
                            </button>

                            {isGraded && (
                              <span className={`px-2 py-0.5 rounded font-mono font-bold text-[11px] ${
                                stmt.isCorrect ? 'bg-emerald-200 text-emerald-900' : 'bg-rose-200 text-rose-900'
                              }`}>
                                Chuẩn: {stmt.isCorrect ? 'ĐÚNG' : 'SAI'}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===================== PHẦN III ===================== */}
        <section className="space-y-4">
          <div className="bg-amber-50 border-l-4 border-amber-600 p-3 rounded-r-lg">
            <h3 className="text-sm font-bold text-amber-950 uppercase">
              PHẦN III. CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN ({exam.part3.length} câu - {(exam.part3.length * 0.5).toFixed(1)} điểm)
            </h3>
            <p className="text-xs text-amber-800 italic mt-0.5">
              Thí sinh trả lời từ câu 1 đến câu {exam.part3.length}. Điền kết quả số hoặc từ khóa vào khung tương ứng. Mỗi câu trả lời đúng được 0.5 điểm.
            </p>
          </div>

          <div className="space-y-3 text-xs">
            {exam.part3.map((q) => {
              const userVal = userAnswersP3[q.id] || '';
              const isMatched = isGraded && userVal.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();

              return (
                <div
                  key={q.id}
                  className={`p-3.5 rounded-lg border flex flex-col md:flex-row md:items-center justify-between gap-3 ${
                    isMatched ? 'bg-emerald-50/70 border-emerald-300' : 'bg-white border-slate-200'
                  }`}
                >
                  <p className="font-semibold text-slate-900 leading-relaxed">
                    <span className="font-bold text-amber-800">Câu {q.questionNumber}: </span>
                    {q.content}
                  </p>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="font-bold text-slate-700">Đáp số:</span>
                    <input
                      type="text"
                      value={userVal}
                      onChange={(e) => isTestMode && handleInputP3(q.id, e.target.value)}
                      disabled={!isTestMode || isGraded}
                      placeholder={isTestMode ? 'Nhập kết quả...' : '.......................'}
                      className="w-32 bg-slate-50 border border-slate-300 rounded px-2.5 py-1 text-xs font-mono font-bold text-slate-900 outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {q.unit && <span className="text-slate-500 font-semibold">{q.unit}</span>}

                    {isGraded && (
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-1 rounded">
                        Đáp án: {q.correctAnswer}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===================== PHẦN IV ===================== */}
        <section className="space-y-4">
          <div className="bg-purple-50 border-l-4 border-purple-600 p-3 rounded-r-lg">
            <h3 className="text-sm font-bold text-purple-950 uppercase">
              PHẦN IV. TỰ LUẬN ({exam.part4.length} câu - {(exam.part4.reduce((s, c) => s + c.points, 0)).toFixed(1)} điểm)
            </h3>
            <p className="text-xs text-purple-800 italic mt-0.5">
              Thí sinh trình bày chi tiết các bước lập luận, biến đổi toán học hoặc phân tích vào giấy thi.
            </p>
          </div>

          <div className="space-y-4 text-xs">
            {exam.part4.map((q) => (
              <div key={q.id} className="p-4 rounded-lg border border-slate-200 bg-white space-y-3">
                <p className="font-bold text-slate-900 leading-relaxed">
                  Câu {q.questionNumber} ({q.points} điểm):
                </p>
                <div className="text-slate-700 whitespace-pre-line leading-relaxed pl-2">
                  {q.content}
                </div>

                <div className="h-28 border border-dashed border-slate-300 rounded bg-slate-50/50 flex items-center justify-center text-slate-400 italic text-[11px]">
                  (Khoảng trống làm bài tự luận của thí sinh)
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Chân trang đề thi */}
        <div className="text-center pt-8 border-t border-slate-200 text-xs text-slate-500 space-y-1">
          <div className="font-bold text-slate-800">-------------------- HẾT --------------------</div>
          <div>Cán bộ coi thi không giải thích gì thêm. Thí sinh không được sử dụng tài liệu ngoài quy định.</div>
        </div>
      </div>
    </div>
  );
};
