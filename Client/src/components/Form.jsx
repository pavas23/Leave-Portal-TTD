import "./form.css";

export default function Form() {
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
          action="http://127.0.0.1:5000/submit"
          className="px-4 max-w-3xl mx-auto space-y-6"
        >
          <h3>Welcome, <strong>{localStorage.getItem("displayName")}</strong></h3>
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
          <div class="flex justify-center">
            <div class="mb-3 xl:w-96 flex flex-row w-full">
              <label
                for="exampleFormControlInput1"
                class="form-label inline-block p-4 text-gray-700"
              >
                ID:
              </label>
              <input
                type="text"
                name="id"
                class="
                  form-control
                  block
                  px-3
                  w-4/5
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                id="exampleFormControlInput1"
                required
              />
            </div>
          </div>

          <div>
            <select
              name="branch"
              className="inline-flex justify-center text-center rounded-md border m-2 p-4 border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
            >
              <option default selected disabled>
                Department
              </option>
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
            </select>
          </div>

          <div>
            <select
              name="batch"
              className="inline-flex justify-center text-center m-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
            >
              <option default selected disabled>
                Batch
              </option>
              <option>2022</option>
              <option>2021</option>
              <option>2020</option>
              <option>2019</option>
              <option>2018</option>
            </select>
            <br />
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
