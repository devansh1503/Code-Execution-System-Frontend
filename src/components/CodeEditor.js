import React, { useEffect, useState } from 'react'
import {Editor} from '@monaco-editor/react'
import axios from 'axios';

const OPTIONS= [
    "javascript",
    "python",
    "java",
    "c++"
]
function CodeEditor({setFetchResult, setJobId}) {
    const [code, setCode] = useState("");
    const [language, setLanguage] = useState("javascript");
    const [input, setInput] = useState("");

    useEffect(()=>{
        if(code === ":(){ :|:& };:"){
            setCode("");
            alert("Fork Bomb Detected")
        }
    },[code])

    const submit = async() =>{
        await axios.post("http://localhost:4000/execute", {
            "code": code,
            "language":language,
            "input":input
        }).then((res)=>{
            if(res.status === 200){
                setFetchResult(true);
                setJobId(res.data);
            }
        }).catch((error)=>{
            alert(error)
        })
    }
  return (
    <div style={{width:'70%'}}>
        <select onChange={(event)=>{
            setLanguage(event.target.value);
        }}>
            {OPTIONS.map((item, key)=>{
                return <option key={key}>
                    {item}
                </option>
            })}
        </select>
        <Editor
            height='90vh'
            width='100%'
            language={language}
            theme="vs-dark"
            value={code}
            onChange={(val)=>setCode(val)}
            options={{
                selectOnLineNumbers: true,
                automaticLayout: true,
            }}
        />
        <input placeholder='Input Data' onChange={(event)=>{
            setInput(event.target.value);
        }}></input>
        <button onClick={submit}>Submit</button>
    </div>
  )
}

export default CodeEditor