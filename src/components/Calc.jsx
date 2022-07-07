import HelloPlus from './HelloPlus'

export default function Calc(){
  const calcNumbers = (n1, n2) => {
    return n1 * n2
  }
  return(
    <HelloPlus calcNumbers={calcNumbers}/>
  )
}