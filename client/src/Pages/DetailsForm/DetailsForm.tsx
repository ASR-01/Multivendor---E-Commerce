/* eslint-disable react/no-unescaped-entities */
import React,{useState} from 'react'
import './DetailsForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
export default function DetailsForm() {
  const [page, setPage] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [question, setQuestion] = useState(['active formElement', 'formElement', 'formElement']);
  const [progress] = useState(['progress pro25', 'progress pro50', 'progress pro75']);
  const [activeRadio,setActiveRadio] = useState(['form1-option','form1-option']);
  const [activeRadio2,setActiveRadio2] = useState(['form1-option','form1-option','form1-option','form1-option','form1-option','form1-option']);
  const [activeRadio3,setActiveRadio3] = useState(['form1-option','form1-option','form1-option','form1-option','form1-option','form1-option']);
  const handleSubmit = () => {
    console.log("submitted");
  }
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const temp = [...activeRadio];
    if(event.target.value === '1'){
      temp[0] = 'form1-option activeradio';
      temp[1] = 'form1-option';
    }
    else{
      temp[0] = 'form1-option';
      temp[1] = 'form1-option activeradio';
    }
    setActiveRadio(temp);
    setSelectedOption(event.target.value);
  };
  const handleOptionChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const temp = [...activeRadio2];
    if(temp[parseInt(event.target.value)-1] === 'form1-option activeradio'){
      temp[parseInt(event.target.value)-1] = 'form1-option';
    }
    else{
      temp[parseInt(event.target.value)-1] = 'form1-option activeradio';
    }
    setActiveRadio2(temp);
  }
  const handleOptionChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const temp = [...activeRadio3];
    if(temp[parseInt(event.target.value)-1] === 'form1-option activeradio'){
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
          </div>
          <div className={question[1]}>
            <div className='formhead'>Where would you like to sell?</div>
            <div className='formsubhead'>Pick as many as you like – you can always change these later. We'll make sure you're set up to sell in these places.</div>
            <div className='form-options'>
            <label className={activeRadio2[0]} >
              <input
                className='form1-radio'
                type="checkbox"
                name="business-type"
                value='1'
                checked={activeRadio2[0] === 'form1-option activeradio'}
                onChange={handleOptionChange2}
              />
              <div className='form1-text'>
                <span style={{fontSize:"1.4vw"}}>An online store</span>
                <span style={{fontSize:"0.8vw"}}>Create a fully customizable website</span>
              </div>
            </label>
            <label className={activeRadio2[1]}>
              <input
                className='form1-radio'
                type="checkbox"
                name="business-type"
                value='2'
                checked={activeRadio2[1] === 'form1-option activeradio'}
                onChange={handleOptionChange2}
              />
                <div className='form1-text'>
                  <span style={{fontSize:"1.4vw"}} >In person</span>
                  <span style={{fontSize:"0.8vw"}}>Sell at retail stores, pop-ups, or other physical locations</span>
                </div>
            </label>
            <label className={activeRadio2[2]}>
              <input
                className='form1-radio'
                type="checkbox"
                name="business-type"
                value='3'
                checked={activeRadio2[2] === 'form1-option activeradio'}
                onChange={handleOptionChange2}
              />
                <div className='form1-text'>
                  <span  style={{fontSize:"1.4vw"}}>An existing website or blog</span>
                  <span style={{fontSize:"0.8vw"}}>Add a Buy Button to your website</span>
                </div>
            </label>
            <label className={activeRadio2[3]}>
              <input
                className='form1-radio'
                type="checkbox"
                name="business-type"
                value='4'
                checked={activeRadio2[3] === 'form1-option activeradio'}
                onChange={handleOptionChange2}
              />
                <div className='form1-text' >
                  <span  style={{fontSize:"1.4vw"}}>Social media</span>
                  <span style={{fontSize:"0.8vw"}}>Reach customers on Facebook, Instagram, TikTok, and more</span>
                </div>
                
            </label>
            <label className={activeRadio2[4]}>
              <input
                className='form1-radio'
                type="checkbox"
                name="business-type"
                value='5'
                checked={activeRadio2[4] === 'form1-option activeradio'}
                onChange={handleOptionChange2}
              />
                <div className='form1-text'>
                  <span style={{fontSize:"1.4vw"}}>Online marketplaces</span>
                  <span style={{fontSize:"0.8vw"}}>List products on Etsy, Amazon, and more</span>
                </div>
            </label>
            <label className={activeRadio2[5]}>
              <input
                className='form1-radio'
                type="checkbox"
                name="business-type"
                value='6'
                checked={activeRadio2[5] === 'form1-option activeradio'}
                onChange={handleOptionChange2}
              />
                <span className='form1-text' style={{fontSize:"1vw"}}>I'm not sure</span>
            </label>
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
