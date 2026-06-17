# local storage - 
    Inspect -> Application -> Local Storage 

 1. It is browser memory
 2. The url's data on the local stotage store forever. if its browser close, machine fault anything it stays perpament no time restriction.
 3. localStorage.clear() - clear the local storage data.
 4. localStorage.setItem('key', 'value') - set data in the form of key and value.
 5. localStorage.getItem('key') - get the data from the localstorage.
 6. localStorage.removeItem('key') - remove the key and the value with the help of key
 7. When we set data in the form of object then the value looks like [object, object] for that real value looup we have to convert the value in the jason.strigify() that conver object into string form
 8. and for get data we have do undo process like strigify to object for that one more function is used that is json.parse()that converts into the real form
    

# Session storage -
    
 1. Session storage stores session until the session is working or start
 2. The user stays active on the website only that time session data will store once the browser close session storage data gone.
 3. session stay - data store , brower close session data gone