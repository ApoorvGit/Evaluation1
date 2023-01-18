const scoreCalculator=(pinsDownArray)=>{
    frames=[]
    frameCount=0;
    totalScore=0;
    for(let i=0;i<pinsDownArray.length;i++){
        let currentFrameScore=0
        if(frameCount==10){
            if(pinsDownArray[i]==10){
                totalScore+=10;
                i+=1;
                if(i<pinsDownArray.length){
                    if(pinsDownArray[i]==10){
                        totalScore+=10
                        i+=1;
                        if(pinsDownArray[i]==10){
                            i+=1;
                            totalScore+=10;
                        }
                    }else if(i+1<pinsDownArray.length && pinsDownArray[i]+pinsDownArray[i+1]==10){
                        totalScore+=10;
                    }
                }
                currentFrameScore=10+pinsDownArray[i+1]+pinsDownArray[i+2];
                frames.push([10, pinsDownArray[i+1], pinsDownArray[i+2]])
            }else if(pinsDownArray[i]+pinsDownArray[i+1]==10){
                if(i<pinsDownArray.length){
                    if(pinsDownArray[i]==10){
                        totalScore+=10
                    }else if(i+1<pinsDownArray.length && pinsDownArray[i]+pinsDownArray[i+1]==10){
                        totalScore+=10;
                    }
                }
                currentFrameScore=10+pinsDownArray[i+2];
                i+=1;
                frames.push([pinsDownArray[i], pinsDownArray[i+1], pinsDownArray[i+2]])
            }else{
                if(i<pinsDownArray.length){
                    if(pinsDownArray[i]==10){
                        totalScore+=10
                    }else if(i+1<pinsDownArray.length && pinsDownArray[i]+pinsDownArray[i+1]==10){
                        totalScore+=10;
                    }
                }
                currentFrameScore=pinsDownArray[i]+pinsDownArray[i+1];
                i+=1;
                frames.push([pinsDownArray[i], pinsDownArray[i+1]])
            }
            break;
        }
        if(pinsDownArray[i]==10){
            currentFrameScore=10+pinsDownArray[i+1]+pinsDownArray[i+2];
            frames.push([10, pinsDownArray[i+1], pinsDownArray[i+2]])
        }else if(i+2<pinsDownArray.length&&pinsDownArray[i]+pinsDownArray[i+1]==10){
            currentFrameScore=10+pinsDownArray[i+2];
            i+=1;
            frames.push([pinsDownArray[i], pinsDownArray[i+1], pinsDownArray[i+2]])
        }else if(i+1<pinsDownArray.length){
            currentFrameScore=pinsDownArray[i]+pinsDownArray[i+1];
            i+=1;
            frames.push([pinsDownArray[i], pinsDownArray[i+1]])
        }
        totalScore+=currentFrameScore;
        frameCount+=1;
    }
    return [frameCount, frames, totalScore]
}
console.log(scoreCalculator([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]))