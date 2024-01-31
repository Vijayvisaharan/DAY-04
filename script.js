//programs in anonymous function & IIFE

 //programs in arrow functions
 
//1.Print odd numbers in an array;
//anonymous function
var odd=[];
var res=function foo(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            odd.push(arr[i]);
        }
    }
    return odd;
}
console.log(res(arr));
 //IIFE
var odd=[];
(function foo(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            odd.push(arr[i]);
        }
    }
    console.log(odd);
})(arr)
//arrow functions
var odd=[];
var res=(arr)=>{
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            odd.push(arr[i]);
        }
    }
    return odd;
}
console.log(res(arr));

//2.Convert all the strings to title caps in a string array
//anonymous function
var res=function titlecase(str) {
    str = str.toLowerCase().split(' ')
     
     for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
     }
     return str.join(' ')
}
console.log(res(str));
//IIFE
(function titlecase(str) {
    str = str.toLowerCase().split(' ')
     
     for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
     }
     console.log (str.join(' '))
})(str)
//arrow functions
var res=(str)=>{
  str = str.toLowerCase().split(' ')
   
   for (var i = 0; i < str.length; i++) {
  str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   }
   return str.join(' ')
}
console.log(res(str));
//3.Sum of all numbers in an array
//anonymous function
var sum=function sumof(num) {
    var sum=0;
    for(var i=0;i<num.length;i++){
      sum=sum+num[i];
       }
    return sum;
  }
  console.log(sum(num));
  //IIFE
  (function sumof(num) {
    var sum=0;
    for(var i=0;i<num.length;i++){
      sum=sum+num[i];
       }
    console.log(sum);
  })(num)
  //arrow functions
  var sum=(num)=>{
    var sum=0;
    for(var i=0;i<num.length;i++){
      sum=sum+num[i];
       }
    return sum;
  }
  console.log(sum(num));
  //4.Return all the prime numbers in an array
  //anonymous function
  var res=function ofprime(num) {
           
    if(num < 2) return false; 
    
    for(var i = 2; i < num; i++){
       
        if(num % i == 0) return false;
       
    }
    return true
 }
  var arr=[2, 3, 4, 5, 6, 7, 8, 9, 10]
  var temp=[]
  for(var i=0;i<arr.length;i++){
    if(res(arr[i])){
      temp.push(arr[i]);
    }
  }
   console.log(temp);
   //IIFE
     var res=(function ofprime(num) {
           
    if(num < 2) console.log( false); 
    
    for(var i = 2; i < num; i++){
       
        if(num % i == 0) console.log( false);
       
    }
    console.log( true)
 })(num)
  var arr=[2, 3, 4, 5, 6, 7, 8, 9, 10]
  var temp=[]
  for(var i=0;i<arr.length;i++){
    if(res(arr[i])){
      temp.push(arr[i]);
    }
  }
   console.log(temp);
   //arrow functions
   var res=(num)=>{
           
    if(num < 2) return false; 
    
    for(var i = 2; i < num; i++){
       
        if(num % i == 0) return false;
       
    }
    return true
 }
  var arr=[2, 3, 4, 5, 6, 7, 8, 9, 10]
  var temp=[]
  for(var i=0;i<arr.length;i++){
    if(res(arr[i])){
      temp.push(arr[i]);
    }
  }
   console.log(temp);
  //5. Return all the palindromes in an array
  //anonymous function
  var res=function palindromes(s){
    var a=s;
    s=s.split('').reverse().join("");
    return s==a
  }     
       var temp=[];
    var str=function ofpalindromes(arr){
      for(var i=0;i<arr.length;i++){
        if(res(arr[i])){
          temp.push(arr[i]);
        }
        
      }return temp;
    }
      console.log(str( arr ));
      //IIFE
      var res=(function palindromes(s){
        var a=s;
      s=s.split('').reverse().join("");
      console.log (s==a);
     })    
       var temp=[];
      (function ofpalindromes(arr){
      for(var i=0;i<arr.length;i++){
        if(res(arr[i])){
          temp.push(arr[i]);
        }
        
      }console.log(temp);
       })(arr)
       //arrow functions
       var res=(s)=>{
        var a=s;
        s=s.split('').reverse().join("");
        return s==a
      }     
           var temp=[];
        var str=function ofpalindromes(arr){
          for(var i=0;i<arr.length;i++){
            if(res(arr[i])){
              temp.push(arr[i]);
            }
            
          }return temp;
        }

    //6.  Return median of two sorted arrays of the same size.
    //anonymous function
    var res=function sorted(arr1,arr2,n){
        var i=0;
        var j=0;
        var m1=-1;var m2=-1;
        for(var count=0;count<n;count++){
          if(n==i){
            m1=m2;
            m2=arr2[0]
            break;
          }
          else if(n==j){
            m1=m2;
             m2=arr1[0];
             break;
          }
          if(arr1[i]<=arr2[j]){
            m1=m2;
            m2=arr1[i];i++;
          }
          else{
             m1=m2;
            m2=arr2[i];j++;
          }
        }return (m1+m2)/2;
        }
          console.log(res(sorted(arr1,arr2,arr.length)));
          //IIFE
          (function sorted(arr1,arr2,n){
        var i=0;
        var j=0;
        var m1=-1;var m2=-1;
        for(var count=0;count<n;count++){
          if(n==i){
            m1=m2;
            m2=arr2[0]
            break;
          }
          else if(n==j){
            m1=m2;
             m2=arr1[0];
             break;
          }
          if(arr1[i]<=arr2[j]){
            m1=m2;
            m2=arr1[i];i++;
          }
          else{
             m1=m2;
            m2=arr2[i];j++;
          }
        }console.log((m1+m2)/2);
        })(arr1,arr2,n)
        
         //7. Remove duplicates from an array
         //anonymous function
          
         function removeDuplicates(arr) {
          let unique = [];
           for (var i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) {
          
            unique.push(arr[i]);
        }
      }
         return unique;
      }
       console.log(removeDuplicates(arr));
        //IIFE
          (function removeDuplicates(arr) {
          let unique = [];
           for (var i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) {
          
            unique.push(arr[i]);
        }
      }
         console.log(unique);
      })(arr)
       //8. Rotate an array by k times
        //anonymous function
        var res=function rotate(arr,n,k){
          var n=arr.length;
          k=k%n;
         var temp=[];
          for(var i=0;i<n;i++){
            if(i<k){
             temp.push(arr[n - k + i])
            }
            else{
              temp.push(arr[i-k]);
            }
          }return temp;
        }
        console.log(res(arr,n,k));
        //IIFE
          (function rotate(arr,n,k){
          var n=arr.length;
          k=k%n;
         var temp=[];
          for(var i=0;i<n;i++){
            if(i<k){
             temp.push(arr[n - k + i])
            }
            else{
              temp.push(arr[i-k]);
            }
          }console.log(temp);
        })(arr,n,k)
        