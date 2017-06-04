// function service()
// {
// 	console.log("i am callback")
// }
// function sample(name){
// 	console.log(name())


// }
// sample(service);

function getData(val,err){
	return new Promise(function(resolve,reject){
resolve(val)
if(err){
	reject(err)
}


	})
}
// function sample(){
// 	return new Promise(function(resolve,return){
// 		if(err){
// 	reject(err)
// }
// resolve(val)


// 	}) 
// }
// sample().then(function(data){

// })

/*getData(1).then(function(data){
	console.log(data)
})*/
getData("naveen","i am the error")
.then(function(data){
	return data;
})
.then(function(newData){
	console.log(newData)
})
.catch(function(err)
{
	console.log('this is error block')
	console.log(err);
})