import { FormEvent, useState } from "react";
import ContactLeft from "./ContactLeft";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = (email: string) => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please provide your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Please enter a valid Email!");
    } else if (subject === "") {
      setErrMsg("Please provide a Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you ${username}, your message has been sent successfully! I, Kawmini Abeyrathna, will get back to you soon.`,
      );
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-gray-700 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title title="GET IN TOUCH" des="Contact Me" />
        </div>
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="w-full h-auto flex flex-col lg:flex-row justify-between gap-8">
            <ContactLeft />

            <div className="w-full lg:w-[60%] h-full p-8 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl shadow-lg">
              <div className="mb-6">
                <h3 className="text-2xl font text-white mb-2">
                  Send Me a Message
                </h3>
                <p className="text-gray-300">
                  Fill out the form below to reach me directly
                </p>
              </div>

              <form
                onSubmit={handleSend}
                className="w-full flex flex-col gap-6"
              >
                {errMsg && (
                  <div className="p-4 bg-red-900/30 border border-red-500 text-red-300 rounded-lg">
                    {errMsg}
                  </div>
                )}
                {successMsg && (
                  <div className="p-4 bg-green-900/30 border border-green-500 text-green-300 rounded-lg">
                    {successMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                      Your name
                    </label>
                    <input
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff014f] focus:border-transparent transition-all"
                      type="text"
                      placeholder=""
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                      Phone Number
                    </label>
                    <input
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      value={phoneNumber}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff014f] focus:border-transparent transition-all"
                      type="text"
                      placeholder=""
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff014f] focus:border-transparent transition-all"
                    type="email"
                    placeholder=""
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Subject
                  </label>
                  <input
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff014f] focus:border-transparent transition-all"
                    type="text"
                    placeholder=""
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff014f] focus:border-transparent transition-all min-h-[150px]"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-[#ff014f] hover:bg-[#e00040] text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-[#ff014f]/30"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Contact;
