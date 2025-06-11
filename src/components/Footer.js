import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const location = useLocation();
  const currentPath = location.pathname;
   const { t } = useTranslation();
  const activeFilter = 'brightness(0) saturate(100%) invert(91%) sepia(72%) saturate(2675%) hue-rotate(1deg) brightness(100%) contrast(101%)';
  const activeColor = '#ffc600';

  return (

    <div class="uni-body pages-index-index">

      <uni-app class="uni-app--showtabbar uni-app--maxwidth">


        <uni-tabbar
          class="uni-tabbar-bottom" >
          <div class="uni-tabbar" style={{ backgroundColor: '#1d1b23', backdropFilter: 'none',width: '100%' }}>
            <div class="uni-tabbar-border" style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)' }}></div>
            <div class="uni-tabbar__item">
            <Link to="/dashboard"style={{ textDecoration: "none", color: "inherit",cursor: "none"  }}>
                <div class="uni-tabbar__bd" style={{ height: '65px' }}>
                  <div class="uni-tabbar__icon" style={{ width: '24px', height: '24px' }}>
                    
                  <img
                      src="/static/tabbar/home.png"
                      style={{
                        filter: currentPath === '/dashboard' ? activeFilter : 'brightness(1) invert(0)',
                      }}
                      alt="Home"
                    />
                    
                    </div>
                  <div  className="uni-tabbar__label"
                    style={{
                      color:
                        currentPath === '/dashboard' ? '#ffc600' : '#fff',
                      fontSize: '13px',
                      lineHeight: 'normal',
                      marginTop: '3px',
                    }}>
                    {t('Home')} </div>
                </div>
              </Link>
            </div>
            <div class="uni-tabbar__item">
            <Link to="/quality"style={{ textDecoration: "none", color: "inherit",cursor: "none" }}>

                <div class="uni-tabbar__bd" style={{ height: '65px' }}>
                  <div class="uni-tabbar__icon" style={{ width: '24px', height: '24px' }}>
                    
                  <img
                      src="/static/tabbar/trade.png"
                      style={{
                        filter: currentPath === '/quality' ? activeFilter : 'brightness(1) invert(0)',
                      }}
                      alt="Trade"
                    />
                    
                    
                    </div>
                  <div  className="uni-tabbar__label"
                    style={{
                      color:
                        currentPath === '/quality' ? '#ffc600' : '#fff',
                      fontSize: '13px',
                      lineHeight: 'normal',
                      marginTop: '3px',
                    }}>
                    {t('Quality')} </div>
                </div>
                </Link>
            </div>
            <div class="uni-tabbar__item">
            <Link to="/assets"style={{ textDecoration: "none", color: "inherit", cursor: "none" }}>

                <div class="uni-tabbar__bd" style={{ height: '65px' }}>
                  <div class="uni-tabbar__icon" style={{ width: '24px', height: '24px' }}>
                    
                    
                  <img
                      src="/static/tabbar/assets.png"
                      style={{
                        filter: currentPath === '/assets' ? activeFilter : 'brightness(1) invert(0)',
                      }}
                      alt="Assets"
                    />
                    
                    
                    </div>
                  <div  className="uni-tabbar__label"
                    style={{
                      color:
                        currentPath === '/assets' ? '#ffc600' : '#fff',
                      fontSize: '13px',
                      lineHeight: 'normal',
                      marginTop: '3px',
                    }}>
                    {t('Assets')} </div>
                </div>
              </Link>
            </div>
            <div class="uni-tabbar__item">
            <Link to="/profile"style={{ textDecoration: "none", color: "inherit",cursor: "none" }}>

                <div class="uni-tabbar__bd" style={{ height: '65px' }}>
                  <div class="uni-tabbar__icon" style={{ width: '24px', height: '24px' }}>
                  <img
                      src="/static/tabbar/user.png"
                      style={{
                        filter: currentPath === '/profile' ? activeFilter : '',
                      }}
                      alt="Server"
                    />
                    
                    </div>
                  <div className="uni-tabbar__label"
                    style={{
                      color:
                        currentPath === '/profile' ? '#ffc600' : '#fff',
                      fontSize: '13px',
                      lineHeight: 'normal',
                      marginTop: '3px',
                    }}>
                    {t('Profile')} </div>
                </div>
              </Link>
            </div>
          </div>  
          <div class="uni-placeholder" style={{ height: '65px' }}></div>
        </uni-tabbar>
      </uni-app>
    </div>  
  );
}