const HEAD=(<div className=" rounded-full border-[10px] border-black h-[50px] w-[50px] absolute top-[50px] md:left-[80px] left-[110px]"/>)
const BODY=(<div className=" h-[100px] w-[10px] absolute top-[100px] md:left-[100px] left-[130px] bg-black"/>)
const RIGHT_ARM = ( <div className="h-[50px] w-[10px] absolute top-[100px] md:left-[100px] left-[130px]  bg-black rotate-[45deg] origin-bottom-left" />);
  const LEFT_ARM = ( <div className="h-[50px] w-[10px] absolute top-[100px] md:left-[100px] left-[130px] bg-black -rotate-[45deg] origin-bottom-right" />);
  const RIGHT_LEG = (<div className="h-[50px] w-[10px] absolute top-[200px] md:left-[100px] left-[130px] bg-black -rotate-[30deg] origin-top-left" />);
  const LEFT_LEG = ( <div className="h-[50px] w-[10px] absolute top-[200px] md:left-[100px] left-[130px] bg-black rotate-[30deg] origin-top-right" />);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]
function Drawing(guessCount){
    return(
        <>
        <div className=" relative h-1/2">
        {guessCount.guessCount >= 1 && <div>{BODY_PARTS[0]}</div>}
        {guessCount.guessCount >= 2 && <div>{BODY_PARTS[1]}</div>}
        {guessCount.guessCount >= 3 && <div>{BODY_PARTS[2]}</div>}
        {guessCount.guessCount >= 4 && <div>{BODY_PARTS[3]}</div>}
        {guessCount.guessCount >= 5 && <div>{BODY_PARTS[4]}</div>}
        {guessCount.guessCount >= 6 && <div>{BODY_PARTS[5]}</div>}


            <div className="h-[10px] w-[200px] absolute bg-black  md:right-[-100px]  md:top-0  right-[-140px] top-[-10px] "/>
            <div className="h-[50px] w-[10px] absolute bg-black top-0 right-[-140px] md:left-[100px]"/>
            <div className="h-[400px] w-[10px] absolute bg-black right-[50px] md:right-[100px] top-0"/>
            <div className="h-[10px] w-[200px] absolute bg-black top-[400px] left-[-150px] md:left-[-200px]"/>
        </div>
        </>
    )
};
export default Drawing;