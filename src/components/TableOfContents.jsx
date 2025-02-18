import './TableOfContents.css';
import PropTypes from 'prop-types'; // 如需类型检查需要安装

function TableOfContents({ sections }) {
  return (
    <div className="table-of-contents">
      <div className='toc-inner-container'>
        <div className="toc-header">
          <h2>Table of Contents</h2>
        </div>
        <div className="toc-content">
          {sections.map((section, index) => (
            <>
              <div key={index} className="toc-section">
                <div className='toc-inner-section'>
                  <h3 className='dot-before'><a href={section.title.href}>{section.title.name}</a></h3>
                  <ul>
                    {section.items.map((item, i) => (
                      <li className='dot-before' key={i}><a href={item.href}>{item.name}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* 最后一个 section 后不加分割线 */}
              {index !== sections.length - 1 && (
                <div className="toc-divider" />
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

TableOfContents.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.shape({
        name: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired
      }),
      items: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired
        })
      )
    })
  ).isRequired
};

export default TableOfContents;
