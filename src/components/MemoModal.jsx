import { useState } from 'react';

/**
 * 카테고리 버튼 컴포넌트
 */
const CategoryButton = ({ label, isSelected, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`
      px-4 py-2 rounded-lg font-medium transition-all duration-200
      ${isSelected
        ? 'bg-indigo-600 text-white shadow-md scale-105'
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }
    `}
  >
    {label}
  </button>
);

/**
 * 메모 작성 모달 컴포넌트
 */
export default function MemoModal({ selectedText, onSave, onClose }) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [memoText, setMemoText] = useState('');

  const categories = ['@이해', '@질문', '@심화', '@상세'];

  const handleSave = () => {
    if (!selectedCategory) {
      alert('카테고리를 선택해주세요.');
      return;
    }
    if (!memoText.trim()) {
      alert('메모 내용을 입력해주세요.');
      return;
    }

    onSave({
      text: selectedText,
      category: selectedCategory,
      memo: memoText.trim()
    });

    onClose();
  };

  const handleKeyDown = (e) => {
    // Ctrl/Cmd + Enter로 저장
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <>
      {/* 배경 오버레이 */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* 모달 콘텐츠 */}
        <div
          className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-in"
          onClick={(e) => e.stopPropagation()}
        >
          {/* 헤더 */}
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">메모 작성</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="닫기"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* 본문 */}
          <div className="p-6 space-y-6">
            {/* 선택된 텍스트 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                선택된 텍스트
              </label>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <p className="text-gray-800 leading-relaxed">{selectedText}</p>
              </div>
            </div>

            {/* 카테고리 선택 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                카테고리 선택 <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <CategoryButton
                    key={category}
                    label={category}
                    isSelected={selectedCategory === category}
                    onClick={() => setSelectedCategory(category)}
                  />
                ))}
              </div>
            </div>

            {/* 메모 입력 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                메모 내용 <span className="text-red-500">*</span>
              </label>
              <textarea
                value={memoText}
                onChange={(e) => setMemoText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="메모를 입력하세요... (Ctrl/Cmd + Enter로 저장)"
                className="w-full h-40 px-4 py-3 border border-gray-300 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                         resize-none"
              />
              <p className="mt-2 text-sm text-gray-500">
                💡 Tip: Ctrl/Cmd + Enter를 눌러 빠르게 저장할 수 있습니다
              </p>
            </div>
          </div>

          {/* 푸터 */}
          <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg font-medium text-gray-700 bg-white border border-gray-300
                       hover:bg-gray-50 transition-colors"
            >
              취소
            </button>
            <button
              onClick={handleSave}
              className="px-5 py-2.5 rounded-lg font-medium text-white bg-indigo-600
                       hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
            >
              저장
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
