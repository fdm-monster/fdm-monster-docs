import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

export default function Footer(): React.ReactElement | null {
  const { siteConfig } = useDocusaurusContext();
  const { footer } = siteConfig.themeConfig as any;

  if (!footer) {
    return null;
  }

  const { links, copyright } = footer;

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {links && links.length > 0 && (
          <div className={styles.footerLinks}>
            {links.map((linkItem) => (
              <div key={linkItem.title} className={styles.footerColumn}>
                <div className={styles.footerColumnTitle}>
                  {linkItem.title}
                </div>
                <ul className={styles.footerColumnList}>
                  {linkItem.items.map((item) => (
                    <li key={item.label} className={styles.footerColumnItem}>
                      {item.href ? (
                        <a
                          className={styles.footerLink}
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {item.label}
                          {item.href.startsWith('http') && (
                            <span className={styles.externalIcon}>↗</span>
                          )}
                        </a>
                      ) : (
                        <Link className={styles.footerLink} to={item.to}>
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {copyright && (
          <div className={styles.footerBottom}>
            <div
              className={styles.footerCopyright}
              dangerouslySetInnerHTML={{ __html: copyright }}
            />
          </div>
        )}
      </div>
    </footer>
  );
}

