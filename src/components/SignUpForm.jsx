import { useState } from "react";
import { useForm } from 'react-hook-form'

export default function SignUpForm(){

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");


    const { register, handleSubmit, formState:{errors}} = useForm();

    function onSubmit(data){
        // console.log("button is clicked");
        // alert("submitted | email:" + email + "password:" + password); 
        alert(`submitted with email ${data.email} and password ${data.password}`); // best practice javascript
        // event.preventDefault();
    }

    return (
        <div style={{maxWidth: 400, margin:"2rem auto"}}>
            <h1>Sign Up</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
            
            <div style={{marginBottom: "1rem"}}>
                <label>
                    Email
                    <input 
                        type="email" 
                        placeholder="Enter your email"
                        {...register("email" , {
                            required:"email is required bro"
                        })} 
                        // onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                 
                {errors.email && (
                    <p style={{color: "crimson"}}>{errors.email.message}</p>
                )}

            </div>
    
            <div style={{marginBottom: "1rem"}}>
                <label>
                    Password
                    <input 
                        type="password" 
                        placeholder="*******" 
                        {...register("password" , {
                            required:"password is required bro",
                            minLength: {
                                value: 4,
                                message: "Password must be atleast 4 characters"
                            },
                            maxLength: {
                                value: 8,
                                message: "Password must be most 8 characters"
                            }
                        
                        })}
                        // onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
 
                {errors.password && (
                    <p style={{color: "crimson"}}>{errors.password.message}</p> 
                )}
            </div>

        <button 
        type="submit">Create Account</button>

        </form>
            
        </div>

        //RESUME TUTORIAL: 52:01 - https://www.youtube.com/watch?v=Wt3isV2irrA
    )


}