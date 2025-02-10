import type { Request, Response } from "express";

// Mock data
type Item = {
  id: number;
  name: string;
  category: string;
  price: number;
};

const mockData: Item[] = [
  { id: 1, name: "Apple", category: "Fruit", price: 1.2 },
  { id: 2, name: "Banana", category: "Fruit", price: 0.5 },
  { id: 3, name: "Orange", category: "Fruit", price: 1.0 },
  { id: 4, name: "Grapes", category: "Fruit", price: 2.5 },
  { id: 5, name: "Mango", category: "Fruit", price: 1.8 },
  { id: 6, name: "Carrot", category: "Vegetable", price: 0.8 },
  { id: 7, name: "Broccoli", category: "Vegetable", price: 1.5 },
  { id: 8, name: "Chicken Breast", category: "Meat", price: 5.0 },
  { id: 9, name: "Salmon", category: "Fish", price: 10.0 },
  { id: 10, name: "Milk", category: "Dairy", price: 1.3 }
];

export const MockData = (req: Request, res: Response) => {
  res.status(200).json(mockData);
};