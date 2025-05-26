import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for form submission
  app.post('/api/enquiry', async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;
      
      // Validate the input
      if (!name || !email || !phone || !message) {
        return res.status(400).json({ 
          success: false, 
          message: 'All fields are required' 
        });
      }
      
      // In a real implementation, you would save this to a database
      // or send an email notification
      
      return res.status(200).json({ 
        success: true, 
        message: 'Enquiry submitted successfully' 
      });
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      return res.status(500).json({ 
        success: false, 
        message: 'An error occurred while submitting your enquiry' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
