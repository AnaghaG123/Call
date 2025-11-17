import React from 'react';
import { Container } from 'react-bootstrap';
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import { CiClock1 } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegAddressBook } from "react-icons/fa";
import { IoAppsOutline } from "react-icons/io5";
import { GrHelpBook } from "react-icons/gr";

const ContactUs = () => {
  return (
    <Container className="mt-5 mb-5 p-4 bg-light rounded shadow">
      <h2 className="text-center mb-4"><FaPhoneAlt /> Contact Us</h2>

      <p className="mb-4">
        <AiOutlineMessage /> <strong>We'd love to hear from you!</strong><br />
        Whether you have a question, feedback, or need help using the Contact Manager, we're here to assist you.
      </p>

      <p className="mb-4">
        <MdOutlineMail /> <strong>Email Support:</strong><br />
        <a href="mailto:support@contactmanagerapp.com">support@contactmanagerapp.com</a><br />
        Reach out for technical issues, feature requests, or general inquiries.
      </p>

      <p className="mb-4">
        <CiClock1 /> <strong>Office Hours:</strong><br />
        Monday to Friday, 10:00 AM – 6:00 PM IST
      </p>

      <p className="mb-4">
        <FaRegAddressBook /> <strong>Address:</strong><br />
        Contact Manager HQ<br />
        Tech Park Road, Kollam, Kerala – 691001<br />
        India
      </p>

      <p className="mb-4">
        <IoAppsOutline /> <strong>Social Media:</strong><br />
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a> |{' '}
        <a href="https://x.com/" target="_blank" rel="noopener noreferrer">Twitter</a> |{' '}
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>

      <p>
        <GrHelpBook /> <strong>Need Help Fast?</strong><br />
        Visit our <a href="/help">Help Section</a> for step-by-step guides on how to add, edit, and delete contacts.
      </p>
    </Container>
  );
};

export default ContactUs;