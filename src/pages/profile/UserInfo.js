import React, { useEffect, useState } from 'react';

import { useNavigate, useLocation, Link } from 'react-router-dom';
import Api from "../../Requests/Api";
import { Toaster, toast } from 'react-hot-toast';
const UserInfo = () => {
    const [Notice, setNotices] = useState([]);
    const [error, setError] = useState("");
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await Api.get("/fetchnotice");
            if (response.data && response.data.success) {
                console.log(response.data);
                setNotices(response.data.notices);
            } else {
                setNotices([]);
            }

            console.log("Fetched:", response.data);
        } catch (err) {
            setError(err.response?.data?.error || "Error fetching history");
        }
    };

     const containerStyle = {
    // backgroundColor: '#0e0e0e',
    minHeight: '100vh',
    // padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#fff',
  };

  const avatarWrapper = {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: '20px',
  };

  const avatarStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const logoStyle = {
    width: '60px',
    height: '60px',
  };

  const cameraIconStyle = {
    position: 'absolute',
    bottom: '8px',
    right: 'calc(50% - 50px)',
    backgroundColor: '#222',
    borderRadius: '50%',
    padding: '6px',
    fontSize: '12px',
    border: '2px solid #000',
  };

  const formCardStyle = {
    background: 'linear-gradient(135deg, rgb(78, 78, 81), rgb(27, 27, 30))',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '30px',
  };

  const fieldStyle = {
    marginBottom: '18px',
    borderBottom: '1px solid #2a2a2a',
    paddingBottom: '10px',
  };

  const labelStyle = {
    fontSize: '14px',
    color: 'rgb(255 251 251)',
    marginBottom: '4px',
  };

  const rowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
  };

  const copyIconStyle = {
    width: '16px',
    height: '16px',
    background: 'linear-gradient(#FFD429, rgb(217, 154, 40))',
    borderRadius: '3px',
    marginLeft: '10px',
  };

  const saveButtonStyle = {
    width: '100%',
    background: 'linear-gradient(#FFD429, rgb(217, 154, 40))',
    padding: '14px',
    color: '#000',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
  };

    return (
        <div class="uni-body pages-index-message">
            <uni-app class="uni-app--maxwidth">
                <uni-page data-page="pages/index/message">
                    <uni-page-wrapper>
                        <uni-page-body>
                            <uni-view data-v-c62a6474="" class="page">
                                <uni-view data-v-c62a6474="" class="ellipse"></uni-view>
                                <uni-view data-v-c62a6474="" class="top-box">
                                    <uni-view data-v-636c600c="" data-v-c62a6474="" class="uni-row" style={{ marginLeft: '0px', marginRight: '0px' }}>
                                        <uni-view data-v-35b9a113="" data-v-c62a6474="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                            <Link to="/profile">
                                                <uni-view data-v-c62a6474="" class="back">
                                                    <img data-v-c62a6474="" src="/static/img/back.png" alt="" style={{ width: '35px', filter: 'brightness(1) invert(0)' }} />
                                                </uni-view>
                                            </Link>
                                        </uni-view>
                                        <uni-view data-v-35b9a113="" data-v-c62a6474="" class="uni-col uni-col-12" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                            <uni-view data-v-c62a6474="" class="page-title">Account Information</uni-view>
                                        </uni-view>
                                        <uni-view data-v-35b9a113="" data-v-c62a6474="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingright: '0px' }}></uni-view>
                                    </uni-view>
                                </uni-view>
                                {/* <uni-view data-v-c62a6474="" class="tabs-box">
                                    <uni-view data-v-c62a6474="" class="tab-item selected">All</uni-view>
                                    <uni-view data-v-c62a6474="" class="tab-item">News</uni-view>
                                    <uni-view data-v-c62a6474="" class="tab-item">Notice</uni-view>
                                    <uni-view data-v-c62a6474="" class="tab-item">System</uni-view>
                                    <uni-view data-v-c62a6474="" class="tab-item">Message</uni-view>
                                </uni-view> */}

                                 <div style={containerStyle}>
      {/* Avatar */}
      <div style={avatarWrapper}>
        <div style={avatarStyle}>
          <img
            src="fav.png"
            alt="Profile"
            style={logoStyle}
          />
        </div>
        {/* <div style={cameraIconStyle}>📷</div> */}
      </div>

      {/* Info Card */}
      <div style={formCardStyle}>
        <div style={fieldStyle}>
          <div style={labelStyle}>Nickname</div>
          <div style={rowStyle}>
            <span>LUMEX-106965</span>
          </div>
        </div>

        <div style={fieldStyle}>
          <div style={labelStyle}>Member Level</div>
          <div style={rowStyle}>
            <span>G0</span>
          </div>
        </div>

        <div style={fieldStyle}>
          <div style={labelStyle}>Mailbox</div>
          <div style={rowStyle}>
            <span>Rajronyks@Gmail.Com</span>
            <span style={copyIconStyle}></span>
          </div>
        </div>

        <div style={fieldStyle}>
          <div style={labelStyle}>Mobile Phone Number</div>
          <div style={rowStyle}>
            <span>7988886345</span>
            <span style={copyIconStyle}></span>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <button style={saveButtonStyle}>Save</button>
    </div>

                            </uni-view>
                        </uni-page-body>
                    </uni-page-wrapper>
                </uni-page>

            </uni-app>

        </div>
    );
};

export default UserInfo;




