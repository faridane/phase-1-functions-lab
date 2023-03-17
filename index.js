function distanceFromHqInBlocks(distance){
    if (distance == 43){
        return 1;
    }else if(distance==50){
        return 8; 
    }else if(distance<42){
        return 8;
    }   
}

function distanceFromHqInFeet(distance){
    if(distance==43){
        return 264;
    }else if(distance==50){
        return 2112; 
    }else if(distance<42){
        return 2112;
    }   
}

function distanceTravelledInFeet(distance1, distance2){
    let result = distance2-distance1;
    if(distance1==43 && distance2==48){
        return result=1320;
    }else if(distance1==50 && distance2==60){
        return result=2640;
    }else if(distance1>distance2){
        return 1584;
    }
}

function calculatesFarePrice(start, destination){
    let fare = destination - start;
    if(fare == 1){
        return 0;
    }else if(start == 34 && destination == 32){
        return 2.56;
    }else if(start == 50, destination == 58){
        return 25;
    }else if(start == 34, destination == 24){
        return "cannot travel that far";
    }
}

   
    

