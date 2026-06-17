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

 # Session storage -
    
 1. Session storage stores session until the session is working or start
 2. The user stays active on the website only that time session data will store once the browser close session storage data gone.
 3. session stay - data store , brower close session data gone

 # Difference Between Local Storage and Session Storage
 
    Feature                            	Local Storage	                            Session Storage
    Data Persistence     	               Permanent until removed	                   Exists only during the current session
    Browser Close	                        Data remains	                            Data is removed
    Storage Type	                        Key-value pairs	                         Key-value pairs
    Use Case	                           User preferences, themes, saved data       Temporary session data, form data

 # Quick Revision

    Local Storage:

    Data persists until manually removed.
    Survives browser close and system restart.
    Uses setItem(), getItem(), removeItem(), and clear().
    Objects should be stored using JSON.stringify().
    Objects should be retrieved using JSON.parse().

    Session Storage:
    
    Data exists only while the browser tab is open.
    Data is automatically removed when the tab/browser is closed.
    Uses the same methods as Local Storage.
