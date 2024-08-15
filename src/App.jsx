import './App.css'
import Cards from './components/Cards/cards'
import Header from './components/Header/header'
import data from './data'

export default function App(){
  const card = data.map(item => {
    return(
      <Cards 
      key={item.id}
      item={item}
      />
    )
  })
  return(
    <>
    <Header />
    <div className='card-body'>
    {card}
    </div>
    </>
  )
}


