import  {useState} from 'react';
export default function StateColor(props){
  const [color, setColor] = useState('vermelho')

  return(
    <div>
      <p>Minha cor favorita é: {color}</p>
      <button onClick={ () => setColor(props.color)}>Mudar</button>
    </div>
  )
}
