import React, { useState, useEffect } from 'react';
import { SlideItem } from '../types/edtech';
import { 
  Presentation, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  Clock, 
  Play, 
  Pause, 
  RotateCcw, 
  HelpCircle, 
  Lightbulb, 
  FileText,
  Sparkles
} from 'lucide-react';

interface SlideDeckViewProps {
  slides: SlideItem[];
  onUpdateSlides: (slides: SlideItem[]) => void;
}

export const SlideDeckView: React.FC<SlideDeckViewProps> = ({
  slides,
  onUpdateSlides
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showNotes, setShowNotes] = useState(true);

  // Countdown timer for group activity
  const [timerSeconds, setTimerSeconds] = useState(180); // 3 mins default
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  const currentSlide = slides[currentIndex] || slides[0];

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const setTimerPreset = (mins: number) => {
    setTimerSeconds(mins * 60);
    setIsTimerRunning(false);
  };

  return (
    <div className="space-y-6">
      {/* Top Controls */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 flex flex-wrap items-center justify-between gap-4 shadow-2xs">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-50 text-indigo-700 rounded-lg">
            <Presentation className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900 leading-tight">
              Slide Bài Giảng Trình Chiếu Sư Phạm
            </h2>
            <div className="text-xs text-slate-500 mt-0.5">
              Đồng bộ tiến trình 4 hoạt động KHBD 5512 · Chế độ trình chiếu tương tác
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Group Activity Timer Pill */}
          <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 text-xs">
            <Clock className="w-4 h-4 text-slate-600" />
            <span className={`font-mono font-bold ${timerSeconds === 0 ? 'text-rose-600 animate-pulse' : 'text-slate-800'}`}>
              {formatTimer(timerSeconds)}
            </span>
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="p-1 hover:bg-slate-200 rounded text-slate-700"
              title={isTimerRunning ? 'Tạm dừng đếm giờ' : 'Bắt đầu đếm giờ'}
            >
              {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={() => {
                setIsTimerRunning(false);
                setTimerSeconds(180);
              }}
              className="p-1 hover:bg-slate-200 rounded text-slate-700"
              title="Đặt lại 3 phút"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <div className="hidden sm:flex items-center gap-1 border-l border-slate-300 pl-2">
              {[2, 3, 5].map((m) => (
                <button
                  key={m}
                  onClick={() => setTimerPreset(m)}
                  className="px-1.5 py-0.5 hover:bg-slate-200 rounded text-[10px] text-slate-600"
                >
                  {m}p
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => setShowNotes(!showNotes)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${
              showNotes ? 'bg-indigo-50 border-indigo-200 text-indigo-900' : 'bg-white border-slate-200 text-slate-700'
            }`}
          >
            {showNotes ? 'Ẩn ghi chú GV' : 'Hiện ghi chú GV'}
          </button>

          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition"
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            <span>{isFullscreen ? 'Thu nhỏ' : 'Toàn màn hình'}</span>
          </button>
        </div>
      </div>

      {/* Main Slide Canvas */}
      <div className={`transition-all ${isFullscreen ? 'fixed inset-0 z-50 bg-black flex flex-col p-6' : 'space-y-4'}`}>
        {/* Slide Aspect Ratio Container */}
        <div className="w-full max-w-5xl mx-auto bg-slate-950 text-white rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col justify-between aspect-16/9 p-8 md:p-12 relative">
          {/* Slide Stage Indicator */}
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-600 text-white">
                SLIDE {currentSlide.slideNumber} / {slides.length}
              </span>
              <span className="text-xs text-slate-400">
                {currentSlide.activityStage === 0
                  ? 'Giới thiệu & Tổng quan'
                  : `Hoạt động ${currentSlide.activityStage} (CV 5512)`}
              </span>
            </div>

            {currentSlide.timerMinutes && (
              <span className="text-xs text-amber-400 flex items-center gap-1 font-mono">
                <Clock className="w-3.5 h-3.5" /> {currentSlide.timerMinutes} phút hoạt động
              </span>
            )}
          </div>

          {/* Slide Body */}
          <div className="my-auto space-y-6">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-white">
                {currentSlide.title}
              </h1>
              {currentSlide.subtitle && (
                <p className="text-sm md:text-base text-blue-400 mt-2 font-medium">
                  {currentSlide.subtitle}
                </p>
              )}
            </div>

            {/* Bullet points */}
            <ul className="space-y-3 pl-2">
              {currentSlide.bulletPoints.map((bp, i) => (
                <li key={i} className="flex items-start gap-3 text-sm md:text-lg text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                  <span className="leading-relaxed">{bp}</span>
                </li>
              ))}
            </ul>

            {/* Visual or Formula highlight */}
            {currentSlide.visualContent && (
              <div className="bg-slate-900 border border-slate-700/80 rounded-xl p-4 font-mono text-xs md:text-sm text-emerald-400 overflow-x-auto">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1 font-sans">
                  Minh họa / Biểu thức toán học
                </div>
                {currentSlide.visualContent}
              </div>
            )}

            {/* Callout Box */}
            {currentSlide.calloutBox && (
              <div className="bg-blue-950/60 border border-blue-800/80 rounded-xl p-4 text-xs md:text-sm">
                <div className="flex items-center gap-2 text-blue-400 font-bold mb-1">
                  <Lightbulb className="w-4 h-4" />
                  <span>{currentSlide.calloutBox.title}</span>
                </div>
                <p className="text-slate-200 leading-relaxed">
                  {currentSlide.calloutBox.content}
                </p>
              </div>
            )}
          </div>

          {/* Bottom Bar within Slide */}
          <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
            <span>EdTech Sư Phạm Việt Nam · GDPT 2018</span>
            <span>Nhấn ← / → để chuyển slide</span>
          </div>
        </div>

        {/* Player Navigation Buttons */}
        <div className="flex items-center justify-between max-w-5xl mx-auto px-2">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex items-center gap-1 px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-800 disabled:opacity-40 disabled:cursor-not-allowed shadow-2xs"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Slide trước</span>
          </button>

          {/* Slide Dots / Thumbnails */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentIndex(idx)}
                className={`w-7 h-7 rounded-md text-xs font-bold transition flex items-center justify-center ${
                  currentIndex === idx
                    ? 'bg-blue-600 text-white shadow'
                    : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={currentIndex === slides.length - 1}
            className="flex items-center gap-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed shadow-2xs"
          >
            <span>Slide tiếp theo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Speaker Notes Drawer */}
        {showNotes && (
          <div className="max-w-5xl mx-auto bg-amber-50/80 border border-amber-200/80 rounded-xl p-4 text-xs text-amber-900 shadow-2xs">
            <div className="flex items-center gap-2 font-bold mb-1 text-amber-800">
              <FileText className="w-4 h-4 text-amber-700" />
              <span>Ghi chú giảng dạy của Giáo viên (Speaker Notes):</span>
            </div>
            <p className="leading-relaxed pl-6 text-slate-700">
              {currentSlide.speakerNotes || 'Chưa có ghi chú cho slide này.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
