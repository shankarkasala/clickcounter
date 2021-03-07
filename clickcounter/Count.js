import React, { Component } from 'react'

 class Count extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              count:0
         }
     this.changecount=this.changecount.bind(this)
     this.increment=this.increment.bind(this)

     }
     changecount(){
         this.setState(prevState=>({
             count:prevState.count+1
         }))
         
     }
     increment(){
         this.changecount()
         this.changecount() 
          this.changecount()
     }
    render() {
        const {count}=this.state
        return (
            <div>
                <button onClick={()=>this.changecount()}>count-{count}</button>
                <br/>
                <button onClick={()=>this.increment()}>count-{count}</button>

            </div>
        )
    }
}

export default Count
