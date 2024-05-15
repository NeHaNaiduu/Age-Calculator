function CalcAge(){
    let date=document.getElementById('date').value;
    let month=document.getElementById('month').value;
    let year=document.getElementById('year').value;

    let curdd=new Date();
    let curDate=curdd.getDate();
    let curMonth=curdd.getMonth();
    let curYear=curdd.getFullYear();

    let months=[31,28,31,30,31,30,31,31,30,31,30,31];
    if(date>curDate){
        curDate+=months[curMonth-1];
        curMonth--;
    }
    if(month>curMonth){
        curMonth+=12;
        curYear--;
    }
    let d=curDate-date;
    let m= curMonth-month;
    let y=curYear-year;
    document.getElementById('AgeDisplay').innerHTML=`Your age is : ${y} years, ${m} months and ${d} days`;
}