import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ClanguageCourse = React.lazy(() => import("pages/ClanguageCourse"));
const VocationalDevelopment = React.lazy(
  () => import("pages/VocationalDevelopment"),
);
const SkillDevelopment = React.lazy(() => import("pages/SkillDevelopment"));
const ClassOneLive = React.lazy(() => import("pages/ClassOneLive"));
const LoansAndGrants = React.lazy(() => import("pages/LoansAndGrants"));
const Scholarship = React.lazy(() => import("pages/Scholarship"));
const Resources = React.lazy(() => import("pages/Resources"));
const QuizzeSubmit = React.lazy(() => import("pages/QuizzeSubmit"));
const QuizzePage = React.lazy(() => import("pages/QuizzePage"));
const HomeQuizzes = React.lazy(() => import("pages/HomeQuizzes"));
const ClassOneDetail = React.lazy(() => import("pages/ClassOneDetail"));
const ClassSubject = React.lazy(() => import("pages/ClassSubject"));
const Classes = React.lazy(() => import("pages/Classes"));
const Library = React.lazy(() => import("pages/Library"));
const AcademicsEducation = React.lazy(() => import("pages/AcademicsEducation"));
const ChatBot = React.lazy(() => import("pages/ChatBot"));
const CertificateShare = React.lazy(() => import("pages/CertificateShare"));
const Profile = React.lazy(() => import("pages/Profile"));
const Certificate = React.lazy(() => import("pages/Certificate"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const ComingSoon = React.lazy(() => import("pages/ComingSoon"));
const InstructorLogin = React.lazy(() => import("pages/InstructorLogin"));
const InstructorSignUp = React.lazy(() => import("pages/InstructorSignUp"));
const SchoolLogin = React.lazy(() => import("pages/SchoolLogin"));
const SchoolSignUp = React.lazy(() => import("pages/SchoolSignUp"));
const LandingPage = React.lazy(() => import("pages/LandingPage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/schoolsignup" element={<SchoolSignUp />} />
          <Route path="/schoollogin" element={<SchoolLogin />} />
          <Route path="/instructorsignup" element={<InstructorSignUp />} />
          <Route path="/instructorlogin" element={<InstructorLogin />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/certificateshare" element={<CertificateShare />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/academicseducation" element={<AcademicsEducation />} />
          <Route path="/library" element={<Library />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/classsubject" element={<ClassSubject />} />
          <Route path="/classonedetail" element={<ClassOneDetail />} />
          <Route path="/homequizzes" element={<HomeQuizzes />} />
          <Route path="/quizzepage" element={<QuizzePage />} />
          <Route path="/quizzesubmit" element={<QuizzeSubmit />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/loansandgrants" element={<LoansAndGrants />} />
          <Route path="/classonelive" element={<ClassOneLive />} />
          <Route path="/skilldevelopment" element={<SkillDevelopment />} />
          <Route
            path="/vocationaldevelopment"
            element={<VocationalDevelopment />}
          />
          <Route path="/clanguagecourse" element={<ClanguageCourse />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
