import banner1 from "../assets/banner.jpg"
import '../styles/Banner.css'

function Banner(){
    return(
        <div className='banner'>
            <img src={banner1} alt='banner' className='banner'/>
            
        </div>
    )
}

export default Banner