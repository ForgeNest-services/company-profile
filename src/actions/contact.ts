"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API);

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function submitContactForm(formData: ContactFormData) {
  // Check if API key is configured
  if (!process.env.RESEND_API) {
    console.error('RESEND_API environment variable is not set');
    return {
      success: false,
      message: 'Email service is not configured. Please contact us directly at forgenestservices@gmail.com'
    };
  }

  try {
    // Send email to company
    const companyEmail = await resend.emails.send({
      from: "contact@forgenestservices.com.np", // Your verified domain
      to: ["forgenestservices@gmail.com"], // Your email
      subject: `New Contact Form Submission: ${formData.subject}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <!-- Header with Logo -->
          <div style="text-align: center; padding: 30px 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px 12px 0 0;">
            <img src="https://res.cloudinary.com/dpnhdq9eg/image/upload/v1756144318/Primary_RGB_kwha6h.png" alt="ForgeNest Logo" style="height: 60px; width: auto; margin-bottom: 15px;" />
            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 600;">New Contact Form Submission</h1>
          </div>
          
          <!-- Content -->
          <div style="padding: 30px 20px;">
            <div style="background-color: #f8fafc; padding: 25px; border-radius: 12px; margin-bottom: 25px; border-left: 4px solid #3b82f6;">
              <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px;">Contact Details</h3>
              <div style="display: grid; gap: 12px;">
                <p style="margin: 0; color: #475569;"><strong style="color: #1e293b;">Name:</strong> ${formData.name}</p>
                <p style="margin: 0; color: #475569;"><strong style="color: #1e293b;">Email:</strong> <a href="mailto:${formData.email}" style="color: #3b82f6; text-decoration: none;">${formData.email}</a></p>
                <p style="margin: 0; color: #475569;"><strong style="color: #1e293b;">Subject:</strong> ${formData.subject}</p>
              </div>
            </div>
            
            <div style="background-color: #ffffff; padding: 25px; border: 1px solid #e2e8f0; border-radius: 12px; border-left: 4px solid #10b981;">
              <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px;">Message:</h3>
              <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px;">
                <p style="line-height: 1.7; color: #475569; margin: 0; white-space: pre-wrap;">${formData.message}</p>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 14px; margin: 0;">
                📧 This email was sent from your ForgeNest website contact form.<br>
                📅 Received: ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      `,
    });

    // Send confirmation email to user
    const confirmationEmail = await resend.emails.send({
      from: "noreply@forgenestservices.com.np", // Your verified domain
      to: [formData.email],
      subject: "Thank you for contacting us!",
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header with Logo -->
          <div style="text-align: center; padding: 40px 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
            <img src="https://res.cloudinary.com/dpnhdq9eg/image/upload/v1756144318/Primary_RGB_kwha6h.png" alt="ForgeNest Logo" style="height: 70px; width: auto; margin-bottom: 20px;" />
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 600;">Thank You!</h1>
            <p style="color: rgba(255, 255, 255, 0.9); margin: 10px 0 0 0; font-size: 16px;">We've received your message</p>
          </div>
          
          <!-- Content -->
          <div style="padding: 40px 30px;">
            <div style="margin-bottom: 30px;">
              <h2 style="color: #1e293b; margin: 0 0 15px 0; font-size: 20px;">Dear ${formData.name},</h2>
              <p style="line-height: 1.7; color: #475569; margin: 0 0 25px 0; font-size: 16px;">
                Thank you for reaching out to us! We have received your inquiry about 
                "<strong style="color: #1e293b;">${formData.subject}</strong>" and our team will review your message shortly.
              </p>
            </div>
            
            <!-- Summary Box -->
            <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); padding: 25px; border-radius: 12px; margin-bottom: 30px; border: 1px solid #bae6fd;">
              <div style="display: flex; align-items: center; margin-bottom: 15px;">
                <div style="background-color: #0ea5e9; width: 6px; height: 6px; border-radius: 50%; margin-right: 12px;"></div>
                <h3 style="color: #0c4a6e; margin: 0; font-size: 18px; font-weight: 600;">Your Submission Summary</h3>
              </div>
              <div style="background-color: rgba(255, 255, 255, 0.8); padding: 20px; border-radius: 8px;">
                <p style="margin: 0; color: #0c4a6e;"><strong>Subject:</strong> ${formData.subject}</p>
                <p style="margin: 8px 0 0 0; color: #0c4a6e;"><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
              </div>
            </div>
            
            <!-- What's Next Box -->
            <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); padding: 25px; border-radius: 12px; border: 1px solid #bbf7d0; margin-bottom: 30px;">
              <div style="display: flex; align-items: center; margin-bottom: 15px;">
                <div style="background-color: #22c55e; width: 6px; height: 6px; border-radius: 50%; margin-right: 12px;"></div>
                <h3 style="color: #14532d; margin: 0; font-size: 18px; font-weight: 600;">What's Next?</h3>
              </div>
              <div style="background-color: rgba(255, 255, 255, 0.8); padding: 20px; border-radius: 8px;">
                <p style="margin: 0; color: #166534; line-height: 1.6;">
                  ⏰ Our team typically responds within <strong>24-48 hours</strong><br>
                  📧 We'll get back to you at <strong>${formData.email}</strong><br>
                  🚀 Expect a detailed response to your inquiry
                </p>
              </div>
            </div>
            
            <!-- Contact Info -->
            <div style="background-color: #f8fafc; padding: 25px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
              <p style="color: #475569; margin: 0 0 15px 0; font-size: 16px;">
                Have urgent questions? Contact us directly:
              </p>
              <p style="margin: 0;">
                <a href="mailto:forgenestservices@gmail.com" style="color: #3b82f6; text-decoration: none; font-weight: 600;">forgenestservices@gmail.com</a>
              </p>
            </div>
            
            <!-- Signature -->
            <div style="text-align: center; padding: 25px 0;">
              <p style="color: #64748b; font-size: 16px; margin: 0 0 5px 0;">Best regards,</p>
              <p style="color: #1e293b; font-size: 18px; font-weight: 600; margin: 0;">The ForgeNest Team</p>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #f1f5f9; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 12px; margin: 0;">
              This is an automated confirmation email. Please do not reply to this message.<br>
              © ${new Date().getFullYear()} ForgeNest. All rights reserved.
            </p>
          </div>
        </div>
      `,
    });

    console.log('Company email result:', companyEmail);
    console.log('Confirmation email result:', confirmationEmail);

    if (companyEmail.error || confirmationEmail.error) {
      console.error('Email errors:', { 
        companyEmailError: companyEmail.error, 
        confirmationEmailError: confirmationEmail.error 
      });
      throw new Error(`Failed to send email: ${companyEmail.error?.message || confirmationEmail.error?.message}`);
    }

    return {
      success: true,
      message: "Your message has been sent successfully!",
    };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      success: false,
      message:
        "Sorry, there was an error sending your message. Please try again later.",
    };
  }
}
