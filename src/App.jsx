import './App.css';
import Cards from './Components/Cards';

function App() {
  const data = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR0xJElFTjH0mL41hLbT6uqKnVk3tdMLWEtqeq0bBQbjTGyt4b0343B9wQ0XxeUcGJQpg&usqp=CAU",
      name: "IPhone",
      memory: 256,
      price: 324,
      rating: 3.5,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR0xJElFTjH0mL41hLbT6uqKnVk3tdMLWEtqeq0bBQbjTGyt4b0343B9wQ0XxeUcGJQpg&usqp=CAU",
      name: "IPhone",
      memory: 256,
      price: 324,
      rating: 3.5,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR0xJElFTjH0mL41hLbT6uqKnVk3tdMLWEtqeq0bBQbjTGyt4b0343B9wQ0XxeUcGJQpg&usqp=CAU",
      name: "IPhone",
      memory: 256,
      price: 324,
      rating: 3.5,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR0xJElFTjH0mL41hLbT6uqKnVk3tdMLWEtqeq0bBQbjTGyt4b0343B9wQ0XxeUcGJQpg&usqp=CAU",
      name: "IPhone",
      memory: 256,
      price: 324,
      rating: 3.5
    }
  ];
  return (
    <>
    {data.map((items)=>(
     <Cards {...items}/>
        
      
    ))}
    </>
  );
}

export default App;
