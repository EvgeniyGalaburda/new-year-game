import React from 'react'
import MembersCard from '../MembersCard/MembersCard'
import members from '../../members/members'
import style from './Members.module.css'

export default function Members() {
  return (
    <div className={style.memberWrapper}>
        <h1 className={style.title}>Members</h1>
        <div className={style.members}>
            {members.map((member, i) => (<MembersCard key={i} member={member}/>))}
        </div>
    </div>
  )
}
