import { useEffect } from 'react';
import {
  getSelectedText,
  getSelectionBoundingRect,
  calculateMenuPosition
} from '../utils/textSelection';

/**
 * 텍스트 선택을 감지하는 컴포넌트
 * UI를 렌더링하지 않고 이벤트 리스너만 등록합니다
 */
export default function TextSelection({ isActive, onTextSelected }) {
  useEffect(() => {
    if (!isActive) return;

    const handleMouseUp = () => {
      // 약간의 지연을 두어 선택이 완료되도록 함
      setTimeout(() => {
        const text = getSelectedText();

        // 텍스트가 선택되지 않았거나 너무 짧으면 무시
        if (!text || text.length < 2) {
          return;
        }

        const rect = getSelectionBoundingRect();
        if (!rect) return;

        const position = calculateMenuPosition(rect);
        if (!position) return;

        onTextSelected({
          text,
          position
        });
      }, 10);
    };

    // 마우스 이벤트 리스너 등록
    document.addEventListener('mouseup', handleMouseUp);

    // 터치 이벤트도 지원 (모바일)
    document.addEventListener('touchend', handleMouseUp);

    // 클린업
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [isActive, onTextSelected]);

  // UI를 렌더링하지 않음
  return null;
}
