import { Dispatch, SetStateAction } from "react";

type GreetProps = {
    username: string;
    messageCount: number;
    isUserLoggedIn: boolean;
    setUserLoggedIn: Dispatch<SetStateAction<boolean>>;
} 

const Greet = (props: GreetProps) => {
  return (
    <>
        <div>
            {props.isUserLoggedIn 
                ? `Welcome ${props.username}, you have ${props.messageCount} messages!`
                : "Welcome Guest!"
            }
        </div>
        <button 
            type="button" 
            onClick={() => props.setUserLoggedIn(!props.isUserLoggedIn)}
        >
            {props.isUserLoggedIn ? "Logout" : "Login"}
        </button>
    </>
  )
}

export default Greet