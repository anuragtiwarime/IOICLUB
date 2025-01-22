
import ImageSlider from '../components/ImageSlider';
import MeetOurLeaderShip from '../components/MeetOurLeaderShip';
import StudentAccessPortal from '../components/StudentAccessPortal';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';


export default function Home() {
  
  return (
    <div className="pt-16">
      {/* Image Slider */}
      <ImageSlider />

     
  {/* Meet our Leadership */}
  <MeetOurLeaderShip />

  {/* Student Access Portal Section */}
  <StudentAccessPortal />


      

      {/* Gallery Section */}
      <Gallery></Gallery>
      {/* Footer */}
      <Footer />
    </div>
  );
}
