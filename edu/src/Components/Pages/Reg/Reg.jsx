// import React, { useEffect } from 'react'
// import "./Reg.css"

// function Reg() {
//     //js
//     useEffect(() => {

//         const scriptURL = 'https://script.google.com/macros/s/AKfycbxEW8qvGgW-GRuH5T_7BnpbaCt5-u6ZwMQyQ2sYqI9MlBpKdaGH1vG7mN9C5Yo_m14nOA/exec'
//         const form = document.forms['submit-to-google-sheet']

//         form.addEventListener('submit', e => {
//             e.preventDefault()
//             fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//                 .then(response => {
//                     msg.innerHTML = "Application Submitted Successfully !"
//                     setTimeout(function () {
//                         msg.innerHTML = ""
//                     }, 10000)
//                     form.reset()
//                 })
//                 .catch(error => console.error('Error!', error.message))
//         })

//         //Other verification:
//         const validateForm = () => {
//             var name = document.getElementById('name').value;
//             var mobile = document.getElementById('mobile').value;
//             var dob = document.getElementById('dob').value;
//             var adhar = document.getElementById('adhar').value;
//             var username = document.getElementById('username').value;
//             var pass = document.getElementById('pass').value;
//             var image = document.getElementById('image').value;
//             var regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
//             //var regex1 = /^([0-9]{4}[0-9]{4}[0-9]{4}$)|([0-9]{4}\s[0-9]{4}\s[0-9]{4}$)|([0-9]{4}-[0-9]{4}-[0-9]{4}$)/;



//             // if(!name){
//             //     alert("Enter Your Name");
//             //     return false

//             // }else if(!mobile){
//             //     alert("Enter Your Mobile Number");
//             //     return false;
//             // }else if(mobile.length != 10){
//             //     alert("Enter Your 10 Digit Mobile Number")
//             //     return false
//             // }else if(!dob){
//             //     alert("Enter Date Of Birth");
//             //     return false
//             // }else if(!adhar){
//             //     alert("Enter Your Adhar Number");
//             //     return false
//             // }else if(adhar.length != 12){
//             //     alert("Enter 12 Digit Adhar Number");
//             //     return false
//             // }else if(!username){
//             //     alert("Enter Username");
//             //     return false
//             // }else if(username.length < 8){
//             //     alert("Enter 8 Digit Username");
//             //     return false
//             // }else if(!pass){
//             //     alert("Enter Password");
//             //     return false;
//             // }else if(!regex.test(pass)){
//             //     alert("Enter Password With Any Special Charrector");
//             //     return false
//             // }else if(!image){
//             //     alert("Upload Your Image");
//             //     return false
//             // }




//             //calculate age

//             function calculateAge(dob) {

//                 const birthdateObj = new Date(dob);
//                 const currentDate = new Date();
//                 const age = currentDate.getFullYear() - birthdateObj.getFullYear();
//                 if (
//                     currentDate.getMonth() < birthdateObj.getMonth() ||
//                     (currentDate.getMonth() === birthdateObj.getMonth() &&
//                         currentDate.getDate() < birthdateObj.getDate())
//                 ) {

//                     return age - 1;
//                 } else {
//                     return age;
//                 }
//             }
//             const age = calculateAge(dob);










//             if (!name) {
//                 document.getElementById('mobilevalid').style.display = 'block';
//                 name.focus();
//                 return false
//             } else if (!mobile) {
//                 document.getElementById('mobilevalid').style.display = 'block';
//                 alert("Enter Your Mobile Number");
//                 mobile.focus();
//                 return false

//             } else if (!username) {
//                 document.getElementById('mobilevalid').style.display = 'block';
//                 alert("Enter Your User name");
//                 username.focus();
//                 return false
//             } else if (!pass) {
//                 document.getElementById('mobilevalid').style.display = 'block';
//                 alert("Enter Your Password");
//                 pass.focus();
//                 return false
//             } else if (!adhar) {
//                 document.getElementById('mobilevalid').style.display = 'block';
//                 alert("Enter Your Aadhar No");
//                 adhar.focus();




//             } else if (age < 18) {
//                 alert("You are not eligible");
//                 return false
//             }



//             return true
//         }



//         //Image - upload image less than 100 kb

//         document.getElementById("image").addEventListener("change", function () {
//             const image = this;
//             const selectFile = image.files[0];
//             if (selectFile) {
//                 const size = selectFile.size;
//                 const max = 900 * 1024;

//                 if (size > max) {
//                     alert(`Image file must be less than 900 kb `);

//                     image.value = "";
//                 } else {
//                     alert("Your Image is Successfully Accepted ")
//                 }
//             }

//         });

//         //Adhar Number -> add space after 4 digit number
//         adhar.addEventListener('keyup', function (e) {
//             // console.log(e.keyCode);
//             if (e.keyCode !== 8) {
//                 if (this.value.length === 4 || this.value.length === 9 || this.value.length === 14) {
//                     this.value = this.value += ' ';
//                 }
//             }
//         });








//     }, []);
//     var MyClass = React.createClass({
//         render: function () {
//             return (
//                 <div>
//                     <meta charSet="UTF-8" />
//                     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//                     <title>User Registration Form</title>
//                     <link href="https://fonts.googleapis.com/css2?family=Anton&family=Freehand&family=Poppins:wght@200;300&family=Ysabeau+SC:wght@500&display=swap" rel="stylesheet" />
//                     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossOrigin="anonymous" />
//                     <link rel="stylesheet" href="style.css" />
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-12">
//                                 <div className="form">
//                                     <div className="form-top">
//                                         <h4>Student Registration Form</h4>
//                                     </div>
//                                     <form name="submit-to-google-sheet">
//                                         <div className="row">
//                                             <div className="col-12 form-area">
//                                                 <h5>Personal Information</h5>
//                                                 <div className="row">
//                                                     <div className="col-12 col-md-4">
//                                                         <div className="form-group">
//                                                             <label htmlFor="exampleInputEmail1">Name <span style={{ color: 'red' }}><small>*</small></span></label>
//                                                             <input type="text" className="form-control" name="Name" id="name" aria-describedby="emailHelp" placeholder="Enter Your Name" required />
//                                                             <p id="mobilevalid"><i>Enter Your Name *</i></p>
//                                                         </div>
//                                                     </div>
//                                                     <div className="col-12 col-md-4">
//                                                         <div className="form-group">
//                                                             <label htmlFor="exampleInputEmail1">Mobile Number <span style={{ color: 'red' }}><small>*</small></span></label>
//                                                             <input type="text" className="form-control" name="Mobile" id="mobile" aria-describedby="emailHelp" placeholder="Enter Your Mobile Number" required />
//                                                             <p id="mobilevalid"><i>Enter Your Mobile no *</i></p>
//                                                         </div>
//                                                     </div>
//                                                     <div className="col-12 col-md-4">
//                                                         <div className="form-group">
//                                                             <label htmlFor="exampleInputEmail1">Email Id</label>
//                                                             <input type="email" className="form-control" name="Email" id="email" aria-describedby="emailHelp" pattern="^[a-zA-Z0-9]+@gmail\.com$" placeholder="Enter Your Email Id" required />
//                                                             {/* <p id="mobilevalid"><i>Enter Your Email Id *</i></p> */}
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="row">
//                                                     <div className="col-12 col-md-4">
//                                                         <div className="form-group">
//                                                             <label htmlFor="exampleInputEmail1">Date Of Birth <span style={{ color: 'red' }}><small>*</small></span></label>
//                                                             <input type="date" className="form-control" name="Dob" id="dob" aria-describedby="emailHelp" placeholder="Enter Your Name" required />
//                                                             <p id="mobilevalid"><i>Enter Your DOB *</i></p>
//                                                         </div>
//                                                     </div>
//                                                     <div className="col-12 col-md-4">
//                                                         <div className="form-group">
//                                                             <label htmlFor="exampleInputEmail1">Aadhar Number <span style={{ color: 'red' }}><small>*</small></span></label>
//                                                             <input type="text" className="form-control" name="Adhar" id="adhar" aria-describedby="emailHelp" placeholder="1111 2222 3333" maxLength={14} required />
//                                                             <p id="mobilevalid"><i>Enter Your Aadhar No *</i></p>
//                                                         </div>
//                                                     </div>
//                                                     <div className="col-12 col-md-4">
//                                                         <div className="form-group">
//                                                             <label htmlFor="exampleInputEmail1">User Name <span style={{ color: 'red' }}><small>*</small></span> <span style={{ color: 'red', fontSize: '12px' }}><small>( Username Minimum 8
//                                                                 Digit )</small></span></label>
//                                                             <input type="text" className="form-control" name="Username" id="username" aria-describedby="emailHelp" placeholder="Enter Username" required />
//                                                             <p id="mobilevalid"><i>Enter Your Username *</i></p>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="row">
//                                                     <div className="col-12 col-md-4">
//                                                         <div className="form-group">
//                                                             <label htmlFor="exampleInputEmail1">Password <span style={{ color: 'red' }}><small>*</small></span> <span style={{ color: 'red', fontSize: '12px' }}><small>( Password Wih Special
//                                                                 Charrector )</small></span></label>
//                                                             <input type="password" className="form-control" name="Pass" id="pass" aria-describedby="emailHelp" placeholder="*********" required />
//                                                             <p id="mobilevalid"><i>Enter Your Password *</i></p>
//                                                         </div>
//                                                     </div>
//                                                     <div className="col-12 col-md-4">
//                                                         <div className="form-group">
//                                                             <label htmlFor="exampleInputEmail1">Select Course <span style={{ color: 'red' }}>*</span></label>
//                                                             <select className="form-control" name="Course" id="course">
//                                                                 <option value="CSE">CSE</option>
//                                                                 <option value="Information Technology">Information Technology</option>
//                                                                 <option value="ECE">ECE</option>
//                                                                 <option value="EE">EE</option>
//                                                                 <option value="BCA">BCA</option>
//                                                             </select>
//                                                         </div>
//                                                     </div>
//                                                     <div className="col-12 col-md-4">
//                                                         <div className="form-group">
//                                                             <label htmlFor="exampleInputEmail1">Your Image <span style={{ color: 'red' }}><small>
//                                                                 *(Less than 100 kb)</small></span></label>
//                                                             <input type="file" className="form-control" name="Image" id="image" aria-describedby="emailHelp" accept="image/png, image/jpg, image/jpeg" required />
//                                                             <p id="mobilevalid"><i>JPG/JPEG.. format is required *</i></p>
//                                                         </div>
//                                                     </div>
//                                                     <div className="row">
//                                                         <div className="col-12">
//                                                             <div className="btn">
//                                                                 <input type="reset" id="reset" className="button-70" role="button" defaultValue="Reset" />
//                                                                 <input type="submit" name="ok" className="button-70" role="button" onclick="return validateForm()" defaultValue="Submit" />
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <span id="msg"> </span>
//                                         </div></form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             );
//         }
//     });
// }

// export default Reg