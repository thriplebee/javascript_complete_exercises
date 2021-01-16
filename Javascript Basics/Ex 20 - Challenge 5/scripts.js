// --------------------------------------------------
// --------Tip Calculator with Objects & Loops-------
// --------------------------------------------------

/*
    Remember the tip calculator challenge? Let's create a more advanced versio using Objects and Loops.

    Dasun and his freinds went on a picnic. To get food they went to 5 different restaurants for each meal. The bills are Rs. 1230, Rs. 982, Rs. 1640, Rs. 1460, Rs. 944.

    To tip the waiter a fair amount, Dasun created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than Rs. 1000, 15% when the bill is between Rs. 1000 and Rs. 1500, and 10% if the bill is more than Rs. 1500.

    Implement a Tip calculator using Objects & Loops:
    1. Create an object with an array for bill values
    2. Add a method to calculate tips
    3. This method should include a loop to iterate over all the paid bills and do the tip calculations
    4. As an output create 2 new arrays inside the object to store all tips and final amounts(bill + tip).
*/

// Object
var billPay =  {
    bill: [],
    tip: [],
    final: [],
    calTip: function(){
        for(var i=0; i<this.bill.length; i++){
            var tp;
            if(this.bill[i] < 1000){
                tp = 20/100;
            }
            else if(this.bill[i] < 1500 && this.bill[i] >= 1000){
                tp = 15/100;
            }
            else{
                tp = 10/100;
            }

            // Calculation and add tip to the array
            this.tip[i] = this.bill[i] * tp;
            // Add final amount to the array
            this.final[i] = this.bill[i] + this.tip[i];
        }
    }
}

// Get Inputs
for(var i=0; i<5; i++){
    billPay.bill[i] = parseInt(prompt("Enter bill amount : "));
}

// Calling Function
billPay.calTip();
console.log(billPay);
