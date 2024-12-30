import React from 'react'
import style from './MembersCard.module.css'
import { FaRegCheckCircle } from "react-icons/fa";

export default function MembersCard({member}) {
  return (
    <div className={style.card}>
        <div className={style.imgPH}>
            <img src={member?.img} alt={member.name} />
        </div>
        <h2 className={style.name}>{member.name}{member.name == 'Женя' && <FaRegCheckCircle/>}</h2>
    </div>
  )
}
