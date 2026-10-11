import { EdTechWorkspaceState } from '../types/edtech';

// Helper to trigger browser file download
export function downloadFile(filename: string, content: string, mimeType: string) {
  const blob = new Blob([content], { type: `${mimeType};charset=utf-8` });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// 1. Xuất file Word (.doc) cho Kế hoạch bài dạy chuẩn Công văn 5512
export function exportLessonPlanWord(state: EdTechWorkspaceState) {
  const lp = state.lessonPlan;
  const filename = `${lp.title.replace(/[^a-zA-Z0-9_\u00C0-\u1EF9]/g, '_')}_KHBD_5512.doc`;

  const wordHtml = `
  <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
  <head>
    <meta charset='utf-8'>
    <title>${lp.title}</title>
    <!--[if gte mso 9]>
    <xml>
      <w:WordDocument>
        <w:View>Print</w:View>
        <w:Zoom>100</w:Zoom>
        <w:DoNotOptimizeForBrowser/>
      </w:WordDocument>
    </xml>
    <![endif]-->
    <style>
      body {
        font-family: 'Times New Roman', serif;
        font-size: 13pt;
        line-height: 1.3;
        margin: 2cm 2cm 2cm 2.5cm;
      }
      h1, h2, h3, h4 { font-family: 'Times New Roman', serif; color: #000; }
      h1 { font-size: 14pt; text-align: center; text-transform: uppercase; font-weight: bold; margin-top: 15pt; margin-bottom: 5pt; }
      h2 { font-size: 13pt; text-transform: uppercase; font-weight: bold; margin-top: 12pt; margin-bottom: 4pt; }
      h3 { font-size: 13pt; font-weight: bold; margin-top: 8pt; margin-bottom: 2pt; }
      .header-table { width: 100%; border-collapse: collapse; margin-bottom: 15pt; }
      .header-table td { border: none; padding: 2pt 4pt; vertical-align: top; }
      .text-center { text-align: center; }
      .bold { font-weight: bold; }
      .italic { font-style: italic; }
      .bordered-table { width: 100%; border-collapse: collapse; margin: 8pt 0; }
      .bordered-table th, .bordered-table td { border: 1pt solid #000; padding: 5pt; vertical-align: top; }
      .bordered-table th { background-color: #f2f2f2; text-align: center; font-weight: bold; }
    </style>
  </head>
  <body>
    <table class="header-table">
      <tr>
        <td style="width: 50%; text-align: center;">
          <span style="font-size: 12pt;">${lp.schoolName.toUpperCase()}</span><br>
          <span class="bold">TỔ CHUYÊN MÔN</span>
        </td>
        <td style="width: 50%; text-align: center;">
          <span class="bold" style="font-size: 12pt;">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</span><br>
          <span class="bold" style="font-size: 11pt;">Độc lập - Tự do - Hạnh phúc</span><br>
          <span>-------------------</span>
        </td>
      </tr>
    </table>

    <h1>KẾ HOẠCH BÀI DẠY</h1>
    <div class="text-center bold" style="font-size: 13pt; margin-bottom: 4pt;">${lp.title}</div>
    <div class="text-center italic" style="margin-bottom: 15pt;">
      Môn: ${lp.subject} - Lớp: ${lp.grade} · Thời lượng: ${lp.duration} · Bộ sách: ${lp.curriculum}<br>
      Giáo viên thực hiện: ${lp.teacherName} · Ngày soạn: ${lp.datePrepared}
    </div>

    <h2>I. MỤC TIÊU</h2>
    <h3>1. Về kiến thức:</h3>
    <ul>
      ${lp.objectives.knowledge.map(k => `<li>${k}</li>`).join('')}
    </ul>

    <h3>2. Về năng lực:</h3>
    <p><b>a) Năng lực chung:</b></p>
    <ul>
      ${lp.objectives.generalCompetencies.map(gc => `<li>${gc}</li>`).join('')}
    </ul>
    <p><b>b) Năng lực đặc thù:</b></p>
    <ul>
      ${lp.objectives.specificCompetencies.map(sc => `<li>${sc}</li>`).join('')}
    </ul>

    <h3>3. Về phẩm chất:</h3>
    <ul>
      ${lp.objectives.qualities.map(q => `<li>${q}</li>`).join('')}
    </ul>

    <h2>II. THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU</h2>
    <p><b>1. Thiết bị của giáo viên:</b></p>
    <ul>
      ${lp.equipment.teacher.map(t => `<li>${t}</li>`).join('')}
    </ul>
    <p><b>2. Thiết bị của học sinh:</b></p>
    <ul>
      ${lp.equipment.student.map(s => `<li>${s}</li>`).join('')}
    </ul>

    <h2>III. TIẾN TRÌNH DẠY HỌC (CHUẨN CÔNG VĂN 5512/BGDĐT-GDTrH)</h2>
    ${lp.activities.map(act => `
      <div style="margin-top: 12pt; border-bottom: 1pt dashed #999; padding-bottom: 10pt;">
        <h3 style="color: #0b3a75;">${act.name} (${act.timeAllocation})</h3>
        <p><b>a) Mục tiêu:</b> ${act.objective}</p>
        <p><b>b) Nội dung:</b> ${act.content}</p>
        <p><b>c) Sản phẩm:</b> ${act.product}</p>
        <p><b>d) Tổ chức thực hiện:</b></p>
        <table class="bordered-table">
          <thead>
            <tr>
              <th style="width: 30%;">Tiến trình các bước</th>
              <th style="width: 70%;">Nội dung hoạt động của Giáo viên và Học sinh</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="bold">Bước 1: Chuyển giao nhiệm vụ</td>
              <td>${act.implementation.step1_transfer}</td>
            </tr>
            <tr>
              <td class="bold">Bước 2: Thực hiện nhiệm vụ</td>
              <td>${act.implementation.step2_execution}</td>
            </tr>
            <tr>
              <td class="bold">Bước 3: Báo cáo, thảo luận</td>
              <td>${act.implementation.step3_discussion}</td>
            </tr>
            <tr>
              <td class="bold">Bước 4: Kết luận, nhận định</td>
              <td>${act.implementation.step4_conclusion}</td>
            </tr>
          </tbody>
        </table>
      </div>
    `).join('')}

    <br><br>
    <table class="header-table" style="margin-top: 20pt;">
      <tr>
        <td style="width: 50%; text-align: center;">
          <span class="bold">DUYỆT CỦA TỔ CHUYÊN MÔN</span><br><br><br><br>
          ...................................................
        </td>
        <td style="width: 50%; text-align: center;">
          <span class="italic">Ngày ..... tháng ..... năm 2026</span><br>
          <span class="bold">GIÁO VIÊN SOẠN BÀI</span><br><br><br><br>
          <span class="bold">${lp.teacherName}</span>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;

  downloadFile(filename, wordHtml, 'application/msword');
}

// 2. Xuất file Word (.doc) cho Đề kiểm tra chuẩn Công văn 7991 (4 Phần độc lập)
export function exportExamPaperWord(state: EdTechWorkspaceState) {
  const ex = state.exam;
  const filename = `${ex.title.replace(/[^a-zA-Z0-9_\u00C0-\u1EF9]/g, '_')}_DeThi_7991.doc`;

  const wordHtml = `
  <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
  <head>
    <meta charset='utf-8'>
    <title>${ex.title}</title>
    <style>
      body {
        font-family: 'Times New Roman', serif;
        font-size: 13pt;
        line-height: 1.25;
        margin: 1.5cm 2cm 2cm 2cm;
      }
      h1, h2, h3 { font-family: 'Times New Roman', serif; color: #000; }
      h1 { font-size: 13.5pt; text-align: center; font-weight: bold; margin: 4pt 0; text-transform: uppercase; }
      h2 { font-size: 13pt; font-weight: bold; margin-top: 12pt; margin-bottom: 4pt; border-bottom: 1pt solid #000; padding-bottom: 2pt; }
      .header-table { width: 100%; border-collapse: collapse; margin-bottom: 8pt; }
      .header-table td { border: none; padding: 2pt 4pt; vertical-align: top; }
      .bold { font-weight: bold; }
      .italic { font-style: italic; }
      .bordered-table { width: 100%; border-collapse: collapse; margin: 8pt 0; }
      .bordered-table th, .bordered-table td { border: 1pt solid #000; padding: 4pt; font-size: 12pt; }
      .bordered-table th { background-color: #f2f2f2; text-align: center; }
      .options-grid { width: 100%; margin: 3pt 0 6pt 0; }
      .options-grid td { border: none; padding: 2pt 6pt; width: 25%; vertical-align: top; }
    </style>
  </head>
  <body>
    <table class="header-table">
      <tr>
        <td style="width: 50%; text-align: center;">
          <span style="font-size: 12pt;">${ex.schoolName.toUpperCase()}</span><br>
          <span class="bold">MÃ ĐỀ THI: ${ex.examCode}</span>
        </td>
        <td style="width: 50%; text-align: center;">
          <span class="bold" style="font-size: 13pt;">${ex.title}</span><br>
          <span>Môn: <b>${ex.subject} - Lớp ${ex.grade}</b></span><br>
          <span class="italic">Thời gian làm bài: ${ex.durationMinutes} phút (Không kể phát đề)</span>
        </td>
      </tr>
    </table>

    <table style="width: 100%; border: 1pt solid #000; margin-bottom: 10pt; border-collapse: collapse;">
      <tr>
        <td style="padding: 6pt; width: 60%; border-right: 1pt solid #000;">
          Họ và tên thí sinh: ..........................................................................<br>
          Số báo danh: ........................................... Lớp: .............................
        </td>
        <td style="padding: 6pt; width: 40%; text-align: center; vertical-align: middle;">
          <b>ĐIỂM TOÀN BÀI THI</b><br>
          <span style="font-size: 16pt;">........ / 10.0</span>
        </td>
      </tr>
    </table>

    <h2>PHẦN I. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN (${ex.part1.length} câu - ${(ex.part1.length * 0.25).toFixed(2)} điểm)</h2>
    <p class="italic">Thí sinh trả lời từ câu 1 đến câu ${ex.part1.length}. Mỗi câu hỏi thí sinh chỉ chọn một phương án chính xác nhất.</p>
    ${ex.part1.map(q => `
      <div style="margin-bottom: 8pt;">
        <p><b>Câu ${q.questionNumber}:</b> ${q.content}</p>
        <table class="options-grid">
          <tr>
            <td><b>A.</b> ${q.options.A}</td>
            <td><b>B.</b> ${q.options.B}</td>
            <td><b>C.</b> ${q.options.C}</td>
            <td><b>D.</b> ${q.options.D}</td>
          </tr>
        </table>
      </div>
    `).join('')}

    <h2>PHẦN II. CÂU TRẮC NGHIỆM ĐÚNG SAI (${ex.part2.length} câu - ${(ex.part2.length * 1.0).toFixed(1)} điểm)</h2>
    <p class="italic">Thí sinh trả lời từ câu 1 đến câu ${ex.part2.length}. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn Đúng hoặc Sai theo chuẩn Công văn 7991/BGDĐT-GDTrH.</p>
    ${ex.part2.map(q => `
      <div style="margin-bottom: 12pt;">
        <p><b>Câu ${q.questionNumber}:</b> ${q.contextPrompt}</p>
        <table style="width: 100%; border-collapse: collapse; margin-left: 15pt;">
          ${q.statements.map(s => `
            <tr>
              <td style="width: 80%; padding: 3pt 0;"><b>${s.letter})</b> ${s.content}</td>
              <td style="width: 20%; padding: 3pt 0; text-align: right; color: #555;">[ Đúng / Sai ]</td>
            </tr>
          `).join('')}
        </table>
      </div>
    `).join('')}

    <h2>PHẦN III. CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN (${ex.part3.length} câu - ${(ex.part3.length * 0.5).toFixed(1)} điểm)</h2>
    <p class="italic">Thí sinh trả lời từ câu 1 đến câu ${ex.part3.length}. Điền kết quả ngắn gọn vào ô trống tương ứng.</p>
    ${ex.part3.map(q => `
      <div style="margin-bottom: 10pt;">
        <p><b>Câu ${q.questionNumber}:</b> ${q.content}</p>
        <div style="margin-left: 20pt;"><b>Đáp số:</b> ............................................................................</div>
      </div>
    `).join('')}

    <h2>PHẦN IV. TỰ LUẬN (${ex.part4.length} câu - ${(ex.part4.reduce((s, c) => s + c.points, 0)).toFixed(1)} điểm)</h2>
    <p class="italic">Thí sinh trình bày chi tiết lời giải, bài làm vào giấy kiểm tra.</p>
    ${ex.part4.map(q => `
      <div style="margin-bottom: 14pt;">
        <p><b>Câu ${q.questionNumber} (${q.points} điểm):</b> ${q.content}</p>
      </div>
    `).join('')}

    <div style="text-align: center; margin-top: 20pt; font-weight: bold;">
      -------------------- HẾT --------------------<br>
      <span class="italic" style="font-weight: normal; font-size: 11pt;">Cán bộ coi thi không giải thích gì thêm.</span>
    </div>
  </body>
  </html>
  `;

  downloadFile(filename, wordHtml, 'application/msword');
}

// 3. Xuất file HTML độc lập (Single-file HTML bundle với Tailwind CDN, Alpine.js và Lucide Icons)
export function exportStandaloneHtml(state: EdTechWorkspaceState) {
  const jsonString = JSON.stringify(state).replace(/<\/script>/g, '<\\/script>');
  const filename = `${state.lessonPlan.title.replace(/[^a-zA-Z0-9_\u00C0-\u1EF9]/g, '_')}_Offline_Workspace.html`;

  const htmlContent = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${state.lessonPlan.title} - EdTech Workspace</title>
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Lucide Icons CDN -->
  <script src="https://unpkg.com/lucide@latest"></script>
  <!-- Alpine.js Core -->
  <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Be Vietnam Pro', system-ui, sans-serif; }
    [x-cloak] { display: none !important; }
    @media print {
      .no-print { display: none !important; }
      .print-only { display: block !important; }
    }
  </style>
</head>
<body class="bg-slate-50 text-slate-900 antialiased" x-data="edtechApp()" x-cloak>
  <!-- Top Bar Contract -->
  <header class="bg-slate-900 text-white border-b border-slate-800 px-6 py-3 flex items-center justify-between gap-8 no-print">
    <div class="flex items-center gap-3">
      <div class="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white shadow">
        ED
      </div>
      <div>
        <h1 class="text-base font-semibold leading-tight tracking-tight">EdTech Workspace Việt Nam</h1>
        <p class="text-xs text-slate-400">Chuẩn CV 5512/BGDĐT & CV 7991/BGDĐT</p>
      </div>
    </div>
    
    <div class="flex items-center gap-2">
      <template x-for="tab in tabs" :key="tab.id">
        <button 
          @click="activeTab = tab.id"
          :class="activeTab === tab.id ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-800 hover:text-white'"
          class="px-3 py-1.5 rounded-md text-xs font-medium transition flex items-center gap-1.5 whitespace-nowrap"
        >
          <span x-text="tab.label"></span>
        </button>
      </template>
    </div>

    <div class="flex items-center gap-2">
      <button onclick="window.print()" class="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-md text-xs font-medium flex items-center gap-1">
        In / Lưu PDF
      </button>
    </div>
  </header>

  <!-- Main View -->
  <main class="max-w-7xl mx-auto p-6">
    <!-- Tab 1: KHBD 5512 -->
    <div x-show="activeTab === 'khbd'" class="space-y-6">
      <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        <div class="border-b border-slate-200 pb-6 mb-6 text-center">
          <div class="text-xs uppercase tracking-wider text-slate-500 font-semibold" x-text="state.lessonPlan.schoolName"></div>
          <h2 class="text-2xl font-bold text-slate-900 mt-2" x-text="state.lessonPlan.title"></h2>
          <div class="mt-2 text-sm text-slate-600 flex items-center justify-center gap-4">
            <span>Môn: <strong x-text="state.lessonPlan.subject"></strong></span>
            <span>·</span>
            <span>Khối: <strong x-text="state.lessonPlan.grade"></strong></span>
            <span>·</span>
            <span>Thời lượng: <strong x-text="state.lessonPlan.duration"></strong></span>
            <span>·</span>
            <span>GV: <strong x-text="state.lessonPlan.teacherName"></strong></span>
          </div>
        </div>

        <!-- 4 Activities 5512 -->
        <div class="space-y-8">
          <template x-for="act in state.lessonPlan.activities" :key="act.id">
            <div class="border border-slate-200 rounded-lg p-6 bg-slate-50/50">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-base font-bold text-blue-900" x-text="act.name"></h3>
                <span class="text-xs font-semibold px-2.5 py-1 bg-blue-100 text-blue-800 rounded" x-text="act.timeAllocation"></span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs mb-4">
                <div class="bg-white p-3 rounded border border-slate-200">
                  <span class="font-bold text-slate-800 block mb-1">a) Mục tiêu:</span>
                  <p class="text-slate-600" x-text="act.objective"></p>
                </div>
                <div class="bg-white p-3 rounded border border-slate-200">
                  <span class="font-bold text-slate-800 block mb-1">b) Nội dung:</span>
                  <p class="text-slate-600" x-text="act.content"></p>
                </div>
                <div class="bg-white p-3 rounded border border-slate-200">
                  <span class="font-bold text-slate-800 block mb-1">c) Sản phẩm:</span>
                  <p class="text-slate-600" x-text="act.product"></p>
                </div>
              </div>
              <div class="bg-white rounded border border-slate-200 overflow-hidden text-xs">
                <div class="bg-slate-100 px-4 py-2 font-bold text-slate-800">d) Tổ chức thực hiện 4 bước CV 5512:</div>
                <div class="p-4 space-y-3">
                  <div><strong>Bước 1 (Giao nhiệm vụ):</strong> <span x-text="act.implementation.step1_transfer"></span></div>
                  <div><strong>Bước 2 (Thực hiện):</strong> <span x-text="act.implementation.step2_execution"></span></div>
                  <div><strong>Bước 3 (Báo cáo thảo luận):</strong> <span x-text="act.implementation.step3_discussion"></span></div>
                  <div><strong>Bước 4 (Kết luận nhận định):</strong> <span x-text="act.implementation.step4_conclusion"></span></div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>

    <!-- Tab 2: Đề kiểm tra 7991 -->
    <div x-show="activeTab === 'exam'" class="space-y-6">
      <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        <div class="text-center border-b border-slate-200 pb-4 mb-6">
          <h2 class="text-xl font-bold text-slate-900" x-text="state.exam.title"></h2>
          <p class="text-xs text-slate-500 mt-1">Cấu trúc 4 phần độc lập theo Công văn 7991/BGDĐT-GDTrH (17/12/2024) · Điểm tối đa: 10.0</p>
        </div>

        <!-- Phần I -->
        <div class="mb-8">
          <h3 class="text-sm font-bold bg-blue-50 text-blue-900 px-3 py-2 rounded mb-4">
            PHẦN I: TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN (0.25đ/câu)
          </h3>
          <div class="space-y-4">
            <template x-for="q in state.exam.part1" :key="q.id">
              <div class="text-xs border-b border-slate-100 pb-3">
                <p class="font-semibold text-slate-800 mb-2">
                  <span x-text="'Câu ' + q.questionNumber + ': '"></span>
                  <span x-text="q.content"></span>
                </p>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-slate-600 pl-4">
                  <div><strong>A.</strong> <span x-text="q.options.A"></span></div>
                  <div><strong>B.</strong> <span x-text="q.options.B"></span></div>
                  <div><strong>C.</strong> <span x-text="q.options.C"></span></div>
                  <div><strong>D.</strong> <span x-text="q.options.D"></span></div>
                </div>
              </div>
            </template>
          </div>
        </div>

        <!-- Phần II Đúng Sai 4 ý -->
        <div class="mb-8">
          <h3 class="text-sm font-bold bg-emerald-50 text-emerald-900 px-3 py-2 rounded mb-4">
            PHẦN II: TRẮC NGHIỆM ĐÚNG/SAI 4 LỆNH (1.0đ/câu · Barem: 1 ý = 0.1đ; 2 ý = 0.25đ; 3 ý = 0.5đ; 4 ý = 1.0đ)
          </h3>
          <div class="space-y-6">
            <template x-for="q in state.exam.part2" :key="q.id">
              <div class="bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs">
                <p class="font-bold text-slate-900 mb-3">
                  <span x-text="'Câu ' + q.questionNumber + ': '"></span>
                  <span x-text="q.contextPrompt"></span>
                </p>
                <div class="space-y-2 pl-3">
                  <template x-for="st in q.statements" :key="st.id">
                    <div class="flex items-center justify-between bg-white p-2.5 rounded border border-slate-200">
                      <div>
                        <strong x-text="st.letter + ') '"></strong>
                        <span x-text="st.content"></span>
                      </div>
                      <span class="px-2 py-0.5 rounded text-[11px] font-bold"
                            :class="st.isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'"
                            x-text="st.isCorrect ? 'ĐÚNG' : 'SAI'">
                      </span>
                    </div>
                  </template>
                </div>
              </div>
            </template>
          </div>
        </div>

        <!-- Phần III Trả lời ngắn -->
        <div class="mb-8">
          <h3 class="text-sm font-bold bg-amber-50 text-amber-900 px-3 py-2 rounded mb-4">
            PHẦN III: TRẮC NGHIỆM TRẢ LỜI NGẮN (0.5đ/câu)
          </h3>
          <div class="space-y-3 text-xs">
            <template x-for="q in state.exam.part3" :key="q.id">
              <div class="bg-white p-3 rounded border border-slate-200 flex justify-between items-center">
                <div>
                  <strong>Câu <span x-text="q.questionNumber"></span>:</strong>
                  <span x-text="q.content"></span>
                </div>
                <div class="text-blue-700 font-bold bg-blue-50 px-3 py-1 rounded">
                  Đáp số: <span x-text="q.correctAnswer"></span> <span x-text="q.unit || ''"></span>
                </div>
              </div>
            </template>
          </div>
        </div>

        <!-- Phần IV Tự luận -->
        <div>
          <h3 class="text-sm font-bold bg-purple-50 text-purple-900 px-3 py-2 rounded mb-4">
            PHẦN IV: TỰ LUẬN (1.0đ)
          </h3>
          <template x-for="q in state.exam.part4" :key="q.id">
            <div class="bg-white p-4 rounded border border-slate-200 text-xs">
              <p class="font-bold text-slate-900 mb-2">Câu <span x-text="q.questionNumber"></span> (<span x-text="q.points"></span> điểm):</p>
              <p class="text-slate-700 whitespace-pre-line" x-text="q.content"></p>
            </div>
          </template>
        </div>
      </div>
    </div>

    <!-- Tab 3: Slide Trình chiếu -->
    <div x-show="activeTab === 'slides'" class="space-y-6">
      <div class="bg-slate-900 text-white rounded-xl p-8 min-h-[480px] flex flex-col justify-between shadow-lg">
        <div>
          <div class="text-xs text-blue-400 uppercase tracking-widest font-semibold" x-text="'Slide ' + (currentSlide + 1) + ' / ' + state.slides.length"></div>
          <h2 class="text-3xl font-bold mt-2" x-text="state.slides[currentSlide].title"></h2>
          <p class="text-slate-400 text-sm mt-1" x-text="state.slides[currentSlide].subtitle"></p>
          
          <ul class="mt-6 space-y-3">
            <template x-for="bp in state.slides[currentSlide].bulletPoints" :key="bp">
              <li class="flex items-center gap-3 text-base text-slate-200">
                <span class="w-2 h-2 rounded-full bg-blue-500"></span>
                <span x-text="bp"></span>
              </li>
            </template>
          </ul>
        </div>

        <div class="pt-6 border-t border-slate-800 flex justify-between items-center">
          <button 
            @click="currentSlide = Math.max(0, currentSlide - 1)"
            class="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded text-xs font-semibold"
          >
            Trang trước
          </button>
          <div class="text-xs text-slate-500">Dùng nút bấm để điều hướng bài giảng</div>
          <button 
            @click="currentSlide = Math.min(state.slides.length - 1, currentSlide + 1)"
            class="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded text-xs font-semibold"
          >
            Trang tiếp theo
          </button>
        </div>
      </div>
    </div>

    <!-- Tab 4: JSON State -->
    <div x-show="activeTab === 'json'" class="space-y-4">
      <div class="bg-slate-900 text-slate-100 p-6 rounded-xl border border-slate-800">
        <h3 class="text-sm font-bold text-white mb-2">Khối JSON State Bàn giao Phiên làm việc</h3>
        <pre class="text-xs font-mono overflow-auto max-h-[500px] p-4 bg-slate-950 rounded border border-slate-800 text-emerald-400" x-text="JSON.stringify(state, null, 2)"></pre>
      </div>
    </div>
  </main>

  <script>
    function edtechApp() {
      return {
        activeTab: 'khbd',
        currentSlide: 0,
        tabs: [
          { id: 'khbd', label: '1. KHBD 5512' },
          { id: 'slides', label: '2. Slide Bài giảng' },
          { id: 'exam', label: '3. Đề thi CV 7991' },
          { id: 'json', label: '4. JSON State' }
        ],
        state: ${jsonString}
      }
    }
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();
    });
  </script>
</body>
</html>
`;

  downloadFile(filename, htmlContent, 'text/html');
}

// 4. Xuất JSON State bàn giao phiên làm việc
export function exportJsonState(state: EdTechWorkspaceState) {
  const jsonString = JSON.stringify(state, null, 2);
  const filename = `${state.lessonPlan.title.replace(/[^a-zA-Z0-9_\u00C0-\u1EF9]/g, '_')}_State.json`;
  downloadFile(filename, jsonString, 'application/json');
}
