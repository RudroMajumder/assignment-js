// https://github.com/RudroMajumder/assignment-js
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
var meter = kilometerToMeter(Math.abs(-30));
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
var budget = budgetCalculator(Math.abs( 10, 10, 10));
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
var cost = hotelCost(Math.abs(-40) );
console.log(cost);

//============================function for megaFriend========================================
function megaFriend(friend){
    if ( friend.length == 0){
        return("ENTER NAMES OF YOUR FRIEND");
    } 
    else{
         var length = friend[0].length;
         var max = friends[0];
         for( var i =0; i < friend.length; i++){
             var size = friend[i].length;
             if( size > length ){
                 max = friend[i];
                 length = size;
             }
         }
         return max;
    }
}
var friends = ['RUDRO', 'JIHAN', 'RAIHAN','NANIAMMA','KHALAMMA','FARUK', 'RAHIMA'];
var result = megaFriend(friends);
console.log(result);
