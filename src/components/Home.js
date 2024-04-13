import React from 'react';
import background from '../images/home_bg_2.webp';
import '../css/home.css'; // Assuming you have a CSS file for styling

const Home = () => {
  return (
    <section className='section' style={{ backgroundImage: `url(${background})`}}>
      <div className="content">
        <h5 style={{textAlign:'center'}}>Dear Service Users,</h5>      
        <div className="welcome-text">          
          <p>Welcome to Skilled Squad Central (S~S~C): Your One-Stop Solution for Local Services</p>
          <p>
            At Skilled Worker Central, we understand the importance of reliable and efficient service providers for your daily needs. 
            Whether it's home cleaning, plumbing, electrical work, welding, masonry, construction, or any other task requiring skilled labor, 
            we've got you covered.
          </p>
        </div>

        <div className="how-it-works">
          <h5>How It Works:</h5>
          <ul>
            <li><strong>Registration:</strong> It's simple! Just register with your name, phone number, email, and location or town/city to get started.</li>
            <li><strong>Task Creation:</strong> Create a task specifying your requirements, and we'll match you with the most suitable skilled worker for the job.</li>
            <li><strong>Assignment:</strong> Once your task is created, we'll assign it to a skilled worker based on their specialization and availability.</li>
            <li><strong>Work Progress:</strong> Track the progress of your task in real-time through our user-friendly interface.</li>
            <li><strong>Completion:</strong> Once the job is done to your satisfaction, mark it as completed.</li>
            <li><strong>Payment:</strong> Receive a hassle-free payment process through our secure platform.</li>
            <li><strong>Payment to Worker:</strong> We ensure that our skilled workers are paid promptly for their hard work and dedication.</li>
            <li><strong>Closing Task:</strong> Close the task once you're satisfied with the work done.</li>
          </ul>
        </div>

        <div className="why-choose">
          <h5>Why Choose Skilled Worker Central:</h5>
          <ul>
            <li><strong>Reliability:</strong> Our skilled workers are vetted for reliability and expertise, ensuring high-quality service every time.</li>
            <li><strong>Convenience:</strong> With our easy-to-use platform, finding skilled workers and managing tasks has never been easier.</li>
            <li><strong>Transparency:</strong> Track the progress of your task from start to finish, ensuring transparency and peace of mind.</li>
            <li><strong>Dedicated Support:</strong> Our customer support team is always here to assist you with any queries or concerns.</li>
          </ul>
          <p>Join Skilled Worker Central Today and Experience Hassle-Free Service Delivery!</p>
          <p>No matter what your needs may be, Skilled Worker Central is here to simplify your life and provide you with top-notch service at your fingertips. Join us today and let us take care of all your local service needs.</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
