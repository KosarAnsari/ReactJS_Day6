import User from './User.jsx';
import College from './College.jsx';
import Student from './Student.jsx';
import { useState } from 'react';
function App() {
  //let Username = 'Gracy Conquest';
  //let age = 29;
  //let email = 'gracycon425@gmail.com';

  let Emp1 = {
    name: 'Smith Johnson',
    age: 34,
    id: 8720104,
    email: 'smithjo321@gmail.com',
    city: 'Washington DC',
    country: 'USA',
  };

  let Emp2 = {
    name: 'Hanna Gray',
    age: 30,
    id: 8720105,
    email: 'hannagr654@gmail.com',
    city: 'California',
    country: 'USA',
  };

  let CollegeNames = ['IIT', 'MIT', 'NIT', 'APIIT', 'PIET'];
  const [student, setStudent] = useState();

  return (
    <>
      <h1>Props in React JS</h1>
      {/*<User name={'JOHN DOE'} age={34} email="johndoe@gmail.com" />
      <User name={Username} age={age} email={email} />*/}
      <User Employee={Emp1} />
      <User Employee={Emp2} />

      <College names={CollegeNames} />
      {student && <Student name={student} />}
      <button onClick={() => setStudent('Bhaskar')}>Update Student Name</button>
    </>
  );
}
export default App;
