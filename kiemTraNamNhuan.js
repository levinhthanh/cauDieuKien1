function kiemTra()
{
        let yearInput=parseInt(document.getElementById('year').value);
        let checkYear=false;
        let result="";
        if (yearInput%4!=0){}
        else{
             if (yearInput%100!=0)
                     checkYear=true;
            else {
                 if (yearInput%400!=0)
                          checkYear=false;
                 else 
                          checkYear=true;
                 }
            }
        if(checkYear) result="nhuận";
        else result="không nhuận";
        document.getElementById('printResult').innerHTML='Đây là một năm '+result;
}