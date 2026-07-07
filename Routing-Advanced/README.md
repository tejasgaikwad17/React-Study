# UseParams - Hook

 In the app.jsx we route this <Route path="/Cources/:id" element={<CourceDetails />} />
 we mention this ":id"

when we use the useParams hook in the respective page it works perfeclty.


    const params = useParams()
    console.log(params);

in the first shows nothing.
but when we write anything in the url it is shows in the console in form of object.

ex.

http://localhost:5173/Cources/tejas

OP : {id: 'tejas'}


with the help of the /:id we can dynamically disply the routing word

<div className='flex justify-center'><h1>{params.id} CourceDetails</h1></div>


## useNavigate - hook

   let navigate =  useNavigate();

   const btnCliked = () => {
      // console.log('Button Clicked');
      navigate('/')
   }

with help of this hook we can route back to the other page
with the help of the declaration we can give the path to tha navigation
