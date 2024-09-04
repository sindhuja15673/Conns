// import React, { useState } from 'react';
// import axios from 'axios';
// import './SignIn.css';
//  // Assume you have some styles for the form

// const SignIn = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError('');

//         try {
//             const response = await axios.post('/api/auth/signin', { email, password });
//             // Handle successful login here (e.g., save token, redirect)
//             console.log('Login successful:', response.data);
//         } catch (err) {
//             setError('Invalid email or password');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <>
//         <div className="signin-form">
//             <h2>Sign In</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="email">Email</label>
//                     <input
//                         type="email"
//                         id="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="password">Password</label>
//                     <input
//                         type="password"
//                         id="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </div>                
//                 {error && <div className="error-message">{error}</div>}
//                 <button className='formbutton' type="submit" disabled={loading}>
//                     {loading ? 'Signing in...' : 'Sign In'}
//                 </button>
//             </form>
//         </div>
//         </>
//     );
// };

// export default SignIn;




import React, { useState } from 'react';
import './SignIn.css';

const Login = () => {
    const[loginForm, setLoginForm]= useState({
        userName: '',
        password: ''
    })

    const [error, setError] = useState('');
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

     const validateUserName = (e) => {
        const { value } = e.target;
        if (value.length < 5 || value.length >15 ) {
            setError('Username must be at least 8 characters long.');
        } else  {
            setError(''); 
        }
    };

    const validatePassword = (password) => {
        const hasLowerCase = /[a-z]/.test(password);
        const hasUpperCase = /[A-Z]/.test(password);
        const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (password.length < 6 || password.length > 6) {
            return 'Password must be at least 6 characters long.';
        }
        if (!hasUpperCase) {
            return 'Password must contain at least one uppercase letter.';
        }
        if (!hasLowerCase) {
            return 'Password must contain at least one lowercase letter.';
        }
        if (!hasSymbol) {
            return 'Password must contain at least one symbol.';
        }
        return '';
    };


    const handleSubmit = (e)=>{
        e.preventDefault();
        const { userName, password } = loginForm;
        

        if (userName.length < 5 || userName.length > 15) {
            setError('Username must be at least 8 characters long.');
            return;
        }
         const passwordError = validatePassword(password);
        if (passwordError) {
            setError(passwordError);
            return;
        }

        setError('');
        
    }

    const {userName,password} = loginForm;
    const isButtonDisabled = !userName || !password;
    return (
        
        <div className='login'>
            <form className='form' onSubmit={handleSubmit} >
                <h2>Login Form</h2>
                {error && <p className='error'>{error}</p>}
                <div className='input-field'>          
                    <input type='text' name='userName' value={userName} onChange={handleChange} onBlur={validateUserName}>
                    </input>
                    <label >UserName:</label>
                </div>
                <div className='input-field'>            
                    <input type='password' name='password' value={password} onChange={handleChange}></input>
                    <label >Password:</label>
                </div>
                <button type='submit' disabled={isButtonDisabled}>Login</button>
            </form>
        </div>
    );
}

export default Login;
