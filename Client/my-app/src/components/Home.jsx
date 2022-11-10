import "../css/home.css";

export default function Home() {
  return (
    <>
      <div id="main-form">
        <div id="form-heading">
          Time Table Division Leave Portal
        </div>
        <div id="form-fields">
          <form method="POST" action="http://127.0.0.1:5000/submit">
            <input type="text" name="name" placeholder="Enter your name" /><br/>
            <textarea rows="5" cols="30" name="reason">
              Enter the reason for leave...
            </textarea><br/>
            <input type ="text" name = "id" placeholder="Enter your last four digits of id number XXXX"/><br/>
            Select your department of study
            <select name = "branch">
              <option>CSE</option>
              <option>EEE</option>
              <option>ECE</option>
              <option>ENI</option>
              <option>Mechanical</option>
              <option>Chemical</option>
              <option>Civil</option>
              <option>Economics</option>
              <option>Maths</option>
              <option>Physics</option>
              <option>Chemistry</option>
            </select><br/>
            Select your batch
            <select name = "batch">
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
            </select>
            <input type = "submit" value="Apply for Leave"/>
          </form>
        </div>
      </div>
    </>
  );
}

