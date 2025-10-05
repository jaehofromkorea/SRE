import { useState, useEffect } from 'react';

/**
 * 노트 관리를 위한 Hook
 * localStorage를 사용하여 하이라이트와 메모를 저장/관리합니다
 */
export function useNotes() {
  const [notes, setNotes] = useState(() => {
    try {
      const saved = localStorage.getItem('cms-tracker-notes');
      return saved
        ? JSON.parse(saved)
        : { highlights: [], memos: [] };
    } catch (error) {
      console.error('Failed to load notes:', error);
      return { highlights: [], memos: [] };
    }
  });

  // notes가 변경될 때마다 localStorage에 저장
  useEffect(() => {
    try {
      localStorage.setItem('cms-tracker-notes', JSON.stringify(notes));
    } catch (error) {
      console.error('Failed to save notes:', error);
    }
  }, [notes]);

  /**
   * 하이라이트 추가 (중요! 표시)
   * @param {string} text 선택된 텍스트
   * @param {string} source 출처 (어느 토픽에서 추가했는지)
   */
  const addHighlight = (text, source = '') => {
    const newHighlight = {
      id: crypto.randomUUID(),
      text,
      type: 'important',
      timestamp: new Date().toISOString(),
      source
    };

    setNotes(prev => ({
      ...prev,
      highlights: [...prev.highlights, newHighlight]
    }));

    return newHighlight.id;
  };

  /**
   * 메모 추가
   * @param {string} text 선택된 텍스트
   * @param {string} category 카테고리 (@이해, @질문, @심화, @상세)
   * @param {string} memo 메모 내용
   * @param {string} source 출처
   */
  const addMemo = (text, category, memo, source = '') => {
    const newMemo = {
      id: crypto.randomUUID(),
      text,
      category,
      memo,
      timestamp: new Date().toISOString(),
      source
    };

    setNotes(prev => ({
      ...prev,
      memos: [...prev.memos, newMemo]
    }));

    return newMemo.id;
  };

  /**
   * 노트 삭제
   * @param {string} id 노트 ID
   * @param {'highlight' | 'memo'} type 노트 타입
   */
  const deleteNote = (id, type) => {
    if (type === 'highlight') {
      setNotes(prev => ({
        ...prev,
        highlights: prev.highlights.filter(item => item.id !== id)
      }));
    } else if (type === 'memo') {
      setNotes(prev => ({
        ...prev,
        memos: prev.memos.filter(item => item.id !== id)
      }));
    }
  };

  /**
   * 노트 업데이트
   * @param {string} id 노트 ID
   * @param {'highlight' | 'memo'} type 노트 타입
   * @param {object} updates 업데이트할 필드들
   */
  const updateNote = (id, type, updates) => {
    if (type === 'highlight') {
      setNotes(prev => ({
        ...prev,
        highlights: prev.highlights.map(item =>
          item.id === id ? { ...item, ...updates } : item
        )
      }));
    } else if (type === 'memo') {
      setNotes(prev => ({
        ...prev,
        memos: prev.memos.map(item =>
          item.id === id ? { ...item, ...updates } : item
        )
      }));
    }
  };

  /**
   * 모든 노트 삭제
   */
  const clearAllNotes = () => {
    if (confirm('모든 노트를 삭제하시겠습니까?')) {
      setNotes({ highlights: [], memos: [] });
    }
  };

  /**
   * 노트 내보내기 (JSON)
   */
  const exportNotes = () => {
    const dataStr = JSON.stringify(notes, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `cms-notes-${new Date().toISOString().split('T')[0]}.json`;
    link.click();

    URL.revokeObjectURL(url);
  };

  /**
   * 노트 가져오기 (JSON)
   */
  const importNotes = (jsonData) => {
    try {
      const imported = JSON.parse(jsonData);
      if (imported.highlights && imported.memos) {
        setNotes(imported);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Failed to import notes:', error);
      return false;
    }
  };

  return {
    notes,
    addHighlight,
    addMemo,
    deleteNote,
    updateNote,
    clearAllNotes,
    exportNotes,
    importNotes
  };
}
