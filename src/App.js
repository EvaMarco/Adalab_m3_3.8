import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      text:'',
      lang: 'Español',
      age: 'Todas las edades',
      genre: []
    }
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange(event) {
    const targetId = event.currentTarget.id;
    const targetValue = event.target.value;
    const targetName = event.target.name;
    if(targetName !== null && targetName === 'age'){
      let obj = {
        [targetName] : targetId
      }
    this.setState(obj);
    }
    else if(targetName !== null && targetName === 'genre'){
      const newArray = [...this.state.genre];
      if(newArray.includes(targetId)){
        const index = newArray.indexOf(targetId);
        newArray.splice(index, 1);
        const obj = {genre: newArray};
        this.setState(obj);
      }
      else{
        newArray.push(targetId);
        const obj = {genre: newArray};
        this.setState(obj);
      }
    }
    else{
      let obj = {
        [targetId] : targetValue
      }
    this.setState(obj);
    }
  }
  render() {
    return (
      <div className="App">
        <form className='form' action="">
          <label htmlFor="name">Escribe tu nombre aquí: </label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            value = {this.state.name}
            onChange = {this.handleChange} 
            placeholder = 'Nombre'
          />
          <label htmlFor = "text">Descripción de la peli:</label>
          <textarea 
            rows="4" 
            cols="50" 
            id= 'text' 
            value={this.state.text}
            onChange = {this.handleChange} 
          >
          </textarea>
          <label htmlFor = "lang">Selecciona el idioma:</label>
          <select id='lang' onChange = {this.handleChange} >
            <option value = 'Español'>Español</option>
            <option value = 'Inglés'>Inglés</option>
            <option value = 'Portugués'>Portugés</option>
          </select>
          <div className="radio_div">
            <label htmlFor="Todas las edades">Todos los públicos</label>
            <input type="radio" name = "age" id="Todas las edades" onChange = {this.handleChange} checked={this.state.age === "Todas las edades"}/>
            <label htmlFor="7 años">7 años
            <input type="radio" name="age" id="7 años" onChange = {this.handleChange} checked = {this.state.age === '7 años'} />
            </label>
            <label htmlFor="12 años">12 años
            <input type="radio" name="age" id="12 años" onChange = {this.handleChange} checked = {this.state.age === '12 años'} />
            </label>
            <label htmlFor="16 años">16años
            <input type="radio" name="age" id="16 años" onChange = {this.handleChange} checked = {this.state.age === '16 años'} />
            </label>
            <label htmlFor="18">18 años
            <input type="radio" name="age" id="18 años" onChange = {this.handleChange} checked = {this.state.age === '18 años'} />
            </label>
          </div>
          <label htmlFor="Comedia"> Comedia
            <input type="checkbox" name="genre" id="Comedia" onChange = {this.handleChange} />
          </label>
          <label htmlFor="Drama"> Drama
            <input type="checkbox" name="genre" id="Drama" onChange = {this.handleChange} />
          </label>
          <label htmlFor="Fantasía"> Fantasía
            <input type="checkbox" name="genre" id="Fantasía" onChange = {this.handleChange} />
          </label>
          <label htmlFor="Acción"> Acción
            <input type="checkbox" name="genre" id="Acción" onChange = {this.handleChange} />
          </label>
          <label htmlFor="Familia"> Familia
            <input type="checkbox" name="genre" id="Familia" onChange = {this.handleChange} />
          </label>
          <label htmlFor="Terror"> Terror
            <input type="checkbox" name="genre" id="Terror" onChange = {this.handleChange} />
          </label>
        </form>
        <div className = 'card'>
          <p>{this.state.name}</p>
          <p>{this.state.text}</p>
          <p>{this.state.lang}</p>
          <p>{this.state.age}</p>
          <ul>
             {this.state.genre.map(item => (
            <li key={item}>{item}</li>
          ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
