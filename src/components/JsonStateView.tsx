import React, { useState } from 'react';
import { EdTechWorkspaceState } from '../types/edtech';
import { 
  Code, 
  Copy, 
  Check, 
  Download, 
  Upload, 
  RotateCcw, 
  AlertCircle,
  Sparkles
} from 'lucide-react';
import { exportJsonState } from '../utils/exportUtils';

interface JsonStateViewProps {
  state: EdTechWorkspaceState;
  onUpdateState: (newState: EdTechWorkspaceState) => void;
  onResetSubject: () => void;
}

export const JsonStateView: React.FC<JsonStateViewProps> = ({
  state,
  onUpdateState,
  onResetSubject
}) => {
  const [copied, setCopied] = useState(false);
  const [importText, setImportText] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const jsonString = JSON.stringify(state, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleImport = () => {
    try {
      setErrorMsg(null);
      setSuccessMsg(null);
      const parsed = JSON.parse(importText);
      if (!parsed.lessonPlan || !parsed.exam || !parsed.slides) {
        throw new Error('Dữ liệu JSON không hợp lệ: Thiếu một trong các trường lessonPlan, exam hoặc slides.');
      }
      onUpdateState(parsed);
      setSuccessMsg('Đã nhập thành công toàn bộ phiên làm việc!');
      setImportText('');
    } catch (err: any) {
      setErrorMsg(err.message || 'Lỗi phân tích cú pháp JSON.');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const content = event.target?.result as string;
        const parsed = JSON.parse(content);
        if (!parsed.lessonPlan || !parsed.exam || !parsed.slides) {
          throw new Error('File JSON không hợp lệ: Thiếu trường dữ liệu bắt buộc.');
        }
        onUpdateState(parsed);
        setSuccessMsg(`Đã nhập thành công từ file: ${file.name}`);
        setErrorMsg(null);
      } catch (err: any) {
        setErrorMsg(err.message || 'Không thể đọc file JSON.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 flex flex-wrap items-center justify-between gap-4 shadow-2xs">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-slate-900 text-white rounded-lg">
            <Code className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900 leading-tight">
              Khối Dữ Liệu JSON State & Bàn Giao Phiên Làm Việc
            </h2>
            <div className="text-xs text-slate-500 mt-0.5">
              Đồng bộ dữ liệu phiên làm việc tiếp theo hoặc tích hợp vào hệ thống LMS trường học
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-semibold transition border border-slate-200"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Đã sao chép JSON!' : 'Sao chép JSON'}</span>
          </button>

          <button
            onClick={() => exportJsonState(state)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition shadow-2xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Tải file .JSON</span>
          </button>

          <button
            onClick={onResetSubject}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-lg text-xs font-semibold transition border border-rose-200"
            title="Khôi phục trạng thái chuẩn ban đầu của môn học"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Khôi phục mẫu gốc</span>
          </button>
        </div>
      </div>

      {/* Thông báo kết quả */}
      {successMsg && (
        <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-3 text-xs text-emerald-800 flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {errorMsg && (
        <div className="bg-rose-50 border border-rose-300 rounded-xl p-3 text-xs text-rose-800 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cột trái: Xem mã JSON hiện tại */}
        <div className="lg:col-span-2 bg-slate-950 text-slate-100 rounded-xl border border-slate-800 overflow-hidden shadow-lg flex flex-col">
          <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span className="font-mono text-emerald-400">workspace_state.json</span>
            <span>Kích thước: {(jsonString.length / 1024).toFixed(1)} KB</span>
          </div>

          <pre className="p-4 text-xs font-mono text-emerald-400 overflow-auto max-h-[580px] leading-relaxed selection:bg-emerald-900 selection:text-white">
            {jsonString}
          </pre>
        </div>

        {/* Cột phải: Khung nhập & Khôi phục */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-4 shadow-2xs">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Upload className="w-4 h-4 text-blue-600" />
              <span>Nhập JSON từ phiên trước</span>
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed">
              Dán nội dung JSON đã sao chép từ phiên làm việc trước để khôi phục toàn bộ bài giảng, slide và đề thi.
            </p>

            <textarea
              value={importText}
              onChange={(e) => setImportText(e.target.value)}
              placeholder="Dán đoạn mã JSON vào đây..."
              rows={8}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs font-mono outline-none focus:ring-1 focus:ring-blue-500"
            />

            <div className="flex gap-2">
              <button
                onClick={handleImport}
                disabled={!importText.trim()}
                className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white rounded-lg text-xs font-bold transition"
              >
                Khôi phục trạng thái
              </button>
            </div>

            <div className="pt-2 border-t border-slate-200">
              <span className="block text-[11px] text-slate-500 mb-1.5 font-medium">Hoặc tải file từ máy tính:</span>
              <label className="flex items-center justify-center gap-2 w-full p-2.5 border border-dashed border-slate-300 hover:border-slate-400 rounded-lg text-xs text-slate-700 cursor-pointer bg-slate-50/50 hover:bg-slate-50 transition">
                <Upload className="w-3.5 h-3.5 text-slate-500" />
                <span>Chọn file .json</span>
                <input
                  type="file"
                  accept=".json,application/json"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Hướng dẫn bàn giao */}
          <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-4 text-xs text-blue-900 space-y-2">
            <div className="font-bold">Mẹo bàn giao phiên làm việc:</div>
            <ul className="list-disc list-inside space-y-1 text-slate-700 text-[11px]">
              <li>Khối JSON State chứa đầy đủ mọi thông số của cả 3 phân hệ.</li>
              <li>Bạn có thể copy mã JSON này để gửi cho đồng nghiệp mở trên máy khác.</li>
              <li>Tải file HTML độc lập sẽ tự động tích hợp sẵn khối JSON State này.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
