import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    subtitle: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      enum: ['fullstack', 'backend', 'systems', 'ai', 'all'],
      default: 'fullstack',
    },
    description: {
      type: String,
      required: true,
    },
    bullets: [{ type: String }],
    techStack: [{ type: String }],
    githubUrl: {
      type: String,
      default: '',
    },
    liveUrl: {
      type: String,
      default: '',
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const Project = mongoose.model('Project', projectSchema);
