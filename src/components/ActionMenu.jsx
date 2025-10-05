/**
 * 액션 메뉴 아이콘들
 */
const ImportantIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const MemoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const CopyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

/**
 * 액션 메뉴 컴포넌트
 */
export default function ActionMenu({
  selectedText,
  position,
  onImportant,
  onMemo,
  onSearch,
  onCopy,
  onClose
}) {
  if (!selectedText || !position) return null;

  const { x, y, placement } = position;

  return (
    <>
      {/* 배경 클릭 시 닫기 */}
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />

      {/* 액션 메뉴 */}
      <div
        className="fixed z-50 bg-white rounded-lg shadow-xl border border-gray-200 animate-fade-in"
        style={{
          left: `${x}px`,
          top: `${y}px`,
          transform: 'translateX(-50%)'
        }}
      >
        {/* 화살표 표시 (선택사항) */}
        {placement === 'top' && (
          <div className="absolute left-1/2 -bottom-2 w-0 h-0 border-l-8 border-r-8 border-t-8
                          border-l-transparent border-r-transparent border-t-white
                          transform -translate-x-1/2" />
        )}
        {placement === 'bottom' && (
          <div className="absolute left-1/2 -top-2 w-0 h-0 border-l-8 border-r-8 border-b-8
                          border-l-transparent border-r-transparent border-b-white
                          transform -translate-x-1/2" />
        )}

        {/* 버튼들 */}
        <div className="flex items-center gap-1 p-2">
          <button
            onClick={() => {
              onImportant(selectedText);
              onClose();
            }}
            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-red-50
                       text-red-600 font-medium transition-colors"
            title="중요! 표시"
          >
            <ImportantIcon />
            <span className="text-sm whitespace-nowrap">중요!</span>
          </button>

          <div className="w-px h-6 bg-gray-200" />

          <button
            onClick={() => {
              onMemo(selectedText);
              onClose();
            }}
            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-indigo-50
                       text-indigo-600 font-medium transition-colors"
            title="메모 작성"
          >
            <MemoIcon />
            <span className="text-sm whitespace-nowrap">메모</span>
          </button>

          <div className="w-px h-6 bg-gray-200" />

          <button
            onClick={() => {
              onSearch(selectedText);
              onClose();
            }}
            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-blue-50
                       text-blue-600 font-medium transition-colors"
            title="Google 검색"
          >
            <SearchIcon />
            <span className="text-sm whitespace-nowrap">검색</span>
          </button>

          <div className="w-px h-6 bg-gray-200" />

          <button
            onClick={() => {
              onCopy(selectedText);
              onClose();
            }}
            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-green-50
                       text-green-600 font-medium transition-colors"
            title="클립보드에 복사"
          >
            <CopyIcon />
            <span className="text-sm whitespace-nowrap">복사</span>
          </button>
        </div>
      </div>
    </>
  );
}
