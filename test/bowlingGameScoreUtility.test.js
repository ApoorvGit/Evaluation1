const {scoreCalculator}=require('../bowlingGameScoreUtility')

describe('Bowling Score calculator', ()=>{
    describe('Calculates score of a 10 frame bowling game', ()=>{
        it('should provide score when number of frames is 10',()=>{
            const result=scoreCalculator([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]);
            expect(result[3]).toEqual(90);
            //expect(()=>divideAbyB(10,0)).toThrow('Division by Zero is not allowed');
        });
        
    });
})