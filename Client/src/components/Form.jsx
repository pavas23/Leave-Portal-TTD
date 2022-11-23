import "./form.css";

export default function Form() {

  const email = JSON.stringify(localStorage.getItem("email"));
  const name = JSON.stringify(localStorage.getItem("displayName"));

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div
      id="main-form"
      className="justify-center text-center bg-no-repeat w-full position: absolute"
    >
      <image src={require("../img/tdlogo-01.png")} alt="img" width="100px" />
      <div id="form-fields">
        <div id="form-heading" className="my-10 text-2xl">
          <h1>
            <strong>Time Table Division Leave Portal</strong>
          </h1>
        </div>
        <form
          method="POST"
          action={`http://127.0.0.1:5000/submit/?id=${email.slice(6, 10)}&batch=${email.slice(2, 6)}&email=${email}&name=${name}`}
          className="px-4 max-w-3xl mx-auto space-y-6"
        >
          <h3>Welcome, <strong>{localStorage.getItem("displayName")}</strong></h3>
          <h3>{"Last 4 digits: " + email.slice(6, 10)}</h3>
          <h3>{"Batch: " + email.slice(2, 6)}</h3>
          <br />
          <div class="flex justify-center">
            <div class="mb-3 xl:w-96">
              <label
                for="exampleFormControlTextarea1"
                class="form-label inline-block mb-2 text-gray-700"
              >
                Reason for Leave
              </label>
              <br />
              <textarea
                name="reason"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlTextarea1"
                rows="4"
                required
              ></textarea>
            </div>
          </div>
          <div>
            <select
              name="branch"
              className="inline-flex justify-center text-center rounded-md border m-2 p-4 border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
              required
            >
              <option>Biological Sciences</option>
              <option>Chemical Engineering</option>
              <option>Chemistry</option>
              <option>Civil Engineering</option>
              <option>Computer Science and Information Systems</option>
              <option>Economics and Finance</option>
              <option>Electrical and Electronics Engineering</option>
              <option>Humanities and Social Sciences</option>
              <option>Mathematics</option>
              <option>Mechanical Engineering</option>
              <option>Pharmacy</option>
              <option>Pharmacy</option>
            </select>
          </div>
          <div className="flex flex-row justify-center align-middle text-center">
            <button class="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
              Submit for Approval
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button
              class="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
