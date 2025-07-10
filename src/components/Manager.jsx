import React from "react";
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  const getPasswords = async () => {
    let req = await fetch("http://localhost:8080/");
    let passwords = await req.json();
    console.log(passwords);
    setPasswordArray(passwords);
  };

  useEffect(() => {
    getPasswords();
  }, []);

  const copyText = (text) => {
    toast.info("copied to clipboard", {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: "Bounce",
    });
    navigator.clipboard.writeText(text);
  };

  const showPassword = () => {
    passwordRef.current.type = "text";
    console.log(ref.current.src);
    if (ref.current.src.includes("/icons/image.png")) {
      ref.current.src = "/icons/image-eye-cross.png";
      passwordRef.current.type = "password";
    } else {
      passwordRef.current.type = "text";
      ref.current.src = "/icons/image.png";
    }
  };

  const savePassword = async () => {
    if (
      form.site.length > 3 &&
      form.username.length > 3 &&
      form.password.length > 3
    ) {
      const id = form.id || uuidv4();
      if (form.id) {
        await fetch("http://localhost:8080/", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: form.id }),
        });
      }
      setPasswordArray([...passwordArray, { ...form, id }]);
      await fetch("http://localhost:8080/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...form, id }),
      });
      setform({ site: "", username: "", password: "" });
      toast.info("Password Added!", {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.info("Plz enter valid credentials");
    }
  };

  const deletePassword = async (id) => {
    console.log("deleting password with id", id);
    let c = confirm("do you really want to delete this credentials?");
    if (c) {
      setPasswordArray(passwordArray.filter((item) => item.id !== id));
      let res = await fetch("http://localhost:8080/", {
        method: "DELETE",
        headers: { "Content-Type": " application/json" },
        body: JSON.stringify({ id }),
      });

      //   localStorage.setItem(
      //     "password",
      //     JSON.stringify(passwordArray.filter((item) => item.id !== id))
      //   );

      toast.info("password deleted!", {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        // transition: "Bounce",
      });
    }
  };

  const editPassword = (id) => {
    console.log("editing password with id", id);
    setform({ ...passwordArray.filter((item) => item.id === id)[0], id: id });
    setPasswordArray(passwordArray.filter((item) => item.id !== id));
    // localStorage.setItem("password", JSON.stringify([...passwordArray, form]))
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        // transition="Bounce"
      />
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div
          className="absolute bottom-auto left-auto right-0 top-0 
        h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] 
        rounded-full bg-[rgba(173,109,244,0.5)] opacity-50
        blur-[80px]"
        ></div>
      </div>

      <div className="p-2 md:p-0 md:mycontainer min-h-[84vh] mt-16 ">
        <h1 className="text-4xl mt-5 text font-bold text-center">
          <span className="text-green-700"> /&lt;</span>

          <span>Pass-</span>
          <span className="text-green-700">CREDENTIALS/&gt;</span>
        </h1>
        <p className="text-green-900 mb-5 text-lg text-center">
          MY own password Manager
        </p>

        <div className="text-black  flex flex-col p-4 gap-4 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter website or paste URL"
            className="rounded-full border 
            border-green-500 hover:border-black hover:border-2 w-full p-4 py-1"
            name="site"
            type="text"
            id="site"
          />
          <div className="flex flex-col md:flex-row  w-full justify-between gap-8">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="rounded-full border
              border-green-500 hover:border-black hover:border-2 w-full p-4 py-1"
              type="text"
              name="username"
              id="username"
            />
            <div className="relative">
              <input
                ref={passwordRef}
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="rounded-full border
                border-green-500 hover:border-black hover:border-2 w-full p-4 py-1"
                name="password"
                type="password"
                id="password"
              />
              <span
                className="absolute right-[3px] top-[4px] cursor-pointer"
                onClick={showPassword}
              >
                {/* show{" "} */}
                <img
                  ref={ref}
                  className="p-2"
                  width={30}
                  src="\icons\\image-eye-cross.png"
                  alt="eye"
                />
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="flex justify-center items-center gap-2 bg-green-400
      hover:bg-green-500 rounded-full px-8 py-2 w-fit border hover:border-green-900"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add password
          </button>
        </div>
        <div className="passwords">
          <h2 className="font-bold test-2xl py-4">Your Login CREDENTIALS</h2>
          {passwordArray.length === 0 && <div> no passwords to save</div>}
          {passwordArray.length != 0 && (
            <table className="table-auto w-full rounded-md overflow-hidden mb-20">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="py-2">Account</th>
                  <th className="py-2">username</th>
                  <th className="py-2">password</th>
                  <th className="py-2">Manage</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className=" py-2 border border-white text-center  ">
                        <div className="flex items-center justify-center">
                          <a
                            href={item.site}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="hover:underline text-blue-700">
                              {item.site}
                            </span>
                          </a>
                          <div
                            className="lordiconcopy size-7 cursor-pointer ml-2"
                            onClick={() => {
                              copyText(item.site);
                            }}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>

                      <td className=" py-2 border border-white text-center ">
                        <div className="flex items-center justify-center">
                          <span>{item.username}</span>
                          <div
                            className="lordiconcopy  size-7 cursor-pointer"
                            onClick={() => {
                              copyText(item.username);
                            }}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="  py-2 border border-white text-center ">
                        <div className="flex items-center justify-center">
                          <span>{item.password}</span>
                          <div
                            className="lordiconcopy size-7 cursor-pointer "
                            onClick={() => {
                              copyText(item.password);
                            }}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="justify-center py-2 border border-white text-center">
                        <span
                          className="cursor-pointer mx-1 px-5"
                          onClick={() => {
                            deletePassword(item.id);
                          }}
                        >
                          <lord-icon
                            style={{
                              width: "25px",
                              height: "25px",
                              paddingTop: "3px",
                              paddingLeft: "3px",
                            }}
                            src="https://cdn.lordicon.com/skkahier.json"
                            trigger="hover"
                          ></lord-icon>
                        </span>
                        <span
                          className="cursor-pointer mx-1"
                          onClick={() => {
                            editPassword(item.id);
                          }}
                        >
                          <lord-icon
                            style={{
                              width: "25px",
                              height: "25px",
                              paddingTop: "3px",
                              paddingLeft: "3px",
                            }}
                            src="https://cdn.lordicon.com/gwlusjdu.json"
                            trigger="hover"
                          ></lord-icon>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
