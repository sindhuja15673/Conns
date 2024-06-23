import React, { useState } from 'react';
import '../Bill/Bill.css';
import conn from '../../../images/conns_logo.svg';
import { IoIosArrowDown } from 'react-icons/io';
import conns from '../../../images/conns-homeplus.jpg';

const Bill = () => {
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
            <div className="bill">
                <h1 className='pay'>Pay Your Bill Online</h1>
                <p>We’ve made it simple to pay your bill from the comfort of your home, on the go and wherever life may take you!</p>
                <div>
                    <div className='bill1'>
                        <div className='cards'><img className='card1' src={conn} alt="Conn's logo" /><h1>Conn’s HomePlus Financing</h1></div>
                        <p>We have updated our payment process to enhance your experience, and you'll love our new look. Plus, you can now pay directly on our secure site. A non-refundable processing fee of $2.25 per transaction will be charged by a third-party processor for a remote, one-time electronic payment via credit or debit card. Get started with our new payment portal today.</p>
                        <br />
                        <div><button className='sign1'>Pay Now</button></div>
                        <br />
                        <p>This option is for Improvemint Financial lease-to-own customers.</p>
                        <p>Make your payments by clicking the link below.</p>
                        <br />
                        <div><button className='pay1'>Pay Bill</button></div>
                    </div>
                    <div className='bill2'>
                        <div className='cards'><img className='card' src={conns} alt="Conn's Credit Card" /><h1>Conn’s Credit Card</h1></div>
                        <p>Your Conn’s Credit Card issued by Synchrony has an account number starting with 60345906</p>
                        <br />
                        <div><button className='sign2'>Pay Synchrony</button></div>
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
        </div>
    );
}

export default Bill;
