import Page from './Page'
import AboutPWHackathon from './AboutTheHack';
import PrizesComponent from './Prizes'
import HackathonFooter from './Footer';
import TimeLine from './TimeLine';
import Process from './Process';
import Mentors from './Mentors';
export default function Hackathon() {
  return (<>
  <Page></Page>
  <Process></Process>
  <AboutPWHackathon></AboutPWHackathon>
  <TimeLine></TimeLine>
  <PrizesComponent/>
  <Mentors></Mentors>
  <HackathonFooter></HackathonFooter>
  </>);
}