import React, { useState } from "react";
import EyeMouse from "../components/mouse/EyeMouse";
import FaceMeshCam from "../components/faceMesh/FaseMeshCam";
import EyeCard from "../components/atoms/EyeCard";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { SETTING_MODE } from "../recoil/Atoms";
import { AiFillCheckCircle } from "react-icons/ai"
import './Setting.css'

const Setting = () =>{
    let navigate = useNavigate();
    let [settingMode, setSettingMode] = useRecoilState(SETTING_MODE)
    
    let defaultSettingContent = [
        "Enjoy the Eyetist with a preset setting",
        "It's easy to get started quickly, but it may not be very detailed."
    ]

    let customSettingContent = [
        "Enjoy the Eyetist with customized setting.",
        "You can use the service more comfortably."
    ]

    let loginContent = [
        "Click this button to log in Eyetist."
    ]

    return(
        <div className = "information-main-container">
            <ul className="lines">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <EyeMouse />
            <div className="information-top-container">
                <div className = "information-title">
                    EyeTist
                </div>
                <div className="information-cam">
                    <FaceMeshCam />
                </div>
            </div>

            <div className = "start-page-body-container">
                <div className = "box-container">
                    <div style={{width: "70%", height:"100%"}}>
                        <EyeCard 
                            style={{
                                width: "90%",
                                height: "45%",
                                backgroundColor: settingMode === "custom" ? "#f46969" : "grey",
                                borderRadius: "20px",
                                marginLeft: "30px",
                                marginRight: "30px",
                                marginBottom: "5%"
                            }}
                            title="< Custom Setting >"
                            content={customSettingContent}
                            hoverColor={settingMode === "custom" ? "#f46969" : "grey"}
                            clickColor="#f45555"
                            onClick={() => {
                                setSettingMode("custom")
                                navigate('/setting/eye')
                            }}
                        />
                        <EyeCard 
                            style={{
                                width: "90%",
                                height: "45%",
                                backgroundColor: settingMode === "default" ? "#f46969" : "grey",
                                borderRadius: "20px",
                                marginLeft: "30px",
                                marginRight: "30px",
                            }}
                            title="< Default Setting >"
                            content={defaultSettingContent}
                            hoverColor={settingMode === "default" ? "#f46969" : "grey"}
                            clickColor="#f45555"
                            onClick={() => {
                                setSettingMode("default")
                            }}
                        />
                    </div>
                    <EyeCard 
                        style={{
                            width: "30%",
                            height: "100%",
                            backgroundColor: "#f79393",
                            borderRadius: "20px",
                            marginLeft: "30px",
                            marginRight: "30px"
                        }}
                        title="Login"
                        content={loginContent}
                        hoverColor="#f46969"
                        clickColor="#f45555"
                        onClick={() => {
                            navigate('/login')
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
export default Setting;