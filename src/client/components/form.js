import React, {Component} from 'react'

export default class Form extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            valor1:'',
            valor2:''
        }
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit(){
        let obj = {
            name: this.state.valor1,
            age: this.state.valor2
        };
        this.props.socket.emit('testForm', obj, res=>{
            console.log(res.message);
        })
        
    }
    render(){
        var nombre=''
        let age = 0
        this.props.socket.on('testForm', (obj)=>{
            nombre = obj.name;
            age = obj.age;
            alert(nombre);
        });
        return(
            <div>
                <input type='text' className='valor1' name='valor1' onChange={this.handleChange} value={this.state.valor1}/>
                <input type='text' className='valor2' name='valor2' onChange={this.handleChange} value={this.state.valor2}/>
                <input type='button' onClick={this.handleSubmit}/>
            </div>
        )
    }
}