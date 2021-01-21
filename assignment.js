//============================function for converting kilometer to meter==========================
function kilometerToMeter(kilo){
    if( kilo <= 0 ){
        console.log("Enter Valid Input");
    }
    else{
        var result = kilo * 1000;
        return result;
    }
} 
var meter = kilometerToMeter(25);
console.log(meter);

//========================================function for calculating budget============================
function budgetCalculator( watch, phone, laptop){
    if( watch <= 0 || phone <= 0 || laptop <= 0 ){
        console.log("Enter Valid Input");
    }
    else{
        var total = watch * 50 + phone * 100 + laptop *500; 
        return total;
    }
}
var budget = budgetCalculator( 5, 5, 5);
console.log(budget);

//=============================function for calculating hotel cost========================================
function hotelCost(days){
    var total = 0;
    if( days <= 0 ){
        console.log("Enter Valid Input");
    }
    else if ( days <= 10 ){
         total = days * 100;
        return total;
    }
    else if ( days <= 20 ){
       var firstTenDaysTotal = 10 * 100;
       var extraDays = days - 10;
       var extraDaysTotal = extraDays * 80 ;
       total = firstTenDaysTotal + extraDaysTotal;
       return total;
   }
   else{
    var firstTenDaysTotal = 10 * 100;
    var secondTenDaysTotal = 10 * 80;
    extraDays = days - 20;
    extraDaysTotal = extraDays * 50;
    total = firstTenDaysTotal + secondTenDaysTotal+ extraDaysTotal;
    return total;
   } 
}
var cost = hotelCost(50);
console.log(cost);

//============================function for megaFriend========================================
function megaFriend( friend ){
    var length = friend[0].length;
    for( var i = 0; i < friend.length; i++){
        var size = friend[i].length;
        if( size > length){
            var max = friend [i];
        }
    }
    return max;
}
var friends = ['A', 'AB', 'ABC', 'ABCD','ABCDEF', 'ABCDEFG', 'ABCDEFGH', 'ABCDEFGHI'];
var result = megaFriend( friends);
console.log(result);