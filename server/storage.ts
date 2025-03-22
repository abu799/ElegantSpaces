import { 
  users, 
  contactSubmissions, 
  portfolioProjects, 
  services, 
  type User, 
  type InsertUser,
  type Contact,
  type InsertContact,
  type Portfolio,
  type InsertPortfolio,
  type Service,
  type InsertService
} from "@shared/schema";

// Interface for storage operations
export interface IStorage {
  // User methods (kept from original)
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact submission methods
  createContactSubmission(submission: InsertContact): Promise<Contact>;
  getContactSubmissions(): Promise<Contact[]>;
  
  // Portfolio methods
  getPortfolioProjects(): Promise<Portfolio[]>;
  getPortfolioProjectsByCategory(category: string): Promise<Portfolio[]>;
  
  // Service methods
  getServices(): Promise<Service[]>;
  getServiceById(id: number): Promise<Service | undefined>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private portfolios: Map<number, Portfolio>;
  private serviceItems: Map<number, Service>;
  private currentId: { [key: string]: number };

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.portfolios = new Map();
    this.serviceItems = new Map();
    this.currentId = {
      users: 1,
      contacts: 1,
      portfolios: 1,
      services: 1
    };
  }

  // User methods (kept from original)
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId.users++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Contact submission methods
  async createContactSubmission(submission: InsertContact): Promise<Contact> {
    const id = this.currentId.contacts++;
    const contact: Contact = { 
      ...submission, 
      id, 
      phone: submission.phone || null,
      createdAt: new Date() 
    };
    this.contacts.set(id, contact);
    return contact;
  }
  
  async getContactSubmissions(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }
  
  // Portfolio methods
  async getPortfolioProjects(): Promise<Portfolio[]> {
    return Array.from(this.portfolios.values());
  }
  
  async getPortfolioProjectsByCategory(category: string): Promise<Portfolio[]> {
    return Array.from(this.portfolios.values()).filter(
      (project) => project.category === category
    );
  }
  
  // Service methods
  async getServices(): Promise<Service[]> {
    return Array.from(this.serviceItems.values());
  }
  
  async getServiceById(id: number): Promise<Service | undefined> {
    return this.serviceItems.get(id);
  }
}

export const storage = new MemStorage();
