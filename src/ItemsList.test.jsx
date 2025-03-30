import { render, screen } from "@testing-library/react";
import { ItemsList } from "./ItemsList";
import { describe, test, expect } from "vitest"; 


describe("ItemsList Component", () => {
  test("renders an empty list without crashing", () => {
    render(<ItemsList itemsList={[]} />);
    
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
    expect(listElement.children.length).toBe(0); 
  });

  test("renders a list of tasks correctly", () => {
    const mockTasks = [
      { id: 1, title: "Task 1", description: "Description 1", status: "pending" },
      { id: 2, title: "Task 2", description: "Description 2", status: "done" },
    ];

    render(<ItemsList itemsList={mockTasks} />);
    
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(mockTasks.length); 
    
    mockTasks.forEach((task) => {
      expect(screen.getByText(task.title)).toBeInTheDocument();
      expect(screen.getByText(task.description)).toBeInTheDocument();
    });
  });
});