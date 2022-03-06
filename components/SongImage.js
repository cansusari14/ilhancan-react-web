import styles from './SongImage.module.css'
import Image from 'next/image'
import SongOne from '../public/images/song-1.jpg'

const SongImage = () =>{
    return(
        <div  >
       <Image className={styles.order}
        src={SongOne} 
        alt="Mavi Gelir Chayin Sesi"
        layout="fill"
        objectFit="contain"
        objectPosition="right"
        
    
       />
       </div>
    
    );
}

export default SongImage