import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import './LanguageSwitcher.css'; // 普通 CSS 文件

const LanguageSwitcher = () => {
  // 移除 TypeScript 类型注解
  const { lang } = useParams();
  const location = useLocation();

  // 更健壮的路径生成方法
  const getTargetPath = (targetLang) => {
    const isEnglish = location.pathname.includes('/en');
    if (isEnglish) {
        if (targetLang === 'en') {
            return location.pathname;
        } else {
            return location.pathname.replace('/en', '/zh');
        }
    } else {
        if (targetLang === 'en') {
            return location.pathname.replace('/zh','/en');
        } else {
            return location.pathname;
        }
    }
  };

  return (
    <div className="language-switcher">
      <Link
        to={getTargetPath('en')}
        className={`language-option ${lang === 'en' ? 'active' : ''}`}
      >
        English
      </Link>
      <span className="separator">/</span>
      <Link
        to={getTargetPath('zh')}
        className={`language-option ${lang === 'zh' ? 'active' : ''}`}
      >
        中文
      </Link>
    </div>
  );
};

export default LanguageSwitcher;
