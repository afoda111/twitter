import React from 'react'
import { Modal, makeStyles, Input, Button } from '@material-ui/core'
import {useState} from 'react'
import axios from 'axios'


function getModalStyle() {
    const top = 50 ;
    const left = 50 ;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(3, 3, 2),
    },
  }));


function Login() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [modalStyle] = useState(getModalStyle);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('')
    const [nickname, setNickname] = useState('')

 
    const SignUp=(event)=>{
        event.preventDefault()
        axios.post('/user', {
            email : `${email}`,
            password : `${password}`,
            userName : `${userName}`,
            displayName: `${nickname}`
        })
        setOpen(false)
        setEmail("")
        setPassword("")
        setUserName("")
        setNickname("")
      }


    return (
        <div>
             <div className="button__div">
              <Button className="signup__button" type="button" onClick={()=>setOpen(true)}>sign-up</Button>
            </div>
            <Modal
            open={open}
            onClose={()=> setOpen(false)}>
         <div style={modalStyle} className={classes.paper}>
          <form>
            <center>
            <Input type="email" placeholder="Enter your email" value={email} onChange ={(e)=> setEmail(e.target.value)} />
            <Input type="password" placeholder="Enter your password" value={password} onChange={(e)=> setPassword(e.target.value)} />
            <Input type="text" placeholder="Enter your username" value={userName} onChange = {(e)=> setUserName(e.target.value) } />
            <Input type="text" placeholder="Enter your Nickname" value={nickname} onChange={(e)=> setNickname(e.target.value) } />
            <Button type="submit" onClick={SignUp}>sign-up</Button>
            </center>
          </form>
        </div>
        
        
      </Modal>
      
        </div>
    )
}

export default Login
