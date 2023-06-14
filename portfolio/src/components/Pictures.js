import React from "react"
import {Carousel}  from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AFG_PARSA_1 from "../Assets/images/Travel/AFG_Balkh_Parsa_Shrine_1.JPG"
import AFG_PARSA_2 from "../Assets/images/Travel/AFG_Balkh_Parsa_Shrine_2.JPG"
import AFG_PARSA_3 from "../Assets/images/Travel/AFG_Balkh_Parsa_Shrine_3.JPG"
import AFG_HERAT_CITADEL_1 from "../Assets/images/Travel/AFG_Herat_Citadel_1.JPG"
import AFG_HERAT_CITADEL_2 from "../Assets/images/Travel/AFG_Herat_Citadel_2.JPG"
import AFG_HERAT_CITADEL_3 from "../Assets/images/Travel/AFG_Herat_Citadel_3.jpg"
import AFG_HERAT_CITY_VIEW from "../Assets/images/Travel/AFG_Herat_City_view.jpg"
import AFG_HERAT_GAW_SHRINE_1 from "../Assets/images/Travel/AFG_Herat_Gawharshad_Shrine_1.JPG"
import AFG_HERAT_GAW_SHRINE_2 from "../Assets/images/Travel/AFG_Herat_Gawharshad_Shrine_2.jpg"
import AFG_HERAT_MOSQUE_1 from "../Assets/images/Travel/AFG_Herat_Mosque_1.jpg"
import AFG_HERAT_MOSQUE_2 from "../Assets/images/Travel/AFG_Herat_Mosque_2.JPG"
import AFG_HERAT_MOSQUE_3 from "../Assets/images/Travel/AFG_Herat_Mosque_3.jpg"
import AFG_HINDU_KUSH_1 from "../Assets/images/Travel/AFG_Hindu_Kush_1.JPG"
import AFG_MAZAR_1 from "../Assets/images/Travel/AFG_Mazar-i_Sharif_Blue_Mosque_1.JPG"
import AFG_MAZAR_2 from "../Assets/images/Travel/AFG_Mazar-i_Sharif_Blue_Mosque_2.JPG"
import AFG_MAZAR_3 from "../Assets/images/Travel/AFG_Mazar-i_Sharif_Imam_Ali_Shrine_1.JPG"
import AFG_MAZAR_4 from "../Assets/images/Travel/AFG_Mazar-i_Sharif_Imam_Ali_Shrine_2.JPG"
import AFG_PANJ_1 from "../Assets/images/Travel/AFG_Panjshir_Valley_1.JPG"
import AFG_PANJ_2 from "../Assets/images/Travel/AFG_Panjshir_Valley_2.JPG"
import AFG_TUN_1 from "../Assets/images/Travel/AFG_Tunnel_1.JPG"
import IRA_ISF_MAY_1 from "../Assets/images/Travel/Iran_Isfahan_Maydan_1.JPG"
import IRA_ISF_MAY_2 from "../Assets/images/Travel/Iran_Isfahan_Maydan_2.JPG"
import IRA_ISF_MAY_3 from "../Assets/images/Travel/Iran_Isfahan_Maydan_3.JPG"
import IRA_NISH_1 from "../Assets/images/Travel/Iran_Nishapur_1.JPG"
import IRA_NISH_2 from "../Assets/images/Travel/Iran_Nishapur_2.JPG"
import IRA_PERS_1 from "../Assets/images/Travel/Iran_Persepolis_1.JPG"
import IRA_PERS_2 from "../Assets/images/Travel/Iran_Persepolis_2.JPG"
import IRA_PERS_3 from "../Assets/images/Travel/Iran_Persepolis_3.JPG"
import IRA_PERS_4 from "../Assets/images/Travel/Iran_Persepolis_4.JPG"
import IRA_TOMB_CYR from "../Assets/images/Travel/Iran_Tomb_Cyrus_the_Great.JPG"
import IRA_YAZ_ZOR_1 from "../Assets/images/Travel/Iran_Yazd_Zoroastrian_Fire_Temple_1.JPG"
import IRA_YAZ_ZOR_2 from "../Assets/images/Travel/Iran_Yazd_Zoroastrian_Fire_Temple_2.JPG"
import SYR_ALEP_CIT_1 from "../Assets/images/Travel/Syria_Aleppo_Citadel_1.JPG"
import SYR_ALEP_ST_SIM from "../Assets/images/Travel/Syria_Aleppo_St. Simeon.JPG"
import SYR_DAM_UM1 from "../Assets/images/Travel/Syria_Damascus_Umayyad_Mosque_1.JPG"
import SYR_DAM_UM2 from "../Assets/images/Travel/Syria_Damascus_Umayyad_Mosque_2.JPG"
import SYR_DAM_UM3 from "../Assets/images/Travel/Syria_Damascus_Umayyad_Mosque_3.JPG"
import SYR_PAL_1 from "../Assets/images/Travel/Syria_Palmyra_1.JPG"
import SYR_PAL_2 from "../Assets/images/Travel/Syria_Palmyra_2.JPG"
import SYR_PAL_3 from "../Assets/images/Travel/Syria_Palmyra_3.JPG"




export default function Pictures() {
    return(
        <Carousel showArrows={true} >
                <div>
                    <img src={AFG_PARSA_1} />
                    <p className="legend">Parsa Shrine - Afghanistan </p>
                </div>
                <div>
                    <img src={AFG_PARSA_2} />
                    <p className="legend">Parsa Shrine - Afghanistan </p>
                </div>
                <div>
                    <img src={AFG_PARSA_3} />
                    <p className="legend">Parsa Shrine - Afghanistan </p>
                </div>
                <div>
                    <img src={AFG_HERAT_CITADEL_1} />
                    <p className="legend">Herat Citadel - Afghanistan </p>
                </div>
                <div>
                    <img src={AFG_HERAT_CITADEL_2} />
                    <p className="legend">Herat Citadel - Afghanistan </p>
                </div>
                <div>
                    <img src={AFG_HERAT_CITADEL_3} />
                    <p className="legend">Herat Citadel - Afghanistan </p>
                </div>
                <div>
                    <img src={AFG_HERAT_CITY_VIEW} />
                    <p className="legend">Herat City - Afghanistan </p>
                </div>
                <div>
                    <img src={AFG_HERAT_GAW_SHRINE_1} />
                    <p className="legend">Herat Gawharshad Shrine - Afghanistan </p>
                </div>
                <div>
                    <img src={AFG_HERAT_GAW_SHRINE_2} />
                    <p className="legend">Herat Gawharshad Shrine - Afghanistan </p>
                </div>
                <div>
                    <img src={AFG_HERAT_MOSQUE_1} />
                    <p className="legend">Herat Mosque - Afghanistan </p>
                </div>
                <div>
                    <img src={AFG_HERAT_MOSQUE_2} />
                    <p className="legend">Herat Mosque - Afghanistan </p>
                </div>
                <div>
                    <img src={AFG_HERAT_MOSQUE_3} />
                    <p className="legend">Herat Mosque - Afghanistan </p>
                </div>
                <div>
                    <img src={AFG_HINDU_KUSH_1} />
                    <p className="legend">Hindu Kush - Afghanistan </p>
                </div>
                <div>
                    <img src={AFG_MAZAR_1} />
                    <p className="legend">Mazar Sharif Mosque - Afghanistan </p>
                </div>
                <div>
                    <img src={AFG_MAZAR_2} />
                    <p className="legend">Mazar Sharif Mosque - Afghanistan </p>
                </div>
                <div>
                    <img src={AFG_MAZAR_3} />
                    <p className="legend">Mazar Sharif Imams Ali Shrine - Afghanistan </p>
                </div>
                <div>
                    <img src={AFG_MAZAR_4} />
                    <p className="legend">Mazar Sharif Imam Ali Shrine - Afghanistan </p>
                </div>
                <div>
                    <img src={AFG_PANJ_1} />
                    <p className="legend">Panjshir Valley - Afghanistan </p>
                </div>
                <div>
                    <img src={AFG_PANJ_2} />
                    <p className="legend">Panjshir Valley - Afghanistan </p>
                </div>
                <div>
                    <img src={AFG_TUN_1} />
                    <p className="legend">Tunnel - Afghanistan </p>
                </div>
                <div>
                    <img src={IRA_ISF_MAY_1} />
                    <p className="legend">Isfahan Maydan - Iran </p>
                </div>
                <div>
                    <img src={IRA_ISF_MAY_2} />
                    <p className="legend">Isfahan Maydan - Iran </p>
                </div>
                <div>
                    <img src={IRA_ISF_MAY_3} />
                    <p className="legend">Isfahan Maydan - Iran </p>
                </div>
                <div>
                    <img src={IRA_PERS_1} />
                    <p className="legend">Persepolis - Iran </p>
                </div>
                <div>
                    <img src={IRA_PERS_2} />
                    <p className="legend">Persepolis - Iran </p>
                </div>
                <div>
                    <img src={IRA_PERS_3} />
                    <p className="legend">Persepolis - Iran </p>
                </div>
                <div>
                    <img src={IRA_PERS_4} />
                    <p className="legend">Persepolis - Iran </p>
                </div>
                <div>
                    <img src={IRA_TOMB_CYR} />
                    <p className="legend">Tomb of Cyrus the Great - Iran </p>
                </div>
                <div>
                    <img src={IRA_YAZ_ZOR_1} />
                    <p className="legend">Zoroaastrian Fire Temple - Iran </p>
                </div>
                <div>
                    <img src={IRA_YAZ_ZOR_2} />
                    <p className="legend">Zoroaastrian Fire Temple - Iran </p>
                </div>
                <div>
                    <img src={SYR_ALEP_CIT_1} />
                    <p className="legend">Aleppo Citadel - Syria </p>
                </div>
                <div>
                    <img src={SYR_ALEP_ST_SIM} />
                    <p className="legend">Aleppo St. Simeon - Syria </p>
                </div>
                <div>
                    <img src={SYR_DAM_UM1} />
                    <p className="legend">Damascus Umayyad Mosque - Syria </p>
                </div>
                <div>
                    <img src={SYR_DAM_UM2} />
                    <p className="legend">Damascus Umayyad Mosque - Syria </p>
                </div>
                <div>
                    <img src={SYR_DAM_UM3} />
                    <p className="legend">Damascus Umayyad Mosque - Syria </p>
                </div>
                <div>
                    <img src={SYR_PAL_1} />
                    <p className="legend">Palmyra - Syria </p>
                </div>
                <div>
                    <img src={SYR_PAL_2} />
                    <p className="legend">Palmyra - Syria </p>
                </div>
                <div>
                    <img src={SYR_PAL_3} />
                    <p className="legend">Palmyra - Syria </p>
                </div>
        </Carousel>
    )
}