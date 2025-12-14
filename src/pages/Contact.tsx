import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    contact: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you soon.");
    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      contact: "",
      description: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Header Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-6xl font-bold mb-24 text-[#394D57]">Get In Touch</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Section - Contact Info */}
            <div className="flex flex-col h-full">
              <p className="text-[#394D57] leading-relaxed mb-8 max-w-[350px] text-2xl">
                If you have any questions or you'd like to find out more about our services,
                please get in touch.
              </p>

              <h2 className="text-3xl font-semibold mb-8 text-[#394D57]">
                Contact Details
              </h2>

              {/* Info Section */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[#394D57] mb-2">Info</h3>
                <p className="text-base text-[#394D57]">
                  <a href="tel:+917905378953" className="hover:underline">
                    +91 79053 78953
                  </a>
                  <br />
                  <a href="mailto:sales@everson.in" className="hover:underline">
                    sales@everson.in
                  </a>
                </p>
              </div>

              {/* Works Section */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[#394D57] mb-2">Works</h3>
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

              {/* Map */}
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

            {/* Right Section - Contact Form */}
            <div className="flex flex-col h-full">
              <form
                onSubmit={handleSubmit}
                className="space-y-6 flex flex-col h-full justify-between"
              >
                <div className="space-y-6">
                  {/* First Name */}
                  <div>
                    <Label htmlFor="firstName">First Name*</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="bg-[#F7F7F5] border border-[#587583] text-[#394D57] placeholder:text-[#7A8A91] p-2 rounded-none focus:outline-none focus:ring-2 focus:ring-[#587583]"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-[#F7F7F5] border border-[#587583] text-[#394D57] placeholder:text-[#7A8A91] p-2 rounded-none focus:outline-none focus:ring-2 focus:ring-[#587583]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email">Email*</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-[#F7F7F5] border border-[#587583] text-[#394D57] placeholder:text-[#7A8A91] p-2 rounded-none focus:outline-none focus:ring-2 focus:ring-[#587583]"
                    />
                  </div>

                  {/* Contact */}
                  <div>
                    <Label htmlFor="contact">Contact*</Label>
                    <Input
                      id="contact"
                      name="contact"
                      type="tel"
                      value={formData.contact}
                      onChange={handleChange}
                      required
                      className="bg-[#F7F7F5] border border-[#587583] text-[#394D57] placeholder:text-[#7A8A91] p-2 rounded-none focus:outline-none focus:ring-2 focus:ring-[#587583]"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      rows={20}
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Enter your message..."
                      className="bg-[#F7F7F5] border border-[#587583] text-[#394D57] placeholder:text-[#7A8A91] p-2 rounded-none focus:outline-none focus:ring-2 focus:ring-[#587583]"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-[#587583] hover:bg-[#48646f] text-white rounded-none transition-all"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
