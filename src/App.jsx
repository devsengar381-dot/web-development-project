import './App.css';

function Student(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Course: {props.course}</p>
      <p>Marks: {props.marks}</p>
    </div>
  );
}

function App() {
  return (
    <div className="container">

      <h1>Student Information</h1>

      <Student
        name="Rahul Sharma"
        course="Computer Science"
        marks="85"
      />

      <Student
        name="Anita Verma"
        course="Information Technology"
        marks="92"
      />

      <Student
        name="Rohan Gupta"
        course="Electronics"
        marks="78"
      />

      <p className="details">
        Name: devraj singh <br />
        Section: CSE-17 <br />
        Roll No: 2503201000446
      </p>

    </div>
  );
}

export default App;