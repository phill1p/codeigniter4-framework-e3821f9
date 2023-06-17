/**
 * 
 * Get the Dashboard data
 */
// async function getEnrolled (){

//     const response = await fetch ('http://localhost:8080/getenrolled');
//     const jsondata = await response.json();
//     document.getElementById(user_count).innerHTML = jsondata.user_count

// }

async function getUserCount(){

    // get
    const response = await fetch('http://localhost:8080/getusercount');

    // Convert the data to json object
    const jsonData = await response.json();


    document.getElementById('user_count').innerHTML = jsonData.user_count;
}


function getDashboardData(){

    getUserCount()



// async5Call()

// async2Call()

}
window.onload = getDashboardData;

function getNewOrders()

{


}
function resolveAfter2seconds(){
    return new Promise(resolve =>{
        setTimeout(() =>{
            resolve('resolved after 2 seconds');
        }, 2000);       
    });
       
}
function resolveAfter5seconds(){
    return new Promise(resolve =>{
        setTimeout(() =>{
            resolve('resolved after 5 seconds');
        }, 5000);       
    });
       
}
async function async2Call(){
    console.log('calling');
    const result = await resolveAfter2seconds();
    console.log(result);
    // Expected output: "resolved"

}

async function async5Call(){
    console.log('calling');
    const result = await resolveAfter5seconds();
    console.log(result);
    // Expected output: "resolved"
}

window.onload = getDashboardData();