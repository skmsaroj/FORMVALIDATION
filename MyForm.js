import React, { useState } from 'react';

function MyForm(props) {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");

    const [eusername, setEusername] = useState("");
    const [eemail, setEemail] = useState("");
    const [epassword, setEpassword] = useState("");
    const [ecpassword, setEcpassword] = useState("");


    const [ucolor, setUcolor] = useState("");



    function validate() {
        if (username.length > 8) {
            setUsername('');
            setUcolor("green");
        } else {
            setEusername("username must be 8 letters long");
            setUcolor("red")
        }

        if (email.includes('@gmail')) {
            setEmail('');
        } else {
            setEemail("email should have @gmail")
        }

        if (password.length > 8 && password.includes('.')) {
            setPassword('');
        } else {
            setEpassword("pass greater than 8 char")
        }

        if (password !== '' && password === cpassword) {
            setCpassword("");
        }
        else{
            setEcpassword("password did not match")  
        }
    }

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1> Form Validation </h1>
                <hr style={{ width: "300px", backgroundColor: "blue", height: "2px" }} />
            </div>


            <div style={{ textAlign: "center" }}>
                <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ borderColor: ucolor }}
                />
                <p>{eusername}</p>
                <br></br>

                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p>{eemail}</p>
                <br></br>
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /> <p>{epassword}</p>
                <br></br>
                <input
                    type="password"
                    placeholder=" Confirm password"
                    value={cpassword}
                    onChange={(e) => setCpassword(e.target.value)}
                />  <p>{ecpassword}</p>
                <br></br>
                <button onClick={validate}>submit</button>
            </div>


        </>
    );
}

export default MyForm;  