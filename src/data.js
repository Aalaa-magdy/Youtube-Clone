export const API_KEY='AIzaSyB2orLS6qyT6ImtGFShz34RDQ_e3Qkkkkw';
export const API_KEY2='AIzaSyAm95pjXSL73kEjFh3xV7CFHLc79-ji9iU';
export const value_converter =(value)=>{
    if(value>=1000000){
        return  Math.floor(value/1000000) +"M";
    }
    else if(value>=1000){
        return  Math.floor(value/1000) +"K";
    }
    else{
        return value;
    }
}