
//way to take input from terminal process.argv
//let inp=process.argv.slice(2);
//console.log(inp);

//1) Node orders.js filepath --> displays the content of the file
//2) Node orders.js filepath1 fileparh2 ... filepathN --> displays the content of the file and append
//const { log } = require("console");
const fs=require("fs");
const { markAsUntransferable } = require("worker_threads");

let inpArr=process.argv.slice(2);
console.log(inpArr);

let filesArr=[];
let optionsArr=[];

for(let i=0;i<inpArr.length;i++){
    let firstchar=inpArr[i].charAt(0);
    if(firstchar=="-"){
        optionsArr.push(inpArr[i]);
    }else{
        filesArr.push(inpArr[i]);
    }
    
}
//console.log("input array is"+filesArr);

//check if all the files are valid and exist !
for(let i=0;i<filesArr.length;i++){
    let doesExist=fs.existsSync(filesArr[i]);
    if(!doesExist){
        console.log(filesArr[i]+"\t"+"does not EXIST");
        return;
    }
}

//now content will be read and appending starts
let content="";
for(let i=0;i<filesArr.length;i++){
    let fContent=fs.readFileSync(filesArr[i]);
    content+=fContent+"\n";
}
console.log(content);

//-----------successfully executed 2 commands------------------

//----------OPTION 1 : -s -----------------
//====implementing -s for removing multiple line spaces and keeping a single space======
let contentArr=content.split("\r\n");
console.log(contentArr);

let tempArr=[];
let checkS=optionsArr.includes("-s");
if(checkS){
    for(let i=1;i<contentArr.length;i++){
        if(contentArr[i]=="" && contentArr[i+1]==""){
            contentArr[i]=null;
        }
    }
    console.log(contentArr);
   

    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i]!=null){
            tempArr.push(contentArr[i]);
        }
    }
    console.log("Data extracted after removing extra lines ---->",tempArr);
    

}else{
    console.log("s is not present");
}

//----------OPTION 2 & 3 : -n and -b -----------------
contentArr=tempArr;

let indxN=optionsArr.indexOf("-n");
let indxB=optionsArr.indexOf("-b");

if(indxN!=-1 && indxB!=-1){
    if(indxN>indxB){
        useB();
    }else{
        useN();
    }

}else{
    if(indxN!=-1){
        useN();
    }else{
        useB();
    }
}

function useN(){
    let count=1;
    for(let i=0;i<contentArr.length;i++){
        contentArr[i]=count+") "+contentArr[i];
        count++;
    }
    console.log(contentArr);

}

function useB(){
    let count=1;
    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i]!=""){
            contentArr[i]=count+") "+contentArr[i];
            count++;

        }   
    }
    console.log(contentArr);
}




