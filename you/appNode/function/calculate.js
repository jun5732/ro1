<<<<<<< HEAD
module.exports ={

    add(a,b){
        return a + b
    },

    sub(a,b,c){
        return a-b-c
    }

    ,cal_egl(a,b,c,d){

        if(a-b>=10) {
            return 6.4+(0.393566429*(a-b))-(0.205486363*c)-(0.006877061*d*d) -(0.012675566*b*b)
        }
        if(a-b<10){
            return 3.2+(0.393566429*(a-b))-(0.205486363*c)-(0.006877061*d*d) -(0.012675566*b*b)
        }
    }
    
    
=======
module.exports ={

    add(a,b){
        return a + b
    },

    sub(a,b,c){
        return a-b-c
    }

    ,cal_egl(a,b,c,d){

        if(a-b>=10) {
            return 6.4+(0.393566429*(a-b))-(0.205486363*c)-(0.006877061*d*d) -(0.012675566*b*b)
        }
        if(a-b<10){
            return 3.2+(0.393566429*(a-b))-(0.205486363*c)-(0.006877061*d*d) -(0.012675566*b*b)
        }
    }
    
    
>>>>>>> @as73016463
}