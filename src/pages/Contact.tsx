import { useForm, ValidationError } from "@formspree/react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const [state, handleSubmit] = useForm("xbdddlan"); // ✅ Formspree ID

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Header Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-6xl font-bold mb-24 text-[#394D57]">
            Get In Touch
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* LEFT SECTION */}
            <div className="flex flex-col h-full">
              <p className="text-[#394D57] leading-relaxed mb-8 max-w-[350px] text-2xl">
                If you have any questions or you'd like to find out more about our services,
                please get in touch.
              </p>

              <h2 className="text-3xl font-semibold mb-8 text-[#394D57]">
                Contact Details
              </h2>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[#394D57] mb-2">
                  Info
                </h3>
                <p className="text-base text-[#394D57]">
                  <a
                    href="tel:+917905378953"
                    className="text-[#394D57] hover:text-[#587583] hover:underline transition-colors duration-200"
                  >
                    +91 70953 78953
                  </a>
                  <br />
                  <a
                    href="mailto:sales@everson.in"
                    className="text-[#394D57] hover:text-[#587583] hover:underline transition-colors duration-200"
                  >
                    sales@everson.in
                  </a>
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[#394D57] mb-2">
                  Works
                </h3>
                <p className="text-base text-[#394D57] leading-relaxed">
                  Samrudh Industrial Park, S Block - A,
                  <br />
                  Plot No. 02, Near Balson Valve Gate,
                  <br />
                  Rajkot Gondal Highway, Vill. - Ribda
                  <br />
                  Taluka - Gondal | Dist - Rajkot | 360311
                </p>
              </div>

              <div className="flex-grow rounded-md overflow-hidden border border-[#D9E0E1]">
                <iframe
                  title="Everson Map"
                  src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d924.1128611251218!2d70.7846749!3d22.1087569!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDA2JzMzLjAiTiA3MMKwNDcnMDUuNCJF!5e0!3m2!1sen!2sin!4v1765643420049!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* RIGHT SECTION — FORM */}
            <div className="flex flex-col h-full">
              {state.succeeded ? (
                <div className="p-8 bg-[#F7F7F5] border border-[#587583] text-[#394D57]">
                  <h2 className="text-3xl font-semibold mb-4">
                    Thank you!
                  </h2>
                  <p>Your message has been sent successfully.</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 flex flex-col h-full justify-between"
                >
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="firstName">First Name*</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        className="bg-[#F7F7F5] border border-[#587583] text-[#394D57]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        className="bg-[#F7F7F5] border border-[#587583] text-[#394D57]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email*</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="bg-[#F7F7F5] border border-[#587583] text-[#394D57]"
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </div>

                    <div>
                      <Label htmlFor="contact">Contact*</Label>
                      <Input
                        id="contact"
                        name="contact"
                        type="tel"
                        required
                        className="bg-[#F7F7F5] border border-[#587583] text-[#394D57]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Description</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={20}
                        placeholder="Enter your message..."
                        className="bg-[#F7F7F5] border border-[#587583] text-[#394D57]"
                      />
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />
                    </div>
                  </div>

                  {/* ✅ NEW LINE: Custom Email Subject */}
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Contact Form – Everson"
                  />

                  {/* Honeypot */}
                  <input type="text" name="_gotcha" style={{ display: "none" }} />

                  <Button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-[#587583] hover:bg-[#48646f] text-white rounded-none transition-all"
                  >
                    {state.submitting ? "Sending..." : "Submit"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
