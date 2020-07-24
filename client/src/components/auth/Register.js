import React,{useState,useContext} from 'react'

import AuthContext from '../../context/auth/AuthContext'

 const Register = () => {

    const authContext = useContext(AuthContext)
    const {register} = authContext

    const [user,setUser] = useState({
        name: '',
        email:'',
        password:'',
        password2:''
    })
    // Destructuring user
    const {name,email,password,password2} = user

    const onChange = e => {
        setUser({
            ...user, [e.target.name] : e.target.value
        })
    }
    const onSubmit = e => {
        e.preventDefault()
        console.log(user)
        register(user)

    }

    return (
        <form onSubmit={onSubmit}>
        <h3>Sign Up</h3>

        <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" name="name" placeholder="Name" value={name} onChange={onChange} />
        </div>

        <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" name="email" placeholder="Enter email" value={email} onChange={onChange} />
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" name="password" placeholder="Enter password" value={password} onChange={onChange} />
        </div>

        <div className="form-group">
            <label>Re-type Password</label>
            <input type="password" className="form-control" name="password2" placeholder="Re-enter password" value={password2} onChange={onChange} />
        </div>

        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
        <p className="forgot-password text-right">
            Already registered <a href="#">sign in?</a>
        </p>
    </form>
    )
}
export default Register