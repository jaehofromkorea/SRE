import { useEffect, useRef } from 'react';
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
  const selectionTimeoutRef = useRef(null);

  useEffect(() => {
    if (!isActive) return;

    const handleSelection = () => {
      // 이전 타이머 취소
      if (selectionTimeoutRef.current) {
        clearTimeout(selectionTimeoutRef.current);
      }

      // 모바일에서 선택이 완료될 시간 확보 (150ms로 증가)
      selectionTimeoutRef.current = setTimeout(() => {
        const text = getSelectedText();

        console.log('[TextSelection] Selected text:', text); // 디버깅

        // 텍스트가 선택되지 않았거나 너무 짧으면 무시
        if (!text || text.length < 2) {
          console.log('[TextSelection] Text too short or empty');
          return;
        }

        const rect = getSelectionBoundingRect();
        console.log('[TextSelection] Selection rect:', rect); // 디버깅

        if (!rect) {
          console.log('[TextSelection] No bounding rect');
          return;
        }

        const position = calculateMenuPosition(rect);
        console.log('[TextSelection] Menu position:', position); // 디버깅

        if (!position) {
          console.log('[TextSelection] Failed to calculate position');
          return;
        }

        onTextSelected({
          text,
          position
        });
      }, 150);
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

    // selectionchange 이벤트로 텍스트 선택 감지 (모바일 지원 개선)
    const handleSelectionChange = () => {
      const selection = window.getSelection();
      if (selection && selection.toString().trim().length > 0) {
        console.log('[TextSelection] Selection changed:', selection.toString());
        handleSelection();
      }
    };

    // 마우스 이벤트 리스너 등록
    document.addEventListener('mouseup', handleMouseUp);

    // 터치 이벤트도 지원 (모바일)
    document.addEventListener('touchend', handleMouseUp);

    // 선택 변경 이벤트 (모바일에서 더 안정적)
    document.addEventListener('selectionchange', handleSelectionChange);

    // 컨텍스트 메뉴 차단
    document.addEventListener('contextmenu', handleContextMenu);

    // 클린업
    return () => {
      if (selectionTimeoutRef.current) {
        clearTimeout(selectionTimeoutRef.current);
      }
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleMouseUp);
      document.removeEventListener('selectionchange', handleSelectionChange);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, [isActive, onTextSelected]);

  // UI를 렌더링하지 않음
  return null;
}
