import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Result({jobId, fetchResult, setFetchResult}) {
    const [loader, setLoader] = useState(true);
    const [result, setResult] = useState("");
    useEffect(()=>{
        getResult()
    },[jobId])

    const getResult = async() => {
        if(jobId == "") return;
        let gotResult = false;
        while(!gotResult){
            await axios.get(jobId).then((res)=>{
                if(res.status === 200){
                    if(res?.data?.output){
                        gotResult = true;
                    }
                    setResult(res.data.output);
                }
                else{
                    setResult("")
                }
            }).catch((err)=>{
                alert(err)
            })
        }
    }
  return (
    <div style={{width:'30%', height:'90vh', marginTop:'20px', border:'1px solid blue', fontSize:'15px', padding:'10px'}}>
        {result}
    </div>
  )
}

export default Result