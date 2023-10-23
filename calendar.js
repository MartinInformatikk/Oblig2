function is_leapyear(year){
    /*
    if(year % 400 == 0){
        return true
    }
    else if(year % 4 == 0 && year % 100 != 0){
        return true
    }
    else if(year % 4 != 0){
    return false
    }
    else if(year % 100 == 0 && year % 400 != 0){
        return false
    } 
    */

    if(year % 400 == 0 || year % 4 == 0 && year % 100 != 0){
        return true; 
    }
    else return false;
}

/*
for(x = 1582; x <= 2400; x++){
    console.log(x + " is leap year: " + is_leapyear(x))
};
*/


module.exports = {is_leapyear: is_leapyear};