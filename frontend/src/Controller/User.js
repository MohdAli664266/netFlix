class User 
{
  login =async function (email, password) 
  {
    await fetch("http://localhost:3000/find")
      .then((response) => response.json())
      .then((data) => {
        data.value.map((item)=>
        {
            if(item.email===email && item.password === password)
            {
                return true;
            }else
            {
                return false;
            }
        })
      })
      .catch((error) => console.log(error));
  };
}
export default new User();
