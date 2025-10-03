import { useState, useEffect } from 'react'
import { frameworkData } from './data/frameworkData'
import './App.css'

// Icon components
const ChevronDown = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const ChevronRight = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const CheckCircle2 = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
    <path d="m9 12 2 2 4-4"></path>
  </svg>
);

const Circle = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
  </svg>
);

const Clock = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const Target = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const Book = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </svg>
);

const AlertCircle = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
);

function App() {
  const [expandedTiers, setExpandedTiers] = useState({});
  const [expandedTopics, setExpandedTopics] = useState({});
  const [completedTasks, setCompletedTasks] = useState({});
  const [activeLevel, setActiveLevel] = useState({});

  // localStorage에서 진도 불러오기
  useEffect(() => {
    const savedProgress = localStorage.getItem('cms-tracker-progress');
    if (savedProgress) {
      try {
        const parsed = JSON.parse(savedProgress);
        setCompletedTasks(parsed.completedTasks || {});
        setActiveLevel(parsed.activeLevel || {});
        setExpandedTiers(parsed.expandedTiers || {});
        setExpandedTopics(parsed.expandedTopics || {});
      } catch (e) {
        console.error('Failed to load progress:', e);
      }
    }
  }, []);

  // 진도 변경 시 localStorage에 저장
  useEffect(() => {
    const progress = {
      completedTasks,
      activeLevel,
      expandedTiers,
      expandedTopics,
      lastUpdated: new Date().toISOString()
    };
    localStorage.setItem('cms-tracker-progress', JSON.stringify(progress));
  }, [completedTasks, activeLevel, expandedTiers, expandedTopics]);

  const toggleTier = (tierId) => {
    setExpandedTiers(prev => ({ ...prev, [tierId]: !prev[tierId] }));
  };

  const toggleTopic = (topicId) => {
    setExpandedTopics(prev => ({ ...prev, [topicId]: !prev[topicId] }));
  };

  const toggleTask = (taskId) => {
    setCompletedTasks(prev => ({ ...prev, [taskId]: !prev[taskId] }));
  };

  const toggleLevel = (topicId, level) => {
    setActiveLevel(prev => ({ ...prev, [topicId]: prev[topicId] === level ? null : level }));
  };

  const calculateProgress = (tier) => {
    let totalTasks = 0;
    let completedCount = 0;

    tier.topics.forEach(topic => {
      if (topic.tasks) {
        topic.tasks.forEach((_, index) => {
          totalTasks++;
          const taskId = `${topic.id}-task-${index}`;
          if (completedTasks[taskId]) completedCount++;
        });
      }
    });

    return totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;
  };

  const calculateTotalProgress = () => {
    let totalTasks = 0;
    let completedCount = 0;

    frameworkData.tiers.forEach(tier => {
      tier.topics.forEach(topic => {
        if (topic.tasks) {
          topic.tasks.forEach((_, index) => {
            totalTasks++;
            const taskId = `${topic.id}-task-${index}`;
            if (completedTasks[taskId]) completedCount++;
          });
        }
      });
    });

    return totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;
  };

  const getTotalHours = (tier) => {
    return tier.topics.reduce((sum, topic) => sum + (topic.hours || 0), 0);
  };

  // Content 렌더링 함수
  const renderContent = (content) => {
    if (!content || !content.sections) return null;

    return (
      <div className="content-section">
        {content.sections.map((section, idx) => (
          <div key={idx} className="mb-4">
            {section.heading && <h3 className="font-bold text-lg mb-2">{section.heading}</h3>}
            {section.content && <p className="mb-2">{section.content}</p>}
            {section.list && (
              <ul className="list-disc pl-6 mb-2">
                {section.list.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            )}
            {section.code && (
              <pre className="bg-slate-800 text-slate-100 p-4 rounded-lg overflow-x-auto mb-2">
                <code>{section.code}</code>
              </pre>
            )}
            {section.steps && (
              <div className="space-y-2">
                {section.steps.map((step, i) => (
                  <div key={i}>
                    <p className="font-semibold">{step.label}: {step.text}</p>
                    {step.code && (
                      <pre className="bg-slate-800 text-slate-100 p-3 rounded-lg overflow-x-auto mt-1">
                        <code>{step.code}</code>
                      </pre>
                    )}
                    {step.note && <p className="text-sm text-slate-600 mt-1">{step.note}</p>}
                  </div>
                ))}
              </div>
            )}
            {section.checklist && (
              <>
                <ul className="list-none pl-0">
                  {section.checklist.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span>□</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {section.nextStep && (
                  <p className="mt-3 font-semibold">다음 단계: {section.nextStep}</p>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">
            CMS 운영 학습 프레임워크
          </h1>
          <p className="text-slate-600 mb-6 text-sm sm:text-base">
            CapRover + Docker 환경에서 멀티 컨테이너 CMS 운영을 위한 체계적 학습 로드맵
          </p>

          {/* Overall Progress */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4 border border-indigo-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-slate-700">전체 진도율</span>
              <span className="text-2xl font-bold text-indigo-600">{calculateTotalProgress()}%</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${calculateTotalProgress()}%` }}
              />
            </div>
          </div>
        </div>

        {/* Tiers */}
        {frameworkData.tiers.map((tier) => {
          const progress = calculateProgress(tier);
          const isExpanded = expandedTiers[tier.id];

          return (
            <div key={tier.id} className="mb-4">
              <div className={`rounded-xl shadow-md border-2 overflow-hidden ${tier.color}`}>
                {/* Tier Header */}
                <button
                  onClick={() => toggleTier(tier.id)}
                  className="w-full p-4 sm:p-5 text-left hover:opacity-80 transition-opacity"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 sm:gap-3 mb-2">
                        {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                        <h2 className="text-lg sm:text-xl font-bold">{tier.name}</h2>
                        <span className="text-xs sm:text-sm opacity-75">({tier.period})</span>
                      </div>
                      <p className="text-xs sm:text-sm ml-7 sm:ml-9 opacity-90">📌 {tier.reason}</p>
                      <div className="flex items-center gap-3 sm:gap-4 ml-7 sm:ml-9 mt-2 text-xs sm:text-sm">
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{getTotalHours(tier)}시간</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Target size={14} />
                          <span>{tier.topics.length}개 주제</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-xl sm:text-2xl font-bold mb-1">{progress}%</div>
                      <div className="w-16 sm:w-24 bg-white bg-opacity-50 rounded-full h-2">
                        <div
                          className="bg-current h-2 rounded-full transition-all duration-500"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </button>

                {/* Topics */}
                {isExpanded && (
                  <div className="bg-white p-4 sm:p-5 space-y-3">
                    {tier.topics.map((topic) => {
                      const isTopicExpanded = expandedTopics[topic.id];
                      const completedTaskCount = topic.tasks ? topic.tasks.filter((_, index) =>
                        completedTasks[`${topic.id}-task-${index}`]
                      ).length : 0;
                      const currentLevel = activeLevel[topic.id];

                      return (
                        <div key={topic.id} className="border border-slate-200 rounded-lg overflow-hidden">
                          {/* Topic Header */}
                          <button
                            onClick={() => toggleTopic(topic.id)}
                            className="w-full p-3 sm:p-4 text-left hover:bg-slate-50 transition-colors"
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  {isTopicExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                                  <h3 className="font-semibold text-slate-800 text-sm sm:text-base">{topic.id}. {topic.name}</h3>
                                </div>
                                <p className="text-xs sm:text-sm text-slate-600 ml-5 sm:ml-6">{topic.goal}</p>
                                <div className="flex items-center gap-2 ml-5 sm:ml-6 mt-2 flex-wrap">
                                  <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                                    ⏱️ {topic.hours}시간
                                  </span>
                                  {topic.tasks && topic.tasks.length > 0 && (
                                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                                      ✓ {completedTaskCount}/{topic.tasks.length} 완료
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </button>

                          {/* Topic Details */}
                          {isTopicExpanded && (
                            <div className="border-t border-slate-200">
                              {/* Learning Level Tabs */}
                              {topic.content && (
                                <div className="bg-slate-50 border-b border-slate-200">
                                  <div className="flex gap-2 p-3 sm:p-4 overflow-x-auto">
                                    <button
                                      onClick={() => toggleLevel(topic.id, 'beginner')}
                                      className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                                        currentLevel === 'beginner'
                                          ? 'bg-green-100 text-green-800 border-2 border-green-300'
                                          : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-100'
                                      }`}
                                    >
                                      🌱 초급
                                    </button>
                                    <button
                                      onClick={() => toggleLevel(topic.id, 'intermediate')}
                                      className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                                        currentLevel === 'intermediate'
                                          ? 'bg-blue-100 text-blue-800 border-2 border-blue-300'
                                          : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-100'
                                      }`}
                                    >
                                      🚀 중급
                                    </button>
                                    <button
                                      onClick={() => toggleLevel(topic.id, 'advanced')}
                                      className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                                        currentLevel === 'advanced'
                                          ? 'bg-purple-100 text-purple-800 border-2 border-purple-300'
                                          : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-100'
                                      }`}
                                    >
                                      ⚡ 고급
                                    </button>
                                  </div>
                                </div>
                              )}

                              {/* Learning Content */}
                              {currentLevel && topic.content && topic.content[currentLevel] && (
                                <div className="p-4 sm:p-6 bg-gradient-to-br from-white to-slate-50">
                                  <div className="flex items-center gap-2 mb-4">
                                    <Book className="text-indigo-600" size={20} />
                                    <h4 className="font-bold text-base sm:text-lg text-slate-800">
                                      {topic.content[currentLevel].title}
                                    </h4>
                                  </div>
                                  <div className="bg-white rounded-lg p-4 sm:p-5 shadow-sm border border-slate-200">
                                    {renderContent(topic.content[currentLevel])}
                                  </div>
                                </div>
                              )}

                              {/* Keywords and Tasks */}
                              {!currentLevel && (
                                <div className="p-3 sm:p-4 bg-slate-50">
                                  {/* Keywords */}
                                  {topic.keywords && (
                                    <div className="mb-4">
                                      <p className="text-xs font-semibold text-slate-600 mb-2">🏷️ 키워드</p>
                                      <div className="flex flex-wrap gap-2">
                                        {topic.keywords.map((keyword, idx) => (
                                          <span
                                            key={idx}
                                            className="text-xs bg-white text-slate-700 px-2 py-1 rounded border border-slate-200"
                                          >
                                            {keyword}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {/* Tasks */}
                                  {topic.tasks && topic.tasks.length > 0 && (
                                    <div>
                                      <p className="text-xs font-semibold text-slate-600 mb-2">✅ 실습 과제</p>
                                      <div className="space-y-2">
                                        {topic.tasks.map((task, index) => {
                                          const taskId = `${topic.id}-task-${index}`;
                                          const isCompleted = completedTasks[taskId];

                                          return (
                                            <button
                                              key={taskId}
                                              onClick={() => toggleTask(taskId)}
                                              className="w-full flex items-start gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow text-left"
                                            >
                                              {isCompleted ? (
                                                <CheckCircle2 size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                                              ) : (
                                                <Circle size={18} className="text-slate-300 flex-shrink-0 mt-0.5" />
                                              )}
                                              <span className={`text-xs sm:text-sm ${isCompleted ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
                                                {task}
                                              </span>
                                            </button>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Footer */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mt-6 text-center text-xs sm:text-sm text-slate-600">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            <AlertCircle size={16} className="text-indigo-600" />
            <span>각 주제를 클릭하고 <strong>초급/중급/고급</strong> 버튼으로 단계별 학습 내용을 확인하세요</span>
          </p>
          <p className="mt-2">실습 과제를 클릭하여 완료 표시를 하면 진도가 자동으로 계산됩니다</p>
          <p className="mt-4 text-xs text-slate-500">
            💡 진도는 자동으로 저장됩니다
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
