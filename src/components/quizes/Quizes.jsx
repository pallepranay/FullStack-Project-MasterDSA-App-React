import React, {useState, useRef} from 'react';
import './Quizes.css';


const Quizes = () => {

    const [isFrame, setisFrame] = useState(false);
    
    const startQuizHandler = () =>{
        document.getElementById('title').style = 'display: none;';
        document.getElementById('panel').style = 'display: inline-flex;';
        document.getElementById('left').style = 'display: block;';
        document.getElementById('right').style = 'display: block;';
    }

    const quiztStyleHandler = () => {
        setisFrame(true);
    }

    return (
        <>
            <div class="title" id="title">
                <span>Daily Quiz on MasterDsa</span>
                <div class="shortdesc"><br />
                    <p>If you think education is expensive, try ignorance</p>
                </div>
                <button onclick={startQuizHandler}>Start Now</button>
            </div>

            <div class="panel" id="panel">

                <div class="left-side" id="left">
                    <ul>
                        <li onclick={quiztStyleHandler} className = {`${!isFrame ? 'displayN':'displayB'}`}>HOME</li>
                        <li onclick={quiztStyleHandler}>C/C++</li>
                        <li onclick={quiztStyleHandler}>Java</li>
                        <li onclick={quiztStyleHandler}>Python</li>
                        <li onclick={quiztStyleHandler}>JavaScript</li>
                        <li onclick={quiztStyleHandler}>Data Structures</li>
                        <li onclick={quiztStyleHandler}>Algorithm</li>
                        <li onclick={quiztStyleHandler}>Interview Questions</li>
                    </ul>
                </div>

                <div class="right-side" id="right">
                    <div id="quiz-container">

                        <div id="f1"><div class="quiz-frame main-frame"></div></div>

                        <div id="f2"><iframe class="quiz-frame" src="https://docs.google.com/forms/d/e/1FAIpQLSe3hXLPuiQGqj1n3IeeAzM8YLNpgJIIk_zfteoEdWka4X3wxQ/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe></div>

                        <div id="f3"><iframe class="quiz-frame" src="https://docs.google.com/forms/d/e/1FAIpQLSeVTLsd_AqZGpbIMnZRm20OKrjjiYSirWBjfCHpWtAsMQU--g/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe></div>

                        <div id="f4"><iframe class="quiz-frame" src="https://docs.google.com/forms/d/e/1FAIpQLSdjSKZhQp5jqqR34zD_uWMtgXr18F9pdK6YqcafLSP6J7VZjw/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe></div>

                        <div id="f5"><iframe class="quiz-frame" src="https://docs.google.com/forms/d/e/1FAIpQLSe1xs1-41MAbLN7KkXrJwtGdbl5ydxe_vX_nmFRjf6c0wtYkA/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe></div>

                        <div id="f6"><iframe class="quiz-frame" src="https://docs.google.com/forms/d/e/1FAIpQLSdHFDm_BakVxro_zJI78OF2OLJpXgDzzaAVMHD9hptWlXBSpA/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe></div>

                        <div id="f7"><iframe class="quiz-frame" src="https://docs.google.com/forms/d/e/1FAIpQLSdgD7yFEJtqpkImDiLAaQ7w9VcsO688gr1V3Gl7FqwM5yXtWQ/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe></div>

                        <div id="f8"><iframe class="quiz-frame" src="https://docs.google.com/forms/d/e/1FAIpQLSchDBnai_Aup7YFJQegg4z-qoB338p010VgZRxBYDT17xoRew/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe></div>

                        <div id="f9"><iframe class="quiz-frame" src="https://docs.google.com/forms/d/e/1FAIpQLSfY5oIAz4R9Ty-LBpx7h4th6OJ0-RkrxIlLslRV4NjwwW8_uw/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe></div>

                        <div id="f10"><iframe class="quiz-frame" src="https://docs.google.com/forms/d/e/1FAIpQLSflwS89sG7H98J9vFgFqJgsKaZ5gpq3yUlOiW3up7RQQ-qRnw/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe></div>

                        <div id="f11"><iframe class="quiz-frame" src="https://docs.google.com/forms/d/e/1FAIpQLSe_aS8-CMNFdUzI1UE73zahC2bmMwJkmB6FJXPIeKbLIBqB4Q/viewform?embedded=true" frameborder="0" marginheiclass="quiz-frame" ght="0" marginwidth="0">Loading…</iframe></div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Quizes;