 import { useEffect, useState } from 'react';
 
 
 const sendGoldenVisaEmail1stStep = async ({ name, email, investment }) => {
const encodedURL = `https://goldenvisashub.com?confirm=1&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&investment=${encodeURIComponent(investment)}`;
const firstName = name.split(' ')[0];

const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Golden Visa Follow-Up</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #f9f9f9; font-family: Arial, sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; padding: 30px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); padding: 30px;">
            <tr>
              <td align="center">
          <img src="https://goldenvisashub.com/assets/images/logoblue.png"
     alt="Explorer Logo"
     width="180"
     style="max-width: 180px; width: 100%; height: auto; margin-bottom: 20px;" />

                <h2 style="color: #0d2c40; margin-bottom: 16px;">${firstName}, <br>You're Almost There!</h2>
                <p style="font-size: 16px; color: #333; margin: 0 0 16px;">
                  Thanks for starting your Golden Visa journey with Explorer - Portugal’s leading private equity fund.
                </p>
                <p style="font-size: 16px; color: #333; margin: 0 0 24px;">
                  Just one more step: <strong>confirm your phone number</strong> so we can guide you through the process.
                </p>
                
                <!-- Botão com mais altura -->
<!-- Bulletproof button, compatível com todos os clientes de email -->
<table border="0" cellpadding="0" cellspacing="0" align="center" style="margin: 0 auto 24px;">
  <tr>
    <td align="center" bgcolor="#0d2c40" style="border-radius: 8px;">
      <table border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td align="center"
              style="
                padding: 14px 32px;
                font-size: 16px;
                font-family: Arial, sans-serif;
                font-weight: bold;
                color: #ffffff;
                text-decoration: none;
                border-radius: 8px;
                background-color: #0d2c40;
              ">
            <a href="${encodedURL}" target="_blank"
               style="
                 color: #ffffff;
                 text-decoration: none;
                 display: inline-block;
               ">
              ✅&nbsp;&nbsp;Confirm My Phone Number
            </a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>



                <p style="font-size: 14px; color: #666; margin-top: 16px;">
                  Already submitted your phone? Great - our team will contact you shortly.
                </p>
                <hr style="margin: 30px 0;">
                <p style="font-size: 14px; color: #888; margin: 0;">
                  Best regards,<br><strong>Mário</strong><br>AI Assistant - Explorer Investments
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;



  try {
    const res = await fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: email, 
 
        subject:  firstName+ ', Just 2 Steps Away - Add Your Phone Number',
        html
      }),
    });

    const data = await res.json();
    console.log('📨 Email sent:', data);
  } catch (error) {
    console.error('❌ Email error:', error);
  }
};


const sendGoldenVisaEmail2stStep = async ({ name, email,  phone, investment, timezone }) => {
 


const encodedURL = `https://goldenvisashub.com?confirm=2&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&investment=${encodeURIComponent(investment)}&timezone=${encodeURIComponent(timezone)}`;
const firstName = name.split(' ')[0];

const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Golden Visa Follow-Up</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #f9f9f9; font-family: Arial, sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; padding: 30px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); padding: 30px;">
            <tr>
              <td align="center">
          <img src="https://goldenvisashub.com/assets/images/logoblue.png"
     alt="Explorer Logo"
     width="180"
     style="max-width: 180px; width: 100%; height: auto; margin-bottom: 20px;" />

               <h2 style="color: #0d2c40; margin-bottom: 16px;">${firstName}, <br>Let’s Schedule Your Call</h2>
<p style="font-size: 16px; color: #333; margin: 0 0 16px;">
  You’re one step away from completing your Golden Visa application with Explorer - Portugal’s top private equity fund.
</p>
<p style="font-size: 16px; color: #333; margin: 0 0 24px;">
  Final step: <strong>Choose a time for your confidential call</strong> with one of our senior advisors.
</p>

<!-- Button -->
<table border="0" cellpadding="0" cellspacing="0" align="center" style="margin: 0 auto 24px;">
  <tr>
    <td align="center" bgcolor="#0d2c40" style="border-radius: 8px;">
      <table border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td align="center"
              style="
                padding: 14px 32px;
                font-size: 16px;
                font-family: Arial, sans-serif;
                font-weight: bold;
                color: #ffffff;
                text-decoration: none;
                border-radius: 8px;
                background-color: #0d2c40;
              ">
            <a href="${encodedURL}" target="_blank"
               style="
                 color: #ffffff;
                 text-decoration: none;
                 display: inline-block;
               ">
              📅&nbsp;&nbsp;Confirm My Call Slot
            </a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>

<p style="font-size: 14px; color: #666; margin-top: 16px;">
  Already booked? Fantastic - we look forward to speaking with you!
</p>
                <hr style="margin: 30px 0;">
                <p style="font-size: 14px; color: #888; margin: 0;">
                  Best regards,<br><strong>Mário</strong><br>AI Assistant - Explorer Investments
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;



  try {
    const res = await fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: email,
   
        subject:  firstName+ ', You are Almost Done ',
        html
      }),
    });

    const data = await res.json();
    console.log('📨 Email sent:', data);
  } catch (error) {
    console.error('❌ Email error:', error);
  }
};

const sendNewLeadAlertEmail = async ({
  toName,
  toEmail,
  leadName,
  leadEmail,
  leadPhone,
  leadInvestment,
  leadIP,
  leadGeo
}) => {
  const firstName = toName.split(' ')[0];
  const now = new Date();
  const hour = now.getHours();
  const timestamp = now.toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' });

  let greeting = 'Good morning';
  if (hour >= 12 && hour < 18) greeting = 'Good afternoon';
  else if (hour >= 18) greeting = 'Good evening';
const today = new Date();
const weekday = today.toLocaleDateString('en-US', { weekday: 'long' });

const randomRemarks = [
  `Happy ${weekday}! A new lead just came in - have a look.`,
  `It's ${weekday} and someone just showed interest. Could be the one.`,
  `This came in today (${weekday}) - feels like a good sign!`,
  "They've taken the first step - time for us to meet them halfway.",
  "Someone’s thinking long-term - let’s help them move forward.",
  "Feels like a thoughtful investor - let's guide them right.",
  "Could be a great match - just landed now.",
  "Always nice to see interest like this midweek!",
  "Looks warm - maybe they’ve been doing their homework.",
  "They came to us - now let’s show what we can do.",
  "Worth a call today - might just surprise us.",
  "Early sign of trust - let’s follow that momentum.",
  `Perfect timing for a ${weekday} call.`,
  `Fresh lead this ${weekday} - don’t let it cool down.`,
  "Timing feels right - take a moment to check this one.",
  "Take a moment to check this out!",
  "Another investor showing interest.",
  "This might be a hot one!",
  "Looks promising - worth a look.",
  "Let's not miss this opportunity."
];

const closingLines = [
  `Let’s wrap up this ${weekday} with a solid follow-up.`,
  "One thoughtful call can turn this into a conversion.",
  `A call today could be all it takes - especially on a ${weekday}.`,
  "Feels like they’re ready - let’s not miss the window.",
  "Let’s not keep them waiting - a quick follow-up might be all they need.",
  "Momentum is everything - this one has it.",
  "Imagine this turning into a deal before the weekend!",
  "Perfect timing to show we care - reach out now.",
  "Friendly voice, fast call - let’s earn their trust.",
  "Let’s move while interest is fresh and relevant.",
  `This one landed on a ${weekday} for a reason - trust the timing.`,
  "Could be today’s win - let’s connect.",
  "Let's close this one - follow up fast and make the sale happen!",
  "Don't let this one slip - investor interest is hot!",
  "Act now - this could convert quickly!",
  "Move fast - there's momentum here.",
  "Your next conversion might be this one!"
];

  const selectedRemark = randomRemarks[Math.floor(Math.random() * randomRemarks.length)];
  const selectedClosing = closingLines[Math.floor(Math.random() * closingLines.length)];

  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Lead Notification</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #f9f9f9; font-family: Arial, sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; padding: 30px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); padding: 30px;">
            <tr>
              <td align="center">
                <img src="https://goldenvisashub.com/assets/images/logoblue.png" alt="Explorer Logo" width="180" style="margin-bottom: 20px;" />
                <h2 style="color: #0d2c40; margin-bottom: 16px;">${greeting} ${firstName},</h2>
                <p style="font-size: 16px; color: #333; margin: 0 0 16px;">
                  ${selectedRemark}
                </p>
<table width="100%" style="border-collapse: collapse; margin-bottom: 16px;">
  <tr style="background-color: #f1f1f1;">
    <td style="padding: 6px 8px; font-weight: bold;">Potential Investor</td>
    <td style="padding: 6px 8px;">${leadName}</td>
  </tr>
  <tr>
    <td style="padding: 6px 8px; font-weight: bold;">Contact Email</td>
    <td style="padding: 6px 8px;">${leadEmail}</td>
  </tr>
  <tr style="background-color: #f1f1f1;">
    <td style="padding: 6px 8px; font-weight: bold;">Phone to Call</td>
    <td style="padding: 6px 8px;">${leadPhone}</td>
  </tr>
  <tr>
    <td style="padding: 6px 8px; font-weight: bold;">Investment Amount</td>
    <td style="padding: 6px 8px;">${leadInvestment}</td>
  </tr>
  <tr style="background-color: #f1f1f1;">
    <td style="padding: 6px 8px; font-weight: bold;">IP Address</td>
    <td style="padding: 6px 8px;">${leadIP}</td>
  </tr>
  <tr>
    <td style="padding: 6px 8px; font-weight: bold;">Geolocation</td>
    <td style="padding: 6px 8px;">${leadGeo}</td>
  </tr>
  <tr style="background-color: #f1f1f1;">
    <td style="padding: 6px 8px; font-weight: bold;">Submission Timestamp</td>
    <td style="padding: 6px 8px;">${timestamp}</td>
  </tr>
</table>

                <br />
                <table border="0" cellpadding="0" cellspacing="0" align="center" style="margin: 0 auto 24px;">
                  <tr>
                    <td align="center" bgcolor="#0d2c40" style="border-radius: 8px;">
                      <table border="0" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="center" style="padding: 14px 32px; font-size: 16px; font-family: Arial, sans-serif; font-weight: bold; color: #ffffff;">
                            <a href="https://docs.google.com/spreadsheets/d/1icwWoagiQ0k2qO8c0SMt1_Yai3FL3DJvc2eJDDfECa4/edit?gid=0" target="_blank" style="color: #ffffff; text-decoration: none;">
                              📄 View Full Details
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <p style="font-size: 14px; color: #888; margin: 0;">
                  ${selectedClosing}
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  try {
    const res = await fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: toEmail,
 
        subject: `New Lead: ${leadName} is interested in investing`,
        html
      })
    });

    const data = await res.json();
    console.log('📨 Lead alert sent successfully:', data);
  } catch (error) {
    console.error('❌ Error sending lead alert:', error);
  }
};
