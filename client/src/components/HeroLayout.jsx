import BGVideo from "../assets/v1.mp4"


export default function HeroLayout(){

    function HeroContent(){
        return (
            <div className="relative text-white flex justify-center flex-col items-center text-center px-4 mt-[50%] md:mt-[15%]">
                <h1 className="text-2xl" data-period="2000" data-type='[ "Incredible!ndia", "Dekho Apna Desh!", " Explore the Indian Culture and Heritage." ]'></h1>
                <p className="text-xl">India is a country dotted with stunning wildlife diversity, and rich traditions. While the Western coast greets you with mouth-watering delicacies, the East part invites you to experience its greenery.</p>
                <a className="bg-white px-6 py-4 text-black" href="https://indianculture.gov.in/">Read More</a>
            </div>
        )
    }
    return (
        <div>
        <div className="min-h-screen w-full overflow-hidden relative">
          <video
            src={BGVideo}
            autoPlay
            loop
            muted
            className="object-cover absolute h-full w-full"
          ></video>
          <HeroContent />
        </div>
      </div>
    )
}