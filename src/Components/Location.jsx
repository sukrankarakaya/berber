import { useSelector, } from 'react-redux'; 

const Konum = () => {
  const userLocation = useSelector(state => state.barberLogin.location)


  console.log(userLocation)
  return (
    <div className="flex justify-center">
      <div className="bg-white w-auto p-3 h-10 border border-black rounded-md  max-sm:hidden items-center">
        <span className="text-black">{userLocation}</span>
     
      </div>
    </div>
  );
};

export default Konum;
