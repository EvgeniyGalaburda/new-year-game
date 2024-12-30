import React, { useState } from 'react'
import members from '../../members/members'
import wishes from './wish'
import MembersCard from '../MembersCard/MembersCard'
import style from './Game.module.css'
import { ImFire } from "react-icons/im";
import { FaWineBottle } from "react-icons/fa";
import { MdSportsGymnastics } from "react-icons/md";
import { FaCamera } from "react-icons/fa";

export default function Game() {
  const [players, setPlayers] = useState([]);
  const [wish, setWish] = useState({ desc: "Let's go" , category: ''});
  const [key, setKey] = useState(0); // Унікальний ключ для перерендеру

  const handleAnimation = () => {
    setKey((prevKey) => prevKey + 1); // Оновлення ключа
  };
  
  const showPlayers = () => {
      handleAnimation();
      // Вибір випадкового бажання
      const indexWish = Math.floor(Math.random() * wishes.length);
      const selectedWish = { ...wishes[indexWish] }; // Копія об'єкта, щоб уникнути мутацій
  
      // Вибір першого випадкового гравця
      const firstIndex = Math.floor(Math.random() * members.length);
      const firstPlayer = members[firstIndex];
  
      // Якщо бажання вимагає більше одного гравця
      if (selectedWish.quantity > 1) {
          let secondIndex;
  
          // Забезпечення унікальності другого гравця
          do {
              secondIndex = Math.floor(Math.random() * members.length);
          } while (secondIndex === firstIndex);
  
          const secondPlayer = members[secondIndex];
  
          // Замінюємо "Гравець1" і "Гравець2" у тексті бажання
          selectedWish.desc = selectedWish.desc
              .replace(/Гравець1/g, firstPlayer.name)
              .replace(/Гравець2/g, secondPlayer.name);
  
          // Оновлюємо стан з двома гравцями
          setPlayers([firstPlayer, secondPlayer]);
      } else {
          // Замінюємо тільки "Гравець1" у тексті бажання
          selectedWish.desc = selectedWish.desc.replace('Гравець1', firstPlayer.name);
  
          // Оновлюємо стан з одним гравцем
          setPlayers([firstPlayer]);
      }
  
      // Оновлюємо стан для бажання
      setWish(selectedWish);
  };

  const categoryIcon = (ctg) => {
    switch (ctg) {
      case '18+':
        return  <div key={key} className={style.icon}><ImFire /></div>;
      case 'alcohol':
        return <div key={key} className={style.icon}><FaWineBottle/></div>;
      case 'sport':
        return <div key={key} className={style.icon}><MdSportsGymnastics /></div>
      case 'photo':
        return <div key={key} className={style.icon}><FaCamera /></div>
      default:
        break;
    }
  }
  

  return (
    <div className={style.game}>
      {players[0] && <div className={style.cards}>
        {players[0] && <MembersCard member={players[0]}/>}
        {categoryIcon(wish.category)}
        {players[1] && <MembersCard member={players[1]}/>}
      </div>}
      <h3 key={key} className={style.wish}>{wish.desc}</h3>
      <button className={style.button} onClick={showPlayers}>Play</button>
      </div>
    
  )
}
