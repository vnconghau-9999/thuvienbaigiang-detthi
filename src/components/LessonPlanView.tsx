import React, { useState } from 'react';
import { LessonPlan, LessonActivity } from '../types/edtech';
import { 
  BookOpen, 
  Edit3, 
  Check, 
  Printer, 
  Download, 
  Plus, 
  Trash2, 
  Clock, 
  Target,
  Sparkles
} from 'lucide-react';
import { exportLessonPlanWord } from '../utils/exportUtils';
import { EdTechWorkspaceState } from '../types/edtech';

interface LessonPlanViewProps {
  lessonPlan: LessonPlan;
  fullState: EdTechWorkspaceState;
  onUpdateLessonPlan: (updated: LessonPlan) => void;
}

export const LessonPlanView: React.FC<LessonPlanViewProps> = ({
  lessonPlan,
  fullState,
  onUpdateLessonPlan
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateActivity = (actIndex: number, field: string, val: any) => {
    const newActs = [...lessonPlan.activities];
    if (field.startsWith('implementation.')) {
      const subField = field.split('.')[1];
      newActs[actIndex] = {
        ...newActs[actIndex],
        implementation: {
          ...newActs[actIndex].implementation,
          [subField]: val
        }
      };
    } else {
      newActs[actIndex] = {
        ...newActs[actIndex],
        [field]: val
      };
    }
    onUpdateLessonPlan({ ...lessonPlan, activities: newActs });
  };

  return (
    <div className="space-y-6">
      {/* Workspace Header Actions */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 flex flex-wrap items-center justify-between gap-4 shadow-2xs">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-50 text-blue-700 rounded-lg">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900 leading-tight">
              Kế Hoạch Bài Dạy (Giáo Án)
            </h2>
            <div className="text-xs text-slate-500 flex items-center gap-2 mt-0.5">
              <span className="font-semibold text-blue-700">Công văn 5512/BGDĐT-GDTrH</span>
              <span>·</span>
              <span>Đầy đủ 4 hoạt động & 4 bước tổ chức sư phạm</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition border ${
              isEditing
                ? 'bg-emerald-600 text-white border-emerald-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            {isEditing ? <Check className="w-3.5 h-3.5" /> : <Edit3 className="w-3.5 h-3.5" />}
            <span>{isEditing ? 'Hoàn tất chỉnh sửa' : 'Chỉnh sửa nội dung'}</span>
          </button>

          <button
            onClick={() => exportLessonPlanWord(fullState)}
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
            <span>In bài dạy</span>
          </button>
        </div>
      </div>

      {/* Official Document Canvas (Paper-like view) */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 max-w-5xl mx-auto space-y-8 text-slate-900 print:shadow-none print:border-none print:p-0">
        {/* Quốc hiệu & Tiêu ngữ */}
        <div className="grid grid-cols-2 text-center text-xs pb-4 border-b border-slate-200">
          <div>
            <div className="uppercase font-semibold text-slate-700">{lessonPlan.schoolName}</div>
            <div className="font-bold text-slate-900">TỔ CHUYÊN MÔN</div>
            <div className="w-20 h-0.5 bg-slate-400 mx-auto mt-1"></div>
          </div>
          <div>
            <div className="font-bold text-slate-900">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</div>
            <div className="font-semibold text-slate-800">Độc lập - Tự do - Hạnh phúc</div>
            <div className="w-28 h-0.5 bg-slate-400 mx-auto mt-1"></div>
          </div>
        </div>

        {/* Title */}
        <div className="text-center space-y-1">
          <div className="text-xs uppercase font-bold tracking-wider text-blue-700">
            KẾ HOẠCH BÀI DẠY (THEO CÔNG VĂN 5512/BGDĐT-GDTrH)
          </div>
          <h1 className="text-2xl font-bold uppercase text-slate-900 pt-1">
            {lessonPlan.title}
          </h1>
          <div className="text-xs text-slate-600 flex flex-wrap justify-center gap-3 pt-2">
            <span>Môn: <strong>{lessonPlan.subject}</strong></span>
            <span>·</span>
            <span>Lớp: <strong>{lessonPlan.grade}</strong></span>
            <span>·</span>
            <span>Thời lượng: <strong>{lessonPlan.duration}</strong></span>
            <span>·</span>
            <span>Bộ sách: <strong>{lessonPlan.curriculum}</strong></span>
          </div>
          <div className="text-xs italic text-slate-500">
            Giáo viên giảng dạy: <strong>{lessonPlan.teacherName}</strong> · Ngày soạn: {lessonPlan.datePrepared}
          </div>
        </div>

        {/* I. MỤC TIÊU */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
            <div className="w-6 h-6 rounded bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-xs">
              I
            </div>
            <h2 className="text-base font-bold text-slate-900 uppercase">MỤC TIÊU BÀI HỌC</h2>
          </div>

          <div className="space-y-3 text-xs leading-relaxed pl-2">
            {/* 1. Kiến thức */}
            <div>
              <h3 className="font-bold text-slate-800 mb-1">1. Về kiến thức:</h3>
              <ul className="list-disc list-inside space-y-1 text-slate-700 pl-2">
                {lessonPlan.objectives.knowledge.map((k, i) => (
                  <li key={i}>{k}</li>
                ))}
              </ul>
            </div>

            {/* 2. Năng lực */}
            <div>
              <h3 className="font-bold text-slate-800 mb-1">2. Về năng lực:</h3>
              <div className="space-y-2 pl-2">
                <div>
                  <strong className="text-slate-800">a) Năng lực chung:</strong>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 pl-2 mt-0.5">
                    {lessonPlan.objectives.generalCompetencies.map((gc, i) => (
                      <li key={i}>{gc}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong className="text-slate-800">b) Năng lực đặc thù môn học:</strong>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 pl-2 mt-0.5">
                    {lessonPlan.objectives.specificCompetencies.map((sc, i) => (
                      <li key={i}>{sc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. Phẩm chất */}
            <div>
              <h3 className="font-bold text-slate-800 mb-1">3. Về phẩm chất:</h3>
              <ul className="list-disc list-inside space-y-1 text-slate-700 pl-2">
                {lessonPlan.objectives.qualities.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* II. THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
            <div className="w-6 h-6 rounded bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-xs">
              II
            </div>
            <h2 className="text-base font-bold text-slate-900 uppercase">
              THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed pl-2">
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
              <h3 className="font-bold text-slate-800 mb-1.5">1. Chuẩn bị của giáo viên:</h3>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                {lessonPlan.equipment.teacher.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
              <h3 className="font-bold text-slate-800 mb-1.5">2. Chuẩn bị của học sinh:</h3>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                {lessonPlan.equipment.student.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* III. TIẾN TRÌNH DẠY HỌC (4 HOẠT ĐỘNG CHUẨN 5512) */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-xs">
                III
              </div>
              <h2 className="text-base font-bold text-slate-900 uppercase">
                TIẾN TRÌNH DẠY HỌC (4 HOẠT ĐỘNG CHUẨN CV 5512)
              </h2>
            </div>
            <span className="text-[11px] text-slate-500 italic">
              Định dạng 4 bước: Giao việc · Thực hiện · Báo cáo · Nhận định
            </span>
          </div>

          <div className="space-y-8">
            {lessonPlan.activities.map((activity, idx) => (
              <div
                key={activity.id}
                className="border border-slate-200 rounded-xl p-5 bg-white space-y-4 hover:border-slate-300 transition shadow-2xs"
              >
                {/* Header Hoạt động */}
                <div className="flex items-center justify-between bg-slate-50 -mx-5 -mt-5 px-5 py-3 rounded-t-xl border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                      {activity.stageNumber}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">
                      {activity.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 bg-blue-100 text-blue-800 rounded">
                      <Clock className="w-3.5 h-3.5" /> {activity.timeAllocation}
                    </span>
                  </div>
                </div>

                {/* a, b, c mục tiêu, nội dung, sản phẩm */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className="bg-slate-50/80 p-3 rounded-lg border border-slate-200">
                    <span className="font-bold text-slate-900 block mb-1">a) Mục tiêu:</span>
                    {isEditing ? (
                      <textarea
                        value={activity.objective}
                        onChange={(e) => handleUpdateActivity(idx, 'objective', e.target.value)}
                        className="w-full h-20 p-2 bg-white border border-slate-200 rounded text-xs outline-none"
                      />
                    ) : (
                      <p className="text-slate-700 leading-relaxed">{activity.objective}</p>
                    )}
                  </div>

                  <div className="bg-slate-50/80 p-3 rounded-lg border border-slate-200">
                    <span className="font-bold text-slate-900 block mb-1">b) Nội dung:</span>
                    {isEditing ? (
                      <textarea
                        value={activity.content}
                        onChange={(e) => handleUpdateActivity(idx, 'content', e.target.value)}
                        className="w-full h-20 p-2 bg-white border border-slate-200 rounded text-xs outline-none"
                      />
                    ) : (
                      <p className="text-slate-700 leading-relaxed">{activity.content}</p>
                    )}
                  </div>

                  <div className="bg-slate-50/80 p-3 rounded-lg border border-slate-200">
                    <span className="font-bold text-slate-900 block mb-1">c) Sản phẩm:</span>
                    {isEditing ? (
                      <textarea
                        value={activity.product}
                        onChange={(e) => handleUpdateActivity(idx, 'product', e.target.value)}
                        className="w-full h-20 p-2 bg-white border border-slate-200 rounded text-xs outline-none"
                      />
                    ) : (
                      <p className="text-slate-700 leading-relaxed">{activity.product}</p>
                    )}
                  </div>
                </div>

                {/* d) Tổ chức thực hiện: Bảng 4 bước */}
                <div className="border border-slate-200 rounded-lg overflow-hidden text-xs">
                  <div className="bg-slate-100 px-4 py-2 font-bold text-slate-800 border-b border-slate-200">
                    d) Tổ chức thực hiện theo 4 bước chuẩn Công văn 5512:
                  </div>

                  <div className="divide-y divide-slate-200">
                    {/* Bước 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-4 p-3 gap-2">
                      <div className="font-bold text-blue-900 md:col-span-1">
                        Bước 1: Chuyển giao nhiệm vụ
                      </div>
                      <div className="md:col-span-3 text-slate-700 leading-relaxed">
                        {isEditing ? (
                          <textarea
                            value={activity.implementation.step1_transfer}
                            onChange={(e) => handleUpdateActivity(idx, 'implementation.step1_transfer', e.target.value)}
                            className="w-full p-2 bg-white border border-slate-200 rounded text-xs outline-none"
                          />
                        ) : (
                          activity.implementation.step1_transfer
                        )}
                      </div>
                    </div>

                    {/* Bước 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-4 p-3 gap-2 bg-slate-50/50">
                      <div className="font-bold text-blue-900 md:col-span-1">
                        Bước 2: Thực hiện nhiệm vụ
                      </div>
                      <div className="md:col-span-3 text-slate-700 leading-relaxed">
                        {isEditing ? (
                          <textarea
                            value={activity.implementation.step2_execution}
                            onChange={(e) => handleUpdateActivity(idx, 'implementation.step2_execution', e.target.value)}
                            className="w-full p-2 bg-white border border-slate-200 rounded text-xs outline-none"
                          />
                        ) : (
                          activity.implementation.step2_execution
                        )}
                      </div>
                    </div>

                    {/* Bước 3 */}
                    <div className="grid grid-cols-1 md:grid-cols-4 p-3 gap-2">
                      <div className="font-bold text-blue-900 md:col-span-1">
                        Bước 3: Báo cáo, thảo luận
                      </div>
                      <div className="md:col-span-3 text-slate-700 leading-relaxed">
                        {isEditing ? (
                          <textarea
                            value={activity.implementation.step3_discussion}
                            onChange={(e) => handleUpdateActivity(idx, 'implementation.step3_discussion', e.target.value)}
                            className="w-full p-2 bg-white border border-slate-200 rounded text-xs outline-none"
                          />
                        ) : (
                          activity.implementation.step3_discussion
                        )}
                      </div>
                    </div>

                    {/* Bước 4 */}
                    <div className="grid grid-cols-1 md:grid-cols-4 p-3 gap-2 bg-slate-50/50">
                      <div className="font-bold text-blue-900 md:col-span-1">
                        Bước 4: Kết luận, nhận định
                      </div>
                      <div className="md:col-span-3 text-slate-700 leading-relaxed">
                        {isEditing ? (
                          <textarea
                            value={activity.implementation.step4_conclusion}
                            onChange={(e) => handleUpdateActivity(idx, 'implementation.step4_conclusion', e.target.value)}
                            className="w-full p-2 bg-white border border-slate-200 rounded text-xs outline-none"
                          />
                        ) : (
                          activity.implementation.step4_conclusion
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Chữ ký & Phê duyệt */}
        <div className="grid grid-cols-2 text-center text-xs pt-8 border-t border-slate-200">
          <div>
            <div className="font-bold text-slate-900 uppercase">DUYỆT CỦA TỔ CHUYÊN MÔN</div>
            <div className="text-slate-500 italic mt-1">(Ký và ghi rõ họ tên)</div>
            <div className="h-20"></div>
            <div className="font-semibold text-slate-700">...................................................</div>
          </div>
          <div>
            <div className="text-slate-500 italic">Ngày ..... tháng ..... năm 2026</div>
            <div className="font-bold text-slate-900 uppercase">GIÁO VIÊN SOẠN BÀI</div>
            <div className="text-slate-500 italic mt-1">(Ký và ghi rõ họ tên)</div>
            <div className="h-20"></div>
            <div className="font-bold text-slate-900">{lessonPlan.teacherName}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
