import React from 'react';

const MyIncomeCard = () => {
  const cardStyle = {
    background: 'linear-gradient(135deg, rgb(78, 78, 81), rgb(27, 27, 30))',
    borderRadius: '12px',
    padding: '14px',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    border: '1px solid #2c2c2c',
    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '16px',
  };

  const sectionStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '8px 2px',
    borderBottom:'0.02rem dashed rgb(205 172 54)'
  };

  const labelStyle = {
    color: '#fff',
    fontSize: '14px',
    textAlign:'center'
  };

  const valueStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
      textAlign:'center'
  };

  const dividerStyle = {
    borderTop: '1px dashed #333',
    margin: '12px 0',
  };

  return (
    <div style={cardStyle}>
      <div style={headerStyle}>
        <span>My Income</span>
        <span style={{ color: 'rgb(206 171 53)', fontSize: '18px' }}>↗</span>
      </div>

      <div style={sectionStyle}>
        <div>
          <div style={labelStyle}>Total Income</div>
          <div style={valueStyle}>$5.16</div>
        </div>
        <div>
          <div style={labelStyle}>Today's Earnings</div>
          <div style={valueStyle}>$0</div>
        </div>
      </div>

      <div style={dividerStyle}></div>

      <div style={sectionStyle}>
        <div>
          <div style={labelStyle}>Trading Income</div>
          <div style={valueStyle}>$5.16</div>
        </div>
        <div>
          <div style={labelStyle}>Today's Trading Income</div>
          <div style={valueStyle}>$0</div>
        </div>
      </div>

      <div style={dividerStyle}></div>

      <div style={sectionStyle}>
        <div>
          <div style={labelStyle}> Community Income</div>
          <div style={valueStyle}>$0</div>
        </div>
        <div>
          <div style={labelStyle}>Today's Community Income</div>
          <div style={valueStyle}>$0</div>
        </div>
      </div>
    </div>
  );
};

export default MyIncomeCard;