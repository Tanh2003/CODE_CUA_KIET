const nodemailer = require("nodemailer");
require("dotenv").config();

let sendSimpleEmail= async(dataSend)=>{

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: process.env.EMAIL_APP,
          pass: process.env.EMAIL_APP_PASSWORD,
        },
      });

      const info = await transporter.sendMail({
        from: '"Fred Foo 👻"<nhoxtuananh092@gmail.com>', // sender address
        to: dataSend.reciverEmail, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Thông tin đặt lịch khám bệnh", // plain text body
        html: `<h3> Xin chào ${dataSend.patientName}!</h3>
        <p> Bạn nhận được email này vì đã đặt lịch khám bệnh online trên Health Care</p>
        <p>Thông tin đặt lịch khám bệnh:</p>
        <div> <b>Thời gian: ${dataSend.time}<b/></div>
        <div> <b> Bác sĩ: ${dataSend.doctorName}<b/></div>
<p> Nếu thông tin trên đúng sự thật , vui lòng click vào đường link  này để xác nhận và hoàn tất thủ tục đặt lịch khám bệnh.</p>

<div>
<a href=${dataSend.redirectLink} target="_blank"> Click here</a>
</div>
<div> Xin chân thành cảm ơn :3 </div>
        `, // html body
      });

}

let getBodyHTMLEmail=(dataSend)=>{
    let result='';
    if(dataSend.language==='vi'){
        result=`<h3> Xin chào ${dataSend.patientName}!</h3>
        <p> Bạn nhận được email này vì đã đặt lịch khám bệnh online trên Health Care</p>
        <p>Thông tin đặt lịch khám bệnh:</p>
        <div> <b>Thời gian: ${dataSend.time}<b/></div>
        <div> <b> Bác sĩ: ${dataSend.doctorName}<b/></div>
<p> Nếu thông tin trên đúng sự thật , vui lòng click vào đường link  này để xác nhận và hoàn tất thủ tục đặt lịch khám bệnh.</p>

<div>
<a href=${dataSend.redirectLink} target="_blank"> Click here</a>
</div>
<div> Xin chân thành cảm ơn :3 </div>
        `
    }
    if(dataSend.language==='en'){
        result=`<h3> Xin chào ${dataSend.patientName}!</h3>
        <p> Bạn nhận được email này vì đã đặt lịch khám bệnh online trên Health Care</p>
        <p>Thông tin đặt lịch khám bệnh:</p>
        <div> <b>Thời gian: ${dataSend.time}<b/></div>
        <div> <b> Bác sĩ: ${dataSend.doctorName}<b/></div>
<p> Nếu thông tin trên đúng sự thật , vui lòng click vào đường link  này để xác nhận và hoàn tất thủ tục đặt lịch khám bệnh.</p>

<div>
<a href=${dataSend.redirectLink} target="_blank"> Click here</a>
</div>
<div> Xin chân thành cảm ơn :3 </div>
        `
    }
    return result;
}


  
  
module.exports={
    sendSimpleEmail:sendSimpleEmail
}