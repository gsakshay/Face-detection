import React, {Component} from 'react';
import Navigation from './components/Navigation.js';
import Logo from './components/Logo.js';
import ImageLinkForm from './components/ImageLinkForm.js';
import Rank from './components/Rank.js';
import FaceRecognition from './components/FaceRecognition.js';
import SignIn from './components/SignIn.js';
import Register from './components/Register.js';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';


const app = new Clarifai.App({
  apiKey: YourAPIkey,
});

const initialState ={
      input:'',
      imgUrl:'',
      box:{},
      route:'signin',
      isSignedIn:false,
      user:{

          id:'',
          name:'',
          email:'',

          entries:0,
          joined:''
      }
}
class App extends Component {
  constructor(){
    super();
    this.state=initialState;
  }


  loadUser=(data)=>{
    this.setState({user:{
         id:data.id,
         name:data.name,
         email:data.email,
         entries:data.entries,
         joined:data.joined
    }})
  }

  onInputChange=(event)=>{
    this.setState({input:event.target.value});
  }

  calculateFaceLocation=(data)=>{
    const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box;
    const image=document.getElementById('inputimage');
    const width=Number(image.width);
    const height=Number(image.height);
    return{
      leftCol:clarifaiFace.left_col*width,
      topRow:clarifaiFace.top_row*height,
      rightCol:width-(clarifaiFace.right_col*width),
      bottomRow:height-(clarifaiFace.bottom_row*height)
    }
  }

  displayFaceBox=(box)=>{
    this.setState({box:box});
    console.log(box);
  }

  onButtonSubmit=()=>{
     this.setState({imgUrl:this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input)
      .then(response=>{
        if(response){
          fetch('https://blooming-forest-44537.herokuapp.com/image',{
            method:'put',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
              id:this.state.user.id
            })
          })
          .then(response=>response.json())
          .then(count=>{
            this.setState(Object.assign(this.state.user,{entries:count}))
          })
          this.displayFaceBox(this.calculateFaceLocation(response))
        }
    })
      .catch(err=>console.log("Here is the mistake",err));
  }

  onRouteChange=(route)=>{
    if(route==='signout'){
      this.setState(initialState)
    }else if(route==='home'){
      this.setState({isSignedIn:true})
    }
    this.setState({route:route});
  }

  render(){
      return (
      <div className="App">
        <Particles className='particles'/>
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
        {this.state.route==='home'
        ?<div>
          <Logo/>
          <Rank name={this.state.user.name} entries={this.state.user.entries}/>
          <ImageLinkForm onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}/>
          <FaceRecognition box={this.state.box} imgUrl={this.state.imgUrl}/>
        </div>
        
        :(
          this.state.route==='signin'
          ?<SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          :<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>)
      }
      </div>
  );
  }
  
}

export default App;
