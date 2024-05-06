import Navbar from './Components/Navbar/Navbar'
import Children from './assets/children.png';
import Phone from './assets/phone.jpg';
function App() {

  return (
    <div className='flex flex-col bg-black/90 gap-2 w-full'>
      <div className='h-screen w-full overflow-hidden absolute blur-[1px]'>
        <img className='w-full object-cover' src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg" alt="" srcset="" />
      </div>
      <div className='h-screen'>
        <Navbar/>
      </div>
      <div className='grid grid-cols-2 justify-center items-center px-10 bg-black text-white'>
        <div><img src={Children} alt="" srcset="" /></div>
        <div className='flex flex-col items-start justify-center gap-4'>
          <h1 className='text-5xl font-bold'>Create profiles for kids</h1>
          <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
        </div>
      </div>
      <div className='grid grid-cols-2 justify-center items-center px-10 bg-black text-white'>
        <div className='flex flex-col items-start justify-center gap-4'>
          <h1 className='text-5xl font-bold'>Download your shows to watch offline</h1>
          <p className='pr-10'>Save your favourites easily and always have something to watch.</p>
        </div>
        <div><img src={Phone} alt="" srcset="" /></div>
      </div>
    </div>
  )
}

export default App
