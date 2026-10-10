import express from 'express';
import mongoose from 'mongoose';
import { Message } from '../models/Message.js';
import { Project } from '../models/Project.js';
import { initialProjects, initialSkills } from '../data/portfolioSeed.js';

const router = express.Router();

// In-memory fallback stores when MongoDB is not active
const inMemoryMessages = [];

// @route   GET /api/health
// @desc    Check API and DB status
router.get('/health', (req, res) => {
  const isDbConnected = mongoose.connection.readyState === 1;
  res.status(200).json({
    status: 'online',
    timestamp: new Date().toISOString(),
    database: isDbConnected ? 'MongoDB (Connected)' : 'In-Memory Fallback',
    profile: {
      name: 'Mohan R',
      role: 'Full Stack Developer',
      college: 'National Engineering College, Kovilpatti'
    }
  });
});

// @route   GET /api/projects
// @desc    Get all portfolio projects
router.get('/projects', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const dbProjects = await Project.find().sort({ order: 1 });
      if (dbProjects && dbProjects.length > 0) {
        return res.status(200).json({ success: true, count: dbProjects.length, data: dbProjects });
      }
    }
    // Return seeded projects if DB is empty or disconnected
    return res.status(200).json({ success: true, count: initialProjects.length, data: initialProjects });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(200).json({ success: true, count: initialProjects.length, data: initialProjects });
  }
});

// @route   GET /api/skills
// @desc    Get organized skill groupings
router.get('/skills', (req, res) => {
  res.status(200).json({
    success: true,
    data: initialSkills
  });
});

// @route   POST /api/contact
// @desc    Receive a message from the contact form
router.post('/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email, and message.'
      });
    }

    const newMessageData = {
      name: name.trim(),
      email: email.trim(),
      subject: subject ? subject.trim() : 'Portfolio Contact',
      message: message.trim(),
      ipAddress: req.ip || req.headers['x-forwarded-for'] || '',
      createdAt: new Date()
    };

    if (mongoose.connection.readyState === 1) {
      const savedMessage = await Message.create(newMessageData);
      return res.status(201).json({
        success: true,
        message: 'Your message has been sent and saved successfully!',
        data: savedMessage
      });
    } else {
      // In-memory fallback
      inMemoryMessages.push(newMessageData);
      return res.status(201).json({
        success: true,
        message: 'Your message has been received successfully!',
        data: newMessageData
      });
    }
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again or email directly.'
    });
  }
});

// @route   GET /api/contact/messages
// @desc    Retrieve saved contact messages
router.get('/contact/messages', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const messages = await Message.find().sort({ createdAt: -1 }).limit(50);
      return res.status(200).json({ success: true, count: messages.length, data: messages });
    }
    return res.status(200).json({ success: true, count: inMemoryMessages.length, data: inMemoryMessages });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error retrieving messages' });
  }
});

export default router;
