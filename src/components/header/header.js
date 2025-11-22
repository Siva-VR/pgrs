// import React from 'react';
import './header.css';
import { useLanguage } from '../../contexts/LanguageContext';

const Header = () => {
    const { t } = useLanguage();

    return (
        <header className="header">
            <div className="header-content">
                {/* Left Section - Government Logo and Title */}
                <div className="logo-section">
                    <div className="govt-logo">
                        <img
                            src="ap-logo.png"
                            alt="Government Logo"
                            className="logo-img"
                        />
                    </div>
                    <div className="title-text">
                        <h1 className="main-title">{t.header.mainTitle}</h1>
                        <h2 className="sub-title">{t.header.subTitle}</h2>
                        <h3 className="system-title">{t.header.systemTitle}</h3>
                    </div>
                </div>

                {/* Center Section - CPGRAMS */}
                <div className="cpgrams-section">
                    <div className="cpgrams-box">
                        <h2 className="cpgrams-title">{t.header.cpgramsTitle}</h2>
                        <p className="cpgrams-subtitle">{t.header.cpgramsSubtitle1}</p>
                        <p className="cpgrams-subtitle">{t.header.cpgramsSubtitle2}</p>
                    </div>
                </div>

                {/* Right Section - Minister Info */}
                <div className="minister-section">
                    <div className="minister-info">
                        <h3 className="minister-name">{t.header.ministerName}</h3>
                        <p className="minister-designation">{t.header.ministerDesignation1}</p>
                        <p className="minister-designation">{t.header.ministerDesignation2}</p>
                        <p className="minister-designation">{t.header.ministerDesignation3}</p>
                    </div>
                    <div className="minister-photo">
                        <img
                            src="it_minister1.png"
                            alt="Minister"
                            className="minister-img"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;