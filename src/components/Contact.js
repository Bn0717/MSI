// src/components/Contact.js

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa'; // Imported Instagram Icon

/* Styled Components */

const ContactWrapper = styled.div`
  padding: 10px 20px;
  max-width: 1400px;
  margin: 40px auto;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center; // Changed from center to flex-start
  }
`;

const LeftSection = styled.div`
  flex: 1;
  padding: 20px;
  text-align: left; // Ensure left alignment

  @media (max-width: 768px) {
    /* text-align: center; */ // Commented out to maintain left alignment
    text-align: center; // Explicitly set to center for mobile
    padding: 10px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0px;
  justify-content: flex-start; // Changed from center to flex-start

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center; // Changed from center to flex-start
  }
`;

const Logo = styled.img`
  width: 120px;
  height: 120px;
  margin-right: 15px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 0px;
    width: 170px;
    height: 170px;
  }
`;

const LogoText = styled.h1`
  font-size: 24px;
  color: #007BFF;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-top:0px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  a {
    display: flex;
    align-items: center;
    color: #e1306c; /* Instagram's brand color for icon and username */
    font-size: 16px;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #c13584; /* Darker shade on hover */
    }

    /* Styling the span inside the a tag */
    span {
      color: #555; /* Neutral color for the introductory text */
      margin-right: 8px; /* Space between text and icon */
      font-weight: normal; /* Ensure the text isn't bold */
    }

    svg {
      font-size: 24px;
      /* Removed margin-left since we're adding margin-right to the span */
    }

    @media (max-width: 768px) {
      font-size: 14px;

      span {
        margin-right: 6px; /* Adjusted spacing for smaller screens */
      }

      svg {
        font-size: 20px;
      }
    }
  }
`;


const EmailSection = styled.div`
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const EmailText = styled.p`
  font-size: 18px;
  color: #555;
  margin: 5px 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const RightSection = styled.div`
  flex: 1;
  padding: 20px;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center; // Optionally, keep this if you want to center text on small screens
    padding: 10px;
  }
`;

const FeedbackTitle = styled.h2`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
`;

const FeedbackText = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
`;

const FeedbackLink = styled.a`
  display: inline-block;
  font-size: 16px;
  color: #007BFF;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Emoji = styled.span`
  font-size: 24px;
  margin-left: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

/* Contact Component */

const Contact = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    <ContactWrapper>
      <ContactContainer>
        <LeftSection>
          <LogoContainer>
            <Logo src="/assets/MSI_Logo.png" alt="Logo" />
            <LogoText>Malaysian Student Initiative</LogoText>
          </LogoContainer>

          <SocialLinks>
            <a
              href="https://www.instagram.com/malaysianstudentinitiative/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
            >
              <span>Follow us at</span> <FaInstagram /> @malaysianstudentinitiative
            </a>
          </SocialLinks>



          <EmailSection>
            <EmailText>For inquiries, contact us at:</EmailText>
            <EmailText><strong>malaysianstudentinitiativemy@gmail.com</strong></EmailText>
          </EmailSection>
        </LeftSection>

        <RightSection>
          <FeedbackTitle>We Value Your Feedback <Emoji>💬</Emoji></FeedbackTitle>
          <FeedbackText>
            Help us improve by sharing your thoughts!
            Please click the link below to access our feedback form:
          </FeedbackText>
          <FeedbackLink href="https://docs.google.com/forms/d/e/1FAIpQLScCuYVk8SD6lN4zepnNOY0MuyhziFRix77dhoT2EGdjNP-UwQ/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
            Click Here to Send Feedback <Emoji>📩</Emoji>
          </FeedbackLink>
        </RightSection>
      </ContactContainer>
    </ContactWrapper>
  </motion.div>
);

export default Contact;
