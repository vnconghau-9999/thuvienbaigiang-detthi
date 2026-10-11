import React from 'react';
import { ExamData } from '../types/edtech';
import { Award, CheckCircle2, AlertCircle, FileSpreadsheet, Info } from 'lucide-react';

interface ExamMatrixViewProps {
  exam: ExamData;
}

export const ExamMatrixView: React.FC<ExamMatrixViewProps> = ({ exam }) => {
  // Tính điểm tổng hợp các cấp độ
  const totalPoints = exam.totalPoints; // 10.0

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 flex flex-wrap items-center justify-between gap-4 shadow-2xs">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-50 text-emerald-700 rounded-lg">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900 leading-tight">
              Khung Ma Trận & Bản Đặc Tả Đề Kiểm Tra
            </h2>
            <div className="text-xs text-slate-500 mt-0.5">
              Tuyệt đối tuân thủ <strong className="text-emerald-700">Công văn 7991/BGDĐT-GDTrH</strong> (ngày 17/12/2024)
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-100 text-emerald-800 rounded-lg text-xs font-bold">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Tỉ lệ chuẩn 40% - 30% - 30% (Tổng 10.0 điểm)</span>
          </div>
        </div>
      </div>

      {/* Thông tin pháp lý & Nguyên tắc thiết kế */}
      <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-4 text-xs text-blue-900 space-y-2">
        <div className="flex items-center gap-2 font-bold text-blue-950">
          <Info className="w-4 h-4 text-blue-700" />
          <span>Nguyên tắc cấu trúc 4 phần theo Công văn 7991/BGDĐT-GDTrH:</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-slate-700 pt-1">
          <div className="bg-white p-2.5 rounded border border-blue-100">
            <strong>Phần I: TN nhiều lựa chọn</strong>
            <p className="text-[11px] text-slate-600 mt-0.5">Mỗi câu 0.25đ. Tập trung kiểm tra cấp độ Nhận biết và Thông hiểu.</p>
          </div>
          <div className="bg-white p-2.5 rounded border border-blue-100">
            <strong>Phần II: TN Đúng/Sai 4 lệnh</strong>
            <p className="text-[11px] text-slate-600 mt-0.5">Tối đa 1.0đ/câu. Đúng 1 ý: 0.1đ; 2 ý: 0.25đ; 3 ý: 0.5đ; 4 ý: 1.0đ.</p>
          </div>
          <div className="bg-white p-2.5 rounded border border-blue-100">
            <strong>Phần III: TN trả lời ngắn</strong>
            <p className="text-[11px] text-slate-600 mt-0.5">Mỗi câu 0.5đ. Yêu cầu tính toán, điền đáp số ngắn.</p>
          </div>
          <div className="bg-white p-2.5 rounded border border-blue-100">
            <strong>Phần IV: Tự luận</strong>
            <p className="text-[11px] text-slate-600 mt-0.5">1.0đ - 2.0đ. Đánh giá năng lực giải quyết vấn đề thực tiễn & vận dụng cao.</p>
          </div>
        </div>
      </div>

      {/* 1. BẢNG MA TRẬN ĐỀ THI */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 uppercase tracking-wide">
            <FileSpreadsheet className="w-4 h-4 text-blue-600" />
            <span>I. Bảng Ma Trận Đề Kiểm Tra Định Kỳ (Chuẩn CV 7991)</span>
          </h3>
          <span className="text-xs text-slate-500 font-mono">Thời gian làm bài: {exam.durationMinutes} phút</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse border border-slate-300">
            <thead>
              <tr className="bg-slate-100 text-slate-800 font-bold text-center">
                <th rowSpan={2} className="border border-slate-300 p-2.5 w-10">TT</th>
                <th rowSpan={2} className="border border-slate-300 p-2.5 w-48 text-left">Chủ đề / Đơn vị kiến thức</th>
                <th colSpan={2} className="border border-slate-300 p-2 bg-blue-50 text-blue-900">
                  Phần I (Nhiều LC)<br/><span className="text-[10px] font-normal">0.25đ/câu</span>
                </th>
                <th colSpan={3} className="border border-slate-300 p-2 bg-emerald-50 text-emerald-900">
                  Phần II (Đúng/Sai)<br/><span className="text-[10px] font-normal">1.0đ/câu (4 lệnh)</span>
                </th>
                <th colSpan={2} className="border border-slate-300 p-2 bg-amber-50 text-amber-900">
                  Phần III (Điền ngắn)<br/><span className="text-[10px] font-normal">0.5đ/câu</span>
                </th>
                <th colSpan={2} className="border border-slate-300 p-2 bg-purple-50 text-purple-900">
                  Phần IV (Tự luận)<br/><span className="text-[10px] font-normal">Tự luận</span>
                </th>
                <th rowSpan={2} className="border border-slate-300 p-2.5 bg-slate-200 text-slate-900 font-bold w-20">
                  Tổng điểm
                </th>
                <th rowSpan={2} className="border border-slate-300 p-2.5 bg-slate-200 text-slate-900 font-bold w-16">
                  Tỉ lệ %
                </th>
              </tr>
              <tr className="bg-slate-50 text-slate-700 text-center text-[11px]">
                <th className="border border-slate-300 p-1.5">NB</th>
                <th className="border border-slate-300 p-1.5">TH</th>
                <th className="border border-slate-300 p-1.5">NB</th>
                <th className="border border-slate-300 p-1.5">TH</th>
                <th className="border border-slate-300 p-1.5">VD</th>
                <th className="border border-slate-300 p-1.5">TH</th>
                <th className="border border-slate-300 p-1.5">VD</th>
                <th className="border border-slate-300 p-1.5">VD</th>
                <th className="border border-slate-300 p-1.5">VDC</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {exam.matrix.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50">
                  <td className="border border-slate-300 p-2 text-center font-bold">{idx + 1}</td>
                  <td className="border border-slate-300 p-2 font-medium text-slate-900">{row.topic}</td>
                  <td className="border border-slate-300 p-2 text-center">{row.part1_nhanbiet || '-'}</td>
                  <td className="border border-slate-300 p-2 text-center">{row.part1_thonghieu || '-'}</td>
                  <td className="border border-slate-300 p-2 text-center">{row.part2_nhanbiet || '-'}</td>
                  <td className="border border-slate-300 p-2 text-center">{row.part2_thonghieu || '-'}</td>
                  <td className="border border-slate-300 p-2 text-center">{row.part2_vandung || '-'}</td>
                  <td className="border border-slate-300 p-2 text-center">{row.part3_thonghieu || '-'}</td>
                  <td className="border border-slate-300 p-2 text-center">{row.part3_vandung || '-'}</td>
                  <td className="border border-slate-300 p-2 text-center">{row.part4_vandung || '-'}</td>
                  <td className="border border-slate-300 p-2 text-center">{row.part4_vandungcao || '-'}</td>
                  <td className="border border-slate-300 p-2 text-center font-bold text-blue-900 bg-blue-50/50">
                    {row.totalPoints.toFixed(2)}đ
                  </td>
                  <td className="border border-slate-300 p-2 text-center font-bold text-slate-800">
                    {row.percentage}%
                  </td>
                </tr>
              ))}

              {/* Dòng Tổng cộng */}
              <tr className="bg-slate-100 font-bold text-slate-900 text-center">
                <td colSpan={2} className="border border-slate-300 p-2.5 text-right uppercase">
                  Tổng cộng:
                </td>
                <td colSpan={2} className="border border-slate-300 p-2 bg-blue-100/50 text-blue-900">
                  {exam.part1.length} câu ({(exam.part1.length * 0.25).toFixed(2)}đ)
                </td>
                <td colSpan={3} className="border border-slate-300 p-2 bg-emerald-100/50 text-emerald-900">
                  {exam.part2.length} câu ({(exam.part2.length * 1.0).toFixed(1)}đ)
                </td>
                <td colSpan={2} className="border border-slate-300 p-2 bg-amber-100/50 text-amber-900">
                  {exam.part3.length} câu ({(exam.part3.length * 0.5).toFixed(1)}đ)
                </td>
                <td colSpan={2} className="border border-slate-300 p-2 bg-purple-100/50 text-purple-900">
                  {exam.part4.length} câu ({(exam.part4.reduce((s, c) => s + c.points, 0)).toFixed(1)}đ)
                </td>
                <td className="border border-slate-300 p-2.5 bg-blue-600 text-white font-bold text-sm">
                  10.0 điểm
                </td>
                <td className="border border-slate-300 p-2.5 bg-blue-600 text-white font-bold text-sm">
                  100%
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Phân bổ cấp độ tư duy */}
        <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-center font-semibold">
          <div className="bg-blue-50 border border-blue-200 text-blue-900 p-2.5 rounded-lg">
            <div>CẤP ĐỘ NHẬN BIẾT</div>
            <div className="text-base font-bold mt-1">4.0 điểm (40%)</div>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-2.5 rounded-lg">
            <div>CẤP ĐỘ THÔNG HIỂU</div>
            <div className="text-base font-bold mt-1">3.0 điểm (30%)</div>
          </div>
          <div className="bg-amber-50 border border-amber-200 text-amber-900 p-2.5 rounded-lg">
            <div>VẬN DỤNG & VẬN DỤNG CAO</div>
            <div className="text-base font-bold mt-1">3.0 điểm (30%)</div>
          </div>
        </div>
      </div>

      {/* 2. BẢNG BẢN ĐẶC TẢ ĐỀ KIỂM TRA */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 overflow-hidden">
        <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wide flex items-center gap-2">
          <Award className="w-4 h-4 text-emerald-600" />
          <span>II. Bản Đặc Tả Đề Kiểm Tra (Specification Sheet)</span>
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse border border-slate-300">
            <thead>
              <tr className="bg-slate-100 text-slate-800 font-bold text-center">
                <th className="border border-slate-300 p-2 w-10">STT</th>
                <th className="border border-slate-300 p-2 w-44 text-left">Chủ đề</th>
                <th className="border border-slate-300 p-2 text-left">Yêu cầu cần đạt</th>
                <th className="border border-slate-300 p-2 w-28">Cấp độ tư duy</th>
                <th className="border border-slate-300 p-2 w-20">Phần đề</th>
                <th className="border border-slate-300 p-2 w-16">Câu số</th>
                <th className="border border-slate-300 p-2 w-16">Điểm số</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {exam.specifications.map((spec) => (
                <tr key={spec.stt} className="hover:bg-slate-50">
                  <td className="border border-slate-300 p-2 text-center font-bold">{spec.stt}</td>
                  <td className="border border-slate-300 p-2 font-medium text-slate-900">{spec.topic}</td>
                  <td className="border border-slate-300 p-2 text-slate-700">{spec.contentStandard}</td>
                  <td className="border border-slate-300 p-2 text-center">
                    <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                      spec.cognitiveLevel === 'nhan_biet'
                        ? 'bg-blue-100 text-blue-800'
                        : spec.cognitiveLevel === 'thong_hieu'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {spec.cognitiveLevel === 'nhan_biet'
                        ? 'Nhận biết'
                        : spec.cognitiveLevel === 'thong_hieu'
                        ? 'Thông hiểu'
                        : spec.cognitiveLevel === 'van_dung'
                        ? 'Vận dụng'
                        : 'Vận dụng cao'}
                    </span>
                  </td>
                  <td className="border border-slate-300 p-2 text-center font-bold text-slate-800">
                    Phần {spec.part}
                  </td>
                  <td className="border border-slate-300 p-2 text-center font-mono">
                    Câu {spec.questionNumber}
                  </td>
                  <td className="border border-slate-300 p-2 text-center font-bold text-blue-900">
                    {spec.points}đ
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
