import './Benerator.css'
import ben_img from '../../assets/images/ben-logo.jpg'
import anony_img from '../../assets/images/mask.svg'
import gene_migrate_img from '../../assets/images/generate.svg'
import pseudo_img from '../../assets/images/pseudo.svg'

function Benerator() {
    return (
        <div className='benerator'>
            <div className='first-bene'>
                <div className='icon-bene'>
                    <img src={ben_img} ></img>
                </div>
                <div className='content-bene'>
                    <h1>BENERATOR</h1>
                    <span>THE SMART WAY
                        TO HANDLE DATA
                    </span>
                </div>
            </div>
            <div className='last-bene'>
                <div className='bene-item'>
                    <img src={gene_migrate_img}></img>
                    <p>GENERATE & MIGRATE…
                    </p>
                </div>
                <div className='bene-item'>
                    <img src={anony_img}></img>
                    <p>ANONYMIZE…
                    </p>
                </div>
                <div className='bene-item'>
                    <img src={pseudo_img}></img>
                    <p>PSEUDONYMIZE…
                    </p>
                </div>
            </div>
        </div>
    )


}
export default Benerator;