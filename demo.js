function findRanks(k, marks){
    marks.sort((a, b)=>{
        return b - a;
    });

    let newArr = [1];

    console.log(marks);
    console.log();


    let c = 0
    for(let i=0; i<marks.length-1; i++){
        if(marks[i]!==marks[i+1] && marks[i]>0){
            c++;
        }
        newArr.push(c);
    }


    // for(i=)


    console.log(newArr);
    let count = 0;
    for(let i=0; i<marks.length; i++){
        if(newArr[i]<=k){
            count++;
        }else{
            break;
        }
    }

    console.log(count);
    // return ;
}

findRanks(5, [10,10,10,10,10,10]);