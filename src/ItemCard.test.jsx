import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest"; 
import { ItemCard } from "./ItemCard";

describe("ItemCard Component", () => {
  test("renders the task title, description, and status", () => {
    const mockTask = {
      title: "Task 1",
      description: "Description 1",
      status: "pending",
    };

    render(<ItemCard {...mockTask} />);

    expect(screen.getByText(mockTask.title)).toBeInTheDocument();
    expect(screen.getByText(mockTask.description)).toBeInTheDocument();
    expect(screen.getByText(mockTask.status.toUpperCase())).toBeInTheDocument();
  });

  test("applies correct formatting for 'done' status", () => {
    const mockTask = {
      title: "Task 1",
      description: "Description 1",
      status: "done",
    };

    render(<ItemCard {...mockTask} />);

    const titleElement = screen.getByText(mockTask.title);
    const statusElement = screen.getByText(mockTask.status.toUpperCase());

    expect(titleElement).toHaveStyle("text-decoration: line-through");

    expect(statusElement).toHaveStyle("background-color: green");
  });

  test("applies correct formatting for 'in progress' status", () => {
    const mockTask = {
      title: "Task 2",
      description: "Description 2",
      status: "in progress",
    };

    render(<ItemCard {...mockTask} />);

    const titleElement = screen.getByText(mockTask.title);
    const statusElement = screen.getByText(mockTask.status.toUpperCase());

    expect(titleElement).toHaveStyle("font-weight: bold");

    expect(statusElement).toHaveStyle("background-color: blue");
  });

  test("applies correct formatting for 'pending' status", () => {
    const mockTask = {
      title: "Task 3",
      description: "Description 3",
      status: "pending",
    };

    render(<ItemCard {...mockTask} />);

    const titleElement = screen.getByText(mockTask.title);
    const statusElement = screen.getByText(mockTask.status.toUpperCase());

    expect(titleElement).not.toHaveStyle("font-weight: bold");
    expect(titleElement).not.toHaveStyle("text-decoration: line-through");

    expect(statusElement).toHaveStyle("background-color: grey");
  });
});