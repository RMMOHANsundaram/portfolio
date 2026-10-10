import { portfolioData } from '../data/portfolioData';

const API_BASE = '/api';

export const fetchProjects = async () => {
  try {
    const res = await fetch(`${API_BASE}/projects`);
    if (!res.ok) throw new Error('API fetch failed');
    const data = await res.json();
    return data.data || portfolioData.projects;
  } catch (err) {
    console.log('[Info] Using local data for projects');
    return portfolioData.projects;
  }
};

export const fetchSkills = async () => {
  try {
    const res = await fetch(`${API_BASE}/skills`);
    if (!res.ok) throw new Error('API fetch failed');
    const data = await res.json();
    return data.data || portfolioData.skills;
  } catch (err) {
    return portfolioData.skills;
  }
};

export const sendContactMessage = async (messageData) => {
  try {
    const res = await fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(messageData),
    });
    const result = await res.json();
    return result;
  } catch (err) {
    // If backend is not running or offline, return simulated success + mailto fallback
    return {
      success: true,
      offline: true,
      message: 'Message dispatched! Opening your email client as fallback.',
    };
  }
};
