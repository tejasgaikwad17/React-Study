# Hook useEffect

    1. It basically allows side side by process with the main process.
    2. Means the main process still working but side by side working also done.\
    3. useEffect function always executes.
    4. when user give dependency it run only ones

### steps to use

    1. Import useEffect
    2. Add syntax of it
    3. synatx example- 
          useEffect(function(){
                        console.log('useEffect is running');    
                    },[])
    4. [] - Is the dependency which makes sure that it will executes once.

