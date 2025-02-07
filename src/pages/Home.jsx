import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      {/* <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p> */}
      <ul>
        <li>
          <Link to="/">LandingPage</Link>
        </li>
        <li>
          <Link to="/schoolsignup">SchoolSignUp</Link>
        </li>
        <li>
          <Link to="/schoollogin">SchoolLogin</Link>
        </li>
        <li>
          <Link to="/instructorsignup">InstructorSignUp</Link>
        </li>
        <li>
          <Link to="/instructorlogin">InstructorLogin</Link>
        </li>
        <li>
          <Link to="/comingsoon">ComingSoon</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/certificate">Certificate</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/certificateshare">CertificateShare</Link>
        </li>
        <li>
          <Link to="/chatbot">ChatBot</Link>
        </li>
        <li>
          <Link to="/academicseducation">AcademicsEducation</Link>
        </li>
        <li>
          <Link to="/library">Library</Link>
        </li>
        <li>
          <Link to="/classes">Classes</Link>
        </li>
        <li>
          <Link to="/classsubject">ClassSubject</Link>
        </li>
        <li>
          <Link to="/classonedetail">ClassOneDetail</Link>
        </li>
        <li>
          <Link to="/homequizzes">HomeQuizzes</Link>
        </li>
        <li>
          <Link to="/quizzepage">QuizzePage</Link>
        </li>
        <li>
          <Link to="/quizzesubmit">QuizzeSubmit</Link>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
        <li>
          <Link to="/scholarship">Scholarship</Link>
        </li>
        <li>
          <Link to="/loansandgrants">LoansAndGrants</Link>
        </li>
        <li>
          <Link to="/classonelive">ClassOneLive</Link>
        </li>
        <li>
          <Link to="/skilldevelopment">SkillDevelopment</Link>
        </li>
        <li>
          <Link to="/vocationaldevelopment">VocationalDevelopment</Link>
        </li>
        <li>
          <Link to="/clanguagecourse">ClanguageCourse</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
