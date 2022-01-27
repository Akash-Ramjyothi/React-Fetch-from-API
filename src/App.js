import React, { useEffect, useState } from 'react';
import './App.css';
import GetList from './components/GetList';

function App() {

  const [studentList, setStudentList] = useState([]);
  useEffect(()=>{
    async function fetchStudentList(){
      try{
        const requestUrl = 'https://61f2c7672219930017f508c6.mockapi.io/api/student';
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log(responseJSON);
        setStudentList(responseJSON);
      } catch {

      }
    }
    fetchStudentList();
  },[]);

  return (
      <GetList studentList={studentList}/>
  );
}

export default App;
