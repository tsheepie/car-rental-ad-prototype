import car1 from '../assets/car 1.jpg';
import car2 from '../assets/car 2.jpg';
import car3 from '../assets/car 3.jpg';
import car4 from '../assets/car 4.jpg';
import '../styles/main.css'

function main(){
    return(
        <div className='cards'>
            <div className='ArticleCard'>
                <img src={car1} alt='car-1' className='car1'/>
                <p className='date'>10 Jan 2018</p>
                <p className='heading'>Addiction When Gambling Becomes A Problem</p>
                <p className='text'>inappropriate behaviour ipsum dolor sit amet consectetur.</p>
                
            </div>
            
            <div className='ArticleCard'>
                <img src={car2} alt='car-2' className='car2'/>
                <p className='date'>10 Jan 2018</p>
                <p className='heading'>Addiction When Gambling Becomes A Problem</p>
                <p className='text'>inappropriate behaviour ipsum dolor sit amet consectetur.</p>
                
            </div>

            <div className='ArticleCard'>
                <img src={car3} alt='car-3' className='car3'/>
                <p className='date'>10 Jan 2018</p>
                <p className='heading'>Addiction When Gambling Becomes A Problem</p>
                <p className='text'>inappropriate behaviour ipsum dolor sit amet consectetur.</p>
                
            </div>

            <div className='ArticleCard'>
                <img src={car4} alt='car-4' className='car4'/>
                <p className='date'>10 Jan 2018</p>
                <p className='heading4'>Addiction When Gambling Becomes A Problem</p>
                <p className='text'>inappropriate behaviour ipsum dolor sit amet consectetur.</p>
                
            </div>
        </div>
    )
};

export default main;