
import './Price.css'
import genedata_img from '../../assets/images/benerator_generate.png'
import bene_anony_img from '../../assets/images/benerator_anonymize.png'
import bene_migrate_img from '../../assets/images/benerator_migrate.png'
import ben_ui_img from '../../assets/images/benerator-ui.png'
import ben_editor_img from '../../assets/images/ben-ui-editor.png'

function Price() {
    return (
        <div className='price gray'>
            <div className='price-info'>
                <p>Light</p>
                <ul>
                    <li>details</li>
                    <li>details</li>
                    <li>details</li>
                    <li>details</li>
                    <li>details</li>
                    <li>details</li>
                </ul>
                <div className='a-button width350'>
                    <a href='' className='width350'>199 € / Month</a>
                </div>
            </div>
            <div className='price-info'>
                <p>Professional</p>
                <ul>
                    <li>details</li>
                    <li>details</li>
                    <li>details</li>
                    <li>details</li>
                    <li>details</li>
                    <li>details</li>
                </ul>
                <div className='a-button width350'>
                    <a href='' className='width350'>899 € / Month</a>
                </div>
            </div>
            <div className='price-info'>
                <p>Enterprise</p>
                <ul>
                    <li>details</li>
                    <li>details</li>
                    <li>details</li>
                    <li>details</li>
                    <li>details</li>
                    <li>details</li>
                    </ul>
                    <div className='a-button width350'>
                    <a href='' className='width350'>Please get in touch</a>
                </div>
            </div>
        </div>
    )


}
export default Price;