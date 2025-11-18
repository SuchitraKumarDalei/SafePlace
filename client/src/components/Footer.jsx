export default function Footer(){
    return (
         <footer>
            <div className="flex flex-col gap-5 px-[20%] py-10">
                <div className="border-b py-5">
                    <h2>Travel with us</h2>
                </div>
                <div className="flex justify-between">
                    <div className="footer-2 fot-info">
                        <h3 className="font-bold py-2 px-4 rounded-sm bg-gray-300">Dekho Apna Desh!</h3>
                        <ul>
                            <li><a href="https://indianculture.gov.in/">Indian Culture</a></li>
                            <li><a href="https://www.incredibleindia.org/content/incredible-india-v2/en.html">Incredible!ndia</a></li>
                            <li><a href="http://www.indiaculture.nic.in/hi">Ministry of Culture</a></li>
                            <li><a href="https://swachhbharatmission.gov.in/SBMCMS/index.htm">Swachh Bharat</a></li>
                        </ul>
                    </div>
                    <div className="footer-3 fot-info">
                        <h3 className="font-bold py-2 px-4 rounded-sm bg-gray-300">Visit For More</h3>
                        <ul className="font-bold">
                            <li><a href="https://www.mygov.in/">My Goverment</a></li>
                            <li><a href="https://www.digitalindia.gov.in/">Digital India</a></li>
                            <li><a href="https://tourism.gov.in/">Ministry of Tourism</a></li>
                        </ul>
                    </div>
                    <div className="footer-4 fot-info">
                        <h3 className="font-bold py-2 px-4 rounded-sm bg-gray-300">Contact Us</h3>
                        <ul>
                            <li><a href="https://github.com/SuchitraKumarDalei">Aditya</a></li>
                            <li><a href="https://github.com/adityaprasad365">Suchitra</a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <p className="copyright text-center bg-black text-white w-full py-5">Developed by Suchitra & Aditya</p>
    </footer>
    )
}