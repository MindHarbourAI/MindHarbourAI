/**
 * MindHarborAI Ecosystem Product Destination URLs
 * 
 * Configure these URLs in your environment variables (.env / cloud deployment settings):
 * - VITE_SAILANCHOR_URL: Production / Cloud URL for SailAnchor landing page & web app
 * - VITE_SAILTASK_URL: Production / Cloud URL for SailTask landing page & web app
 */

export const PRODUCT_URLS = {
  sailanchor: import.meta.env.VITE_SAILANCHOR_URL || 'http://localhost:3000',
  sailtask: import.meta.env.VITE_SAILTASK_URL || 'http://localhost:3001',
}
