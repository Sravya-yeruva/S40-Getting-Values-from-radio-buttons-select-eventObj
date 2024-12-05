import React, { useRef } from 'react'

function MarkSheet() {
    let TelInputRef=useRef();
    let HinInputRef=useRef();
    let EngInputRef=useRef();
    let MathInputRef=useRef();
    let SciInputRef=useRef();
    let SocInputRef=useRef();
    let FirstNameInputRef=useRef();
    let LastNameInputRef=useRef();
    let StateSelectRef=useRef();
    let MaleRBRef=useRef();
    let FemaleRBRef=useRef();
    let userGender="";
    let userMaritual="";

  return (
    <div>
       <form>
        <div>
            <label>First Name:</label>
            <input type="text" ref={FirstNameInputRef}></input>
        </div>
        <div>
            <label>Last Name:</label>
            <input type="text" ref={LastNameInputRef}></input>
        </div>
        <div>
            <label>Age:</label>
            <input type="number"></input>
        </div>
        <div>
            <label>State:</label>
            <select ref={StateSelectRef}>
                <option>Select</option>
                <option>Andhra Pradesh</option>
                <option>Arunachal Pradesh</option>
                <option>Kerala</option>
                <option>Tamil Nadu</option>
                <option>Telangana</option>
                <option>Assam</option>
                <option>7Chattisgarh</option>
                <option>Goa</option>
                <option>Gujarat</option>
                <option>Haryana</option>
                <option>Himachal Pradesh</option>
                <option>Jharkhand</option>
                <option>Karnataka</option>
                <option>Madhya Pradesh</option>
                <option>Maharashtra</option>
                <option>Manipur</option>
                <option>Meghalaya</option>
                <option>Mizoram</option>
                <option>Nagaland</option>
                <option>Odisha</option>
                <option>Punjab</option>
                <option>Rajasthan</option>
                <option>Sikkim</option>
                <option>Tripura</option>
                <option>Uttar Pradesh</option>
                <option>Uttarkhand</option>
                <option>West Bengal</option>
            </select>
        </div>
        <div>
            <label>Gender:</label>
            <input type="radio" name="Gender" ref={MaleRBRef} 
            onChange={()=>{
                if(MaleRBRef.current.checked == true){
                    userGender="Male";

                }
            }}
            
            ></input>
            <label className='radio'>Male</label>
            <input type="radio" name="Gender" ref={FemaleRBRef}
            onChange={()=>{
                if(FemaleRBRef.current.checked == true){
                    userGender="Female";
                }
            }}
            ></input>
            <label className='radio'>Female</label>
        </div>
        <div>
            <label style={{width:"145px"}}>Maritual Status:</label>
            <input type="radio" name="Maritual Status"
            onChange={(eventObj)=>{
                console.log(eventObj.target.checked);
                if(eventObj.target.checked==true)
                    userMaritual="Single";
            }}></input>
            <label className='radio'>Single</label>
            <input type="radio" name="Maritual Status"
            onChange={(eventObj)=>{
                console.log(eventObj.target.checked);
                if(eventObj.target.checked==true){
                    userMaritual="Married";
                }

            }}
            ></input>
            <label className='radio'>Married</label>
        </div>

        <div>
            <label>Telugu Marks:</label>
            <input type="number" ref={TelInputRef}></input>
        </div>
        <div>
            <label>Hindi Marks:</label>
            <input type="number" ref={HinInputRef}></input>
        </div>
        <div>
            <label>English Marks:</label>
            <input type="number" ref={EngInputRef}></input>
        </div>
        <div>
            <label>Maths Marks:</label>
            <input type="number" ref={MathInputRef}></input>
        </div>
        <div>
            <label>Science Marks:</label>
            <input type="number" ref={SciInputRef}></input>
        </div>
        <div>
            <label>Social Marks:</label>
            <input type="number" ref={SocInputRef}></input>
        </div>
        <div>
            <button type="button" onClick={()=>{
                let FirstName=FirstNameInputRef.current.value;
                let LastName=LastNameInputRef.current.value;
                let State=StateSelectRef.current.value;
                let TelMarks=Number(TelInputRef.current.value);
                let HinMarks=Number(HinInputRef.current.value);
                let EngMarks=Number(EngInputRef.current.value);
                let MathMarks=Number(MathInputRef.current.value);
                let SciMarks=Number(SciInputRef.current.value);
                let SocMarks=Number(SocInputRef.current.value);
                let TotalMarks=TelMarks+ HinMarks+ EngMarks+ MathMarks+ SciMarks+ SocMarks;
                let percentage=(TotalMarks/600)*100;

                let salutation="";
                if(userGender == "Male"){
                    salutation ="Mr. "
                }
                if(userGender == "Female"){
                    if(userMaritual=="Single"){
                          salutation="Miss."

                    }
                    if(userMaritual=="Married")
                        salutation="Mrs."
                  
                }
            

                alert(` ${salutation} ${FirstName} ${LastName} From ${State} Got Total Result ${TotalMarks} with ${percentage.toFixed(2)}%`);

            
            

            }}>Result</button>
        </div>
        
       </form>
    </div>
  )
}

export default MarkSheet
