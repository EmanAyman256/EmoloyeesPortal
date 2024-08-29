export interface User{
  id:number;
  name:string;
  email:string;
  address:{
    street:string,
    city:string
  };
  company:{
    name:string
  };
  phone:string;



}