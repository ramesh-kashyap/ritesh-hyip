import React from 'react';

const UserProfileCard = () => {
  const cardStyle = {
    background: 'linear-gradient(#FFD429, rgb(217, 154, 40))',
    borderRadius: '16px',
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    color: '#000',
    fontFamily: 'Arial, sans-serif',
    // boxShadow: '0 0 10px rgba(0, 255, 100, 0.1)',
    position: 'relative',
    maxWidth: '500px',
  };

  const logoStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '16px',
  };

  const iconImgStyle = {
    width: '40px',
    height: '40px',
  };

  const contentStyle = {
    flex: 1,
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '6px',
  };

  const rowStyle = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '11px',
    marginTop: '4px',
  };

  const labelStyle = {
    color: 'rgb(0 0 0)',
    marginLeft:'6px',
    marginRight: '8px',
  };

  const codeStyle = {
    color: '#000',
    marginRight: '6px',
  };

  const copyBoxStyle = {
    width: '16px',
    height: '16px',
    background: '#17171b',
    borderRadius: '3px',
    display: 'inline-block',
  };

  const editButtonStyle = {
    background: '#171b20',
    border: 'none',
    borderRadius: '20px',
    color: 'rgb(255 255 255)',
    padding: '6px 14px',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    position: 'absolute',
    right: '16px',
    top: '16px',
  };

  return (
    <div style={cardStyle}>
      <div style={logoStyle}>
        <img
          src="fav.png" // replace with your logo path
          alt="Logo"
          style={iconImgStyle}
        />
      </div>

      <div style={contentStyle}>
        <div style={titleStyle}>JoinK</div>

        <div style={rowStyle}>
          <span style={labelStyle}>UID:</span>
          <span style={codeStyle}>106965</span>
          <span style={copyBoxStyle}></span>

          <span style={{ marginLeft: '16px', ...labelStyle }}>Invitation Code:</span>
          <span style={codeStyle}>P5B6W6</span>
          <span style={copyBoxStyle}></span>
        </div>
      </div>

      <button style={editButtonStyle}>Edit</button>
    </div>
  );
};

export default UserProfileCard;