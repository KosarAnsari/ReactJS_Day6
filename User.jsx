//function User({ name, age, email, })
function User({ Employee }) {
  //console.log(props.name);
  return (
    <>
      <h3>User Component</h3>
      <hr/>
      {/*<p>Name:{name}</p>
      <p>Age:{age}</p>
  <p>Email:{email}</p>*/}
      <p>Name: {Employee.name}</p>
      <p>Age: {Employee.age}</p>
      <p>Id: {Employee.id}</p>
      <p>Email: {Employee.email}</p>
      <p>City: {Employee.city}</p>
      <p>Country: {Employee.country}</p>
     
    </>
  );
}
export default User;
