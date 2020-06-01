const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    host:'smtp.qq.com', //发送方邮箱qq通过lib/well-know/service.js
    port:"465",
    secure:true, //如果为465则是true
    auth:{
        user:'1298779616@qq.com',
        pass:'amsuzowvmvwnfdig',
    }
});



function send(mail,code){
    let info = {
        from:'"gjt"  <1298779616@qq.com>',
        to:mail,
        subject:"didi",
        text:`您的验证码是${code},有效期五分钟`,
        // html:
    }
    return new Promise((resolve,reject)=>{
        transporter.sendMail(info,(err,data)=>{
            if(err){
                console.log(err)
                reject()
            }else{
                console.log(data)
                resolve()
            }
        });
    })
    
}

module.exports = {send}
