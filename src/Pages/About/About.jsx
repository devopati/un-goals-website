import React from "react";
import "./about.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import img11 from "../../assets/images/img11.jpg";
import img10 from "../../assets/images/img10.jpg";

const About = () => {
  return (
    <>
      <Header />
      <div className="about-container">
        <div className="about-top">
          <div className="about-top-card">
            <h1>Who We Are</h1>
          </div>
          <div className="about-top-card">
            <p>
              we aim at reducing thee greenhouse gases released by educating the commmunity on sustainable methods 
              of disposing of green waste,the website wil act as the hub for the knowledge and also the meeting point 
              for the community (marketplace ).we also plan to bring in companies dealing with green waste recycling 
              This will connect the people with the green waste to the companies hence creating a marketplace where we can sustainably 
              recycle green waste.</p>
          </div>
        </div>
        <div className="about-top-image">
          <img src={img11} alt="image" />
        </div>
        <div className="about-top about-bottom-cards">
          <div className="about-top-card about-card-bottom2">
          <h1>project limitations</h1>
            <p>
            Slide 2: Language Translation Challenge

            Lack of Language Translation: One of the limitations we have faced is the lack
             of language translation capability. Unfortunately, the language translation tool 
             provided by IBM is no longer available, making it difficult to reach users who may 
             not be proficient in the default language of our chatbot. This hinders our ability to
              effectively communicate with a diverse audience.
            Slide 3: Accessibility Challenges
            
            Android Application Development: Due to time constraints, we were unable to develop an
             Android application for our chatbot. This limits access for users who rely on low-cost 
             smartphones or may not have access to smartphones at all. We understand the importance of
              inclusivity and are actively exploring options to make our chatbot more widely accessible
               across different platforms.
             INTERGRATION VIA SMS
            
            Limitation of SMS Integration: Another challenge we encountered was the inability to integrate 
            our chatbot through SMS. This poses a barrier for users who do not have consistent internet access
             or cannot afford smartphones. We recognize the need for alternative channels of communication and
              are exploring potential solutions to make our chatbot accessible through SMS or other means.

              CHATBOT ACCURACY: the chatbot is still under development hence can answer limited set of questions
              and its accuracy ranges from 60 to 70% on the content we have trained it with.
            </p>
            <h1>future recommendations</h1>
            <p>
            Continuous Improvement: Despite these limitations, we remain committed to enhancing our 
            chatbot and expanding its reach. We are actively seeking alternative language translation 
            solutions, exploring Android application development options, and investigating methods to 
            integrate our chatbot via SMS.

            Inclusive Approach: We understand the importance of inclusivity and accessibility. Our goal
             is to ensure that our chatbot reaches a wider audience, including those with low incomes or
              limited access to technology. We will continue to work diligently to overcome these limitations 
              and make our chatbot     available to all users, regardless of their circumstances.
            </p>
            

            <h1>scope of project</h1>
            <p>
            The scope of the website entails creating awareness and providing comprehensive 
            information on sustainable methods for managing green waste, with a primary focus 
            on Thika Sub-county. Additionally, it offers a secondary coverage of green waste management 
            practices in Nairobi, Kenya, and the global context. The website features a dynamic marketplace 
            where users can conveniently buy and sell various green waste products, facilitating a circular 
            economy and promoting resource utilization. Furthermore, a dedicated blog page presents a diverse
             range of informative articles, enlightening readers on the intricacies of green waste management.
              To enhance practicality, the website incorporates a shop manager calculator, enabling users to 
              effectively manage their stock purchase, thereby reducing the occurrence of food waste resulting 
              from overstocking. By providing valuable insights and recommendations for optimizing home food 
              intake, the website aims to empower individuals, farmers, and businesses in Thika and beyond to
               embrace sustainable green waste management practices, fostering a more environmentally conscious
                community.
            </p>
          </div>
          <div className="about-top-card">
            <img src={img10} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
