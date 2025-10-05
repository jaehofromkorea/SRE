// 하이라이터 아이콘
const HighlighterIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m9 11-6 6v3h9l3-3" />
    <path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4" />
  </svg>
);

// X 아이콘
const XIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function HighlighterButton({ isActive, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className={`
        fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg z-50
        flex items-center justify-center
        transition-all duration-200
        ${isActive
          ? 'bg-red-600 hover:bg-red-700 rotate-90'
          : 'bg-indigo-600 hover:bg-indigo-700'
        }
        text-white
        hover:scale-110
        active:scale-95
      `}
      aria-label={isActive ? '하이라이터 모드 끄기' : '하이라이터 모드 켜기'}
      title={isActive ? '하이라이터 모드 끄기 (클릭)' : '하이라이터 모드 켜기 (클릭)'}
    >
      {isActive ? <XIcon size={24} /> : <HighlighterIcon size={24} />}
    </button>
  );
}
