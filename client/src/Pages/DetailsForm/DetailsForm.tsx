/* eslint-disable react/no-unescaped-entities */
import React,{useState} from 'react'
import './DetailsForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
export default function DetailsForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Username, setUsername] = useState('');
  const [Phone, setPhone] = useState('');
  const [Address, setAddress] = useState('');
  const [page, setPage] = useState(0);
  const [question, setQuestion] = useState(['active formElement', 'formElement', 'formElement']);
  const [progress] = useState(['progress pro25', 'progress pro50', 'progress pro75']);
  const [activeRadio3,setActiveRadio3] = useState(['form1-option','form1-option','form1-option','form1-option','form1-option','form1-option']);
  const [sample] = useState(['form1-option','form1-option','form1-option','form1-option','form1-option','form1-option']);
  const [available] = useState(['Ecommerce','Food','Beauty','Housing','Services','DecideLater']);
  const [store,setStore] = useState('');
  const handleSubmit = async() => {
    const userData={
      email,
      password,
      Username,
      Phone,
      Address,
      store
    }
    console.log(userData);
    //Write Signup logic here
    navigate('/login');
  }
  const handleOptionChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const temp = [...sample];
    setStore(available[parseInt(event.target.value)-1]);
    if(activeRadio3[parseInt(event.target.value)-1] === 'form1-option activeradio'){
      temp[parseInt(event.target.value)-1] = 'form1-option';
    }
    else{
      temp[parseInt(event.target.value)-1] = 'form1-option activeradio';
    }
    setActiveRadio3(temp);
  }
  const handleNext = () => {
    const temp = [...question];
    temp[page] = 'formElement';
    temp[page + 1] = 'active formElement';
    setQuestion(temp);
    setPage(page + 1);
  }
  const handleBack = () => {
    const temp = [...question];
    temp[page] = 'formElement';
    temp[page - 1] = 'active formElement';
    setQuestion(temp);
    setPage(page - 1);
  }

  return (
    <div className='DetailForm'>
      <div className='form'>
      <h1 className='detailhead'>ShopMe</h1>
      <div className='progressBar'>
        <div className={progress[page]}></div>
      </div>
      <div className='formstart'>
      <form>
        <div className={question[0]}>
        <div className='formhead'>Let’s get started.</div>
        <div className='formsubhead'>Enter Email and Password to Signup</div>
        <div className='form-optionpage1'>
          <input
            className='form1-input'
            type="email"
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='form1-input'
            type="password"
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
          {/* <div className={question[0]}>
            <div className='formhead'>Let’s get started. Which of these best describes you?</div>
            <div className='formsubhead'>We’ll help you get set up based on your business needs.</div>
            <div className='form-options'>
            <label className={activeRadio[0]} >
              <input
                className='form1-radio'
                type="radio"
                name="business-type"
                value='1'
                checked={selectedOption === '1'}
                onChange={handleOptionChange}
              />
              <span className='form1-text'>I'm just starting</span>
            </label>
            <label className={activeRadio[1]}>
              <input
                className='form1-radio'
                type="radio"
                name="business-type"
                value='2'
                checked={selectedOption === '2'}
                onChange={handleOptionChange}
              />
                <span className='form1-text' >I’m already selling online or in person</span>
            </label>
          </div>
          </div> */}
          <div className={question[1]}>
            <div className='formhead'>One Step Closer</div>
            <div className='formsubhead'>Please Provide Some More Details to Complete the Setup</div>
            <div className='form-optionpage1'>
                <input
                className='form1-input'
                type="text"
                placeholder='Enter your Username'
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className='form1-input'
                type="text"
                placeholder='Enter your Phone Number'
                value={Phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                className='form1-input'
                type="text"
                placeholder='Enter your Address'
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
              />
          </div>
          </div>
          <div className={question[2]}>
            <div className='formhead'>What do you plan to sell first?</div>
            <div className='formsubhead'>Pick what you want to start with. We’ll help you stock your store.</div>
            <div className='form-options'>
            <label className={activeRadio3[0]} >
              <input
                className='form1-radio'
                type="checkbox"
                name="business-type"
                value='1'
                checked={activeRadio3[0] === 'form1-option activeradio'}
                onChange={handleOptionChange3}
              />
              <div className='form1-text'>
                <span style={{fontSize:"1.4vw"}}>ECOMMERCE</span>
              </div>
            </label>
            <label className={activeRadio3[1]}>
              <input
                className='form1-radio'
                type="checkbox"
                name="business-type"
                value='2'
                checked={activeRadio3[1] === 'form1-option activeradio'}
                onChange={handleOptionChange3}
              />
                <div className='form1-text'>
                  <span style={{fontSize:"1.4vw"}} >FOOD</span>
                </div>
            </label>
            <label className={activeRadio3[2]}>
              <input
                className='form1-radio'
                type="checkbox"
                name="business-type"
                value='3'
                checked={activeRadio3[2] === 'form1-option activeradio'}
                onChange={handleOptionChange3}
              />
                <div className='form1-text'>
                  <span  style={{fontSize:"1.4vw"}}>BEAUTY</span>
                </div>
            </label>
            <label className={activeRadio3[3]}>
              <input
                className='form1-radio'
                type="checkbox"
                name="business-type"
                value='4'
                checked={activeRadio3[3] === 'form1-option activeradio'}
                onChange={handleOptionChange3}
              />
                <div className='form1-text' >
                  <span  style={{fontSize:"1.4vw"}}>HOUSING</span>
                </div>
            </label>
            <label className={activeRadio3[4]}>
              <input
                className='form1-radio'
                type="checkbox"
                name="business-type"
                value='5'
                checked={activeRadio3[4] === 'form1-option activeradio'}
                onChange={handleOptionChange3}
              />
                <div className='form1-text'>
                  <span style={{fontSize:"1.4vw"}}>SERVICES</span>
                </div>
            </label>
            <label className={activeRadio3[5]}>
              <input
                className='form1-radio'
                type="checkbox"
                name="business-type"
                value='6'
                checked={activeRadio3[5] === 'form1-option activeradio'}
                onChange={handleOptionChange3}
              />
                <span className='form1-text' style={{fontSize:"1vw"}}>I'll Decide Later</span>
            </label>
          </div>
          </div>
      </form>
      </div>
          {page<2 && <div className='DetailNext' onClick={handleNext}><span style={{fontSize:"1.3vw"}}>Next</span> <FontAwesomeIcon icon={faChevronRight}/></div>}
          {page>0 && <div className='DetailBack' onClick={handleBack}><FontAwesomeIcon icon={faChevronLeft}/> <span style={{fontSize:"1.3vw"}}>Back</span></div>}
          {page===2 && <div className='DetailSubmit' style={{fontSize:"1.3vw"}} onClick={handleSubmit}>Submit</div>}
      </div>
      
    </div>
  );
}
