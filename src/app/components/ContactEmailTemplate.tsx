import React from 'react';

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const CONTACT_MESSAGE_FIELDS = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  message: "Message",
};

const ContactEmailTemplate: React.FC<ContactEmailTemplateProps> = ({ name, email, phone, message }) => {
  const data = { name, email, phone, message };
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <style type="text/css">{`
          body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
          table { border-collapse: collapse !important; }
          body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }
          @media screen and (max-width: 525px) {
            .wrapper { width: 100% !important; max-width: 100% !important; }
            .responsive-table { width: 100% !important; }
            .padding { padding: 10px 5% 15px 5% !important; }
            .section-padding { padding: 0 15px 50px 15px !important; }
          }
          .form-container { margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc; }
          .form-heading { color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0; }
          .form-answer { color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0; }
          div[style*="margin: 16px 0;"] { margin: 0 !important; }
        `}</style>
      </head>
      <body style={{ margin: '0 !important', padding: '0 !important', background: '#fff' }}>
        <div style={{ display: 'none', fontSize: '1px', color: '#fefefe', lineHeight: '1px', maxHeight: '0px', maxWidth: '0px', opacity: 0, overflow: 'hidden' }}></div>
        <table border={0} cellPadding={0} cellSpacing={0} width="100%">
          <tr>
            <td bgcolor="#ffffff" align="center" style={{ padding: '10px 15px 30px 15px' }} className="section-padding">
              <table border={0} cellPadding={0} cellSpacing={0} width="100%" style={{ maxWidth: '500px' }} className="responsive-table">
                <tr>
                  <td>
                    <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                      <tr>
                        <td>
                          <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                            <tr>
                              <td style={{ padding: '0 0 0 0', fontSize: '16px', lineHeight: '25px', color: '#232323' }} className="padding message-content">
                                <h2>Neue Kontaktnachricht</h2>
                                <div className="form-container">
                                  {Object.entries(data).map(([key, val]) => (
                                    <div key={key}>
                                      <h3 className="form-heading" style={{ textAlign: 'left' }}>{CONTACT_MESSAGE_FIELDS[key]}</h3>
                                      <p className="form-answer" style={{ textAlign: 'left' }}>{val}</p>
                                    </div>
                                  ))}
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  );
};

export default ContactEmailTemplate;
