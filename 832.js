console.log('Введите год');
var n=prompt(n);
var d=new Date(n,0),lastmounth,running;
lastmounth=d.getMonth();
while (d.getFullYear()<Number(n)+Number(1))
{
    d.setDate((d.getDate()+1));
    if(d.getMonth()>lastmounth) {
        console.log(running.getDate()+' ');
        lastmounth++;
    }
    if(d.getDay()==4) {
        running = new Date(date);
    }
}
console.log(running.getDate()+' ');