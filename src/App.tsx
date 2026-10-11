/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SubjectKey, EdTechWorkspaceState } from './types/edtech';
import { SAMPLE_PRESETS } from './data/sampleLessons';
import { Sidebar } from './components/Sidebar';
import { LessonPlanView } from './components/LessonPlanView';
import { SlideDeckView } from './components/SlideDeckView';
import { ExamMatrixView } from './components/ExamMatrixView';
import { ExamPaperView } from './components/ExamPaperView';
import { GradingRubricView } from './components/GradingRubricView';
import { JsonStateView } from './components/JsonStateView';
import { exportStandaloneHtml, exportLessonPlanWord, exportExamPaperWord } from './utils/exportUtils';
import { 
  BookOpen, 
  Presentation, 
  Award, 
  HelpCircle, 
  FileText, 
  Code, 
  Download, 
  FolderDown, 
  Printer,
  CheckCircle2,
  Share2
} from 'lucide-react';

export default function App() {
  // Current active subject and state
  const [activeSubject, setActiveSubject] = useState<SubjectKey>('math');
  const [state, setState] = useState<EdTechWorkspaceState>(SAMPLE_PRESETS['math']);
  const [activeTab, setActiveTab] = useState<string>('khbd');

  // Handle switching subject
  const handleChangeSubject = (sub: SubjectKey) => {
    setActiveSubject(sub);
    const newPreset = SAMPLE_PRESETS[sub] || SAMPLE_PRESETS['math'];
    setState(JSON.parse(JSON.stringify(newPreset)));
  };

  // Handle state reset to original preset
  const handleResetSubject = () => {
    const original = SAMPLE_PRESETS[activeSubject] || SAMPLE_PRESETS['math'];
    setState(JSON.parse(JSON.stringify(original)));
  };

  // Tab definitions
  const workspaceTabs = [
    { id: 'khbd', label: 'KHBD (CV 5512)', icon: BookOpen },
    { id: 'slides', label: 'Slide Bài giảng', icon: Presentation },
    { id: 'matrix', label: 'Ma trận CV 7991', icon: Award },
    { id: 'exam', label: 'Đề kiểm tra 4 Phần', icon: HelpCircle },
    { id: 'rubric', label: 'Hướng dẫn chấm', icon: FileText },
    { id: 'json', label: 'JSON State bàn giao', icon: Code },
  ];

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-100 text-slate-900 font-sans">
      {/* LEFT SPLIT-PANE: FIXED 380px WORKSPACE CONTROLLER */}
      <div className="no-print h-full">
        <Sidebar
          state={state}
          onChangeSubject={handleChangeSubject}
          onUpdateState={setState}
          activeTab={activeTab}
          onSelectTab={setActiveTab}
          onOpenPrint={() => window.print()}
        />
      </div>

      {/* RIGHT SPLIT-PANE: FLEXIBLE VISUAL WORKSPACE */}
      <div className="flex-1 flex flex-col h-full overflow-hidden bg-slate-50 min-w-0">
        {/* TOP BAR CONTRACT: Exactly 3 Zones (Brand Wordmark, 4-5 Text Nav Links, 1 Primary Action) */}
        <header className="no-print h-14 bg-white border-b border-slate-200 px-6 flex items-center justify-between gap-8 shrink-0 z-10 shadow-2xs">
          {/* Zone 1: Single text element wordmark */}
          <div className="text-base font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 flex items-center gap-2">
            <span>EdTech Sư Phạm Việt Nam</span>
            <span className="text-slate-300 font-normal">/</span>
            <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
              {state.lessonPlan.subject} {state.lessonPlan.grade}
            </span>
          </div>

          {/* Zone 2: 4-5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-slate-600">
            <button
              onClick={() => setActiveTab('khbd')}
              className={`hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'khbd' ? 'text-blue-600 font-bold' : ''
              }`}
            >
              Kế hoạch 5512
            </button>
            <button
              onClick={() => setActiveTab('slides')}
              className={`hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'slides' ? 'text-blue-600 font-bold' : ''
              }`}
            >
              Slide bài giảng
            </button>
            <button
              onClick={() => setActiveTab('matrix')}
              className={`hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'matrix' ? 'text-blue-600 font-bold' : ''
              }`}
            >
              Ma trận 7991
            </button>
            <button
              onClick={() => setActiveTab('exam')}
              className={`hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'exam' ? 'text-blue-600 font-bold' : ''
              }`}
            >
              Đề thi 4 phần
            </button>
            <button
              onClick={() => setActiveTab('json')}
              className={`hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'json' ? 'text-blue-600 font-bold' : ''
              }`}
            >
              Bàn giao State
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => exportStandaloneHtml(state)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors whitespace-nowrap shadow-xs"
              title="Tải toàn bộ ứng dụng thành 1 file HTML mở trực tiếp không cần mạng"
            >
              <FolderDown className="w-3.5 h-3.5" />
              <span>Tải HTML Offline</span>
            </button>
          </div>
        </header>

        {/* WORKSPACE SUB-TOOLBAR: Interactive Segmented Tab Controls */}
        <div className="no-print bg-white border-b border-slate-200 px-6 py-2.5 flex items-center justify-between gap-4 overflow-x-auto shrink-0">
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg shrink-0">
            {workspaceTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick status indicator */}
          <div className="hidden sm:flex items-center gap-3 text-xs text-slate-500 whitespace-nowrap shrink-0">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>CV 5512: 4 Hoạt động</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span>CV 7991: 4 Phần (10.0đ)</span>
            </span>
          </div>
        </div>

        {/* SCROLLABLE VISUAL WORKSPACE BODY */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="max-w-6xl mx-auto pb-12">
            {activeTab === 'khbd' && (
              <LessonPlanView
                lessonPlan={state.lessonPlan}
                fullState={state}
                onUpdateLessonPlan={(updated) => setState({ ...state, lessonPlan: updated })}
              />
            )}

            {activeTab === 'slides' && (
              <SlideDeckView
                slides={state.slides}
                onUpdateSlides={(updated) => setState({ ...state, slides: updated })}
              />
            )}

            {activeTab === 'matrix' && (
              <ExamMatrixView exam={state.exam} />
            )}

            {activeTab === 'exam' && (
              <ExamPaperView exam={state.exam} fullState={state} />
            )}

            {activeTab === 'rubric' && (
              <GradingRubricView exam={state.exam} />
            )}

            {activeTab === 'json' && (
              <JsonStateView
                state={state}
                onUpdateState={setState}
                onResetSubject={handleResetSubject}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
