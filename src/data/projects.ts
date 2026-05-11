export type Category = 'All' | 'Residential' | 'Commercial' | 'Luxury';

export interface Project {
  id: string;
  title: string;
  category: Category;
  image: string;
  location: string;
  description: string;
}

export const categories: Category[] = ['All', 'Residential', 'Commercial', 'Luxury'];

export const projects: Project[] = [
  {
    id: '1',
    title: 'The Obsidian Penthouse',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    location: 'Manhattan, NY',
    description: 'A striking blend of dark tones and warm textures overlooking the city skyline.'
  },
  {
    id: '2',
    title: 'Aura Boutique Hotel',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    location: 'Miami, FL',
    description: 'Ethereal spaces designed to evoke a sense of calm and rejuvenation.'
  },
  {
    id: '3',
    title: 'Lumina Residence',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    location: 'Austin, TX',
    description: 'Modern family home focused on natural light and open, flowing spaces.'
  },
  {
    id: '4',
    title: 'Nexus Tech HQ',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    location: 'San Francisco, CA',
    description: 'A cutting-edge workspace prioritizing collaboration and employee wellbeing.'
  },
  {
    id: '5',
    title: 'The Vertex Estate',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    location: 'Beverly Hills, CA',
    description: 'Uncompromising luxury with bespoke finishes and panoramic views.'
  },
  {
    id: '6',
    title: 'Solstice Loft',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    location: 'Brooklyn, NY',
    description: 'Industrial chic transformed into a warm, inviting urban sanctuary.'
  }
];
