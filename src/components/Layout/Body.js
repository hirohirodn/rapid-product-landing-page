import BeneHelp from '../BodyParts/BeneHelp';
import BeneIntro from '../BodyParts/BeneIntro';
import Benerator from '../BodyParts/Benerator';
import BeneWork from '../BodyParts/BeneWork';
import Price from '../BodyParts/Price';
import Seo from '../BodyParts/Seo';
import WeDoMore4U from '../BodyParts/WeDoMore4U';
import './Body.css'
import '../Animation/animation.css'
import UlSlide from '../BodyParts/UlSlide';

function Body(){
    return(
        <div className='body'>
            <div className='first-section-wrapper'>
            <Seo/>
            </div>
            <div className='bene-container'>
                <Benerator />
                <BeneIntro />
                <Price />
                <UlSlide />
                <BeneHelp />
                <WeDoMore4U />
                <BeneWork />

            </div>

        </div>
    )
        
    
}
export default Body;