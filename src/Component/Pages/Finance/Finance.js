import React, {useState} from 'react';
import "../Finance/Finance.css";
import mlogo from "../../../images/moneylogo.webp";
import flogo from "../../../images/financing-logo.webp";
import slogo from "../../../images/synchrony-logo.webp";
import alogo from "../../../images/aff-logo.webp";
import fin from "../../../images/fin.jpg";
import { IoIosArrowDown } from 'react-icons/io';
import finance from '../../../images/finance.jpg';

const Finance = () => {
        const [expandedQuestions, setExpandedQuestions] = useState([]);
    
        const toggleQuestion = (index) => {
            setExpandedQuestions((prev) => {
                if (prev.includes(index)) {
                    return prev.filter((i) => i !== index);
                } else {
                    return [...prev, index];
                }
            });
        };
    
        const questions = [
            {
                question: "How Can I Pay my Conn's HomePlus Installment account?",
                answer: "You may use our online portal to pay your Conn's Installment account or you can pay by phone by calling customer service at 1-800-511-5750. If you have additional questions about paying your bill, please click here."
            },
            {
                question: "How Do I Pay My Conn's HomePlus Installment Account Over The Phone?",
                answer: "You may use our automated system to pay your bill by calling: (800) 511-5750."
            },
            {
                question: "How Can I Pay My Conn's Credit Card Issued by Synchrony?",
                answer: "You may use our online portal to pay your Conn's Credit Card issued by Synchrony Bank or you can pay by phone by calling customer service at 1-866-226-5638 Monday through Friday from 7:00 am to 9:00 pm Central Time and Saturday from 7:00 am to 4:00 pm Central Time."
            },
            {
                question: "Does Conn's HomePlus Offer a Retail Installment Contract?",
                answer: "Yes, Whether you’ve got good credit or you're building credit, we can say yes even if you’ve been turned down other places. That’s because we offer our own Conn's HomePlus financing for appliances and all the latest home products through a retail installment contract that allows you to pay over time. To learn more about our Retail Installment Contract and other financing options, click here."
            }
        ];
    return (
        <div>
            <div className='finance'>
                <div className='finimg'><img src={finance}></img></div>
                <div className='fincontent'>
                    <h1 className="word"> IS NOT A BAD WORD</h1>
                    <p>No Swear Jar required. It doesn't matter if you have good credit or you're building it conn's have payment options for everyone</p>
                </div>

            </div>
            <div className='ways'>
                <h1>We Have Four Ways to Pay Over Time, Find Out What Works for You</h1>
                <div className='way'>
                    <div>
                        <h4>Conn’s HomePlus Financing</h4>
                        <p>Whether you have good credit or you’re building it, take home what you want today, with set payments that are consistent through the length of your financed purchase.</p>
                        <div className='finbut'>Prequalify Now</div>
                    </div>
                    <div>
                        <h4>Conn’s HomePlus Credit Card</h4>
                        <p>Get the items you want or need now, with the flexibility to pay over time with convenient monthly payments. Plus,special financing offersbrought to you by Synchrony</p>
                        <div className='finbut'>Prequalify Now</div>
                    </div>
                    <div>
                        <h4>Conn’s HomePlus Lease-to-Own</h4>
                        <p>Get that new item in your home now, with no long-term commitment2 with each payment bringing you closer to ownership of that item.</p>
                        <div className='finbut'>Prequalify Now</div>
                    </div>
                    <div>
                        <h4>Conn’s HomePlus Layaway</h4>
                        <p>Secure that new item today and then take it home once all of your layaway payments have been made. No credit required, cancel any time before your last payment. In store only.</p>
                        <div className='finbut'>Prequalify Now</div>
                    </div>
                </div>
            </div>
            <div className='list1'>
                <h1>Already Have An Existing Account?</h1>
                <p>Easily manage your existing account online through our provider’s customer portal.</p>
                <ul>
                    <li className='list'><img src={mlogo}></img></li>
                    <li className='list'><img src={slogo}></img></li>
                    <li className='list'><img src={flogo}></img></li>
                    <li className='list'><img src={alogo}></img></li>
                </ul>
            </div>
            <div className="fimg">
                <div className='fimg1'><img src={fin}></img></div>
                <div className='fimg2'>
                    <h1>Good credit or building credit, Conn’s HomePlus will work with you!</h1>
                    <p>With so many financing options, we have a payment option for everyone to get you the products you want for your lifestyle.</p>
                    <div className='finbut1'>Prequalify Now</div>
                </div>
            </div>
            <div className='question'>
                    <h1>Frequently Asked Questions</h1>
                    <ul className='questcontainer'>
                        {questions.map((q, index) => (
                            <li
                                key={index}
                                className={`quest ${expandedQuestions.includes(index) ? 'expanded' : ''}`}
                                onClick={() => toggleQuestion(index)}
                            >
                                <h2>{q.question} <IoIosArrowDown /></h2>
                                <p>{q.answer}</p>
                            </li>
                        ))}
                    </ul>
                </div>
        </div>
    );
}

export default Finance;
