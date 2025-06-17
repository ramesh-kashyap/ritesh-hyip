import React from 'react';

const FeatureIconsBar = () => {
  const containerStyle = {
    background: 'linear-gradient(135deg, rgb(78, 78, 81), rgb(27, 27, 30))',
    borderRadius: '16px',
    padding: '16px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '700px',
    margin: 'auto',
    color: '#fff',
    marginTop:'10px',
    border:'1px solid #534e4e'
  };

  const itemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '13px',
  };

  const iconWrapperStyle = {
    backgroundColor: '#1c1c1c',
    borderRadius: '50%',
    padding: '3px',
    marginBottom: '6px',
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor:'pointer'
  };

  const iconImgStyle = {
    width: '30px',
    height: '30px',
  };

  const features = [
    {
      name: 'My Income',
      icon: '/static/img/icons8-income-100.png',
    },
    {
      name: 'About Us',
      icon: '/static/img/icons8-book-100.png',
    },
    {
      name: 'Terms Of Use',
      icon: '/static/img/icons8-copy-96.png',
    },
    {
      name: 'Record',
      icon: '/static/img/icons8-order-100.png',
    },
  ];

  return (
    <div style={containerStyle}>
      {features.map((item, index) => (
        <div key={index} style={itemStyle}>
          <div style={iconWrapperStyle}>
            <img src={item.icon} alt={item.name} style={iconImgStyle} />
          </div>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default FeatureIconsBar;