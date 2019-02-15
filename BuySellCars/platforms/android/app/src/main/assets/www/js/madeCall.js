
      //Call function
      var makeCall = function( number){
        window.plugins.CallNumber.callNumber(onSuccess, onError, number, null);
      }

      function onSuccess(result){
        console.log("Success:"+result);
      }
       
      function onError(result) {
        console.log("Error:"+result);
      }  