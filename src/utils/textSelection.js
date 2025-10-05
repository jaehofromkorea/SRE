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
 * 액션 메뉴의 위치를 계산합니다
 * @param {DOMRect} boundingRect 선택 영역의 바운딩 박스
 * @returns {{x: number, y: number, placement: string}} 메뉴 위치 정보
 */
export function calculateMenuPosition(boundingRect) {
  if (!boundingRect) return null;

  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const scrollY = window.scrollY;
  const scrollX = window.scrollX;

  // 선택 영역의 절대 위치 계산
  const selectionTop = boundingRect.top + scrollY;
  const selectionBottom = boundingRect.bottom + scrollY;
  const selectionLeft = boundingRect.left + scrollX;
  const selectionRight = boundingRect.right + scrollX;
  const selectionCenterX = selectionLeft + (boundingRect.width / 2);

  // 선택 영역의 끝이 화면 절반보다 아래에 있는지 확인
  const isLowerHalf = boundingRect.bottom > windowHeight / 2;

  // 메뉴 높이 예상 (실제 메뉴 높이에 맞게 조정 필요)
  const menuHeight = 60;
  const menuGap = 10;

  // 메뉴 위치 계산
  let y;
  let placement;

  if (isLowerHalf) {
    // 아래쪽에 있으면 선택 영역 위에 표시
    y = selectionTop - menuHeight - menuGap;
    placement = 'top';
  } else {
    // 위쪽에 있으면 선택 영역 아래에 표시
    y = selectionBottom + menuGap;
    placement = 'bottom';
  }

  // X 좌표는 선택 영역의 중앙
  let x = selectionCenterX;

  // 메뉴가 화면 밖으로 나가지 않도록 조정
  const menuWidth = 300; // 예상 메뉴 너비
  const menuHalfWidth = menuWidth / 2;

  if (x - menuHalfWidth < scrollX + 10) {
    x = scrollX + menuHalfWidth + 10;
  } else if (x + menuHalfWidth > scrollX + windowWidth - 10) {
    x = scrollX + windowWidth - menuHalfWidth - 10;
  }

  return {
    x,
    y,
    placement
  };
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
