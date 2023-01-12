import EyeButton from "../atoms/EyeButton"
import ColorSelection from "../../components/functionDetails/ColorSelection";
import WidthSelection from "../../components/functionDetails/WidthSelection";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { CURRENT_FUNCTION } from '../../recoil/Atoms';
import { useCanvas } from "../../components/canvas/CanvasContext";
import { BiRefresh } from "react-icons/bi"
import { FaRedoAlt, FaUndoAlt } from "react-icons/fa"
import { RiEraserFill } from "react-icons/ri"
import { BsPencilFill, BsZoomIn, BsZoomOut, BsPaintBucket, BsFillSave2Fill } from "react-icons/bs"

const TOOL_BUTTON_SIZE = window.innerWidth * 0.04
const TOOL_BUTTON_FONT_SIZE = window.innerWidth * 0.02

const toolButtonStyle = {
    width:TOOL_BUTTON_SIZE, 
    height:TOOL_BUTTON_SIZE, 
    fontSize:TOOL_BUTTON_FONT_SIZE,
    borderRadius:"5px", 
    backgroundColor:"inherit",
    color: "white",
    border: "1px solid #B4A5A5",
    marginLeft: "10px",
    marginRight: "10px",
    marginTop: "5px",
    marginBottom: "5px",
}

const ToolSelections = (props) => {
    const {clearCanvas, setDrawMode, setEraseMode, ReDoAndUnDo } = useCanvas()
    let setCurrentFunction = useSetRecoilState(CURRENT_FUNCTION)

    useEffect( () => {
        selectDraw()
    }, [])

    function selectDraw(){
        setDrawMode();
        setCurrentFunction("draw");
        props.setSelectedButton(
            <ColorSelection/>
        )
    }

    function selectFill(){
        setCurrentFunction("fill")
    }

    function selectErase(){
        setEraseMode();
        setCurrentFunction("erase");
    }

    function selectUndo(){
        if(props.bufferIdx>0){
            ReDoAndUnDo(props.imgBuffer[props.bufferIdx-1]);
            props.setBufferIdx(props.bufferIdx-1);
        }
    }

    function selectRedo(){
        if(props.bufferIdx<props.imgBuffer.length-1){
            ReDoAndUnDo(props.imgBuffer[props.bufferIdx+1]);
            props.setBufferIdx(props.bufferIdx+1);
        }
    }

    function zoomIn(){
        setCurrentFunction("zoom in")
        props.setSelectedButton(
            <ColorSelection/>
        )
    }

    function zoomOut(){
        setCurrentFunction("zoom out")
        props.setSelectedButton(
            <ColorSelection/>
        )
    } 

    return(
        <div style={{width:"100%", height:"80%", marginTop:"20%", display:"flex", flexWrap:"wrap", backgroundColor:"rgb(49, 51, 54)", alignItems:"center", justifyContent: "center"}}>
            <EyeButton 
                style={toolButtonStyle}
                text={<BiRefresh />}
                hoverColor="pink"
                clickColor="black"
                onClick={() => {clearCanvas()}}
            />

            <EyeButton id="draw"
                style={toolButtonStyle}
                text={<BsPencilFill />}
                hoverColor="pink"
                clickColor="black"
                onClick={() => {selectDraw()}}
            />

            <EyeButton 
                style={toolButtonStyle}
                text={<BsPaintBucket />}
                hoverColor="pink"
                clickColor="black"
                onClick={() => {selectFill()}}
            />

            <EyeButton 
                style={toolButtonStyle}
                text={<RiEraserFill />}
                hoverColor="pink"
                clickColor="black"
                onClick={() => {selectErase()}}
            />

            <EyeButton 
                style={toolButtonStyle}
                text={<FaUndoAlt />}
                hoverColor="pink"
                clickColor="black"
                onClick={() => {selectUndo()}}
            />

            <EyeButton 
                style={toolButtonStyle}
                text={<FaRedoAlt />}
                hoverColor="pink"
                clickColor="black"
                onClick={() => {selectRedo()}}
            />

            <EyeButton 
                style={toolButtonStyle}
                text={<BsZoomIn />}
                hoverColor="pink"
                clickColor="black"
                onClick={() => {zoomIn()}}
            />

            <EyeButton 
                style={toolButtonStyle}
                text={<BsZoomOut />}
                hoverColor="pink"
                clickColor="black"
                onClick={() => {zoomOut()}}
            />

            <EyeButton 
                style={toolButtonStyle}
                text={<BsFillSave2Fill />}
                hoverColor="pink"
                clickColor="black"
                onClick={() => {
                    props.setCanvasSaveOpen(true)
                }}
            />
        </div>
    )
}

export default ToolSelections;