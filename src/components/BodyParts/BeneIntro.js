
import './BeneIntro.css'
import genedata_img from '../../assets/images/benerator_generate.png'
import bene_anony_img from '../../assets/images/benerator_anonymize.png'
import bene_migrate_img from '../../assets/images/benerator_migrate.png'
import ben_ui_img from '../../assets/images/benerator-ui.png'
import ben_editor_img from '../../assets/images/ben-ui-editor.png'

function BeneIntro() {
    return (
        <div className='bene-intro'>
            <div className='bene-intro-container gray' >
                <div className='bene-intro-descript'>
                    <h2>Generate data
                    </h2>
                    <ul>
                        <li>details</li>
                        <li>details</li>
                        <li>details</li>
                        <li>details</li>
                    </ul>
                </div>
                <div className='bene-intro-img'>
                    <img src={genedata_img}></img>
                </div>
            </div>
            <div className='bene-intro-container light' >
                <div className='bene-intro-descript'>
                    <h2>Anonymize and Pseudonymize data

                    </h2>
                    <ul>
                        <li>details</li>
                        <li>details</li>
                        <li>details</li>
                        <li>details</li>
                    </ul>
                </div>
                <div className='bene-intro-img'>
                    <img src={bene_anony_img}></img>
                </div>
            </div>
            <div className='bene-intro-container gray' >
                <div className='bene-intro-descript'>
                    <h2>Migrate data
                    </h2>
                    <ul>
                        <li>details</li>
                        <li>details</li>
                        <li>details</li>
                        <li>details</li>
                    </ul>
                </div>
                <div className='bene-intro-img'>
                    <img src={bene_migrate_img}></img>
                </div>
            </div>
            <div className='bene-intro-container demo light-gray'>
                <div className='bene-intro-img image-shadow slide-up-animation'>
                    <img src={ben_ui_img}></img>
                </div>
                <div className='bene-intro-descript'>
                    <h2>Get started with the new
                        Benerator UI</h2>
                    <p>details</p>
                    <div className='a-button'>
                        <a href=''>Check Features</a>
                    </div>
                </div>
            </div>
            <div className='bene-intro-container demo row-reverse light'>
                <div className='bene-intro-img image-shadow slide-up-animation'>
                    <img src={ben_editor_img}></img>
                </div>
                <div className='bene-intro-descript'>
                    <h2>Modern Editor</h2>
                    <p>details</p>
                    <div className='a-button'>
                        <a href=''>Oder Now</a>
                    </div>
                </div>
            </div>
            <div className='bene-intro-container demo light sth'>
                <div className='bene-intro-descript sth'>
                    <h2>Business and test data handling with Benerator
                        
                    </h2>
                    <span>details</span>
                    <p>details</p>
                </div>
            </div>
        </div>
    )


}
export default BeneIntro;