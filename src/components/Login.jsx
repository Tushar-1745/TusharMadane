
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <form style={{ width: '450px', borderBottom: '1px solid #343a40', padding: '20px 40px', borderRadius: '8px', boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)' }}>
        <div className="form-group mb-3" style={{fontSize: '20px'}}>
          <label htmlFor="exampleInputEmail1" className="mb-1" >Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div className="form-group mb-3" style={{fontSize: '20px'}}>
          <label htmlFor="exampleInputPassword1" className="mb-1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <button type="button" className="btn btn-primary" style={{ margin: '10px 108px', padding: '5px 40px', fontSize: '20px' }}>
            Submit</button>

      </form>
    </div>
  );
}

export default Login;