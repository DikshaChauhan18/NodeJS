/* // without nodemailer.
const sendMail=async(req,res)=>{
res.send("I am Sending mail");
};

module.exports= sendMail;
*/

const nodemailer = require("nodemailer");  // now here use nodemailer for mails.

const sendMail=async(req,res)=>{
    let testAccount = await nodemailer.createTestAccount();

    // connect with smtp
    let transporter = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        //secure: true,
        auth: {
            //use etherial user and password which can be created using ethereal.email website
            user: 'audrey.heathcote31@ethereal.email',
            pass: '6gstdRGhFrWeUTyBCp'
        },
    });

    // to whom mail have to  be sent
    let info = await transporter.sendMail({
        from: '"diksha👻" <audrey.heathcote31@ethereal.email>', // sender address
        to: "dikshachauhan1801@gmail.com", // list of receivers using ,
        subject: "Hello ✔", // Subject line
        text: "learning nodejs", // plain text body
        html: "<b>enjoying curfew ????</b>", // html body
      });
    console.log("Message sent: %s", info.messageId);
    res.json(info);
};


module.exports= sendMail;


