const fs = require('fs');

const file = 'products.json'; // <-- Add this line

function ensureBackupFileExists() {
    const backupFile = 'products_backup.json';
    if (!fs.existsSync(backupFile)) {
        fs.writeFileSync(backupFile, '[]');
    }
}

//--------------- writing data into file --------------//
function loadData()
{
    console.log('we are starting with loadData() method....');
    var products = fs.readFileSync(file, {encoding: 'utf8'}); // array of data comingfrom json file
    return JSON.parse(products.toString())
}

function writeData(name, price){
    console.log('we are starting with writeData() method....');
    var products = loadData();  // array in which we are pulling the recrods from customer.json
    products.push({
        "name": name,      // here we are pushing the inputs given by user into the exiting array
        "price": price
    });
    fs.writeFileSync(file,JSON.stringify(products));
}
function readProducts(){
    var products = loadData();
    writeProducts(JSON.stringify(products));
    
}
function writeProducts(products){
    // const outputFile = 'products_read.json';

    // // Write all products to a new file with read permission
    // fs.writeFileSync(outputFile, JSON.stringify(products, null, 2), { mode: 0o444 }); // read-only for everyone
    // console.log(`All products written to ${outputFile} with read-only permissions.`);
    fs.open('products_backup.json','r',(err,fd) =>{})
    fs.writeFileSync('products_backup.json',products,(err)=>{
        if(err)
        console.log(err); 
        else
        console.log('written the data into products_backup.json file....');
    })
}

module.exports={
    load: loadData,
    writeProduct: writeData,
    readProducts: readProducts,
    user1: user1,
    user2: user2,
    user3: user3
}

function user1(){
    ensureBackupFileExists();
    var products = fs.readFileSync('products_backup.json', {encoding: 'utf8'});
    return JSON.stringify(products)
}
function user2(){
    ensureBackupFileExists();
    var products = fs.readFileSync('products_backup.json', {encoding: 'utf8'});
    // Delete the backup file at the end
 
    return JSON.stringify(products);
}
function user3() {
    ensureBackupFileExists();
    return new Promise((resolve, reject) => {
        fs.readFile('products_backup.json', { encoding: 'utf8' }, (err, products) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                console.log('read the data from products_backup.json file....');
                resolve(JSON.stringify(products));
            }
        });
    });
}


