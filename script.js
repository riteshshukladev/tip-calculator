var total_share=document.querySelector(".total-share");

var bill_in_total=document.querySelector("#bill-in-total");

var tip_in_total=document.querySelector("#Tip-in-total");

var total_person=document.querySelector(".total-person");

var number_of_people=Number(total_person.innerText);

function CalculateBill(){
    const bill= Number(bill_in_total.value);
    

    const tip= Number(tip_in_total.value)/100;
   
    const tip_amount= bill*tip;
    
    const total_bill_amount= bill+tip_amount;
    
  const total_share_amount_per_person= total_bill_amount/number_of_people;
   
    total_share.innerText=`$ ${total_share_amount_per_person.toFixed(2)}`;

}

function plus_function(){
    number_of_people++;
    total_person.innerText=number_of_people;
    CalculateBill();
}
function minus_function(){
    if(number_of_people>1){
        number_of_people--;
        total_person.innerText=number_of_people;
        CalculateBill();
    }
}