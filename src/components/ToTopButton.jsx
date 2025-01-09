import React, { useState, useEffect } from 'react';

const ToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // 检测滚动位置，控制箭头是否显示
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // 滚动到页面顶部
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // 平滑滚动效果
        });
    };

    return (
        <div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    style={styles.scrollToTopButton}
                >
                    ⬆
                </button>
            )}
        </div>
    );
};

const styles = {
    scrollToTopButton: {
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        width: '50px',
        height: '50px',
        backgroundColor: 'bisque',
        color: 'black',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        fontSize: '24px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
};

export default ToTopButton;
