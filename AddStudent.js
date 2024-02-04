import React,{useState} from "react";

export default function AddStudent(){




return(

    <div className="container">
    <form>
  <div class="form-group">
    <label for="name">Employee Name</label>
    <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Employee Name"></input>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>


  <div class="form-group">
    <label for="age">Employee Age</label>
    <input type="text" class="form-control" id="age" placeholder="Enter Employee Age"></input>
  </div>

  <div class="form-group">
    <label for="gender">Employee Gender</label>
    <input type="text" class="form-control" id="age" placeholder="Enter Employee Age"></input>
  </div>
  

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>

)


}