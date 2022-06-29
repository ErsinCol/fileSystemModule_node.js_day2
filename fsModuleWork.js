const fs=require('fs');
/*
fs.writeFile('fsModule/employees.json','{"name": "Employee 1 Name", "salary": 2000}',(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log('Dosya oluşturuldu ve veri eklendi...');
});
*/

/*
fs.readFile('fsModule/employees.json','utf-8',(err,data)=>{
    if(err){
        console.log(err); // hata kontrolü
    }
    console.log(data);
    console.log('Dosya okundu...') // okutulan veriden çıktı alınması
});
*/
/*
fs.writeFile('fsModule/example.txt','Merhaba',(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log('Dosya oluşturuldu ve veri eklendi...');
})
*/

/*
fs.appendFile('fsModule/example.txt','\nMerhaba2','utf-8',(err)=>{
    if(err){
        console.log(err);
    }
    console.log('Yeni veri eklendi...');
});
*/
fs.unlink('fsModule/example.txt',(err)=>{
    if(err){
        console.log(err);
    }
    console.log('Dosya silindi');
});








