import '../CSS/About.css';
import ExperienceCard from '../components/ExperienceCard';
import SVELTE from '../assets/svelte.png';
import AWS from '../assets/aws.png';
import ASPNET from '../assets/asp-net-logo-png-1.png';
import NODE from '../assets/node.png';
import REACT from '../assets/react.png';
import AZURE from '../assets/azure.png';

const About = () => {
  return (
    <>
      <div className='curve' />
      <div className='about' name='about'>
        <div className='container'>
          <h2>Experience</h2>
          <div className='flex-container'>
            <ExperienceCard img={SVELTE} text='Svelte' />
            <ExperienceCard img={ASPNET} text='ASP.NET' />
            <ExperienceCard img={AZURE} text='Azure' />
            <ExperienceCard img={REACT} text='React' />
            <ExperienceCard img={NODE} text='Node.JS' />
            <ExperienceCard img={AWS} text='AWS' />
            <div className='clubs'>
              <div className='club'>
                <div className='zivaro' />
                <div className='experience-card'>
                  <div>
                    <h3>Zivaro - Software Developer Intern</h3>
                    <h4>2023-Present</h4>
                  </div>
                  <p className='experience-txt'>
                    Created the new Data Pipeline system for the Colorado
                    Department of Education, using a cloud-native, test-driven
                    approach with ASP.NET core, SvelteKit, Azure, and SQL
                    Server.
                  </p>
                  <a
                    className='about-btn'
                    target='_blank'
                    href='https://zivaro.com/'
                  >
                    Read more
                  </a>
                </div>
              </div>
              <div className='club'>
                <div className='ra' />
                <div className='experience-card'>
                  <div>
                    <h3>CU Boulder - Resident Advisor</h3>
                    <h4>2023-Present</h4>
                  </div>
                  <p className='experience-txt'>
                    Organized and promoted community-building events and programs for a community of 400 residents. Completed ongoing training in conflict resolution, crisis management, and
leadership development
                  </p>
                  <a
                    className='about-btn'
                    target='_blank'
                    href='https://www.colorado.edu/living/housing/undergraduate-housing/residence-life'
                  >
                    Read more
                  </a>
                </div>
              </div>
              <div className='club'>
                <div className='blueprint' />
                <div className='experience-card'>
                  <div>
                    <h3>Blueprint Boulder</h3>
                    <h4>2022-2023</h4>
                  </div>
                  <p className='experience-txt'>
                  Created the frontend for the Lafayette Empowerment Center
Parent/Staff/Student portal for after-school and summer youth programs.
                  </p>
                  <a
                    className='about-btn'
                    target='_blank'
                    href='https://blueprintboulder.org/'
                  >
                    Read more
                  </a>
                </div>
              </div>
              <div className='club'>
                <div className='robotics' />
                <div className='experience-card'>
                  <div>
                    <h3>CU Robotics</h3>
                    <h4>2022-2023</h4>
                  </div>
                  <p className='experience-txt'>
                  Created an interface to display various diagnostic firmware data using an
ESP32 and C++.
                  </p>
                  <a
                    className='about-btn'
                    target='_blank'
                    href='https://www.curobotics.net/'
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
