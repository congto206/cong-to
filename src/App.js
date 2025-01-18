import React from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <div className="logo">FPT Aptech</div>
        <div className="nav-links">
          <a href="#">About Us</a>
          <a href="#">Products</a>
          <a href="#">Booking</a>
          <a href="#">Locations</a>
        </div>
        <div className="auth-buttons">
          <a href="#">Sign In</a>
          <a href="#">Sign Up</a>
        </div>
      </div>

      {/* Banner */}
      <div className="banner">
        <h1>Frontend Web Development with React - Exam Paper</h1>
        <p>Duration: 60 minutes | Marks: 15</p>
      </div>

      {/* Categories Section */}
      <div className="section-title">
        <h2>Who Should Learn Programming in FPT Aptech?</h2>
      </div>
      <div className="categories">
        <div className="category">
          <img src="https://kenh14cdn.com/Images/Uploaded/Share/2010/11/22/221110HDhocnhom02.jpg" alt="High School Student" />
          <h3>High School Student</h3>
          <p>
            You want to pursue information technology, want to study in a
            professional programming training environment...
          </p>
        </div>
        <div className="category">
          <img src="https://kenh14cdn.com/203336854389633024/2023/8/8/photo-9-16914855658041870464644.jpg" alt="Student" />
          <h3>Student</h3>
          <p>
            You want to study in a professional programming training
            environment, with a systematic program and guaranteed output.
          </p>
        </div>
        <div className="category">
          <img src="https://nld.mediacdn.vn/291774122806476800/2021/5/4/67-baiphu-16201407898951223074919.jpg" alt="Working" />
          <h3>Working</h3>
          <p>
            You want to pursue information technology to enhance your career in
            a professional environment.
          </p>
        </div>
      </div>

      {/* Course Program Section */}
      <div className="course-section">
        <h2>What is the Course Program?</h2>
        <div className="technologies">
          <img src="https://s3-sgn09.fptcloud.com/codelearnstorage/Upload/Blog/react-js-co-ban-phan-1-63738082145.3856.jpg" alt="React JS" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1280px-PHP-logo.svg.png" alt="PHP" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTP5SEpzPH9uRbqqpXx_bMdmSLfHhREeocSQ&s" alt="Python" />
          <img src="https://s3-ap-southeast-1.amazonaws.com/homepage-media/wp-content/uploads/2020/03/04092434/NET_Core_Logo.png" alt=".NET Core" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP38fca_TFsvNbZ9yn66-zao0RptT8JoBF7A&s" alt="Spring Boot" />
        </div>
        <p>With a program design that includes 4 semesters with many importanttechnologies such as ReactJS, PHP, Python, .NET Core, Spring Boot,
          students are prepared to step into the programming world confidently.
        </p>
      </div>
    </div>
  );
};

export default App;