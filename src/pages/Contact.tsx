import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Section - Contact Info */}
            <div>
              <p className="text-muted-[#394D57] leading-relaxed mb-8 max-w-[350px] text-2xl">
                If you have any questions or you'd like to find out more about our services,
                please get in touch.
              </p>

              <h2 className="text-3xl font-semibold mb-8 text-[#394D57]">Contact Details</h2>

              <div className="mb-6">
                <h3 className="font-medium text-[#394D57] mb-6">Info</h3>
                <p className="text-muted-[#394D57]">
                  +91 79053 78953 &nbsp;&nbsp; sales@everson.in
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-medium text-[#394D57] text-2xl mb-1">Office Address</h3>
                <p className="text-muted-[#394D57]">
                  Samrudh Industrial park S Block - A,
                  <br />
                  Plot No. 02 Near Balson Valve Gate,
                  <br />
                  Rajkot Gondal Highway Vill. - Ribda
                  <br />
                  Taluka - Gondal | Dist - Rajkot | 360311
                </p>
              </div>

              {/* Map Card */}
              <Card className="p-4 mt-6">
                <h3 className="font-semibold mb-3 text-foreground">Map</h3>
                <div className="w-full h-[250px] bg-muted rounded-md overflow-hidden">
                  <iframe
                    title="Everson Map"
                    src="https://www.google.com/maps?q=Rajkot+Gondal+Highway,+Ribda,+Gujarat,+India&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                  ></iframe>
                </div>
              </Card>
            </div>

            {/* Right Section - Contact Form */}
<div>
  <form onSubmit={handleSubmit} className="space-y-6">
    <div>
      <Label htmlFor="firstName">First Name*</Label>
      <Input
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
        className="bg-[#F7F7F5] border border-[#587583] p-2 rounded-none"
      />
    </div>

    

    <div>
      <Label htmlFor="company">Company</Label>
      <Input
        id="company"
        name="company"
        value={formData.company}
        onChange={handleChange}
        className="bg-[#F7F7F5] border border-[#587583] p-2 rounded-none"
      />
    </div>

    <div>
      <Label htmlFor="email">Email*</Label>
      <Input
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="bg-[#F7F7F5] border border-[#587583] p-2 rounded-none"
      />
    </div>

    <div>
      <Label htmlFor="contact">Contact*</Label>
      <Input
        id="contact"
        name="contact"
        type="tel"
        value={formData.contact}
        onChange={handleChange}
        required
        className="bg-[#F7F7F5] border border-[#587583] p-2 rounded-none"
      />
    </div>

    <div>
      <Label htmlFor="description">Description</Label>
      <Textarea
        id="description"
        name="description"
        rows={16}   // Increased height
        value={formData.description}
        onChange={handleChange}
        placeholder="Enter your message..."
        className="bg-[#F7F7F5] border border-[#587583] p-2 rounded-none"
      />
    </div>

    <Button
      type="submit"
      className="w-full bg-[#587583] hover:bg-[#48646f] text-white"
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
