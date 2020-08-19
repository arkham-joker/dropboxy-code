import React from 'react';
import {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Button,Grid,CssBaseline} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import logo from '../src/images/logo.svg';
import '../src/App.scss';
import { makeStyles } from '@material-ui/core/styles';
import pic2 from '../src/images/powder.jpg';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
const useStyles = makeStyles(({   
     Makeitinline :{
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
        marginLeft:'11rem'

      },
      log:{
    marginLeft:"30px",
    marginTop:"20px",
      },
      navlink:{
        width:"15rem",
    zIndex:"999",
    marginTop:"-2.5rem",
    marginLeft:"23%",
      },
     inupx:{
       marginTop:'-36px',
       marginRight:'50px',
      
     },
     marginleftcontent:{
       marginLeft:'5%',
     }
   
  }));
const Mainpage = () => {
 useEffect(() => {
   var level1=document.querySelector('#level1');
  level1.style.marginLeft='5rem';
  level1.style.color='white';
   var elem=document.querySelector("#secondContentWidthDualslider");
  var subelem=elem.querySelectorAll('div');
  subelem.forEach(item=>
    {item.addEventListener('mouseenter',function(){
      item.style.opacity=1;
    })
    item.addEventListener('mouseleave',function(){
      item.style.opacity= 0.5;
     })}
    )
    
  
 }, [])
    const styles=useStyles();
    return (
       
           
        <div>
            <CssBaseline/>
          <Grid container id='mainpage_whole' style={{backgroundColor:'#0d2f81'}}>
            
            <Grid item lg={12} md={12} sm={12} style={{backgroundColor:'#0d2f81'}} > 
    
    
            <img src={logo} className={styles.log}/> 
           
            
          
            <List component="nav" id='navlinks' className={styles.Makeitinline} className={styles.navlink}>
            <ListItem style={{marginRight:"10px",
    float:"right",
    wordWrap:"break-word",maxWidth:'7rem',padding:'0px',color:'white',fontSize:'16px'}}>
            <ListItemText primary="For Teams"  />
            </ListItem>
            <ListItem style={{marginLeft:" 0px",
    wordWrap:"break-word",maxWidth:'7rem',padding:'0px',color:'white',fontSize:'16px'}}>
            <ListItemText primary="For Individuals"  />
            </ListItem>
            </List>
                 
            
            <ul style={{whiteSpace:'nowrap',float:'right'}} className={styles.inupx} id='signin_signout'>
                <li style={{display:'inline-block',textDecoration:'none'}}>
                <Link to='/signin' style={{color:'white',fontSize:'16px'}}>SignIn/</Link>
                </li>
                
                <li style={{display:'inline-block',textDecoration:'none'}}>
                <Link to='/signup' style={{color:'white',fontSize:'16px'}}>SignUp</Link>
                </li>
            </ul>
          
            </Grid>
            <Grid item lg={12} md={12} sm={12}  style={{backgroundColor:'#0d2f81',marginBottom:"5%"}}>
            <h3 style={{ color:'#ffe7aa'}} className={styles.marginleftcontent}>Drop box</h3>
            
            
            <h1 style={{ color:'#ffe7aa'}} className={styles.marginleftcontent}>Focus on the matter<br/>than matter</h1>
            
            
            <p style={{ color:'white',fontSize:'16px'}} className={styles.marginleftcontent}>Dropbox is the world’s first smart workspace. We bring all your<br/> team’s content together while letting you use the tools you love<br/> And we help cut through the clutter, surfacing what matters most.</p>
            </Grid>
            <Grid item container lg={12} md={12} sm={12} style={{backgroundColor:'#ffe7aa'}}>
              <Grid item lg={8} md={8} sm={12}>
<img src={pic2} style={{width:'80%',height:'80%',marginLeft:'7%',marginTop:'-5%'}}></img>
</Grid>
<Grid item lg={3} md={3} sm={12} id='vanilacontent'>
  <div style={{marginTop:'5rem'}}>
  <h1 style={{color:'blue',fontSize:'30px'}}>Say goodbye to busy work</h1>
<p style={{fontSize:'16px'}}>Most “productivity” tools get in your way and<br/> constantly disrupt your flow. There’s a more enlightened<br/> way to work. Dropbox helps<br/> people be organized, stay focused, and get in sync with their teams.</p>

  </div>

</Grid>         
            </Grid>
            <Grid item container lg={12} md={12} sm={12} >
              <Grid item lg={12} md={12} sm={12}>
                <div id='level1'>
                <h1>File storage and sharing<br/> are just the beginning</h1>
                </div>
              </Grid>
              <Grid item lg={4} md={4} sm={4} id='secondContentWidthDualslider'>
                <div id='level2' >
<h1 >Be organized</h1>
<p>
Bring traditional files, cloud content, Dropbox<br/> Paper docs, and web shortcuts together in<br/> one place—and work the way that works for you<br/>         
</p> 
                </div>
<div id='level3'>
<h1>Stay focused</h1>  
<p>
Personalized suggestions give you files and<br/> folders when you need them so you spend<br/> less time searching.
  </p>
</div>
 <div id='level4'>
 <h1>
  Get in sync
    </h1> 
    <p>
    Coordinate with your team and push projects <br/>forward with the tools you use every day—all<br/> within Dropbox.
    </p>
 </div>
 
              </Grid>
              <Grid item lg={8} md={8} sm={8}>

              </Grid>
              <hr></hr>
<Grid item md={12} lg={12} sm={12} style={{backgroundColor:'#0d2f81'}}>
  <div style={{marginLeft:'5rem',marginBottom:'4rem'}}>
  <h1 style={{color:'white',fontSize:'35px',float:'left'}}>Learn more about the benefits of<br/> Dropbox</h1>
<Button variant='contained' style={{float:'right',marginTop:'2rem',marginRight:'5rem'}}>see feauture</Button>
  </div>

</Grid>

              </Grid> 
            <Grid container item lg={12} md={12} sm={12} id='whitexpage' style={{backgroundColor:'white'}}>
           <Grid item lg={6} md={6} sm={6}>
<div style={{marginLeft:'5rem',marginTop:'5rem',marginBottom:'5rem'}}>
  <h3 style={{color:'black'}}>Find the right Dropbox plan for you</h3>
  <h1 style={{color:'black'}}>For freelancers and solo<br/> workers</h1>
  <Button variant='contained' color='primary'>Get DRopBox</Button>
</div>
           </Grid>
           <Grid item lg={6} md={6} sm={6}>
           <div style={{marginTop:'4rem',marginTop:'8rem'}}>
  
  <h1 style={{color:'black'}}>For freelancers and solo<br/> workers</h1>
  <Button variant='contained' color='primary'>Get DropBox beausiness</Button>
</div>
           </Grid>
            </Grid>
             <Grid container item lg={12} sm={12} md={12} id='bottomlayer'>
              
               <Grid item lg={2} md={2} sm={1}>
               <List style={{float:'left',marginLeft:'4rem',color:'white'}} component="nav">
            <ListItem>
            <ListItemText primary="Dropbox" style={{color:'20px!important'}} />
            </ListItem>
            <ListItem>
            <ListItemText primary="desktop app"  />
            </ListItem>
            <ListItem>
            <ListItemText primary="mobile app"  />
            </ListItem>
            <ListItem>
            <ListItemText primary="plans"  />
            </ListItem>
            <ListItem>
            <ListItemText primary="security"  />
            </ListItem>
            <ListItem>
            <ListItemText primary="feature"  />
            </ListItem>
            </List>
               </Grid>
               <Grid item lg={2} md={2} sm={1} style={{float:'left',marginLeft:'4rem',color:'white'}}>
               <List component="nav">
            <ListItem>
            <ListItemText primary="Prooduct"  />
            </ListItem>
            <ListItem>
            <ListItemText primary="plus"  />
            </ListItem>
            <ListItem>
            <ListItemText primary="professional"  />
            </ListItem>
            <ListItem>
            <ListItemText primary="beausiness"  />
            </ListItem>
            <ListItem>
            <ListItemText primary="enterprise"  />
            </ListItem>
            <ListItem>
            <ListItemText primary=""  />
            </ListItem>
            </List>
               </Grid>
               <Grid item lg={2} md={2} sm={1} style={{float:'left',marginLeft:'1rem',color:'white'}}>
               <List component="nav">
            <ListItem>
            <ListItemText primary="company"  />
            </ListItem>
            <ListItem>
            <ListItemText primary="about us"  />
            </ListItem>
            <ListItem>
            <ListItemText primary="jobs"  />
            </ListItem>
            <ListItem>
            <ListItemText primary="press"  />
            </ListItem>
            <ListItem>
            <ListItemText primary="investor plans"  />
            </ListItem>
            <ListItem>
            <ListItemText primary="blog"  />
            </ListItem>
            </List>
               </Grid>
               <Grid item lg={2} md={2} sm={1} style={{color:'white',}}>
               <List component="nav">
            <ListItem>
            <ListItemText primary="support"  />
            </ListItem>
            <ListItem>
            <ListItemText primary="help center"  />
            </ListItem>
            <ListItem>
            <ListItemText primary="contanct us"  />
            </ListItem>
            <ListItem>
            <ListItemText primary="cookies"  />
            </ListItem>
            <ListItem>
            <ListItemText primary="privacy and terms"  />
            </ListItem>
            <ListItem>
            <ListItemText primary="map"  />
            </ListItem>
            </List>
               </Grid>
               <Grid item lg={3} md={3} sm={1} style={{color:'white'}}>
               <List component="nav">
            <ListItem>
            <ListItemText primary="community"  />
            </ListItem>
            <ListItem>
            <ListItemText primary="developer"  />
            </ListItem>
            <ListItem>
            <ListItemText primary="referals"  />
            </ListItem>
            <ListItem>
            <ListItemText primary="forum"  />
            </ListItem>
            <ListItem>
            <ListItemText primary=""  />
            </ListItem>
            <ListItem>
            <ListItemText primary=""  />
            </ListItem>
            </List>
               </Grid>
              
             </Grid>
             </Grid>
             
        </div>
       
    );
};

export default Mainpage;