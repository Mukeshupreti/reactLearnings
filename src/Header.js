import Image from './Image';

export default function Header(){


    const myname="Yash";

   /* Constructor(props){
        super(props);
        this.state={};

    }

*/

    function  sayHello(name){
        return name;
    }
    return (

        <header className="App-header">
            <h1>hello {sayHello("Ravi")}</h1>
            <h2>{myname}</h2>
            <h3>{6+7}</h3>
            <Image/>
            <h1>Hello Mukesh</h1>
            <h2>Welcome to react</h2>
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>

        </header>
    );
}

//export default Header;