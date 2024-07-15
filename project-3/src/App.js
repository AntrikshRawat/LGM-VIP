/* eslint-disable no-unused-vars */
import './App.css';
import { useEffect } from 'react';
import { createStudent } from './components/script';
function App() {
  useEffect(()=>{
    createStudent();
  })
  return (
    <>
    <div className="homeHeader">
      <p>Student Enrollment Form</p>
  </div>
  <section>
  <div className="container">
        <h2>Registration Form</h2>
        <form action="##">
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required></input>
            </div>
            <div className="form-group">
                <label htmlFor="website">Website:</label>
                <input type="url" id="website" name="website"></input>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required></input>
            </div>
            <div className="form-group">
                <label htmlFor="gender">Gender:</label>
                <select id="gender" name="gender" required>
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="image">Profile Image:</label>
                <label htmlFor="image" className="custom-file-upload" accept = "image/*">Choose File</label>
                <input type="file" id="image" name="image" accept="image/*" required></input>
            </div>
            <div className="form-group">
                <label>Skills:</label>
                <div className="skills-group">
                    <label><input type="checkbox" name="skills[]" value="HTML " className='skls'></input> HTML</label>
                    <label><input type="checkbox" name="skills[]" value=" CSS " className='skls'></input> CSS</label>
                    <label><input type="checkbox" name="skills[]" value=" JavaScript" className='skls'></input> JavaScript</label>
                </div>
            </div>
            <button className='btn btn-outline-success'>Register</button>
        </form>
    </div>
    <div className="list">
       <p>Enrolled Students</p>
      <div className="students"></div> 
    </div>
    </section>
  </>
  );
}

export default App;
