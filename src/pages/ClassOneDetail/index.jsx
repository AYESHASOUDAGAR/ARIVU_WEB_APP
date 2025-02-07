import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Img, Line, Text } from "components";

const ClassOneDetailPage = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleUpload = () => {
    // Replace 'YOUR_API_ENDPOINT' with the actual endpoint of your API
    const apiUrl = 'YOUR_API_ENDPOINT';
    let data={
        "class_name":'classOne',
        "sub_name":"sub1",
        "school_name":localStorage.getItem("user"),
        "video":inputValue,
        "pdf":""
    }
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(data);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://127.0.0.1:5000/school/add_class_video", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

  };

  const showPDF = () =>{
    let oneDrivePDFLink="https://drive.google.com/file/d/1rYQ28sH94Q7DSI8R__h4Efgj_2hvTnWq/view?usp=sharing"
    window.open(oneDrivePDFLink, '_blank');
  }

  const openVideo = () =>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "class_name": "classOne",
      "sub_name": "sub1",
      "school_name": "ayesha101@g.com"
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://127.0.0.1:5000/school/get_class_video", requestOptions)
      .then(response => response.text())
      .then(result => {console.log(result)
        window.open(result, '_blank');
      })
      .catch(error => console.log('error', error));
    
  }
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pb-[343px] w-full">
        <div className="flex flex-col gap-8 items-center justify-start w-full">
          <div className="h-[342px] md:px-5 relative w-full">
            <div className="flex flex-col items-center justify-start mb-[-1.49px] mx-auto w-full z-[1]">
              <div className="bg-white-A700 flex flex-col items-center justify-start py-[17px] w-full">
                <div className="flex flex-col justify-start mb-4 w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[63px] w-[93%] md:w-full">
                    <Text
                      className="common-pointer mb-0.5 text-black-900 text-xl"
                      size="txtInterSemiBold20Black900"
                      onClick={() => navigate("/dashboard")}
                    >
                      HOME
                    </Text>
                    <Img
                      className="h-[7px] md:ml-[0] ml-[13px] md:mt-0 mt-[9px]"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown"
                    />
                    <Text
                      className="common-pointer md:ml-[0] ml-[1171px] md:mt-0 mt-0.5 text-black-900 text-xl"
                      size="txtInterSemiBold20Black900"
                      onClick={() => navigate("/profile")}
                    >
                      PROFILE
                    </Text>
                  </div>
                  <Line className="bg-gray-700_03 h-px mt-2 w-full" />
                  <Img
                    className="common-pointer h-[30px] md:ml-[0] ml-[49px] mt-7 w-[30px]"
                    src="images/img_back.svg"
                    alt="back"
                    onClick={() => navigate(-1)}
                  />
                </div>
              </div>
              <Line className="bg-gray-700_03 h-px w-full" />
            </div>
            <div className="bg-blue-300 flex flex-col items-start justify-end mt-auto mx-auto p-[63px] md:px-10 sm:px-5 w-full">
              <Text
                className="mt-1.5 sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
                size="txtInterBold50Black900"
              >
                Class I
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[921px] mx-auto md:px-5 w-full">
            <div className="bg-white-A700 border border-black-900 border-solid flex md:flex-1 flex-col items-center justify-start mb-[7px] p-[17px] rounded-[20px] w-[24%] md:w-full">
              <Img
                className="common-pointer h-[138px] md:h-auto mb-[77px] mt-[51px] object-cover w-full"
                src="images/img_pngwing11.png"
                alt="pngwingEleven"
                onClick={() => navigate("/classonelive")}
              />
              
            </div>
            <div className="bg-white-A700 border border-black-900 border-solid flex md:flex-1 flex-col gap-[25px] items-center justify-start md:ml-[0] ml-[141px] md:mt-0 my-[3px] p-[31px] sm:px-5 rounded-[20px] w-[24%] md:w-full"
            >
              <Img
                className="h-[110px] md:h-auto object-cover w-[110px]"
                src="images/img_pngwing12.png"
                alt="pngwingTwelve"
              />
              <Text
                className="mb-[53px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtInterBold40"
              >
                Video
                
              </Text>
              
            <div>
              <button  onClick={() => setShowForm(true)} style={{border:'1px solid black',margin: '10px'}}>Upload</button>
              <button  onClick={() => openVideo()}>Play</button>

              {showForm && (
                <div className="popup-form">
                  <label>
                    Input:
                    <input type="text" value={inputValue} onChange={handleInputChange} />
                  </label>
                  <button onClick={handleUpload} style={{padding: '2%', bacjground:'whitesmoke', border:'1px solid black'}}>Submit</button>
                  <button onClick={() => setShowForm(false)}>Close</button>

                  {responseMessage && (
                    <p>{responseMessage}</p>
                  )}
                </div>
              )}
              </div>
            </div>
            <div className="bg-white-A700 border border-black-900 border-solid flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[119px] md:mt-0 mt-[7px] pb-3.5 px-3.5 rounded-[20px] w-[24%] md:w-full">
              <Img
                className="h-[249px] md:h-auto mb-[37px] object-cover w-full"
                src="images/img_pngwing13.png"
                alt="pngwingThirteen"
              />
              <button  onClick={() => showPDF()}>Open</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassOneDetailPage;
