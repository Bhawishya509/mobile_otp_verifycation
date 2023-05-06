import { useState, useEffect, createRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./dashboard.css";
function Dashboard({ setd ,datas}) {
  const refi = [0, 0, 0, 0, 0, 0].map((i) => createRef());
  const [show, setShow] = useState(true);
  const [verifys,setverifys]=useState(false)
   //react tostify

    

  let boxes = [];
  let main_data = [1, 2, 3, 4, 5, 6]; // for kept reffernce 
  let values_index_match = 0; // for increaseing index


const numberchange=(e)=>
{
  setd((old_data) => {
    old_data.checks=false;
    return { ...old_data}; // set a data in state
  });
  setShow(false);

}

  const down = (e) => {
    if (refi[values_index_match].current.value) return;
    else if (e.key >= 0 && e.key <= 9 && values_index_match <= 4) {
      values_index_match++;
      setTimeout(() => {
        refi[values_index_match].current.focus();
      }, 10);
    } else if (
      e.key === "Backspace" &&
      values_index_match > 0 &&
      values_index_match <= 5
    ) {
      values_index_match--;
      setTimeout(() => {
        refi[values_index_match].current.focus();
      }, 10);
    } else;
  };

  const verify = (e) => {
   
    let check = true;
    for (let i = 0; i < 6; i++) {
      if (Number(refi[i].current.value) !== main_data[i]) {  // checking your otp
        check = false;
      }
    }

    if (check) { // its check you are log in succes full or not
      setverifys(true)
         toast.success('🦄 Log in successfull!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    }
  
  };
  for (let i = 0; i < 6; i++) {  // create a input box
    boxes.push(
      <input
        type="number"
        className="code"
        min="0"
        max="9"
        required
        onKeyDown={down}
        placeholder="0"
        ref={refi[i]}
      />
    );
  }

 const resendotp=(e)=>  // for resend otp
 {

   if(refi.length===6)
   {
      for(let i=0;i<6;i++)
      {
        refi[i].current.value=""
      }
      values_index_match=0;
      refi[0].current.focus();
      alert("otp - 123456")
   }
 }

  const handleClose = () => {
    setd((old_data) => {
      old_data.checks=false;
      return { ...old_data };
    });
    setShow(false);
  };
  useEffect(() => {
    setTimeout(() => {
      refi[values_index_match].current.focus();
    }, 10);
    alert("otp - 123456")
  }, []);
  return (
    <>
      
      {verifys?<ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />:" "}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="head">Verify your Number </Modal.Title>
        </Modal.Header>
        <Modal.Title className="head">{datas.value}  </Modal.Title>
        
        <Modal.Body>
        
          <div className="code-container">
            <section className="section_box">
              {boxes.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </section>
            <div>
              <button type="button" className="btn-primaryss" onClick={verify}>
                Verify
              </button>
            </div>

            <section className="info">
              <div className="changenumber" onClick={numberchange}>Change Number</div>
              <div className="resendotp" onClick={resendotp}>Re-send OTP</div>
            </section>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className="btn">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Dashboard;
