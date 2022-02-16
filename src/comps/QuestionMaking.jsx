import React, { useEffect, useState } from "react";
import { collection, getDocs } from 'firebase/firestore'
import { db } from './../firebase.config'

const QuestionMaking = () => {
  const dbRef = collection(db, "qnaset")


  useEffect(() => {
    const retrive = async () => {
      const data = await getDocs(dbRef)
    }
    retrive()
  });
  return (
    <div>
      <button>change</button>
    </div>
  )
};

export default QuestionMaking;