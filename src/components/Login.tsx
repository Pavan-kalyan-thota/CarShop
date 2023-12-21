import { useState } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import Stack from '@mui/material/Stack';
import CarList from "./CarList";
import { Snackbar } from "@mui/material";

type User = {
    username: string;
    password: string;
}

function Login() {
    const [user, setUser] = useState<User>({
        username: '',
        password: ''
    });
    const [isAuthnenticated, setAuth] = useState(false);
    const [open, setOpen] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const handleLogin = () => {
        axios.post(import.meta.env.VITE_API_URL + "/login", user, {
            headers: { 'Content-Type': 'application/json' }
        }).then(res => {
            const jwtToken = res.headers.authorization;
            if(jwtToken != null){
                sessionStorage.setItem("jwt", jwtToken);
                setAuth(true);
            }
        }).catch(() => setOpen(true));
    }

    const handleLogOut = () => {
        setAuth(false);
        sessionStorage.setItem("jwt", "");
    }

    if(isAuthnenticated){
        return <CarList logOut={handleLogOut} />;
    }
    else{
        return (
            <>
                <Stack spacing={2} alignItems="center" mt={2}>
                    <TextField name="username" label="Username" onChange={handleChange}></TextField>
                    <TextField type="password" name="password" label="Password" onChange={handleChange}></TextField>
                    <Button variant="outlined" color="primary" onClick={handleLogin}>Login</Button>
                </Stack> 
                <Snackbar 
                    open={open}
                    autoHideDuration={3000}
                    onClose={() => setOpen(false)}
                    message="Login Failed: Please check your username and password"
                    />
            </>
        );
    }
}

export default Login;