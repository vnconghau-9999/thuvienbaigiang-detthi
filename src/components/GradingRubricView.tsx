import React from 'react';
import { ExamData } from '../types/edtech';
import { FileText, CheckCircle2, AlertCircle, HelpCircle, BookOpen } from 'lucide-react';

interface GradingRubricViewProps {
  exam: ExamData;
}

export const GradingRubricView: React.FC<GradingRubricViewProps> = ({ exam }) => {
  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 flex flex-wrap items-center justify-between gap-4 shadow-2xs">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-50 text-indigo-700 rounded-lg">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900 leading-tight">
              Đáp Án & Hướng Dẫn Chấm Chi Tiết
            </h2>
            <div className="text-xs text-slate-500 mt-0.5">
              Quy chuẩn thang điểm chuẩn <strong className="text-indigo-700">Công văn 7991/BGDĐT-GDTrH</strong> (ngày 17/12/2024)
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold bg-slate-100 text-slate-800 px-3 py-1.5 rounded-lg border border-slate-200">
            Tổng điểm kiểm tra: 10.0 / 10.0 điểm
          </span>
        </div>
      </div>

      {/* Official Rubric Canvas */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 max-w-5xl mx-auto space-y-8 text-slate-900">
        <div className="text-center border-b border-slate-200 pb-4">
          <div className="uppercase text-xs font-bold text-slate-500">{exam.schoolName}</div>
          <h1 className="text-xl font-bold uppercase text-slate-900 mt-1">
            HƯỚNG DẪN CHẤM VÀ BAREM ĐIỂM CHI TIẾT
          </h1>
          <div className="text-xs text-slate-600 mt-1">
            Đề kiểm tra môn: <strong>{exam.subject} {exam.grade}</strong> · {exam.examCode}
          </div>
        </div>

        {/* 1. ĐÁP ÁN PHẦN I */}
        <section className="space-y-4">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-3 rounded-r-lg">
            <h3 className="text-sm font-bold text-blue-950 uppercase">
              PHẦN I. ĐÁP ÁN CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN
            </h3>
            <p className="text-xs text-blue-800 italic mt-0.5">
              Mỗi câu trả lời đúng thí sinh được <strong>0.25 điểm</strong>.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-center border-collapse border border-slate-300">
              <thead>
                <tr className="bg-slate-100 font-bold text-slate-800">
                  {exam.part1.map((q) => (
                    <th key={q.id} className="border border-slate-300 p-2">
                      Câu {q.questionNumber}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="font-bold text-sm text-blue-700 bg-blue-50/30">
                  {exam.part1.map((q) => (
                    <td key={q.id} className="border border-slate-300 p-2">
                      {q.correctAnswer}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Chi tiết lời giải câu khó phần I */}
          <div className="space-y-2 text-xs">
            <div className="font-bold text-slate-800">Lời giải & giải thích chi tiết:</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-700">
              {exam.part1.map((q) => (
                <div key={q.id} className="bg-slate-50 p-2.5 rounded border border-slate-200">
                  <strong>Câu {q.questionNumber} ({q.correctAnswer}):</strong> {q.explanation}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. ĐÁP ÁN VÀ QUY TẮC PHẦN II */}
        <section className="space-y-4">
          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-3 rounded-r-lg">
            <h3 className="text-sm font-bold text-emerald-950 uppercase">
              PHẦN II. ĐÁP ÁN VÀ QUY TẮC TÍNH ĐIỂM CÂU ĐÚNG SAI 4 LỆNH (CV 7991)
            </h3>
            <div className="mt-2 bg-white p-3 rounded border border-emerald-200 text-xs text-emerald-950 space-y-1">
              <div className="font-bold">Bảng barem tính điểm chuẩn của Bộ Giáo dục & Đào tạo cho mỗi câu:</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-1 font-mono font-semibold">
                <div className="bg-emerald-100/60 p-2 rounded text-center">Đúng 01 ý = 0.10 điểm</div>
                <div className="bg-emerald-100/60 p-2 rounded text-center">Đúng 02 ý = 0.25 điểm</div>
                <div className="bg-emerald-100/60 p-2 rounded text-center">Đúng 03 ý = 0.50 điểm</div>
                <div className="bg-emerald-200/80 p-2 rounded text-center font-bold text-emerald-950">Đúng 04 ý = 1.00 điểm</div>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-xs">
            {exam.part2.map((q) => (
              <div key={q.id} className="border border-slate-200 rounded-xl p-4 bg-white space-y-3 shadow-2xs">
                <div className="font-bold text-slate-900">
                  <span className="text-emerald-700">Câu {q.questionNumber}:</span> {q.contextPrompt}
                </div>

                <table className="w-full text-xs text-left border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-bold">
                      <th className="border border-slate-200 p-2 w-16 text-center">Ý lệnh</th>
                      <th className="border border-slate-200 p-2">Nội dung mệnh đề</th>
                      <th className="border border-slate-200 p-2 w-24 text-center">Đáp án</th>
                      <th className="border border-slate-200 p-2">Hướng dẫn lập luận / Giải thích</th>
                    </tr>
                  </thead>
                  <tbody>
                    {q.statements.map((s) => (
                      <tr key={s.id} className="hover:bg-slate-50">
                        <td className="border border-slate-200 p-2 text-center font-bold">{s.letter})</td>
                        <td className="border border-slate-200 p-2 text-slate-800">{s.content}</td>
                        <td className="border border-slate-200 p-2 text-center">
                          <span className={`px-2 py-0.5 rounded font-bold text-[11px] ${
                            s.isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                          }`}>
                            {s.isCorrect ? 'ĐÚNG' : 'SAI'}
                          </span>
                        </td>
                        <td className="border border-slate-200 p-2 text-slate-600 leading-relaxed">
                          {s.explanation}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </section>

        {/* 3. ĐÁP ÁN PHẦN III */}
        <section className="space-y-4">
          <div className="bg-amber-50 border-l-4 border-amber-600 p-3 rounded-r-lg">
            <h3 className="text-sm font-bold text-amber-950 uppercase">
              PHẦN III. ĐÁP ÁN CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN
            </h3>
            <p className="text-xs text-amber-800 italic mt-0.5">
              Mỗi câu trả lời chính xác được <strong>0.5 điểm</strong>.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse border border-slate-300">
              <thead>
                <tr className="bg-slate-100 text-slate-800 font-bold">
                  <th className="border border-slate-300 p-2 w-16 text-center">Câu</th>
                  <th className="border border-slate-300 p-2">Nội dung câu hỏi tóm tắt</th>
                  <th className="border border-slate-300 p-2 w-36 text-center">Đáp số chuẩn</th>
                  <th className="border border-slate-300 p-2 w-20 text-center">Điểm</th>
                  <th className="border border-slate-300 p-2">Giải thích chi tiết</th>
                </tr>
              </thead>
              <tbody>
                {exam.part3.map((q) => (
                  <tr key={q.id} className="hover:bg-slate-50">
                    <td className="border border-slate-300 p-2 text-center font-bold">Câu {q.questionNumber}</td>
                    <td className="border border-slate-300 p-2 text-slate-800 truncate max-w-xs">{q.content}</td>
                    <td className="border border-slate-300 p-2 text-center font-mono font-bold text-blue-700 bg-blue-50/40">
                      {q.correctAnswer} {q.unit || ''}
                    </td>
                    <td className="border border-slate-300 p-2 text-center font-bold">{q.points}đ</td>
                    <td className="border border-slate-300 p-2 text-slate-600">{q.explanation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. HƯỚNG DẪN CHẤM PHẦN IV TỰ LUẬN */}
        <section className="space-y-4">
          <div className="bg-purple-50 border-l-4 border-purple-600 p-3 rounded-r-lg">
            <h3 className="text-sm font-bold text-purple-950 uppercase">
              PHẦN IV. HƯỚNG DẪN CHẤM VÀ BAREM TỰ LUẬN
            </h3>
            <p className="text-xs text-purple-800 italic mt-0.5">
              Chấm theo từng bước biến đổi, lập luận logic. Học sinh giải theo cách khác đúng vẫn cho điểm tối đa.
            </p>
          </div>

          <div className="space-y-4 text-xs">
            {exam.part4.map((q) => (
              <div key={q.id} className="border border-slate-200 rounded-xl p-4 bg-white space-y-3 shadow-2xs">
                <div className="font-bold text-slate-900">
                  Câu {q.questionNumber} ({q.points} điểm):
                </div>
                <p className="text-slate-700 whitespace-pre-line bg-slate-50 p-2.5 rounded border border-slate-200">
                  {q.content}
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse border border-slate-200">
                    <thead>
                      <tr className="bg-slate-100 text-slate-800 font-bold">
                        <th className="border border-slate-200 p-2 w-48">Các bước / Tiêu chí chấm</th>
                        <th className="border border-slate-200 p-2">Nội dung chi tiết lời giải yêu cầu</th>
                        <th className="border border-slate-200 p-2 w-20 text-center">Điểm</th>
                      </tr>
                    </thead>
                    <tbody>
                      {q.gradingCriteria.map((c, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="border border-slate-200 p-2 font-semibold text-slate-900">{c.step}</td>
                          <td className="border border-slate-200 p-2 text-slate-700 leading-relaxed">{c.detail}</td>
                          <td className="border border-slate-200 p-2 text-center font-bold text-blue-700">{c.points}đ</td>
                        </tr>
                      ))}
                      <tr className="bg-slate-100 font-bold text-slate-900">
                        <td colSpan={2} className="border border-slate-200 p-2 text-right uppercase">
                          Tổng điểm câu {q.questionNumber}:
                        </td>
                        <td className="border border-slate-200 p-2 text-center text-blue-700 text-sm">
                          {q.points}đ
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
