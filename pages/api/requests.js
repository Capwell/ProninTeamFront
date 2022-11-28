// this api use only for local simulate and testing

// simulate server loading
const sleep = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 250);
});

async function handler(req, res) {
  const { body, method } = req;

  // Extract the email and captcha code from the request body
  const { name, communicate, message, file, is_agreed } = body;

  if (method === "POST") {
    // If name, communicate, is_agreed or captcha are missing return an error
    if (!name || !communicate || !is_agreed) {
      return res.status(422).json({
        message: "Unproccesable request, please provide the required fields",
      });
    }

    // try {
    //   // Ping the google recaptcha verify API to verify the captcha code you received
    //   const response = await fetch(
    //     `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
    //     {
    //       headers: {
    //         "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
    //       },
    //       method: "POST",
    //     }
    //   )

    //   const captchaValidation = await response.json();
    //   /**
    //    * The structure of response from the veirfy API is
    //    * {
    //    *  "success": true|false,
    //    *  "challenge_ts": timestamp,  // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
    //    *  "hostname": string,         // the hostname of the site where the reCAPTCHA was solved
    //    *  "error-codes": [...]        // optional
    //     }
    //    */
    //   if (captchaValidation.success) {
    //     // Replace this with the API that will save the data received
    //     // to your backend
        await sleep();
        // Return 200 if everything is successful
        return res.status(200).send("OK");
    //   }

    //   return res.status(422).json({
    //     message: "Unproccesable request, Invalid captcha code",
    //   });
    // } catch (err) {
    //   console.log(err)
    //   return res.status(422).json({ message: "Something went wrong" });
    // }
  }
  // Return 404 if someone pings the API with a method other than
  // POST
  return res.status(404).send("Not found");
}

// const sendBriefData = (req, res) => {
//   console.log(req.body)

//   res.status(200).json({ status: 'OK' })
// }

export default handler