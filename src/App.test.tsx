import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/vitest'


describe("App tests", () => {
    test("Component Renders", () => {
        render(<App />);
        expect(screen.getByText(/Car Shop/i)).toBeInTheDocument();
    });
});