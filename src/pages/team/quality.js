import React, { useState, useEffect } from "react";
import Slider from "react-slick";
// App.js ya index.js me
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Api from "../../Requests/Api";
import { Toaster, toast } from 'react-hot-toast';
const Server = () => {
   const [activeTab, setActiveTab] = useState("running");
//    const [slides, setSlides] = useState([]);
   const [servers, setQualitys] = useState([])
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
 const [slides, setSlides] = useState([
   {
      title: "VIP 1",
      heading: "VIP 1 Upgrade Conditions",
      text: "Not Unlock This level Yet",
      text1: "Optional investment period (hours): 12",
      text2: "To: 24",
      price: "vi1-DkyC-7lK",
      days: 7,
      purchased: false,
      effectiveAmount: "10",
      tradeAmount:"30",
      maxtradeAmount:"500",
    Vm1: "1%",
    Vm2: "1%",
    Vm3: "1%",
    Vm4: "1%",
   },
   {
      title: "VIP 2",
      heading: "VIP 2 Upgrade Conditions",
      text: "Amount that can be invested $: 100-300",
      text1: "Optional investment period (hours): 24",
      text2: "To: 48",
      price: "vi2-CCAxt9OI",
      days: 15,
      purchased: true,
      effectiveAmount: "12",
      tradeAmount:"500",
      maxtradeAmount:"2000",
    Vm1: "2%",
    Vm2: "2%",
    Vm3: "2%",
    Vm4: "2%",
   },
   {
      title: "VIP 3",
      heading: "VIP 3 Upgrade Conditions",
      text: "Amount that can be invested $: 100-300",
      text1: "Optional investment period (hours): 24",
      text2: "To: 48",
      price: "vi2-CCAxt9OI",
      days: 15,
      purchased: true,
      effectiveAmount: "15",
      tradeAmount:"2000",
      maxtradeAmount:"5000",
      Vm1: "3%",
      Vm2: "3%",
      Vm3: "3%",
      Vm4: "3%",
   },
   {
      title: "VIP 4",
      heading: "VIP 4 Upgrade Conditions",
      text: "Amount that can be invested $: 100-300",
      text1: "Optional investment period (hours): 24",
      text2: "To: 48",
      price: "vi2-CCAxt9OI",
      days: 15,
      purchased: true,
      effectiveAmount: "20",
      tradeAmount:"5000",
      maxtradeAmount:"15000",
    Vm1: "4%",
    Vm2: "4%",
    Vm3: "4%",
    Vm4: "4%",
   },
   {
      title: "VIP 5",
      heading: "VIP 5 Upgrade Conditions",
      text: "Amount that can be invested $: 100-300",
      text1: "Optional investment period (hours): 24",
      text2: "To: 48",
      price: "vi2-CCAxt9OI",
      days: 15,
      purchased: true,
      effectiveAmount: "25",
      tradeAmount:"15000",
      maxtradeAmount:"45000",
    Vm1: "5%",
    Vm2: "5%",
    Vm3: "5%",
    Vm4: "5%",
   },
    {
      title: "VIP 5",
      heading: "VIP 5 Upgrade Conditions",
      text: "Amount that can be invested $: 100-300",
      text1: "Optional investment period (hours): 24",
      text2: "To: 48",
      price: "vi2-CCAxt9OI",
      days: 15,
      purchased: true,
      effectiveAmount: "25",
      tradeAmount:"45000",
      maxtradeAmount:"135000",
    Vm1: "5%",
    Vm2: "5%",
    Vm3: "5%",
    Vm4: "5%",
   }
]);

    useEffect(()=>{
        fetchvip();
      })
   const handleBuyClick = async (slideData) => {

      const max = slideData.text.split("-")[1].replace("$", "");      
      // return false;
      
      try {
         const response = await Api.post('/submitserver', {
            amount: max,     // Extracts "30"
            period: slideData.text1.split(": ")[1],    // Extracts "8, 12"
            period_end: slideData.text2.split(": ")[1],
            title:slideData.title,
            plan: slideData.price,
            days: slideData.days,
         });
         if (response.data.success) {
            //  fetchwallet();
            toast.success("Purchase successful", response.data.message);
            // console.log("Purchase successful");
         } else {
            toast.error(response.data.message);
            console.error(response.data);
         }
      } catch (error) {
         toast.error("Error making purchase:", error);
         // console.error("Error making purchase:", error);
      }
   };

  const fetchvip = async () => {
      try {  
         const response = await Api.get('/fetchvip');       
         console.log(response.data);
         if (response.data?.success) {
            setQualitys(response.data); 
         } else {
            console.error("API did not return success");
         }
      } catch (error) {
         console.error("Error fetching servers:", error);
      }
   };


   const PLAN_IMAGES = {
      0: "S1",
      5: "S2",
      10: "S3",
      50: "S4",
      120: "S5",
      340: "S6",
   };
   const getImageName = (plan) => PLAN_IMAGES[plan] || "S1";

   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
   };
   return (
      <div class="uni-body pages-server-server">
         <uni-app class="uni-app--showtabbar uni-app--maxwidth">
            <uni-page
               data-page="pages/server/server">

               <uni-page-wrapper>
                  <uni-page-body>
                     <Toaster position="top-right" reverseOrder={false} />
                     <uni-view data-v-7542ab04=""
                        class="page" style={{paddingBottom:90}}>
                        <uni-view data-v-7542ab04="" class="ellipse"></uni-view>
                        <uni-view
                           data-v-7542ab04="" class="page-title">Trade</uni-view>
                        <uni-view data-v-7542ab04=""
                           class="top-card">
                           <img data-v-7542ab04="" src="/static/img/server-icon.png" alt="" />
                           <uni-view
                              data-v-7542ab04="" class="title">Start Trading Now!</uni-view>
                           <uni-view
                              data-v-7542ab04="" class="text">Buying a higher-tier server will give you a better
                              experience and greater advantages
                           </uni-view>
                        </uni-view>
                        <uni-view data-v-7cdca4f6="" class="top-group" style={{ marginTop: '10px' }}>
                           <uni-view
                              data-v-7cdca4f6=""
                              class="top-btn selected"
                              onClick={() => setActiveTab("running")}
                              style={{width:"100%",
                                 backgroundColor:
                                    activeTab === "running"
                                       ? "#ffc600"
                                       : "rgb(255, 255, 255)",
                                 color:
                                    activeTab === "running" ? "#000" : "rgb(112, 112, 112)",
                                 transition: "all 0.3s ease",
                              }}
                           >
                              Smart Trade Core Quantization
                           </uni-view>


                        </uni-view>
                        <uni-view data-v-7542ab04="" class="container" >
                           {/* {activeTab  ( */}

                              <uni-swiper data-v-7542ab04="" class="swiper">
                                 <div class="uni-swiper-wrapper">
                                    <div class="uni-swiper-slides">
                                       <div class="uni-swiper-slide-frame"
                                          style={{ width: '100%', height: '340px', transform: 'translate(0%, 0px) translateZ(0px)' }}>

                                          <uni-swiper-item
                                             data-v-7542ab04="" class="product-card" style={{ marginTop: '10px', borderRadius: '10px', backgroundColor: 'hsla(0, 0%, 100%, .101960784313725' }}
                                          >
                                             <Slider {...settings} beforeChange={(oldIndex, newIndex) => setCurrentSlideIndex(newIndex)}>                                                
                                                {slides.map((slide, index) => (
                                                   <uni-view data-v-b19b400c="" key={index}>
                                                    <div>
                                                      <uni-view
                                                         data-v-b19b400c="" class="box" >
                                                         <uni-view data-v-b19b400c=""
                                                            class="left"><img data-v-b19b400c=""
                                                               src="/static/img/cardleft.png"
                                                               alt="" /></uni-view>
                                                         <uni-view data-v-b19b400c=""
                                                            class="mid">
                                                            <uni-view data-v-b19b400c=""
                                                               class="card-header" style={{marginBottom:40}}>
                                                               {/* <uni-view data-v-b19b400c="" style={{ marginTop: '20px' }}
                                                                  class="title">{slide.title}
                                                               </uni-view> */}
                                                               <uni-text data-v-b19b400c="" className="price" style={{ display: 'flex', alignItems: 'center', gap: '5px' , marginBottom:-50}}>
  
  {/* {slide.title} */}
  <span style={{ fontSize: '30px', lineHeight: '17px', color: 'rgb(36 33 33 / 50%)', fontWeight:700, marginBottom:10 }}>
    {slide.title}
  </span>
  <img src={`/static/img/${slide.price}.png`} alt="plan" style={{ width: '120px', marginLeft:100 }} />
</uni-text>

                                                            </uni-view>
                                                            {/* <img src="/static/img/kdje.png" alt="plan" style={{ width: '150px',marginTop:10 }} /> */}
                                                            <uni-view
                                                               data-v-b19b400c="" class="card-body">
                                                               <uni-view data-v-b19b400c="" class="benefit-item">
                                                                  <img data-v-b19b400c="" src="/static/img/153.png" alt="" style={{ width: '20px', marginRight: '5px',filter:'brightness(0.66) invert(0)' }} />
                                                                  <uni-text
                                                                     data-v-b19b400c=""
                                                                     class="benefit-text"><span>{slide.text}</span>
                                                                  </uni-text>

                                                               </uni-view>
                                                                 <uni-view
                                                               data-v-b19b400c=""
                                                               class="card-title">{slide.heading}</uni-view>
                                                            </uni-view>
           
                                                            <uni-view class="card-footer">
                                                               <uni-button
                                                                  className={slide.purchased ? 'unsubscribe-button' : 'subscribe-button'}
                                                                  style={{
                                                                     borderRadius: '70px',

                                                                     border: slide.purchased ? '1px solid #c3c3c3' : 'none',
                                                                     backgroundColor: slide.purchased ? '#f0f0f0' : '#ffc600',
                                                                     color: slide.purchased ? '#888' : '#000', // black text on cyan
                                                                     cursor: slide.purchased ? 'not-allowed' : 'pointer'
                                                                  }}
                                                                  onClick={() => handleBuyClick(slide)}
                                                                  disabled={slide.purchased}
                                                               >
                                                                  {slide.purchased ? "Not Achieved" : "Achieved"}
                                                               </uni-button>
                                                            </uni-view>

                                                         </uni-view>
                                                         <uni-view
                                                            data-v-b19b400c="" class="right"><img data-v-b19b400c=""
                                                               src="/static/img/cardright.png"
                                                               alt="" /></uni-view>
                                                      </uni-view>
                                                      </div>
                                                   </uni-view>
                                                ))}
                                             </Slider>
                                          </uni-swiper-item>


                                       </div>
                                    </div>
                                 </div> 
                                 <uni-view data-v-0f43bbff="" class="rule-box">
                  <uni-view data-v-0f43bbff="" class="title">{slides[currentSlideIndex]?.heading || "VIP Upgrade Conditions"}</uni-view>
                  <uni-view data-v-0f43bbff="" class="layout">
                    <uni-view data-v-0f43bbff="" class="level">
                      {/* <img data-v-0f43bbff="" src="/static/img/Vm1.png" alt=""style={{filter: 'brightness(0.72) invert(0)'}} /> */}
                      Effective Amount</uni-view>
                    <uni-view data-v-0f43bbff="" class="rate">${servers.balance || 0}/ ${slides[currentSlideIndex]?.tradeAmount || "10%"}</uni-view>
                  </uni-view>
                  <uni-view data-v-0f43bbff="" class="layout">
                    <uni-view data-v-0f43bbff="" class="level">
                      {/* <img data-v-0f43bbff="" src="/static/img/Vm2.png" alt=""style={{filter: 'brightness(0.72) invert(0)'}} /> */}
                      First Generation Valid Members</uni-view>
                    <uni-view data-v-0f43bbff="" class="rate">{servers.directmembers || 0}</uni-view>
                  </uni-view>
                  <uni-view data-v-0f43bbff="" class="layout">
                    <uni-view data-v-0f43bbff="" class="level">
                      {/* <img data-v-0f43bbff="" src="/static/img/Vm3.png" alt="" style={{filter: 'brightness(0.72) invert(0)'}}/> */}
                      Second Generation Valid Members</uni-view>
                    <uni-view data-v-0f43bbff="" class="rate">{servers?.sponsor?.teamBCount || 0}</uni-view>
                  </uni-view>
                  <uni-view data-v-0f43bbff="" class="layout">
                    <uni-view data-v-0f43bbff="" class="level">
                      {/* <img data-v-0f43bbff="" src="/static/img/Vm4.png" alt=""style={{filter: 'brightness(0.72) invert(0)'}} /> */}
                      Third Generation Valid Members</uni-view>
                    <uni-view data-v-0f43bbff="" class="rate">{servers?.sponsor?.teamCCount || 0}</uni-view>
                  </uni-view>
                  
                </uni-view>   
                <uni-view data-v-0f43bbff="" class="rule-box">
                  <uni-view data-v-0f43bbff="" class="title">VIP Benefits</uni-view>
                  <uni-view data-v-0f43bbff="" class="layout">
                    <uni-view data-v-0f43bbff="" class="level">
                      {/* <img data-v-0f43bbff="" src="/static/img/Vm1.png" alt=""style={{filter: 'brightness(0.72) invert(0)'}} /> */}
                      Minimum Amount Quantifiction</uni-view>
                    <uni-view data-v-0f43bbff="" class="rate">${slides[currentSlideIndex]?.tradeAmount || "10%"}</uni-view>
                  </uni-view>
                  <uni-view data-v-0f43bbff="" class="layout">
                    <uni-view data-v-0f43bbff="" class="level">
                      {/* <img data-v-0f43bbff="" src="/static/img/Vm2.png" alt=""style={{filter: 'brightness(0.72) invert(0)'}} /> */}
                      Maximum Amount Quantifiction</uni-view>
                    <uni-view data-v-0f43bbff="" class="rate">${slides[currentSlideIndex]?.maxtradeAmount || "10%"}</uni-view>
                  </uni-view>
                  <uni-view data-v-0f43bbff="" class="layout">
                    <uni-view data-v-0f43bbff="" class="level">
                      {/* <img data-v-0f43bbff="" src="/static/img/Vm3.png" alt="" style={{filter: 'brightness(0.72) invert(0)'}}/> */}
                      Daily Quantified times</uni-view>
                    <uni-view data-v-0f43bbff="" class="rate">5%</uni-view>
                  </uni-view>
                  <uni-view data-v-0f43bbff="" class="layout">
                    <uni-view data-v-0f43bbff="" class="level">
                      {/* <img data-v-0f43bbff="" src="/static/img/Vm4.png" alt=""style={{filter: 'brightness(0.72) invert(0)'}} /> */}
                      return on investment</uni-view>
                    <uni-view data-v-0f43bbff="" class="rate">3%</uni-view>
                  </uni-view>
                  
                </uni-view>                              
                              </uni-swiper>
                              
                          
                              
                           {/* )} */}
                        </uni-view>

                     </uni-view>
                  </uni-page-body>
               </uni-page-wrapper>
            </uni-page>


         </uni-app>



      </div>
   );
};

export default Server;






