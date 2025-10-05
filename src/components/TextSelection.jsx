import { useEffect, useRef } from 'react';
import {
  getSelectedText,
  getSelectionBoundingRect
} from '../utils/textSelection';

/**
 * 텍스트 선택을 감지하는 컴포넌트
 * UI를 렌더링하지 않고 이벤트 리스너만 등록합니다
 */
export default function TextSelection({ isActive, onTextSelected }) {
  const selectionTimeoutRef = useRef(null);

  useEffect(() => {
    if (!isActive) return;

    const handleSelection = () => {
      // 이전 타이머 취소
      if (selectionTimeoutRef.current) {
        clearTimeout(selectionTimeoutRef.current);
      }

      // 선택이 완료될 시간 확보
      selectionTimeoutRef.current = setTimeout(() => {
        const text = getSelectedText();

        console.log('[TextSelection] Selected text:', text);

        // 텍스트가 선택되지 않았거나 너무 짧으면 무시
        if (!text || text.length < 2) {
          console.log('[TextSelection] Text too short or empty');
          return;
        }

        const rect = getSelectionBoundingRect();
        console.log('[TextSelection] Selection rect:', rect);

        if (!rect) {
          console.log('[TextSelection] No bounding rect');
          return;
        }

        onTextSelected({
          text,
          rect  // Floating UI에서 사용할 DOMRect 전달
        });
      }, 100);
    };

    // 하이라이터 모드에서 브라우저 기본 컨텍스트 메뉴 차단
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // 마우스/터치 이벤트 리스너
    const handleMouseUp = () => {
      console.log('[TextSelection] Mouse/Touch up detected');
      handleSelection();
    };

    // 마우스 이벤트 리스너 등록 (PC)
    document.addEventListener('mouseup', handleMouseUp);

    // 터치 이벤트 지원 (모바일)
    document.addEventListener('touchend', handleMouseUp);

    // 컨텍스트 메뉴 차단
    document.addEventListener('contextmenu', handleContextMenu);

    // 클린업
    return () => {
      if (selectionTimeoutRef.current) {
        clearTimeout(selectionTimeoutRef.current);
      }
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleMouseUp);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, [isActive, onTextSelected]);

  // UI를 렌더링하지 않음
  return null;
}
