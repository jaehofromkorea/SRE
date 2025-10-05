/**
 * 현재 선택된 텍스트를 가져옵니다
 * @returns {string} 선택된 텍스트
 */
export function getSelectedText() {
  const selection = window.getSelection();
  return selection ? selection.toString().trim() : '';
}

/**
 * 선택 영역의 바운딩 박스를 가져옵니다
 * @returns {DOMRect|null} 선택 영역의 위치와 크기
 */
export function getSelectionBoundingRect() {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return null;

  const range = selection.getRangeAt(0);
  return range.getBoundingClientRect();
}

/**
 * 선택 영역을 해제합니다
 */
export function clearSelection() {
  const selection = window.getSelection();
  if (selection) {
    selection.removeAllRanges();
  }
}
